/**
 * Sistema de spawn que gerencia a criação e respawn de entidades no mundo
 */
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
      const position = this.getRandomPositionInCircle(
        spawnArea.position,
        spawnArea.radius
      );
      
      // Gera um nível aleatório
      const level = this.getRandomInt(spawnArea.minLevel, spawnArea.maxLevel);
      
      // Cria o monstro
      const monster = this.entityManager.createMonster(
        spawnArea.monsterType,
        position,
        level
      );
      
      // Adiciona metadata ao monstro para rastreamento
      monster.spawnAreaId = spawnArea.id;
      
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
    const newPosition = this.getRandomPositionInCircle(spawnArea.position, spawnArea.radius);
    
    // Salva as informações relevantes para o respawn
    const spawnInfo = {
      type: monster.monsterType,
      position: newPosition,
      level: monster.level,
      spawnAreaId: monster.spawnAreaId
    };
    
    console.log(`Monstro ${monsterId} (${monster.monsterType}) agendado para respawn em ${respawnTime/1000} segundos`);
    
    // Remove o monstro
    this.entityManager.removeMonster(monsterId);
    
    // Agenda o respawn
    const timerId = setTimeout(() => {
      // Cria um novo monstro com as mesmas propriedades, mas em uma posição aleatória na área
      const newMonster = this.entityManager.createMonster(
        spawnInfo.type,
        spawnInfo.position,
        spawnInfo.level
      );
      
      // Adiciona metadata
      newMonster.spawnAreaId = spawnInfo.spawnAreaId;
      
      console.log(`Monstro respawnou: ${newMonster.id} (${spawnInfo.type}) em (${spawnInfo.position.x.toFixed(2)}, ${spawnInfo.position.z.toFixed(2)})`);
      
      // Remove o timer da lista
      this.respawnTimers.delete(monsterId);
    }, respawnTime);
    
    this.respawnTimers.set(monsterId, timerId);
  }
  
  /**
   * Gera uma posição aleatória dentro de um círculo
   * @param {Object} center - Posição central {x, y, z}
   * @param {number} radius - Raio do círculo
   * @returns {Object} - Posição aleatória {x, y, z}
   */
  getRandomPositionInCircle(center, radius) {
    // Ângulo aleatório
    const angle = Math.random() * Math.PI * 2;
    
    // Distância aleatória (raiz quadrada para distribuição uniforme)
    const distance = Math.sqrt(Math.random()) * radius;
    
    // Calcula posição
    return {
      x: center.x + Math.cos(angle) * distance,
      y: center.y,
      z: center.z + Math.sin(angle) * distance
    };
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
   * Inicializa áreas de spawn padrão para o mundo
   */
  initializeDefaultSpawnAreas() {
    // Se for o mapa desértico, usar spots e boss do novo layout
    const desert = (typeof WORLD !== 'undefined' && WORLD.ZONES && WORLD.ZONES.DESERT_PATH) ? WORLD.ZONES.DESERT_PATH : null;
    if (desert) {
      // Spots de combate
      for (const spot of desert.SPOTS) {
        this.registerSpawnArea({
          id: `desert-spot-${spot.id}`,
          monsterType: 'BLACK_MIST_ZOMBIE', // Pode variar depois
          position: { x: spot.x, y: 0, z: spot.z },
          radius: 6,
          maxMonsters: 4,
          respawnTime: 20000,
          minLevel: 1,
          maxLevel: 3
        });
      }
      // Boss
      const boss = desert.BOSS;
      this.registerSpawnArea({
        id: 'desert-boss',
        monsterType: 'SPIDER', // Exemplo de boss
        position: { x: boss.x, y: 0, z: boss.z },
        radius: boss.radius,
        maxMonsters: 1,
        respawnTime: 60000, // 1 minuto para respawn do boss
        minLevel: 5,
        maxLevel: 7
      });
      return;
    }
    // Área 1: Zumbis da Névoa Negra perto do spawn (pequeno grupo)
    this.registerSpawnArea({
      id: 'spawn-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 10, y: 0, z: 10 },
      radius: 5,
      maxMonsters: 3, // Reduzido para não sobrecarregar a área inicial
      respawnTime: 20000, // 20 segundos para respawn
      minLevel: 1,
      maxLevel: 1
    });
    
    // Área 2: Floresta Norte (grupo médio de zumbis)
    this.registerSpawnArea({
      id: 'forest-north-blackmistzombies-1',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: -40, y: 0, z: -60 },
      radius: 15,
      maxMonsters: 8,
      respawnTime: 15000, // 15 segundos para respawn
      minLevel: 1,
      maxLevel: 2
    });
    
    // Área 3: Floresta Norte (segundo grupo)
    this.registerSpawnArea({
      id: 'forest-north-blackmistzombies-2',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 30, y: 0, z: -70 },
      radius: 12,
      maxMonsters: 6,
      respawnTime: 15000,
      minLevel: 2,
      maxLevel: 3
    });
    
    // Área 4: Floresta Oeste (grupo denso)
    this.registerSpawnArea({
      id: 'forest-west-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: -70, y: 0, z: 0 },
      radius: 20,
      maxMonsters: 10,
      respawnTime: 25000, // 25 segundos
      minLevel: 2,
      maxLevel: 3
    });
    
    // Área 5: Montanhas (zumbis mais fortes)
    this.registerSpawnArea({
      id: 'mountain-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 80, y: 0, z: 20 },
      radius: 25,
      maxMonsters: 12,
      respawnTime: 30000, // 30 segundos
      minLevel: 3,
      maxLevel: 4
    });
    
    // Área 6: Planícies (grupo pequeno espalhado)
    this.registerSpawnArea({
      id: 'plains-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 0, y: 0, z: 70 },
      radius: 30, // Mais espalhados
      maxMonsters: 7,
      respawnTime: 20000,
      minLevel: 2,
      maxLevel: 3
    });
    
    // Área 7: Pântano (grupo médio)
    this.registerSpawnArea({
      id: 'swamp-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 60, y: 0, z: 85 },
      radius: 15,
      maxMonsters: 8,
      respawnTime: 25000,
      minLevel: 3,
      maxLevel: 4
    });
    
    // Área 8: Ruínas (zumbis mais fortes)
    this.registerSpawnArea({
      id: 'ruins-blackmistzombies',
      monsterType: 'BLACK_MIST_ZOMBIE',
      position: { x: 70, y: 0, z: -70 },
      radius: 18,
      maxMonsters: 10,
      respawnTime: 30000,
      minLevel: 4,
      maxLevel: 5
    });
    
    // Áreas de spawn para aranhas (SPIDER)
    // Área 1: Aranhas na Floresta Oeste (pequena área)
    this.registerSpawnArea({
      id: 'forest-west-spiders',
      monsterType: 'SPIDER',
      position: { x: -60, y: 0, z: 20 },
      radius: 10,
      maxMonsters: 4,
      respawnTime: 18000, // 18 segundos
      minLevel: 1,
      maxLevel: 2
    });
    
    // Área 2: Aranhas no Pântano (área média)
    this.registerSpawnArea({
      id: 'swamp-spiders',
      monsterType: 'SPIDER',
      position: { x: 60, y: 0, z: 80 },
      radius: 15,
      maxMonsters: 7,
      respawnTime: 22000, // 22 segundos
      minLevel: 2,
      maxLevel: 3
    });
    
    // Área 3: Aranhas nas Ruínas (área grande com aranhas mais fortes)
    this.registerSpawnArea({
      id: 'ruins-spiders',
      monsterType: 'SPIDER',
      position: { x: 70, y: 0, z: -70 },
      radius: 18,
      maxMonsters: 9,
      respawnTime: 25000, // 25 segundos
      minLevel: 3,
      maxLevel: 4
    });
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
            const position = this.getRandomPositionInCircle(
              spawnArea.position,
              spawnArea.radius
            );
            
            // Gera um nível aleatório
            const level = this.getRandomInt(spawnArea.minLevel, spawnArea.maxLevel);
            
            // Cria o monstro
            const monster = this.entityManager.createMonster(
              spawnArea.monsterType,
              position,
              level
            );
            
            // Adiciona metadata ao monstro para rastreamento
            monster.spawnAreaId = spawnArea.id;
            
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