import { Entity } from '../Entity.js';
import { MONSTERS } from '../../../../shared/constants/gameConstants.js';

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
    const levelMultiplier = 1 + ((level - 1) * 0.2);
    this.stats = {
      maxHp: Math.floor(monsterType.HP * levelMultiplier),
      hp: Math.floor(monsterType.HP * levelMultiplier),
      damage: Math.floor(monsterType.DAMAGE * levelMultiplier),
      defense: Math.floor(monsterType.DEFENSE * levelMultiplier)
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
      case 'chasing':
        const target = this.findPlayerById(players, this.targetId);
        if (!target || target.stats.hp <= 0 || target.dead) {
          this.targetId = null;
          this.setAIState('idle');
          break;
        }
        this.moveTowardsTarget(target, deltaTime);
        if (this.distanceTo(target) <= this.attackRange) this.setAIState('attacking');
        break;
      case 'attacking':
        const attackTarget = this.findPlayerById(players, this.targetId);
        if (!attackTarget || attackTarget.stats.hp <= 0 || attackTarget.dead) {
          this.targetId = null;
          this.setAIState('idle');
          break;
        }
        this.velocity.x = 0;
        this.velocity.z = 0;
        this.lookAt(attackTarget.position);
        if (now - this.lastAttackTime > this.attackCooldown) {
          this.attackTarget(attackTarget);
          this.lastAttackTime = now;
        }
        break;
      case 'returning':
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
    if (target && typeof target.takeDamage === 'function') {
      target.takeDamage(this.stats.damage, this);
    }
  }

  takeDamage(amount, source) {
    const damageTaken = Math.max(1, amount - (this.stats.defense * 0.5));
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
      return true;
    }
    return false;
  }

  die(killer) {
    this.active = false;
    this.velocity.x = 0;
    this.velocity.z = 0;
    if (killer && killer.type === 'player' && typeof killer.addExperience === 'function') {
      killer.addExperience(this.xpReward);
    }
    if (global.gameWorld) {
      global.gameWorld.monsterDied(this.id);
      console.log(`Monstro ${this.id} morreu e foi agendado para respawn`);
    } else {
      console.error(`Erro ao agendar respawn do monstro ${this.id}: gameWorld não encontrado`);
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
} 