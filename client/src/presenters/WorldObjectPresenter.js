import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Presenter responsável por renderizar e gerenciar objetos do mundo no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */

// Mapeamento dos modelos por bioma e tipo de objeto (estilo Albion Online com os novos modelos)
const MODEL_MAP = {
  SPAWN: {
    TREE: ['/models-3d/Tree01.glb', '/models-3d/Bush01.glb'],
    GRASS: '/models-3d/Grass01.glb',
    FLOWER: '/models-3d/Flower01.glb',
    ROCK: '/models-3d/Rock01.glb',
  },
  FOREST_NORTH: {
    TREE: '/models-3d/Tree01.glb',
    BUSH: '/models-3d/Bush01.glb',
    GRASS: '/models-3d/Grass01.glb',
    FLOWER: '/models-3d/Flowers01.glb',
    ROCK: '/models-3d/Rock02.glb',
  },
  FOREST_WEST: {
    TREE: ['/models-3d/Tree01.glb', '/models-3d/Bush01.glb'],
    GRASS: '/models-3d/Grass01.glb',
    FLOWER: '/models-3d/Flower01.glb',
    ROCK: '/models-3d/Rock01.glb',
  },
  MOUNTAINS: {
    TREE: '/models-3d/Tree01.glb',
    ROCK: '/models-3d/Mountain01.glb',
    STONE: '/models-3d/Pebbles01.glb',
    GRASS: '/models-3d/Grass01.glb',
  },
  PLAINS: {
    TREE: '/models-3d/Tree01.glb',
    GRASS: '/models-3d/Grass01.glb',
    FLOWER: '/models-3d/Flowers01.glb',
    ROCK: '/models-3d/Pebbles01.glb',
  },
  SWAMP: {
    TREE: ['/models-3d/Tree01.glb', '/models-3d/Bush01.glb'],
    GRASS: '/models-3d/Grass01.glb',
    ROCK: '/models-3d/Rock02.glb',
  },
  RUINS: {
    TREE: '/models-3d/Tree01.glb',
    ROCK: '/models-3d/Rock01.glb',
    BRIDGE: '/models-3d/Bridge01.glb',
    STONE: '/models-3d/Pebbles01.glb',
  },
};

// Cache de modelos carregados
const modelCache = {};
const loader = new GLTFLoader();

async function loadModel(path) {
  
  if (modelCache[path]) return modelCache[path].clone();

  // console.log('[DEBUG] Carregando modelo:', path);
  return new Promise((resolve, reject) => {
    loader.load(path, (gltf) => {
      modelCache[path] = gltf.scene;
      resolve(gltf.scene.clone());
    }, undefined, reject);
  });
}

// Utilitário para ajustar material dos modelos sem alterar a escala
function adjustModel(model, objectType, modelPath) {
  // Não aplicamos mais escala - mantemos o tamanho original de importação
  let scaleFactor = 1.0; // Escala 1.0 para manter o tamanho original
  let verticalOffset = 0; // Desativamos offsets verticais para manter posição original
  
  // Verificar qual modelo específico está sendo usado para ajustes personalizados
  const isTreeModel = modelPath && modelPath.includes('Tree01.glb');
  const isBushModel = modelPath && modelPath.includes('Bush01.glb');
  const isRock1Model = modelPath && modelPath.includes('Rock01.glb');
  const isRock2Model = modelPath && modelPath.includes('Rock02.glb');
  const isMountainModel = modelPath && modelPath.includes('Mountain01.glb');
  const isPebblesModel = modelPath && modelPath.includes('Pebbles01.glb');
  const isBridgeModel = modelPath && modelPath.includes('Bridge01.glb');
  const isFlower1Model = modelPath && modelPath.includes('Flower01.glb');
  const isFlowersModel = modelPath && modelPath.includes('Flowers01.glb');
  const isGrassModel = modelPath && modelPath.includes('Grass01.glb');
  
  // Não fazemos mais o switch para escalas personalizadas
  // Todos os modelos mantêm seu tamanho original

  // Não aplicamos mais escala ao modelo
  // model.scale.multiplyScalar(scaleFactor);
  
  // Não aplicamos mais offset vertical
  // if (verticalOffset !== 0) {
  //   model.position.y = verticalOffset;
  // }
  
  // Mantemos a rotação aleatória para vegetação que adiciona naturalidade
  if (['TREE', 'BUSH', 'GRASS', 'FLOWER'].includes(objectType)) {
    model.rotation.x += (Math.random() * 0.05) - 0.025; // Ligeira inclinação aleatória
    model.rotation.z += (Math.random() * 0.05) - 0.025; // Ligeira inclinação aleatória
  }
  
  // Contar triângulos para logs de diagnóstico
  let totalTriangles = 0;
  
  // Otimização para performance e melhorar qualidade visual
  model.traverse((child) => {
    if (child.isMesh) {
      // Contar triângulos para diagnóstico
      if (child.geometry) {
        let triangleCount = 0;
        if (child.geometry.index !== null) {
          triangleCount = child.geometry.index.count / 3;
        } else if (child.geometry.attributes.position) {
          triangleCount = child.geometry.attributes.position.count / 3;
        }
        totalTriangles += triangleCount;
      }
      
      // Aplicar materiais com qualidade visual melhorada
      if (!child.material.map) {
        // Define configurações de material base avançadas para todos os materiais
        const materialSettings = {
          roughness: 0.75,
          metalness: 0.1,
          flatShading: false,
          envMapIntensity: 0.5,
          transparent: false,
          vertexColors: false,
          side: THREE.DoubleSide
        };
        
        // Cores mais vibrantes e realistas baseadas nas imagens
        if (objectType === 'TREE') {
          if (isTreeModel) {
            // Detecção mais precisa do tronco vs galhos baseada na posição e geometria
            const isLikelyTrunk = child.position.y < 0.2 || 
                               (child.geometry && 
                                child.geometry.attributes.position &&
                                child.geometry.attributes.position.count < 100);
            
            if (isLikelyTrunk) {
              // Tronco com textura de madeira melhorada
              child.material = new THREE.MeshStandardMaterial({ 
                color: 0xA56834, // Marrom mais claro e mais quente
                roughness: 0.7, // Menos áspero para melhor reflexão de luz
                metalness: 0.05,
                flatShading: false,
                emissive: 0x3D2817, // Marrom escuro para emissivo
                emissiveIntensity: 0.15, // Aumentado para dar mais destaque
                ...materialSettings
              });
              
              // Adicionar variação de cor para o tronco parecer mais natural
              child.material.color.offsetHSL(0, 0, (Math.random() * 0.1) - 0.05);
            } else {
              // Galhos/Folhas com verde mais vibrante e realista
              child.material = new THREE.MeshStandardMaterial({ // Mudando para MeshStandard em vez de Physical
                color: 0x3FBC48, // Verde mais brilhante
                roughness: 0.6, // Menos áspero
                metalness: 0.0,
                flatShading: false,
                emissive: 0x113311, // Verde escuro
                emissiveIntensity: 0.2, // Aumentado para dar mais destaque
                ...materialSettings
              });
              
              // Adicionar variação sutil de cor para folhagem mais natural
              child.material.color.offsetHSL(0, (Math.random() * 0.1), (Math.random() * 0.1));
            }
          } else {
            // Verde mais escuro para arbustos com variação sutil
            child.material = new THREE.MeshStandardMaterial({ // Mudando para MeshStandard
              color: 0x2A8749, // Verde mais vivo
              roughness: 0.7,
              metalness: 0.0,
              emissive: 0x113311,
              emissiveIntensity: 0.15, // Aumentado
              ...materialSettings
            });
            
            // Adicionar variação sutil de cor
            child.material.color.offsetHSL(0, (Math.random() * 0.2) - 0.1, (Math.random() * 0.1) - 0.05);
          }
        } else if (objectType === 'BUSH') {
          // Verde mais claro e vibrante para arbustos com melhorias
          child.material = new THREE.MeshStandardMaterial({ 
            color: 0x3CAA56,
            roughness: 0.8,
            metalness: 0.0,
            clearcoat: 0.2,
            clearcoatRoughness: 0.9,
            ...materialSettings
          });
          
          // Adicionar variação sutil de cor
          child.material.color.offsetHSL(0, (Math.random() * 0.15) - 0.075, (Math.random() * 0.1) - 0.05);
        } else if (objectType === 'GRASS') {
          // Verde mais amarelado para grama com subsurface scattering
          child.material = new THREE.MeshStandardMaterial({ 
            color: 0x73D958, 
            roughness: 0.9,
            metalness: 0.0,
            clearcoat: 0.1,
            clearcoatRoughness: 0.9,
            emissive: 0x113300,
            emissiveIntensity: 0.03,
            ...materialSettings
          });
          
          // Adicionar variação sutil de verde
          child.material.color.offsetHSL((Math.random() * 0.05), (Math.random() * 0.2) - 0.1, 0);
        } else if (objectType === 'FLOWER') {
          // Cores mais vibrantes para flores com efeito de translucidez
          const flowerColor = isFlower1Model ? 0x5D8BF4 : 0x4A7CF9;
          child.material = new THREE.MeshStandardMaterial({ 
            color: flowerColor, 
            roughness: 0.6,
            metalness: 0.1,
            clearcoat: 0.3,
            clearcoatRoughness: 0.6,
            transmission: 0.1,  // Leve transparência
            thickness: 0.3,     // Espessura para translucidez
            emissive: 0x222266,
            emissiveIntensity: 0.08,
            ...materialSettings
          });
          
          // Variação de cor para flores mais naturais
          child.material.color.offsetHSL((Math.random() * 0.05) - 0.025, (Math.random() * 0.2), (Math.random() * 0.2) - 0.1);
        } else if (objectType === 'ROCK' || objectType === 'STONE') {
          // Cinza mais texturizado para rochas
          const rockColor = isRock2Model ? 0x777777 : 0x888888;
          child.material = new THREE.MeshStandardMaterial({ 
            color: rockColor, 
            roughness: 0.95,
            metalness: 0.15,
            flatShading: true,
            ...materialSettings
          });

          
          
          // Adicionar variação sutil de cor para rochas mais naturais
          child.material.color.offsetHSL(0, 0, (Math.random() * 0.15) - 0.075);
        } else if (objectType === 'MOUNTAIN') {
          // Cinza-azulado para montanhas conforme a imagem
          child.material = new THREE.MeshStandardMaterial({ 
            color: 0x9BADB7,
            roughness: 0.9,
            metalness: 0.2,
            flatShading: true,
            ...materialSettings
          });
          
          // Adicionar variação sutil de cor
          child.material.color.offsetHSL(0, (Math.random() * 0.05) - 0.025, (Math.random() * 0.1) - 0.05);
        } else if (objectType === 'BRIDGE') {
          // Marrom mais rico para pontes e estruturas de madeira
          child.material = new THREE.MeshStandardMaterial({ 
            color: 0x8B4513, 
            roughness: 0.8,
            metalness: 0.05,
            clearcoat: 0.1,
            clearcoatRoughness: 0.8,
            emissive: 0x221100,
            emissiveIntensity: 0.05,
            ...materialSettings
          });
          
          // Adicionar variação de cor para madeira mais natural
          child.material.color.offsetHSL(0, (Math.random() * 0.1), (Math.random() * 0.2) - 0.1);
        }
      }
      
      
      // Otimização para performance mas mantendo qualidade
      child.castShadow = false;
      child.receiveShadow = false;
      
      // Otimização de geometria para objetos complexos
      if (child.geometry && totalTriangles > 1000) {
        // Simplificar malhas complexas em objetos distantes
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
      
      // Garantir que o material tenha as configurações corretas
      if (child.material) {
        // Garantir DoubleSide para evitar faces invisíveis
        child.material.side = THREE.DoubleSide;
        
        // Desativar blending para melhor performance
        child.material.blending = THREE.NormalBlending;
        
        // Melhorar a definição das bordas
        if (child.material.roughness !== undefined) {
          child.material.roughness = Math.max(0.5, child.material.roughness);
        }
      }
    }
  });
  
  // Log de diagnóstico
  // console.log(`[MODEL] Tipo: ${objectType}, Escala original mantida, Triângulos: ~${totalTriangles.toFixed(0)}`);
  
  return { scaleFactor: 1.0, triangles: totalTriangles };
}

export class WorldObjectPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os objetos serão renderizados
   */
  constructor(scene) {
    this.scene = scene;
    this.worldObjects = new Map(); // Map para armazenar todos os objetos do mundo por ID
    
    // Sistema de otimização
    this.visibleObjects = new Set(); // Conjunto de objetos atualmente visíveis
    this.lastCullingTime = 0; // Última vez que fizemos culling
    this.instancedMeshes = new Map(); // Map para meshes instanciadas (para objetos repetidos)
    this.objectsByCategoryAndModel = new Map(); // Agrupar por modelo e tipo
    this.frustum = new THREE.Frustum(); // Para culling de frustum
    this.frustumMatrix = new THREE.Matrix4(); // Matriz para o frustum
    this.playerPosition = null; // Para culling baseado em distância
    this.detailLevels = { // Níveis de detalhe baseados em distância
      HIGH: 50,    // Objetos a menos de 50 unidades têm todos os detalhes
      MEDIUM: 100, // Objetos entre 50-100 têm qualidade média
      LOW: 200     // Objetos entre 100-200 têm qualidade baixa
      // Objetos além de 200 não são renderizados (occlusion culling)
    };
  }

  /**
   * Configura a iluminação da cena para melhorar a aparência visual
   * @param {THREE.Scene} scene - A cena onde aplicar a iluminação
   * @param {THREE.WebGLRenderer} renderer - O renderer para configurar sombras
   */
  setupLighting(renderer) {
    if (!this.scene || !renderer) {
      console.error("Cena ou renderer não disponíveis para configurar iluminação");
      return;
    }

    console.log("[LIGHT] Configurando iluminação e sombras avançadas");

    // Configurando o renderer para sombras com otimizações
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Sombras suaves e realistas
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Correção de cor
    renderer.toneMapping = THREE.ACESFilmicToneMapping; // Mapeamento de tom realista
    renderer.toneMappingExposure = 1.22; // Exposição mais alta para dia claro
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- LUZ AMBIENTE (preenche sombras, mas não domina a cena) ---
    const ambientColor = 0xfaf3e3; // Amarelo bem claro
    const ambientIntensity = 0.35; // Sutil, só para preencher
    const ambientLight = new THREE.AmbientLight(ambientColor, ambientIntensity);
    this.scene.add(ambientLight);

    // --- LUZ DIRECIONAL (Sol, sombras suaves e claras) ---
    const sunColor = 0xFFF6D6; // Amarelo quente, quase branco
    const sunIntensity = 1.0; // Forte, mas não estoura
    const dirLight = new THREE.DirectionalLight(sunColor, sunIntensity);
    dirLight.position.set(60, 200, 0); // Sol alto
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 200;
    dirLight.shadow.camera.left = -100;
    dirLight.shadow.camera.right = 100;
    dirLight.shadow.camera.top = 100;
    dirLight.shadow.camera.bottom = -100;
    dirLight.shadow.bias = -0.0002;
    dirLight.shadow.normalBias = 0.01;
    dirLight.shadow.radius = 12; // Sombras bem suaves
    dirLight.shadow.autoUpdate = false;
    this.lastShadowUpdateTime = 0;
    this.scene.add(dirLight);

    // --- LUZ HEMISFÉRICA (céu azul claro, solo quase branco) ---
    const skyColor = 0xB3D8FF; // Azul claro do céu
    const groundColor = 0xFFFDF6; // Solo quase branco
    const hemiIntensity = 1.25; // Bem forte, estilo Albion
    const hemiLight = new THREE.HemisphereLight(skyColor, groundColor, hemiIntensity);
    this.scene.add(hemiLight);

    // --- NÉVOA MÁGICA (profundidade, não escurece) ---
    const fogColor = new THREE.Color(0xDDE6FF); // Azul claro, mágico
    const fogDensity = 0.0010; // Suave, só para profundidade
    this.scene.fog = new THREE.FogExp2(fogColor, fogDensity);

    // --- FUNDO DO CÉU ---
    this.scene.background = new THREE.Color(0xB3D8FF); // Azul claro do céu

    // --- Salvar referências ---
    this.sunLight = dirLight;
    this.ambientLight = ambientLight;
    this.hemisphereLight = hemiLight;
    
    console.log("[LIGHT] Iluminação configurada com sucesso");
  }

  /**
   * Atualiza a posição da luz direcional para seguir o jogador
   * @param {THREE.Vector3} playerPosition - A posição atual do jogador
   */
  updateLightPosition(playerPosition) {
    if (!this.sunLight || !playerPosition) return;
    
    // Armazenar posição do jogador para otimizações de culling
    this.playerPosition = playerPosition.clone();
    
    // Atualizamos as sombras apenas periodicamente para economia de performance
    const now = performance.now();
    if (now - this.lastShadowUpdateTime > 500) { // Atualiza a cada 0.5 segundos
      this.lastShadowUpdateTime = now;
      
      // Mantém a luz do sol e a shadow camera sempre centralizadas no player (Albion style)
      this.sunLight.position.set(
        playerPosition.x + 60, // deslocamento para simular sol vindo de um lado
        200,
        playerPosition.z
      );
      this.sunLight.target.position.set(
        playerPosition.x,
        0,
        playerPosition.z
      );
      this.scene.add(this.sunLight.target);
      // Ampliar o volume da shadow camera para cobrir áreas maiores do mapa
      this.sunLight.shadow.camera.left = -150;
      this.sunLight.shadow.camera.right = 150;
      this.sunLight.shadow.camera.top = 150;
      this.sunLight.shadow.camera.bottom = -150;
      this.sunLight.shadow.camera.near = 10;
      this.sunLight.shadow.camera.far = 300;
      // Shadow map de alta resolução para máxima definição
      this.sunLight.shadow.mapSize.width = 4096;
      this.sunLight.shadow.mapSize.height = 4096;
      // Atualiza a shadow camera e marca para atualização
      this.sunLight.shadow.camera.updateProjectionMatrix();
      this.sunLight.shadow.needsUpdate = true;
      // Atualiza o culling de objetos
      this.updateObjectCulling();
    }
  }

  /**
   * Realiza culling de objetos distantes e fora do campo de visão
   * Implementa otimização para mostrar apenas objetos visíveis e com nível apropriado de detalhe
   */
  updateObjectCulling() {
    if (!this.playerPosition) return;
    
    // Limite de frequência: no máximo a cada 200ms
    const now = performance.now();
    if (now - this.lastCullingTime < 200) return;
    this.lastCullingTime = now;
    
    // Obtém a matriz do frustum da câmera
    const camera = this.scene.getObjectByProperty('type', 'OrthographicCamera') || 
                   this.scene.getObjectByProperty('type', 'PerspectiveCamera');
    if (!camera) return;
    
    // Atualiza o frustum para culling
    this.frustumMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    this.frustum.setFromProjectionMatrix(this.frustumMatrix);
    
    // Processa cada objeto
    for (const [id, object] of this.worldObjects.entries()) {
      // Pula objetos sem posição válida
      if (!object.position) continue;
      
      // Calcula distância ao jogador
      const distance = this.playerPosition.distanceTo(object.position);
      
      // Define nível de detalhe e visibilidade baseado na distância
      if (distance > this.detailLevels.LOW) {
        // Objeto muito distante, oculta completamente
        object.visible = false;
        continue;
      }
      
      // Verifica se está no frustum da câmera (campo de visão)
      const objectVisible = this.frustum.intersectsObject(object);
      object.visible = objectVisible;
      
      if (objectVisible) {
        // Atualiza nível de detalhe baseado na distância
        object.traverse(child => {
          if (!child.isMesh) return;
          
          // Determina qualidade de sombra baseada na distância
          if (distance < this.detailLevels.HIGH) {
            // Alta qualidade para objetos próximos: todos projetam e recebem sombra
            child.castShadow = true;
            child.receiveShadow = true;
          } else if (distance < this.detailLevels.MEDIUM) {
            // Qualidade média: todos recebem sombra, mas não projetam
            child.castShadow = false;
            child.receiveShadow = true;
          } else {
            // Baixa qualidade: só recebem sombra se ainda estiverem visíveis
            child.castShadow = false;
            child.receiveShadow = distance < this.detailLevels.LOW;
          }
          
          // Ajusta qualidade do material baseado na distância
          if (child.material) {
            // Para objetos distantes, simplifica materiais
            if (distance > this.detailLevels.MEDIUM && child.material.type === 'MeshPhysicalMaterial') {
              // Substitui materiais complexos por mais simples em objetos distantes
              const color = child.material.color.clone();
              const simpleMaterial = new THREE.MeshLambertMaterial({
                color: color,
                side: THREE.DoubleSide
              });
              child._originalMaterial = child.material;
              child.material = simpleMaterial;
            } else if (distance <= this.detailLevels.MEDIUM && child._originalMaterial) {
              // Restaura material original quando o objeto fica próximo novamente
              child.material = child._originalMaterial;
              delete child._originalMaterial;
            }
          }
        });
      }
    }
  }

  /**
   * Cria uma mesh robusta para o tipo de objeto do mundo (modelo 3D ou primitiva)
   */
  async createWorldObject(id, data) {
    id = String(id);
    if (this.worldObjects.has(id)) this.removeWorldObject(id);

    const type = typeof data.type === 'string' ? data.type : 'TREE';
    const biome = data.biome || 'SPAWN';
    let modelPath = MODEL_MAP[biome]?.[type];
    if (Array.isArray(modelPath)) {
      modelPath = modelPath[Math.floor(Math.random() * modelPath.length)];
    }
    let obj = null;

    if (modelPath) {
      try {
        // console.log(`[DEBUG] Tentando carregar modelo para ${type} em ${biome}:`, modelPath);
        obj = await loadModel(modelPath);
        adjustModel(obj, type, modelPath); // Ajuste visual dos materiais
      } catch (e) {
        // console.warn(`[WorldObjectPresenter] Falha ao carregar modelo ${modelPath}, usando primitiva para ${type}`);
        obj = createPrimitiveObject(type);
      }
    } else {
      console.info(`[WorldObjectPresenter] Sem modelo 3D para ${type} (${biome}), usando primitiva.`);
      obj = createPrimitiveObject(type);
    }

    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    obj.position.set(
      Number(position.x) || 0,
      Number(position.y) || 0,
      Number(position.z) || 0
    );
    // Rotação
    if (data.rotation !== undefined) {
      obj.rotation.y = Number(data.rotation) || 0;
    }
    // Armazena metadados junto com a mesh
    obj.userData = {
      id: id,
      type: 'worldObject',
      objectType: type,
      properties: data.properties || {},
      created: Date.now()
    };
    this.worldObjects.set(id, obj);
    this.scene.add(obj);
    return obj;
  }

  /**
   * Atualiza ou cria um objeto do mundo robustamente
   */
  updateWorldObject(data) {
    // console.log(data)
    if (!data || !data.id) {
      console.error('Dados de objeto do mundo inválidos:', data);
      return;
    }
    const objectId = String(data.id);
    let obj = this.worldObjects.get(objectId);
    // Se não existir, cria
    if (!obj) {
      this.createWorldObject(objectId, data);
      obj = this.worldObjects.get(objectId);
      if (!obj) return;
    }
    // Se o tipo mudou, recria (comparação robusta)
    const localType = typeof obj.userData.objectType === 'string' ? obj.userData.objectType : '';
    const remoteType = typeof data.type === 'string' ? data.type : '';
    if (remoteType && localType !== remoteType) {
      console.warn(`[DEBUG] Recriando objeto ${objectId}: type local='${localType}', type recebido='${remoteType}'`);
      this.createWorldObject(objectId, data);
      obj = this.worldObjects.get(objectId);
      if (!obj) return;
    }
    // Atualiza posição se fornecida
    if (data.position) {
      obj.position.set(
        Number(data.position.x) || obj.position.x,
        Number(data.position.y) || obj.position.y,
        Number(data.position.z) || obj.position.z
      );
    }
    // Atualiza rotação se fornecida
    if (data.rotation !== undefined) {
      obj.rotation.y = Number(data.rotation) || obj.rotation.y;
    }
    // Atualiza propriedades se fornecidas
    if (data.properties) {
      obj.userData.properties = data.properties;
    }
    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      obj.visible = data.active;
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

  /**
   * Otimiza a cena atual usando instancing para objetos repetidos
   * Deve ser chamado depois que muitos objetos foram adicionados
   */
  optimizeSceneWithInstancing() {
    // Só implementa instanciamento para cenas com muitos objetos
    if (this.worldObjects.size < 50) return;
    
    // Procura tipos de objetos que aparecem mais de 10 vezes
    for (const [category, objectIds] of this.objectsByCategoryAndModel.entries()) {
      if (objectIds.length < 10) continue;
      
      console.log(`[OPTIMIZAÇÃO] Considerando instanciamento para ${category} (${objectIds.length} objetos)`);
      
      // Implementar no futuro: instanciamento para objetos repetidos
      // Isso pode economizar muita memória e GPU para cenas densas
    }
  }
  
  /**
   * Atualiza o sistema de renderização para manter boa performance
   * @param {number} deltaTime - Tempo desde o último frame em segundos
   * @param {THREE.Vector3} cameraPosition - Posição atual da câmera
   */
  updateRenderer(deltaTime, cameraPosition) {
    // Atualiza o culling periodicamente
    if (cameraPosition && (!this.playerPosition || 
        this.playerPosition.distanceTo(cameraPosition) > 2)) {
      this.playerPosition = cameraPosition.clone();
      this.updateObjectCulling();
    }
  }
}

// Função auxiliar para criar objetos primitivos quando não há modelo
function createPrimitiveObject(objectType) {
  let geometry, material;
  let worldObject;
  
  switch (objectType) {
    case 'TREE':
      const treeGroup = new THREE.Group();
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 8);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 0.75;
      trunk.castShadow = true;
      trunk.receiveShadow = true;
      treeGroup.add(trunk);
      const leavesGeometry = new THREE.ConeGeometry(1, 2, 8);
      const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.y = 2.5;
      leaves.castShadow = true;
      leaves.receiveShadow = true;
      treeGroup.add(leaves);
      worldObject = treeGroup;
      break;
      
    case 'ROCK':
      geometry = new THREE.DodecahedronGeometry(0.8, 0);
      material = new THREE.MeshStandardMaterial({ color: 0x808080 });
      worldObject = new THREE.Mesh(geometry, material);
      worldObject.scale.y = 0.7;
      worldObject.castShadow = true;
      worldObject.receiveShadow = true;
      break;
      
    case 'BUSH':
      geometry = new THREE.SphereGeometry(0.5, 8, 6);
      material = new THREE.MeshStandardMaterial({ color: 0x32CD32 });
      worldObject = new THREE.Mesh(geometry, material);
      worldObject.castShadow = true;
      worldObject.receiveShadow = true;
      break;
      
    case 'HOUSE':
      const houseGroup = new THREE.Group();
      const baseGeometry = new THREE.BoxGeometry(3, 2, 3);
      const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xD2B48C });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = 1;
      base.castShadow = true;
      base.receiveShadow = true;
      houseGroup.add(base);
      const roofGeometry = new THREE.ConeGeometry(3, 1.5, 4);
      const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8B0000 });
      const roof = new THREE.Mesh(roofGeometry, roofMaterial);
      roof.position.y = 2.75;
      roof.rotation.y = Math.PI / 4;
      roof.castShadow = true;
      roof.receiveShadow = true;
      houseGroup.add(roof);
      worldObject = houseGroup;
      break;
      
    case 'FENCE':
      geometry = new THREE.BoxGeometry(1.5, 0.8, 0.1);
      material = new THREE.MeshStandardMaterial({ color: 0xA0522D });
      worldObject = new THREE.Mesh(geometry, material);
      worldObject.castShadow = true;
      worldObject.receiveShadow = true;
      break;
      
    default:
      geometry = new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });
      worldObject = new THREE.Mesh(geometry, material);
      worldObject.castShadow = true;
      worldObject.receiveShadow = true;
      break;
  }
  
  return worldObject;
} 