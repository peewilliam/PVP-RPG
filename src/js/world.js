import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export class World {
    constructor(game) {
        this.game = game;
        this.floor = null;
        this.skybox = null;
        this.ambientSound = null;
        this.worldSize = 100; // Tamanho do mundo
        this.floorTexture = null;
        this.floorNormalMap = null;
    }
    
    load() {
        this.createFloor();
        this.createLights();
        this.createSkybox();
        this.createObstacles();
    }
    
    createFloor() {
        // Criar textura do chão
        const textureLoader = new THREE.TextureLoader();

        // Textura para o chão (pode ser substituída por texturas de melhor qualidade)
        this.floorTexture = textureLoader.load('src/textures/floors/FloorsCheckerboard_S_Diffuse.jpg');
        this.floorNormalMap = textureLoader.load('src/textures/floors/FloorsCheckerboard_S_Normal.jpg');
        
        // Configurar repetição da textura
        const repeat = 20;
        this.floorTexture.wrapS = this.floorTexture.wrapT = THREE.RepeatWrapping;
        this.floorTexture.repeat.set(repeat, repeat);
        this.floorTexture.anisotropy = 16;
        
        this.floorNormalMap.wrapS = this.floorNormalMap.wrapT = THREE.RepeatWrapping;
        this.floorNormalMap.repeat.set(repeat, repeat);
        this.floorNormalMap.anisotropy = 16;
        
        // Material do chão
        const floorMaterial = new THREE.MeshStandardMaterial({
            map: this.floorTexture,
            normalMap: this.floorNormalMap,
            normalScale: new THREE.Vector2(0.5, 0.5),
            roughness: 0.8,
            metalness: 0.2
        });
        
        // Geometria do chão
        const floorGeometry = new THREE.PlaneGeometry(this.worldSize, this.worldSize, 32, 32);
        floorGeometry.rotateX(-Math.PI / 2); // Rotacionar para ficar na horizontal
        
        // Criar chão
        this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
        this.floor.receiveShadow = true;
        this.floor.position.y = 0;
        
        this.game.scene.add(this.floor);
    }
    
    createLights() {
        // Luz pontual adicional para efeito de iluminação atmosférica
        const pointLight = new THREE.PointLight(0xffee88, 1, 50, 2);
        pointLight.position.set(10, 5, 10);
        pointLight.castShadow = true;
        
        // Configuração das sombras
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;
        pointLight.shadow.camera.near = 0.5;
        pointLight.shadow.camera.far = 50;
        
        this.game.scene.add(pointLight);
    }
    
    createSkybox() {
        // Método 1: Cores simples para o céu
        this.game.scene.background = new THREE.Color(0x87ceeb);
        
        // Método 2: Usar um ambiente HDR (para produção final)
        // const hdrLoader = new RGBELoader();
        // hdrLoader.load('caminho/para/seu/arquivo.hdr', (texture) => {
        //     texture.mapping = THREE.EquirectangularReflectionMapping;
        //     this.game.scene.environment = texture;
        //     this.game.scene.background = texture;
        // });
    }
    
    createObstacles() {
        // Adicionar árvores, rochas e outros obstáculos
        this.addTrees(15);
        this.addRocks(10);
    }
    
    addTrees(count) {
        // Geometria simples para árvores
        const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.7, 3, 8);
        const leavesGeometry = new THREE.ConeGeometry(2, 4, 8);
        
        // Materiais para as árvores
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
        
        for (let i = 0; i < count; i++) {
            // Posição aleatória dentro do mundo
            const x = (Math.random() - 0.5) * (this.worldSize - 10);
            const z = (Math.random() - 0.5) * (this.worldSize - 10);
            
            // Criar tronco
            const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
            trunk.position.set(x, 1.5, z);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            
            // Criar folhas
            const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
            leaves.position.set(x, 5, z);
            leaves.castShadow = true;
            
            this.game.scene.add(trunk);
            this.game.scene.add(leaves);
        }
    }
    
    addRocks(count) {
        // Geometria para rochas
        const rockGeometries = [
            new THREE.DodecahedronGeometry(1, 0),
            new THREE.DodecahedronGeometry(1.5, 0),
            new THREE.DodecahedronGeometry(2, 0)
        ];
        
        // Material para rochas
        const rockMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x888888,
            roughness: 0.9,
            metalness: 0.1
        });
        
        for (let i = 0; i < count; i++) {
            // Posição aleatória
            const x = (Math.random() - 0.5) * (this.worldSize - 10);
            const z = (Math.random() - 0.5) * (this.worldSize - 10);
            
            // Escolher geometria aleatória
            const geometry = rockGeometries[Math.floor(Math.random() * rockGeometries.length)];
            
            // Criar rocha
            const rock = new THREE.Mesh(geometry, rockMaterial);
            rock.position.set(x, 0.5, z);
            rock.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            rock.scale.set(
                0.5 + Math.random() * 0.5,
                0.5 + Math.random() * 0.5,
                0.5 + Math.random() * 0.5
            );
            rock.castShadow = true;
            rock.receiveShadow = true;
            
            this.game.scene.add(rock);
        }
    }
    
    update(delta) {
        // Atualizações do mundo que ocorrem a cada frame
        // Por exemplo, efeitos de ambiente, ciclo dia/noite, etc.
    }
} 