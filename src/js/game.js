import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

import { Player } from './player.js';
import { Enemy } from './enemy.js';
import { World } from './world.js';
import { UI } from './ui.js';

export class Game {
    constructor() {
        // Propriedades principais
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        this.mixer = null;
        
        // Controles e inputs
        this.controls = null;
        this.orbitControls = null;
        this.keyStates = {
            up: false,
            down: false,
            left: false,
            right: false,
            shift: false,
            space: false
        };
        
        // Entidades do jogo
        this.player = null;
        this.enemies = [];
        this.world = null;
        this.ui = null;
        
        // Configurações do jogo
        this.isRunning = false;
        this.playerLevel = 1;
        this.playerXP = 0;
        this.nextLevelXP = 100;
    }
    
    init() {
        this.setupScene();
        this.setupLights();
        this.setupControls();
        this.setupEventListeners();
        
        this.world = new World(this);
        this.world.load();
        
        this.player = new Player(this);
        this.player.load(() => {
            this.ui = new UI(this);
            this.ui.init();
            
            this.spawnEnemies(5);
            
            this.isRunning = true;
            this.animate();
            
            // Esconder tela de carregamento
            document.getElementById('loading').style.display = 'none';
        });
    }
    
    setupScene() {
        // Criar cena, câmera e renderer
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87ceeb); // Cor de céu
        
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 2, 5);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        
        document.getElementById('container').appendChild(this.renderer.domElement);
    }
    
    setupLights() {
        // Luz ambiente
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        // Luz direcional (sol)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        
        // Configurar sombras
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -20;
        directionalLight.shadow.camera.right = 20;
        directionalLight.shadow.camera.top = 20;
        directionalLight.shadow.camera.bottom = -20;
        
        this.scene.add(directionalLight);
    }
    
    setupControls() {
        // Configurar controles de órbita
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.enableDamping = true;
        this.orbitControls.dampingFactor = 0.05;
        this.orbitControls.screenSpacePanning = false;
        this.orbitControls.minDistance = 3;
        this.orbitControls.maxDistance = 10;
        this.orbitControls.maxPolarAngle = Math.PI / 2 - 0.1;
    }
    
    setupEventListeners() {
        // Redimensionar janela
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Controles de teclado
        window.addEventListener('keydown', (event) => {
            switch(event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.keyStates.up = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.keyStates.down = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.keyStates.left = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.keyStates.right = true;
                    break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    this.keyStates.shift = true;
                    break;
                case 'Space':
                    this.keyStates.space = true;
                    break;
            }
        });
        
        window.addEventListener('keyup', (event) => {
            switch(event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.keyStates.up = false;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.keyStates.down = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.keyStates.left = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.keyStates.right = false;
                    break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    this.keyStates.shift = false;
                    break;
                case 'Space':
                    this.keyStates.space = false;
                    break;
            }
        });
    }
    
    spawnEnemies(count) {
        if (!this.scene) {
            console.error("Tentativa de criar inimigos sem uma cena válida");
            return;
        }
        
        this.enemies = this.enemies || [];
        let enemiesLoaded = 0;
        
        const checkAllLoaded = () => {
            enemiesLoaded++;
            // Se todos os inimigos foram carregados, podemos continuar
            if (enemiesLoaded === count) {
                console.log('Todos os inimigos foram carregados!');
            }
        };
        
        try {
            for (let i = 0; i < count; i++) {
                const enemy = new Enemy(this);
                
                // Posicionar inimigos aleatoriamente
                const randomX = (Math.random() - 0.5) * 40;
                const randomZ = (Math.random() - 0.5) * 40;
                
                enemy.position = new THREE.Vector3(randomX, 0, randomZ);
                
                try {
                    enemy.load(checkAllLoaded);
                } catch (error) {
                    console.error("Erro ao carregar inimigo:", error);
                }
                
                this.enemies.push(enemy);
            }
        } catch (error) {
            console.error("Erro ao criar inimigos:", error);
        }
    }
    
    addXP(amount) {
        if (!this.player) {
            console.error("Tentativa de adicionar XP sem um jogador válido");
            return;
        }
        
        try {
            this.playerXP += amount;
            if (this.playerXP >= this.nextLevelXP) {
                this.levelUp();
            }
            
            if (this.ui) {
                this.ui.updateStats();
            }
        } catch (error) {
            console.error("Erro ao adicionar XP:", error);
        }
    }
    
    levelUp() {
        if (!this.player) {
            console.error("Tentativa de aumentar nível sem um jogador válido");
            return;
        }
        
        try {
            this.playerLevel++;
            this.playerXP = this.playerXP - this.nextLevelXP;
            this.nextLevelXP = Math.floor(this.nextLevelXP * 1.5); // Aumenta XP necessário
            
            // Melhorar status do jogador
            this.player.health = this.player.maxHealth;
            this.player.maxHealth += 20;
            this.player.attackPower += 5;
            
            if (this.ui) {
                this.ui.showMessage("LEVEL UP! Você está no nível " + this.playerLevel);
                this.ui.updateStats();
            }
        } catch (error) {
            console.error("Erro ao aumentar nível do jogador:", error);
        }
    }
    
    checkCollisions() {
        // Verificar se o jogador e seu modelo estão definidos
        if (!this.player || !this.player.model || !this.player.model.position) return;
        
        try {
            // Verificar colisão entre o jogador e os inimigos
            const playerPosition = this.player.model.position.clone();
            
            if (!this.enemies) return;
            
            for (let i = 0; i < this.enemies.length; i++) {
                const enemy = this.enemies[i];
                if (!enemy || enemy.isDead || !enemy.model || !enemy.model.position) continue;
                
                try {
                    const enemyPosition = enemy.model.position.clone();
                    const distance = playerPosition.distanceTo(enemyPosition);
                    
                    // Distância para colisão
                    if (distance < 1.5) {
                        // Se o jogador está atacando
                        if (this.keyStates.space && !this.player.isAttacking) {
                            try {
                                // Chamar o método attack do jogador
                                this.player.attack();
                            } catch (error) {
                                console.error("Erro ao executar ataque do jogador:", error);
                                // Definir estado manualmente em caso de erro
                                this.player.isAttacking = true;
                                setTimeout(() => {
                                    this.player.isAttacking = false;
                                }, 1000);
                            }
                            
                            // Aplicar dano ao inimigo
                            try {
                                // Verificar se o método takeDamage existe
                                if (typeof enemy.takeDamage === 'function') {
                                    enemy.takeDamage(this.player.attackPower || 20);
                                } else {
                                    // Aplicar dano manualmente
                                    enemy.health = (enemy.health || 50) - (this.player.attackPower || 20);
                                    if (enemy.health <= 0) {
                                        enemy.health = 0;
                                        enemy.isDead = true;
                                        
                                        // Visualizar a morte
                                        if (enemy.model) {
                                            enemy.model.rotation.x = Math.PI / 2;
                                            enemy.model.position.y = -0.5;
                                        }
                                    }
                                }
                                
                                // Verificar se o inimigo morreu
                                if (enemy.isDead) {
                                    this.addXP(enemy.xpValue || 25);
                                    this.ui.showMessage(`Você derrotou um inimigo! +${enemy.xpValue || 25} XP`);
                                    
                                    // Respawn do inimigo após um tempo
                                    setTimeout(() => {
                                        this.respawnEnemy(enemy);
                                    }, 10000);
                                }
                            } catch (error) {
                                console.error("Erro ao aplicar dano ao inimigo:", error);
                            }
                        }
                        // Se o inimigo pode atacar o jogador
                        else if (!enemy.isAttacking && !this.player.isHit) {
                            try {
                                // Tentar chamar o método attack do inimigo
                                if (typeof enemy.attack === 'function') {
                                    enemy.attack();
                                } else {
                                    // Fallback: gerenciar estado diretamente
                                    console.warn("Método attack não encontrado no inimigo, usando fallback");
                                    enemy.isAttacking = true;
                                    
                                    // Se tivermos o método de animação, usá-lo
                                    if (typeof enemy.playAnimation === 'function') {
                                        try {
                                            enemy.playAnimation('attack');
                                        } catch (error) {
                                            console.error("Erro ao executar animação de ataque:", error);
                                        }
                                    }
                                    
                                    // Resetar estado após um tempo
                                    setTimeout(() => {
                                        enemy.isAttacking = false;
                                        
                                        // Tentar restaurar a animação
                                        if (typeof enemy.playAnimation === 'function') {
                                            try {
                                                enemy.playAnimation(enemy.isMoving ? 'walk' : 'idle');
                                            } catch (error) {
                                                console.error("Erro ao restaurar animação do inimigo:", error);
                                            }
                                        }
                                    }, 1000);
                                }
                                
                                // Aplicar dano ao jogador
                                this.player.takeDamage(enemy.attackPower || 10);
                                this.ui.updateStats();
                                
                                if (this.player.isDead) {
                                    this.gameOver();
                                }
                            } catch (error) {
                                console.error("Erro ao processar ataque do inimigo:", error);
                                // Resetar estado em caso de erro
                                enemy.isAttacking = false;
                            }
                        }
                    }
                } catch (error) {
                    console.error("Erro ao processar colisão com inimigo:", error);
                }
            }
        } catch (error) {
            console.error("Erro no método checkCollisions:", error);
        }
    }
    
    respawnEnemy(enemy) {
        if (!this.isRunning || !enemy) return;
        
        try {
            enemy.isDead = false;
            enemy.health = enemy.maxHealth || 50;
            
            // Nova posição aleatória
            const randomX = (Math.random() - 0.5) * 40;
            const randomZ = (Math.random() - 0.5) * 40;
            
            // Verificar se o modelo existe
            if (enemy.model) {
                enemy.model.position.set(randomX, 0, randomZ);
                enemy.model.rotation.x = 0; // Restaurar a rotação normal
            } else {
                console.error("Tentativa de mover um inimigo sem modelo");
                // Armazenar posição para uso futuro
                enemy.position = new THREE.Vector3(randomX, 0, randomZ);
                return;
            }
            
            // Resetar animação se o método existir
            if (typeof enemy.playAnimation === 'function') {
                try {
                    enemy.playAnimation('idle');
                } catch (error) {
                    console.error("Erro ao restaurar animação de inimigo no respawn:", error);
                }
            }
        } catch (error) {
            console.error("Erro ao respawnar inimigo:", error);
        }
    }
    
    gameOver() {
        this.isRunning = false;
        this.ui.showMessage("GAME OVER! Recarregue a página para jogar novamente.");
    }
    
    animate() {
        if (!this.isRunning) return;
        
        requestAnimationFrame(() => this.animate());
        
        try {
            const delta = this.clock.getDelta();
            
            // Atualizar mixers de animação
            if (this.player && this.player.mixer) {
                try {
                    this.player.mixer.update(delta);
                } catch (error) {
                    console.error("Erro ao atualizar mixer do jogador:", error);
                }
            }
            
            if (this.enemies && this.enemies.length > 0) {
                this.enemies.forEach(enemy => {
                    if (enemy && enemy.mixer) {
                        try {
                            enemy.mixer.update(delta);
                        } catch (error) {
                            console.error("Erro ao atualizar mixer do inimigo:", error);
                        }
                    }
                });
                
                // Atualizar personagens
                if (this.player && this.player.model) {
                    try {
                        this.player.update(delta);
                    } catch (error) {
                        console.error("Erro ao atualizar jogador:", error);
                    }
                }
                
                this.enemies.forEach(enemy => {
                    if (enemy && enemy.model) {
                        try {
                            enemy.update(delta);
                        } catch (error) {
                            console.error("Erro ao atualizar inimigo:", error);
                        }
                    }
                });
                
                // Verificar colisões apenas se o player estiver carregado
                if (this.player && this.player.model && this.player.model.position) {
                    try {
                        this.checkCollisions();
                    } catch (error) {
                        console.error("Erro ao verificar colisões:", error);
                    }
                }
            }
            
            // Atualizar controles
            if (this.orbitControls) {
                try {
                    this.orbitControls.update();
                } catch (error) {
                    console.error("Erro ao atualizar controles:", error);
                }
            }
            
            // Renderizar cena
            if (this.renderer && this.scene && this.camera) {
                try {
                    this.renderer.render(this.scene, this.camera);
                } catch (error) {
                    console.error("Erro ao renderizar cena:", error);
                }
            }
        } catch (error) {
            console.error("Erro no loop de animação:", error);
        }
    }
} 