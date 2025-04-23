// Classe responsável por importar o mundo completo via GLB
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ImportedWorld {
  constructor() {
    this.root = new THREE.Group();
    this.loader = new GLTFLoader();
    // Caminho do arquivo GLB do mundo
    this.glbPath = '/models-3d/world.glb'; // Ajuste conforme necessário
    this.loaded = false;
    this.planeMesh = null; // Mesh do chão importado
  }

  async load() {
    return new Promise((resolve, reject) => {
      this.loader.load(
        this.glbPath,
        (gltf) => {
          this.root.add(gltf.scene);
          // Identifica o mesh do chão pelo nome e ajusta espaço de cor dos materiais
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              // Força o material para MeshStandardMaterial se não for
              if (!(child.material instanceof THREE.MeshStandardMaterial)) {
                const oldMat = child.material;
                child.material = new THREE.MeshStandardMaterial({
                  color: oldMat.color ? oldMat.color.clone() : new THREE.Color(0xffffff),
                  roughness: 0.7,
                  metalness: 0.0
                });
              } else {
                child.material.roughness = 0.7;
                child.material.metalness = 0.0;
              }
              // Ativa sombras para todos os meshes importados
              child.castShadow = true;
              child.receiveShadow = true;
              // Se for o chão, salva referência
              if (child.name === 'Chao' || child.name === 'Ground') {
                this.planeMesh = child;
              } else if (
                child.name.startsWith('Tree') ||
                child.name.startsWith('Arvore') ||
                child.name.startsWith('Folha') ||
                child.name.startsWith('Leaf')
              ) {
                // Para a árvore/folhas, tenta converter a cor base
                if (child.material && child.material.color) {
                  child.material.color.convertSRGBToLinear();
                }
              }
              // Se usar textura, ajuste o colorSpace
              if (child.material && child.material.map) {
                child.material.map.colorSpace = THREE.SRGBColorSpace;
              }
            }
          });
          this.loaded = true;
          resolve(this.root);
        },
        undefined,
        (error) => {
          console.error('Erro ao carregar GLB do mundo:', error);
          reject(error);
        }
      );
    });
  }

  getRootObject() {
    return this.root;
  }

  getPlaneMesh() {
    return this.planeMesh;
  }
} 