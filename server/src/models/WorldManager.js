import { v4 as uuidv4 } from 'uuid';
import { WorldObject } from './WorldObject.js';
import { WORLD } from '../../../shared/constants/gameConstants.js';

/**
 * Gerenciador do mundo que cria e gerencia objetos do mundo
 */
export class WorldManager {
  /**
   * @param {EntityManager} entityManager - Gerenciador de entidades
   */
  constructor(entityManager) {
    this.entityManager = entityManager;
    
    // Calcula os limites do mundo com base nas constantes
    const halfWidth = WORLD.SIZE.WIDTH / 2;
    const halfHeight = WORLD.SIZE.HEIGHT / 2;
    
    // Limites do mundo
    this.worldBounds = {
      minX: -halfWidth,
      maxX: halfWidth,
      minZ: -halfHeight,
      maxZ: halfHeight
    };
    
    // Configurações de objetos do mundo
    this.worldObjectTypes = {
      TREE: {
        scale: { x: 1, y: 3, z: 1 },
        density: 0.008,
        clusterRadius: 12,
        clusterSize: 5
      },
      ROCK: {
        scale: { x: 1.5, y: 1, z: 1.5 },
        density: 0.004,
        clusterRadius: 10,
        clusterSize: 3
      },
      BUSH: {
        scale: { x: 0.8, y: 0.8, z: 0.8 },
        density: 0.01,
        clusterRadius: 8,
        clusterSize: 6
      }
      // HOUSE e FENCE removidos temporariamente
    };
    
    // Define a configuração dos biomas
    this.biomes = {
      SPAWN: {
        zone: WORLD.ZONES.SPAWN,
        objects: {
          TREE: { density: 0.002, scale: { x: 1, y: 2.5, z: 1 } },
          ROCK: { density: 0.001, scale: { x: 1, y: 0.8, z: 1 } },
          BUSH: { density: 0.003, scale: { x: 0.7, y: 0.7, z: 0.7 } }
        }
      },
      FOREST_NORTH: {
        zone: WORLD.ZONES.FOREST_NORTH,
        objects: {
          TREE: { density: 0.015, scale: { x: 1.2, y: 4, z: 1.2 } },
          ROCK: { density: 0.002, scale: { x: 1.5, y: 1, z: 1.5 } },
          BUSH: { density: 0.008, scale: { x: 0.9, y: 0.9, z: 0.9 } }
        }
      },
      FOREST_WEST: {
        zone: WORLD.ZONES.FOREST_WEST,
        objects: {
          TREE: { density: 0.01, scale: { x: 1, y: 3, z: 1 } },
          ROCK: { density: 0.003, scale: { x: 1.3, y: 1.2, z: 1.3 } },
          BUSH: { density: 0.01, scale: { x: 0.8, y: 0.8, z: 0.8 } }
        }
      },
      MOUNTAINS: {
        zone: WORLD.ZONES.MOUNTAINS,
        objects: {
          ROCK: { density: 0.02, scale: { x: 2, y: 2, z: 2 } },
          TREE: { density: 0.003, scale: { x: 0.8, y: 2, z: 0.8 } }
        }
      },
      PLAINS: {
        zone: WORLD.ZONES.PLAINS,
        objects: {
          BUSH: { density: 0.012, scale: { x: 0.7, y: 0.7, z: 0.7 } },
          TREE: { density: 0.002, scale: { x: 1, y: 3, z: 1 } }
        }
      },
      SWAMP: {
        zone: WORLD.ZONES.SWAMP,
        objects: {
          TREE: { density: 0.005, scale: { x: 0.9, y: 2.5, z: 0.9 } },
          BUSH: { density: 0.015, scale: { x: 1, y: 0.6, z: 1 } },
          ROCK: { density: 0.004, scale: { x: 1, y: 0.5, z: 1 } }
        }
      },
      RUINS: {
        zone: WORLD.ZONES.RUINS,
        objects: {
          ROCK: { density: 0.01, scale: { x: 1.8, y: 1.5, z: 1.8 } }
        }
      }
    };
  }
  
  /**
   * Inicializa o mundo com objetos
   */
  initializeWorld() {
    console.log('Inicializando objetos do mundo...');
    
    // Povoa cada bioma com seus objetos característicos
    for (const biomeName in this.biomes) {
      const biome = this.biomes[biomeName];
      // console.log(`Populando bioma ${biomeName}...`);
      
      // Cria os objetos específicos deste bioma
      for (const objectType in biome.objects) {
        const objectConfig = biome.objects[objectType];
        this.createObjectsInBiome(biomeName, objectType, objectConfig);
      }
    }
    
    // Cria estruturas especiais
    this.createSpecialStructures();
    
    console.log(`Mundo inicializado com ${this.entityManager.worldObjects.size} objetos.`);
  }
  
  /**
   * Cria objetos em um bioma específico
   * @param {string} biomeName - Nome do bioma
   * @param {string} objectType - Tipo de objeto (ex: 'TREE', 'ROCK')
   * @param {Object} objectConfig - Configuração específica do objeto para este bioma
   */
  createObjectsInBiome(biomeName, objectType, objectConfig) {
    const biome = this.biomes[biomeName];
    const zone = biome.zone;
    
    // Calcula a área do bioma
    const width = zone.X_MAX - zone.X_MIN;
    const depth = zone.Z_MAX - zone.Z_MIN;
    const area = width * depth;
    
    // Calcula número de objetos com base na densidade
    const totalObjects = Math.round(area * objectConfig.density);
    
    // Usa o cluster size da configuração global ou um valor padrão
    const clusterSize = this.worldObjectTypes[objectType]?.clusterSize || 3;
    const clusterRadius = this.worldObjectTypes[objectType]?.clusterRadius || 8;
    
    // Calcula número de clusters
    const clusterCount = Math.ceil(totalObjects / clusterSize);
    
    // console.log(`Criando ${clusterCount} agrupamentos de ${objectType} no bioma ${biomeName}, total ~${totalObjects} objetos`);
    
    // Cria cada agrupamento
    for (let i = 0; i < clusterCount; i++) {
      // Posição central do agrupamento dentro do bioma
      const clusterCenter = {
        x: this.getRandomInRange(zone.X_MIN, zone.X_MAX),
        y: 0,
        z: this.getRandomInRange(zone.Z_MIN, zone.Z_MAX)
      };
      
      // Número de objetos neste agrupamento (variação aleatória)
      const objectCount = Math.max(1, Math.round(clusterSize * (0.7 + Math.random() * 0.6)));
      
      // Cria objetos no agrupamento
      for (let j = 0; j < objectCount; j++) {
        // Posição aleatória dentro do raio do agrupamento
        const position = this.getRandomPositionInCircle(clusterCenter, clusterRadius);
        
        // Verifica se está dentro dos limites do bioma
        if (
          position.x < zone.X_MIN || 
          position.x > zone.X_MAX ||
          position.z < zone.Z_MIN || 
          position.z > zone.Z_MAX
        ) {
          continue;
        }
        
        // Evita colisões com outros objetos (verificação básica)
        if (this.isPositionOccupied(position, 3)) {
          continue;
        }
        
        // Rotação aleatória
        const rotation = Math.random() * Math.PI * 2;
        
        // Usa a escala específica deste bioma
        const scale = { ...objectConfig.scale };
        const scaleFactor = 0.85 + Math.random() * 0.3; // 85% a 115% do tamanho base
        scale.x *= scaleFactor;
        scale.y *= scaleFactor;
        scale.z *= scaleFactor;
        
        // Cria o objeto
        this.createWorldObject(objectType, position, scale, rotation, true, biomeName);
      }
    }
  }
  
  /**
   * Verifica se uma posição está ocupada por outros objetos
   * @param {Object} position - Posição a verificar
   * @param {number} minDistance - Distância mínima para outros objetos
   * @returns {boolean} - true se ocupada, false se livre
   */
  isPositionOccupied(position, minDistance = 3) {
    // Aumentada a distância mínima para evitar aglomeração
    for (const object of this.entityManager.worldObjects.values()) {
      const dx = object.position.x - position.x;
      const dz = object.position.z - position.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      if (distance < minDistance) {
        return true;
      }
    }
    
    return false;
  }
  
  /**
   * Cria um objeto do mundo e o adiciona ao gerenciador de entidades
   * @param {string} objectType - Tipo de objeto
   * @param {Object} position - Posição
   * @param {Object} scale - Escala
   * @param {number} rotation - Rotação
   * @param {boolean} isCollidable - Se o objeto é colidível
   * @param {string} biome - Nome do bioma
   * @returns {WorldObject} - Objeto criado
   */
  createWorldObject(objectType, position, scale = { x: 1, y: 1, z: 1 }, rotation = 0, isCollidable = true, biome = null) {
    const id = `world-object-${uuidv4()}`;
    
    // Cria o objeto
    const worldObject = new WorldObject(
      id,
      objectType,
      position,
      scale,
      rotation,
      isCollidable,
      biome
    );
    
    // Adiciona ao gerenciador de entidades
    this.entityManager.worldObjects.set(id, worldObject);
    
    return worldObject;
  }
  
  /**
   * Cria estruturas especiais no mundo
   */
  createSpecialStructures() {
    // Nenhuma estrutura especial temporariamente
  }
  
  /**
   * Gera uma posição aleatória dentro de um círculo
   * @param {Object} center - Centro do círculo
   * @param {number} radius - Raio do círculo
   * @returns {Object} - Posição aleatória
   */
  getRandomPositionInCircle(center, radius) {
    // Ângulo aleatório
    const angle = Math.random() * Math.PI * 2;
    
    // Distância aleatória (raiz quadrada para distribuição uniforme)
    const distance = Math.sqrt(Math.random()) * radius;
    
    // Calcula posição
    return {
      x: center.x + Math.cos(angle) * distance,
      y: center.y,
      z: center.z + Math.sin(angle) * distance
    };
  }
  
  /**
   * Gera um número aleatório dentro de um intervalo
   * @param {number} min - Valor mínimo
   * @param {number} max - Valor máximo
   * @returns {number} - Valor aleatório
   */
  getRandomInRange(min, max) {
    return min + Math.random() * (max - min);
  }
  
  /**
   * Retorna os limites do mundo
   * @returns {Object} - Limites do mundo
   */
  getWorldBounds() {
    return { ...this.worldBounds };
  }
  
  /**
   * Verifica se uma posição está dentro dos limites do mundo
   * @param {Object} position - Posição a verificar
   * @returns {boolean} - true se dentro dos limites, false caso contrário
   */
  isPositionInBounds(position) {
    return (
      position.x >= this.worldBounds.minX &&
      position.x <= this.worldBounds.maxX &&
      position.z >= this.worldBounds.minZ &&
      position.z <= this.worldBounds.maxZ
    );
  }
  
  /**
   * Retorna todos os objetos do mundo serializados para envio ao cliente
   * @returns {Array} - Lista de objetos serializados
   */
  getSerializedWorldObjects() {
    return Array.from(this.entityManager.worldObjects.values()).map(obj => obj.serialize());
  }
} 