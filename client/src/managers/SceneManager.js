// SceneManager.js
// Responsável por gerenciar a cena Three.js, incluindo configuração, iluminação e texturas
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader.js';
import GUI from 'lil-gui';

export class SceneManager {
  constructor(worldSize, worldBoundaries) {
    // Propriedades principais
    this.scene = null;
    this.renderer = null;
    this.composer = null;
    this.container = null;
    this.plane = null; // Referência para o plano do chão
    
    // Referências visuais
    this.bloomPass = null;
    this.fxaaPass = null;
    this.colorCorrectionPass = null;
    
    // Luzes
    this.ambientLight = null;
    this.directionalLight = null;
    this.hemisphereLight = null;
    
    // Configurações de iluminação
    this.sunIntensity = 2.2;
    this.ambientIntensity = 0.8;
    this.hemiIntensity = 1.3;
    this.toneMappingExposure = 1.32;
    
    // Armazena dimensões do mundo
    this.worldSize = worldSize;
    this.worldBoundaries = worldBoundaries;
    
    // Configurações visuais
    this.visualEffectsActive = true;
    
    // Fallback lights (para modo sem efeitos visuais)
    this.fallbackAmbientLight = null;
    this.fallbackDirectionalLight = null;
    
    // Painel de debug visual
    this.visualGui = null;
    this.guiVisible = false;
  }
  
  // Inicializa a cena
  initialize(container, width, height) {
    this.container = container;
    
    // Cria a cena
    this.scene = new THREE.Scene();
    
    // --- SKYBOX GRADIENTE ---
    this.createSkybox();
    
    // Cria um plano para o "chão" com material tileado
    this.createGround();
    
    // Adiciona marcadores nos limites do mundo
    this.createWorldBoundaries();
    
    // Cria renderizador com configurações melhoradas
    this.setupRenderer(width, height);
    
    // Configura o sistema de iluminação
    this.setupLighting();
    
    // Configuração de pós-processamento
    this.setupPostProcessing(width, height);
    
    // Inicializa com base nas configurações salvas
    this.loadUserSettings();
    
    return this.scene;
  }
  
  // Cria o skybox da cena
  createSkybox() {
    // Cria uma esfera gigante invertida para simular o céu
    const skyGeo = new THREE.SphereGeometry(500, 32, 32);
    
    // Shader de gradiente vertical azul escuro para azul médio
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0x223355) }, // Azul escuro
        bottomColor: { value: new THREE.Color(0x3a6ea8) }, // Azul médio
        offset: { value: 400 },
        exponent: { value: 0.8 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `
    });
    
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);
  }
  
  // Cria o plano do chão
  createGround() {
    // Shader procedural de areia
    const sandShader = {
      uniforms: {
        uColor1: { value: new THREE.Color(0xE2C290) }, // areia clara
        uColor2: { value: new THREE.Color(0xC2A060) }, // areia escura
        uDuneScale: { value: 18.0 },
        uDuneStrength: { value: 0.12 },
        uWindStrength: { value: 0.08 },
        uTime: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform float uDuneScale;
        uniform float uDuneStrength;
        uniform float uWindStrength;
        uniform float uTime;
        varying vec2 vUv;
        float rand(vec2 co) {
          return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
        }
        void main() {
          float dunes = sin(vUv.x * uDuneScale + uTime * 0.05) * sin(vUv.y * uDuneScale * 0.7 + uTime * 0.03);
          dunes *= uDuneStrength;
          float wind = sin((vUv.x + vUv.y) * 40.0 + uTime * 0.2) * uWindStrength;
          float noise = rand(vUv * 100.0);
          float sand = dunes + wind + noise * 0.04;
          vec3 color = mix(uColor1, uColor2, vUv.y + sand);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    };
    const planeGeometry = new THREE.PlaneGeometry(this.worldSize.WIDTH, this.worldSize.HEIGHT, 256, 256);
    const sandMaterial = new THREE.ShaderMaterial({
      uniforms: sandShader.uniforms,
      vertexShader: sandShader.vertexShader,
      fragmentShader: sandShader.fragmentShader,
      side: THREE.DoubleSide
    });
    this.plane = new THREE.Mesh(planeGeometry, sandMaterial);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
    // Atualização do tempo para animação do shader
    this._sandUpdate = (dt) => {
      sandMaterial.uniforms.uTime.value += dt;
    };
    return this.plane;
  }
  
  // Cria marcadores para os limites do mundo
  createWorldBoundaries() {
    if (!this.worldBoundaries.ENABLED) return;
    
    // Calcula as dimensões
    const halfWidth = this.worldSize.WIDTH / 2;
    const halfHeight = this.worldSize.HEIGHT / 2;
    const borderWidth = this.worldBoundaries.BORDER_WIDTH;
    
    // Cria material para os marcadores de limite
    const borderMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff4040,  // Vermelho claro
      transparent: true,
      opacity: 0.6
    });
    
    // Cria os marcadores nos quatro lados
    // Norte (Z-)
    const northBorder = new THREE.Mesh(
      new THREE.BoxGeometry(this.worldSize.WIDTH, 2, borderWidth),
      borderMaterial
    );
    northBorder.position.set(0, 1, -halfHeight);
    this.scene.add(northBorder);
    
    // Sul (Z+)
    const southBorder = new THREE.Mesh(
      new THREE.BoxGeometry(this.worldSize.WIDTH, 2, borderWidth),
      borderMaterial
    );
    southBorder.position.set(0, 1, halfHeight);
    this.scene.add(southBorder);
    
    // Oeste (X-)
    const westBorder = new THREE.Mesh(
      new THREE.BoxGeometry(borderWidth, 2, this.worldSize.HEIGHT),
      borderMaterial
    );
    westBorder.position.set(-halfWidth, 1, 0);
    this.scene.add(westBorder);
    
    // Leste (X+)
    const eastBorder = new THREE.Mesh(
      new THREE.BoxGeometry(borderWidth, 2, this.worldSize.HEIGHT),
      borderMaterial
    );
    eastBorder.position.set(halfWidth, 1, 0);
    this.scene.add(eastBorder);
    
    // Adiciona postes de marcação nos cantos
    const postMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const postGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 8);
    
    // Nordeste (X+, Z-)
    const nePost = new THREE.Mesh(postGeometry, postMaterial);
    nePost.position.set(halfWidth, 2.5, -halfHeight);
    this.scene.add(nePost);
    
    // Noroeste (X-, Z-)
    const nwPost = new THREE.Mesh(postGeometry, postMaterial);
    nwPost.position.set(-halfWidth, 2.5, -halfHeight);
    this.scene.add(nwPost);
    
    // Sudeste (X+, Z+)
    const sePost = new THREE.Mesh(postGeometry, postMaterial);
    sePost.position.set(halfWidth, 2.5, halfHeight);
    this.scene.add(sePost);
    
    // Sudoeste (X-, Z+)
    const swPost = new THREE.Mesh(postGeometry, postMaterial);
    swPost.position.set(-halfWidth, 2.5, halfHeight);
    this.scene.add(swPost);
  }
  
  // Configura o renderizador
  setupRenderer(width, height) {
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      precision: 'highp',
      powerPreference: 'high-performance',
      alpha: false // garantir fundo opaco
    });
    
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x223355, 1); // Fundo azul escuro opaco
    this.container.appendChild(this.renderer.domElement);
    
    // Configurações profissionais
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = this.toneMappingExposure;
    
    // Expõe globalmente para painel de debug
    window._threeRenderer = this.renderer;
    
    return this.renderer;
  }
  
  // Configura o sistema de iluminação
  setupLighting() {
    // Luz ambiente
    this.ambientLight = new THREE.AmbientLight(0xffffff, this.ambientIntensity);
    this.scene.add(this.ambientLight);
    
    // Luz direcional (sol)
    this.directionalLight = new THREE.DirectionalLight(0xffffff, this.sunIntensity);
    this.directionalLight.position.set(20, 40, 20);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    
    // Luz hemisférica para iluminação natural
    this.hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x444444, this.hemiIntensity);
    this.scene.add(this.hemisphereLight);
    
    return { 
      ambientLight: this.ambientLight, 
      directionalLight: this.directionalLight,
      hemisphereLight: this.hemisphereLight
    };
  }
  
  // Atualiza a posição da luz direcional para seguir o jogador
  updateLightPosition(playerPosition) {
    if (this.directionalLight) {
      this.directionalLight.position.set(
        playerPosition.x + 20,
        40,
        playerPosition.z + 20
      );
    }
  }
  
  // Configuração de pós-processamento
  setupPostProcessing(width, height) {
    this.composer = new EffectComposer(this.renderer);
    window._threeComposer = this.composer;
    
    // Passa de renderização básica
    this.composer.addPass(new RenderPass(this.scene, null)); // Camera será definida depois
    
    // Bloom sutil
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.6, // intensidade
      0.4, // raio
      0.85 // threshold
    );
    this.composer.addPass(this.bloomPass);
    window._bloomPass = this.bloomPass;
    
    // FXAA para suavizar serrilhados
    this.fxaaPass = new ShaderPass(FXAAShader);
    this.fxaaPass.material.uniforms['resolution'].value.set(1 / width, 1 / height);
    this.composer.addPass(this.fxaaPass);
    window._fxaaPass = this.fxaaPass;
    
    // Correção de cor
    this.colorCorrectionPass = new ShaderPass(ColorCorrectionShader);
    this.colorCorrectionPass.uniforms['powRGB'].value.set(1.05, 1.05, 1.05); // leve aumento de saturação
    this.colorCorrectionPass.uniforms['mulRGB'].value.set(1.05, 1.05, 1.05); // leve aumento de brilho/contraste
    this.composer.addPass(this.colorCorrectionPass);
    window._colorCorrectionPass = this.colorCorrectionPass;
    
    // Heat haze opcional
    this.heatHazePass = new ShaderPass(HeatHazeShader);
    this.heatHazePass.enabled = false;
    this.composer.addPass(this.heatHazePass);
    window._heatHazePass = this.heatHazePass;
    
    return this.composer;
  }
  
  // Atualiza a câmera usada para renderização
  setCamera(camera) {
    if (this.composer && this.composer.passes.length > 0) {
      // Atualiza a câmera no RenderPass
      this.composer.passes[0].camera = camera;
    }
  }
  
  // Atualiza renderizador e composer quando a janela é redimensionada
  onWindowResize(width, height) {
    this.renderer.setSize(width, height);
    
    if (this.composer) {
      this.composer.setSize(width, height);
      
      // Atualiza FXAA
      if (this.fxaaPass) {
        this.fxaaPass.material.uniforms['resolution'].value.set(1 / width, 1 / height);
      }
    }
  }
  
  // Renderiza a cena usando composer ou renderer direto
  render(camera) {
    if (this.visualEffectsActive && this.composer) {
      // Define a câmera no RenderPass se ainda não estiver definida
      if (this.composer.passes[0].camera !== camera) {
        this.composer.passes[0].camera = camera;
      }
      this.composer.render();
    } else if (this.renderer && this.scene) {
      this.renderer.render(this.scene, camera);
    }
  }
  
  // Alterna entre modo com e sem efeitos visuais
  toggleVisualEffects() {
    this.visualEffectsActive = !this.visualEffectsActive;
    this.updateVisualEffectsMode();
    
    // Salva configuração
    const userSettings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
    userSettings.visualEffects = this.visualEffectsActive;
    localStorage.setItem('pvpRpgUserSettings', JSON.stringify(userSettings));
    
    // Dispara evento para notificar outros componentes
    window.dispatchEvent(new CustomEvent('pvpRpgUserSettingsChanged', { detail: userSettings }));
    
    return this.visualEffectsActive;
  }
  
  // Carrega as configurações de visual salvas
  loadUserSettings() {
    const userSettings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
    if (typeof userSettings.visualEffects === 'boolean') {
      this.visualEffectsActive = userSettings.visualEffects;
      this.updateVisualEffectsMode();
    }
  }
  
  // Atualiza o modo de efeitos visuais
  updateVisualEffectsMode() {
    console.log("[DEBUG] Atualizando modo de efeitos visuais. Ativo:", this.visualEffectsActive);
    
    if (this.visualEffectsActive) {
      // COMPOSER: ativa luzes principais, remove fallback
      console.log("[DEBUG] Ativando modo COMPOSER");
      
      // Remove fallback lights primeiro
      this.removeFallbackLights();
      
      // Adiciona luzes principais à cena (se não estiverem já lá)
      if (this.directionalLight && !this.scene.children.includes(this.directionalLight)) {
        this.scene.add(this.directionalLight);
        this.directionalLight.intensity = this.sunIntensity;
      }
      
      if (this.ambientLight && !this.scene.children.includes(this.ambientLight)) {
        this.scene.add(this.ambientLight);
        this.ambientLight.intensity = this.ambientIntensity;
      }
      
      if (this.hemisphereLight && !this.scene.children.includes(this.hemisphereLight)) {
        this.scene.add(this.hemisphereLight);
        this.hemisphereLight.intensity = this.hemiIntensity;
      }
      
      // Configura o renderer
      if (this.renderer) {
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = this.toneMappingExposure;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      }
    } else {
      // RENDERER: remove luzes principais, ativa fallback
      console.log("[DEBUG] Ativando modo RENDERER");
      
      // Remove TODAS as luzes do sistema avançado da cena
      if (this.scene) {
        // Remove explicitamente as luzes principais
        if (this.directionalLight && this.scene.children.includes(this.directionalLight)) 
          this.scene.remove(this.directionalLight);
        if (this.ambientLight && this.scene.children.includes(this.ambientLight)) 
          this.scene.remove(this.ambientLight);
        if (this.hemisphereLight && this.scene.children.includes(this.hemisphereLight)) 
          this.scene.remove(this.hemisphereLight);
      }
      
      // Garante que as fallback lights estão adicionadas
      this.ensureFallbackLights();
      
      // Ajusta o renderer
      if (this.renderer) {
        this.renderer.toneMapping = THREE.NoToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      }
    }
  }
  
  // Configura o painel de controle visual
  setupVisualPanel() {
    if (this.visualGui) return; // já criado
    
    this.visualGui = new GUI({ width: 340 });
    this.visualGui.domElement.style.zIndex = 10000;
    this.visualGui.domElement.style.position = 'fixed';
    this.visualGui.domElement.style.top = '60px';
    this.visualGui.domElement.style.right = '20px';
    this.visualGui.domElement.style.display = 'none';
    
    // Parâmetros para controle
    const params = {
      'Exposição': this.toneMappingExposure,
      'Luz Direcional': this.sunIntensity,
      'Luz Ambiente': this.ambientIntensity,
      'Luz Hemisférica': this.hemiIntensity,
      'Bloom Intensity': this.bloomPass.strength,
      'Bloom Threshold': this.bloomPass.threshold,
      'Bloom Radius': this.bloomPass.radius,
      'Reset Preset Albion': () => {
        params['Exposição'] = 1.32;
        params['Luz Direcional'] = 2.2;
        params['Luz Ambiente'] = 0.8;
        params['Luz Hemisférica'] = 1.3;
        params['Bloom Intensity'] = 0.6;
        params['Bloom Threshold'] = 0.85;
        params['Bloom Radius'] = 0.4;
        this.applyVisualParams(params);
        this.visualGui.controllersRecursive().forEach(c => c.updateDisplay());
      }
    };
    
    this.visualGui.add(params, 'Exposição', 0.8, 2.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Luz Direcional', 0.5, 4.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Luz Ambiente', 0.0, 2.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Luz Hemisférica', 0.0, 2.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Bloom Intensity', 0.0, 2.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Bloom Threshold', 0.0, 1.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Bloom Radius', 0.0, 2.0, 0.01).onChange(() => this.applyVisualParams(params));
    this.visualGui.add(params, 'Reset Preset Albion');
    
    // Adiciona novo painel para o heat haze
    const heatHazePanel = this.visualGui.addFolder('Heat Haze (Miragem)');
    heatHazePanel.add(this.heatHazePass, 'enabled').name('Heat Haze (Miragem)');
    heatHazePanel.add(this.heatHazePass.uniforms.uStrength, 'value', 0, 0.3, 0.01).name('Intensidade Miragem');
    heatHazePanel.add(this.heatHazePass.uniforms.uSpeed, 'value', 0.05, 0.5, 0.01).name('Velocidade Miragem');
  }
  
  // Aplica parâmetros visuais do painel de controle
  applyVisualParams(params) {
    this.toneMappingExposure = params['Exposição'];
    this.renderer.toneMappingExposure = params['Exposição'];
    
    this.sunIntensity = params['Luz Direcional'];
    this.ambientIntensity = params['Luz Ambiente'];
    this.hemiIntensity = params['Luz Hemisférica'];
    
    if (this.directionalLight) this.directionalLight.intensity = params['Luz Direcional'];
    if (this.ambientLight) this.ambientLight.intensity = params['Luz Ambiente'];
    if (this.hemisphereLight) this.hemisphereLight.intensity = params['Luz Hemisférica'];
    
    if (this.bloomPass) {
      this.bloomPass.strength = params['Bloom Intensity'];
      this.bloomPass.threshold = params['Bloom Threshold'];
      this.bloomPass.radius = params['Bloom Radius'];
    }
  }
  
  // Manipula tecla F10 para mostrar/ocultar o painel visual
  toggleVisualPanel() {
    this.guiVisible = !this.guiVisible;
    
    if (!this.visualGui) {
      this.setupVisualPanel();
    }
    
    if (this.visualGui) {
      this.visualGui.domElement.style.display = this.guiVisible ? 'block' : 'none';
    }
    
    return this.guiVisible;
  }
  
  // Adiciona luzes básicas para fallback quando efeitos visuais estão OFF
  ensureFallbackLights() {
    if (!this.scene) return;
    
    if (!this.fallbackAmbientLight) {
      this.fallbackAmbientLight = new THREE.AmbientLight(0xffffff, 0.45);
      this.fallbackAmbientLight.userData.isFallbackLight = true;
      this.scene.add(this.fallbackAmbientLight);
    }
    
    if (!this.fallbackDirectionalLight) {
      this.fallbackDirectionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
      this.fallbackDirectionalLight.position.set(20, 40, 20);
      this.fallbackDirectionalLight.userData.isFallbackLight = true;
      this.scene.add(this.fallbackDirectionalLight);
    }
  }
  
  // Remove luzes de fallback
  removeFallbackLights() {
    if (!this.scene) return;
    
    if (this.fallbackAmbientLight) {
      this.scene.remove(this.fallbackAmbientLight);
      this.fallbackAmbientLight = null;
    }
    
    if (this.fallbackDirectionalLight) {
      this.scene.remove(this.fallbackDirectionalLight);
      this.fallbackDirectionalLight = null;
    }
  }
  
  // Obtém o plano do solo (necessário para raycasting)
  getGroundPlane() {
    return this.plane;
  }
  
  // Limpa a cena (usado ao desconectar)
  clear() {
    if (!this.scene) return;
    
    // Remove todos os objetos da cena
    while (this.scene.children.length > 0) {
      const object = this.scene.children[0];
      this.scene.remove(object);
    }
    
    // Recria elementos básicos
    this.createSkybox();
    this.createGround();
    this.createWorldBoundaries();
    this.setupLighting();
  }
}

// Shader de heat haze simples
const HeatHazeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uStrength: { value: 0.12 },
    uSpeed: { value: 0.25 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uStrength;
    uniform float uSpeed;
    varying vec2 vUv;
    void main() {
      float offset = sin(vUv.y * 30.0 + uTime * uSpeed) * uStrength * 0.5;
      offset += sin(vUv.x * 40.0 + uTime * uSpeed * 1.2) * uStrength * 0.3;
      vec2 uv = vUv + vec2(offset, 0.0);
      gl_FragColor = texture2D(tDiffuse, uv);
    }
  `
}; 