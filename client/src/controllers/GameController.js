// GameController.js
// Classe principal que orquestra todos os componentes do jogo
import * as THREE from 'three';
import { InputController } from './InputController.js';
import { CameraController } from './CameraController.js';
import { SceneManager } from '../managers/SceneManager.js';
import { RenderManager } from '../managers/RenderManager.js';
import { EntityManager } from '../managers/EntityManager.js';
import { NetworkManager } from '../services/NetworkManager.js';
import { MovementPrediction } from '../systems/MovementPrediction.js';
import { SkillManager } from '../skills/SkillManager.js';
import { HUDManager } from '../ui/HUDManager.js';

// Importa as funções de habilidades diretamente dos seus arquivos
import { spawnFireballEffect } from '../skills/FireballSkill.js';
import { spawnTeleportEffect } from '../skills/TeleportSkill.js';
import { spawnIceSpikeEffect } from '../skills/IceSpikeSkill.js';
import { spawnMeteorStormEffect } from '../skills/MeteorStormSkill.js';
import { showWebShotEffect } from '../skills/WebShotSkill.js';

export class GameController {
  constructor(serverConfig) {
    // Configurações
    this.serverConfig = serverConfig;
    
    // Constantes do mundo
    this.worldSize = serverConfig.WORLD.SIZE;
    this.worldBoundaries = serverConfig.WORLD.BOUNDARIES;
    
    // Estado do jogador
    this.playerId = null;
    this.playerDead = false;
    
    // Referencias aos elementos DOM
    this.container = null;
    
    // Managers e Controllers
    this.networkManager = null;
    this.sceneManager = null;
    this.inputController = null;
    this.cameraController = null;
    this.renderManager = null;
    this.entityManager = null;
    this.hudManager = null;
    this.skillManager = null;
    this.movementPrediction = null;
    
    // Bind dos métodos
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.requestServerSync = this.requestServerSync.bind(this);
    this.blockDeadInputHandler = this.blockDeadInputHandler.bind(this);
  }
  
  // Inicializa o jogo
  initialize(container) {
    this.container = container;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log(`Iniciando jogo na porta: ${this.serverConfig.PORT}`);
    
    // --- Instanciação dos componentes ---
    
    // 1. Gerenciador de Rede
    this.networkManager = new NetworkManager(this.serverConfig);
    
    // 2. HUD Manager (Precisa ser inicializado primeiro pois outros componentes dependem dele)
    this.hudManager = new HUDManager();
    
    // 3. Input Controller
    this.inputController = new InputController();
    
    // 4. Camera Controller
    this.cameraController = new CameraController();
    this.cameraController.setup(width, height);
    
    // 5. Scene Manager
    this.sceneManager = new SceneManager(this.worldSize, this.worldBoundaries);
    this.sceneManager.initialize(container, width, height);
    this.sceneManager.setCamera(this.cameraController.camera);
    
    // 6. Render Manager
    this.renderManager = new RenderManager(this.sceneManager, this.cameraController);
    this.renderManager.initialize();
    
    // 7. Entity Manager
    this.entityManager = new EntityManager(this.sceneManager.scene, this.cameraController.camera);
    this.entityManager.initialize();
    
    // 8. Skill Manager
    this.skillManager = new SkillManager(this.sceneManager.scene);
    
    // Adiciona sistemas ao loop de renderização
    this.renderManager.addUpdateSystem(this.entityManager);
    
    // --- Eventos de janela ---
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('mousedown', this.onMouseDown);
    
    // --- Configuração de callbacks e eventos ---
    this.setupNetworkCallbacks();
    this.setupInputCallbacks();
    
    return this;
  }
  
  // Inicia a conexão com o servidor e o loop de renderização
  start() {
    // Conecta ao servidor
    this.networkManager.connect();
    
    // Inicia o loop de renderização
    this.renderManager.start();
    
    return this;
  }
  
  // Configura callbacks de rede
  setupNetworkCallbacks() {
    // Define o canal no HUD Manager
    this.hudManager.setChannel(this.networkManager.getChannel());
    
    // Evento de conexão bem-sucedida
    this.networkManager.on('onConnect', () => {
      console.log('Conectado ao servidor!');
      // Garante que o canal correto está sendo passado para o HUDManager
      this.hudManager.setChannel(this.networkManager.getChannel());
      console.log('[HUD] Canal setado no HUDManager:', this.networkManager.getChannel());
    });
    
    // Inicialização do jogador
    this.networkManager.on('onPlayerInit', (data) => {
      this.playerId = data.id;
      
      // Cria o jogador local
      const localPlayer = this.entityManager.createLocalPlayer();
      
      // Define o ID do jogador local
      this.entityManager.setLocalPlayerId(this.playerId);
      
      // Configura a câmera para seguir o jogador
      this.cameraController.followPlayer(localPlayer);
      
      // Inicializa o sistema de predição de movimento
      const worldBoundariesValues = {
        minX: -this.worldSize.WIDTH / 2 + this.worldBoundaries.BORDER_WIDTH,
        maxX: this.worldSize.WIDTH / 2 - this.worldBoundaries.BORDER_WIDTH,
        minZ: -this.worldSize.HEIGHT / 2 + this.worldBoundaries.BORDER_WIDTH,
        maxZ: this.worldSize.HEIGHT / 2 - this.worldBoundaries.BORDER_WIDTH
      };
      
      this.movementPrediction = new MovementPrediction(localPlayer, worldBoundariesValues);
      this.renderManager.addUpdateSystem(this.movementPrediction, 'applyPredictedMovement');
      
      // Atualiza a HUD com os dados do jogador
      if (localPlayer && localPlayer.userData) {
        localPlayer.userData.stats = data.stats;
        localPlayer.userData.level = data.level;
        localPlayer.userData.xp = data.xp;
        localPlayer.userData.nextLevelXp = data.nextLevelXp;
        localPlayer.userData.name = data.name;
        
        // Atualiza a HUD
        this.hudManager.update(data.stats, data.level, data.name, data.xp, data.nextLevelXp);
      }
      
      // Atualiza o SkillManager com a mana inicial
      this.skillManager.updateMana(data.stats?.mana || 0);
    });
    
    // Inicialização do mundo
    this.networkManager.on('onWorldInit', (data) => {
      this.entityManager.processWorldInit(data);
    });
    
    // Atualizações do mundo
    this.networkManager.on('onWorldUpdate', (data) => {
      this.entityManager.processWorldUpdate(data);
    });
    
    // Atualizações binárias do mundo
    this.networkManager.on('onBinaryWorldUpdate', (data) => {
      this.entityManager.processBinaryWorldUpdate(data);
    });
    
    // Movimento do jogador (binário)
    this.networkManager.on('onBinaryPlayerMoved', (data) => {
      if (data.playerId === this.playerId) {
        // Reconcilia a posição do servidor com a predita localmente
        if (this.movementPrediction) {
          this.movementPrediction.reconcilePosition(data.posX, data.posY, data.rot);
        }
        
        // Atualiza status
        const localPlayer = this.entityManager.localPlayer;
        if (localPlayer && localPlayer.userData) {
          localPlayer.userData.stats.hp = data.hp;
          localPlayer.userData.stats.mana = data.mana;
        }
      } else {
        // Atualiza outros jogadores
        this.entityManager.playerPresenter.updateExistingPlayer(String(data.playerId), {
          position: { x: data.posX, z: data.posY },
          rotation: data.rot,
          stats: { hp: data.hp, mana: data.mana }
        });
      }
    });
    
    // Status do jogador (binário)
    this.networkManager.on('onBinaryPlayerStatus', (data) => {
      if (data.playerId === this.playerId && this.entityManager.localPlayer && this.entityManager.localPlayer.userData) {
        const localPlayer = this.entityManager.localPlayer;
        localPlayer.userData.stats.hp = data.hp;
        localPlayer.userData.stats.maxHp = data.maxHp;
        localPlayer.userData.stats.mana = data.mana;
        localPlayer.userData.stats.maxMana = data.maxMana;
        localPlayer.userData.level = data.level;
        localPlayer.userData.xp = data.xp;
        localPlayer.userData.nextLevelXp = data.nextLevelXp;
        
        // Atualiza a HUD
        this.hudManager.update(
          localPlayer.userData.stats,
          localPlayer.userData.level,
          localPlayer.userData.name,
          localPlayer.userData.xp,
          localPlayer.userData.nextLevelXp
        );
        
        // Atualiza o SkillManager
        this.skillManager.updateMana(data.mana);
      }
    });
    
    // Morte de monstro (binário)
    this.networkManager.on('onBinaryMonsterDeath', (data) => {
      this.entityManager.processMonsterDeath({ id: String(data.monsterId) });
    });
    
    // Uso de habilidades
    this.networkManager.on('onPlayerAbilityUsed', (data) => {
      if (!data || !data.abilityId) return;
      
      // Processa teleporte, se for o caso
      if (data.teleport && data.teleportPosition) {
        // Determina qual jogador teleportar
        let targetMesh = null;
        
        if (!data.playerId && this.entityManager.localPlayer) {
          // É o próprio jogador local
          targetMesh = this.entityManager.localPlayer;
          
          // Força o teleporte no sistema de predição
          if (this.movementPrediction) {
            this.movementPrediction.forceTeleport(data.teleportPosition);
          } else {
            // Teleporta o jogador diretamente
            targetMesh.position.set(
              data.teleportPosition.x,
              data.teleportPosition.y || targetMesh.position.y,
              data.teleportPosition.z
            );
          }
          
          // Chama o efeito visual de teleporte diretamente do arquivo
          const origin = targetMesh.position.clone();
          const target = new THREE.Vector3(
            data.teleportPosition.x, 
            data.teleportPosition.y || targetMesh.position.y, 
            data.teleportPosition.z
          );
          
          spawnTeleportEffect(origin, target, this.sceneManager.scene, targetMesh);
        } 
        else if (data.playerId) {
          // É outro jogador
          targetMesh = this.entityManager.playerPresenter.getPlayer(data.playerId);
          if (targetMesh) {
            // Teleporta o outro jogador
            targetMesh.position.set(
              data.teleportPosition.x,
              data.teleportPosition.y || targetMesh.position.y,
              data.teleportPosition.z
            );
            
            // Adiciona efeito visual
            this.entityManager.floatingTextManager.createFloatingText({
              text: '✨',
              position: data.teleportPosition,
              color: '#80ffff',
              size: 1,
              duration: 1000,
              type: 'default'
            });
          }
        }
        
        return; // Não processa os outros efeitos para teleporte
      }
      
      // Para outras habilidades (não teleporte)
      let mesh = null;
      
      // Determina qual jogador usou a habilidade
      if (!data.playerId && this.entityManager.localPlayer) {
        // É o próprio jogador local
        mesh = this.entityManager.localPlayer;
      } else if (data.playerId) {
        // É outro jogador
        mesh = this.entityManager.playerPresenter.getPlayer(data.playerId);
      }
      
      if (!mesh || !data.targetPosition) {
        console.log('[DEBUG] Habilidade não processada: mesh ou targetPosition não encontrados', 
          'mesh:', !!mesh, 
          'targetPosition:', !!data.targetPosition);
        return;
      }
      
      const origin = data.position ? new THREE.Vector3(data.position.x, data.position.y, data.position.z) : mesh.position.clone();
      const target = new THREE.Vector3(data.targetPosition.x, data.targetPosition.y, data.targetPosition.z);
      
      // Usa a função de habilidade apropriada diretamente dos seus arquivos
      console.log('[DEBUG] Processando habilidade ID:', data.abilityId, 'de', 
        data.playerId ? 'jogador: ' + data.playerId : 'jogador local');
      
      try {
        switch (Number(data.abilityId)) {
          case 1: // FIREBALL
            console.log('[DEBUG] Disparando Bola de Fogo');
            spawnFireballEffect(origin, target, this.sceneManager.scene, data.effect || {});
            break;
          case 2: // TELEPORT
            console.log('[DEBUG] Usando Teleporte');
            spawnTeleportEffect(origin, target, this.sceneManager.scene, mesh, data.effect || {});
            break;
          case 3: // FROST_SPIKES
            console.log('[DEBUG] Criando Estacas de Gelo');
            spawnIceSpikeEffect(origin, target, this.sceneManager.scene, mesh, data.effect || {});
            break;
          case 4: // METEOR_STORM
            console.log('[DEBUG] Invocando Chuva de Meteoros');
            spawnMeteorStormEffect(origin, target, this.sceneManager.scene, data.effect || {});
            break;
          default:
            console.log(`[DEBUG] Habilidade desconhecida (ID: ${data.abilityId})`);
        }
      } catch (error) {
        console.error('[DEBUG] Erro ao processar habilidade:', error);
      }
    });
    
    // Morte de jogador
    this.networkManager.on('onPlayerDeath', (data) => {
      if (!data || !data.id) return;
      
      // Se for o jogador local
      if (data.id === this.playerId) {
        // Ativa a flag de morte
        this.playerDead = true;
        
        // Adiciona mensagem de morte à HUD
        this.hudManager.showDeathModal(data);
        
        // Zera a vida do jogador local
        const localPlayer = this.entityManager.localPlayer;
        if (localPlayer && localPlayer.userData && localPlayer.userData.stats) {
          localPlayer.userData.stats.hp = 0;
        }
        
        // Bloqueia inputs durante a morte
        this.blockDeadInputs(true);
        
        // Adiciona listener ao botão de respawn
        setTimeout(() => {
          const btn = document.getElementById('btn-respawn');
          if (btn) {
            btn.onclick = () => {
              this.networkManager.sendRespawnRequest();
            };
          }
        }, 100);
      }
      
      // Efeito visual de morte do jogador
      let playerMesh = null;
      if (data.id === this.playerId) {
        playerMesh = this.entityManager.localPlayer;
      } else {
        playerMesh = this.entityManager.playerPresenter.getPlayer(data.id);
      }
      
      if (playerMesh) {
        this.entityManager.applyGrayDeathEffect(playerMesh);
      }
    });
    
    // Respawn de jogador
    this.networkManager.on('onPlayerRespawn', (data) => {
      if (data.id === this.playerId) {
        // Desativa a flag de morte
        this.playerDead = false;
        
        // Remove a modal de morte
        this.hudManager.hideDeathModal();
        
        // Desbloqueia inputs
        this.blockDeadInputs(false);
        
        // Restaura visual do jogador
        const localPlayer = this.entityManager.localPlayer;
        if (localPlayer) {
          this.entityManager.removeGrayDeathEffect(localPlayer, 0x0000ff);
        }
      } else {
        // Outro jogador respawnou
        const playerMesh = this.entityManager.playerPresenter.getPlayer(data.id);
        if (playerMesh) {
          this.entityManager.removeGrayDeathEffect(playerMesh, 0x0000ff);
        }
      }
    });
    
    // Desconexão
    this.networkManager.on('onDisconnect', () => {
      // Limpa as entidades
      this.entityManager.clear();
      
      // Limpa a cena
      this.sceneManager.clear();
      
      // Mostra mensagem de desconexão
      if (this.hudManager && this.hudManager.showConnectionLost) {
        this.hudManager.showConnectionLost();
      }
    });
    
    // Delta binário de monstros (criação/atualização/remoção)
    this.networkManager.on('onBinaryMonsterDeltaUpdate', (data) => {
      if (!data) return;
      const { addedOrUpdated, removed } = data;
      // Atualiza/cria monstros
      if (this.entityManager && this.entityManager.monsterPresenter && addedOrUpdated) {
        for (const monster of addedOrUpdated) {
          this.entityManager.monsterPresenter.updateExistingMonster(String(monster.id), { ...monster, id: String(monster.id) });
        }
      }
      // Remove monstros
      if (this.entityManager && this.entityManager.monsterPresenter && removed) {
        for (const id of removed) {
          this.entityManager.monsterPresenter.removeMonster(String(id));
        }
      }
      // Log para depuração
      // console.log('[DEBUG] MONSTER_DELTA_UPDATE processado:', { addedOrUpdated, removed });
    });
    
    // Novo: processamento de efeitos de combate em lote (binário)
    this.networkManager.on('onBinaryCombatEffects', (effects) => {
      console.log('[DEBUG][CLIENT] Efeitos de combate recebidos:', effects);
      console.log('[DEBUG][CLIENT] IDs de players:', Object.keys(this.entityManager.playerPresenter.players));
      console.log('[DEBUG][CLIENT] IDs de monstros:', Object.keys(this.entityManager.monsterPresenter.monsters));
      for (const effect of effects) {
        // Mesh do alvo
        const mesh = this.entityManager.playerPresenter.getPlayer(String(effect.targetId)) ||
                     this.entityManager.monsterPresenter.getMonster(String(effect.targetId));
        console.log('[DEBUG][CLIENT] Mesh encontrado?', !!mesh, 'targetId:', effect.targetId, 'effectType:', effect.effectType);
        if (!mesh) {
          console.warn('[DEBUG][CLIENT] Mesh NÃO encontrado para targetId:', effect.targetId, 'effect:', effect);
        }
        // Dano
        if (effect.effectType === 0) {
          if (mesh) {
            console.log('[DEBUG][CLIENT] Chamando showFloatingDamage para mesh:', mesh, 'valor:', effect.value);
            this.entityManager.showFloatingDamage(mesh, effect.value);
          }
        }
        // Slow/freeze
        if (effect.effectType === 2 && effect.statusType === 1) {
          console.log('[DEBUG][CLIENT] Aplicando efeito de slow/freeze em:', effect.targetId);
          if (mesh) {
            // Se o source for uma aranha, chama o efeito visual da teia
            const sourceMesh = this.entityManager.monsterPresenter.getMonster(String(effect.sourceId));
            if (sourceMesh && sourceMesh.userData && sourceMesh.userData.type === 'monster' && sourceMesh.userData.monsterType === 'SPIDER') {
              showWebShotEffect(sourceMesh, mesh, this.entityManager.scene);
            }
            // Se quiser, adicione outros efeitos visuais para slow/freeze genérico aqui
          }
        }
        // Floating text genérico
        if (effect.effectType === 3) {
          console.log('[DEBUG][CLIENT] Floating text genérico:', effect.text, 'targetId:', effect.targetId);
          // (Aqui entraria a lógica visual do texto flutuante genérico)
        }
      }
    });
  }
  
  // Configura callbacks de input
  setupInputCallbacks() {
    // Configura callback para mudanças de movimento
    this.inputController.setMovementChangedCallback(keys => {
      // Se o chat estiver focado ou o jogador estiver morto, não envia movimento
      if (this.inputController.chatFocused || this.playerDead) return;
      
      // Obtém o input para o servidor
      const cameraRelativeInput = this.inputController.getCameraRelativeInput();
      
      // Envia movimento para o servidor
      this.networkManager.sendMovementInput(cameraRelativeInput);
      
      // Prepara dados para predição
      if (this.movementPrediction) {
        // Obtém a direção do movimento para a predição
        const movementDirection = this.inputController.getMovementDirection();
        const playerSpeed = this.serverConfig.PLAYER.SPEED;
        
        // Prepara o movimento no buffer
        this.movementPrediction.prepareMovementInput(cameraRelativeInput);
        
        // Aplica o movimento imediatamente se estiver se movendo
        if (this.inputController.isMoving()) {
          this.movementPrediction.applyPredictedMovement(0.05, playerSpeed, movementDirection);
        }
      }
    });
    
    // Configura atalhos de habilidades
    this.inputController.setupAbilityHotkeys(slot => {
      // Se o jogador estiver morto, não usa habilidades
      if (this.playerDead) return;
      
      const abilityId = this.hudManager.abilitySlots[slot - 1];
      if (!abilityId) return;
      
      // Obter informações da habilidade para feedback
      const ability = this.skillManager.getAbilityById(abilityId);
      if (!ability) return;
      
      // Verificação local de cooldown e mana antes de enviar
      if (!this.skillManager.canUseAbility(abilityId)) {
        // Feedback visual de erro para o jogador
        const reason = this.skillManager.getWhyCannotUse(abilityId);
        
        // Mostra mensagem de erro flutuante
        if (this.entityManager.floatingTextManager && this.entityManager.localPlayer) {
          const position = {
            x: this.entityManager.localPlayer.position.x,
            y: this.entityManager.localPlayer.position.y + 2.0,
            z: this.entityManager.localPlayer.position.z
          };
          
          // Cores diferentes para cada tipo de erro
          let color = '#ff0000'; // Padrão vermelho
          if (reason.includes('cooldown')) {
            color = '#ffaa00'; // Laranja para cooldown
          } else if (reason.includes('mana')) {
            color = '#00aaff'; // Azul para mana
          }
          
          this.entityManager.floatingTextManager.createFloatingText({
            text: reason,
            position: position,
            color: color,
            size: 0.8,
            duration: 1500,
            type: 'error'
          });
        }
        
        return; // Não continua se não puder usar
      }
      
      // Obtém a posição do mouse no mundo
      const targetPosition = this.cameraController.getMouseWorldPosition(
        this.inputController.mousePosition,
        this.sceneManager.getGroundPlane()
      );
      
      // Feedback visual imediato para o jogador
      if (ability) {
        this.hudManager.setCooldown(slot, ability.COOLDOWN, ability.COOLDOWN);
      }
      
      // Envia o comando para o servidor
      this.networkManager.sendAbilityUse(abilityId, targetPosition);
    });
    
    // Configura atalhos de sistema
    this.inputController.setupSystemHotkeys({
      onEscapePressed: () => {
        this.entityManager.clearTarget(this.hudManager);
      },
      onF9Pressed: () => {
        if (this.movementPrediction) {
          const enabled = this.movementPrediction.toggle();
          
          // Feedback visual
          const message = enabled ? 
            'Predição de movimento: ATIVADA' : 
            'Predição de movimento: DESATIVADA';
          
          // Cria um elemento de notificação
          const notification = document.createElement('div');
          notification.style.position = 'fixed';
          notification.style.top = '50%';
          notification.style.left = '50%';
          notification.style.transform = 'translate(-50%, -50%)';
          notification.style.background = 'rgba(0,0,0,0.7)';
          notification.style.color = '#fff';
          notification.style.padding = '15px 25px';
          notification.style.borderRadius = '8px';
          notification.style.fontSize = '16px';
          notification.style.fontWeight = 'bold';
          notification.style.zIndex = 10000;
          notification.textContent = message;
          document.body.appendChild(notification);
          
          // Remove a notificação após 2 segundos
          setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => document.body.removeChild(notification), 500);
          }, 2000);
        }
      },
      onF10Pressed: () => {
        this.sceneManager.toggleVisualPanel();
      }
    });
  }
  
  // Trata redimensionamento da janela
  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Atualiza o renderizador e a câmera
    this.renderManager.handleResize(width, height);
  }
  
  // Trata clique do mouse
  onMouseDown(event) {
    // Se o chat estiver focado ou o jogador estiver morto, não processa cliques
    if (this.inputController.chatFocused || this.playerDead) return;
    
    // Processa seleção de alvo
    this.entityManager.handleTargetSelection(event, this.hudManager);
  }
  
  // Bloqueia/desbloqueia inputs enquanto morto
  blockDeadInputs(block) {
    if (block) {
      window.addEventListener('keydown', this.blockDeadInputHandler, true);
      window.addEventListener('mousedown', this.blockDeadInputHandler, true);
    } else {
      window.removeEventListener('keydown', this.blockDeadInputHandler, true);
      window.removeEventListener('mousedown', this.blockDeadInputHandler, true);
    }
  }
  
  // Handler para bloquear inputs enquanto morto
  blockDeadInputHandler(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  }
  
  // Solicita sincronização com o servidor periodicamente
  requestServerSync() {
    if (this.networkManager && this.playerId) {
      this.networkManager.requestServerSync();
    }
  }
} 