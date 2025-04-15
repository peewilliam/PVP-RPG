// Arquivo principal do cliente
import * as THREE from 'three';
import geckos from '@geckos.io/client';
import { SERVER, EVENTS, PLAYER } from '../../shared/constants/gameConstants.js';

// Log para debug - verificando a porta que está sendo usada
console.log(`Tentando conectar ao servidor na porta: ${SERVER.PORT}`);

// Configurações do cliente
// Força a conexão explicitamente usando a porta das constantes
const channel = geckos({ port: SERVER.PORT });

// Configurações do renderizador
const container = document.getElementById('game-container');
const width = window.innerWidth;
const height = window.innerHeight;

// Configuração básica do Three.js
let scene, camera, renderer;
let player; // Objeto do jogador
let playerId; // ID do jogador recebido do servidor

// Mapa de outros jogadores
const otherPlayers = new Map();

// Variáveis para o sistema de rotação com o mouse
let mousePosition = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let plane = null; // Referência para o plano do chão, será definido em initThree()
let lastRotationTime = 0; // Para limitar a frequência de envios de rotação

// Configura a cena Three.js
function initThree() {
  // Cria cena
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB); // Cor de céu azul claro
  
  // Cria câmera isométrica
  const aspectRatio = width / height;
  camera = new THREE.OrthographicCamera(
    -10 * aspectRatio, 10 * aspectRatio,
    10, -10,
    0.1, 1000
  );
  
  // Posiciona a câmera para vista isométrica
  camera.position.set(10, 10, 10);
  camera.lookAt(0, 0, 0);
  
  // Cria renderizador
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
  
  // Adiciona luz ambiente
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  // Adiciona luz direcional (como sol)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);
  
  // Adiciona grid para referência (temporário)
  const gridHelper = new THREE.GridHelper(20, 20);
  scene.add(gridHelper);
  
  // Cria um plano para o "chão"
  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const planeMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x90EE90,  // Verde claro
    side: THREE.DoubleSide
  });
  plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);
  
  // Responsividade
  window.addEventListener('resize', onWindowResize);
  
  // Eventos do mouse para rotação
  window.addEventListener('mousemove', onMouseMove);
}

// Cria representação visual do jogador
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
}

// Cria representação visual de outro jogador
function createOtherPlayer(id) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Vermelho
  
  const otherPlayer = new THREE.Mesh(geometry, material);
  scene.add(otherPlayer);
  
  // Posição inicial
  otherPlayer.position.set(0, 0.5, 0);
  
  // Adiciona indicador de direção
  const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4); // Cone mais longo
  const frontMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 }); // Amarelo
  const front = new THREE.Mesh(frontGeometry, frontMaterial);
  front.position.set(0, 0, 0.8);
  front.rotation.x = Math.PI / 2;
  otherPlayer.add(front);
  
  // Armazena referência ao objeto
  otherPlayers.set(id, otherPlayer);
}

// Trata redimensionamento da janela
function onWindowResize() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  const newAspectRatio = newWidth / newHeight;
  
  camera.left = -10 * newAspectRatio;
  camera.right = 10 * newAspectRatio;
  camera.updateProjectionMatrix();
  
  renderer.setSize(newWidth, newHeight);
}

// Captura a posição do mouse
function onMouseMove(event) {
  // Calcula a posição do mouse normalizada (-1 a 1)
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Sistema de entrada do usuário
const keys = {
  w: false,
  a: false,
  s: false,
  d: false
};

// Manipuladores de eventos de teclado
window.addEventListener('keydown', (e) => {
  if (e.key === 'w' || e.key === 'W') keys.w = true;
  if (e.key === 'a' || e.key === 'A') keys.a = true;
  if (e.key === 's' || e.key === 'S') keys.s = true;
  if (e.key === 'd' || e.key === 'D') keys.d = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'w' || e.key === 'W') keys.w = false;
  if (e.key === 'a' || e.key === 'A') keys.a = false;
  if (e.key === 's' || e.key === 'S') keys.s = false;
  if (e.key === 'd' || e.key === 'D') keys.d = false;
});

// Função para capturar input e enviar para o servidor
function handleMovementInput() {
  if (!player || !playerId) return;
  
  // Verifica teclas pressionadas
  const input = {
    up: keys.w,
    down: keys.s,
    left: keys.a,
    right: keys.d
  };
  
  // Determina direções relativas à câmera
  // Em uma câmera isométrica padrão:
  // - Tecla W (para cima) deve mover na direção (x-1, z-1)
  // - Tecla S (para baixo) deve mover na direção (x+1, z+1)
  // - Tecla A (para esquerda) deve mover na direção (x-1, z+1)
  // - Tecla D (para direita) deve mover na direção (x+1, z-1)
  
  // Enviamos as direções relativas à câmera, não as teclas absolutas
  const cameraRelativeInput = {
    forward: input.up,    // Movimento para "frente" da câmera
    backward: input.down, // Movimento para "trás" da câmera
    left: input.left,     // Movimento para a "esquerda" da câmera
    right: input.right    // Movimento para a "direita" da câmera
  };
  
  // Envia a intenção de movimento para o servidor, indicando que são entradas relativas à câmera
  try {
    // Só envia se alguma tecla estiver pressionada
    if (input.up || input.down || input.left || input.right) {
      channel.emit(EVENTS.PLAYER.MOVE, { 
        input: cameraRelativeInput,
        isRelativeToCamera: true  // Indica ao servidor que o movimento é relativo à câmera
      });
      
      // Rotação agora é calculada no servidor, não precisamos mais enviar daqui
    }
  } catch (error) {
    console.error('Erro ao enviar comando de movimento:', error);
  }
}

// Loop de renderização
function animate() {
  requestAnimationFrame(animate);
  
  // Captura e processa inputs
  handleMovementInput();
  // Não usamos mais handleRotation() pois a rotação agora é baseada no movimento
  
  renderer.render(scene, camera);
}

// Conexão ao servidor
channel.onConnect(error => {
  if (error) {
    console.error('Erro ao conectar ao servidor:', error);
    return;
  }
  
  console.log('Conectado ao servidor!');
  
  // Inicializa o Three.js após conectar ao servidor
  initThree();
  
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
  } catch (error) {
    console.error('Erro ao processar ID do jogador:', error);
  }
});

// Recebe atualizações de movimento de jogadores (incluindo o próprio jogador)
channel.on(EVENTS.PLAYER.MOVED, data => {
  try {
    // Verifica se os dados são válidos
    if (!data || !data.id || !data.position) {
      console.error('Dados de jogador inválidos:', data);
      return;
    }
    
    const otherPlayerId = data.id;
    
    // Tratamento diferente para o jogador local vs. outros jogadores
    if (otherPlayerId === playerId) {
      // Atualiza posição do jogador local
      if (player) {
        // Valida os valores antes de atualizar
        const x = Number(data.position.x) || 0;
        const y = Number(data.position.y) || 0;
        const z = Number(data.position.z) || 0;
        
        player.position.set(x, y, z);
        player.rotation.y = Number(data.rotation) || 0;
        
        // A câmera segue o jogador
        camera.position.x = player.position.x + 10;
        camera.position.z = player.position.z + 10;
        camera.lookAt(player.position);
      }
    } else {
      // Cria representação visual para novos jogadores
      if (!otherPlayers.has(otherPlayerId)) {
        createOtherPlayer(otherPlayerId);
      }
      
      // Atualiza a posição do outro jogador
      const otherPlayer = otherPlayers.get(otherPlayerId);
      if (otherPlayer) {
        // Valida os valores antes de atualizar
        const x = Number(data.position.x) || 0;
        const y = Number(data.position.y) || 0;
        const z = Number(data.position.z) || 0;
        
        otherPlayer.position.set(x, y, z);
        otherPlayer.rotation.y = Number(data.rotation) || 0;
      }
    }
  } catch (error) {
    console.error('Erro ao processar movimento de jogador:', error);
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
    
    if (otherPlayers.has(otherPlayerId)) {
      const otherPlayer = otherPlayers.get(otherPlayerId);
      
      // Remove da cena
      scene.remove(otherPlayer);
      
      // Remove do mapa
      otherPlayers.delete(otherPlayerId);
    }
  } catch (error) {
    console.error('Erro ao processar desconexão de jogador:', error);
  }
});

// Recebe informações sobre jogadores que já estavam conectados
channel.on(EVENTS.PLAYER.EXISTING, data => {
  try {
    // Verifica se os dados são válidos
    if (!data || !data.id || !data.position) {
      console.error('Dados de jogador existente inválidos:', data);
      return;
    }
    
    const existingPlayerId = data.id;
    console.log(`Jogador existente encontrado: ${existingPlayerId}`);
    
    // Ignora se for o jogador local (não deveria acontecer)
    if (existingPlayerId === playerId) return;
    
    // Cria representação visual para o jogador existente
    if (!otherPlayers.has(existingPlayerId)) {
      createOtherPlayer(existingPlayerId);
      
      // Atualiza a posição do jogador existente
      const otherPlayer = otherPlayers.get(existingPlayerId);
      if (otherPlayer) {
        // Valida os valores antes de atualizar
        const x = Number(data.position.x) || 0;
        const y = Number(data.position.y) || 0;
        const z = Number(data.position.z) || 0;
        
        otherPlayer.position.set(x, y, z);
        otherPlayer.rotation.y = Number(data.rotation) || 0;
      }
    }
  } catch (error) {
    console.error('Erro ao processar jogador existente:', error);
  }
});

// Recebe informações sobre novos jogadores que acabaram de se conectar
channel.on(EVENTS.PLAYER.JOINED, data => {
  try {
    // Verifica se os dados são válidos
    if (!data || !data.id || !data.position) {
      console.error('Dados de novo jogador inválidos:', data);
      return;
    }
    
    const newPlayerId = data.id;
    console.log(`Novo jogador entrou: ${newPlayerId}`);
    
    // Ignora se for o jogador local (não deveria acontecer)
    if (newPlayerId === playerId) return;
    
    // Cria representação visual para o novo jogador
    if (!otherPlayers.has(newPlayerId)) {
      createOtherPlayer(newPlayerId);
      
      // Define a posição inicial do novo jogador
      const otherPlayer = otherPlayers.get(newPlayerId);
      if (otherPlayer) {
        // Valida os valores antes de atualizar
        const x = Number(data.position.x) || 0;
        const y = Number(data.position.y) || 0;
        const z = Number(data.position.z) || 0;
        
        otherPlayer.position.set(x, y, z);
        otherPlayer.rotation.y = Number(data.rotation) || 0;
      }
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
    } else if (otherPlayers.has(playerIdReceived)) {
      const otherPlayer = otherPlayers.get(playerIdReceived);
      otherPlayer.rotation.y = rotation;
    }
  } catch (error) {
    console.error('Erro ao processar rotação de jogador:', error);
  }
}); 