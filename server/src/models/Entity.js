import { WORLD } from '../../../shared/constants/gameConstants.js';

/**
 * Classe base para todas as entidades do jogo.
 * Serve como fundamento para Player, Monster e outros objetos de jogo.
 */
export class Entity {
  constructor(id, position = { x: 0, y: 0, z: 0 }, rotation = 0) {
    this.id = id;
    this.position = { ...position };
    this.rotation = rotation;
    this.velocity = { x: 0, y: 0, z: 0 };
    this.active = true;
    this.type = 'entity';
    this.created = Date.now();
    this.updated = Date.now();
  }

  /**
   * Atualiza a posição da entidade com base na velocidade atual
   * @param {number} deltaTime - Tempo decorrido desde a última atualização em milissegundos
   */
  update(deltaTime) {
    if (!this.active) return;
    
    // Normalizamos deltaTime para o tick rate esperado (50ms)
    // Isso garante movimento consistente independente de variações no tick rate
    const normalizedDelta = deltaTime / 50;

    // Atualizar posição com base na velocidade e no delta normalizado
    this.position.x += this.velocity.x * normalizedDelta;
    this.position.y += this.velocity.y * normalizedDelta;
    this.position.z += this.velocity.z * normalizedDelta;
    
    // Verificar limites do mundo se as barreiras estiverem habilitadas
    if (WORLD.BOUNDARIES.ENABLED) {
      // Cálculo das coordenadas do mundo com margem de segurança (borda)
      const halfWidth = WORLD.SIZE.WIDTH / 2;
      const halfHeight = WORLD.SIZE.HEIGHT / 2;
      const borderWidth = WORLD.BOUNDARIES.BORDER_WIDTH;
      
      // Limites em X (largura do mundo)
      const minX = -halfWidth + borderWidth;
      const maxX = halfWidth - borderWidth;
      
      // Limites em Z (altura do mundo)
      const minZ = -halfHeight + borderWidth;
      const maxZ = halfHeight - borderWidth;
      
      // Aplicar limites em X
      if (this.position.x < minX) this.position.x = minX;
      if (this.position.x > maxX) this.position.x = maxX;
      
      // Aplicar limites em Z
      if (this.position.z < minZ) this.position.z = minZ;
      if (this.position.z > maxZ) this.position.z = maxZ;
    }
    
    this.updated = Date.now();
  }

  /**
   * Retorna um objeto com os dados serializáveis da entidade
   * para envio ao cliente
   */
  serialize() {
    return {
      id: this.id,
      type: this.type,
      position: { ...this.position },
      rotation: this.rotation,
      active: this.active
    };
  }

  /**
   * Atualiza as propriedades da entidade com base nos dados recebidos
   * @param {Object} data - Dados para atualizar a entidade
   */
  deserialize(data) {
    if (data.position) this.position = { ...data.position };
    if (data.rotation !== undefined) this.rotation = data.rotation;
    if (data.active !== undefined) this.active = data.active;
    this.updated = Date.now();
  }

  /**
   * Calcula a distância entre esta entidade e outra
   * @param {Entity} entity - Entidade para calcular a distância
   * @returns {number} Distância entre as entidades
   */
  distanceTo(entity) {
    const dx = this.position.x - entity.position.x;
    const dz = this.position.z - entity.position.z;
    return Math.sqrt(dx * dx + dz * dz);
  }
} 