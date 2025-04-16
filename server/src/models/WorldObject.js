import { Entity } from './Entity.js';

/**
 * Classe que representa objetos estáticos do mundo como árvores, rochas, etc.
 */
export class WorldObject extends Entity {
  /**
   * @param {string} id - ID único do objeto
   * @param {string} objectType - Tipo do objeto (ex: 'TREE', 'ROCK')
   * @param {Object} position - Posição {x, y, z}
   * @param {Object} scale - Escala {x, y, z}
   * @param {number} rotation - Rotação em radianos
   * @param {boolean} isCollidable - Se o objeto permite colisão
   */
  constructor(id, objectType, position = { x: 0, y: 0, z: 0 }, scale = { x: 1, y: 1, z: 1 }, rotation = 0, isCollidable = true) {
    super(id, position, rotation);
    
    this.objectType = objectType;
    this.type = 'worldObject';
    this.scale = { ...scale };
    this.isCollidable = isCollidable;
    
    // Objetos do mundo são estáticos, não têm velocidade
    this.velocity = { x: 0, y: 0, z: 0 };
    
    // Propriedades específicas para diferentes tipos de objetos
    this.properties = {};
    
    // Define propriedades baseadas no tipo
    this.initializePropertiesByType();
  }
  
  /**
   * Inicializa propriedades específicas com base no tipo do objeto
   */
  initializePropertiesByType() {
    switch (this.objectType) {
      case 'TREE':
        this.collisionRadius = 0.8; // Raio de colisão
        this.properties.height = 5; // Altura para fins de renderização
        this.properties.canBeHarvested = true; // Pode ser cortado para madeira
        break;
        
      case 'ROCK':
        this.collisionRadius = 1.2;
        this.properties.size = 'medium'; // Tamanho da rocha
        this.properties.canBeHarvested = true; // Pode ser minerado
        break;
        
      case 'BUSH':
        this.collisionRadius = 0.4;
        this.properties.canBeHarvested = true; // Pode ser coletado para frutas
        break;
        
      case 'FENCE':
        this.collisionRadius = 0.3;
        this.properties.isDestructible = false; // Não pode ser destruído
        break;
        
      case 'HOUSE':
        this.collisionRadius = 3.0;
        this.properties.isEnterrable = true; // Pode entrar (futuro)
        this.properties.doorPosition = { // Posição da porta relativa ao objeto
          x: 0,
          y: 0,
          z: -3
        };
        break;
        
      default:
        this.collisionRadius = 1.0;
        break;
    }
  }
  
  /**
   * Método update sobrescrito para objeto estático
   * No geral, objetos do mundo são estáticos e não precisam de atualização
   * @param {number} deltaTime - Tempo desde a última atualização
   */
  update(deltaTime) {
    // A maioria dos objetos do mundo são estáticos
    // Mas podemos adicionar lógica para objetos animados ou interativos aqui
    if (this.properties.isAnimated) {
      // Lógica de animação
      this.animationTime = (this.animationTime || 0) + deltaTime;
      
      // Exemplo: oscilação suave
      if (this.properties.animationType === 'oscillate') {
        const amplitude = this.properties.animationAmplitude || 0.1;
        const frequency = this.properties.animationFrequency || 0.001;
        
        // Aplica movimento oscilatório
        this.position.y = this.originalPosition.y + 
          Math.sin(this.animationTime * frequency) * amplitude;
      }
    }
  }
  
  /**
   * Interage com o objeto
   * @param {Player} player - Jogador que está interagindo
   * @returns {Object} - Resultado da interação
   */
  interact(player) {
    const result = {
      success: false,
      message: 'Nada acontece.'
    };
    
    switch (this.objectType) {
      case 'TREE':
        if (this.properties.canBeHarvested) {
          result.success = true;
          result.message = 'Você coleta madeira da árvore.';
          // Adicionar lógica para coleta de recursos
        }
        break;
        
      case 'ROCK':
        if (this.properties.canBeHarvested) {
          result.success = true;
          result.message = 'Você coleta pedras.';
          // Adicionar lógica para coleta de recursos
        }
        break;
        
      case 'HOUSE':
        if (this.properties.isEnterrable) {
          result.success = true;
          result.message = 'Você entra na casa.';
          // Adicionar lógica para entrar em edificações
        }
        break;
    }
    
    return result;
  }
  
  /**
   * Serializa o objeto para o cliente
   */
  serialize() {
    return {
      ...super.serialize(),
      objectType: this.objectType,
      scale: { ...this.scale },
      isCollidable: this.isCollidable,
      // Enviamos apenas propriedades relevantes ao cliente
      properties: {
        isAnimated: this.properties.isAnimated || false,
        isEnterrable: this.properties.isEnterrable || false,
        size: this.properties.size || 'medium'
      }
    };
  }
} 