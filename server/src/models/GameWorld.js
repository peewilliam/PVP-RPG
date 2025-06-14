import { EntityManager } from './EntityManager.js';
import { WorldManager } from './WorldManager.js';
import { SpawnSystem } from '../systems/SpawnSystem.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { CombatSystem } from '../systems/CombatSystem.js';
import { WORLD } from '../../../shared/constants/gameConstants.js';
import { MAP_CONFIG } from '../mapConfig.js';

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
    
    // console.log('Mundo do jogo inicializado com sucesso');
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
   * Adiciona um novo jogador ao mundo usando playerSpawns do MAP_CONFIG
   * @param {Object} channel - Canal de comunicação geckos.io
   * @returns {Player} - Jogador criado
   */
  addPlayer(channel) {
    // Seleciona um spawn aleatório dentre os definidos
    const spawns = MAP_CONFIG.playerSpawns;
    if (!spawns || spawns.length === 0) {
      throw new Error('Nenhum ponto de spawn de jogador definido em MAP_CONFIG.playerSpawns');
    }
    // Sorteia um dos spawns
    const spawn = spawns[Math.floor(Math.random() * spawns.length)];
    // Busca área correspondente
    const area = MAP_CONFIG.areas.find(a => a.id === spawn.area);
    if (!area) {
      throw new Error(`Área de spawn '${spawn.area}' não encontrada em MAP_CONFIG.areas`);
    }
    // Sorteia posição dentro do range da área
    const range = spawn.range || 5;
    const x = this.getRandomInRange(area.bounds.xMin + range, area.bounds.xMax - range);
    const z = this.getRandomInRange(area.bounds.zMin + range, area.bounds.zMax - range);
    const position = { x, y: 0, z };
    // Cria o jogador
    const player = this.entityManager.createPlayer(channel, position);
    console.log(`[SPAWN] Jogador ${player.id} adicionado em (${position.x.toFixed(2)}, ${position.z.toFixed(2)})`);
    return player;
  }
  
  /**
   * Gera um número aleatório dentro de um intervalo
   */
  getRandomInRange(min, max) {
    return min + Math.random() * (max - min);
  }
  
  /**
   * Remove um jogador do mundo
   * @param {string} playerId - ID do jogador
   */
  removePlayer(playerId) {
    const player = this.entityManager.getPlayer(playerId);
    
    if (player) {
      console.log(`Jogador ${playerId} removido do mundo`);
      this.entityManager.removePlayer(playerId);
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
   * Aplica dano em área às entidades próximas
   * @param {Object} params - Parâmetros do dano em área
   * @param {Object} params.source - Entidade que causou o dano
   * @param {Object} params.position - Posição central da área
   * @param {number} params.radius - Raio da área de dano
   * @param {number} params.damage - Quantidade de dano a ser aplicada
   * @param {string} params.type - Tipo do dano (opcional)
   * @param {string} params.color - Cor do texto flutuante (opcional)
   * @param {string} params.floatingText - Texto a ser exibido (opcional)
   * @returns {Object} - Resultado da aplicação do dano
   */
  applyAreaDamage(params) {
    if (!params || !params.position || !params.radius || !params.damage || !params.source) {
      console.error("applyAreaDamage: parâmetros inválidos", params);
      return { success: false };
    }
    
    const center = params.position;
    const radius = params.radius;
    const damage = params.damage;
    const source = params.source;
    
    // console.log(`GameWorld.applyAreaDamage: Aplicando dano em área em (${center.x}, ${center.z}), raio ${radius}, dano ${damage}`);
    
    // Criar um objeto de resultado para rastrear as entidades atingidas
    const result = { 
      success: true,
      hits: [],
      areaEffect: { center, radius }
    };
    
    // Aplicar dano a monstros dentro da área
    for (const monster of this.entityManager.monsters.values()) {
      // Ignorar a própria fonte do dano ou entidades mortas
      if (!monster.active || monster.stats.hp <= 0 || monster.id === source.id) continue;
      
      // Calcular distância
      const dx = monster.position.x - center.x;
      const dz = monster.position.z - center.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      // Debug
      // console.log(`Distância até monstro ${monster.id}: ${dist} (raio: ${radius})`);
      
      // Verificar se está dentro do raio
      if (dist <= radius) {
        // Aplicar dano
        // console.log(`Aplicando dano de área (${damage}) ao monstro ${monster.id}`);
        const died = monster.takeDamage(damage, source);
        
        // Registrar o hit
        result.hits.push({
          id: monster.id,
          type: 'monster',
          damage: damage,
          died: died,
          position: { ...monster.position }
        });
      }
    }
    
    // Aplicar dano a jogadores dentro da área
    for (const player of this.entityManager.players.values()) {
      // Ignorar a própria fonte do dano ou entidades mortas
      if (!player.active || player.stats.hp <= 0 || player.id === source.id) continue;
      
      // Calcular distância
      const dx = player.position.x - center.x;
      const dz = player.position.z - center.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      // Debug
      // console.log(`Distância até jogador ${player.id}: ${dist} (raio: ${radius})`);
      
      // Verificar se está dentro do raio
      if (dist <= radius) {
        // Aplicar dano
        // console.log(`Aplicando dano de área (${damage}) ao jogador ${player.id}`);
        const died = player.takeDamage(damage, source);
        
        // Registrar o hit
        result.hits.push({
          id: player.id,
          type: 'player',
          damage: damage,
          died: died,
          position: { ...player.position }
        });
      }
    }
    
    return result;
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