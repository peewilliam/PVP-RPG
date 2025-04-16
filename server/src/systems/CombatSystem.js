/**
 * Sistema de combate que gerencia interações de combate entre jogadores e monstros
 * Suporta tanto combate PvE (Player vs Environment) quanto PvP (Player vs Player)
 */
export class CombatSystem {
  /**
   * @param {EntityManager} entityManager - Gerenciador de entidades
   */
  constructor(entityManager) {
    this.entityManager = entityManager;
    this.damageMultipliers = {
      player: {
        monster: 1.0, // Dano normal do jogador contra monstros
        player: 0.7   // Dano reduzido do jogador contra outros jogadores (PvP)
      },
      monster: {
        player: 1.0   // Dano normal do monstro contra jogadores
      }
    };
    
    console.log('Sistema de combate inicializado');
  }
  
  /**
   * Processa o uso de uma habilidade e aplica os efeitos de combate
   * @param {Player} player - Jogador que usou a habilidade
   * @param {number} abilityId - ID da habilidade usada
   * @param {Object} targetPosition - Posição alvo da habilidade
   * @param {Object} origin - Posição de origem da habilidade
   * @returns {Object} - Informações sobre o resultado do ataque
   */
  processAbilityUse(player, abilityId, targetPosition, origin) {
    const ability = player.getAbilityById(abilityId);
    if (!ability) return { success: false, reason: 'Habilidade inválida' };
    
    // Parâmetros do efeito
    const effect = {
      speed: ability.SPEED || 18,
      maxDist: ability.RANGE || 40,
      duration: ability.DURATION || 1.5,
      damage: ability.DAMAGE || 10,
      areaRadius: ability.AREA_RADIUS || 0
    };
    
    // Resultados da habilidade
    const result = {
      success: true,
      hits: []
    };
    
    // Trata cada tipo de habilidade de forma diferente
    if (ability.TYPE === 'mobility' && ability.ID === 2) { // Teleporte
      // Calcula distância do teleporte
      const dx = targetPosition.x - origin.x;
      const dz = targetPosition.z - origin.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      // Se a distância for maior que o alcance máximo, limita ao alcance máximo
      if (distance > ability.RANGE) {
        const factor = ability.RANGE / distance;
        targetPosition.x = origin.x + dx * factor;
        targetPosition.z = origin.z + dz * factor;
      }
      
      // Teleporta o jogador para a posição alvo
      player.position.x = targetPosition.x;
      player.position.z = targetPosition.z;
      
      result.teleportPosition = { ...targetPosition };
      console.log(`Jogador ${player.id} teleportado para (${targetPosition.x.toFixed(2)}, ${targetPosition.z.toFixed(2)})`);
      
      return result;
    }
    else if (ability.TYPE === 'projectile') {
      // Calcula o vetor do projétil
      const projVec = {
        x: targetPosition.x - origin.x,
        y: 0,
        z: targetPosition.z - origin.z
      };
      
      // Normaliza o vetor
      const projLen = Math.sqrt(projVec.x * projVec.x + projVec.z * projVec.z);
      const normVec = {
        x: projVec.x / projLen,
        y: 0,
        z: projVec.z / projLen
      };
      
      // Verifica colisão com monstros
      this._checkProjectileCollisionWithEntities(
        origin, normVec, effect, player, result, this.entityManager.monsters.values(), 'monster'
      );
      
      // Verifica colisão com outros jogadores (PvP)
      this._checkProjectileCollisionWithEntities(
        origin, normVec, effect, player, result, this.entityManager.players.values(), 'player'
      );
    } 
    else if (ability.TYPE === 'aoe' || ability.TYPE === 'zone') {
      // Dano em área no ponto alvo
      this._applyAreaEffect(targetPosition, effect.areaRadius, effect.damage, player, result);
    }
    
    return result;
  }
  
  /**
   * Verifica colisão de projétil com entidades
   * @private
   */
  _checkProjectileCollisionWithEntities(origin, normVec, effect, source, result, entities, entityType) {
    for (const entity of entities) {
      // Ignora entidades inativas, mortas ou o próprio jogador que lançou a habilidade
      if (!entity.active || entity.stats.hp <= 0 || entity.id === source.id) continue;
      
      // Projeta ponto da entidade na linha do projétil
      const rel = { x: entity.position.x - origin.x, z: entity.position.z - origin.z };
      const t = (rel.x * normVec.x + rel.z * normVec.z);
      
      // Verifica se está dentro do alcance do projétil
      if (t < 0 || t > effect.maxDist) continue;
      
      // Ponto mais próximo da entidade na linha do projétil
      const closest = { x: origin.x + normVec.x * t, z: origin.z + normVec.z * t };
      
      // Calcula distância do ponto mais próximo ao centro da entidade
      const dist = Math.sqrt(
        Math.pow(entity.position.x - closest.x, 2) + 
        Math.pow(entity.position.z - closest.z, 2)
      );
      
      // Verifica se atingiu a entidade (considerando o raio de colisão)
      if (dist < (entity.collisionRadius || 0.6)) {
        // Aplica dano com o modificador apropriado
        const damageModifier = this.damageMultipliers[source.type]?.[entityType] || 1.0;
        const damage = Math.round(effect.damage * damageModifier);
        
        // Aplica o dano à entidade
        const died = entity.takeDamage(damage, source);
        
        // Registra o resultado do ataque
        result.hits.push({
          id: entity.id,
          type: entityType,
          damage: damage,
          died: died,
          position: { ...entity.position }
        });
        
        // Para projéteis que atingem apenas o primeiro alvo, podemos parar aqui
        if (!effect.piercing) break;
      }
    }
  }
  
  /**
   * Aplica efeito de área em torno de um ponto
   * @private
   */
  _applyAreaEffect(center, radius, baseDamage, source, result) {
    // Verifica dano em monstros dentro da área
    this._applyAreaDamageToEntities(
      center, radius, baseDamage, source, result, 
      this.entityManager.monsters.values(), 'monster'
    );
    
    // Verifica dano em jogadores dentro da área (PvP)
    this._applyAreaDamageToEntities(
      center, radius, baseDamage, source, result,
      this.entityManager.players.values(), 'player'
    );
    
    // Adiciona informações da área ao resultado
    result.areaEffect = {
      center: { ...center },
      radius: radius
    };
  }
  
  /**
   * Aplica dano de área a um grupo de entidades
   * @private
   */
  _applyAreaDamageToEntities(center, radius, baseDamage, source, result, entities, entityType) {
    for (const entity of entities) {
      // Ignora entidades inativas, mortas ou o próprio jogador que lançou a habilidade
      if (!entity.active || entity.stats.hp <= 0 || entity.id === source.id) continue;
      
      // Calcula distância do centro da área à entidade
      const dist = Math.sqrt(
        Math.pow(entity.position.x - center.x, 2) + 
        Math.pow(entity.position.z - center.z, 2)
      );
      
      // Verifica se a entidade está dentro do raio da área
      if (dist <= radius) {
        // Dano diminui com a distância do centro (100% no centro, 50% na borda)
        const distanceFactor = 1 - (dist / radius) * 0.5;
        
        // Aplica dano com o modificador apropriado
        const damageModifier = this.damageMultipliers[source.type]?.[entityType] || 1.0;
        const damage = Math.round(baseDamage * distanceFactor * damageModifier);
        
        // Aplica o dano à entidade
        const died = entity.takeDamage(damage, source);
        
        // Registra o resultado do ataque
        result.hits.push({
          id: entity.id,
          type: entityType,
          damage: damage,
          died: died,
          position: { ...entity.position }
        });
      }
    }
  }
  
  /**
   * Processa a morte de um jogador
   * @param {Player} player - Jogador que morreu
   * @param {Entity} killer - Entidade que matou o jogador (opcional)
   */
  handlePlayerDeath(player, killer) {
    if (!player) return;
    
    console.log(`Jogador ${player.id} morreu${killer ? ` morto por ${killer.id} (${killer.type})` : ''}`);
    
    // Reinicia os atributos do jogador para os valores iniciais
    player.resetAfterDeath();
    
    // Teleporta o jogador para o ponto de spawn
    this._respawnPlayerAtSpawnPoint(player);
    
    // Notifica o cliente sobre o respawn
    if (player.channel) {
      player.channel.emit('player:respawn', {
        position: player.position,
        stats: player.stats,
        level: player.level,
        xp: player.xp
      });
    }
  }
  
  /**
   * Reposiciona o jogador no ponto de spawn
   * @private
   */
  _respawnPlayerAtSpawnPoint(player) {
    // Usa a zona de spawn definida nas constantes do jogo
    const spawnZone = {
      X_MIN: -5, X_MAX: 5,
      Z_MIN: -5, Z_MAX: 5
    };
    
    // Posição aleatória na zona de spawn
    player.position.x = spawnZone.X_MIN + Math.random() * (spawnZone.X_MAX - spawnZone.X_MIN);
    player.position.z = spawnZone.Z_MIN + Math.random() * (spawnZone.Z_MAX - spawnZone.Z_MIN);
    
    // Reseta velocidade
    player.velocity.x = 0;
    player.velocity.z = 0;
  }
} 