// Arquivo principal do cliente
import * as THREE from 'three';
import geckos from '@geckos.io/client';
import { SERVER, EVENTS, PLAYER, WORLD, ABILITIES, MONSTERS, BINARY_EVENTS } from '../../shared/constants/gameConstants.js';
import { SKILLS } from '../../shared/skills/skillsConfig.js';
import { MonsterPresenter } from './presenters/MonsterPresenter.js';
import { WorldObjectPresenter } from './presenters/WorldObjectPresenter.js';
import { PlayerPresenter } from './presenters/PlayerPresenter.js';
import { HUDManager } from './ui/HUDManager.js';
import { SkillManager } from './skills/SkillManager.js';
import { FloatingTextManager } from './effects/FloatingTextManager.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader.js';
// Importa os efeitos visuais de status
import { applyBurnEffect } from './skills/MeteorStormSkill.js';
import { applyFreezeEffect } from './skills/IceSpikeSkill.js';
import { showWebShotEffect } from './skills/WebShotSkill.js';
import { showSpiderLeapEffect } from './skills/SpiderLeapSkill.js';
// Painel de controle visual para calibração em tempo real
import GUI from 'lil-gui';
import { FloatingNameManager } from './presenters/FloatingNameManager.js';
// Importa pako para descompressão
import pako from 'pako';
import {
  deserializePlayerMove,
  deserializePlayerMoved,
  deserializeWorldUpdate,
  logBinary,
  deserializePlayerStatus,
  serializePlayerMoveInput,
  deserializeMonsterDeath
} from '../../shared/utils/binarySerializer.js';
import { FloatingBarManager } from './presenters/FloatingBarManager.js';
import { deserializeWorldUpdateFull } from '../../shared/utils/binarySerializer.js';
import { MONSTER_TYPE_BY_INDEX } from '../../shared/constants/gameConstants.js';
import { deserializeMonsterDeltaUpdate } from '../../shared/utils/binarySerializer.js';

// Log para debug - verificando a porta que está sendo usada
console.log(`Tentando conectar ao servidor na porta: ${SERVER.PORT}`);

// Configurações do cliente
// Força a conexão explicitamente usando a porta das constantes
const channel = geckos({ port: SERVER.PORT });

// Defina cameraSize como variável global
const cameraSize = 15;

// Configurações do renderizador
const container = document.getElementById('game-container');
const width = window.innerWidth;
const height = window.innerHeight;

// Configuração básica do Three.js
let scene, camera, renderer;
let player; // Objeto do jogador local
let playerId; // ID do jogador recebido do servidor
let composer; // Pós-processamento global

// Presenters para os diferentes tipos de entidades
let monsterPresenter;
let worldObjectPresenter;
let playerPresenter;
let skillManager; // Gerenciador de habilidades
let floatingNameManager;
let floatingBarManager;
let lastFrameTime;

// Variáveis para o sistema de rotação com o mouse
let mousePosition = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let plane = null; // Referência para o plano do chão, será definido em initThree()
let lastRotationTime = 0; // Para limitar a frequência de envios de rotação
let lastMovementTime = 0; // Para limitar a frequência de envios de movimento

// Sistema de entrada do usuário
const keys = {
  w: false,
  a: false,
  s: false,
  d: false
};

// Estado anterior das teclas para detectar mudanças
let prevKeys = {
  w: false,
  a: false,
  s: false,
  d: false
};

// Sistema de predição de movimento
const movementPrediction = {
  enabled: true,                      // Habilitar/desabilitar predição (para testes)
  inputBuffer: [],                    // Buffer de comandos enviados
  lastPredictionTime: 0,              // Timestamp da última predição
  serverReconciliationEnabled: true,  // Habilitar/desabilitar reconciliação
  reconciliationThreshold: 0.05,      // Limiar de diferença para reconciliação (em unidades)
  sequenceNumber: 0,                  // Número sequencial para acompanhar comandos
  lastAcknowledgedSeq: -1,            // Último número de sequência confirmado pelo servidor
  lastServerPosition: null,           // Última posição recebida do servidor
  predictedPosition: null,            // Posição predita localmente
  reconciliationLerpFactor: 0.2,      // Fator de interpolação para reconciliação
  speedModifier: 1.0,                 // Modificador de velocidade (para efeitos, slow, etc.)
  isSlowed: false,                    // Flag para status de lentidão
  slowValue: 0.4,                     // Valor de redução de velocidade quando lento
};

// Flag global para efeitos visuais avançados
let visualEffectsActive = true;

// Inicializa flag a partir do localStorage/configuração
const userSettings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
if (userSettings.visualEffects === false) visualEffectsActive = false;

const floatingDamages = [];
// Variável para armazenar o alvo selecionado
let selectedTargetId = null;
let selectedTargetType = null; // 'player' ou 'monster'
let selectedOutline = null;

// Instancia o HUDManager
const hudManager = new HUDManager();
hudManager.setChannel(channel);

// Criação do gerenciador de textos flutuantes
let floatingTextManager;

// Atualiza HUD ao receber eventos do servidor
function updateLocalHUDFromServer(data) {
  if (!data || !data.stats) return;
  hudManager.update(data.stats, data.level, 'Arcane');
}

// Atualiza HUD ao usar habilidade (mana/cooldown)
channel.on(EVENTS.PLAYER.ABILITY_USED, data => {
  try {
    // console.log("ABILITY_USED recebido:", data);
    
    // Se o evento for para o jogador local
    if (data.id === playerId) {
      // Atualiza a mana no jogador
      if (player && player.userData) {
        if (data.mana !== undefined) {
          player.userData.stats.mana = data.mana;
          
          // Atualiza também a mana máxima se fornecida
          if (data.maxMana !== undefined) {
            player.userData.stats.maxMana = data.maxMana;
          }
          
          // Atualiza o HUD com os novos valores
          hudManager.update(player.userData.stats, player.userData.level, 'Arcane');
          
          // Atualiza a mana no gerenciador de habilidades para verificações locais
          skillManager.updateMana(data.mana);
        }
      }
      
      // Atualiza cooldown visual com base no valor recebido do servidor
      if (data.abilityId) {
        // Encontra qual slot da UI corresponde à habilidade usada
        const abilityIndex = hudManager.abilitySlots.indexOf(data.abilityId);
        const slot = abilityIndex + 1;
        
        if (slot > 0) {
          const now = Date.now();
          let remainingCooldown;
          
          // Processamento do cooldown com múltiplas estratégias de fallback
          if (data.cooldownEnd && data.cooldownEnd > now) {
            // Caso 1: Usar timestamp de fim do cooldown (mais preciso)
            remainingCooldown = data.cooldownEnd - now;
            // console.log(`Usando cooldownEnd: ${remainingCooldown}ms restantes`);
          } 
          else if (data.cooldownStart && data.cooldownDuration) {
            // Caso 2: Calcular com base no início + duração
            const elapsedTime = now - data.cooldownStart;
            remainingCooldown = Math.max(0, data.cooldownDuration - elapsedTime);
            // console.log(`Calculando cooldown: ${remainingCooldown}ms restantes`);
          }
          else if (data.cooldown) {
            // Caso 3: Compatibilidade com versão anterior
            // Determina se cooldown é timestamp futuro ou duração
            if (data.cooldown > now + 1000) {
              remainingCooldown = data.cooldown - now;
            } else {
              remainingCooldown = data.cooldown;
            }
            // console.log(`Usando cooldown legado: ${remainingCooldown}ms restantes`);
          }
          else {
            // Caso 4: Fallback para configuração da habilidade
            const ability = skillManager.getAbilityById(data.abilityId);
            if (!ability) return;
            remainingCooldown = ability.COOLDOWN;
            // console.log(`Usando cooldown padrão: ${remainingCooldown}ms restantes`);
          }
          
          // Garante que o cooldown não seja negativo
          remainingCooldown = Math.max(0, remainingCooldown);
          
          // Define o cooldown visual na UI
          hudManager.setCooldown(slot, remainingCooldown, remainingCooldown);
          
          // Atualiza o registro de cooldown no gerenciador de habilidades
          // Armazenamos o timestamp de quando o cooldown termina
          if (data.cooldownEnd) {
            skillManager.startCooldown(data.abilityId, data.cooldownEnd);
          } else {
            skillManager.startCooldown(data.abilityId, now + remainingCooldown);
          }
          
          // console.log(`Definido cooldown para habilidade ${data.abilityId} (slot ${slot}): ${remainingCooldown}ms | Termina em: ${new Date(now + remainingCooldown).toLocaleTimeString()}`);
        }
      }
    }
  } catch (error) {
    console.error("Erro ao processar evento ABILITY_USED:", error);
  }
});

// Atualiza HUD ao receber INIT ou MOVED
channel.on(EVENTS.PLAYER.INIT, data => {
  if (player && player.userData) updateLocalHUDFromServer(player.userData);
});

// Função utilitária para obter posição do mouse no mundo
function getMouseWorldPosition() {
  raycaster.setFromCamera(mousePosition, camera);
  const intersects = raycaster.intersectObject(plane);
  if (intersects.length > 0) {
    return intersects[0].point;
  }
  // Fallback: posição do jogador
  return player ? player.position.clone() : new THREE.Vector3(0, 0, 0);
}

// Efeito de dano flutuante
function showFloatingDamage(targetMesh, damage) {
  if (!targetMesh || !floatingTextManager) return;
  // Posição acima do alvo
  const worldPos = targetMesh.getWorldPosition(new THREE.Vector3());
  floatingTextManager.createFloatingText({
    text: `-${Number(damage).toFixed(1)}`,
    position: { x: worldPos.x, y: worldPos.y + 2.2, z: worldPos.z },
    type: 'damage',
    size: 1, // GRANDE!
    duration: 1600,
    fadeOut: true
  });
}

// Atualiza e remove danos flutuantes
function updateFloatingDamages() {
  const now = performance.now();
  for (let i = floatingDamages.length - 1; i >= 0; i--) {
    const fd = floatingDamages[i];
    const elapsed = now - fd.startTime;
    const duration = fd.duration || 1200; // Usa a duração personalizada ou 1200ms como padrão
    
    if (elapsed > duration) {
      // Remove quando o tempo expirar
      if (fd.targetMesh && fd.sprite) {
        fd.targetMesh.remove(fd.sprite);
        
        // Libera recursos
        if (fd.sprite.material) {
          fd.sprite.material.dispose();
          if (fd.sprite.material.map) {
            fd.sprite.material.map.dispose();
          }
        }
      }
      floatingDamages.splice(i, 1);
      continue;
    }
    
    // Move o sprite para cima mais lentamente
    fd.sprite.position.y = 1.5 + (elapsed / 500); // Menor incremento de altura
    
    // Fade out baseado no tempo
    const fadeStart = duration * 0.5; // Começa o fade na metade da duração
    if (elapsed > fadeStart) {
      const opacity = 1.0 - ((elapsed - fadeStart) / (duration - fadeStart));
      fd.sprite.material.opacity = Math.max(0.1, opacity);
    }
  }
}

// Configura a cena Three.js
function initThree() {
  // Cria cena
  scene = new THREE.Scene();
  // --- SKYBOX GRADIENTE ---
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
  scene.add(sky);
  // Não defina scene.background para não conflitar com o skybox
  
  // Cria câmera isométrica
  const aspectRatio = width / height;
  camera = new THREE.OrthographicCamera(
    -cameraSize * aspectRatio, cameraSize * aspectRatio,
    cameraSize, -cameraSize,
    0.1, 1000
  );
  
  // Posiciona a câmera para vista isométrica
  // Posição mais alta para ver uma área maior do mundo
  camera.position.set(20, 20, 20);
  camera.lookAt(0, 0, 0);
  
  // Cria renderizador com configurações melhoradas
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    precision: 'highp',
    powerPreference: 'high-performance',
    alpha: false // garantir fundo opaco
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio); // Melhora a nitidez em dispositivos HiDPI
  renderer.setClearColor(0x223355, 1); // Fundo azul escuro opaco
  container.appendChild(renderer.domElement);
  
  // Não adicionamos luzes básicas aqui, usando o sistema avançado de iluminação
  
  // --- TEXTURA TILEADA PARA O CHÃO ---
  const textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load('/textures/environment/tiled_stone_texture.png', (tex) => {
    console.log('Textura do chão carregada:', tex);
  });
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(32, 32); // Ajuste o número de tiles conforme o tamanho do mapa
  groundTexture.anisotropy = 8;
  groundTexture.colorSpace = THREE.SRGBColorSpace;

  // Cria um plano para o "chão" com material tileado
  const planeGeometry = new THREE.PlaneGeometry(WORLD.SIZE.WIDTH, WORLD.SIZE.HEIGHT);
  const planeMaterial = new THREE.MeshStandardMaterial({ 
    map: groundTexture,
    color: 0xffffff, // Mantém a cor original da textura
    side: THREE.DoubleSide,
    roughness: 0.5, // Mais reflexivo
    metalness: 0.0, // Não metálico
    flatShading: false
  });
  plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / 2;
  plane.receiveShadow = true; // O chão recebe sombras
  scene.add(plane);
  
  // Adiciona marcadores nos limites do mundo
  createWorldBoundaries();
  
  // Inicializa os presenters
  monsterPresenter = new MonsterPresenter(scene, floatingNameManager, floatingBarManager);
  worldObjectPresenter = new WorldObjectPresenter(scene);
  playerPresenter = new PlayerPresenter(scene, floatingBarManager);
  skillManager = new SkillManager(scene);
  
  // Configura o sistema de iluminação avançado
  // worldObjectPresenter.setupLighting(renderer);
  
  // --- CONFIGURAÇÃO PROFISSIONAL ALBION ONLINE ---
  // Tonemapping e exposição para cores naturais e vibrantes
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = worldObjectPresenter.toneMappingExposure; // agora usa valor dinâmico
  
  // --- PÓS-PROCESSAMENTO LEVE E PROFISSIONAL ---
  window._threeRenderer = renderer; // Expor globalmente para painel
  composer = new EffectComposer(renderer);
  window._threeComposer = composer; // Expor globalmente para painel
  composer.addPass(new RenderPass(scene, camera));
  // Bloom sutil, só realça magias/luzes intensas
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6, // intensidade
    0.4, // raio
    0.85 // threshold
  );
  composer.addPass(bloomPass);
  window._bloomPass = bloomPass; // Expor globalmente para painel
  // FXAA para suavizar serrilhados
  const fxaaPass = new ShaderPass(FXAAShader);
  fxaaPass.material.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
  composer.addPass(fxaaPass);
  window._fxaaPass = fxaaPass;
  // --- COLOR CORRECTION PASS (Albion: sutil, só realça um pouco) ---
  const colorCorrectionPass = new ShaderPass(ColorCorrectionShader);
  colorCorrectionPass.uniforms['powRGB'].value.set(1.05, 1.05, 1.05); // leve aumento de saturação
  colorCorrectionPass.uniforms['mulRGB'].value.set(1.05, 1.05, 1.05); // leve aumento de brilho/contraste
  composer.addPass(colorCorrectionPass);
  window._colorCorrectionPass = colorCorrectionPass;
  // Color space correto para fidelidade de cor
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  
  // Responsividade
  window.addEventListener('resize', onWindowResize);
  
  // Eventos do mouse para rotação
  window.addEventListener('mousemove', onMouseMove);
  
  // Cria gerenciador de textos flutuantes
  floatingTextManager = new FloatingTextManager(scene, camera);

  // Instancia o FloatingBarManager ANTES dos presenters!
  floatingBarManager = new FloatingBarManager(document.body, camera);

  // Instancia o FloatingNameManager
  const overlay = document.getElementById('overlay');
  floatingNameManager = new FloatingNameManager(overlay, camera);

  // Instancia MonsterPresenter e PlayerPresenter com o gerenciador de barras
  monsterPresenter = new MonsterPresenter(scene, floatingNameManager, floatingBarManager);
  worldObjectPresenter = new WorldObjectPresenter(scene);
  playerPresenter = new PlayerPresenter(scene, floatingBarManager);
  skillManager = new SkillManager(scene);
  // PATCH: restaurar cor do monstro ao respawnar
  const oldUpdateMonster = monsterPresenter.updateMonster.bind(monsterPresenter);
  monsterPresenter.updateMonster = function(monsterData) {
    oldUpdateMonster(monsterData);
    const mesh = this.getMonster(monsterData.id);
    if (mesh && mesh.userData && mesh.userData._wasGray && monsterData.stats && monsterData.stats.hp > 0) {
      // Restaurar cor original do monstro
      removeGrayDeathEffect(mesh, 0xff0000); // Vermelho padrão para monstros
    }
  };
  
  // Atualiza o modo de efeitos visuais APÓS a inicialização completa da cena
  updateVisualEffectsMode();
}

/**
 * Cria marcadores visuais para os limites do mundo
 */
function createWorldBoundaries() {
  if (!WORLD.BOUNDARIES.ENABLED) return;
  
  // Calcula as dimensões
  const halfWidth = WORLD.SIZE.WIDTH / 2;
  const halfHeight = WORLD.SIZE.HEIGHT / 2;
  const borderWidth = WORLD.BOUNDARIES.BORDER_WIDTH;
  
  // Cria material para os marcadores de limite
  const borderMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xff4040,  // Vermelho claro
    transparent: true,
    opacity: 0.6
  });
  
  // Cria os marcadores nos quatro lados
  // Norte (Z-)
  const northBorder = new THREE.Mesh(
    new THREE.BoxGeometry(WORLD.SIZE.WIDTH, 2, borderWidth),
    borderMaterial
  );
  northBorder.position.set(0, 1, -halfHeight);
  scene.add(northBorder);
  
  // Sul (Z+)
  const southBorder = new THREE.Mesh(
    new THREE.BoxGeometry(WORLD.SIZE.WIDTH, 2, borderWidth),
    borderMaterial
  );
  southBorder.position.set(0, 1, halfHeight);
  scene.add(southBorder);
  
  // Oeste (X-)
  const westBorder = new THREE.Mesh(
    new THREE.BoxGeometry(borderWidth, 2, WORLD.SIZE.HEIGHT),
    borderMaterial
  );
  westBorder.position.set(-halfWidth, 1, 0);
  scene.add(westBorder);
  
  // Leste (X+)
  const eastBorder = new THREE.Mesh(
    new THREE.BoxGeometry(borderWidth, 2, WORLD.SIZE.HEIGHT),
    borderMaterial
  );
  eastBorder.position.set(halfWidth, 1, 0);
  scene.add(eastBorder);
  
  // Adiciona postes de marcação nos cantos
  const postMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const postGeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 8);
  
  // Nordeste (X+, Z-)
  const nePost = new THREE.Mesh(postGeometry, postMaterial);
  nePost.position.set(halfWidth, 2.5, -halfHeight);
  scene.add(nePost);
  
  // Noroeste (X-, Z-)
  const nwPost = new THREE.Mesh(postGeometry, postMaterial);
  nwPost.position.set(-halfWidth, 2.5, -halfHeight);
  scene.add(nwPost);
  
  // Sudeste (X+, Z+)
  const sePost = new THREE.Mesh(postGeometry, postMaterial);
  sePost.position.set(halfWidth, 2.5, halfHeight);
  scene.add(sePost);
  
  // Sudoeste (X-, Z+)
  const swPost = new THREE.Mesh(postGeometry, postMaterial);
  swPost.position.set(-halfWidth, 2.5, halfHeight);
  scene.add(swPost);
}

// Cria representação visual do jogador local
function createPlayer() {
  // Geometria e material para o jogador (temporário: cubo azul para o mago)
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
  
  player = new THREE.Mesh(geometry, material);
  scene.add(player);
  
  // Posição inicial
  player.position.set(0, 0.5, 0); // Eleva ligeiramente do chão
  
  // Adiciona uma "frente" ao jogador para visualizar melhor a direção
  const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4); // Cone mais longo e mais visível
  const frontMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
  const front = new THREE.Mesh(frontGeometry, frontMaterial);
  front.position.set(0, 0, 0.8); // Posiciona mais à frente do cubo
  front.rotation.x = Math.PI / 2; // Rotaciona para apontar para frente
  player.add(front); // Adiciona como filho do jogador
  
  // Informa o ID do jogador local ao playerPresenter
  playerPresenter.setLocalPlayerId(playerId);
  player.targetPosition = player.position.clone();
}

// Trata redimensionamento da janela
function onWindowResize() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  const newAspectRatio = newWidth / newHeight;
  // Use cameraSize global
  camera.left = -cameraSize * newAspectRatio;
  camera.right = cameraSize * newAspectRatio;
  camera.top = cameraSize;
  camera.bottom = -cameraSize;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
  if (composer) {
    composer.setSize(newWidth, newHeight);
    // Atualiza FXAA
    const fxaa = composer.passes.find(p => p.material && p.material.uniforms && p.material.uniforms['resolution']);
    if (fxaa) fxaa.material.uniforms['resolution'].value.set(1 / newWidth, 1 / newHeight);
  }
}

// Captura a posição do mouse
function onMouseMove(event) {
  // Calcula a posição do mouse normalizada (-1 a 1)
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Manipuladores de eventos de teclado
window.addEventListener('keydown', (e) => {
  const keyChanged = updateKey(e.key, true);
  if (keyChanged) {
    // Envia imediatamente ao pressionar a tecla
    sendMovementInput();
  }
});

window.addEventListener('keyup', (e) => {
  const keyChanged = updateKey(e.key, false);
  if (keyChanged) {
    // Envia imediatamente ao soltar a tecla
    sendMovementInput();
  }
});

// Função para atualizar estado da tecla e retornar se houve mudança
function updateKey(key, isDown) {
  let changed = false;
  
  if (key === 'w' || key === 'W') {
    changed = keys.w !== isDown;
    keys.w = isDown;
  }
  else if (key === 'a' || key === 'A') {
    changed = keys.a !== isDown;
    keys.a = isDown;
  }
  else if (key === 's' || key === 'S') {
    changed = keys.s !== isDown;
    keys.s = isDown;
  }
  else if (key === 'd' || key === 'D') {
    changed = keys.d !== isDown;
    keys.d = isDown;
  }
  
  return changed;
}

// Função para enviar os comandos de movimento para o servidor
function sendMovementInput() {
  if (!player || !playerId) return;

  // Mapeamento das teclas WASD para os comandos de movimento
  const cameraRelativeInput = {
    forward: keys.w,
    backward: keys.s,
    left: keys.a,
    right: keys.d
  };

  try {
    // Se a predição estiver ativada, adiciona o comando ao buffer
    if (movementPrediction.enabled) {
      const currentSeq = movementPrediction.sequenceNumber++;
      const inputData = {
        sequence: currentSeq,
        input: { ...cameraRelativeInput },
        timestamp: Date.now()
      };
      movementPrediction.inputBuffer.push(inputData);
      
      // Limita o tamanho do buffer para evitar crescimento excessivo
      if (movementPrediction.inputBuffer.length > 30) {
        movementPrediction.inputBuffer.shift();
      }
      
      // Registra o tempo do último comando para cálculo de latência
      lastMovementCommand = Date.now();
    }
    
    // Envia input de movimento em binário
    const buffer = serializePlayerMoveInput(cameraRelativeInput);
    channel.emit(BINARY_EVENTS.PLAYER_MOVE, new Uint8Array(buffer));
  } catch (error) {
    console.error('Erro ao enviar comando de movimento (binário):', error);
  }

  // Atualiza o estado anterior para a próxima comparação
  prevKeys = { ...keys };
}

// Função para verificar periodicamente mudanças e corrigir possíveis dessincronizações
function handleMovementInput() {
  if (chatFocused) return; // Bloqueia movimentação se o chat estiver focado
  if (!player || !playerId) return;
  
  // Limita a taxa de envio para 5 vezes por segundo (a cada 200ms) para sincronização
  const now = Date.now();
  if (now - lastMovementTime < 200) {
    return;
  }
  lastMovementTime = now;
  
  // Verifica se alguma coisa mudou (sanity check)
  const hasChanged = 
    prevKeys.w !== keys.w || 
    prevKeys.a !== keys.a || 
    prevKeys.s !== keys.s || 
    prevKeys.d !== keys.d;
  

  if (hasChanged) {
    sendMovementInput();
  }
}

// Controle de FPS
let fpsLimitActive = false;
let minFrameTime = 0;
let lastFpsLimitedFrame = 0;

window.addEventListener('pvpRpgUserSettingsChanged', (e) => {
  const settings = e.detail;
  // Limite de FPS
  fpsLimitActive = !!settings.fpslimit;
  minFrameTime = fpsLimitActive ? 1000 / 30 : 0;
  // (Esqueleto para aplicar outras flags futuramente)
  // Exemplo:
  // efeitosVisuaisAtivos = !!settings.effects;
  // lodAtivo = !!settings.lod;
  // barrasTempoReal = !!settings.bars;
  // compressaoAtiva = !!settings.compression;
});

// Inicializa com as configurações salvas
(function applyInitialSettings() {
  const settings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
  fpsLimitActive = !!settings.fpslimit;
  minFrameTime = fpsLimitActive ? 1000 / 30 : 0;
})();


// Variáveis globais para FPS real
let framesThisSecond = 0;
let lastFpsUpdateTime = performance.now();
let fps = 0;

// Medidor de latência
let lastMovementCommand = 0;
let lastMovementResponse = 0;
let estimatedLatency = 0;

// Painel de status da predição
const predictionStatusPanel = document.createElement('div');
predictionStatusPanel.style.position = 'fixed';
predictionStatusPanel.style.bottom = '8px';
predictionStatusPanel.style.right = '8px';
predictionStatusPanel.style.zIndex = 9999;
predictionStatusPanel.style.background = 'rgba(0,0,0,0.5)';
predictionStatusPanel.style.color = '#fff';
predictionStatusPanel.style.fontSize = '12px';
predictionStatusPanel.style.padding = '4px 8px';
predictionStatusPanel.style.borderRadius = '4px';
predictionStatusPanel.style.pointerEvents = 'none';
predictionStatusPanel.style.maxWidth = '200px';
predictionStatusPanel.style.textAlign = 'right';
document.body.appendChild(predictionStatusPanel);

// Função para atualizar o painel de status da predição
function updatePredictionStatus() {
  if (!movementPrediction.enabled) {
    predictionStatusPanel.style.display = 'none';
    return;
  }
  
  predictionStatusPanel.style.display = 'block';
  
  // Calcula a reconciliação atual (distância entre posição predita e posição do servidor)
  let reconcileDistance = 0;
  if (movementPrediction.predictedPosition && movementPrediction.lastServerPosition) {
    const dx = movementPrediction.predictedPosition.x - movementPrediction.lastServerPosition.x;
    const dz = movementPrediction.predictedPosition.z - movementPrediction.lastServerPosition.z;
    reconcileDistance = Math.sqrt(dx * dx + dz * dz);
  }
  
  // Status da predição
  let status = '✅';
  if (reconcileDistance > movementPrediction.reconciliationThreshold) {
    status = '🔄'; // Reconciliando
  }
  if (reconcileDistance > 1.0) {
    status = '⚠️'; // Divergência significativa
  }
  
  // Formata a latência
  const latencyText = estimatedLatency > 0 ? `${estimatedLatency.toFixed(0)}ms` : '--';
  
  // Atualiza o painel
  predictionStatusPanel.innerHTML = `
    <div>Predict: ${status}</div>
    <div>Error: ${reconcileDistance.toFixed(3)}</div>
    <div>Ping: ${latencyText}</div>
  `;
}

// Listener para mudanças de configuração
window.addEventListener('pvpRpgUserSettingsChanged', (e) => {
  const settings = e.detail || {};
  if (typeof settings.visualEffects === 'boolean') {
    visualEffectsActive = settings.visualEffects;
  }
});

let animate = function() {
  requestAnimationFrame(animate);
  const now = performance.now();
  // Limite de FPS (se ativado)
  if (fpsLimitActive && lastFpsLimitedFrame && now - lastFpsLimitedFrame < minFrameTime) {
    return;
  }
  lastFpsLimitedFrame = now;

  // --- Cálculo de FPS real ---
  framesThisSecond++;
  if (now - lastFpsUpdateTime >= 1000) {
    fps = framesThisSecond;
    framesThisSecond = 0;
    lastFpsUpdateTime = now;
  }

  // Calcula o delta time desde o último frame para animações suaves
  const deltaTime = (now - lastFrameTime) / 1000; // Converte para segundos
  lastFrameTime = now;

  // --- Medição do tempo de atualização de monstros/UI ---
  const uiStart = performance.now();
  
  // Aplica a predição de movimento local
  if (movementPrediction.enabled && player) {
    applyPredictedMovement(deltaTime);
  }
  
  // Processa movimentos - apenas para envio de comandos ao servidor
  handleMovementInput();
  
  // Atualiza a posição da câmera para seguir o jogador
  updateCameraPosition();
  
  // Atualiza posições interpoladas dos outros jogadores
  if (playerPresenter.updatePositions) {
    playerPresenter.updatePositions(deltaTime);
  }
  // Atualiza posições interpoladas dos monstros
  if (monsterPresenter.updatePositions) {
    monsterPresenter.updatePositions(deltaTime);
  }
  // Atualiza as partículas e efeitos visuais
  if (skillManager.update) {
    skillManager.update(deltaTime);
  }
  // Atualiza os textos flutuantes
  if (floatingTextManager) {
    floatingTextManager.update(deltaTime);
  }
  // Atualiza o sistema de otimização do renderizador
  if (worldObjectPresenter && worldObjectPresenter.updateRenderer) {
    worldObjectPresenter.updateRenderer(deltaTime, camera.position);
  }
  // Se temos um jogador local, atualiza a luz para seguir o jogador
  if (player) {
    worldObjectPresenter.updateLightPosition(player.position);
  }
  if (floatingNameManager) {
    floatingNameManager.updateAll(window.innerWidth, window.innerHeight);
  }
  if (floatingBarManager) {
    floatingBarManager.updateAll(window.innerWidth, window.innerHeight);
  }
  // --- Fim da medição de UI ---
  window.__lastUiUpdateTimeMs = (performance.now() - uiStart).toFixed(2);

  // Renderização condicional
  if (visualEffectsActive && typeof composer !== 'undefined') {
    composer.render();
  } else if (typeof renderer !== 'undefined' && typeof scene !== 'undefined' && typeof camera !== 'undefined') {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.clear(true, true, true); // Removido para evitar problemas de buffer
    renderer.render(scene, camera);
  }

  // Atualiza o outline do alvo selecionado para seguir o alvo
  if (selectedOutline && selectedTargetId) {
    let mesh = null;
    if (selectedTargetType === 'monster') {
      mesh = monsterPresenter.getMonster(selectedTargetId);
    } else if (selectedTargetType === 'player') {
      mesh = playerPresenter.getPlayer(selectedTargetId);
    }
    if (mesh) {
      selectedOutline.position.copy(mesh.position);
      selectedOutline.rotation.copy(mesh.rotation);
    }
  }
  if (player && player.targetPosition) {
    player.position.lerp(player.targetPosition, 0.25);
  }

  // No HUDManager, use window.fps para exibir o FPS real
  window.fps = fps;
}


// Conexão ao servidor
channel.onConnect(error => {
  if (error) {
    console.error('Erro ao conectar ao servidor:', error);
    return;
  }
  
  console.log('Conectado ao servidor!');
  hudManager.setChannel(channel); // Integração correta via HUDManager
  // Inicializa o Three.js após conectar ao servidor
  initThree();
  // Inicializa os eventos do servidor
  initServerEvents();
  // Inicia o loop de renderização
  animate();
});

// Recebe o ID do jogador do servidor
channel.on(EVENTS.PLAYER.INIT, data => {
  try {
    console.log('ID recebido do servidor:', data.id);
    playerId = data.id;
    // Cria o jogador local após receber o ID
    createPlayer();
    // Após criar o player, atualize todos os dados recebidos
    if (player && player.userData) {
      player.userData.stats = data.stats;
      player.userData.level = data.level;
      player.userData.xp = data.xp;
      player.userData.nextLevelXp = data.nextLevelXp;
      player.userData.name = data.name;
      // Atualiza a HUD com todos os dados
      if (hudManager && typeof hudManager.update === 'function') {
        hudManager.update(data.stats, data.level, data.name, data.xp, data.nextLevelXp);
      }
    }
  } catch (error) {
    console.error('Erro ao processar ID do jogador:', error);
  }
});

// Recebe a inicialização do mundo do servidor
channel.on(EVENTS.WORLD.INIT, data => {
  try {
    console.log('[WORLD] Recebendo dados iniciais do mundo:', data);
    
    // Verifica se os dados estão compactados
    let worldData = data;
    if (data.compressed && data.data) {
      try {
        // Decodifica base64 para Uint8Array
        const binaryString = atob(data.data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        // Descompacta com pako
        const decompressed = pako.inflate(bytes, { to: 'string' });
        worldData = JSON.parse(decompressed);
        console.log('[WORLD] Dados descompactados com sucesso:', worldData);
      } catch (decompressError) {
        console.error('[ERRO] Falha ao descompactar dados:', decompressError);
        return;
      }
    }
    
    const worldObjects = worldData.worldObjects || [];
    const monsters = worldData.monsters || [];
    
    // Processa objetos do mundo
    if (worldObjects && worldObjects.length > 0) {
      console.log(`[WORLD] Processando ${worldObjects.length} objetos do mundo`);
      
      // Inicializa contadores por bioma para análise
      const objectsByBiome = {};
      
      // Para cada objeto do mundo, cria uma representação visual
      worldObjects.forEach(object => {
        // Contagem de objetos por bioma para logs de diagnóstico
        const biome = object.biome || 'UNKNOWN';
        objectsByBiome[biome] = (objectsByBiome[biome] || 0) + 1;
        
        // Cria o objeto visual
        worldObjectPresenter.updateWorldObject(object);
      });
      
      // Log de contagem por bioma
      console.log('[WORLD] Contagem de objetos por bioma:', objectsByBiome);
      
      // Agora que temos muitos objetos carregados, otimizamos a cena
      if (worldObjectPresenter.optimizeSceneWithInstancing) {
        console.log('[WORLD] Aplicando otimizações de renderização...');
        worldObjectPresenter.optimizeSceneWithInstancing();
      }
    }
    
    // Processa monstros
    if (monsters && monsters.length > 0) {
      console.log(`Inicializando ${monsters.length} monstros`);
      for (const monsterData of monsters) {
        if (monsterData && monsterData.id) {
          monsterPresenter.updateMonster(monsterData);
        }
      }
    }
  } catch (error) {
    console.error('[ERRO] Falha ao processar dados iniciais do mundo:', error);
  }
});

// Remove jogadores desconectados
channel.on(EVENTS.PLAYER.DISCONNECTED, data => {
  try {
    // Verifica se os dados são válidos
    if (!data || !data.id) {
      console.error('Dados de desconexão inválidos:', data);
      return;
    }
    
    const otherPlayerId = data.id;
    playerPresenter.removePlayer(otherPlayerId);
    
  } catch (error) {
    console.error('Erro ao processar desconexão de jogador:', error);
  }
});

// Recebe informações sobre jogadores que já estavam conectados
channel.on(EVENTS.PLAYER.EXISTING, data => {
  try {
    if (!data || !data.id || !data.position) {
      console.error('Dados de jogador existente inválidos:', data);
      return;
    }
    const existingPlayerId = data.id;
    if (existingPlayerId === playerId && player && player.userData) {
      // Atualiza campos do jogador local
      player.userData.stats = { ...player.userData.stats, ...data.stats };
      player.userData.level = data.level;
      player.userData.xp = data.xp;
      player.userData.nextLevelXp = data.nextLevelXp;
      player.userData.name = data.name;
      hudManager.update(data.stats, data.level, data.name, data.xp, data.nextLevelXp); // Corrigido
    } else if (existingPlayerId !== playerId) {
      playerPresenter.updatePlayer(data);
    }
  } catch (error) {
    console.error('Erro ao processar jogador existente:', error);
  }
});

// Recebe informações sobre novos jogadores que acabaram de se conectar
channel.on(EVENTS.PLAYER.JOINED, data => {
  try {
    if (!data || !data.id || !data.position) {
      console.error('Dados de novo jogador inválidos:', data);
      return;
    }
    const newPlayerId = data.id;
    if (newPlayerId === playerId && player && player.userData) {
      // Atualiza campos do jogador local
      player.userData.stats = { ...player.userData.stats, ...data.stats };
      player.userData.level = data.level;
      player.userData.xp = data.xp;
      player.userData.nextLevelXp = data.nextLevelXp;
      player.userData.name = data.name;
      hudManager.update(data.stats, data.level, data.name, data.xp, data.nextLevelXp); // Corrigido
    } else if (newPlayerId !== playerId) {
      playerPresenter.updatePlayer(data);
    }
  } catch (error) {
    console.error('Erro ao processar novo jogador:', error);
  }
});

// Adiciona evento para receber atualizações de rotação
channel.on(EVENTS.PLAYER.ROTATED, data => {
  try {
    // Verifica se os dados são válidos
    if (!data || !data.id || data.rotation === undefined) {
      console.error('Dados de rotação inválidos:', data);
      return;
    }
    
    const playerIdReceived = data.id;
    const rotation = Number(data.rotation) || 0;
    
    // Atualiza a rotação do jogador local ou de outros jogadores
    if (playerIdReceived === playerId && player) {
      player.rotation.y = rotation;
    } else if (playerPresenter.hasPlayer(playerIdReceived)) {
      playerPresenter.updatePlayerRotation(playerIdReceived, rotation);
    }
  } catch (error) {
    console.error('Erro ao processar rotação de jogador:', error);
  }
});

// Adiciona evento para receber atualizações do mundo (monstros, objetos, etc.)
channel.on(EVENTS.WORLD.UPDATE, data => {
  try {
    // Verifica se os dados são válidos
    if (!data) {
      console.error('Dados de atualização do mundo inválidos');
      return;
    }
    
    // Verifica se os dados estão compactados
    let update = data;
    if (data.compressed && data.data) {
      try {
        // Decodifica base64 para Uint8Array
        const binaryString = atob(data.data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        // Descompacta com pako
        const decompressed = pako.inflate(bytes, { to: 'string' });
        update = JSON.parse(decompressed);
      } catch (decompressError) {
        console.error('Erro ao descompactar dados:', decompressError);
        return;
      }
    }
    
    // Processa monstros
    if (update.monsters && Array.isArray(update.monsters)) {
      for (const monsterData of update.monsters) {
        if (monsterData && monsterData.id) {
          monsterPresenter.updateMonster(monsterData);
          // Se o monstro atualizado for o alvo selecionado, atualiza a HUD
          if (selectedTargetId === monsterData.id && selectedTargetType === 'monster') {
            updateTargetHUD(formatTargetForHUD(monsterData, 'monster'));
          }
        }
      }
      // Limpa monstros obsoletos (que não foram atualizados recentemente)
      monsterPresenter.pruneStaleMonsters();
    }
    
    // Processa objetos do mundo
    if (update.worldObjects && Array.isArray(update.worldObjects)) {
      for (const objectData of update.worldObjects) {
        if (objectData && objectData.id) {
          worldObjectPresenter.updateWorldObject(objectData);
        }
      }
    }
    
    // Processa jogadores (se aplicável)
    if (update.players && Array.isArray(update.players)) {
      for (const playerData of update.players) {
        if (playerData && playerData.id) {
          playerPresenter.updatePlayer(playerData);
          if (selectedTargetId === playerData.id && selectedTargetType === 'player') {
            updateTargetHUD(formatTargetForHUD(playerData, 'player'));
          }
        }
      }
    }
  } catch (error) {
    console.error('Erro ao processar atualização do mundo:', error);
  }
});

// Eventos de desconexão
channel.onDisconnect(() => {
  console.log('Desconectado do servidor');
  
  // Remove o jogador local e limpa a cena
  if (playerPresenter) {
    playerPresenter.removePlayer(playerId);
  }
  
  // Limpa todos os monstros ao desconectar
  if (monsterPresenter) {
    monsterPresenter.clearAllMonsters();
  }
  
  // Limpa todos os objetos do mundo ao desconectar
  if (worldObjectPresenter) {
    worldObjectPresenter.clearAllWorldObjects();
  }
  
  playerId = null;
  gameStarted = false;
  
  // Verifica se uiElements existe antes de chamar métodos
  if (typeof uiElements !== 'undefined' && uiElements && uiElements.showConnectionLost) {
    uiElements.showConnectionLost();
  } else {
    console.log('Interface de usuário não disponível para mostrar mensagem de desconexão');
  }
});

// Adiciona handler para responder ao ping do cliente (no servidor já deve existir, mas pode ser útil no cliente para debug)
channel.on('ping', () => {
  channel.emit('pong');
});

// Handler para dano em players
channel.on(EVENTS.PLAYER.DAMAGE, data => {
  if (!data || !data.id || !data.damage) return;
  // Jogador local
  if (data.id === playerId && player) {
    showFloatingDamage(player, data.damage);
  } else if (playerPresenter.hasPlayer(data.id)) {
    const mesh = playerPresenter.getPlayer(data.id);
    showFloatingDamage(mesh, data.damage);
  }
});

// Handler para dano em monstros
channel.on(EVENTS.MONSTER.DAMAGE, data => {
  if (!data || !data.id || !data.damage) return;
  const mesh = monsterPresenter.getMonster(data.id);
  if (mesh) showFloatingDamage(mesh, data.damage);
});

// Função para destacar o alvo selecionado
function highlightTarget(mesh) {
  if (selectedOutline) {
    scene.remove(selectedOutline);
    selectedOutline = null;
  }
  if (!mesh) return;
  // Cria uma borda sutil ao redor do alvo (não brilha com o Bloom)
  const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x888800, side: THREE.BackSide, transparent: true, opacity: 0.7 });
  const outlineMesh = mesh.clone();
  outlineMesh.material = outlineMaterial;
  outlineMesh.scale.multiplyScalar(1.15);
  outlineMesh.position.copy(mesh.position);
  outlineMesh.rotation.copy(mesh.rotation);
  outlineMesh.renderOrder = 999;
  scene.add(outlineMesh);
  selectedOutline = outlineMesh;
}

// Função para selecionar alvo com clique do mouse
window.addEventListener('mousedown', (event) => {
  // Calcula posição do mouse normalizada
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  // Checa monstros primeiro
  let found = false;
  for (const [id, mesh] of monsterPresenter.monsters.entries()) {
    const intersects = raycaster.intersectObject(mesh, true);
    if (intersects.length > 0) {
      selectedTargetId = id;
      selectedTargetType = 'monster';
      highlightTarget(mesh);
      found = true;
      // INTEGRAÇÃO HUD
      const monster = monsterPresenter.getMonsterData(id);
      if (monster) updateTargetHUD(formatTargetForHUD(monster, 'monster'));
      break;
    }
  }
  if (!found) {
    for (const [id, mesh] of playerPresenter.players.entries()) {
      const intersects = raycaster.intersectObject(mesh, true);
      if (intersects.length > 0) {
        // Se clicou no próprio player, remove o alvo
        if (id === playerId) {
          selectedTargetId = null;
          selectedTargetType = null;
          highlightTarget(null);
          updateTargetHUD(null);
        } else {
          selectedTargetId = id;
          selectedTargetType = 'player';
          highlightTarget(mesh);
          // INTEGRAÇÃO HUD
          const playerData = playerPresenter.getPlayerData(id);
          if (playerData) updateTargetHUD(formatTargetForHUD(playerData, 'player'));
        }
        found = true;
        break;
      }
    }
  }
  // Se não encontrou nada, NÃO remove o alvo atual
});

// ESC remove o alvo
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    selectedTargetId = null;
    selectedTargetType = null;
    highlightTarget(null);
    updateTargetHUD(null);
  }
});

// Remove outline se o alvo morrer/desaparecer
function clearTargetIfInvalid() {
  if (!selectedTargetId) return;
  
  if (selectedTargetType === 'monster') {
    const monsterExists = monsterPresenter.monsters.has(selectedTargetId);
    if (!monsterExists) {
      selectedTargetId = null;
      selectedTargetType = null;
      updateTargetHUD(null); // Esconde HUD
    }
  } else if (selectedTargetType === 'player') {
    const playerExists = playerPresenter.players.has(selectedTargetId);
    if (!playerExists) {
      selectedTargetId = null;
      selectedTargetType = null;
      updateTargetHUD(null); // Esconde HUD
    }
  }
}

// Adiciona chamada no loop de animação
const oldAnimate = animate;
animate = function() {
  updateFloatingDamages();
  clearTargetIfInvalid();
  oldAnimate();
};

// Envio de habilidade ao pressionar 1-4
window.addEventListener('keydown', (e) => {
  let slot = null;
  if (e.key === '1') slot = 1;
  if (e.key === '2') slot = 2;
  if (e.key === '3') slot = 3;
  if (e.key === '4') slot = 4;
  if (!slot || !player) return;
  
  const abilityId = hudManager.abilitySlots[slot - 1];
  if (!abilityId) return;
  
  // Obter informações da habilidade para feedback
  const ability = skillManager.getAbilityById(abilityId);
  if (!ability) return;
  
  // Verificação local de cooldown e mana antes de enviar
  if (!skillManager.canUseAbility(abilityId)) {
    // Feedback visual de erro para o jogador
    const reason = skillManager.getWhyCannotUse(abilityId);
    
    // Mostra mensagem de erro flutuante
    if (floatingTextManager && player) {
      const position = {
        x: player.position.x,
        y: player.position.y + 2.0,
        z: player.position.z
      };
      
      // Cores diferentes para cada tipo de erro
      let color = '#ff0000'; // Padrão vermelho
      if (reason.includes('cooldown')) {
        color = '#ffaa00'; // Laranja para cooldown
      } else if (reason.includes('mana')) {
        color = '#00aaff'; // Azul para mana
      }
      
      floatingTextManager.createFloatingText({
        text: reason,
        position: position,
        color: color,
        size: 0.8,
        duration: 1500,
        type: 'error'
      });
    }
    
    return; // Não continua se não puder usar
  }
  
  const targetPosition = getMouseWorldPosition();
  
  // Temporariamente define um cooldown visual para feedback imediato
  if (ability) {
    // Isto é temporário, apenas para feedback visual, e será substituído
    // quando o servidor confirmar o uso da habilidade
    hudManager.setCooldown(slot, ability.COOLDOWN, ability.COOLDOWN);
  }
  
  // Envia o comando para o servidor
  channel.emit(EVENTS.PLAYER.USE_ABILITY, {
    abilityId,
    targetPosition
  });
});

// Adiciona chamada no loop de animação
const prevAnimate = animate;
animate = function() {
  const now = performance.now();
  const delta = (now - (animate.lastTime || now)) / 1000;
  animate.lastTime = now;
  
  // Atualiza as habilidades
  if (skillManager) skillManager.update();
  
  updateFloatingDamages();
  clearTargetIfInvalid();
  
  prevAnimate();
};

// Sincronizar efeito visual da habilidade quando o servidor confirmar
channel.on(EVENTS.PLAYER.ABILITY_USED, data => {
  try {
    if (!data || !data.abilityId) return;
    
    // Processa teleporte, se for o caso
    if (data.teleport && data.teleportPosition) {
      // Determina qual jogador teleportar
      let targetMesh = null;
      if (!data.playerId && player) {
        // É o próprio jogador local
        targetMesh = player;
        // Salva a posição de origem antes do teleporte
        const origem = player.position.clone();
        
        // NOVO: Atualizar também a posição predita para o sistema de predição
        if (movementPrediction.enabled && movementPrediction.predictedPosition) {
          // Atualiza a posição predita diretamente para a posição de teleporte
          movementPrediction.predictedPosition.set(
            data.teleportPosition.x,
            0.5,
            data.teleportPosition.z
          );
          
          // Define a posição atual e alvo diretamente (sem interpolação)
          player.position.set(
            data.teleportPosition.x,
            0.5,
            data.teleportPosition.z
          );
          player.targetPosition.set(
            data.teleportPosition.x,
            0.5,
            data.teleportPosition.z
          );
          
          // Armazena a posição de teleporte como última posição do servidor
          // para que a reconciliação não tente "corrigir" o teleporte
          movementPrediction.lastServerPosition = new THREE.Vector3(
            data.teleportPosition.x,
            0.5,
            data.teleportPosition.z
          );
        } else {
          // Teleporta o jogador imediatamente (comportamento original)
          player.position.set(
            data.teleportPosition.x,
            data.teleportPosition.y || player.position.y,
            data.teleportPosition.z
          );
        }
        
        // Chama o efeito visual de teleporte
        skillManager.spawnSkillEffect(2, origem, new THREE.Vector3(data.teleportPosition.x, data.teleportPosition.y || player.position.y, data.teleportPosition.z), player);
        // (Opcional) Texto flutuante
        // floatingTextManager.createFloatingText({
        //   text: '✨',
        //   position: data.teleportPosition,
        //   color: '#80ffff',
        //   size: 2.0,
        //   duration: 1000,
        //   type: 'default'
        // });
        // Atualiza a câmera para seguir o jogador teleportado
        // camera.position.x = player.position.x;
        // camera.position.z = player.position.z + cameraDistance;
        // camera.lookAt(player.position);
      } 
      else if (data.playerId) {
        // É outro jogador
        targetMesh = playerPresenter.getPlayer(data.playerId);
        if (targetMesh) {
          // Teleporta o outro jogador
          targetMesh.position.set(
            data.teleportPosition.x,
            data.teleportPosition.y || targetMesh.position.y,
            data.teleportPosition.z
          );
          
          // Adiciona efeito visual
          floatingTextManager.createFloatingText({
            text: '✨',
            position: data.teleportPosition,
            color: '#80ffff',
            size: 1,
            duration: 1000,
            type: 'default'
          });
        }
      }
      
      return; // Não processa os outros efeitos para teleporte
    }
    
    // Para outras habilidades (não teleporte)
    let mesh = null;
    
    // Determina qual jogador usou a habilidade
    if (!data.playerId && player) {
      // É o próprio jogador local
      mesh = player;
    } else if (data.playerId) {
      // É outro jogador
      mesh = playerPresenter.getPlayer(data.playerId);
    }
    
    if (!mesh || !data.targetPosition) return;
    
    const origin = data.position ? new THREE.Vector3(data.position.x, data.position.y, data.position.z) : mesh.position.clone();
    const target = new THREE.Vector3(data.targetPosition.x, data.targetPosition.y, data.targetPosition.z);
    
    // Usa o SkillManager para criar o efeito visual
    skillManager.spawnSkillEffect(data.abilityId, origin, target, mesh, data.effect || {});
    
    // Processa efeitos de área, se houver
    if (data.areaEffect && data.areaEffect.center && data.areaEffect.radius) {
      const areaCenter = new THREE.Vector3(
        data.areaEffect.center.x,
        data.areaEffect.center.y || 0,
        data.areaEffect.center.z
      );
      
      // Para FROST_SPIKES (ID 3), mantemos o código existente
      if (data.abilityId === 3) {
        // Criar um círculo temporário no chão
        const areaGeometry = new THREE.CircleGeometry(data.areaEffect.radius, 32);
        const areaMaterial = new THREE.MeshBasicMaterial({
          color: 0x00ffff, // Azul para gelo
          transparent: true,
          opacity: 0.4
        });
        
        const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
        areaMesh.position.set(areaCenter.x, 0.1, areaCenter.z); // Ligeiramente acima do chão
        areaMesh.rotation.x = -Math.PI / 2; // Rotaciona para ficar horizontal
        scene.add(areaMesh);
        
        // Adiciona efeito de estacas de gelo
        const spikeCount = 8;
        for (let i = 0; i < spikeCount; i++) {
          const angle = (i / spikeCount) * Math.PI * 2;
          const distance = (Math.random() * 0.7 + 0.3) * data.areaEffect.radius; // Entre 30% e 100% do raio
          const x = areaCenter.x + Math.cos(angle) * distance;
          const z = areaCenter.z + Math.sin(angle) * distance;
          
          // Cria texto flutuante para representar estacas de gelo
          floatingTextManager.createFloatingText({
            text: '❄️',
            position: { x, y: 0.5, z },
            color: '#ffffff',
            size: 1.0 + Math.random(),
            duration: 2000 + Math.random() * 1000,
            type: 'default'
          });
        }
        
        // Remove a visualização da área após alguns segundos
        setTimeout(() => {
          scene.remove(areaMesh);
          areaMesh.geometry.dispose();
          areaMaterial.dispose();
        }, 5000);
      }
      
      // Nota: Removemos o código específico para METEOR_STORM (ID 4) 
      // pois agora usamos o MeteorStormSkill.js
    }
    
    // Efeito visual de hit no alvo (tremor ou flash)
    if (mesh) {
      // Aplica um efeito visual temporário - reduz o multiplicador
      const originalScale = mesh.scale.clone();
      mesh.scale.multiplyScalar(1.1); // Reduzido de 1.2 para 1.1
      
      // Volta ao tamanho normal
      setTimeout(() => {
        if (mesh) {
          mesh.scale.copy(originalScale);
        }
      }, 150);
    }
  } catch (error) {
    console.error('Erro ao processar habilidade:', error);
  }
});

// Após a função que inicializa eventos do servidor
function initServerEvents() {
  // Evento de dano causado
  channel.on(EVENTS.COMBAT.DAMAGE_DEALT, data => {
    try {
      if (!data || !data.targetId || !data.damage) return;
      
      // ADICIONADO: Verificação de morte com base no campo died
      if (data.died === true) {
        // Se o alvo morreu, defina HP como 0 imediatamente
        if (data.targetType === 'monster') {
          const monsterMesh = monsterPresenter.getMonster(data.targetId);
          if (monsterMesh && monsterMesh.userData && monsterMesh.userData.stats) {
            monsterMesh.userData.stats.hp = 0;
            
            // Se o monstro morto era o alvo selecionado, atualize imediatamente o HUD
            if (selectedTargetId === data.targetId && selectedTargetType === 'monster') {
              const targetData = monsterPresenter.getMonsterData(data.targetId);
              if (targetData) {
                updateTargetHUD(formatTargetForHUD(targetData, 'monster'));
              }
            }
          }
        } else if (data.targetType === 'player') {
          const playerMesh = playerPresenter.getPlayer(data.targetId);
          if (playerMesh && playerMesh.userData && playerMesh.userData.stats) {
            playerMesh.userData.stats.hp = 0;
            
            // Se o jogador morto era o alvo selecionado, atualize imediatamente o HUD
            if (selectedTargetId === data.targetId && selectedTargetType === 'player') {
              const targetData = playerPresenter.getPlayerData(data.targetId);
              if (targetData) {
                updateTargetHUD(formatTargetForHUD(targetData, 'player'));
              }
            }
          }
        }
      }
      
      // Encontra o alvo (baseado no tipo)
      let targetEntity = null;
      if (data.targetType === 'monster') {
        targetEntity = monsterPresenter.getMonster(data.targetId);
      } else if (data.targetType === 'player') {
        // Se for o jogador local, atualiza a HUD
        if (data.targetId === playerId) {
          hudManager.updateHealth(data.remainingHp || 0);
        }
        // Obtém o modelo do jogador
        targetEntity = playerPresenter.getPlayer(data.targetId);
      }
      
      // Se não encontrou o alvo, retorna
      if (!targetEntity) return;
      
      // Obtém a posição do alvo
      const targetPosition = {
        x: targetEntity.position.x,
        y: targetEntity.position.y + 1.0, // Reduzido de 1.5 para 1.0, mais próximo da cabeça
        z: targetEntity.position.z
      };
      
      // Calcula um tamanho limitado para o texto flutuante de dano
      // Limita o crescimento do tamanho baseado no dano
      const damageValue = parseInt(data.damage) || 0;
      const sizeMultiplier = Math.min(0.7 + (damageValue / 50), 1.5);
      
      // Cria texto flutuante de dano
      floatingTextManager.createFloatingText({
        text: data.damage ? Number(data.damage).toFixed(1) : '',
        position: targetPosition,
        color: '#ff0000',
        size: 1,  // Tamanho padronizado para todos os danos
        duration: 1200,
        type: 'damage'
      });
      
      // Efeito visual de hit no alvo (tremor ou flash)
      if (targetEntity) {
        // Aplica um efeito visual temporário - reduz o multiplicador
        const originalScale = targetEntity.scale.clone();
        targetEntity.scale.multiplyScalar(1.1); // Reduzido de 1.2 para 1.1
        
        // Volta ao tamanho normal
        setTimeout(() => {
          if (targetEntity) {
            targetEntity.scale.copy(originalScale);
          }
        }, 150);
      }
      
      // NOVO CÓDIGO: Envia mensagem de dano para o chat
      if (hudManager && hudManager.chatManager) {
        // Quando você recebe dano (seu ID é o alvo)
        if (data.targetId === playerId) {
          console.log(`[DEBUG] Você recebeu ${data.damage} de dano!`);
          // Mostrar quem causou o dano, se disponível
          if (data.sourceType === 'monster' && data.sourceName) {
            // Usar o nome pt-br do monstro enviado pelo servidor
            hudManager.chatManager.addDamageMessage(`Você recebeu ${data.damage} de dano do ${data.sourceName}!`);
          } else if (data.sourceType === 'player' && data.sourceId) {
            // Dano causado por outro jogador
            const sourcePlayer = playerPresenter.getPlayerData(data.sourceId);
            if (sourcePlayer && sourcePlayer.name) {
              hudManager.chatManager.addDamageMessage(`Você recebeu ${data.damage} de dano de ${sourcePlayer.name}!`);
            } else {
              hudManager.chatManager.addDamageMessage(`Você recebeu ${data.damage} de dano de outro jogador!`);
            }
          } else {
            // Fonte desconhecida
            hudManager.chatManager.addDamageMessage(`Você recebeu ${data.damage} de dano!`);
          }
        } 
        // Quando você causa dano (seu ID é a fonte)
        // O servidor não está enviando sourceId corretamente,
        // então assumimos que todo dano a monstros foi causado pelo jogador local
        // e danos a outros jogadores também são causados pelo jogador local
        if (data.sourceId === playerId || 
            data.targetType === 'monster' || 
            (data.targetType === 'player' && data.targetId !== playerId)) {
          console.log(`[DEBUG] Você causou ${data.damage} de dano em ${data.targetType} ${data.targetId}!`);
          if (data.targetType === 'monster') {
            // Usar o nome pt-br do monstro enviado pelo servidor
            let monsterName = data.targetName || "monstro";
            hudManager.chatManager.addDamageMessage(`Você causou ${data.damage} de dano no ${monsterName}!`);
          } else if (data.targetType === 'player' && data.targetId !== playerId) {
            // Obter o nome do jogador, se disponível
            let playerName = "jogador";
            const playerData = playerPresenter.getPlayerData(data.targetId);
            if (playerData && playerData.name) {
              playerName = playerData.name;
            } else {
              playerName = `Jogador ${data.targetId.substring(0, 6)}`;
            }
            hudManager.chatManager.addDamageMessage(`Você causou ${data.damage} de dano em ${playerName}!`);
          }
        }
      }

      // --- INTEGRAÇÃO: Aplica efeito visual de status conforme a habilidade ---
      if (targetEntity && data.abilityId) {
        if (data.abilityId === 4) applyStatusEffectVisual(targetEntity, scene, 'burn');   // Meteor Storm
        if (data.abilityId === 3) applyStatusEffectVisual(targetEntity, scene, 'freeze'); // Ice Spike
        // Adicione outros efeitos/status aqui conforme necessário
      }

      // ATUALIZAÇÃO DA HUD DO ALVO: sempre que o alvo selecionado sofre dano
      if (selectedTargetId === data.targetId && selectedTargetType === data.targetType) {
        let targetData = null;
        if (data.targetType === 'monster') {
          // Monta objeto HUD usando dados do evento para garantir hp correto
          targetData = monsterPresenter.getMonsterData(data.targetId) || {};
          targetData.id = data.targetId;
          targetData.monsterType = targetData.monsterType || data.monsterType;
          targetData.stats = targetData.stats || {};
          targetData.stats.hp = data.remainingHp ?? data.hp ?? targetData.stats.hp;
          targetData.stats.maxHp = data.maxHp ?? targetData.stats.maxHp;
          updateTargetHUD(formatTargetForHUD(targetData, 'monster'));
        } else if (data.targetType === 'player') {
          targetData = playerPresenter.getPlayerData(data.targetId) || {};
          targetData.id = data.targetId;
          targetData.stats = targetData.stats || {};
          targetData.stats.hp = data.remainingHp ?? data.hp ?? targetData.stats.hp;
          targetData.stats.maxHp = data.maxHp ?? targetData.stats.maxHp;
          targetData.stats.mana = data.remainingMana ?? targetData.stats.mana;
          targetData.stats.maxMana = data.maxMana ?? targetData.stats.maxMana;
          targetData.name = targetData.name || data.name;
          updateTargetHUD(formatTargetForHUD(targetData, 'player'));
        }
      }
    } catch (error) {
      console.error('Erro ao processar evento DAMAGE_DEALT:', error);
    }
  });
  
  // Evento de texto flutuante genérico
  channel.on(EVENTS.COMBAT.FLOATING_TEXT, data => {
    try {
      if (!data || !data.text || !data.position) return;
      
      // Cria texto flutuante
      floatingTextManager.createFloatingText({
        text: data.text,
        position: data.position,
        color: data.color || '#ffffff',
        size: data.size || 1.0,
        duration: data.duration || 2000,
        type: data.type || 'default'
      });
    } catch (error) {
      console.error('Erro ao processar evento de texto flutuante:', error);
    }
  });
  
  // Evento de morte de jogador
  channel.on(EVENTS.PLAYER.DEATH, data => {
    try {
      if (!data || !data.id) return;
      
      // Se for o jogador local
      if (data.id === playerId) {
        // Adiciona mensagem de morte à HUD
        hudManager.showDeathMessage(true);
        
        // Zera a vida do jogador local
        if (player && player.userData && player.userData.stats) {
          player.userData.stats.hp = 0;
        }
      }
      
      // Efeito visual de morte do jogador
      const playerMesh = playerPresenter.getPlayer(data.id);
      if (playerMesh) {
        // Zera a vida do jogador no userData
        if (playerMesh.userData && playerMesh.userData.stats) {
          playerMesh.userData.stats.hp = 0;
        }
        
        // Adicionar efeito visual de jogador morto (deitado)
        playerMesh.rotation.x = Math.PI / 2; // Deitar o jogador
        playerMesh.position.y = 0.1; // Abaixar para o chão
        if (playerMesh.material) {
          playerMesh.material.opacity = 0.7;
          playerMesh.material.transparent = true;
        }
      }
      
      // Se o jogador morto era o alvo selecionado e não é o jogador local,
      // limpa a HUD do alvo (para jogador local, manteremos a seleção)
      if (selectedTargetId === data.id && selectedTargetType === 'player' && data.id !== playerId) {
        selectedTargetId = null;
        selectedTargetType = null;
        updateTargetHUD(null); // Esconde HUD
        highlightTarget(null); // Remove destaque visual
      }
    } catch (error) {
      console.error('Erro ao processar evento de morte:', error);
    }
  });
  
  // Evento de respawn
  channel.on(EVENTS.PLAYER.RESPAWN, data => {
    try {
      if (!data) return;
      
      // Se for o jogador local
      if (data.id === playerId) {
        // Atualiza posição
        player.position.set(data.position.x, data.position.y, data.position.z);
        
        // Reseta rotação (jogador em pé novamente)
        player.rotation.x = 0;
        if (player.material) {
          player.material.opacity = 1.0;
        }
        
        // Atualiza a HUD com os novos valores
        if (data.stats) {
          hudManager.update(data.stats, data.level || 1, 'Mago');
        }
        
        // Remove mensagem de morte
        hudManager.showDeathMessage(false);
      } else {
        // Outro jogador respawnou
        const otherPlayerMesh = playerPresenter.getPlayer(data.id);
        if (otherPlayerMesh) {
          // Reseta efeitos visuais de morte
          otherPlayerMesh.rotation.x = 0;
          otherPlayerMesh.position.y = 0;
          if (otherPlayerMesh.material) {
            otherPlayerMesh.material.opacity = 1.0;
          }
        }
      }
      
      // Efeito visual de respawn
      if (data.position) {
        floatingTextManager.createFloatingText({
          text: 'Respawn!',
          position: data.position,
          color: '#00ffff',
          size: 1.5,
          duration: 3000,
          type: 'default'
        });
      }
    } catch (error) {
      console.error('Erro ao processar evento de respawn:', error);
    }
  });

  // Evento de resposta de sincronização
  channel.on(EVENTS.PLAYER.SYNC_RESPONSE, data => {
    try {
      console.log("Sincronização recebida:", 
        `Mana: ${data.mana?.toFixed(1)}/${data.maxMana?.toFixed(1)}`, 
        `Cooldowns: ${Object.keys(data.cooldowns || {}).length}`);
      
      // Atualiza a mana do jogador
      if (player && player.userData && data.mana !== undefined) {
        // Registra se houve uma mudança significativa na mana
        const oldMana = player.userData.stats.mana;
        const manaChange = data.mana - oldMana;
        if (Math.abs(manaChange) > 1) {
          console.log(`Mana atualizada: ${oldMana.toFixed(1)} → ${data.mana.toFixed(1)} (${manaChange > 0 ? '+' : ''}${manaChange.toFixed(1)})`);
        }
        
        player.userData.stats.mana = data.mana;
        
        if (data.maxMana !== undefined) {
          player.userData.stats.maxMana = data.maxMana;
        }
        
        // Atualiza HP se fornecido
        if (data.hp !== undefined) {
          player.userData.stats.hp = data.hp;
        }
        
        if (data.maxHp !== undefined) {
          player.userData.stats.maxHp = data.maxHp;
        }
        
        // Atualiza o HUD
        hudManager.update(player.userData.stats, player.userData.level, 'Arcane');
        
        // Atualiza o SkillManager com a mana atual
        skillManager.updateMana(data.mana);
      }
      
      // Atualiza cooldowns no SkillManager
      if (data.cooldowns) {
        const now = Date.now();
        // Ajuste de tempo com base no timestamp do servidor, se disponível
        const timeOffset = data.timestamp ? (now - data.timestamp) : 0;
        
        for (const abilityId in data.cooldowns) {
          const cooldownEndTime = data.cooldowns[abilityId];
          // Ajusta o tempo de fim do cooldown com base na diferença de relógios
          const adjustedEndTime = cooldownEndTime + timeOffset;
          
          // Atualiza o cooldown no SkillManager
          skillManager.startCooldown(parseInt(abilityId), adjustedEndTime);
          
          // Também atualiza na UI
          const slot = hudManager.abilitySlots.indexOf(parseInt(abilityId)) + 1;
          if (slot > 0) {
            const remainingTime = Math.max(0, adjustedEndTime - now);
            hudManager.setCooldown(slot, remainingTime, remainingTime);
          }
        }
      }
    } catch (error) {
      console.error("Erro ao processar sincronização:", error);
    }
  });

  // Evento de morte de monstro (BINÁRIO)
  channel.on(BINARY_EVENTS.MONSTER_DEATH, buffer => {
    const data = deserializeMonsterDeath(buffer);
    const id = String(data.monsterId);
    const mesh = monsterPresenter.getMonster(id);
    if (mesh) {
      applyGrayDeathEffect(mesh);
    }
    // Se o monstro morto for o alvo selecionado, atualizar HUD para vida 0
    if (selectedTargetId === id && selectedTargetType === 'monster') {
      const targetData = monsterPresenter.getMonsterData(id);
      if (targetData) {
        targetData.stats = targetData.stats || {};
        targetData.stats.hp = 0;
        updateTargetHUD(formatTargetForHUD(targetData, 'monster'));
      }
    }
    // Remove o corpo do monstro após um curto delay (para animações)
    setTimeout(() => {
      monsterPresenter.removeMonster(id);
      if (selectedTargetId === id && selectedTargetType === 'monster') {
        selectedTargetId = null;
        selectedTargetType = null;
        updateTargetHUD(null);
        highlightTarget(null);
      }
    }, 2000);
  });
  
  // Eventos de habilidades da aranha e outros monstros
  channel.on('monster:webShot', data => {
    try {
      // Obter a aranha e o alvo
      const spider = monsterPresenter.getMonster(data.sourceId);
      let target = null;
      
      if (data.targetId === playerId) {
        // Alvo é o jogador local
        target = player;
      } else if (data.targetType === 'player') {
        // Alvo é outro jogador
        target = playerPresenter.getPlayer(data.targetId);
      } else if (data.targetType === 'monster') {
        // Alvo é um monstro
        target = monsterPresenter.getMonster(data.targetId);
      }
      
      if (spider && target) {
        // Exibir o efeito visual da teia
        showWebShotEffect(spider, target, scene);
      }
    } catch (error) {
      console.error('Erro ao processar monster:webShot:', error);
    }
  });
  
  channel.on('monster:spiderLeap', data => {
    try {
      // Obter a aranha
      const spider = monsterPresenter.getMonster(data.sourceId);
      if (spider) {
        // Exibir o efeito visual de pulo da aranha
        showSpiderLeapEffect(spider, data.targetPos, scene);
      }
    } catch (error) {
      console.error('Erro ao processar monster:spiderLeap:', error);
    }
  });

  // Handler para delta binário de monstros
  channel.on(BINARY_EVENTS.MONSTER_DELTA_UPDATE, buffer => {
    const { addedOrUpdated, removed } = deserializeMonsterDeltaUpdate(buffer);
    // Atualiza/cria monstros
    if (monsterPresenter && addedOrUpdated) {
      for (const monster of addedOrUpdated) {
        monsterPresenter.updateExistingMonster(String(monster.id), { ...monster, id: String(monster.id) });
      }
    }
    // Remove monstros
    if (monsterPresenter && removed) {
      for (const id of removed) {
        monsterPresenter.removeMonster(String(id));
      }
    }
  });

  // Atualiza o status de slow quando o jogador recebe esse efeito
  channel.on('combat:slow', data => {
    if (data && data.targetId === playerId) {
      // Atualiza o status de lentidão na predição
      movementPrediction.isSlowed = true;
      movementPrediction.slowValue = data.value || 0.4;
      
      // Atualiza o status no objeto do jogador também para consistência
      if (player && player.userData) {
        if (!player.userData.status) player.userData.status = {};
        player.userData.status.slowedUntil = Date.now() + (data.duration || 3000);
      }
    }
  });
}

// Configurar sincronização periódica
let lastSyncRequest = 0;
const SYNC_INTERVAL = 2000; // Reduzido de 5000 para 2000 (a cada 2 segundos)

function requestServerSync() {
  const now = Date.now();
  // Limita a frequência de sincronização
  if (now - lastSyncRequest < SYNC_INTERVAL) return;
  
  // Envia requisição de sincronização
  if (channel && channel.readyState === 1) { // Só envia se estiver conectado
    console.log("Solicitando sincronização com servidor...");
    channel.emit(EVENTS.PLAYER.SYNC_REQUEST);
    lastSyncRequest = now;
  }
}

// Adiciona a chamada de sincronização ao loop de animação
const originalAnimate = animate;
animate = function() {
  // Solicita sincronização periodicamente
  if (player && playerId) {
    requestServerSync();
  }
  
  // Chama a função de animação original
  originalAnimate();
};

function formatTargetForHUD(data, type) {
  let hp = data.stats?.hp ?? data.hp ?? 0;
  let maxHp = data.stats?.maxHp ?? data.maxHp ?? 0;
  let name = data.name || data.monsterType || '???';
  if (type === 'monster' && data.monsterType && MONSTERS[data.monsterType]) {
    name = MONSTERS[data.monsterType].NAME;
  }
  return {
    id: data.id,
    type,
    name,
    hp: hp,
    maxHp: maxHp,
    energy: data.stats?.mana || data.energy || 0,
    maxEnergy: data.stats?.maxMana || data.maxEnergy || 0,
    status: [
      ...(data.status?.slowedUntil && data.status.slowedUntil > Date.now()
        ? [{ icon: '❄️', alt: 'Slow', tooltip: 'Lento (movimento reduzido)' }]
        : [])
      // Adicione outros status aqui
    ]
  };
}

function updateTargetHUD(target) {
  const hud = document.querySelector('.target-ui');
  
  // Se não tiver alvo, esconde o HUD
  if (!hud || !target) {
    if (hud) hud.style.display = 'none';
    return;
  }
  
  // NOVA VERIFICAÇÃO: Se HP = 0, limpa o alvo e esconde o HUD imediatamente
  // (exceto se for o jogador local)
  if (target.hp <= 0 && !(target.type === 'player' && target.id === playerId)) {
    // Limpa a seleção do alvo
    selectedTargetId = null;
    selectedTargetType = null;
    highlightTarget(null);
    
    // Esconde o HUD
    hud.style.display = 'none';
    return;
  }
  
  // Se chegou aqui, exibe e atualiza o HUD normalmente
  hud.style.display = 'block';
  hud.querySelector('.target-icon').textContent = target.type === 'player' ? '👤' : '👹';
  hud.querySelector('.target-name').textContent = target.name;
  
  // Vida
  const hpPercent = (target.hp / target.maxHp) * 100;
  hud.querySelector('.hp-fill').style.width = hpPercent + '%';
  hud.querySelector('.hp-text').textContent = `${target.hp} / ${target.maxHp}`;
  
  // Mana/energia
  const manaBar = hud.querySelector('.mana-bar');
  if (target.maxEnergy) {
    manaBar.style.display = 'block';
    const manaPercent = (target.energy / target.maxEnergy) * 100;
    hud.querySelector('.mana-fill').style.width = manaPercent + '%';
    hud.querySelector('.mana-text').textContent = `${target.energy} / ${target.maxEnergy}`;
  } else {
    manaBar.style.display = 'none';
  }
  
  // Status
  const statusDiv = hud.querySelector('.target-status');
  statusDiv.innerHTML = '';
  (target.status || []).forEach(st => {
    if (st.icon.startsWith('http') || st.icon.includes('.')) {
      // Se for URL ou caminho de arquivo, usa <img>
      const img = document.createElement('img');
      img.src = st.icon;
      img.alt = st.alt || '';
      img.title = st.tooltip || '';
      statusDiv.appendChild(img);
    } else {
      // Se for emoji ou texto, usa <span>
      const span = document.createElement('span');
      span.textContent = st.icon;
      span.alt = st.alt || '';
      span.title = st.tooltip || '';
      span.style.fontSize = '20px';
      span.style.lineHeight = '20px';
      span.style.cursor = 'help';
      statusDiv.appendChild(span);
    }
  });
}

let chatFocused = false;
window.addEventListener('chat:focus', () => { chatFocused = true; });
window.addEventListener('chat:blur', () => { chatFocused = false; });

// --- Parâmetros globais de câmera estilo Diablo 3 ---
let cameraDistance = 28; // Distância padrão (pode ser ajustada via zoom)
const cameraHeightAngle = Math.PI / 4.7; // ~38°
const cameraLerpSpeed = 0.15; // Suavidade da interpolação
// --- Fim dos parâmetros globais ---

function updateCameraPosition() {
  if (!player) return;

  // Calcula direção isométrica
  const lookAt = new THREE.Vector3(
    player.position.x,
    player.position.y,
    player.position.z
  );

  // Player levemente abaixo do centro (offset na direção do olhar)
  const offsetX = Math.cos(cameraHeightAngle) * cameraDistance;
  const offsetY = Math.sin(cameraHeightAngle) * cameraDistance;
  const offsetZ = Math.cos(cameraHeightAngle) * cameraDistance;

  // Posição alvo da câmera (levemente à frente do player)
  const cameraTarget = new THREE.Vector3(
    player.position.x + offsetX * 0.7,
    player.position.y + offsetY,
    player.position.z + offsetZ * 0.7
  );

  // Se a distância for grande (ex: teleporte ou início), pula a interpolação
  if (camera.position.distanceTo(cameraTarget) > 8) {
    camera.position.copy(cameraTarget);
  } else {
    // Interpolação suave (lerp)
    camera.position.lerp(cameraTarget, cameraLerpSpeed);
  }

  // Olha para o player
  camera.lookAt(lookAt);

  // --- Esqueleto para fade em obstáculos (ativar depois se desejar) ---
  // // Raycasting da câmera ao player para detectar obstáculos
  // const ray = new THREE.Raycaster(camera.position, lookAt.clone().sub(camera.position).normalize());
  // const intersects = ray.intersectObjects(scene.children, true);
  // for (const obj of intersects) {
  //   if (obj.object.userData && obj.object.userData.type === 'worldObject') {
  //     // Exemplo: obj.object.material.opacity = 0.3;
  //     // Exemplo: obj.object.material.transparent = true;
  //   }
  // }
  // --- Fim do esqueleto de fade ---
}

/**
 * Aplica efeito visual de status em um inimigo
 * @param {THREE.Object3D} enemyMesh - Mesh do inimigo
 * @param {THREE.Scene} scene
 * @param {string} status - 'burn', 'freeze', 'slow', etc
 */
function applyStatusEffectVisual(enemyMesh, scene, status) {
  if (!enemyMesh) return;
  console.log('[StatusVisual] Aplicando status', status, 'em mesh:', enemyMesh);
  if (status === 'burn') {
    console.log('[StatusVisual] Chamando applyBurnEffect');
    applyBurnEffect(enemyMesh, scene);
  }
  if (status === 'freeze' || status === 'slow') {
    console.log('[StatusVisual] Chamando applyFreezeEffect');
    applyFreezeEffect(enemyMesh, scene);
  }
  // Adicione outros efeitos conforme necessário
}

// Exemplo de uso no handler de hit/dano:
// (Adapte conforme sua lógica de combate/eventos)
//
// if (enemyMesh && status) {
//   applyStatusEffectVisual(enemyMesh, scene, status);
// }
//
// Para integração automática por habilidade:
// if (enemyMesh && abilityId) {
//   if (abilityId === 4) applyStatusEffectVisual(enemyMesh, scene, 'burn'); // Meteor Storm
//   if (abilityId === 3) applyStatusEffectVisual(enemyMesh, scene, 'freeze'); // Ice Spike
// }

// Função utilitária para atualizar exposição dinamicamente
window.setThreeExposure = (value) => {
  renderer.toneMappingExposure = value;
};

let visualGui = null;
let guiVisible = false;

function setupVisualPanel(worldObjectPresenter) {
  if (visualGui) return; // já criado
  visualGui = new GUI({ width: 340 });
  visualGui.domElement.style.zIndex = 10000;
  visualGui.domElement.style.position = 'fixed';
  visualGui.domElement.style.top = '60px';
  visualGui.domElement.style.right = '20px';
  visualGui.domElement.style.display = 'none';

  // Parâmetros para controle
  const params = {
    'Exposição': worldObjectPresenter.toneMappingExposure,
    'Luz Direcional': worldObjectPresenter.sunIntensity,
    'Luz Ambiente': worldObjectPresenter.ambientIntensity,
    'Luz Hemisférica': worldObjectPresenter.hemiIntensity,
    'Bloom Intensity': window._bloomPass.strength,
    'Bloom Threshold': window._bloomPass.threshold,
    'Bloom Radius': window._bloomPass.radius,
    'Reset Preset Albion': () => {
      params['Exposição'] = 1.32;
      params['Luz Direcional'] = 2.2;
      params['Luz Ambiente'] = 0.8;
      params['Luz Hemisférica'] = 1.3;
      params['Bloom Intensity'] = 0.6;
      params['Bloom Threshold'] = 0.85;
      params['Bloom Radius'] = 0.4;
      applyVisualParams();
      visualGui.controllersRecursive().forEach(c => c.updateDisplay());
    }
  };

  function applyVisualParams() {
    worldObjectPresenter.toneMappingExposure = params['Exposição'];
    window._threeRenderer.toneMappingExposure = params['Exposição'];
    worldObjectPresenter.sunIntensity = params['Luz Direcional'];
    worldObjectPresenter.ambientIntensity = params['Luz Ambiente'];
    worldObjectPresenter.hemiIntensity = params['Luz Hemisférica'];
    if (worldObjectPresenter.sunLight) worldObjectPresenter.sunLight.intensity = params['Luz Direcional'];
    if (worldObjectPresenter.ambientLight) worldObjectPresenter.ambientLight.intensity = params['Luz Ambiente'];
    if (worldObjectPresenter.hemisphereLight) worldObjectPresenter.hemisphereLight.intensity = params['Luz Hemisférica'];
    window._bloomPass.strength = params['Bloom Intensity'];
    window._bloomPass.threshold = params['Bloom Threshold'];
    window._bloomPass.radius = params['Bloom Radius'];
  }

  visualGui.add(params, 'Exposição', 0.8, 2.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Luz Direcional', 0.5, 4.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Luz Ambiente', 0.0, 2.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Luz Hemisférica', 0.0, 2.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Bloom Intensity', 0.0, 2.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Bloom Threshold', 0.0, 1.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Bloom Radius', 0.0, 2.0, 0.01).onChange(applyVisualParams);
  visualGui.add(params, 'Reset Preset Albion');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'F10') {
    guiVisible = !guiVisible;
    if (!visualGui) setupVisualPanel(worldObjectPresenter);
    if (visualGui) visualGui.domElement.style.display = guiVisible ? 'block' : 'none';
  }
});

// Chamar setupVisualPanel após worldObjectPresenter estar pronto
setTimeout(() => {
  if (window.worldObjectPresenter) setupVisualPanel(window.worldObjectPresenter);
}, 2000);

// Variável global para bloquear controles enquanto morto
let isPlayerDead = false;

// Função utilitária para aplicar efeito cinza/translúcido
function applyGrayDeathEffect(mesh) {
  if (!mesh) return;
  // Função recursiva para aplicar efeito em todos os materiais
  function applyToAllMaterials(obj) {
    if (obj.material) {
      if (Array.isArray(obj.material)) {
        obj.material.forEach(mat => {
          mat.color.set(0x888888);
          mat.opacity = 0.5;
          mat.transparent = true;
        });
      } else {
        obj.material.color.set(0x888888);
        obj.material.opacity = 0.5;
        obj.material.transparent = true;
      }
    }
    if (obj.children && obj.children.length > 0) {
      obj.children.forEach(child => applyToAllMaterials(child));
    }
  }
  applyToAllMaterials(mesh);
  mesh.userData._wasGray = true;
  // Deitar o corpo
  mesh.rotation.x = Math.PI / 2;
  mesh.position.y = 0.1;
  console.log('[CLIENT] [applyGrayDeathEffect] Efeito cinza aplicado ao mesh:', mesh.userData.id);
}

// Função utilitária para restaurar cor original
function removeGrayDeathEffect(mesh, originalColor = 0x0000ff) {
  if (!mesh) return;
  if (mesh.material) {
    mesh.material.color.set(originalColor);
    mesh.material.opacity = 1.0;
    mesh.material.transparent = false;
  }
  mesh.userData._wasGray = false;
  // Levantar o corpo
  mesh.rotation.x = 0;
  mesh.position.y = 0.5;
}

// Handler de morte do player
channel.on(EVENTS.PLAYER.DEATH, data => {
  isPlayerDead = true;
  hudManager.showDeathModal(data);
  window.addEventListener('keydown', blockDeadInputs, true);
  window.addEventListener('mousedown', blockDeadInputs, true);
  setTimeout(() => {
    const btn = document.getElementById('btn-respawn');
    if (btn) {
      btn.onclick = () => {
        channel.emit(EVENTS.PLAYER.RESPAWN);
      };
    }
  }, 100);
  // Efeito visual: corpo cinza para o player morto
  if (data.id === playerId && player) {
    applyGrayDeathEffect(player);
  } else {
    const mesh = playerPresenter.getPlayer(data.id);
    if (mesh) applyGrayDeathEffect(mesh);
  }
});

// Handler de respawn do player
channel.on(EVENTS.PLAYER.RESPAWN, data => {
  isPlayerDead = false;
  hudManager.hideDeathModal();
  window.removeEventListener('keydown', blockDeadInputs, true);
  window.removeEventListener('mousedown', blockDeadInputs, true);
  // Restaurar cor original do player
  if (data.id === playerId && player) {
    removeGrayDeathEffect(player, 0x0000ff); // Azul padrão
  } else {
    const mesh = playerPresenter.getPlayer(data.id);
    if (mesh) removeGrayDeathEffect(mesh, 0x0000ff);
  }
});

// Handler de morte de monstro
channel.on(EVENTS.MONSTER.DEATH, data => {
  console.log('[CLIENT] [EVENTS.MONSTER.DEATH] Recebido para monstro:', data && data.id);
  if (!data || !data.id) return;
  const mesh = monsterPresenter.getMonster(data.id);
  let maxHp = 1;
  if (mesh && mesh.userData && mesh.userData.stats && mesh.userData.stats.maxHp) {
    maxHp = mesh.userData.stats.maxHp;
    console.log('[CLIENT] [applyGrayDeathEffect] Aplicando efeito cinza ao monstro:', data.id);
    applyGrayDeathEffect(mesh);
  } else {
    // Tenta buscar maxHp do presenter, se possível
    const monsterData = monsterPresenter.getMonsterData ? monsterPresenter.getMonsterData(data.id) : null;
    if (monsterData && monsterData.stats && monsterData.stats.maxHp) {
      maxHp = monsterData.stats.maxHp;
    }
    console.warn('[CLIENT] [applyGrayDeathEffect] Mesh do monstro não encontrado:', data.id);
  }
  // Zera a barra de vida flutuante imediatamente, mesmo sem mesh
  if (monsterPresenter.floatingBarManager) {
    console.log('[MONSTER.DEATH] Zerando barra', data.id, 'maxHp:', maxHp);
    monsterPresenter.floatingBarManager.updateBar(data.id, {
      hp: 0,
      maxHp
    });
  }
  // Se o monstro morto for o alvo selecionado, atualizar HUD para vida 0
  if (selectedTargetId === data.id && selectedTargetType === 'monster') {
    const targetData = monsterPresenter.getMonsterData(data.id);
    if (targetData) {
      targetData.stats = targetData.stats || {};
      targetData.stats.hp = 0;
      console.log('[CLIENT] [HUD] Atualizando HUD do alvo para vida 0 do monstro:', data.id);
      updateTargetHUD(formatTargetForHUD(targetData, 'monster'));
    }
  }
  // Remove o corpo do monstro após um curto delay (para animações)
  setTimeout(() => {
    console.log('[CLIENT] [removeMonster] Removendo monstro:', data.id);
    monsterPresenter.removeMonster(data.id);
    // Se o monstro removido era o alvo selecionado, limpar HUD
    if (selectedTargetId === data.id && selectedTargetType === 'monster') {
      selectedTargetId = null;
      selectedTargetType = null;
      updateTargetHUD(null);
      highlightTarget(null);
      console.log('[CLIENT] [HUD] HUD do alvo limpa após remoção do monstro:', data.id);
    }
  }, 2000); // 2 segundos de delay para mostrar animação de morte
});


// Função para bloquear inputs enquanto morto
function blockDeadInputs(e) {
  if (isPlayerDead) {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  }
}

// Ao selecionar um alvo, impedir seleção de monstros mortos/removidos
function selectTarget(id, type) {
  console.log('[CLIENT] [selectTarget] Tentando selecionar alvo:', id, type);
  if (type === 'monster') {
    const mesh = monsterPresenter.getMonster(id);
    if (!mesh) {
      console.warn('[CLIENT] [selectTarget] Monstro não existe mais:', id);
      selectedTargetId = null;
      selectedTargetType = null;
      updateTargetHUD(null);
      highlightTarget(null);
      return;
    }
    // Se o monstro está morto (efeito cinza), impedir seleção
    if (mesh.userData._wasGray) {
      console.warn('[CLIENT] [selectTarget] Monstro está morto/cinza, não pode ser selecionado:', id);
      selectedTargetId = null;
      selectedTargetType = null;
      updateTargetHUD(null);
      highlightTarget(null);
      return;
    }
  }
  // ... chamada original de seleção de alvo ...
}

// Após a conexão do canal, adicionar listeners para eventos binários

channel.on(BINARY_EVENTS.PLAYER_MOVED, buffer => {
  logBinary(BINARY_EVENTS.PLAYER_MOVED);
  const data = deserializePlayerMoved(buffer);
  
  // Calcula latência se este for um movimento do jogador local
  if (data.playerId === playerId && lastMovementCommand > 0) {
    lastMovementResponse = Date.now();
    estimatedLatency = lastMovementResponse - lastMovementCommand;
  }
  
  if (playerPresenter) {
    // console.log('[BINÁRIO] playerId evento:', data.playerId, '| playerId local:', playerId, '| pos:', data.posX, data.posY);
    if (data.playerId === playerId) {
      // console.log('>> Atualizando POSIÇÃO do PLAYER LOCAL:', data.posX, data.posY);
      if (player) {
        // Atualiza status
        if (player.userData && player.userData.stats) {
          player.userData.stats.hp = data.hp;
          player.userData.stats.mana = data.mana;
        }
        
        // Verifica se o jogador está sob efeito de lentidão (slow)
        if (player.userData && player.userData.status) {
          const slowedUntil = player.userData.status.slowedUntil;
          movementPrediction.isSlowed = slowedUntil && slowedUntil > Date.now();
        }
        
        // Reconcilia a posição do servidor com a predita localmente
        reconcilePosition(data.posX, data.posY, data.rot);
      } else {
        console.log('Objeto player local não encontrado:', player);
      }
    } else {
      // console.log('>> Atualizando OUTRO PLAYER:', data.playerId);
      playerPresenter.updateExistingPlayer(String(data.playerId), {
        position: { x: data.posX, z: data.posY },
        rotation: data.rot,
        stats: { hp: data.hp, mana: data.mana }
      });
    }
  }
});

channel.on(BINARY_EVENTS.WORLD_UPDATE, buffer => {
  const t0 = performance.now();
  const data = deserializeWorldUpdateFull(buffer);
  const t1 = performance.now();
  // Atualiza objetos do mundo
  if (worldObjectPresenter && data.worldObjects) {
    for (const o of data.worldObjects) {
      worldObjectPresenter.updateWorldObject({
        id: String(o.id),
        type: o.type,
        position: { x: o.position.x, y: 0, z: o.position.z },
        rotation: o.rotation,
        status: o.status
      });
    }
    // Remove objetos do mundo que não vieram no update (saíram do alcance)
    const receivedIds = new Set(data.worldObjects.map(o => String(o.id)));
    for (const id of worldObjectPresenter.worldObjects.keys()) {
      if (!receivedIds.has(id)) {
        worldObjectPresenter.removeWorldObject(id);
      }
    }
  }
  // Atualiza jogadores próximos
  if (playerPresenter && data.players) {
    for (const pl of data.players) {
      if (Number(pl.id) === Number(playerId)) continue; // Não atualiza o player local!
      playerPresenter.updateExistingPlayer(String(pl.id), {
        position: { x: pl.position.x, z: pl.position.z },
        rotation: pl.rotation,
        stats: { hp: pl.stats.hp, mana: pl.stats.mana },
        level: pl.level
      });
    }
  }
  const t2 = performance.now();
  // console.log(`[PERF][CLIENT] WORLD_UPDATE: desserialização=${(t1-t0).toFixed(2)}ms | atualização visual=${(t2-t1).toFixed(2)}ms | total=${(t2-t0).toFixed(2)}ms | monstros=DELTA | objetos=${data.worldObjects?.length||0}`);
});

channel.on(BINARY_EVENTS.PLAYER_STATUS, buffer => {
  const data = deserializePlayerStatus(buffer);
  // Removido log de debug do status binário
  if (data.playerId === playerId && player && player.userData) {
    player.userData.stats.hp = data.hp;
    player.userData.stats.maxHp = data.maxHp;
    player.userData.stats.mana = data.mana;
    player.userData.stats.maxMana = data.maxMana;
    player.userData.level = data.level;
    player.userData.xp = data.xp;
    player.userData.nextLevelXp = data.nextLevelXp;
    if (hudManager && typeof hudManager.update === 'function') {
      hudManager.update(
        player.userData.stats,
        player.userData.level,
        player.userData.name,
        player.userData.xp,
        player.userData.nextLevelXp
      );
    }
    if (skillManager && typeof skillManager.updateMana === 'function') {
      skillManager.updateMana(data.mana);
    }
  }
});


// Log visual para depuração dos efeitos visuais
let visualEffectsLog = document.createElement('div');
visualEffectsLog.style.position = 'fixed';
visualEffectsLog.style.top = '8px';
visualEffectsLog.style.left = '8px';
visualEffectsLog.style.zIndex = 99999;
visualEffectsLog.style.background = 'rgba(0,0,0,0.5)';
visualEffectsLog.style.color = '#fff';
visualEffectsLog.style.fontSize = '14px';
visualEffectsLog.style.padding = '4px 10px';
visualEffectsLog.style.borderRadius = '6px';
visualEffectsLog.style.pointerEvents = 'none';
visualEffectsLog.innerText = visualEffectsActive ? 'Efeitos Visuais: ON' : 'Efeitos Visuais: OFF';
document.body.appendChild(visualEffectsLog);

function updateVisualEffectsLog() {
  visualEffectsLog.innerText = visualEffectsActive ? 'Efeitos Visuais: ON' : 'Efeitos Visuais: OFF';
}

// Atualizar log ao mudar o flag
window.addEventListener('pvpRpgUserSettingsChanged', (e) => {
  const settings = e.detail || {};
  if (typeof settings.visualEffects === 'boolean') {
    visualEffectsActive = settings.visualEffects;
    updateVisualEffectsLog();
  }
});
// Também atualizar ao inicializar
updateVisualEffectsLog();



// Luzes básicas para fallback quando efeitos visuais estão OFF
let fallbackAmbientLight = null;
let fallbackDirectionalLight = null;

function ensureFallbackLights() {
  if (!scene) return; // Só adiciona luzes se a cena já existe
  if (!fallbackAmbientLight) {
    fallbackAmbientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(fallbackAmbientLight);
  }
  if (!fallbackDirectionalLight) {
    fallbackDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fallbackDirectionalLight.position.set(20, 40, 20);
    scene.add(fallbackDirectionalLight);
  }
}

function removeFallbackLights() {
  if (!scene) return;
  if (fallbackAmbientLight) {
    scene.remove(fallbackAmbientLight);
    fallbackAmbientLight = null;
  }
  if (fallbackDirectionalLight) {
    scene.remove(fallbackDirectionalLight);
    fallbackDirectionalLight = null;
  }
}

// Atualizar luzes ao alternar efeitos visuais
function updateVisualEffectsMode() {
  console.log("[DEBUG] Atualizando modo de efeitos visuais. Ativo:", visualEffectsActive);
  
  if (visualEffectsActive) {
    // COMPOSER: ativa luzes principais, remove fallback
    console.log("[DEBUG] Ativando modo COMPOSER");
    
    // Remove fallback lights primeiro
    removeFallbackLights();
    
    // Certifica-se de que worldObjectPresenter existe
    // if (typeof worldObjectPresenter === 'undefined' || !worldObjectPresenter) {
    //   console.error("[DEBUG] worldObjectPresenter não encontrado! Inicializando Three.js...");
    //   // Se o presenter não existir, talvez precise reinicializar
    //   if (typeof initThree === 'function') {
    //     // initThree();
    //     // Return para não continuar, pois initThree vai chamar esta função ao final
    //     return;
    //   }
    // }
    
    // Certifica-se de que as luzes estão configuradas
    if (typeof worldObjectPresenter !== 'undefined' && typeof scene !== 'undefined') {
      console.log("[DEBUG] Verificando luzes principais...");
      
      // Se as luzes não existirem, tenta recriar o sistema de iluminação
      if (!worldObjectPresenter.sunLight || !worldObjectPresenter.ambientLight || !worldObjectPresenter.hemisphereLight) {
        console.log("[DEBUG] Luzes principais não encontradas, recriando sistema de iluminação!");
        
        // Verificar se podemos recriar as luzes
        if (typeof worldObjectPresenter.setupLighting === 'function' && typeof renderer !== 'undefined') {
          console.log("[DEBUG] Chamando setupLighting...");
          worldObjectPresenter.setupLighting(renderer);
        }
      }
      
      // Agora tenta adicionar as luzes à cena
      if (worldObjectPresenter.sunLight) {
        console.log("[DEBUG] Adicionando sunLight à cena");
        if (!scene.children.includes(worldObjectPresenter.sunLight)) {
          scene.add(worldObjectPresenter.sunLight);
        }
        worldObjectPresenter.sunLight.intensity = 2.2;
      } else {
        console.warn("[DEBUG] sunLight não existe!");
      }
      
      if (worldObjectPresenter.ambientLight) {
        console.log("[DEBUG] Adicionando ambientLight à cena");
        if (!scene.children.includes(worldObjectPresenter.ambientLight)) {
          scene.add(worldObjectPresenter.ambientLight);
        }
        worldObjectPresenter.ambientLight.intensity = 0.8;
      } else {
        console.warn("[DEBUG] ambientLight não existe!");
      }
      
      if (worldObjectPresenter.hemisphereLight) {
        console.log("[DEBUG] Adicionando hemisphereLight à cena");
        if (!scene.children.includes(worldObjectPresenter.hemisphereLight)) {
          scene.add(worldObjectPresenter.hemisphereLight);
        }
        worldObjectPresenter.hemisphereLight.intensity = 1.3;
      } else {
        console.warn("[DEBUG] hemisphereLight não existe!");
      }
    }
    
    // Configura o renderer
    if (typeof renderer !== 'undefined' && typeof worldObjectPresenter !== 'undefined') {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = worldObjectPresenter.toneMappingExposure || 1.0;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
  } else {
    // RENDERER: remove luzes principais, ativa fallback
    console.log("[DEBUG] Ativando modo RENDERER");
    
    // Remove TODAS as luzes do sistema avançado da cena
    if (typeof scene !== 'undefined') {
      // Encontra e remove todas as luzes principais da cena
      const lightsToRemove = scene.children.filter(obj => {
        // Remove apenas as luzes principais, não as fallback
        return obj.isLight && 
               obj !== fallbackAmbientLight && 
               obj !== fallbackDirectionalLight &&
               !obj.userData.isFallbackLight;
      });
      
      console.log("[DEBUG] Removendo luzes principais:", lightsToRemove.length);
      lightsToRemove.forEach(light => scene.remove(light));
      
      // Ainda tenta remover explicitamente as luzes do worldObjectPresenter
      if (worldObjectPresenter) {
        if (worldObjectPresenter.sunLight && scene.children.includes(worldObjectPresenter.sunLight)) 
          scene.remove(worldObjectPresenter.sunLight);
        if (worldObjectPresenter.ambientLight && scene.children.includes(worldObjectPresenter.ambientLight)) 
          scene.remove(worldObjectPresenter.ambientLight);
        if (worldObjectPresenter.hemisphereLight && scene.children.includes(worldObjectPresenter.hemisphereLight)) 
          scene.remove(worldObjectPresenter.hemisphereLight);
      }
    }
    
    // Garante que as fallback lights estão adicionadas e marcadas
    ensureFallbackLights();
    if (fallbackAmbientLight) {
      fallbackAmbientLight.userData.isFallbackLight = true;
      fallbackAmbientLight.intensity = 0.45;
    }
    if (fallbackDirectionalLight) {
      fallbackDirectionalLight.userData.isFallbackLight = true;
      fallbackDirectionalLight.intensity = 1.0;
    }
    
    // Ajusta o renderer
    if (typeof renderer !== 'undefined') {
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
  }
  
  // Atualiza o log visual
  updateVisualEffectsLog && updateVisualEffectsLog();
  
  // Logs do número de luzes para diagnóstico
  if (typeof scene !== 'undefined') {
    const allLights = scene.children.filter(obj => obj.isLight);
    console.log("[DEBUG] Depois de alternar: Total de luzes na cena:", allLights.length);
    allLights.forEach((light, i) => {
      console.log(`[DEBUG] Luz #${i+1}: ${light.type}, intensidade: ${light.intensity}, fallback: ${!!light.userData.isFallbackLight}`);
    });
  }
}


// Chamar ao inicializar e ao mudar o flag
updateVisualEffectsMode();
window.addEventListener('pvpRpgUserSettingsChanged', (e) => {
  const settings = e.detail || {};
  if (typeof settings.visualEffects === 'boolean') {
    visualEffectsActive = settings.visualEffects;
    updateVisualEffectsMode();
  }
});



// Painel de diagnóstico visual
let diagPanel = document.createElement('div');
diagPanel.style.position = 'fixed';
diagPanel.style.top = '126px';
diagPanel.style.left = '8px';
diagPanel.style.zIndex = 99999;
diagPanel.style.background = 'rgba(0,0,0,0.7)';
diagPanel.style.color = '#ffe066';
diagPanel.style.fontSize = '13px';
diagPanel.style.padding = '4px 12px';
diagPanel.style.borderRadius = '6px';
diagPanel.style.pointerEvents = 'none';
diagPanel.innerText = 'Diagnóstico: --';
document.body.appendChild(diagPanel);

function updateDiagPanel() {
  let mode = (visualEffectsActive && typeof composer !== 'undefined') ? 'COMPOSER' : 'RENDERER';
  let nLights = scene && scene.children ? scene.children.filter(obj => obj.isLight).length : 0;
  let nObjs = scene && scene.children ? scene.children.length : 0;
  let hasCamera = !!camera;
  let hasPlane = !!plane;
  diagPanel.innerText = `Modo: ${mode}\nLuzes: ${nLights}\nObjs: ${nObjs}\nCâmera: ${hasCamera ? 'Sim' : 'Não'}\nChão: ${hasPlane ? 'Sim' : 'Não'}`;
  // Log detalhado no console a cada troca de modo
  if (window.__lastDiagMode !== mode) {
    console.log('[DIAG] Modo:', mode, '| Luzes:', nLights, '| Objs:', nObjs, '| Câmera:', hasCamera, '| Chão:', hasPlane);
    window.__lastDiagMode = mode;
  }
}

// Atualizar painel de diagnóstico a cada frame
const oldAnimateDiag = animate;
animate = function() {
  updateDiagPanel();
  updatePredictionStatus(); // Adiciona atualização do painel de predição
  oldAnimateDiag();
};

// Função para aplicar o movimento predito localmente
function applyPredictedMovement(deltaTime) {
  if (!player || !movementPrediction.enabled) return;
  
  // Reseta a velocidade local
  const velocity = { x: 0, z: 0 };
  
  // Usa a velocidade base definida nas constantes
  // Essa velocidade é calibrada para o tick rate do servidor (20 ticks por segundo)
  let moveSpeed = PLAYER.SPEED * movementPrediction.speedModifier;
  
  // Aplica efeito de lentidão se estiver ativo
  if (movementPrediction.isSlowed) {
    moveSpeed *= movementPrediction.slowValue;
  }
  
  // Calcula a direção baseada nos inputs ativos
  let dirX = 0;
  let dirZ = 0;
  
  if (keys.w) {
    dirX -= 1;
    dirZ -= 1;
  }
  if (keys.s) {
    dirX += 1;
    dirZ += 1;
  }
  if (keys.a) {
    dirX -= 1;
    dirZ += 1;
  }
  if (keys.d) {
    dirX += 1;
    dirZ -= 1;
  }
  
  // Se não há movimento, não faz nada
  if (dirX === 0 && dirZ === 0) return;
  
  // Normaliza o vetor de direção para evitar movimento mais rápido na diagonal
  const length = Math.sqrt(dirX * dirX + dirZ * dirZ);
  dirX /= length;
  dirZ /= length;
  
  // Calcula o movimento baseado no delta time normalizado para o tick rate do servidor
  // O servidor usa um tick rate de 20 (50ms), então normalizamos para esse valor
  const normalizedDelta = deltaTime * 1000 / 50;
  velocity.x = dirX * moveSpeed * normalizedDelta;
  velocity.z = dirZ * moveSpeed * normalizedDelta;
  
  // Calcula a rotação baseada na direção
  let angle;
  
  // Usa o estado das teclas para identificar movimento puro e diagonais
  const { w, s, a, d } = keys;
  
  if (w && !s && !a && !d) {
    // Apenas W pressionado (frente)
    angle = Math.atan2(-1, -1); // Direção padrão frente (no sistema isométrico)
  } else if (s && !w && !a && !d) {
    // Apenas S pressionado (trás)
    angle = Math.atan2(1, 1); // Direção padrão trás
  } else if (w && d && !s && !a) {
    // W + D (Norte)
    angle = Math.PI; // 180°
  } else if (w && a && !s && !d) {
    // W + A (Oeste)
    angle = 1.5 * Math.PI; // 270°
  } else if (s && d && !w && !a) {
    // S + D (Leste)
    angle = 0.5 * Math.PI; // 90°
  } else if (s && a && !w && !d) {
    // S + A (Sul)
    angle = 0; // 0°
  } else {
    // Para os demais casos, mantém a inversão
    angle = Math.atan2(-dirZ, -dirX);
  }
  
  if (angle < 0) angle += 2 * Math.PI;
  
  // Aplica o movimento predito
  if (!movementPrediction.predictedPosition) {
    movementPrediction.predictedPosition = player.position.clone();
  }
  
  // Atualiza a posição predita
  movementPrediction.predictedPosition.x += velocity.x;
  movementPrediction.predictedPosition.z += velocity.z;
  
  // Restringe ao limite do mundo
  const halfWidth = WORLD.SIZE.WIDTH / 2;
  const halfHeight = WORLD.SIZE.HEIGHT / 2;
  const minX = -halfWidth + WORLD.BOUNDARIES.BORDER_WIDTH;
  const maxX = halfWidth - WORLD.BOUNDARIES.BORDER_WIDTH;
  const minZ = -halfHeight + WORLD.BOUNDARIES.BORDER_WIDTH;
  const maxZ = halfHeight - WORLD.BOUNDARIES.BORDER_WIDTH;
  
  movementPrediction.predictedPosition.x = Math.max(minX, Math.min(maxX, movementPrediction.predictedPosition.x));
  movementPrediction.predictedPosition.z = Math.max(minZ, Math.min(maxZ, movementPrediction.predictedPosition.z));
  
  // Define a posição alvo para o jogador
  player.targetPosition.copy(movementPrediction.predictedPosition);
  
  // Aplica a rotação calculada
  player.rotation.y = angle;
  
  // Salva o timestamp da predição
  movementPrediction.lastPredictionTime = Date.now();
}

// Função para reconciliar a posição do jogador após receber a atualização do servidor
function reconcilePosition(serverX, serverZ, serverRot) {
  if (!player || !movementPrediction.enabled || !movementPrediction.serverReconciliationEnabled) return;
  
  // Se não temos uma posição predita, simplesmente aceita a posição do servidor
  if (!movementPrediction.predictedPosition) {
    player.position.set(serverX, 0.5, serverZ);
    player.targetPosition.set(serverX, 0.5, serverZ);
    player.rotation.y = serverRot;
    movementPrediction.predictedPosition = player.position.clone();
    return;
  }
  
  // Calcula a diferença entre a posição predita e a recebida do servidor
  const dx = serverX - movementPrediction.predictedPosition.x;
  const dz = serverZ - movementPrediction.predictedPosition.z;
  const distance = Math.sqrt(dx * dx + dz * dz);
  
  // Salva a última posição recebida do servidor
  movementPrediction.lastServerPosition = new THREE.Vector3(serverX, 0.5, serverZ);
  
  // NOVO: Se a distância for muito grande (maior que um limiar de "teleporte"),
  // assume que foi um teleporte ou outra habilidade de movimentação instantânea
  // e simplesmente aceita a posição do servidor diretamente
  const teleportThreshold = 5.0; // 5 unidades é considerado um teleporte
  if (distance > teleportThreshold) {
    // Teleporte ou grande correção - aceita a posição do servidor diretamente
    player.position.set(serverX, 0.5, serverZ);
    player.targetPosition.set(serverX, 0.5, serverZ);
    movementPrediction.predictedPosition.set(serverX, 0.5, serverZ);
    player.rotation.y = serverRot;
    console.log(`[PREDICT] Detectado grande salto de posição (${distance.toFixed(2)} unidades) - possivelmente teleporte ou correção`);
    return;
  }
  
  // Se a diferença for maior que o limiar, reconcilia
  if (distance > movementPrediction.reconciliationThreshold) {
    // Interpola suavemente para a posição correta
    const lerpFactor = movementPrediction.reconciliationLerpFactor;
    
    // Corrige a posição predita (com lerp para suavizar)
    movementPrediction.predictedPosition.x += dx * lerpFactor;
    movementPrediction.predictedPosition.z += dz * lerpFactor;
    
    // Atualiza a posição alvo do jogador
    player.targetPosition.copy(movementPrediction.predictedPosition);
  }
  
  // Atualiza a rotação diretamente
  player.rotation.y = serverRot;
}

// Função para alternar a predição de movimento
function toggleMovementPrediction() {
  movementPrediction.enabled = !movementPrediction.enabled;
  
  // Feedback visual
  const message = movementPrediction.enabled ? 
    'Predição de movimento: ATIVADA' : 
    'Predição de movimento: DESATIVADA';
  
  // Cria um elemento de notificação
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '50%';
  notification.style.left = '50%';
  notification.style.transform = 'translate(-50%, -50%)';
  notification.style.background = 'rgba(0,0,0,0.7)';
  notification.style.color = '#fff';
  notification.style.padding = '15px 25px';
  notification.style.borderRadius = '8px';
  notification.style.fontSize = '16px';
  notification.style.fontWeight = 'bold';
  notification.style.zIndex = 10000;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Remove a notificação após 2 segundos
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s';
    setTimeout(() => document.body.removeChild(notification), 500);
  }, 2000);
  
  console.log(message);
  
  // Se desativando a predição, reseta o estado para evitar bugs
  if (!movementPrediction.enabled) {
    // Limpa o buffer de inputs
    movementPrediction.inputBuffer = [];
    // Reseta a posição predita
    movementPrediction.predictedPosition = null;
    // Reseta a última posição do servidor
    movementPrediction.lastServerPosition = null;
  }
}

// Evento de teclado para alternar a predição (F9)
window.addEventListener('keydown', (e) => {
  if (e.key === 'F9') {
    toggleMovementPrediction();
  }
});
