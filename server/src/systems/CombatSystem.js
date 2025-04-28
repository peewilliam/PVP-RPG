/**
 * Sistema de combate que gerencia interações de combate entre jogadores e monstros
 * Suporta tanto combate PvE (Player vs Environment) quanto PvP (Player vs Player)
 */
import { WORLD, EVENTS, ABILITY_IDS, MONSTERS } from '../../../shared/constants/gameConstants.js';

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
    
    // console.log('Sistema de combate inicializado');
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
    
    // Adicionar log para debug
    // console.log(`Processando habilidade ${ability.NAME} (ID: ${abilityId}) do jogador ${player.id}`);
    // console.log(`Parâmetros da habilidade:`, effect);
    
    // Trata cada tipo de habilidade de forma diferente
    if (ability.TYPE === 'mobility' && ability.ID === ABILITY_IDS.TELEPORT) { // Teleporte
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
      // console.log(`Jogador ${player.id} teleportado para (${targetPosition.x.toFixed(2)}, ${targetPosition.z.toFixed(2)})`);
      
      return result;
    }
    else if (ability.TYPE === 'projectile') {
      // Calcula o vetor do projétil
      const projVec = {
        x: targetPosition.x - origin.x,
        y: 0,
        z: targetPosition.z - origin.z
      };
      const projLen = Math.sqrt(projVec.x * projVec.x + projVec.z * projVec.z);
      const normVec = {
        x: projVec.x / projLen,
        y: 0,
        z: projVec.z / projLen
      };
      // Cria o projétil persistente
      this.entityManager.createProjectile({
        position: { ...origin },
        direction: normVec,
        speed: effect.speed,
        radius: 0.4, // Raio da fireball
        maxLifetime: effect.duration * 1000, // ms
        owner: player,
        ability: ability
      });
      // O resultado não terá hits imediatos, pois o dano será processado no impacto
      return result;
    } 
    else if (ability.TYPE === 'aoe' || ability.TYPE === 'zone') {
      // Verifica se é Meteor Storm (Chuva de Meteoros)
      if (ability.TYPE === 'zone' && ability.ID === ABILITY_IDS.METEOR_STORM) {
        // Verifica se DURATION já está em ms (valor > 100) ou em segundos (valor < 100)
        let durationMs;
        if (ability.DURATION > 100) {
          // Já está em ms, usa direto
          durationMs = ability.DURATION;
        } else {
          // Está em segundos, converte para ms
          durationMs = ability.DURATION * 1000;
        }
        
        // Verifica se TICK_INTERVAL já está em ms (valor > 100) ou em segundos (valor < 100)
        let tickIntervalMs;
        if (ability.TICK_INTERVAL > 100) {
          // Já está em ms, usa direto
          tickIntervalMs = ability.TICK_INTERVAL;
        } else {
          // Está em segundos, converte para ms
          tickIntervalMs = (ability.TICK_INTERVAL || 0.5) * 1000;
        }
        
        // Validação para garantir que a duração e o tick interval estejam dentro de limites razoáveis
        if (durationMs > 60000) { // Não permitir durações maiores que 1 minuto
          // console.warn(`[AVISO] Duração ${durationMs}ms muito longa, limitando a 60000ms`);
          durationMs = 60000;
        }
        
        if (tickIntervalMs > 10000) { // Não permitir intervalos maiores que 10 segundos
          // console.warn(`[AVISO] Intervalo de tick ${tickIntervalMs}ms muito longo, limitando a 10000ms`);
          tickIntervalMs = 10000;
        }
        
        // Cria zona de dano contínua
        const zoneParams = {
          position: { ...targetPosition },
          radius: ability.AREA_RADIUS || 3,
          duration: durationMs,
          tickInterval: tickIntervalMs,
          damage: ability.DAMAGE || 10,
          owner: player,
          ability: ability
        };
        
        const zone = this.entityManager.createDamageZone(zoneParams);
        
        // O resultado não terá hits imediatos
        return result;
      }
      // Frost Spikes (Estacas de Gelo)
      else if (ability.TYPE === 'aoe' && ability.ID === ABILITY_IDS.FROST_SPIKES) {
        // console.log(`[DEBUG] Criando zona instantânea para Estacas de Gelo (ID=${ability.ID}) no local (${targetPosition.x.toFixed(2)}, ${targetPosition.z.toFixed(2)})`);
        // Zona instantânea: duração e tickInterval muito curtos (100ms)
        const durationMs = 100;
        const tickIntervalMs = 100;
        const zoneParams = {
          position: { ...targetPosition },
          radius: ability.AREA_RADIUS || 3,
          duration: durationMs,
          tickInterval: tickIntervalMs,
          damage: ability.DAMAGE || 10,
          owner: player,
          ability: ability,
          frostSpikes: true // flag para identificar zona especial
        };
        // console.log(`[DEBUG] Parâmetros da zona Frost Spikes:`, zoneParams);
        const zone = this.entityManager.createDamageZone(zoneParams);
        // console.log(`[DEBUG] Zona instantânea criada com ID: ${zone.id}`);
        return result;
      } else {
        // Dano em área instantâneo (ex: Estacas de Gelo)
        this._applyAreaEffect(targetPosition, effect.areaRadius, effect.damage, player, result);
      }
    }
    
    // Log do resultado
    // console.log(`Resultado da habilidade ${ability.NAME}:`, { hits: result.hits.length });
    
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
        
        // console.log(`Aplicando dano de ${damage} ao ${entityType} ${entity.id} (HP atual: ${entity.stats.hp})`);
        
        // Aplica o dano à entidade
        const realDamage = entity.takeDamage(damage, source);
        
        // console.log(`Após dano: ${entityType} ${entity.id} HP: ${entity.stats.hp}, Morreu: ${realDamage <= 0}`);
        
        // Registra o resultado do ataque
        result.hits.push({
          id: entity.id,
          type: entityType,
          damage: realDamage,
          died: realDamage <= 0,
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
    // console.log(`Aplicando efeito de área (raio: ${radius}, dano base: ${baseDamage})`);
    
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
    let entitiesFound = 0;
    
    for (const entity of entities) {
      // Ignora entidades inativas, mortas ou o próprio jogador que lançou a habilidade
      if (!entity.active || entity.stats.hp <= 0 || entity.id === source.id) continue;
      
      // Calcula distância do centro da área à entidade
      const dist = Math.sqrt(
        Math.pow(entity.position.x - center.x, 2) + 
        Math.pow(entity.position.z - center.z, 2)
      );
      
      // Debug de distância
      entitiesFound++;
      
      // Verifica se a entidade está dentro do raio da área
      if (dist <= radius) {
        // Dano diminui com a distância do centro (100% no centro, 50% na borda)
        const distanceFactor = 1 - (dist / radius) * 0.5;
        
        // Aplica dano com o modificador apropriado
        const damageModifier = this.damageMultipliers[source.type]?.[entityType] || 1.0;
        const damage = Math.round(baseDamage * distanceFactor * damageModifier);
        
        // console.log(`Aplicando dano de área de ${damage} ao ${entityType} ${entity.id} (HP atual: ${entity.stats.hp})`);
        
        // Aplica o dano à entidade
        const realDamage = entity.takeDamage(damage, source);
        
        // console.log(`Após dano de área: ${entityType} ${entity.id} HP: ${entity.stats.hp}, Morreu: ${realDamage <= 0}`);
        
        // Registra o resultado do ataque
        result.hits.push({
          id: entity.id,
          type: entityType,
          damage: realDamage,
          died: realDamage <= 0,
          position: { ...entity.position }
        });
      }
    }
    
    // console.log(`Encontradas ${entitiesFound} entidades do tipo ${entityType} na verificação de área`);
  }
  
  /**
   * Processa a morte de um jogador
   * @param {Player} player - Jogador que morreu
   * @param {Entity} killer - Entidade que matou o jogador
   */
  handlePlayerDeath(player, killer) {
    // console.log(`Processando morte do jogador ${player.id}`);
    player.die(killer);
    // O respawn será feito apenas quando o cliente requisitar
  }

  /**
   * Atualiza todos os projéteis ativos, verifica colisão e aplica dano
   * Deve ser chamado a cada tick do mundo
   * @param {number} deltaTime - Tempo desde a última atualização (ms)
   */
  updateProjectiles(deltaTime) {
    for (const [id, projectile] of this.entityManager.projectiles) {
      if (!projectile.active || projectile.markedForRemoval) continue;
      // Log posição do projétil
      // console.log(`[PROJETIL] ${id} pos=(${projectile.position.x.toFixed(2)},${projectile.position.z.toFixed(2)}) owner=${projectile.owner?.id}`);
      // Checa colisão com monstros
      for (const monster of this.entityManager.monsters.values()) {
        if (!monster.active || monster.stats.hp <= 0) continue;
        const dist = Math.sqrt(
          Math.pow(monster.position.x - projectile.position.x, 2) +
          Math.pow(monster.position.z - projectile.position.z, 2)
        );
        // Log posição do monstro
        // console.log(`[MONSTRO] ${monster.id} pos=(${monster.position.x.toFixed(2)},${monster.position.z.toFixed(2)}) dist=${dist.toFixed(2)}`);
        if (dist < (monster.collisionRadius + projectile.collisionRadius)) {
          // console.log(`[COLISAO] Projétil ${id} colidiu com monstro ${monster.id}`);
          // Aplica dano
          const damage = projectile.ability.DAMAGE;
          const realDamage = monster.takeDamage(damage, projectile.owner);
          // console.log(`[DANO] Aplicado ${damage} ao monstro ${monster.id} (morreu=${realDamage <= 0})`);
          // Feedback visual: emitir evento de dano para TODOS os jogadores conectados
          for (const player of this.entityManager.players.values()) {
            if (player.channel) {
              player.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
                targetId: monster.id,
                targetType: 'monster',
                targetName: MONSTERS[monster.monsterType]?.NAME || monster.monsterType,
                damage: realDamage,
                died: realDamage <= 0,
                position: { ...monster.position }
              });
            }
          }
          // console.log(`[EVENTO] DAMAGE_DEALT emitido para todos os jogadores (monstro atingido)`);
          projectile.markedForRemoval = true;
          break;
        }
      }
      // Checa colisão com jogadores (PvP)
      for (const player of this.entityManager.players.values()) {
        if (!player.active || player.stats.hp <= 0 || player.id === projectile.owner.id) continue;
        const dist = Math.sqrt(
          Math.pow(player.position.x - projectile.position.x, 2) +
          Math.pow(player.position.z - projectile.position.z, 2)
        );
        // Log posição do jogador
        // console.log(`[JOGADOR] ${player.id} pos=(${player.position.x.toFixed(2)},${player.position.z.toFixed(2)}) dist=${dist.toFixed(2)}`);
        if (dist < (player.collisionRadius + projectile.collisionRadius)) {
          // console.log(`[COLISAO] Projétil ${id} colidiu com jogador ${player.id}`);
          // Aplica dano PvP
          const damage = Math.round(projectile.ability.DAMAGE * (this.damageMultipliers.player.player || 1.0));
          const realDamage = player.takeDamage(damage, projectile.owner);
          // console.log(`[DANO] Aplicado ${damage} ao jogador ${player.id} (morreu=${realDamage <= 0})`);
          // Feedback visual: emitir evento de dano para o lançador
          if (projectile.owner && projectile.owner.channel) {
            projectile.owner.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
              sourceId: projectile.owner.id,
              sourceType: 'player',
              sourceName: MONSTERS[projectile.owner.monsterType]?.NAME || projectile.owner.monsterType,
              targetId: player.id,
              targetType: 'player',
              targetName: MONSTERS[player.monsterType]?.NAME || player.monsterType,
              damage: realDamage,
              died: realDamage <= 0,
              position: { ...player.position }
            });
            // console.log(`[EVENTO] DAMAGE_DEALT emitido para lançador ${projectile.owner.id}`);
          }
          // Emitir também para o alvo atingido (caso seja jogador)
          if (player.channel) {
            player.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
              targetId: player.id,
              targetType: 'player',
              targetName: MONSTERS[player.monsterType]?.NAME || player.monsterType,
              damage: realDamage,
              died: realDamage <= 0,
              position: { ...player.position }
            });
            // console.log(`[EVENTO] DAMAGE_DEALT emitido para alvo ${player.id}`);
          }
          projectile.markedForRemoval = true;
          break;
        }
      }
    }
  }

  /**
   * Atualiza todas as zonas de dano, aplicando dano periódico
   * @param {number} deltaTime - Tempo desde a última atualização (ms)
   */
  updateDamageZones(deltaTime) {
    for (const [id, zone] of this.entityManager.damageZones) {
      if (zone.markedForRemoval) {
        // console.log(`[DAMAGEZONE] Zona ${id} REMOVIDA (duração atingida)`);
        continue;
      }
      // Só aplica dano se chegou o intervalo
      if (zone.justTicked) {
        let hits = 0;
        // Dano em monstros
        for (const monster of this.entityManager.monsters.values()) {
          if (!monster.active || monster.stats.hp <= 0) continue;
          const dist = Math.sqrt(
            Math.pow(monster.position.x - zone.position.x, 2) +
            Math.pow(monster.position.z - zone.position.z, 2)
          );
          if (dist <= zone.radius && !zone.alreadyHit.has(monster.id)) {
            const damage = zone.damage;
            const realDamage = monster.takeDamage(damage, zone.owner);
            zone.alreadyHit.add(monster.id);
            hits++;
            // Aplica lentidão se for Frost Spikes
            if (zone.frostSpikes && zone.ability && zone.ability.SLOW_DURATION) {
              const slowDuration = zone.ability.SLOW_DURATION;
              const slowValue = zone.ability.SLOW || 0.4;
              if (!monster.status) monster.status = {};
              monster.status.slowedUntil = Date.now() + slowDuration;
              monster.lastSlowValue = slowValue;
              // console.log(`[FROST_SPIKES][SLOW] Monstro ${monster.id} recebeu lentidão por ${slowDuration}ms (até ${monster.status.slowedUntil})`);
              // Emitir evento para efeito visual de congelado
              for (const player of this.entityManager.players.values()) {
                if (player.channel) {
                  player.channel.emit('combat:slow', {
                    targetId: monster.id,
                    targetType: 'monster',
                    targetName: MONSTERS[monster.monsterType]?.NAME || monster.monsterType,
                    slowDuration,
                    slowUntil: monster.status.slowedUntil
                  });
                }
              }
            }
            // Emitir evento para todos os jogadores
            for (const player of this.entityManager.players.values()) {
              if (player.channel) {
                player.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
                  targetId: monster.id,
                  targetType: 'monster',
                  targetName: MONSTERS[monster.monsterType]?.NAME || monster.monsterType,
                  damage: realDamage,
                  died: realDamage <= 0,
                  position: { ...monster.position }
                });
              }
            }
          }
        }
        // Dano em jogadores (PvP)
        for (const player of this.entityManager.players.values()) {
          if (!player.active || player.stats.hp <= 0 || (zone.owner && player.id === zone.owner.id)) continue;
          const dist = Math.sqrt(
            Math.pow(player.position.x - zone.position.x, 2) +
            Math.pow(player.position.z - zone.position.z, 2)
          );
          if (dist <= zone.radius && !zone.alreadyHit.has(player.id)) {
            const damage = Math.round(zone.damage * (this.damageMultipliers.player.player || 1.0));
            const realDamage = player.takeDamage(damage, zone.owner);
            zone.alreadyHit.add(player.id);
            hits++;
            // Depuração: logar valores antes de aplicar slow
            // console.log(`[FROST_SPIKES][DEBUG] zone.frostSpikes=${zone.frostSpikes}, zone.ability.SLOW_DURATION=${zone.ability && zone.ability.SLOW_DURATION}`);
            // Aplica lentidão se for Frost Spikes
            if (zone.frostSpikes && zone.ability && zone.ability.SLOW_DURATION) {
              const slowDuration = zone.ability.SLOW_DURATION;
              const slowValue = zone.ability.SLOW || 0.4;
              if (!player.status) player.status = {};
              player.status.slowedUntil = Date.now() + slowDuration;
              player.lastSlowValue = slowValue;
              // console.log(`[FROST_SPIKES][SLOW] Player ${player.id} recebeu lentidão por ${slowDuration}ms (até ${player.status.slowedUntil})`);
              // Emitir evento para efeito visual de congelado
              for (const p of this.entityManager.players.values()) {
                if (p.channel) {
                  p.channel.emit('combat:slow', {
                    targetId: player.id,
                    targetType: 'player',
                    targetName: MONSTERS[player.monsterType]?.NAME || player.monsterType,
                    slowDuration,
                    slowUntil: player.status.slowedUntil
                  });
                }
              }
            }
            // Emitir evento para todos os jogadores
            for (const p of this.entityManager.players.values()) {
              if (p.channel) {
                p.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
                  targetId: player.id,
                  targetType: 'player',
                  targetName: MONSTERS[player.monsterType]?.NAME || player.monsterType,
                  damage: realDamage,
                  died: realDamage <= 0,
                  position: { ...player.position }
                });
              }
            }
          }
        }
        if (hits === 0) {
          // console.log(`[DAMAGEZONE] Nenhum alvo atingido neste tick.`);
        }
      }
    }
  }
} 