import { Entity } from '../Entity.js';
import { MONSTERS, PLAYER, EVENTS } from '../../../../shared/constants/gameConstants.js';
import { getLevelBenefits, getXpForLevel, calculateXpGain, calculateDamage } from '../../../../shared/progressionSystem.js';

export class BaseMonster extends Entity {
  constructor(id, type, position = { x: 0, y: 0, z: 0 }, level = 1) {
    super(id, position);
    const monsterType = this.getMonsterTypeConfig(type);
    if (!monsterType) throw new Error(`Tipo de monstro inválido: ${type}`);
    this.monsterType = type;
    this.type = 'monster';
    this.collisionRadius = 0.6;
    this.level = level;
    this.xpReward = monsterType.XP_REWARD * level;
    const benefits = getLevelBenefits(level);
    this.stats = {
      maxHp: Math.floor(monsterType.HP * (benefits.maxHp / 100)),
      hp: Math.floor(monsterType.HP * (benefits.maxHp / 100)),
      damage: Math.floor(monsterType.DAMAGE * (benefits.attack / 10)),
      defense: Math.floor(monsterType.DEFENSE * (benefits.defense / 5))
    };
    this.moveSpeed = monsterType.SPEED;
    this.attackRange = monsterType.ATTACK_RANGE;
    this.attackCooldown = monsterType.ATTACK_COOLDOWN;
    this.lastAttackTime = 0;
    this.aggroRange = 8;
    this.aiState = 'idle';
    this.targetId = null;
    this.spawnPoint = { ...position };
    this.lastStateChange = Date.now();
    this.patrolTimer = 0;
    this.patrolDirection = { x: 0, z: 0 };
  }

  getMonsterTypeConfig(type) {
    return MONSTERS[type] || null;
  }

  update(deltaTime, players = []) {
    this.updateAI(deltaTime, players);
    super.update(deltaTime);
  }

  updateAI(deltaTime, players) {
    // Pode ser sobrescrito por monstros específicos
    if (this.stats.hp <= 0) return;
    const now = Date.now();
    let moveSpeed;
    switch (this.aiState) {
      case 'idle':
        if (now - this.lastStateChange > 3000) this.setAIState('patrolling');
        this.findTarget(players);
        break;
      case 'patrolling':
        if (this.patrolTimer <= 0) {
          this.patrolTimer = 5000;
          const angle = Math.random() * Math.PI * 2;
          this.patrolDirection.x = Math.cos(angle) * 0.5;
          this.patrolDirection.z = Math.sin(angle) * 0.5;
          this.rotation = angle;
        }
        this.patrolTimer -= deltaTime;
        moveSpeed = this.moveSpeed;
        if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) moveSpeed *= (this.lastSlowValue || 0.4);
        this.velocity.x = this.patrolDirection.x * moveSpeed;
        this.velocity.z = this.patrolDirection.z * moveSpeed;
        this.findTarget(players);
        if (now - this.lastStateChange > 8000) this.setAIState('idle');
        break;
      case 'chasing': {
        const target = this.findPlayerById(players, this.targetId);
        if (!target || target.stats.hp <= 0 || target.dead) {
          this.targetId = null;
          this.setAIState('idle');
          break;
        }
        this.moveTowardsTarget(target, deltaTime);
        if (this.distanceTo(target) <= this.attackRange) this.setAIState('attacking');
        break;
      }
      case 'attacking': {
        const attackTarget = this.findPlayerById(players, this.targetId);
        if (!attackTarget || attackTarget.stats.hp <= 0 || attackTarget.dead) {
          this.targetId = null;
          this.setAIState('idle');
          break;
        }
        this.velocity.x = 0;
        this.velocity.z = 0;
        this.lookAt(attackTarget.position);
        const dx = attackTarget.position.x - this.position.x;
        const dz = attackTarget.position.z - this.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist <= this.attackRange && now - this.lastAttackTime > this.attackCooldown) {
          this.attackTarget(attackTarget);
          this.lastAttackTime = now;
        } else if (dist > this.attackRange) {
          // Se o alvo saiu do alcance de ataque, volta a perseguir
          this.setAIState('chasing');
        }
        break;
      }
      case 'returning': {
        const dx = this.spawnPoint.x - this.position.x;
        const dz = this.spawnPoint.z - this.position.z;
        const distToSpawn = Math.sqrt(dx * dx + dz * dz);
        if (distToSpawn < 1) {
          this.position.x = this.spawnPoint.x;
          this.position.z = this.spawnPoint.z;
          this.velocity.x = 0;
          this.velocity.z = 0;
          this.setAIState('idle');
          break;
        }
        const length = Math.sqrt(dx * dx + dz * dz);
        moveSpeed = this.moveSpeed;
        if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) moveSpeed *= (this.lastSlowValue || 0.4);
        this.velocity.x = (dx / length) * moveSpeed;
        this.velocity.z = (dz / length) * moveSpeed;
        this.rotation = Math.atan2(dz, dx);
        this.findTarget(players);
        break;
      }
    }
  }

  setAIState(newState) {
    this.aiState = newState;
    this.lastStateChange = Date.now();
    if (newState === 'idle') {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }
  }

  findTarget(players) {
    if (this.aiState === 'attacking' || this.aiState === 'chasing') return;
    let closestPlayer = null;
    let closestDistance = this.aggroRange;
    for (const player of players) {
      if (player.stats.hp <= 0) continue;
      const distance = this.distanceTo(player);
      if (distance < closestDistance) {
        closestPlayer = player;
        closestDistance = distance;
      }
    }
    if (closestPlayer) {
      this.targetId = closestPlayer.id;
      this.setAIState('chasing');
    }
  }

  findPlayerById(players, id) {
    return players.find(p => p.id === id) || null;
  }

  moveTowardsTarget(target, deltaTime) {
    const dx = target.position.x - this.position.x;
    const dz = target.position.z - this.position.z;
    const length = Math.sqrt(dx * dx + dz * dz);
    let moveSpeed = this.moveSpeed;
    if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) moveSpeed *= (this.lastSlowValue || 0.4);
    this.velocity.x = (dx / length) * moveSpeed;
    this.velocity.z = (dz / length) * moveSpeed;
    this.lookAt(target.position);
  }

  lookAt(position) {
    const dx = position.x - this.position.x;
    const dz = position.z - this.position.z;
    this.rotation = Math.atan2(dz, dx);
  }

  attackTarget(target) {
    if (!target || target.stats.hp <= 0 || target.dead) return;
    if (target && typeof target.takeDamage === 'function') {
      // Centraliza o cálculo de dano PvE
      const damage = calculateDamage({
        attackerAttack: this.stats.damage,
        defenderDefense: target.stats.defense,
        isPvE: true
      });
      target.takeDamage(damage, this);
      this.emitDamageEvent(target, damage);
      this.lastAttackTime = Date.now();
    }
  }

  takeDamage(amount, source) {
    const damageTaken = calculateDamage({
      attackerAttack: amount,
      defenderDefense: this.stats.defense,
      isPvE: true
    });
    this.stats.hp -= damageTaken;
    if (source && source.type === 'player') {
      this.targetId = source.id;
      if (this.aiState === 'idle' || this.aiState === 'patrolling' || this.aiState === 'returning') {
        this.setAIState('chasing');
      }
    }
    if (this.stats.hp <= 0) {
      this.stats.hp = 0;
      this.die(source);
      return damageTaken;
    }
    return damageTaken;
  }

  die(killer) {
    console.log(`[SERVER] [DIE] Monstro ${this.id} morreu. HP final: ${this.stats.hp}. Killer: ${killer ? killer.id : 'N/A'}`);
    this.active = false;
    this.velocity.x = 0;
    this.velocity.z = 0;
    if (killer && killer.type === 'player' && typeof killer.addExperience === 'function') {
      // Ajusta a recompensa de XP com base na diferença de nível
      let adjustedXpReward = this.xpReward;
      
      // Se o nível do jogador for maior que o do monstro, reduz o XP
      if (killer.level > this.level) {
        const levelDiff = killer.level - this.level;
        // Reduz 10% por nível de diferença, até um mínimo de 10% do XP original
        const reductionFactor = Math.max(0.1, 1 - (levelDiff * 0.1));
        adjustedXpReward = Math.floor(this.xpReward * reductionFactor);
      } 
      // Se o nível do jogador for menor, aumenta o XP (bônus por derrotar monstro mais forte)
      else if (killer.level < this.level) {
        const levelDiff = this.level - killer.level;
        // Aumenta 20% por nível de diferença, até um máximo de 100% extra (dobro do XP)
        const bonusFactor = Math.min(2.0, 1 + (levelDiff * 0.2));
        adjustedXpReward = Math.floor(this.xpReward * bonusFactor);
      }
      
      // Garante um mínimo de XP (1% do próximo nível)
      const minXpReward = Math.ceil(getXpForLevel(killer.level + 1) * 0.01);
      adjustedXpReward = Math.max(minXpReward, adjustedXpReward);
      
      // Limita o XP máximo a 50% do necessário para o próximo nível
      const maxXpReward = Math.floor(getXpForLevel(killer.level + 1) * 0.5);
      adjustedXpReward = Math.min(maxXpReward, adjustedXpReward);
      
      console.log(`XP ajustado para jogador ${killer.id} (nível ${killer.level}): ${adjustedXpReward} (original: ${this.xpReward})`);
      
      // Aplica o multiplicador global de XP
      killer.addExperience(calculateXpGain(adjustedXpReward));
    }
    if (global.server) {
      let emitted = false;
      // Preferencialmente, emitir para todos os canais conectados
      if (global.server.channels && typeof global.server.channels.values === 'function') {
        for (const channel of global.server.channels.values()) {
          channel.emit(EVENTS.MONSTER.DEATH, { id: this.id });
          console.log(`[SERVER] [DIE] Evento EVENTS.MONSTER.DEATH emitido via global.server.channels (monstro ${this.id})`);
          emitted = true;
        }
      }
      // Fallback para gameWorld/entityManager
      else if (global.gameWorld && global.gameWorld.entityManager && global.gameWorld.entityManager.players) {
        for (const player of global.gameWorld.entityManager.players.values()) {
          if (player.channel) {
            player.channel.emit(EVENTS.MONSTER.DEATH, { id: this.id });
            console.log(`[SERVER] [DIE] Evento EVENTS.MONSTER.DEATH emitido para player ${player.id} (monstro ${this.id})`);
            emitted = true;
          }
        }
      }
      if (!emitted) {
        console.error('[SERVER] [DIE] Nenhum canal ou gameWorld disponível para emitir evento de morte do monstro!');
      }
      // Delay de 50ms para garantir que a HUD do alvo seja atualizada antes da remoção
      setTimeout(() => {
        console.log(`[SERVER] [DIE] Chamando monsterDied para ${this.id}`);
        if (global.gameWorld) {
          global.gameWorld.monsterDied(this.id);
        } else {
          console.error(`[SERVER] [DIE] Erro ao agendar respawn do monstro ${this.id}: gameWorld não encontrado`);
        }
      }, 50);
    } else {
      console.error(`[SERVER] [DIE] Erro: global.server não está definido!`);
    }
  }

  serialize() {
    return {
      ...super.serialize(),
      monsterType: this.monsterType,
      level: this.level,
      stats: {
        hp: this.stats.hp,
        maxHp: this.stats.maxHp
      },
      aiState: this.aiState
    };
  }

  emitDamageEvent(target, damage) {
    if (!global.server) return;
    global.server.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
      sourceId: this.id,
      sourceType: 'monster',
      targetId: target.id,
      targetType: target.type,
      damage: damage,
      skillId: null
    });
    global.server.emit(EVENTS.COMBAT.FLOATING_TEXT, {
      targetId: target.id,
      targetType: target.type,
      text: `-${damage}`,
      color: '#ff3333'
    });
  }
} 