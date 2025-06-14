import { Entity } from './Entity.js';
import { PLAYER, EVENTS, MONSTERS, WORLD } from '../../../shared/constants/gameConstants.js';
import {
  getLevelBenefits,
  calculateXpGain,
  getNextLevelXp,
  applyLevelUp,
  calculateDamage
} from '../../../shared/progressionSystem.js';
import { serializePlayerStatus, serializePlayerRespawn, serializePlayerDeath } from '../../../shared/utils/binarySerializer.js';
import { BINARY_EVENTS } from '../../../shared/constants/gameConstants.js';
import { logAuditEvent } from '../utils/auditLogger.js';
import { compressAndSend } from '../utils/compressAndSend.js';

// Definir o ponto de spawn padrão para novos jogadores e respawn após morte
const DEFAULT_SPAWN_POINT = { x: 0, y: 0.5, z: 0 };

/**
 * Classe que representa um jogador no jogo.
 * Contém atributos específicos como vida, mana, nível e experiência.
 */
export class Player extends Entity {
  constructor(id, channel, position = { x: 0, y: 0, z: 0 }, rotation = 0) {
    super(id, position, rotation);
    
    // Referência ao canal de comunicação geckos.io
    this.channel = channel;
    
    // Tipo específico da entidade
    this.type = 'player';
    
    // Raio de colisão do jogador
    this.collisionRadius = 0.65;
    
    // Atributos do jogador
    const benefits = getLevelBenefits(1);
    this.stats = {
      maxHp: benefits.maxHp,
      hp: benefits.maxHp,
      maxMana: benefits.maxMana,
      mana: benefits.maxMana,
      attack: benefits.attack,
      defense: benefits.defense
    };
    
    // Sistema de nível
    this.level = 1;
    this.xp = 0;
    this.nextLevelXp = getNextLevelXp(0); // XP necessário para o próximo nível (level 1 -> 2)
    
    // Estado de movimento
    this.movementState = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
    
    // Outras propriedades
    this.speedModifier = 1.0; // Modificador de velocidade (para efeitos, equipamentos, etc)
    this.isAttacking = false;
    this.lastAttackTime = 0;
    
    // Cooldowns de habilidades
    this.abilityCooldowns = {
      1: 0, // ID da habilidade : timestamp do último uso
      2: 0,
      3: 0,
      4: 0
    };
  }
  
  /**
   * Atualiza o jogador com base no estado atual e delta time
   * @param {number} deltaTime - Tempo desde a última atualização
   */
  update(deltaTime) {
    // Calcula a velocidade baseada nos inputs e modificadores
    this.calculateVelocity();
    
    // Chama o método da classe pai para atualizar a posição
    super.update(deltaTime);
    
    // Verifica se chegou ao ponto de destino (movimento por clique)
    if (this.moveToPoint) {
      const dx = this.moveToPoint.x - this.position.x;
      const dz = this.moveToPoint.z - this.position.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      // Se a distância for menor que o limiar, para o movimento (apenas se não for contínuo)
      const arrivalThreshold = 0.3; // Distância considerada "chegada"
      if (distance < arrivalThreshold && !this.continuousMove) {
        this.velocity.x = 0;
        this.velocity.z = 0;
        this.moveToPoint = null;
        this.continuousMove = false;
        console.log(`[SERVER] Player ${this.id} chegou ao destino.`);
      } else {
        // Se ainda não chegou, atualiza a direção (caso o jogador tenha sido empurrado)
        const dirX = dx / distance;
        const dirZ = dz / distance;
        const moveSpeed = PLAYER.SPEED * this.speedModifier;
        
        // Aplica efeito de slow, se houver
        if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) {
          this.velocity.x = dirX * moveSpeed * (this.lastSlowValue || 0.4);
          this.velocity.z = dirZ * moveSpeed * (this.lastSlowValue || 0.4);
        } else {
          this.velocity.x = dirX * moveSpeed;
          this.velocity.z = dirZ * moveSpeed;
        }
      }
    }
    
    // Limita a posição do player dentro do mapa considerando o centro em (0,0)
    const halfWidth = WORLD.SIZE.WIDTH / 2;
    const halfHeight = WORLD.SIZE.HEIGHT / 2;
    const minX = -halfWidth + WORLD.BOUNDARIES.BORDER_WIDTH;
    const maxX = halfWidth - WORLD.BOUNDARIES.BORDER_WIDTH;
    const minZ = -halfHeight + WORLD.BOUNDARIES.BORDER_WIDTH;
    const maxZ = halfHeight - WORLD.BOUNDARIES.BORDER_WIDTH;
    this.position.x = Math.max(minX, Math.min(maxX, this.position.x));
    this.position.z = Math.max(minZ, Math.min(maxZ, this.position.z));
    
    // (Opcional) Log para depuração
    if (
      this.position.x === minX || this.position.x === maxX ||
      this.position.z === minZ || this.position.z === maxZ
    ) {
      console.log(`[LIMITE] Player ${this.id} atingiu a borda do mapa: (${this.position.x}, ${this.position.z})`);
    }
    
    // Regeneração natural de HP e Mana (exemplo: 1% a cada segundo)
    this.regenerate(deltaTime);
  }
  
  /**
   * Calcula a velocidade com base no estado de movimento atual
   */
  calculateVelocity() {
    // Se estiver em movimento para um ponto (clique), não recalcula a velocidade
    // Isso permite que o movimento por clique tenha prioridade sobre o WASD
    if (this.moveToPoint) return;
    
    // Reset da velocidade
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    // Usamos a velocidade base definida nas constantes
    // Essa velocidade é calibrada para o tick rate do servidor
    let moveSpeed = PLAYER.SPEED * this.speedModifier;
    if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) {
      moveSpeed *= (this.lastSlowValue || 0.4);
    }
    let dirX = 0;
    let dirZ = 0;
    
    // Calcula a direção baseada nos inputs ativos
    if (this.movementState.forward) {
      dirX -= 1;
      dirZ -= 1;
    }
    if (this.movementState.backward) {
      dirX += 1;
      dirZ += 1;
    }
    if (this.movementState.left) {
      dirX -= 1;
      dirZ += 1;
    }
    if (this.movementState.right) {
      dirX += 1;
      dirZ -= 1;
    }
    
    // Normaliza o vetor de direção para evitar movimento mais rápido na diagonal
    if (dirX !== 0 || dirZ !== 0) {
      const length = Math.sqrt(dirX * dirX + dirZ * dirZ);
      dirX /= length;
      dirZ /= length;
      
      this.velocity.x = dirX * moveSpeed;
      this.velocity.z = dirZ * moveSpeed;
      
      // Calcula o ângulo de rotação baseado na direção
      this.calculateRotation(dirX, dirZ);
    }
  }
  
  /**
   * Calcula o ângulo de rotação baseado na direção do movimento
   * Usando a abordagem onde o personagem aponta na direção oposta ao movimento
   * para manter coerência visual na visão isométrica
   */
  calculateRotation(dirX, dirZ) {
    if (dirX === 0 && dirZ === 0) return;

    // Usa o estado das teclas para identificar movimento puro e diagonais
    const { forward, backward, left, right } = this.movementState;

    let angle;
    if (forward && !backward && !left && !right) {
      // Apenas W pressionado (frente)
      angle = Math.atan2(-1, -1); // Direção padrão frente
    } else if (backward && !forward && !left && !right) {
      // Apenas S pressionado (trás)
      angle = Math.atan2(1, 1); // Direção padrão trás
    } else if (forward && right && !backward && !left) {
      // W + D (Norte)
      angle = Math.PI; // 180°
    } else if (forward && left && !backward && !right) {
      // W + A (Oeste)
      angle = 1.5 * Math.PI; // 270°
    } else if (backward && right && !forward && !left) {
      // S + D (Leste)
      angle = 0.5 * Math.PI; // 90°
    } else if (backward && left && !forward && !right) {
      // S + A (Sul)
      angle = 0; // 0°
    } else {
      // Para os demais casos (esquerda, direita), mantém a inversão
      angle = Math.atan2(-dirZ, -dirX);
    }

    if (angle < 0) angle += 2 * Math.PI;
    this.rotation = angle;
  }
  
  /**
   * Define um ponto de destino para movimentação por clique
   * @param {Object} point - Ponto de destino {x, y, z}
   * @param {boolean} continuous - Se o movimento deve continuar em direção ao ponto
   */
  setMoveToPoint(point, continuous = false) {
    if (!point) return;
    
    console.log(`[SERVER] Player ${this.id} movendo para ponto:`, point);
    
    // Calcular a direção para o ponto
    const dx = point.x - this.position.x;
    const dz = point.z - this.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    // Se a distância for muito pequena, ignorar
    if (distance < 0.1) return;
    
    // Normalizar direção
    const dirX = dx / distance;
    const dirZ = dz / distance;
    
    // Calcular e definir rotação baseada na direção
    const angle = Math.atan2(-dirZ, -dirX);
    this.rotation = angle < 0 ? angle + 2 * Math.PI : angle;
    
    // Atualizar velocidade
    const moveSpeed = PLAYER.SPEED * this.speedModifier;
    this.velocity.x = dirX * moveSpeed;
    this.velocity.z = dirZ * moveSpeed;
    
    // Salvar o ponto de destino e o modo contínuo
    this.moveToPoint = { ...point };
    this.continuousMove = continuous;
  }
  
  /**
   * Regeneração natural de HP e Mana ao longo do tempo
   * @param {number} deltaTime - Tempo desde a última atualização em ms
   */
  regenerate(deltaTime) {
    // Usa as constantes de regeneração configuradas em PLAYER.REGENERATION
    const hpRegen = this.stats.maxHp * PLAYER.REGENERATION.HP_PERCENT * (deltaTime / 1000);
    const manaRegen = this.stats.maxMana * PLAYER.REGENERATION.MANA_PERCENT * (deltaTime / 1000);
    
    const oldHp = this.stats.hp;
    const oldMana = this.stats.mana;
    
    this.stats.hp = Math.min(this.stats.hp + hpRegen, this.stats.maxHp);
    this.stats.mana = Math.min(this.stats.mana + manaRegen, this.stats.maxMana);
    
    // Debug: Verificar regeneração significativa (1 unidade ou mais)
    const hpDiff = this.stats.hp - oldHp;
    const manaDiff = this.stats.mana - oldMana;
    
    // Notifica o cliente sobre a atualização de recursos quando:
    // 1. Um ponto inteiro foi regenerado
    // 2. O recurso está abaixo do limiar configurado
    // 3. A mana estava abaixo do limiar e aumentou acima dele
    if (Math.floor(this.stats.mana) > Math.floor(oldMana) || 
        this.stats.mana < (this.stats.maxMana * PLAYER.REGENERATION.NOTIFY_THRESHOLD) ||
        (oldMana < (this.stats.maxMana * PLAYER.REGENERATION.NOTIFY_THRESHOLD) && 
         this.stats.mana >= (this.stats.maxMana * PLAYER.REGENERATION.NOTIFY_THRESHOLD))) {
      if (this.channel) {
        // compressAndSend(this.channel, EVENTS.PLAYER.MOVED, {
        //   id: this.id,
        //   position: { ...this.position },
        //   rotation: this.rotation,
        //   stats: { ...this.stats }
        // });
        // Envia status completo em binário
        const binStatus = serializePlayerStatus({
          playerId: this.id,
          hp: Math.round(this.stats.hp),
          maxHp: Math.round(this.stats.maxHp),
          mana: Math.round(this.stats.mana),
          maxMana: Math.round(this.stats.maxMana),
          level: this.level,
          xp: Math.round(this.xp),
          nextLevelXp: Math.round(this.nextLevelXp)
        });
        compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
        logAuditEvent({ event: BINARY_EVENTS.PLAYER_STATUS, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binStatus.byteLength || binStatus.length || 0, serializationTimeMs: null, entitiesSent: null });
      }
    }
  }
  
  /**
   * Aplica dano ao jogador
   * @param {number} amount - Quantidade de dano a aplicar
   * @param {Entity} source - Entidade que causou o dano
   * @returns {boolean} - true se o jogador morreu, false caso contrário
   */
  takeDamage(amount, source) {
    // Cálculo de dano centralizado
    const damageTaken = calculateDamage({
      attackerAttack: amount,
      defenderDefense: this.stats.defense,
      isPvP: source && source.isPlayer,
      isPvE: source && !source.isPlayer
    });
    this.stats.hp -= damageTaken;
    // Adiciona efeito de dano ao buffer binário se o source for player
    if (source && source.type === 'player' && global.combatEffectsBuffer) {
      global.combatEffectsBuffer.push({
        sourceId: source.id,
        targetId: this.id,
        skillId: 0,
        value: damageTaken,
        effectType: 0, // Dano
        statusType: 0
      });
    }
    // Envia evento de dano ao cliente
    if (this.channel) {
      // compressAndSend(this.channel, EVENTS.PLAYER.DAMAGE, {
      //   id: this.id,
      //   damage: damageTaken,
      //   sourceId: source ? source.id : null,
      //   remainingHp: this.stats.hp
      // });
      // Emite status binário atualizado para o HUD
      const binStatus = serializePlayerStatus({
        playerId: this.id,
        hp: Math.round(this.stats.hp),
        maxHp: Math.round(this.stats.maxHp),
        mana: Math.round(this.stats.mana),
        maxMana: Math.round(this.stats.maxMana),
        level: this.level,
        xp: Math.round(this.xp),
        nextLevelXp: Math.round(this.nextLevelXp)
      });
      compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
      logAuditEvent({ event: BINARY_EVENTS.PLAYER_STATUS, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binStatus.byteLength || binStatus.length || 0, serializationTimeMs: null, entitiesSent: null });
    }
    // Verifica se o jogador morreu
    if (this.stats.hp <= 0) {
      this.stats.hp = 0;
      this.die(source);
      return damageTaken;
    }
    return damageTaken;
  }
  
  /**
   * Processa a morte do jogador
   * @param {Object} killer - Entidade que matou o jogador
   */
  die(killer) {
    // Cancelar movimento por clique
    this.moveToPoint = null;
    
    // Zerar velocidade
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    // Redefinir estados de movimento
    this.movementState = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
    
    // Define o status de morte
    this.dead = true;
    
    // O código abaixo é o código original do método die
    let killerType = 3; // 0 = player, 1 = monster, 2 = npc, 3 = world/environment
    let killerId = 0;
    let killerNameStr = 'Ambiente';
    let reason = 3; // 0 = pvp, 1 = pve, 2 = suicide, 3 = environment
    
    if (killer) {
      if (killer.type === 'player') {
        killerType = 0;
        killerId = killer.id;
        killerNameStr = killer.name || `Jogador ${killer.id}`;
        reason = 0; // pvp
      } else if (killer.type === 'monster') {
        killerType = 1;
        killerId = killer.id;
        killerNameStr = killer.name || `Monstro ${killer.id}`;
        reason = 1; // pve
      } else if (killer.type === 'npc') {
        killerType = 2;
        killerId = killer.id;
        killerNameStr = killer.name || `NPC ${killer.id}`;
        reason = 2; // suicide (temporário)
      }
    }
    
    // Calcula penalidades de morte conforme configuração
    let lostLevel = 0;
    let lostXP = 0;
    
    if (PLAYER.DEATH_PENALTY.LEVELS_LOST > 0) {
      lostLevel = Math.min(this.level - PLAYER.DEATH_PENALTY.MIN_LEVEL, PLAYER.DEATH_PENALTY.LEVELS_LOST);
    }
    
    let newLevel = this.level - lostLevel;
    let newXP = this.xp;
    
    if (PLAYER.DEATH_PENALTY.XP_PERCENT > 0) {
      lostXP = Math.floor(newXP * PLAYER.DEATH_PENALTY.XP_PERCENT);
      newXP -= lostXP;
    }
    
    // Se ficou com XP negativo, perde níveis adicionais
    while (newXP < 0 && newLevel > PLAYER.DEATH_PENALTY.MIN_LEVEL) {
      newLevel--;
      newXP += getNextLevelXp(newLevel);
    }
    
    // Garantir que não fica abaixo do nível mínimo
    if (newLevel < PLAYER.DEATH_PENALTY.MIN_LEVEL) {
      newLevel = PLAYER.DEATH_PENALTY.MIN_LEVEL;
      newXP = 0;
    }
    
    // Aplica as penalidades
    this.level = newLevel;
    this.xp = newXP;
    this.nextLevelXp = getNextLevelXp(this.level - 1);
    
    // Define tempos de respawn
    this.deadUntil = Date.now() + PLAYER.DEATH_PENALTY.RESPAWN_TIME;
    this.respawnTime = PLAYER.DEATH_PENALTY.RESPAWN_TIME;
    
    // Restaura vida a 0 (garantindo que está morto)
    this.stats.hp = 0;
    
    // Broadcast da morte para os clientes
    if (this.channel) {
      const killerName = killerNameStr.substring(0, 31); // Limita o tamanho do nome
      
      // LOG ADICIONADO PARA DEBUG
      console.log(`[SERVER DEATH DEBUG] killer.type: ${killer ? killer.type : 'N/A'}, killerId: ${killerId}, killerNameStr: ${killerNameStr}, calculated killerType to send: ${killerType}`);

      const binDeath = serializePlayerDeath({
        id: this.id,
        killer: killerId,
        reason: reason,
        lostLevel: lostLevel,
        lostXP: lostXP,
        newLevel: this.level,
        newXP: this.xp,
        killerName: killerName,
        killerType: killerType
      });
      
      // Broadcast para todos os jogadores próximos
      compressAndSend(this.channel, BINARY_EVENTS.PLAYER_DEATH, new Uint8Array(binDeath));
      logAuditEvent({ event: BINARY_EVENTS.PLAYER_DEATH, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binDeath.byteLength || binDeath.length || 0, serializationTimeMs: null, entitiesSent: null, killerId, reason, lostLevel, lostXP, newLevel: this.level, newXP: this.xp, killerName: killerNameStr, killerType });
    }
    
    // Registra o tempo de morte para estatísticas e respawn
    this.lastDeathTime = Date.now();
    
    console.log(`Jogador ${this.id} morreu. Perdeu ${lostLevel} níveis e ${lostXP} XP. Respawn em ${PLAYER.DEATH_PENALTY.RESPAWN_TIME/1000}s`);
    
    return {
      id: this.id,
      killer: killerId,
      killerName: killerNameStr,
      killerType: killerType,
      lostLevel,
      lostXP,
      respawnTime: PLAYER.DEATH_PENALTY.RESPAWN_TIME
    };
  }
  
  /**
   * Faz o respawn do jogador
   * @param {Object} position - Posição opcional de respawn
   * @returns {Object} Dados do respawn
   */
  respawn(position) {
    // Se não estiver morto, não processa
    if (!this.dead) return null;
    
    // Cancelar qualquer movimento por clique pendente
    this.moveToPoint = null;
    
    // Redefinir status de morte
    this.dead = false;
    this.deadUntil = 0;
    this.respawnTime = 0;
    
    // Zerar velocidade
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    // Redefinir estados de movimento
    this.movementState = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
    
    // Restaurar vida e mana ao máximo
    this.stats.hp = this.stats.maxHp;
    this.stats.mana = this.stats.maxMana;
    
    // Limpar status e cooldowns
    this.resetCooldowns();
    this.status = {};
    
    // Teleportar para a posição de respawn
    const spawnPosition = position || DEFAULT_SPAWN_POINT;
    this.position.x = spawnPosition.x;
    this.position.y = spawnPosition.y || 0;
    this.position.z = spawnPosition.z;
    
    // Enviar evento de respawn para todos os clientes
    if (this.channel) {
      try {
        // Garantir que todos os parâmetros necessários sejam válidos
        const binRespawn = serializePlayerRespawn({
          id: this.id,
          position: {
            x: this.position.x,
            y: this.position.y,
            z: this.position.z
          },
          rotation: this.rotation || 0,
          hp: Math.round(this.stats.hp) || 0,
          mana: Math.round(this.stats.mana) || 0,
          level: this.level || 1,
          xp: Math.round(this.xp) || 0
        });
        
        // Broadcast para todos os jogadores próximos
        compressAndSend(this.channel, BINARY_EVENTS.PLAYER_RESPAWN, new Uint8Array(binRespawn));
        console.log(`[RESPAWN] Enviado evento de respawn para jogador ${this.id}`);
        
        // Também enviar status completo para atualizar o HUD
        const binStatus = serializePlayerStatus({
          playerId: this.id,
          hp: Math.round(this.stats.hp),
          maxHp: Math.round(this.stats.maxHp),
          mana: Math.round(this.stats.mana),
          maxMana: Math.round(this.stats.maxMana),
          level: this.level,
          xp: Math.round(this.xp),
          nextLevelXp: Math.round(this.nextLevelXp)
        });
        compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
      } catch (error) {
        console.error(`[RESPAWN] Erro ao enviar evento de respawn:`, error);
      }
    }
    
    console.log(`Jogador ${this.id} ressurgiu em (${this.position.x.toFixed(2)}, ${this.position.z.toFixed(2)})`);
    
    return {
      id: this.id,
      position: { ...this.position },
      stats: { ...this.stats }
    };
  }
  
  /**
   * Tenta usar uma habilidade, verificando mana e cooldown
   * @param {number} abilityId - ID da habilidade
   * @param {Object} targetPosition - Posição alvo da habilidade
   * @returns {boolean} - true se a habilidade foi usada, false caso contrário
   */
  useAbility(abilityId, targetPosition) {
    const now = Date.now();
    const ability = this.getAbilityById(abilityId);
    
    if (!ability) return false;
    
    // Verifica cooldown
    if (now - this.abilityCooldowns[abilityId] < ability.COOLDOWN) {
      return false;
    }
    
    // Verifica mana
    if (this.stats.mana < ability.MANA_COST) {
      return false;
    }
    
    // Consome mana e coloca habilidade em cooldown
    this.stats.mana -= ability.MANA_COST;
    this.abilityCooldowns[abilityId] = now;

    // Envia status completo em binário após consumir mana
    if (this.channel) {
      const binStatus = serializePlayerStatus({
        playerId: this.id,
        hp: Math.round(this.stats.hp),
        maxHp: Math.round(this.stats.maxHp),
        mana: Math.round(this.stats.mana),
        maxMana: Math.round(this.stats.maxMana),
        level: this.level,
        xp: Math.round(this.xp),
        nextLevelXp: Math.round(this.nextLevelXp)
      });
      compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
      logAuditEvent({ event: BINARY_EVENTS.PLAYER_STATUS, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binStatus.byteLength || binStatus.length || 0, serializationTimeMs: null, entitiesSent: null });
    }

    return true;
  }
  
  /**
   * Busca uma habilidade pelo ID
   * @param {number} abilityId - ID da habilidade
   * @returns {Object|null} - Objeto da habilidade ou null se não encontrada
   */
  getAbilityById(abilityId) {
    switch (abilityId) {
      case 1: return PLAYER.ABILITIES.FIREBALL || null;
      case 2: return PLAYER.ABILITIES.TELEPORT || null;
      case 3: return PLAYER.ABILITIES.FROST_SPIKES || null;
      case 4: return PLAYER.ABILITIES.METEOR_STORM || null;
      default: return null;
    }
  }
  
  /**
   * Adiciona experiência ao jogador e verifica level up
   * @param {number} amount - Quantidade de XP a adicionar
   * @returns {boolean} - true se houve level up, false caso contrário
   */
  addExperience(amount) {
    const xpGanho = calculateXpGain(amount);
    this.xp += xpGanho;
    // Verifica se há XP suficiente para subir de nível
    if (this.xp >= this.nextLevelXp && this.level < PLAYER.LEVEL_SYSTEM.MAX_LEVEL) {
      this.levelUp();
      return true;
    }
    return false;
  }
  
  /**
   * Aumenta o nível do jogador e atualiza seus atributos
   */
  levelUp() {
    const oldLevel = this.level;
    this.level++;
    // Atualiza XP necessário para o próximo nível
    this.nextLevelXp = getNextLevelXp(this.level - 1);
    // Aplica benefícios do novo level
    this.stats = applyLevelUp(oldLevel, this.level, this.stats);
    // Notifica o cliente sobre o level up
    if (this.channel) {
      // compressAndSend(this.channel, EVENTS.PLAYER.LEVEL_UP, {
      //   id: this.id,
      //   level: this.level,
      //   xp: this.xp,
      //   nextLevelXp: this.nextLevelXp,
      //   stats: { ...this.stats }
      // });
      // Envia status completo em binário
      const binStatus = serializePlayerStatus({
        playerId: this.id,
        hp: Math.round(this.stats.hp),
        maxHp: Math.round(this.stats.maxHp),
        mana: Math.round(this.stats.mana),
        maxMana: Math.round(this.stats.maxMana),
        level: this.level,
        xp: Math.round(this.xp),
        nextLevelXp: Math.round(this.nextLevelXp)
      });
      compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
      logAuditEvent({ event: BINARY_EVENTS.PLAYER_STATUS, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binStatus.byteLength || binStatus.length || 0, serializationTimeMs: null, entitiesSent: null });
    }
  }
  
  /**
   * Reseta o jogador após a morte, zerando XP e nível
   */
  resetAfterDeath() {
    // Reseta nível para 1
    this.level = 1;
    // Zera a experiência
    this.xp = 0;
    this.nextLevelXp = getNextLevelXp(0);
    // Restaura estatísticas base
    const benefits = getLevelBenefits(1);
    this.stats = {
      maxHp: benefits.maxHp,
      hp: benefits.maxHp,
      maxMana: benefits.maxMana,
      mana: benefits.maxMana,
      attack: benefits.attack,
      defense: benefits.defense
    };
    // Reseta cooldowns de habilidades
    this.abilityCooldowns = {
      1: 0,
      2: 0,
      3: 0,
      4: 0
    };
    // Reseta modificadores de velocidade
    this.speedModifier = 1.0;
    console.log(`Jogador ${this.id} resetado após morte`);
    // Após resetar, envie status completo em binário
    if (this.channel) {
      const binStatus = serializePlayerStatus({
        playerId: this.id,
        hp: Math.round(this.stats.hp),
        maxHp: Math.round(this.stats.maxHp),
        mana: Math.round(this.stats.mana),
        maxMana: Math.round(this.stats.maxMana),
        level: this.level,
        xp: Math.round(this.xp),
        nextLevelXp: Math.round(this.nextLevelXp)
      });
      compressAndSend(this.channel, BINARY_EVENTS.PLAYER_STATUS, new Uint8Array(binStatus));
      logAuditEvent({ event: BINARY_EVENTS.PLAYER_STATUS, eventType: 'BINARY_EVENTS', playerId: this.id, payloadSize: binStatus.byteLength || binStatus.length || 0, serializationTimeMs: null, entitiesSent: null });
    }
  }
  
  /**
   * Retorna um objeto com os dados serializáveis do jogador
   * para envio ao cliente
   */
  serialize() {
    return {
      ...super.serialize(),
      stats: { ...this.stats },
      level: this.level,
      xp: this.xp,
      nextLevelXp: this.nextLevelXp
    };
  }

  /**
   * Aplica teleporte ao jogador
   * @param {Object} position - Nova posição {x, y, z}
   */
  teleport(position) {
    // Cancelar qualquer movimento em andamento
    this.moveToPoint = null;
    
    // Definir nova posição
    this.position.x = position.x;
    this.position.y = position.y || this.position.y;
    this.position.z = position.z;
    
    // Zerar velocidade para evitar movimento residual
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    // Redefinir estados de movimento
    this.movementState = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
  }

  /**
   * Reseta todos os cooldowns de habilidades
   */
  resetCooldowns() {
    try {
      // Reinicia todos os cooldowns para 0
      this.abilityCooldowns = {
        1: 0, // ID da habilidade : timestamp do último uso
        2: 0,
        3: 0,
        4: 0
      };
      console.log(`[PLAYER] Cooldowns resetados para jogador ${this.id}`);
    } catch (error) {
      console.error(`[PLAYER] Erro ao resetar cooldowns para jogador ${this.id}:`, error);
    }
  }
} 