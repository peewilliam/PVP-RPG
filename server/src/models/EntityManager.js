import { v4 as uuidv4 } from 'uuid';
import { Player } from './Player.js';
import { MonsterTypes } from './monsters/index.js';
import { Projectile } from './Projectile.js';
import { DamageZone } from './DamageZone.js';

// Adiciona contador global para IDs numéricos de player
let nextPlayerId = 1;
let nextMonsterId = 1;

/**
 * Gerenciador de entidades que controla todas as entidades do jogo
 */
export class EntityManager {
  constructor() {
    // this.entities = new Map(); // Removido: não usar mapa genérico
    this.players = new Map();  // Map de ID -> Player (para acesso rápido)
    this.monsters = new Map(); // Map de ID -> Monster (para acesso rápido)
    this.worldObjects = new Map(); // Map de ID -> WorldObject (futuro)
    this.projectiles = new Map(); // Map de ID -> Projectile
    this.damageZones = new Map(); // Map de ID -> DamageZone
  }
  
  /**
   * Cria e adiciona um novo jogador ao gerenciador
   * @param {Object} channel - Canal de comunicação geckos.io
   * @param {Object} position - Posição inicial do jogador
   * @returns {Player} - Instância do jogador criado
   */
  createPlayer(channel, position = { x: 0, y: 0, z: 0 }) {
    const id = nextPlayerId++;
    if (this.players.has(id)) {
      return this.players.get(id);
    }
    const player = new Player(id, channel, position);
    this.players.set(id, player);
    return player;
  }
  
  /**
   * Cria e adiciona um novo monstro ao gerenciador
   * @param {string} type - Tipo do monstro (ex: 'GOBLIN')
   * @param {Object} position - Posição inicial do monstro
   * @param {number} level - Nível do monstro
   * @returns {Monster} - Instância do monstro criado
   */
  createMonster(type, position = { x: 0, y: 0, z: 0 }, level = 1) {
    const id = nextMonsterId++;
    const MonsterClass = MonsterTypes[type];
    if (!MonsterClass) throw new Error(`Tipo de monstro desconhecido: ${type}`);
    const monster = new MonsterClass(id, position, level);
    this.monsters.set(id, monster);
    return monster;
  }
  
  /**
   * Cria e adiciona um novo projétil ao gerenciador
   * @param {Object} params - Parâmetros do projétil
   * @returns {Projectile} - Instância do projétil criado
   */
  createProjectile(params) {
    const id = `projectile-${uuidv4()}`;
    const projectile = new Projectile(
      id,
      params.position,
      params.direction,
      params.speed,
      params.radius,
      params.maxLifetime,
      params.owner,
      params.ability
    );
    this.projectiles.set(id, projectile);
    return projectile;
  }
  
  /**
   * Cria e adiciona uma nova zona de dano ao gerenciador
   * @param {Object} params - Parâmetros da zona
   * @returns {DamageZone} - Instância da zona criada
   */
  createDamageZone(params) {
    const id = `damagezone-${Date.now()}-${Math.floor(Math.random()*10000)}`;
    const zone = new DamageZone(
      id,
      params.position,
      params.radius,
      params.duration,
      params.tickInterval,
      params.damage,
      params.owner,
      params.ability,
      params.frostSpikes
    );
    this.damageZones.set(id, zone);
    return zone;
  }
  
  /**
   * Remove uma entidade do gerenciador
   * @param {string} id - ID da entidade a remover
   * @returns {boolean} - true se a entidade foi removida, false caso contrário
   */
  removeEntity(id) {
    const entity = this.entities.get(id);
    
    if (!entity) return false;
    
    // Verifica se é um monstro e notifica o mundo do jogo
    // Este bloco não é necessário se o monstro já chama gameWorld.monsterDied no método die()
    /*
    if (entity.type === 'monster' && entity.active === false && global.gameWorld) {
      // Evita duplicidade de chamadas se já foi removido pelo método die()
      // Apenas como fallback caso algum monstro seja removido sem chamar die()
      global.gameWorld.monsterDied(id);
    }
    */
    
    // Remove das coleções apropriadas
    this.entities.delete(id);
    
    if (entity.type === 'player') {
      this.players.delete(id);
    } else if (entity.type === 'monster') {
      this.monsters.delete(id);
    } else if (entity.type === 'worldObject') {
      this.worldObjects.delete(id);
    }
    
    return true;
  }
  
  /**
   * Remove um projétil do gerenciador
   * @param {string} id - ID do projétil
   * @returns {boolean} - true se removido
   */
  removeProjectile(id) {
    this.projectiles.delete(id);
    return this.entities.delete(id);
  }
  
  /**
   * Remove uma zona de dano do gerenciador
   * @param {string} id - ID da zona
   * @returns {boolean} - true se removida
   */
  removeDamageZone(id) {
    // console.log(`[EntityManager] Removendo zona de dano ${id}`);
    if (this.damageZones.has(id)) {
      const resultado = this.damageZones.delete(id);
      // console.log(`[EntityManager] Zona de dano ${id} removida com sucesso: ${resultado}`);
      return resultado;
    } else {
      // console.log(`[EntityManager] Zona de dano ${id} não encontrada para remoção`);
      return false;
    }
  }
  
  /**
   * Obtém uma entidade pelo ID
   * @param {string} id - ID da entidade
   * @returns {Entity|null} - Entidade encontrada ou null
   */
  getEntity(id) {
    return this.entities.get(id) || null;
  }
  
  /**
   * Obtém um jogador pelo ID
   * @param {string} id - ID do jogador
   * @returns {Player|null} - Jogador encontrado ou null
   */
  getPlayer(id) {
    return this.players.get(id) || null;
  }
  
  /**
   * Obtém um monstro pelo ID
   * @param {string} id - ID do monstro
   * @returns {Monster|null} - Monstro encontrado ou null
   */
  getMonster(id) {
    return this.monsters.get(id) || null;
  }
  
  /**
   * Obtém um projétil pelo ID
   * @param {string} id - ID do projétil
   * @returns {Projectile|null}
   */
  getProjectile(id) {
    return this.projectiles.get(id) || null;
  }
  
  /**
   * Obtém uma zona de dano pelo ID
   * @param {string} id - ID da zona
   * @returns {DamageZone|null}
   */
  getDamageZone(id) {
    return this.damageZones.get(id) || null;
  }
  
  /**
   * Atualiza todas as entidades
   * @param {number} deltaTime - Tempo desde a última atualização
   */
  update(deltaTime) {
    // Converte jogadores para array para uso na IA dos monstros
    const playersArray = Array.from(this.players.values());
    
    // Atualiza os monstros com a lista de jogadores para IA
    for (const monster of this.monsters.values()) {
      if (monster.active) {
        monster.update(deltaTime, playersArray);
      }
    }
    
    // Atualiza os jogadores
    for (const player of this.players.values()) {
      if (player.active) {
        player.update(deltaTime);
      }
    }
    
    // Atualiza projéteis
    for (const [id, projectile] of this.projectiles) {
      if (projectile.active && !projectile.markedForRemoval) {
        projectile.update(deltaTime);
      }
    }
    
    // Remove projéteis marcados para remoção
    for (const [id, projectile] of this.projectiles) {
      if (projectile.markedForRemoval) {
        this.removeProjectile(id);
      }
    }
    
    // Atualiza zonas de dano
    // console.log(`[EntityManager] Atualizando ${this.damageZones.size} zonas de dano`);
    let zonasExpiradas = 0;
    for (const [id, zone] of this.damageZones) {
      if (!zone.markedForRemoval) {
        zone.update(deltaTime);
        if (zone.markedForRemoval) {
          zonasExpiradas++;
        }
      }
    }
    
    // Remove zonas de dano expiradas
    if (zonasExpiradas > 0) {
      // console.log(`[EntityManager] Encontradas ${zonasExpiradas} zonas expiradas para remover`);
    }
    for (const [id, zone] of this.damageZones) {
      if (zone.markedForRemoval) {
        this.removeDamageZone(id);
      }
    }
    
    // Atualiza outros objetos do mundo (futuro)
    for (const worldObject of this.worldObjects.values()) {
      if (worldObject.active) {
        worldObject.update(deltaTime);
      }
    }
  }
  
  /**
   * Obtém todas as entidades serializadas para envio ao cliente
   * @returns {Array} - Array de entidades serializadas
   */
  getSerializedEntities() {
    const serialized = [];
    
    for (const entity of this.entities.values()) {
      if (entity.active) {
        serialized.push(entity.serialize());
      }
    }
    
    return serialized;
  }
  
  /**
   * Obtém todos os jogadores serializados para envio ao cliente
   * @returns {Array} - Array de jogadores serializados
   */
  getSerializedPlayers() {
    const serialized = [];
    
    for (const player of this.players.values()) {
      if (player.active) {
        serialized.push(player.serialize());
      }
    }
    
    return serialized;
  }
  
  /**
   * Obtém todos os monstros serializados para envio ao cliente
   * @returns {Array} - Array de monstros serializados
   */
  getSerializedMonsters() {
    const serialized = [];
    
    for (const monster of this.monsters.values()) {
      if (monster.active) {
        serialized.push(monster.serialize());
      }
    }
    
    return serialized;
  }
  
  /**
   * Verifica se há colisão entre entidades
   * @param {Entity} entity - Entidade para verificar colisão
   * @param {number} radius - Raio de colisão
   * @returns {Entity|null} - Entidade colidindo ou null
   */
  checkCollision(entity, radius = 1) {
    // Exemplo: colisão entre players e monstros
    for (const player of this.players.values()) {
      if (player.id === entity.id || !player.active) continue;
      const distance = entity.distanceTo(player);
      if (distance < radius) return player;
    }
    for (const monster of this.monsters.values()) {
      if (monster.id === entity.id || !monster.active) continue;
      const distance = entity.distanceTo(monster);
      if (distance < radius) return monster;
    }
    // Adicione outros tipos conforme necessário
    return null;
  }

  removePlayer(id) {
    return this.players.delete(id);
  }
  removeMonster(id) {
    return this.monsters.delete(id);
  }
  removeProjectile(id) {
    return this.projectiles.delete(id);
  }
  removeDamageZone(id) {
    return this.damageZones.delete(id);
  }
  removeWorldObject(id) {
    return this.worldObjects.delete(id);
  }
} 