/**
 * Classe que implementa o monstro "Aranha Sombria"
 * 
 * Comportamento:
 * 1. Segue o mesmo comportamento base de monstros (idle, patrol, chase, attack)
 * 2. Possui duas habilidades especiais:
 *    - WebShot: Teia que reduz a velocidade do alvo por 3 segundos
 *    - SpiderLeap: Salto rápido em direção ao alvo causando 1.5x de dano
 * 
 * Sistema de salto:
 * - Quando a habilidade é usada, a aranha recebe um impulso de velocidade
 * - Através da propriedade isLeaping, a aranha permanece neste estado por 500ms
 * - Ao finalizar o salto, reduz sua velocidade e aplica o dano ao alvo
 * - O cliente mostra uma animação em arco sincronizada com a mesma duração
 * 
 * Observações:
 * - Durante o salto, a IA normal é ignorada para manter a trajetória
 * - O salto só é usado se o alvo estiver a pelo menos 2 unidades de distância
 * - A teia (WebShot) causa redução de velocidade de 60% por 3 segundos
 */
import { BaseMonster } from './BaseMonster.js';
import { webShotSkill } from '../skills/WebShotSkill.js';
import { spiderLeapSkill } from '../skills/SpiderLeapSkill.js';
import { EVENTS } from '../../../../shared/constants/gameConstants.js';

export class Spider extends BaseMonster {
  constructor(id, position = { x: 0, y: 0, z: 0 }, level = 1) {
    super(id, 'SPIDER', position, level);
    this.lastWebShot = 0;
    this.lastLeap = 0;
    this.webShotCooldown = 3000;
    this.leapCooldown = 15000;
    this.aggroRange = 16;
    this.maxLeapDistance = 16;
    this.attackRange = 3;
    this.attackCooldown = 1000;
    this.stats.damage = Math.floor(this.stats.damage * 0.5);
    this.isLeaping = false;
    this.leapTargetId = null;
    this.leapStartTime = 0;
    this.leapDuration = 500;
    this.leapStartPos = null;
    this.leapEndPos = null;
    this.attackStationaryTime = 0;
    this.attackPositionAngle = null;
    this.lastAttackTime = Date.now();
  }

  update(deltaTime, players = []) {
    if (this.isLeaping && this.leapStartPos && this.leapEndPos) {
      const now = Date.now();
      const t = Math.min((now - this.leapStartTime) / this.leapDuration, 1);
      const x = this.leapStartPos.x + (this.leapEndPos.x - this.leapStartPos.x) * t;
      const z = this.leapStartPos.z + (this.leapEndPos.z - this.leapStartPos.z) * t;
      const arcHeight = Math.max(2.5, this.leapStartPos && this.leapEndPos ? Math.abs(this.leapEndPos.x - this.leapStartPos.x) + Math.abs(this.leapEndPos.z - this.leapStartPos.z) * 0.35 : 2.5);
      const y = this.leapStartPos.y + (this.leapEndPos.y - this.leapStartPos.y) * t + Math.sin(Math.PI * t) * arcHeight;
      this.position.x = x;
      this.position.y = y;
      this.position.z = z;

      if (t >= 1) {
        this.position.x = this.leapEndPos.x;
        this.position.y = this.leapEndPos.y;
        this.position.z = this.leapEndPos.z;
        this.endLeap(players);
      }
      return;
    }
    super.update(deltaTime, players);
  }

  endLeap(players) {
    this.isLeaping = false;
    this.velocity.x = 0;
    this.velocity.z = 0;

    if (this.leapEndPos) {
      this.position.x = this.leapEndPos.x;
      this.position.y = 0;
      this.position.z = this.leapEndPos.z;

      console.log(`Spider ${this.id} aterrissou em (${this.position.x}, ${this.position.z})`);

      players.forEach(p => {
        const dx = p.position.x - this.position.x;
        const dz = p.position.z - this.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        console.log(`- Player ${p.id} em (${p.position.x}, ${p.position.z}), distância: ${dist}`);
      });

      if (global.gameWorld && typeof global.gameWorld.applyAreaDamage === 'function') {
        global.gameWorld.applyAreaDamage({
          source: this,
          position: { x: this.position.x, y: 0, z: this.position.z },
          radius: 2.5,
          damage: Math.floor(this.stats.damage * 1.2),
          type: 'leap',
          color: '#ff3333',
          floatingText: 'Impacto!'
        });
      } else {
        console.error(`Spider ${this.id}: global.gameWorld.applyAreaDamage não encontrado!`);
      }

      this.leapEndPos = null;
      this.leapStartPos = null;
    }

    this.leapTargetId = null;
    this.position.y = 0;
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

  updateAI(deltaTime, players) {
    if (this.stats.hp <= 0) return;
    if (this.isLeaping) return;
    const now = Date.now();
    const target = this.findPlayerById(players, this.targetId);

    if (target) {
      const dist = this.distanceTo(target);

      if (dist > this.attackRange * 1.2 && dist <= this.maxLeapDistance && now - this.lastLeap > this.leapCooldown) {
        this.lastLeap = now;
        this.isLeaping = true;
        this.leapStartTime = Date.now();
        this.leapStartPos = { x: this.position.x, y: this.position.y, z: this.position.z };

        const angle = Math.random() * Math.PI * 2;
        const jumpRadius = this.attackRange * 0.8;
        this.leapEndPos = {
          x: target.position.x + Math.cos(angle) * jumpRadius,
          y: 0,
          z: target.position.z + Math.sin(angle) * jumpRadius
        };

        this.leapTargetId = target.id;
        if (global.server) {
          try {
            global.server.emit('monster:spiderLeap', {
              sourceId: this.id,
              targetPos: {
                x: this.leapEndPos.x,
                y: 0,
                z: this.leapEndPos.z
              }
            });
            console.log(`Spider ${this.id} usou spiderLeap para (${this.leapEndPos.x}, ${this.leapEndPos.z})`);
          } catch (error) {
            console.error('Erro ao emitir evento spiderLeap:', error);
          }
        }
        return;
      }

      if (dist <= this.attackRange) {
        if (this.attackPositionAngle === null) {
          this.attackPositionAngle = Math.random() * Math.PI * 2;
          this.attackStationaryTime = now;
        }

        const idealDistance = this.attackRange * 0.7;
        const idealX = target.position.x + Math.cos(this.attackPositionAngle) * idealDistance;
        const idealZ = target.position.z + Math.sin(this.attackPositionAngle) * idealDistance;

        const dxIdeal = idealX - this.position.x;
        const dzIdeal = idealZ - this.position.z;
        const distToIdeal = Math.sqrt(dxIdeal * dxIdeal + dzIdeal * dzIdeal);

        if (distToIdeal > 0.5) {
          const moveSpeed = this.moveSpeed * 0.6;
          this.velocity.x = (dxIdeal / distToIdeal) * moveSpeed;
          this.velocity.z = (dzIdeal / distToIdeal) * moveSpeed;
        } else {
          this.velocity.x = 0;
          this.velocity.z = 0;
          this.attackTarget(target);

          if (now - this.lastWebShot > this.webShotCooldown) {
            webShotSkill(this, target, null);
            this.lastWebShot = now;

            if (global.server) {
              try {
                global.server.emit('monster:webShot', {
                  sourceId: this.id,
                  targetId: target.id,
                  targetType: target.type
                });
                console.log(`Spider ${this.id} usou webShot em ${target.id}`);
              } catch (error) {
                console.error('Erro ao emitir evento webShot:', error);
              }
            }
          }

          if (now - this.attackStationaryTime > 5000 + Math.random() * 3000) {
            this.attackPositionAngle = Math.random() * Math.PI * 2;
            this.attackStationaryTime = now;
          }
        }

        this.lookAt(target.position);
        return;
      }

      if (dist <= this.aggroRange) {
        this.attackPositionAngle = null;

        const dx = target.position.x - this.position.x;
        const dz = target.position.z - this.position.z;
        const length = Math.sqrt(dx * dx + dz * dz);

        this.velocity.x = (dx / length) * this.moveSpeed;
        this.velocity.z = (dz / length) * this.moveSpeed;
        this.lookAt(target.position);
        return;
      }
    }

    this.attackPositionAngle = null;
    super.updateAI(deltaTime, players);
  }

  attackTarget(target) {
    const now = Date.now();
    if (now - this.lastAttackTime < this.attackCooldown) return;

    if (target && typeof target.takeDamage === 'function') {
      target.takeDamage(this.stats.damage, this);
      this.emitDamageEvent(target, this.stats.damage);
      this.lastAttackTime = now;
    }
  }
}
