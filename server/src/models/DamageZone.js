export class DamageZone {
  /**
   * @param {string} id - ID único da zona
   * @param {Object} position - Posição central {x, y, z}
   * @param {number} radius - Raio da zona
   * @param {number} duration - Duração total em ms
   * @param {number} tickInterval - Intervalo entre danos em ms
   * @param {number} damage - Dano por tick
   * @param {Entity} owner - Entidade que criou a zona
   * @param {Object} ability - Objeto da habilidade associada
   * @param {boolean} frostSpikes - Indica se a zona é de gelo
   */
  constructor(id, position, radius, duration, tickInterval, damage, owner, ability, frostSpikes) {
    this.id = id;
    this.position = { ...position };
    this.radius = radius;
    this.duration = duration;
    this.tickInterval = tickInterval;
    this.damage = damage;
    this.owner = owner;
    this.ability = ability;
    this.elapsed = 0;
    this.timeSinceLastTick = 0;
    this.markedForRemoval = false;
    this.alreadyHit = new Set(); // Para evitar múltiplos hits no mesmo tick
    this.justTicked = false; // Indica se um tick acabou de ocorrer
    this.frostSpikes = frostSpikes;
    // console.log(`[DAMAGEZONE][CONSTRUTOR] Zona ${id} criada | pos=(${position.x.toFixed(2)},${position.z.toFixed(2)}) | raio=${radius} | duração=${duration}ms | tickInterval=${tickInterval}ms | dano=${damage} | frostSpikes=${frostSpikes}`);
  }

  /**
   * Atualiza o tempo de vida da zona
   * @param {number} deltaTime - Tempo desde a última atualização (ms)
   */
  update(deltaTime) {
    this.justTicked = false; // Reset no início de cada update
    this.elapsed += deltaTime;
    this.timeSinceLastTick += deltaTime;
    // console.log(`[DAMAGEZONE][UPDATE] Zona ${this.id} | deltaTime=${deltaTime}ms | elapsed=${this.elapsed}ms | timeSinceLastTick=${this.timeSinceLastTick}ms | tickInterval=${this.tickInterval}ms`);
    if (this.elapsed >= this.duration) {
      this.markedForRemoval = true;
      // console.log(`[DAMAGEZONE][UPDATE] Zona ${this.id} marcada para REMOÇÃO (duração atingida): elapsed=${this.elapsed}ms, duration=${this.duration}ms`);
      return; // IMPORTANTE: Sair do método imediatamente
    }
    // Garante múltiplos ticks se deltaTime for grande OU se for zona instantânea
    let ticked = false;
    while (this.timeSinceLastTick >= this.tickInterval || (this.duration <= this.tickInterval && !this.justTicked)) {
      // console.log(`[DAMAGEZONE][UPDATE] Zona ${this.id} TICK atingido! Limpando alreadyHit. nextTick=${this.timeSinceLastTick - this.tickInterval}ms`);
      this.alreadyHit.clear();
      this.timeSinceLastTick -= this.tickInterval;
      this.justTicked = true; // Sinaliza que um tick ocorreu neste update
      ticked = true;
      // Para zona instantânea, só processa 1 tick
      if (this.duration <= this.tickInterval) break;
    }
    if (!ticked) this.justTicked = false;
  }
} 