import { WORLD } from '../../../shared/constants/gameConstants.js';

/**
 * Sistema de colisão que detecta e resolve colisões entre entidades
 */
export class CollisionSystem {
  constructor(entityManager) {
    this.entityManager = entityManager;
    this.collisionLayers = {
      PLAYER: 1,
      MONSTER: 2,
      WORLD_OBJECT: 4
    };
    
    // Mapa de colisões entre camadas
    // Define quais camadas colidem com quais
    this.collisionMatrix = {
      // Jogadores colidem com monstros e objetos do mundo, mas não com outros jogadores
      [this.collisionLayers.PLAYER]: this.collisionLayers.MONSTER | this.collisionLayers.WORLD_OBJECT,
      
      // Monstros colidem com jogadores e objetos do mundo, mas não com outros monstros
      [this.collisionLayers.MONSTER]: this.collisionLayers.PLAYER | this.collisionLayers.WORLD_OBJECT,
      
      // Objetos do mundo colidem com jogadores e monstros
      [this.collisionLayers.WORLD_OBJECT]: this.collisionLayers.PLAYER | this.collisionLayers.MONSTER
    };
    
    // Raios de colisão padrão para cada tipo de entidade
    this.collisionRadii = {
      player: 0.5,
      monster: 0.5,
      worldObject: 1.0
    };
  }
  
  /**
   * Atualiza o sistema de colisão, verificando e resolvendo colisões
   */
  update() {
    this.checkPlayerCollisions();
    this.checkMonsterCollisions();
    this.checkWorldBoundaries();
    // No futuro, implementar colisões de projéteis, habilidades, etc.
  }
  
  /**
   * Verifica colisões de jogadores com outras entidades
   */
  checkPlayerCollisions() {
    // Para cada jogador ativo
    for (const player of this.entityManager.players.values()) {
      if (!player.active) continue;
      
      // Verifica colisões com objetos do mundo (árvores, rochas, etc.) - futuro
      this.checkWorldObjectCollisions(player);
      
      // Verifica colisões com monstros
      // Nota: Jogadores não colidem com outros jogadores
      this.checkEntityCollisions(player, Array.from(this.entityManager.monsters.values()));
    }
  }
  
  /**
   * Verifica colisões de monstros com outras entidades
   */
  checkMonsterCollisions() {
    // Para cada monstro ativo
    for (const monster of this.entityManager.monsters.values()) {
      if (!monster.active) continue;
      
      // Verifica colisões com objetos do mundo (árvores, rochas, etc.) - futuro
      this.checkWorldObjectCollisions(monster);
      
      // Nota: Monstros não colidem com outros monstros, 
      // e a colisão de monstros com jogadores já é verificada em checkPlayerCollisions
    }
  }
  
  /**
   * Verifica e garante que todas as entidades estejam dentro dos limites do mundo
   */
  checkWorldBoundaries() {
    if (!WORLD.BOUNDARIES.ENABLED) return;
    
    // Cálculo dos limites do mundo
    const halfWidth = WORLD.SIZE.WIDTH / 2;
    const halfHeight = WORLD.SIZE.HEIGHT / 2;
    const borderWidth = WORLD.BOUNDARIES.BORDER_WIDTH;
    
    // Limites em X (largura do mundo)
    const minX = -halfWidth + borderWidth;
    const maxX = halfWidth - borderWidth;
    
    // Limites em Z (altura do mundo)
    const minZ = -halfHeight + borderWidth;
    const maxZ = halfHeight - borderWidth;
    
    // Verificar jogadores
    for (const player of this.entityManager.players.values()) {
      if (!player.active) continue;
      
      // Aplicar limites
      player.position.x = Math.max(minX, Math.min(player.position.x, maxX));
      player.position.z = Math.max(minZ, Math.min(player.position.z, maxZ));
    }
    
    // Verificar monstros
    for (const monster of this.entityManager.monsters.values()) {
      if (!monster.active) continue;
      
      // Aplicar limites
      monster.position.x = Math.max(minX, Math.min(monster.position.x, maxX));
      monster.position.z = Math.max(minZ, Math.min(monster.position.z, maxZ));
    }
    
    // Não verificamos objetos do mundo, pois eles geralmente são estáticos
    // e já devem ser posicionados dentro dos limites na criação
  }
  
  /**
   * Verifica colisões entre uma entidade e objetos do mundo
   * @param {Entity} entity - A entidade a verificar colisão
   */
  checkWorldObjectCollisions(entity) {
    // Para cada objeto do mundo
    for (const worldObject of this.entityManager.worldObjects.values()) {
      if (!worldObject.active || !worldObject.isCollidable) continue;
      
      const entityRadius = this.getCollisionRadius(entity);
      const worldObjectRadius = this.getCollisionRadius(worldObject);
      const totalRadius = entityRadius + worldObjectRadius;
      
      // Verifica se há colisão
      if (entity.distanceTo(worldObject) < totalRadius) {
        // Log de colisão para depuração
        if (process.env.DEBUG_COLLISIONS === 'true') {
          console.log(`Colisão detectada: ${entity.type} (${entity.id}) com ${worldObject.objectType} (${worldObject.id})`);
        }
        
        // Resolver a colisão (empurrar a entidade para fora do objeto)
        this.resolveCollision(entity, worldObject);
      }
    }
  }
  
  /**
   * Verifica colisões entre uma entidade e uma lista de entidades
   * @param {Entity} entity - A entidade a verificar colisão
   * @param {Array} entities - Lista de entidades para verificar colisão
   */
  checkEntityCollisions(entity, entities) {
    for (const other of entities) {
      if (!other.active || other.id === entity.id) continue;
      
      const entityRadius = this.getCollisionRadius(entity);
      const otherRadius = this.getCollisionRadius(other);
      const totalRadius = entityRadius + otherRadius;
      
      // Verifica se há colisão
      if (entity.distanceTo(other) < totalRadius) {
        // Log de colisão para depuração
        if (process.env.DEBUG_COLLISIONS === 'true') {
          console.log(`Colisão detectada: ${entity.type} (${entity.id}) com ${other.type} (${other.id})`);
        }
        
        // Resolver a colisão (empurrar as entidades para fora uma da outra)
        this.resolveCollision(entity, other);
      }
    }
  }
  
  /**
   * Resolve uma colisão entre duas entidades
   * @param {Entity} entity1 - Primeira entidade da colisão
   * @param {Entity} entity2 - Segunda entidade da colisão
   */
  resolveCollision(entity1, entity2) {
    // Calcula vetor da colisão
    const dx = entity2.position.x - entity1.position.x;
    const dz = entity2.position.z - entity1.position.z;
    
    // Calcula a distância
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    // Se a distância for zero, adiciona um pequeno offset para evitar divisão por zero
    if (distance === 0) {
      entity1.position.x -= 0.1;
      entity1.position.z -= 0.1;
      return;
    }
    
    // Calcula a penetração - o quanto as entidades estão sobrepostas
    const entity1Radius = this.getCollisionRadius(entity1);
    const entity2Radius = this.getCollisionRadius(entity2);
    const penetration = (entity1Radius + entity2Radius) - distance;
    
    // Se não houver penetração, não há colisão
    if (penetration <= 0) return;
    
    // Log detalhado da resolução de colisão
    if (process.env.DEBUG_COLLISIONS === 'true') {
      console.log(`Resolvendo colisão: penetração de ${penetration.toFixed(2)} unidades`);
    }
    
    // Normaliza o vetor de direção
    const dirX = dx / distance;
    const dirZ = dz / distance;
    
    // Se a entidade 1 for um jogador ou monstro e a entidade 2 for um objeto do mundo,
    // apenas a entidade 1 se move
    if ((entity1.type === 'player' || entity1.type === 'monster') && entity2.type === 'worldObject') {
      entity1.position.x -= dirX * penetration;
      entity1.position.z -= dirZ * penetration;
      
      if (process.env.DEBUG_COLLISIONS === 'true') {
        console.log(`Entidade ${entity1.id} empurrada para fora do objeto ${entity2.id}`);
      }
    }
    // Se ambas forem dinâmicas (jogador ou monstro), ambas se movem
    else if ((entity1.type === 'player' || entity1.type === 'monster') && 
             (entity2.type === 'player' || entity2.type === 'monster')) {
      // Move cada entidade para metade da penetração
      entity1.position.x -= dirX * (penetration * 0.5);
      entity1.position.z -= dirZ * (penetration * 0.5);
      
      entity2.position.x += dirX * (penetration * 0.5);
      entity2.position.z += dirZ * (penetration * 0.5);
      
      if (process.env.DEBUG_COLLISIONS === 'true') {
        console.log(`Ambas entidades ${entity1.id} e ${entity2.id} empurradas em direções opostas`);
      }
    }
  }
  
  /**
   * Obtém o raio de colisão de uma entidade
   * @param {Entity} entity - A entidade
   * @returns {number} - Raio de colisão da entidade
   */
  getCollisionRadius(entity) {
    // Se a entidade tiver um raio de colisão específico, use-o
    if (entity.collisionRadius !== undefined) {
      return entity.collisionRadius;
    }
    
    // Caso contrário, use o raio padrão para o tipo da entidade
    return this.collisionRadii[entity.type] || 0.5;
  }
  
  /**
   * Verifica se dois tipos de entidades podem colidir
   * @param {string} type1 - Tipo da primeira entidade
   * @param {string} type2 - Tipo da segunda entidade
   * @returns {boolean} - true se os tipos podem colidir, false caso contrário
   */
  canCollide(type1, type2) {
    let layer1, layer2;
    
    switch (type1) {
      case 'player': layer1 = this.collisionLayers.PLAYER; break;
      case 'monster': layer1 = this.collisionLayers.MONSTER; break;
      case 'worldObject': layer1 = this.collisionLayers.WORLD_OBJECT; break;
      default: return false;
    }
    
    switch (type2) {
      case 'player': layer2 = this.collisionLayers.PLAYER; break;
      case 'monster': layer2 = this.collisionLayers.MONSTER; break;
      case 'worldObject': layer2 = this.collisionLayers.WORLD_OBJECT; break;
      default: return false;
    }
    
    // Verifica se a camada1 pode colidir com a camada2
    return (this.collisionMatrix[layer1] & layer2) !== 0;
  }
  
  /**
   * Limpa recursos e estruturas do sistema de colisão
   * Este método é chamado quando o servidor está sendo encerrado
   */
  cleanup() {
    // Atualmente não há recursos para limpar, mas mantemos o método
    // para consistência com outros sistemas e para facilitar extensões futuras
    console.log('CollisionSystem: Recursos liberados');
  }
} 