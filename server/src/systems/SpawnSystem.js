/**
 * Sistema de spawn que gerencia a criação e respawn de entidades no mundo
 */
import { MAP_CONFIG } from '../mapConfig.js';

export class SpawnSystem {
  /**
   * @param {EntityManager} entityManager - Gerenciador de entidades
   */
  constructor(entityManager) {
    this.entityManager = entityManager;
    
    // Configurações de spawn
    this.spawnAreas = [];
    this.respawnTimers = new Map(); // Mapeia ID do monstro para timer de respawn
    
    // Tempos de respawn em ms
    this.defaultRespawnTime = 30000; // 30 segundos
  }
  
  /**
   * Inicializa áreas de spawn a partir do MAP_CONFIG.monsterSpots
   */
  initializeDefaultSpawnAreas() {
    // Limpa áreas anteriores
    this.spawnAreas = [];
    // Cria áreas de spawn conforme configuração
    for (const spot of MAP_CONFIG.monsterSpots) {
      this.registerSpawnArea({
        id: `${spot.area}-${spot.type}-${Math.random().toString(36).substr(2, 5)}`,
        monsterType: spot.type,
        position: this.getRandomPositionInBounds(spot.bounds),
        radius: this.getRadiusFromBounds(spot.bounds),
        maxMonsters: spot.count,
        respawnTime: (spot.respawnTime || 30) * 1000, // segundos para ms
        minLevel: spot.level || 1,
        maxLevel: spot.level || 1,
        bounds: spot.bounds,
        area: spot.area,
        scale: spot.scale || null, // Adicionando suporte para escala
      });
    }
  }
  
  /**
   * Registra uma área de spawn de monstros e cria todos os monstros iniciais
   * @param {Object} spawnArea - Configuração da área de spawn
   * @param {string} spawnArea.id - ID único da área de spawn
   * @param {string} spawnArea.monsterType - Tipo de monstro a spawnar
   * @param {Object} spawnArea.position - Posição central da área de spawn
   * @param {number} spawnArea.radius - Raio da área de spawn
   * @param {number} spawnArea.maxMonsters - Número máximo de monstros na área
   * @param {number} spawnArea.respawnTime - Tempo de respawn em ms
   * @param {number} spawnArea.minLevel - Nível mínimo dos monstros
   * @param {number} spawnArea.maxLevel - Nível máximo dos monstros
   * @param {Object} spawnArea.scale - Escala do monstro (opcional)
   */
  registerSpawnArea(spawnArea) {
    // Adiciona tempo de respawn padrão se não for especificado
    if (!spawnArea.respawnTime) {
      spawnArea.respawnTime = this.defaultRespawnTime;
    }
    
    this.spawnAreas.push(spawnArea);
    
    // Cria todos os monstros iniciais dessa área de uma vez
    this.populateSpawnArea(spawnArea);
  }
  
  /**
   * Popula uma área de spawn com o número máximo de monstros
   * @param {Object} spawnArea - Área de spawn a ser populada
   */
  populateSpawnArea(spawnArea) {
    // console.log(`Populando área de spawn ${spawnArea.id} com ${spawnArea.maxMonsters} monstros do tipo ${spawnArea.monsterType}`);
    
    for (let i = 0; i < spawnArea.maxMonsters; i++) {
      // Gera uma posição aleatória dentro da área
      const position = this.getRandomPositionInBounds(spawnArea.bounds);
      
      // Gera um nível aleatório
      const level = this.getRandomInt(spawnArea.minLevel, spawnArea.maxLevel);
      
      // Cria o monstro
      const monster = this.entityManager.createMonster(
        spawnArea.monsterType,
        position,
        level,
        spawnArea.scale // Passando a escala para o monster
      );
      
      // Adiciona metadata ao monstro para rastreamento
      monster.spawnAreaId = spawnArea.id;
      monster.area = spawnArea.area;
      
      // console.log(`Monstro inicial criado: ${monster.id} (${spawnArea.monsterType}) em (${position.x}, ${position.z})`);
    }
  }
  
  /**
   * Conta quantos monstros existem em uma área específica
   * @param {Object} spawnArea - Área de spawn
   * @returns {number} - Número de monstros na área
   */
  countMonstersInArea(spawnArea) {
    let count = 0;
    
    for (const monster of this.entityManager.monsters.values()) {
      if (monster.active && monster.spawnAreaId === spawnArea.id) {
        count++;
      }
    }
    
    return count;
  }
  
  /**
   * Marca um monstro para respawn depois de um tempo
   * @param {string} monsterId - ID do monstro
   * @param {number} delayMs - Tempo de espera em ms (opcional)
   */
  scheduleRespawn(monsterId, delayMs = null) {
    // Obtém o monstro
    const monster = this.entityManager.getMonster(monsterId);
    if (!monster) {
      console.error(`Não foi possível encontrar o monstro ${monsterId} para respawn`);
      return;
    }
    
    // Se já houver um timer para este monstro, cancela
    if (this.respawnTimers.has(monsterId)) {
      clearTimeout(this.respawnTimers.get(monsterId));
    }
    
    // Encontra a área de spawn associada ao monstro
    const spawnArea = this.spawnAreas.find(area => area.id === monster.spawnAreaId);
    if (!spawnArea) {
      console.error(`Área de spawn não encontrada para monstro ${monsterId}`);
      return;
    }
    
    // Usa o tempo de respawn da área ou o fornecido
    const respawnTime = delayMs || spawnArea.respawnTime || this.defaultRespawnTime;
    
    // Gera uma nova posição aleatória dentro da área de spawn
    const newPosition = this.getRandomPositionInBounds(spawnArea.bounds);
    
    // Salva as informações relevantes para o respawn
    const spawnInfo = {
      type: monster.monsterType,
      position: newPosition,
      level: monster.level,
      spawnAreaId: monster.spawnAreaId,
      area: spawnArea.area,
      scale: monster.scale || spawnArea.scale // Preserva a escala do monstro ou usa a da área
    };
    
    console.log(`Monstro ${monsterId} (${monster.monsterType}) agendado para respawn em ${respawnTime/1000} segundos`);
    
    // Remove o monstro
    this.entityManager.removeMonster(monsterId);
    
    // Agenda o respawn
    const timer = setTimeout(() => {
      // Remove da lista de timers
      this.respawnTimers.delete(monsterId);
      
      // console.log(`Respawnando monstro tipo ${spawnInfo.type} em (${spawnInfo.position.x.toFixed(2)}, ${spawnInfo.position.z.toFixed(2)})`);
      
      // Cria um novo monstro com os dados salvos
      const newMonster = this.entityManager.createMonster(
        spawnInfo.type,
        spawnInfo.position,
        spawnInfo.level,
        spawnInfo.scale // Usando a escala preservada
      );
      
      // Atualiza metadata
      newMonster.spawnAreaId = spawnInfo.spawnAreaId;
      newMonster.area = spawnInfo.area;
      
      // console.log(`Monstro respawnado: ${newMonster.id} em (${newMonster.position.x.toFixed(2)}, ${newMonster.position.z.toFixed(2)})`);
    }, respawnTime);
    
    // Registra o timer
    this.respawnTimers.set(monsterId, timer);
  }
  
  /**
   * Gera uma posição aleatória dentro dos bounds
   */
  getRandomPositionInBounds(bounds) {
    return {
      x: bounds.xMin + Math.random() * (bounds.xMax - bounds.xMin),
      y: 0,
      z: bounds.zMin + Math.random() * (bounds.zMax - bounds.zMin),
    };
  }
  
  /**
   * Calcula um "raio" aproximado para a área de spawn (usado para compatibilidade)
   */
  getRadiusFromBounds(bounds) {
    const dx = bounds.xMax - bounds.xMin;
    const dz = bounds.zMax - bounds.zMin;
    return Math.max(dx, dz) / 2;
  }
  
  /**
   * Gera um número inteiro aleatório entre min e max (inclusive)
   * @param {number} min - Valor mínimo
   * @param {number} max - Valor máximo
   * @returns {number} - Número aleatório
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Atualiza o sistema de spawn
   */
  update() {
    // Verificação de segurança (a cada 5 segundos)
    const now = Date.now();
    if (!this.lastUpdateCheck || now - this.lastUpdateCheck > 5000) {
      this.lastUpdateCheck = now;
      
      // Log detalhado das áreas de spawn
      // console.log('------ Status de Áreas de Spawn ------');
      
      // Verifica se alguma área de spawn está abaixo do número máximo de monstros
      for (const spawnArea of this.spawnAreas) {
        const monstersInArea = this.countMonstersInArea(spawnArea);
        // console.log(`Área ${spawnArea.id}: ${monstersInArea}/${spawnArea.maxMonsters} monstros`);
        
        if (monstersInArea < spawnArea.maxMonsters) {
          // Cria monstros faltantes
          const monstersToCreate = spawnArea.maxMonsters - monstersInArea;
          // console.log(`Criando ${monstersToCreate} monstros faltantes na área ${spawnArea.id}`);
          
          for (let i = 0; i < monstersToCreate; i++) {
            // Gera uma posição aleatória dentro da área
            const position = this.getRandomPositionInBounds(spawnArea.bounds);
            
            // Gera um nível aleatório
            const level = this.getRandomInt(spawnArea.minLevel, spawnArea.maxLevel);
            
            // Cria o monstro
            const monster = this.entityManager.createMonster(
              spawnArea.monsterType,
              position,
              level,
              spawnArea.scale // Passando a escala para o monster
            );
            
            // Adiciona metadata ao monstro para rastreamento
            monster.spawnAreaId = spawnArea.id;
            monster.area = spawnArea.area;
            
            // console.log(`Monstro adicional criado: ${monster.id} (${spawnArea.monsterType}) em (${position.x.toFixed(2)}, ${position.z.toFixed(2)})`);
          }
        }
      }
      
      // console.log('-----------------------------------');
    }
  }
  
  /**
   * Limpa todos os timers ao desligar o servidor
   */
  cleanup() {
    // Limpa timers de respawn
    for (const timerId of this.respawnTimers.values()) {
      clearTimeout(timerId);
    }
    
    this.respawnTimers.clear();
  }
} 