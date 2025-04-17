import * as THREE from 'three';

/**
 * Presenter responsável por renderizar e gerenciar objetos do mundo no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */
export class WorldObjectPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os objetos serão renderizados
   */
  constructor(scene) {
    this.scene = scene;
    this.worldObjects = new Map(); // Map para armazenar todos os objetos do mundo por ID
  }

  /**
   * Cria ou atualiza um objeto do mundo baseado nos dados recebidos do servidor
   * @param {Object} objectData - Dados do objeto vindos do servidor
   */
  updateWorldObject(objectData) {
    if (!objectData || !objectData.id) {
      console.error('Dados de objeto do mundo inválidos:', objectData);
      return;
    }

    const objectId = objectData.id;

    // Se o objeto já existe, apenas atualiza suas propriedades
    if (this.worldObjects.has(objectId)) {
      this.updateExistingWorldObject(objectId, objectData);
    } else {
      // Caso contrário, cria uma nova representação visual
      this.createWorldObject(objectId, objectData);
    }
  }

  /**
   * Cria uma representação visual para um novo objeto do mundo
   * @param {string} id - ID único do objeto
   * @param {Object} data - Dados do objeto
   */
  createWorldObject(id, data) {
    // Geometria e material baseados no tipo de objeto
    let geometry, material;
    let worldObject;
    
    switch (data.objectType) {
      case 'TREE':
        // Árvore: cilindro marrom (tronco) com cone verde (copa)
        const treeGroup = new THREE.Group();
        
        // Tronco
        const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 8);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Marrom
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 0.75; // Metade da altura
        treeGroup.add(trunk);
        
        // Copa
        const leavesGeometry = new THREE.ConeGeometry(1, 2, 8);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 }); // Verde escuro
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 2.5; // Acima do tronco
        treeGroup.add(leaves);
        
        // Referência ao objeto principal
        worldObject = treeGroup;
        break;
        
      case 'ROCK':
        // Rocha: esfera irregular cinza
        geometry = new THREE.DodecahedronGeometry(0.8, 0);
        material = new THREE.MeshStandardMaterial({ color: 0x808080 }); // Cinza
        worldObject = new THREE.Mesh(geometry, material);
        worldObject.scale.y = 0.7; // Achatada verticalmente
        break;
        
      case 'BUSH':
        // Arbusto: esfera verde
        geometry = new THREE.SphereGeometry(0.5, 8, 6);
        material = new THREE.MeshStandardMaterial({ color: 0x32CD32 }); // Verde limão
        worldObject = new THREE.Mesh(geometry, material);
        break;
        
      case 'HOUSE':
        // Casa: cubo com telhado triangular
        const houseGroup = new THREE.Group();
        
        // Base da casa
        const baseGeometry = new THREE.BoxGeometry(3, 2, 3);
        const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xD2B48C }); // Bege
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = 1; // Metade da altura
        houseGroup.add(base);
        
        // Telhado
        const roofGeometry = new THREE.ConeGeometry(3, 1.5, 4);
        const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8B0000 }); // Vermelho escuro
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.y = 2.75; // Acima da base
        roof.rotation.y = Math.PI / 4; // Rotaciona para alinhar com a base
        houseGroup.add(roof);
        
        // Referência ao objeto principal
        worldObject = houseGroup;
        break;
        
      case 'FENCE':
        // Cerca: caixa fina e comprida
        geometry = new THREE.BoxGeometry(1.5, 0.8, 0.1);
        material = new THREE.MeshStandardMaterial({ color: 0xA0522D }); // Marrom médio
        worldObject = new THREE.Mesh(geometry, material);
        break;
        
      default:
        // Objeto genérico: cubo cinza
        geometry = new THREE.BoxGeometry(1, 1, 1);
        material = new THREE.MeshStandardMaterial({ color: 0xAAAAAA }); // Cinza claro
        worldObject = new THREE.Mesh(geometry, material);
        break;
    }
    
    // Adiciona à cena
    this.scene.add(worldObject);
    
    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    worldObject.position.set(
      Number(position.x) || 0,
      Number(position.y) || 0,
      Number(position.z) || 0
    );
    
    // Rotação
    if (data.rotation !== undefined) {
      worldObject.rotation.y = Number(data.rotation) || 0;
    }
    
    // Escala
    if (data.scale) {
      worldObject.scale.set(
        Number(data.scale.x) || 1,
        Number(data.scale.y) || 1,
        Number(data.scale.z) || 1
      );
    }
    
    // Armazena metadados junto com a mesh
    worldObject.userData = {
      id: id,
      type: 'worldObject',
      objectType: data.objectType || 'unknown',
      isCollidable: data.isCollidable !== undefined ? data.isCollidable : true,
      properties: data.properties || {},
      created: Date.now()
    };
    
    // Armazena referência ao objeto
    this.worldObjects.set(id, worldObject);
    
    // console.log(`Objeto do mundo criado: ${id}, tipo: ${worldObject.userData.objectType}`);
  }

  /**
   * Atualiza um objeto do mundo existente com novos dados
   * @param {string} id - ID do objeto
   * @param {Object} data - Novos dados do objeto
   */
  updateExistingWorldObject(id, data) {
    const worldObject = this.worldObjects.get(id);
    if (!worldObject) return;
    
    // Atualiza posição se fornecida
    if (data.position) {
      worldObject.position.set(
        Number(data.position.x) || worldObject.position.x,
        Number(data.position.y) || worldObject.position.y,
        Number(data.position.z) || worldObject.position.z
      );
    }
    
    // Atualiza rotação se fornecida
    if (data.rotation !== undefined) {
      worldObject.rotation.y = Number(data.rotation) || worldObject.rotation.y;
    }
    
    // Atualiza escala se fornecida
    if (data.scale) {
      worldObject.scale.set(
        Number(data.scale.x) || worldObject.scale.x,
        Number(data.scale.y) || worldObject.scale.y,
        Number(data.scale.z) || worldObject.scale.z
      );
    }
    
    // Atualiza propriedades se fornecidas
    if (data.properties) {
      worldObject.userData.properties = data.properties;
    }
    
    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      worldObject.visible = data.active;
    }
  }

  /**
   * Remove um objeto do mundo da cena
   * @param {string} id - ID do objeto a ser removido
   */
  removeWorldObject(id) {
    if (!this.worldObjects.has(id)) return;
    
    const worldObject = this.worldObjects.get(id);
    
    // Remove da cena
    this.scene.remove(worldObject);
    
    // Remove do mapa
    this.worldObjects.delete(id);
    
    // console.log(`Objeto do mundo removido: ${id}`);
  }

  /**
   * Obtém a referência a um objeto do mundo pelo ID
   * @param {string} id - ID do objeto
   * @returns {THREE.Object3D|null} - Referência ao objeto 3D ou null se não existir
   */
  getWorldObject(id) {
    return this.worldObjects.get(id) || null;
  }

  /**
   * Limpa todos os objetos do mundo da cena
   */
  clearAllWorldObjects() {
    for (const id of this.worldObjects.keys()) {
      this.removeWorldObject(id);
    }
  }
} 