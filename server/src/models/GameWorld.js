import { EntityManager } from './EntityManager.js';
import { WorldManager } from './WorldManager.js';
import { SpawnSystem } from '../systems/SpawnSystem.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { CombatSystem } from '../systems/CombatSystem.js';
import { WORLD } from '../../../shared/constants/gameConstants.js';

/**
 * Classe principal que coordena todos os sistemas do jogo
 * Funciona como um ponto central para gerenciar o estado do mundo
 */
export class GameWorld {
  constructor() {
    // Inicializa o gerenciador de entidades
    this.entityManager = new EntityManager();
    
    // Inicializa o gerenciador de mundo
    this.worldManager = new WorldManager(this.entityManager);
    
    // Inicializa os sistemas
    this.spawnSystem = new SpawnSystem(this.entityManager);
    this.collisionSystem = new CollisionSystem(this.entityManager);
    this.combatSystem = new CombatSystem(this.entityManager);
    
    // Timestamp da última atualização
    this.lastUpdate = Date.now();
    
    console.log('GameWorld inicializado');
  }
  
  /**
   * Inicializa o mundo com objetos e configura áreas de spawn
   */
  initialize() {
    // Inicializa o mundo com objetos
    this.worldManager.initializeWorld();
    
    // Inicializa áreas de spawn padrão
    this.spawnSystem.initializeDefaultSpawnAreas();
    
    console.log('Mundo do jogo inicializado com sucesso');
  }
  
  /**
   * Atualiza todos os sistemas do jogo
   * @param {number} [forcedDeltaTime] - Delta time forçado para testes (opcional)
   */
  update(forcedDeltaTime) {
    const now = Date.now();
    // Usa o deltaTime forçado se fornecido, caso contrário calcula a partir do timestamp
    const deltaTime = forcedDeltaTime !== undefined ? forcedDeltaTime : now - this.lastUpdate;
    
    // Proteção contra valores de deltaTime muito grandes (ex: após pausa longa)
    const safeDeltaTime = Math.min(deltaTime, 100);
    
    this.lastUpdate = now;
    
    // Atualiza todas as entidades
    this.entityManager.update(safeDeltaTime);
    
    // Atualiza projéteis (colisão e dano)
    this.combatSystem.updateProjectiles(safeDeltaTime);
    
    // Atualiza zonas de dano (Meteor Storm, etc)
    this.combatSystem.updateDamageZones(safeDeltaTime);
    
    // Verifica e resolve colisões
    this.collisionSystem.update();
    
    // Atualiza sistema de spawn
    this.spawnSystem.update();
  }
  
  /**
   * Adiciona um novo jogador ao mundo
   * @param {Object} channel - Canal de comunicação geckos.io
   * @returns {Player} - Jogador criado
   */
  addPlayer(channel) {
    // Posição inicial aleatória dentro da zona de spawn definida nas constantes
    const spawnZone = WORLD.ZONES.SPAWN;
    
    const position = {
      x: spawnZone.X_MIN + Math.random() * (spawnZone.X_MAX - spawnZone.X_MIN), 
      y: 0, 
      z: spawnZone.Z_MIN + Math.random() * (spawnZone.Z_MAX - spawnZone.Z_MIN)
    };
    
    // Cria o jogador
    const player = this.entityManager.createPlayer(channel, position);
    
    console.log(`Jogador ${player.id} adicionado ao mundo em (${position.x.toFixed(2)}, ${position.z.toFixed(2)})`);
    
    return player;
  }
  
  /**
   * Remove um jogador do mundo
   * @param {string} playerId - ID do jogador
   */
  removePlayer(playerId) {
    const player = this.entityManager.getPlayer(playerId);
    
    if (player) {
      console.log(`Jogador ${playerId} removido do mundo`);
      this.entityManager.removeEntity(playerId);
    }
  }
  
  /**
   * Processa morte de um monstro
   * @param {string} monsterId - ID do monstro
   * @param {number} respawnDelay - Tempo para respawn em ms (opcional)
   */
  monsterDied(monsterId, respawnDelay) {
    // Agenda o respawn do monstro
    this.spawnSystem.scheduleRespawn(monsterId, respawnDelay);
  }
  
  /**
   * Obtém todos os jogadores serializados
   * @returns {Array} - Lista de jogadores serializados
   */
  getSerializedPlayers() {
    return this.entityManager.getSerializedPlayers();
  }
  
  /**
   * Obtém todos os monstros serializados
   * @returns {Array} - Lista de monstros serializados
   */
  getSerializedMonsters() {
    return this.entityManager.getSerializedMonsters();
  }
  
  /**
   * Obtém todos os objetos do mundo serializados
   * @returns {Array} - Lista de objetos do mundo serializados
   */
  getSerializedWorldObjects() {
    return this.worldManager.getSerializedWorldObjects();
  }
  
  /**
   * Obtém todas as entidades serializadas (jogadores, monstros, objetos)
   * @returns {Array} - Lista de todas as entidades serializadas
   */
  getSerializedEntities() {
    return this.entityManager.getSerializedEntities();
  }
  
  /**
   * Limpa recursos do mundo ao encerrar o servidor
   */
  cleanup() {
    // Limpa timers e recursos do sistema de spawn
    this.spawnSystem.cleanup();
    
    // Limpa recursos do sistema de colisão (se houver)
    if (this.collisionSystem.cleanup) {
      this.collisionSystem.cleanup();
    }
    
    console.log('GameWorld: Recursos liberados');
  }
  
  /**
   * Processa o uso de uma habilidade por um jogador
   * @param {Player} player - Jogador que usou a habilidade
   * @param {number} abilityId - ID da habilidade
   * @param {Object} targetPosition - Posição alvo da habilidade
   * @returns {Object} - Resultado do uso da habilidade
   */
  processAbilityUse(player, abilityId, targetPosition) {
    const origin = { ...player.position };
    
    // Solicita ao sistema de combate para processar a habilidade
    const result = this.combatSystem.processAbilityUse(
      player, 
      abilityId, 
      targetPosition, 
      origin
    );
    
    // Processa resultado (mortes de jogadores, etc)
    if (result.success && result.hits.length > 0) {
      // Para cada hit que resultou em morte, processa adequadamente
      for (const hit of result.hits) {
        if (hit.died) {
          if (hit.type === 'player') {
            const deadPlayer = this.entityManager.getPlayer(hit.id);
            if (deadPlayer) {
              this.combatSystem.handlePlayerDeath(deadPlayer, player);
            }
          }
          // Monstros já são processados pelo seu próprio método die()
        }
      }
    }
    
    return result;
  }
} 