import { Entity } from './Entity.js';
import { PLAYER, EVENTS, MONSTERS } from '../../../shared/constants/gameConstants.js';
import {
  getLevelBenefits,
  calculateXpGain,
  getNextLevelXp,
  applyLevelUp,
  calculateDamage
} from '../../../shared/progressionSystem.js';

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
    this.collisionRadius = 0.5;
    
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
    
    // Regeneração natural de HP e Mana (exemplo: 1% a cada segundo)
    this.regenerate(deltaTime);
  }
  
  /**
   * Calcula a velocidade com base no estado de movimento atual
   */
  calculateVelocity() {
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
        this.channel.emit(EVENTS.PLAYER.MOVED, {
          id: this.id,
          position: { ...this.position },
          rotation: this.rotation,
          stats: { ...this.stats }
        });
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
    // Envia evento de dano ao cliente
    if (this.channel) {
      this.channel.emit(EVENTS.PLAYER.DAMAGE, {
        id: this.id,
        damage: damageTaken,
        sourceId: source ? source.id : null,
        remainingHp: this.stats.hp
      });
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
   * Método de morte do jogador: aplica penalidade, envia evento e bloqueia ações
   * @param {Entity} killer - Entidade que matou o jogador
   */
  die(killer) {
    if (this.dead) return; // Evita múltiplas execuções
    this.dead = true;
    // Calcula penalidade
    const oldLevel = this.level;
    const oldXP = this.xp;
    const lostLevel = Math.max(1, Math.floor(this.level * 0.5));
    const lostXP = Math.floor(this.xp * 0.5);
    // Aplica penalidade
    this.level = Math.max(1, this.level - lostLevel);
    this.xp = Math.max(0, this.xp - lostXP);
    this.nextLevelXp = getNextLevelXp(this.level - 1);
    // Recalcula status para o novo level
    const benefits = getLevelBenefits(this.level);
    this.stats.maxHp = benefits.maxHp;
    this.stats.maxMana = benefits.maxMana;
    this.stats.attack = benefits.attack;
    this.stats.defense = benefits.defense;
    // Zera HP e bloqueia regeneração
    this.stats.hp = 0;
    this.stats.mana = 0;
    this.isAttacking = false;
    this.movementState = { forward: false, backward: false, left: false, right: false };
    // Envia evento detalhado para o cliente
    let killerName = null;
    if (killer) {
      if (killer.type === 'monster' && MONSTERS[killer.monsterType]) {
        killerName = MONSTERS[killer.monsterType].NAME;
      } else if (killer.name) {
        killerName = killer.name;
      }
    }
    if (this.channel) {
      this.channel.emit(EVENTS.PLAYER.DEATH, {
        id: this.id,
        lostLevel,
        lostXP,
        newLevel: this.level,
        newXP: this.xp,
        killerId: killer ? killer.id : null,
        killerName: killerName,
        killerType: killer ? killer.type : null
      });
    }
    // Opcional: notificar outros jogadores (broadcast)
    // ...
  }
  
  /**
   * Método chamado pelo servidor para respawnar o jogador
   * Restaura HP, mana e desbloqueia ações
   * @param {Object} position - Posição de respawn
   */
  respawn(position) {
    this.dead = false;
    this.stats.hp = this.stats.maxHp;
    this.stats.mana = this.stats.maxMana;
    this.position = { ...position };
    this.isAttacking = false;
    this.movementState = { forward: false, backward: false, left: false, right: false };
    // Envia evento de respawn para o cliente
    if (this.channel) {
      this.channel.emit(EVENTS.PLAYER.RESPAWN, {
        id: this.id,
        position: { ...this.position },
        stats: { ...this.stats },
        level: this.level,
        xp: this.xp
      });
    }
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
      this.channel.emit(EVENTS.PLAYER.LEVEL_UP, {
        id: this.id,
        level: this.level,
        xp: this.xp,
        nextLevelXp: this.nextLevelXp,
        stats: { ...this.stats }
      });
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
} 