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
import { WORLD } from '../../../shared/constants/gameConstants.js';
import WorldMap from '../ui/WorldMap.js';

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
    this.worldMap = null;
    
    // Adicione uma propriedade para armazenar o MAP_CONFIG recebido do servidor
    this.worldConfig = null;
    
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
    this.inputController.setMoveToPointCallback(this.onMoveToPoint.bind(this));
    
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
    
    // --- INTEGRAÇÃO DO MINIMAPA/MAPA-MÚNDI ---
    this._initWorldMap();
    
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
      this.hudManager.setChannel(this.networkManager.getChannel());
      console.log('[HUD] Canal setado no HUDManager:', this.networkManager.getChannel());

      // Listener do MAP_CONFIG só agora, pois o canal está disponível
      this.networkManager.getChannel().on('world:mapConfig', (mapConfig) => {
        console.log('[DEBUG] MAP_CONFIG recebido do servidor:', mapConfig);
        this.worldConfig = mapConfig;
        
        // Atualizamos imediatamente o mapa
        if (this.worldMap) {
          this._updateWorldMapFromConfig();
        }
      });

      // Solicita explicitamente o MAP_CONFIG ao servidor
      console.log('[DEBUG] Solicitando MAP_CONFIG ao servidor');
      this.networkManager.getChannel().emit('client:requestMapConfig');
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
      console.log('[DEBUG][CLIENT] Evento abilityUsed recebido:', data);
      if (!data || !data.abilityId) return;
      // Processa teleporte, se for o caso
      if (data.teleport && data.teleportPosition) {
        let targetMesh = null;
        if (data.playerId === this.playerId && this.entityManager.localPlayer) {
          // É o próprio jogador local
          targetMesh = this.entityManager.localPlayer;
          if (this.movementPrediction) {
            this.movementPrediction.forceTeleport(data.teleportPosition);
          } else {
            targetMesh.position.set(
              data.teleportPosition.x,
              data.teleportPosition.y || targetMesh.position.y,
              data.teleportPosition.z
            );
          }
          const origin = targetMesh.position.clone();
          const target = new THREE.Vector3(
            data.teleportPosition.x, 
            data.teleportPosition.y || targetMesh.position.y, 
            data.teleportPosition.z
          );
          spawnTeleportEffect(origin, target, this.sceneManager.scene, targetMesh);
        } else if (data.playerId) {
          // É outro jogador
          targetMesh = this.entityManager.playerPresenter.getPlayer(data.playerId);
          if (targetMesh) {
            targetMesh.position.set(
              data.teleportPosition.x,
              data.teleportPosition.y || targetMesh.position.y,
              data.teleportPosition.z
            );
            // Efeito visual de teleporte para outros jogadores
            const origin = targetMesh.position.clone();
            const target = new THREE.Vector3(
              data.teleportPosition.x,
              data.teleportPosition.y || targetMesh.position.y,
              data.teleportPosition.z
            );
            spawnTeleportEffect(origin, target, this.sceneManager.scene, targetMesh);
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
        
        // Cancela qualquer movimento por clique em andamento
        if (this.movementPrediction) {
          this.movementPrediction.cancelMoveToPoint();
        }
        
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
              console.log('[DEBUG][CLIENT] Botão de respawn clicado, chamando sendRespawnRequest()');
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
      console.log('[DEBUG][CLIENT] Evento onPlayerRespawn recebido:', data);
      if (data.id === this.playerId) {
        console.log('[DEBUG][CLIENT] Respawn do próprio jogador. Atualizando HUD e inputs.');
        // Desativa a flag de morte
        this.playerDead = false;
        
        // Cancela qualquer movimento pendente
        if (this.movementPrediction) {
          this.movementPrediction.cancelMoveToPoint();
          
          // Atualiza posição imediatamente se houver dados de posição
          if (data.position) {
            this.movementPrediction.forceTeleport({
              x: data.position.x,
              z: data.position.z
            });
          }
        }
        
        // Remove a modal de morte
        this.hudManager.hideDeathModal();
        // Desbloqueia inputs
        this.blockDeadInputs(false);
        // Restaura visual do jogador
        const localPlayer = this.entityManager.localPlayer;
        if (localPlayer) {
          this.entityManager.removeGrayDeathEffect(localPlayer, 0x0000ff);
        } else {
          console.warn('[DEBUG][CLIENT] localPlayer não encontrado ao tentar remover efeito de morte.');
        }
      } else {
        console.log('[DEBUG][CLIENT] Respawn de outro jogador:', data.id);
        // Outro jogador respawnou
        const playerMesh = this.entityManager.playerPresenter.getPlayer(data.id);
        if (playerMesh) {
          this.entityManager.removeGrayDeathEffect(playerMesh, 0x0000ff);
        } else {
          console.warn('[DEBUG][CLIENT] playerMesh não encontrado para id:', data.id);
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
    
    // Desconexão de jogador (binário)
    this.networkManager.on('onPlayerDisconnected', (data) => {
      if (!data || typeof data.id === 'undefined') return;
      // Remove o jogador da cena
      this.entityManager.playerPresenter.removePlayer(String(data.id));
      // Loga o motivo da desconexão
      console.log(`[CLIENT] Jogador desconectado: ${data.id}, motivo: ${data.reason}`);
      // Opcional: mostrar mensagem na HUD ou registrar estatísticas
    });
    
    // Novo jogador entrou (binário)
    this.networkManager.on('onPlayerJoined', (data) => {
      if (!data || typeof data.id === 'undefined') return;
      this.entityManager.playerPresenter.updatePlayer(data);
      console.log(`[CLIENT] Novo jogador entrou: ${data.id} (${data.name})`);
      // Opcional: mostrar mensagem na HUD ou chat
    });
    
    // Jogador já existente (binário)
    this.networkManager.on('onPlayerExisting', (data) => {
      if (!data || typeof data.id === 'undefined') return;
      this.entityManager.playerPresenter.updatePlayer(data);
      console.log(`[CLIENT] Jogador já presente: ${data.id} (${data.name})`);
      // Opcional: mostrar mensagem na HUD ou chat
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

  _initWorldMap() {
    // Instancia o WorldMap vazio inicialmente
    this.worldMap = new WorldMap({
      areas: [],
      villages: [],
      bosses: [],
      spots: [],
      roads: [],
      playerPosition: { x: 0, z: 0 },
      onClose: () => {}
    });
    // Atalho da tecla M
    window.addEventListener('keydown', (e) => {
      if ((e.key === 'm' || e.key === 'M') && !this.inputController.chatFocused) {
        this.worldMap.toggle();
        if (this.worldMap.visible) this.worldMap.render();
      }
    });
    // Atualiza posição do player no mapa a cada frame
    this.renderManager.addUpdateSystem({
      update: () => {
        const player = this.entityManager.localPlayer;
        if (player) {
          this.worldMap.setPlayerPosition({ x: player.position.x, z: player.position.z });
        }
      }
    });
    // Se já recebeu o MAP_CONFIG, popula o mapa
    if (this.worldConfig) {
      this._updateWorldMapFromConfig();
    }
  }

  // Novo método auxiliar para popular o WorldMap com base no MAP_CONFIG
  _updateWorldMapFromConfig() {
    const config = this.worldConfig;
    if (!config) return;
    console.log('[DEBUG] Atualizando WorldMap com config:', config);
    // Áreas/biomas
    const areas = config.areas.map(a => ({
      id: a.id,
      name: a.name,
      bounds: a.bounds,
      groundColor: a.groundColor
    }));
    console.log('[DEBUG] Áreas:', areas);
    // Vilas: centro dos bounds das áreas que são vilas
    const villages = config.areas.filter(a => a.id.startsWith('VILA')).map(a => ({
      x: (a.bounds.xMin + a.bounds.xMax) / 2,
      z: (a.bounds.zMin + a.bounds.zMax) / 2,
      name: a.name
    }));
    console.log('[DEBUG] Vilas:', villages);
    // Bosses: spots de level >= 5
    const bosses = (config.monsterSpots || []).filter(s => s.level >= 5).map(s => ({
      x: (s.bounds.xMin + s.bounds.xMax) / 2,
      z: (s.bounds.zMin + s.bounds.zMax) / 2,
      name: 'Boss'
    }));
    console.log('[DEBUG] Bosses:', bosses);
    // Grind spots: spots de level < 5
    const spots = (config.monsterSpots || []).filter(s => s.level < 5).map(s => ({
      x: (s.bounds.xMin + s.bounds.xMax) / 2,
      z: (s.bounds.zMin + s.bounds.zMax) / 2,
      name: s.type
    }));
    console.log('[DEBUG] Spots:', spots);
    // Estradas/trilhas
    const roads = (config.groundTiles || []).filter(t => t.type === 'road' || t.type === 'trail').map(t => ({
      from: t.from,
      to: t.to,
      color: t.color || '#bfa76a',
      type: t.type
    }));
    console.log('[DEBUG] Estradas:', roads);
    
    // Atualiza o terreno 3D com as estradas e trilhas
    if (this.sceneManager && roads.length > 0) {
      this.sceneManager.updateGroundTiles(roads);
    }
    
    // Atualiza o WorldMap
    this.worldMap.setAreas(areas);
    this.worldMap.setVillages(villages);
    this.worldMap.setBosses(bosses);
    this.worldMap.setSpots(spots);
    this.worldMap.setRoads(roads);
    if (this.worldMap.visible) this.worldMap.render();
  }

  _getAreaName(id) {
    // Nomes PT-BR para áreas conhecidas
    const nomes = {
      SPAWN: 'Spawn',
      FOREST_NORTH: 'Floresta Norte',
      FOREST_WEST: 'Floresta Oeste',
      MOUNTAINS: 'Montanhas',
      PLAINS: 'Planícies',
      SWAMP: 'Pântano',
      RUINS: 'Ruínas',
      DESERT_PATH: 'Caminho do Deserto',
      VILLAGE_NW: 'Vila dos Lenhadores',
      VILLAGE_NE: 'Vila Mineira',
      VILLAGE_SW: 'Vila Abandonada',
      VILLAGE_SE: 'Oásis do Sul'
    };
    return nomes[id] || id;
  }
  _getAreaColor(id) {
    // Cores distintas para biomas
    const cores = {
      SPAWN: '#e2c290',
      FOREST_NORTH: '#b6e2a1',
      FOREST_WEST: '#a1d99b',
      MOUNTAINS: '#bfc9c9',
      PLAINS: '#e2e2a1',
      SWAMP: '#7a8c6e',
      RUINS: '#bdbdbd',
      DESERT_PATH: '#e2d6b8',
      VILLAGE_NW: '#e2c290',
      VILLAGE_NE: '#e2c290',
      VILLAGE_SW: '#e2c290',
      VILLAGE_SE: '#e2c290'
    };
    return cores[id] || '#fff';
  }

  onMoveToPoint(event) {
    // PASSO 1: Ignorar cliques quando o jogador estiver morto ou o chat estiver ativo
    if (this.playerDead || this.inputController.chatFocused) {
      return;
    }

    // PASSO 2: Verificar se o clique foi em um elemento da UI usando método melhorado
    if (this.isUIElementRobust(event.target)) {
      console.log('[DEBUG] Clique na UI ignorado para movimento');
      return;
    }
    
    // PASSO 3: Verificar se clicou em uma entidade (alvo)
    const selection = this.entityManager.handleTargetSelection(event, this.hudManager);
    if (selection) {
      // Selecionou uma entidade, não move o player
      return;
    }
    
    // PASSO 4: Raycast para obter posição no chão
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.cameraController.camera);
    
    // Plano do chão no nível y=0
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const intersectPoint = new THREE.Vector3();
    const didIntersect = raycaster.ray.intersectPlane(plane, intersectPoint);
    
    // PASSO 5: Verificar se o ponto intersectado é válido e está dentro dos limites do mundo
    if (!didIntersect) {
      console.log('[DEBUG] Raycaster não intersectou com o plano do mundo');
      return;
    }
    
    if (!this.isPointInWorldBounds(intersectPoint)) {
      console.log('[DEBUG] Clique fora dos limites do mundo ignorado');
      // Feedback visual negativo para o jogador - círculo vermelho
      this.showInvalidMoveCircle(intersectPoint);
      
      // Opcional: mostrar mensagem flutuante para o jogador
      if (this.entityManager && this.entityManager.floatingTextManager) {
        // Posição no mundo para o texto flutuante
        const position = { ...intersectPoint };
        position.y += 1.0; // Acima do chão
        
        this.entityManager.floatingTextManager.createFloatingText({
          text: 'Não é possível se mover para fora do mundo',
          position: position,
          color: '#ff3333',
          size: 1.0,
          duration: 2000,
          type: 'error'
        });
      }
      return;
    }
    
    // PASSO 6: Verificar distância máxima de clique para evitar cliques muito distantes
    const localPlayer = this.entityManager.localPlayer;
    if (localPlayer) {
      const clickDistance = localPlayer.position.distanceTo(intersectPoint);
      const maxClickDistance = 100; // Distância máxima permitida para clique (ajuste conforme necessário)
      
      if (clickDistance > maxClickDistance) {
        console.log(`[DEBUG] Clique muito distante ignorado (${clickDistance.toFixed(2)} > ${maxClickDistance})`);
        // Feedback visual negativo para o jogador - círculo vermelho com X
        this.showTooFarMoveCircle(intersectPoint);
        
        // Opcional: mostrar mensagem flutuante para o jogador
        if (this.entityManager && this.entityManager.floatingTextManager) {
          const position = { ...intersectPoint };
          position.y += 1.0; // Acima do chão
          
          this.entityManager.floatingTextManager.createFloatingText({
            text: 'Destino muito distante',
            position: position,
            color: '#ff9933',
            size: 1.0,
            duration: 2000,
            type: 'warning'
          });
        }
        return;
      }
    }
    
    // PASSO 7: Tudo verificado, podemos seguir com o movimento
    console.log('[DEBUG] Destino clicado válido:', intersectPoint);
    
    // Feedback visual: círculo discreto
    this.showMoveCircle(intersectPoint);
    
    // Envia destino ao servidor
    this.networkManager.sendMoveToPoint(intersectPoint);
    
    // Predição local
    if (this.movementPrediction) {
      console.log('[DEBUG] Chamando predição local setMoveToPoint', intersectPoint);
      this.movementPrediction.setMoveToPoint(intersectPoint);
    }
  }

  // Método para mostrar feedback visual quando o clique é fora dos limites do mundo
  showInvalidMoveCircle(position) {
    // Cria um círculo vermelho no chão
    const geometry = new THREE.RingGeometry(0.4, 0.5, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff3333,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.copy(position);
    circle.position.y += 0.05; // levemente acima do chão
    circle.rotation.x = -Math.PI / 2;
    
    // Adiciona um X vermelho no centro (duas linhas cruzadas)
    const xGroup = new THREE.Group();
    
    const line1Geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.3, 0, 0),
      new THREE.Vector3(0.3, 0, 0)
    ]);
    const line2Geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -0.3),
      new THREE.Vector3(0, 0, 0.3)
    ]);
    
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff3333 });
    const line1 = new THREE.Line(line1Geo, lineMaterial);
    const line2 = new THREE.Line(line2Geo, lineMaterial);
    line1.rotation.x = Math.PI / 2;
    line2.rotation.z = Math.PI / 2;
    line2.rotation.x = Math.PI / 2;
    
    xGroup.add(line1);
    xGroup.add(line2);
    xGroup.position.copy(position);
    xGroup.position.y += 0.1; // Acima do círculo
    
    this.sceneManager.scene.add(circle);
    this.sceneManager.scene.add(xGroup);
    
    // Animação de pulsação para o círculo
    const startTime = Date.now();
    const duration = 1000; // 1 segundo
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration) {
        const scale = 1 + 0.3 * Math.sin(elapsedTime / 100);
        circle.scale.set(scale, scale, scale);
        
        requestAnimationFrame(animate);
      } else {
        this.sceneManager.scene.remove(circle);
        this.sceneManager.scene.remove(xGroup);
        geometry.dispose();
        material.dispose();
        line1Geo.dispose();
        line2Geo.dispose();
        lineMaterial.dispose();
      }
    };
    
    animate();
  }
  
  // Método para mostrar feedback visual quando o clique é muito distante
  showTooFarMoveCircle(position) {
    // Cria um círculo laranja no chão
    const geometry = new THREE.RingGeometry(0.4, 0.5, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff9933,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.copy(position);
    circle.position.y += 0.05; // levemente acima do chão
    circle.rotation.x = -Math.PI / 2;
    
    // Adiciona seta apontando para o jogador
    const localPlayer = this.entityManager.localPlayer;
    if (localPlayer) {
      const direction = new THREE.Vector3()
        .subVectors(localPlayer.position, position)
        .normalize();
        
      const arrowLength = 1.5;
      const arrowHeadLength = 0.4;
      const arrowHeadWidth = 0.3;
      
      const arrowHelper = new THREE.ArrowHelper(
        direction, 
        position,
        arrowLength,
        0xff9933, // mesma cor do círculo
        arrowHeadLength,
        arrowHeadWidth
      );
      
      arrowHelper.position.y += 0.5; // Um pouco acima do chão
      
      this.sceneManager.scene.add(circle);
      this.sceneManager.scene.add(arrowHelper);
      
      // Animação de desaparecimento gradual
      const startTime = Date.now();
      const duration = 1500; // 1.5 segundos
      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < duration) {
          const opacity = 0.7 * (1 - elapsedTime / duration);
          material.opacity = opacity;
          
          requestAnimationFrame(animate);
        } else {
          this.sceneManager.scene.remove(circle);
          this.sceneManager.scene.remove(arrowHelper);
          geometry.dispose();
          material.dispose();
        }
      };
      
      animate();
    } else {
      // Sem jogador local, só mostra o círculo brevemente
      this.sceneManager.scene.add(circle);
      setTimeout(() => {
        this.sceneManager.scene.remove(circle);
        geometry.dispose();
        material.dispose();
      }, 1000);
    }
  }

  showMoveCircle(position) {
    // Cria um círculo discreto no chão usando Three.js
    const geometry = new THREE.RingGeometry(0.4, 0.5, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff99,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const circle = new THREE.Mesh(geometry, material);
    circle.position.copy(position);
    circle.position.y += 0.05; // levemente acima do chão
    circle.rotation.x = -Math.PI / 2;
    this.sceneManager.scene.add(circle);
    setTimeout(() => {
      this.sceneManager.scene.remove(circle);
      geometry.dispose();
      material.dispose();
    }, 500);
  }

  // Método para verificar se um ponto está dentro dos limites do mundo
  isPointInWorldBounds(point) {
    // Usa as mesmas constantes que a lógica do servidor
    const halfWidth = this.worldSize.WIDTH / 2;
    const halfHeight = this.worldSize.HEIGHT / 2;
    const borderWidth = this.worldBoundaries.BORDER_WIDTH;
    
    // Limites em X (largura do mundo)
    const minX = -halfWidth + borderWidth;
    const maxX = halfWidth - borderWidth;
    
    // Limites em Z (altura do mundo)
    const minZ = -halfHeight + borderWidth;
    const maxZ = halfHeight - borderWidth;
    
    // Verifica se o ponto está dentro dos limites
    return (
      point.x >= minX && 
      point.x <= maxX && 
      point.z >= minZ && 
      point.z <= maxZ
    );
  }

  // Método auxiliar aprimorado para verificar se um elemento é parte da UI
  isUIElementRobust(element) {
    // Se não há elemento (clique no canvas vazio), não é UI
    if (!element) return false;
    
    // 1. Verificação de tagName para elementos intrinsecamente de UI
    const uiTags = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A', 'LABEL', 'DIALOG'];
    if (uiTags.includes(element.tagName)) {
      return true;
    }
    
    // 2. Verificação de atributos de interação
    if (element.getAttribute('role') === 'button' || 
        element.getAttribute('tabindex') !== null ||
        element.getAttribute('contenteditable') === 'true') {
      return true;
    }
    
    // 3. Verificação completa de IDs e classes conhecidos de UI
    const uiSelectors = [
      // Elementos principais da UI
      '#hud', '.target-ui', '#hud-tooltip', '#performance-panel', '#prediction-panel',
      '#settings-button', '#settings-menu', '#death-modal', '#chat-container',
      '.hud-slot', '#world-map', '#world-map-canvas',
      
      // Elementos específicos do HUD
      '#hud-slots', '#hud-barrow', '#hud-center-diamond', '#hud-hp-wrap', '#hud-mp-wrap',
      '#hud-level', '#hud-hp', '#hud-hp-text', '#hud-mp', '#hud-mp-text', '#hud-xp-border',
      
      // Elementos de chat
      '#chat-input', '.chat-message', '.chat-tab', '#chat-container',
      
      // Elementos da target UI
      '.target-header', '.target-bars', '.hp-bar', '.mana-bar', '.target-status',
      '.hp-fill', '.mana-fill', '.hp-text', '.mana-text',
      
      // Outros elementos de UI conhecidos
      '.floating-text', '.cooldown-overlay', '.tooltip', '.card', '.menu',
      '.dialog', '.modal', '.notification', '.settings'
    ];
    
    // Função para verificar se o elemento corresponde a qualquer um dos seletores
    const matchesSelectors = (el) => {
      if (!el || !el.classList || !el.id) return false;
      
      return uiSelectors.some(selector => {
        if (selector.startsWith('#')) {
          return el.id === selector.substring(1);
        } else if (selector.startsWith('.')) {
          return el.classList.contains(selector.substring(1));
        }
        return false;
      });
    };
    
    // 4. Verificação por correspondência parcial para IDs/classes que seguem padrões
    const partialUIPatterns = ['hud-', 'ui-', 'menu-', 'tooltip-', 'btn-', 'modal-', 'chat-', 'slot-'];
    
    const matchesPartialPatterns = (el) => {
      if (!el) return false;
      
      // Verificar ID
      if (el.id && partialUIPatterns.some(pattern => el.id.includes(pattern))) {
        return true;
      }
      
      // Verificar classes
      if (el.classList) {
        for (let i = 0; i < el.classList.length; i++) {
          if (partialUIPatterns.some(pattern => el.classList[i].includes(pattern))) {
            return true;
          }
        }
      }
      
      return false;
    };
    
    // 5. Verificação por atributos de estilo que geralmente indicam elementos de UI
    const hasUIStyles = (el) => {
      if (!el || !el.style) return false;
      
      // Elementos com posição fixed ou absolute geralmente são UI
      if (window.getComputedStyle(el).position === 'fixed' || 
          window.getComputedStyle(el).position === 'absolute') {
        return true;
      }
      
      // Elementos com z-index alto geralmente são UI
      const zIndex = parseInt(window.getComputedStyle(el).zIndex);
      if (!isNaN(zIndex) && zIndex > 100) {
        return true;
      }
      
      return false;
    };
    
    // Verifica o elemento e seus ancestrais
    let currentElement = element;
    while (currentElement) {
      if (matchesSelectors(currentElement) || 
          matchesPartialPatterns(currentElement) || 
          hasUIStyles(currentElement)) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    
    return false;
  }

  // Método antigo mantido para compatibilidade
  isUIElement(element) {
    return this.isUIElementRobust(element);
  }
} 