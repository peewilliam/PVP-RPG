import { Entity } from './Entity.js';

/**
 * Classe que representa um projétil no mundo do jogo.
 * Usado para habilidades como Fireball.
 */
export class Projectile extends Entity {
  /**
   * @param {string} id - ID único do projétil
   * @param {Object} position - Posição inicial {x, y, z}
   * @param {Object} direction - Vetor de direção normalizado {x, y, z}
   * @param {number} speed - Velocidade do projétil
   * @param {number} radius - Raio de colisão do projétil
   * @param {number} maxLifetime - Tempo máximo de vida em ms
   * @param {Entity} owner - Entidade que lançou o projétil
   * @param {Object} ability - Objeto da habilidade associada
   */
  constructor(id, position, direction, speed, radius, maxLifetime, owner, ability) {
    super(id, position);
    this.type = 'projectile';
    this.direction = { ...direction };
    this.speed = speed;
    this.collisionRadius = radius;
    this.owner = owner;
    this.ability = ability;
    this.lifetime = 0;
    this.maxLifetime = maxLifetime;
    this.markedForRemoval = false;
  }

  /**
   * Atualiza a posição do projétil
   * @param {number} deltaTime - Tempo desde a última atualização (ms)
   */
  update(deltaTime) {
    // Move o projétil na direção definida
    this.position.x += this.direction.x * this.speed * (deltaTime / 1000);
    this.position.y += this.direction.y * this.speed * (deltaTime / 1000);
    this.position.z += this.direction.z * this.speed * (deltaTime / 1000);
    this.lifetime += deltaTime;
    // Marca para remoção se exceder o tempo de vida
    if (this.lifetime >= this.maxLifetime) {
      this.markedForRemoval = true;
    }
  }
} 