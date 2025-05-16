import { WorldObject } from './WorldObject.js';
import { MAP_CONFIG } from '../mapConfig.js';

/**
 * Gerenciador do mundo que cria e gerencia objetos do mundo baseado em MAP_CONFIG
 */
export class WorldManager {
  /**
   * @param {EntityManager} entityManager - Gerenciador de entidades
   */
  constructor(entityManager) {
    this.entityManager = entityManager;
    this.areas = MAP_CONFIG.areas;
    this.groundTiles = MAP_CONFIG.groundTiles;
    this.size = MAP_CONFIG.size;
    this.groundDefault = MAP_CONFIG.groundDefault;
  }

  /**
   * Inicializa o mundo com objetos e áreas a partir do MAP_CONFIG
   */
  initializeWorld() {
    // Cria objetos do mundo conforme configuração
    for (const obj of MAP_CONFIG.objects) {
      this.createWorldObject(obj);
    }
    // (Futuro) Poderia criar estruturas especiais, eventos, etc, conforme áreas
    console.log(`Mundo inicializado com ${this.entityManager.worldObjects.size} objetos.`);
    // Logs de debug para assets decorativos
    const objs = Array.from(this.entityManager.worldObjects.values());
    const countByType = {};
    for (const obj of objs) {
      const t = obj.type;
      countByType[t] = (countByType[t] || 0) + 1;
    }
    console.log('[DEBUG] Quantidade por tipo:', countByType);
    console.log('[DEBUG] Exemplos:', objs.slice(0, 5).map(o => ({ type: o.type, pos: o.position, area: o.area, scale: o.scale })));
  }

  /**
   * Cria um objeto do mundo a partir da configuração, garantindo ID numérico único
   * @param {Object} objConfig - Configuração do objeto
   */
  createWorldObject(objConfig) {
    const { type, position, scale, area } = objConfig;
    // Rotação aleatória ou definida
    const rotation = objConfig.rotation !== undefined ? objConfig.rotation : Math.random() * Math.PI * 2;
    // Se não houver escala, usa padrão
    const finalScale = scale || { x: 1, y: 1, z: 1 };
    // Usa o EntityManager para garantir ID numérico incremental
    const worldObj = this.entityManager.createWorldObject(
      type,
      position,
      finalScale,
      rotation,
      true,
      area
    );
    return worldObj;
  }

  /**
   * Retorna a área (zona) correspondente a uma posição
   * @param {Object} position - {x, z}
   */
  getAreaByPosition(position) {
    for (const area of this.areas) {
      const b = area.bounds;
      if (
        position.x >= b.xMin && position.x <= b.xMax &&
        position.z >= b.zMin && position.z <= b.zMax
      ) {
        return area;
      }
    }
    return null;
  }

  /**
   * Retorna a cor do chão para uma posição (considerando tiles customizados e área)
   * @param {Object} position - {x, z}
   */
  getGroundColorAt(position) {
    // Verifica tiles customizados (prioridade)
    for (const tile of this.groundTiles) {
      if (tile.from && tile.to) {
        if (
          position.x >= tile.from.x && position.x <= tile.to.x &&
          position.z >= tile.from.z && position.z <= tile.to.z
        ) {
          return tile.color;
        }
      } else if (tile.x !== undefined && tile.z !== undefined) {
        if (position.x === tile.x && position.z === tile.z) {
          return tile.color;
        }
      }
    }
    // Se não houver tile customizado, usa cor da área
    const area = this.getAreaByPosition(position);
    if (area && area.groundColor) return area.groundColor;
    // Se não houver área, usa cor padrão
    return this.groundDefault;
  }

  /**
   * Serializa os objetos do mundo para o cliente
   */
  getSerializedWorldObjects() {
    return Array.from(this.entityManager.worldObjects.values()).map(obj => obj.serialize({ compact: true }));
  }
}

export default WorldManager; 