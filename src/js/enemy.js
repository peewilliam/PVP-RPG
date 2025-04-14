import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Enemy {
    constructor(game) {
        this.game = game;
        this.model = null;
        this.mixer = null;
        this.animations = {};
        
        // Status do inimigo
        this.maxHealth = 50;
        this.health = 50;
        this.attackPower = 10;  // Renomeado de attack para attackPower
        this.speed = 2;
        this.xpValue = 25;
        this.detectionRange = 10;
        
        // Estado atual
        this.currentAnimation = 'idle';
        this.isMoving = false;
        this.isAttacking = false;
        this.isHit = false;
        this.isDead = false;
        
        // Posição
        this.position = new THREE.Vector3(0, 0, 0);
        this.targetPosition = new THREE.Vector3();
        this.up = new THREE.Vector3(0, 1, 0);
        
        // IA
        this.lastAIUpdate = 0;
        this.aiUpdateInterval = 1; // Segundos entre atualizações da IA
        this.targetPlayer = false;
        this.wanderTime = 0;
        this.wanderTarget = new THREE.Vector3();
    }
    
    load(callback) {
        const loader = new GLTFLoader();
        
        // Carregar modelo do inimigo (usando o mesmo modelo do exemplo, mas poderia ser outro)
        // Na produção, substitua pela URL correta do seu modelo
        loader.load('https://threejs.org/examples/models/gltf/Soldier.glb', (gltf) => {
            this.model = gltf.scene;
            this.game.scene.add(this.model);
            
            // Definir posição inicial
            if (this.position) {
                this.model.position.copy(this.position);
            }
            
            // Colorir o modelo de vermelho para diferenciar dos jogadores
            this.model.traverse((object) => {
                if (object.isMesh) {
                    if (object.material) {
                        object.material = object.material.clone();
                        object.material.color.set(0xff0000);
                    }
                    object.castShadow = true;
                    object.receiveShadow = true;
                }
            });
            
            // Configurar animações
            this.mixer = new THREE.AnimationMixer(this.model);
            
            // Armazenar animações
            const animations = gltf.animations;
            this.animations = {
                idle: this.mixer.clipAction(animations[0]),
                walk: this.mixer.clipAction(animations[3]),
                run: this.mixer.clipAction(animations[1]),
                attack: this.mixer.clipAction(animations[2]) // Ajuste para animação correta
            };
            
            // Configurar transições
            for (const animation in this.animations) {
                this.animations[animation].enabled = true;
                this.animations[animation].setEffectiveTimeScale(1);
                this.animations[animation].setEffectiveWeight(0);
            }
            
            // Iniciar com animação 'idle'
            this.playAnimation('idle');
            
            // Chamar o callback quando terminar de carregar
            if (callback && typeof callback === 'function') {
                callback(this);
            }
        },
        // Função de progresso do carregamento
        (xhr) => {
            console.log(`Carregando modelo do inimigo: ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
        },
        // Função de erro
        (error) => {
            console.error('Erro ao carregar o modelo do inimigo:', error);
            if (callback) callback(this);
        });
    }
    
    playAnimation(name) {
        try {
            if (this.isDead && name !== 'death') return;
            
            if (this.currentAnimation === name) return;
            
            if (!this.animations || !this.animations[name]) {
                console.error(`Animação ${name} não encontrada`);
                return;
            }
            
            const current = this.animations[name];
            const old = this.animations[this.currentAnimation];
            
            this.currentAnimation = name;
            
            current.reset();
            current.setEffectiveWeight(1.0);
            current.play();
            
            if (old) {
                old.crossFadeTo(current, 0.5, true);
            }
        } catch (error) {
            console.error("Erro ao executar animação:", error);
        }
    }
    
    update(delta) {
        if (this.isDead || !this.model) return;
        
        // Atualizar comportamento da IA
        this.lastAIUpdate += delta;
        if (this.lastAIUpdate >= this.aiUpdateInterval) {
            this.updateAI();
            this.lastAIUpdate = 0;
        }
        
        // Mover em direção ao alvo
        if (this.isMoving) {
            let direction = new THREE.Vector3();
            
            if (this.targetPlayer) {
                // Verificar se o jogador e seu modelo existem
                if (!this.game.player || !this.game.player.model) {
                    this.targetPlayer = false;
                    this.isMoving = false;
                    return;
                }
                // Mover em direção ao jogador
                direction.subVectors(this.game.player.model.position, this.model.position);
            } else {
                // Mover para o ponto de vagar
                direction.subVectors(this.wanderTarget, this.model.position);
            }
            
            // Se próximo ao alvo, parar de mover
            if (direction.length() < 0.5) {
                this.isMoving = false;
                this.playAnimation('idle');
                
                // Definir novo alvo para vagar
                if (!this.targetPlayer) {
                    this.wanderTime = 0;
                }
            } else {
                direction.normalize();
                
                // Rotacionar inimigo na direção do movimento
                const angle = Math.atan2(direction.x, direction.z);
                const rotation = new THREE.Quaternion();
                rotation.setFromAxisAngle(this.up, angle);
                this.model.quaternion.rotateTowards(rotation, delta * 5);
                
                // Mover
                direction.multiplyScalar(this.speed * delta);
                this.model.position.add(direction);
            }
        }
    }
    
    updateAI() {
        // Verificar se o modelo do inimigo e o modelo do jogador existem
        if (!this.model || !this.game.player || !this.game.player.model) return;
        
        // Verificar distância até o jogador
        const distanceToPlayer = this.model.position.distanceTo(this.game.player.model.position);
        
        // Se o jogador estiver dentro do alcance de detecção
        if (distanceToPlayer < this.detectionRange && !this.game.player.isDead) {
            // Perseguir jogador
            this.targetPlayer = true;
            this.isMoving = true;
            
            // Usar animação de caminhada ou corrida
            if (distanceToPlayer < 5) {
                this.playAnimation('run');
            } else {
                this.playAnimation('walk');
            }
        } else {
            // Comportamento de vagar aleatório
            this.targetPlayer = false;
            
            // Atualizar tempo de vagar
            this.wanderTime += this.aiUpdateInterval;
            
            // Mudar direção a cada 5 segundos
            if (this.wanderTime >= 5 || !this.isMoving) {
                this.wanderTime = 0;
                
                // 50% de chance de ficar parado
                if (Math.random() < 0.5) {
                    this.isMoving = false;
                    this.playAnimation('idle');
                } else {
                    // Mover para um ponto aleatório próximo
                    const randomAngle = Math.random() * Math.PI * 2;
                    const randomDistance = 2 + Math.random() * 3;
                    
                    this.wanderTarget.copy(this.model.position);
                    this.wanderTarget.x += Math.sin(randomAngle) * randomDistance;
                    this.wanderTarget.z += Math.cos(randomAngle) * randomDistance;
                    
                    this.isMoving = true;
                    this.playAnimation('walk');
                }
            }
        }
    }
    
    // IMPORTANTE: Este é o método attack que estava faltando ou com problemas
    attack() {
        try {
            if (this.isAttacking || this.isDead) return;
            
            // Definir estado de ataque
            this.isAttacking = true;
            
            // Executar animação de ataque se possível
            if (this.animations && this.animations.attack) {
                this.playAnimation('attack');
            }
            
            // Resetar estado após a animação
            setTimeout(() => {
                this.isAttacking = false;
                
                // Voltar para animação apropriada
                if (!this.isDead) {
                    this.playAnimation(this.isMoving ? 'walk' : 'idle');
                }
            }, 1000); // Duração da animação de ataque
            
            return true; // Sucesso
        } catch (error) {
            console.error("Erro ao executar ataque do inimigo:", error);
            this.isAttacking = false;
            return false; // Falha
        }
    }
    
    takeDamage(amount) {
        try {
            if (this.isDead) return;
            
            this.health -= amount;
            this.isHit = true;
            
            // Efeito de flash ao ser atingido
            if (this.model) {
                this.model.traverse((object) => {
                    if (object.isMesh && object.material) {
                        object.material.emissive = new THREE.Color(0xffffff);
                        
                        setTimeout(() => {
                            if (object.material) {
                                object.material.emissive = new THREE.Color(0x000000);
                            }
                        }, 100);
                    }
                });
            }
            
            // Resetar hit após um curto intervalo
            setTimeout(() => {
                this.isHit = false;
            }, 200);
            
            if (this.health <= 0) {
                this.health = 0;
                this.die();
            }
        } catch (error) {
            console.error("Erro ao aplicar dano ao inimigo:", error);
        }
    }
    
    die() {
        try {
            this.isDead = true;
            this.isMoving = false;
            this.isAttacking = false;
            
            // Substituir por animação de morte quando disponível
            if (this.animations && this.animations.idle) {
                this.playAnimation('idle');
            }
            
            // Rotacionar para indicar morte
            if (this.model) {
                this.model.rotation.x = Math.PI / 2;
                
                // Colocar modelo dentro do chão
                this.model.position.y = -0.5;
            }
        } catch (error) {
            console.error("Erro ao processar morte do inimigo:", error);
        }
    }
} 