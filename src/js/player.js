import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Player {
    constructor(game) {
        this.game = game;
        this.model = null;
        this.mixer = null;
        this.animations = {};
        
        // Status do jogador
        this.maxHealth = 100;
        this.health = 100;
        this.attackPower = 20;
        this.speed = 5;
        this.runMultiplier = 1.5;
        
        // Estado atual
        this.currentAnimation = 'idle';
        this.isMoving = false;
        this.isRunning = false;
        this.isAttacking = false;
        this.isHit = false;
        this.isDead = false;
        
        // Grupo para rotação e posição
        this.group = new THREE.Group();
        this.game.scene.add(this.group);
        
        // Direção e movimento
        this.direction = new THREE.Vector3();
        this.rotation = new THREE.Quaternion();
        this.targetRotation = new THREE.Quaternion();
        this.position = new THREE.Vector3(0, 0, 0);
        this.up = new THREE.Vector3(0, 1, 0);
    }
    
    load(callback) {
        const loader = new GLTFLoader();
        
        // Carregar modelo do jogador (usando o modelo do exemplo)
        // Na produção, substitua pela URL correta do seu modelo
        loader.load('https://threejs.org/examples/models/gltf/Soldier.glb', (gltf) => {
            this.model = gltf.scene;
            this.group.add(this.model);
            
            // Configurar sombras
            this.model.traverse((object) => {
                if (object.isMesh) {
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
                callback();
            }
        }, 
        // Função de progresso do carregamento
        (xhr) => {
            const progress = (xhr.loaded / xhr.total) * 100;
            console.log(`Carregando modelo do jogador: ${Math.round(progress)}%`);
        },
        // Função de erro
        (error) => {
            console.error('Erro ao carregar o modelo do jogador:', error);
        });
    }
    
    playAnimation(name) {
        if (this.isDead && name !== 'death') return;
        
        if (this.currentAnimation === name) return;
        
        const current = this.animations[name];
        const old = this.animations[this.currentAnimation];
        
        this.currentAnimation = name;
        
        current.reset();
        current.setEffectiveWeight(1.0);
        current.play();
        
        if (old) {
            old.crossFadeTo(current, 0.5, true);
        }
    }
    
    update(delta) {
        if (this.isDead) return;
        
        const keyStates = this.game.keyStates;
        const orbitControls = this.game.orbitControls;
        
        // Determinar movimento
        this.isMoving = (keyStates.up || keyStates.down || keyStates.left || keyStates.right);
        this.isRunning = keyStates.shift && this.isMoving;
        
        // Atualizar animação com base no movimento
        if (this.isAttacking) {
            // Continuar animação de ataque
        } else if (this.isMoving) {
            if (this.isRunning && this.currentAnimation !== 'run') {
                this.playAnimation('run');
            } else if (!this.isRunning && this.currentAnimation !== 'walk') {
                this.playAnimation('walk');
            }
        } else if (this.currentAnimation !== 'idle') {
            this.playAnimation('idle');
        }
        
        // Atualizar movimento
        if (this.isMoving && this.model) {
            // Direção com base nas teclas
            const direction = new THREE.Vector3();
            
            if (keyStates.up) direction.z -= 1;
            if (keyStates.down) direction.z += 1;
            if (keyStates.left) direction.x -= 1;
            if (keyStates.right) direction.x += 1;
            
            direction.normalize();
            
            // Aplicar rotação da câmera na direção
            const cameraAngle = orbitControls.getAzimuthalAngle();
            direction.applyAxisAngle(this.up, cameraAngle);
            
            // Rotacionar modelo na direção do movimento
            if (direction.lengthSq() > 0) {
                // Abordagem alternativa: invertendo os argumentos de Math.atan2
                const angle = Math.atan2(-direction.x, -direction.z);
                this.targetRotation.setFromAxisAngle(this.up, angle);
                this.model.quaternion.rotateTowards(this.targetRotation, delta * 10);
            }
            
            // Calcular velocidade
            const speed = this.isRunning ? this.speed * this.runMultiplier : this.speed;
            
            // Atualizar posição
            direction.multiplyScalar(speed * delta);
            this.model.position.add(direction);
            
            // Atualizar câmera
            this.game.camera.position.add(direction);
            orbitControls.target.copy(this.model.position).add(new THREE.Vector3(0, 1, 0));
        }
    }
    
    attack() {
        if (this.isAttacking || this.isDead) return;
        
        this.isAttacking = true;
        this.playAnimation('attack');
        
        // Resetar estado após a animação
        setTimeout(() => {
            this.isAttacking = false;
            this.playAnimation(this.isMoving ? (this.isRunning ? 'run' : 'walk') : 'idle');
        }, 1000); // Duração da animação de ataque
    }
    
    takeDamage(amount) {
        if (this.isDead) return;
        
        this.health -= amount;
        this.isHit = true;
        
        // Piscar o modelo ao ser atingido
        if (this.model) {
            const flashInterval = setInterval(() => {
                if (this.model.visible) {
                    this.model.visible = false;
                } else {
                    this.model.visible = true;
                }
            }, 100);
            
            setTimeout(() => {
                clearInterval(flashInterval);
                this.model.visible = true;
                this.isHit = false;
            }, 500);
        }
        
        if (this.health <= 0) {
            this.health = 0;
            this.die();
        }
    }
    
    die() {
        this.isDead = true;
        this.playAnimation('idle'); // Substitua por animação de morte quando disponível
        
        // Rotacionar modelo para cair
        if (this.model) {
            this.model.rotation.x = Math.PI / 2;
        }
    }
} 