// EntityManager.js
// Responsável por gerenciar as entidades do jogo (jogadores, monstros, objetos)
import * as THREE from 'three';
import { PlayerPresenter } from '../presenters/PlayerPresenter.js';
import { MonsterPresenter } from '../presenters/MonsterPresenter.js';
import { WorldObjectPresenter } from '../presenters/WorldObjectPresenter.js';
import { FloatingNameManager } from '../presenters/FloatingNameManager.js';
import { FloatingBarManager } from '../presenters/FloatingBarManager.js';
import { FloatingTextManager } from '../effects/FloatingTextManager.js';

export class EntityManager {
  constructor(scene, camera) {
    // Referências principais
    this.scene = scene;
    this.camera = camera;
    
    // Presenters
    this.playerPresenter = null;
    this.monsterPresenter = null;
    this.worldObjectPresenter = null;
    
    // Managers de UI
    this.floatingNameManager = null;
    this.floatingBarManager = null;
    this.floatingTextManager = null;
    
    // Referência ao jogador local
    this.localPlayerId = null;
    this.localPlayer = null;
    
    // Alvo selecionado
    this.selectedTargetId = null;
    this.selectedTargetType = null;
    this.selectedCircle = null;
    
    // Gerenciamento de raycaster para seleção
    this.raycaster = new THREE.Raycaster();
  }
  
  // Inicializa o gerenciador
  initialize() {
    // Inicializa os managers de UI
    this.initializeUIManagers();
    
    // Inicializa os presenters
    this.initializePresenters();
    
    return this;
  }
  
  // Inicializa os managers de UI
  initializeUIManagers() {
    // Cria gerenciador de nomes flutuantes
    const overlay = document.getElementById('overlay');
    this.floatingNameManager = new FloatingNameManager(overlay, this.camera);
    
    // Cria gerenciador de barras flutuantes
    this.floatingBarManager = new FloatingBarManager(document.body, this.camera);
    
    // Cria gerenciador de textos flutuantes
    this.floatingTextManager = new FloatingTextManager(this.scene, this.camera);
    
    return this;
  }
  
  // Inicializa os presenters
  initializePresenters() {
    // Inicializa os presenters com as referências corretas
    this.playerPresenter = new PlayerPresenter(this.scene, this.floatingBarManager);
    this.monsterPresenter = new MonsterPresenter(this.scene, this.floatingNameManager, this.floatingBarManager);
    this.worldObjectPresenter = new WorldObjectPresenter(this.scene);
    
    // PATCH: restaurar cor do monstro ao respawnar
    const oldUpdateMonster = this.monsterPresenter.updateMonster.bind(this.monsterPresenter);
    this.monsterPresenter.updateMonster = (monsterData) => {
      oldUpdateMonster(monsterData);
      const mesh = this.monsterPresenter.getMonster(monsterData.id);
      if (mesh && mesh.userData && mesh.userData._wasGray && monsterData.stats && monsterData.stats.hp > 0) {
        // Restaurar cor original do monstro
        this.removeGrayDeathEffect(mesh, 0xff0000); // Vermelho padrão para monstros
      }
    };
    
    return this;
  }
  
  // Define o ID do jogador local
  setLocalPlayerId(id) {
    this.localPlayerId = id;
    this.playerPresenter.setLocalPlayerId(id);
    // Garante que o mesh do player local seja registrado com o ID real
    if (this.localPlayer && this.playerPresenter && id) {
      this.playerPresenter.players.set(String(id), this.localPlayer);
    }
    return this;
  }
  
  // Cria o jogador local
  createLocalPlayer(position = { x: 0, y: 0.5, z: 0 }) {
    // Geometria e material para o jogador (temporário: cubo azul para o mago)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
    
    this.localPlayer = new THREE.Mesh(geometry, material);
    this.scene.add(this.localPlayer);
    
    // Posição inicial
    this.localPlayer.position.set(position.x, position.y, position.z);
    
    // Adiciona uma "frente" ao jogador para visualizar melhor a direção
    const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4); // Cone mais longo e mais visível
    const frontMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0, 0, 0.8); // Posiciona mais à frente do cubo
    front.rotation.x = Math.PI / 2; // Rotaciona para apontar para frente
    this.localPlayer.add(front); // Adiciona como filho do jogador
    
    // Inicializa targetPosition para interpolação
    this.localPlayer.targetPosition = this.localPlayer.position.clone();
    
    return this.localPlayer;
  }
  
  // Processa seleção de alvo com clique do mouse
  handleTargetSelection(event, hudManager) {
    // Calcula posição do mouse normalizada
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(mouse, this.camera);
    
    // Checa monstros primeiro
    let found = false;
    
    // Tenta encontrar monstros
    for (const [id, mesh] of this.monsterPresenter.monsters.entries()) {
      const intersects = this.raycaster.intersectObject(mesh, true);
      if (intersects.length > 0) {
        // Verifica se o monstro está morto
        if (mesh.userData._wasGray) continue;
        
        this.selectedTargetId = id;
        this.selectedTargetType = 'monster';
        this.highlightTarget(mesh);
        found = true;
        
        // Atualiza HUD
        const monster = this.monsterPresenter.getMonsterData(id);
        if (monster) this.updateTargetHUD(this.formatTargetForHUD(monster, 'monster'), hudManager);
        
        break;
      }
    }
    
    // Se não encontrou monstro, procura por jogadores
    if (!found) {
      for (const [id, mesh] of this.playerPresenter.players.entries()) {
        const intersects = this.raycaster.intersectObject(mesh, true);
        if (intersects.length > 0) {
          // Se clicou no próprio player, remove o alvo
          if (id === this.localPlayerId) {
            this.selectedTargetId = null;
            this.selectedTargetType = null;
            this.highlightTarget(null);
            this.updateTargetHUD(null, hudManager);
          } else {
            this.selectedTargetId = id;
            this.selectedTargetType = 'player';
            this.highlightTarget(mesh);
            
            // Atualiza HUD
            const playerData = this.playerPresenter.getPlayerData(id);
            if (playerData) this.updateTargetHUD(this.formatTargetForHUD(playerData, 'player'), hudManager);
          }
          found = true;
          break;
        }
      }
    }
    
    return found ? { id: this.selectedTargetId, type: this.selectedTargetType } : null;
  }
  
  // Limpa o alvo selecionado
  clearTarget(hudManager) {
    this.selectedTargetId = null;
    this.selectedTargetType = null;
    this.highlightTarget(null);
    this.updateTargetHUD(null, hudManager);
  }
  
  // Destaca visualmente o alvo selecionado
  highlightTarget(mesh) {
    if (this.selectedCircle && this.scene) {
      this.selectedCircle.children.forEach(c => {
        c.geometry.dispose();
        c.material.dispose();
      });
      this.scene.remove(this.selectedCircle);
      this.selectedCircle = null;
    }
    if (!mesh || !this.scene) return;

    const group = new THREE.Group();
    const bbox = new THREE.Box3().setFromObject(mesh);
    const size = new THREE.Vector3();
    bbox.getSize(size);
    const maxSize = Math.max(size.x, size.z);
    const scale = maxSize * 0.7;

    const createRing = (inner, outer, color, speed, segments = 64, dash = false) => {
      const geometry = new THREE.RingGeometry(inner, outer, segments);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(color) },
          speed: { value: speed },
          dash: { value: dash ? 1 : 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float speed;
          uniform int dash;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv - 0.5;
            float angle = atan(uv.y, uv.x);
            float dist = length(uv);

            if (dash == 1) {
              float seg = mod((angle + time * speed), 6.2831852) * 10.0;
              if (mod(floor(seg), 2.0) < 1.0) discard;
            }

            float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.scale.set(scale, scale, scale);
      group.add(mesh);

      return mesh;
    };

    const ring1 = createRing(0.95, 1.1, '#80ff00', 0.5, 64, true);   // externo com dash
    const ring2 = createRing(0.85, 1, '#8844ff', -0.3);            // interno girando contrário
    const ring3 = createRing(0.75, 0.9, '#ffffff', 0.2);             // fixo

    group.position.set(mesh.position.x, mesh.position.y + 0.01, mesh.position.z);
    group.renderOrder = 999;
    this.scene.add(group);
    this.selectedCircle = group;

    // Para animar depois
    this.rotatingRings = [ring1, ring2, ring3];
  }
  
  
  // Verifica e limpa alvos inválidos
  clearTargetIfInvalid(hudManager) {
    if (!this.selectedTargetId) return;
    
    // Se não recebeu um hudManager, tenta buscar na window
    if (!hudManager) {
      hudManager = window.hudManager;
    }
    
    if (this.selectedTargetType === 'monster') {
      const monsterExists = this.monsterPresenter.monsters.has(this.selectedTargetId);
      if (!monsterExists) {
        this.clearTarget(hudManager);
      }
    } else if (this.selectedTargetType === 'player') {
      const playerExists = this.playerPresenter.players.has(this.selectedTargetId);
      if (!playerExists) {
        this.clearTarget(hudManager);
      }
    }
  }
  
  // Atualiza a posição do círculo do alvo
  updateTargetOutline() {
    if (this.selectedCircle && this.selectedTargetId) {
      let mesh = null;
      if (this.selectedTargetType === 'monster') {
        mesh = this.monsterPresenter.getMonster(this.selectedTargetId);
      } else if (this.selectedTargetType === 'player') {
        mesh = this.playerPresenter.getPlayer(this.selectedTargetId);
      }
      if (mesh) {
        this.selectedCircle.position.set(mesh.position.x, mesh.position.y + 0.01, mesh.position.z);
        // (Opcional) Atualizar escala se o mesh mudou de tamanho
        const bbox = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        bbox.getSize(size);
        const maxSize = Math.max(size.x, size.z);
        this.selectedCircle.scale.set(maxSize * 0.7, maxSize * 0.7, maxSize * 0.7);
      }
    }
  }
  
  // Formata dados de alvo para a HUD
  formatTargetForHUD(data, type) {
    if (!data) return null;
    
    const stats = data.stats || {};
    let hp = Number(stats.hp ?? data.hp ?? 0);
    let maxHp = Number(stats.maxHp ?? data.maxHp ?? 100);
    let name = data.name || data.monsterType || '???';
    
    // Correção para garantir que HP seja válido
    if (isNaN(hp)) hp = 0;
    if (isNaN(maxHp) || maxHp <= 0) maxHp = 100;
    
    if (type === 'monster' && data.monsterType) {
      const MONSTERS = this.getMonsterTypeConstants();
      if (MONSTERS && MONSTERS[data.monsterType]) {
        name = MONSTERS[data.monsterType].NAME;
      }
    }
    
    console.log('[DEBUG] Formatando alvo para HUD:', type, data.id, 'HP:', hp, '/', maxHp);
    
    return {
      id: data.id,
      type,
      name,
      hp: hp,
      maxHp: maxHp,
      energy: stats.mana || data.energy || 0,
      maxEnergy: stats.maxMana || data.maxEnergy || 0,
      status: [
        ...(data.status?.slowedUntil && data.status.slowedUntil > Date.now()
          ? [{ icon: '❄️', alt: 'Slow', tooltip: 'Lento (movimento reduzido)' }]
          : [])
        // Outros status podem ser adicionados aqui
      ]
    };
  }
  
  // Obtém as constantes de tipos de monstros do servidor
  getMonsterTypeConstants() {
    // Isso deve ser injetado externamente ou importado das constantes compartilhadas
    return window.MONSTERS || {};
  }
  
  // Atualiza a HUD do alvo
  updateTargetHUD(target, hudManager) {
    // Se não recebeu um hudManager, tenta buscar na window
    if (!hudManager) {
      hudManager = window.hudManager;
    }
    
    const hud = document.querySelector('.target-ui');
    
    // Se não tiver alvo, esconde o HUD
    if (!hud || !target) {
      if (hud) hud.style.display = 'none';
      return;
    }
    
    console.log('[DEBUG] Atualizando HUD do alvo:', target.name, 'HP:', target.hp, '/', target.maxHp);
    
    // NOVA VERIFICAÇÃO: Se HP = 0, limpa o alvo e esconde o HUD imediatamente
    // (exceto se for o jogador local)
    if (target.hp <= 0 && !(target.type === 'player' && target.id === this.localPlayerId)) {
      // Limpa a seleção do alvo
      this.clearTarget(hudManager);
      return;
    }
    
    // Se chegou aqui, exibe e atualiza o HUD
    hud.style.display = 'block';
    hud.querySelector('.target-icon').textContent = target.type === 'player' ? '👤' : '👹';
    hud.querySelector('.target-name').textContent = target.name;
    
    // Vida
    const hpPercent = Math.max(0, Math.min(100, (target.hp / target.maxHp) * 100));
    hud.querySelector('.hp-fill').style.width = hpPercent + '%';
    hud.querySelector('.hp-text').textContent = `${Math.max(0, target.hp)} / ${target.maxHp}`;
    
    // Mana/energia
    const manaBar = hud.querySelector('.mana-bar');
    if (target.maxEnergy) {
      manaBar.style.display = 'block';
      const manaPercent = Math.max(0, Math.min(100, (target.energy / target.maxEnergy) * 100));
      hud.querySelector('.mana-fill').style.width = manaPercent + '%';
      hud.querySelector('.mana-text').textContent = `${Math.max(0, target.energy)} / ${target.maxEnergy}`;
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
  
  // Processa entidades no mundo a partir da inicialização
  processWorldInit(data) {
    // Processa objetos do mundo
    if (data.worldObjects && data.worldObjects.length > 0) {
      console.log(`[WORLD] Processando ${data.worldObjects.length} objetos do mundo`);
      data.worldObjects.forEach(object => {
        this.worldObjectPresenter.updateWorldObject(object);
      });
      if (this.worldObjectPresenter.optimizeSceneWithInstancing) {
        console.log('[WORLD] Aplicando otimizações de renderização...');
        this.worldObjectPresenter.optimizeSceneWithInstancing();
      }
    }
    // Processa monstros
    if (data.monsters && data.monsters.length > 0) {
      console.log(`Inicializando ${data.monsters.length} monstros`);
      for (const monsterData of data.monsters) {
        if (monsterData && monsterData.id) {
          this.monsterPresenter.updateMonster(monsterData);
        }
      }
    }
    // --- INTEGRAÇÃO LABELS DE SPOT E BOSS ---
    // Mapeamento de spots para nomes/níveis (ajuste conforme necessário)
    const monsterData = {
      spot1: { nome: 'Zumbi da Névoa Negra', nivel: 8 },
      spot2: { nome: 'Aranha Sombria', nivel: 10 },
      spot3: { nome: 'Zumbi da Névoa Negra', nivel: 12 },
      spot4: { nome: 'Aranha Sombria', nivel: 14 },
      spot5: { nome: 'Zumbi da Névoa Negra', nivel: 16 },
      spot6: { nome: 'Aranha Sombria', nivel: 18 },
      spot7: { nome: 'Zumbi da Névoa Negra', nivel: 20 }
    };
    const bossData = { nome: 'Guardião da Areia', nivel: 25 };
    // Importa WORLD das constantes (assume import global ou window.WORLD)
    const worldConfig = window.WORLD || (typeof WORLD !== 'undefined' ? WORLD : {});
    if (this.worldObjectPresenter.createSpotAndBossLabels) {
      this.worldObjectPresenter.createSpotAndBossLabels(worldConfig, monsterData, bossData);
    }
  }
  
  // Processa atualizações do mundo (não binárias)
  processWorldUpdate(data) {
    // Processa monstros
    if (data.monsters && Array.isArray(data.monsters)) {
      console.log('[DEBUG] processWorldUpdate: Recebidos', data.monsters.length, 'monstros');
      for (const monsterData of data.monsters) {
        if (monsterData && monsterData.id) {
          console.log('[DEBUG] Atualizando/Criando monstro:', monsterData.id, monsterData.position);
          this.monsterPresenter.updateMonster(monsterData);

          // Atualiza HUD se este monstro for o alvo selecionado
          if (this.selectedTargetId === monsterData.id && this.selectedTargetType === 'monster') {
            this.updateTargetHUD(this.formatTargetForHUD(monsterData, 'monster'), window.hudManager);
          }
        }
      }
      // Limpa monstros obsoletos
      this.monsterPresenter.pruneStaleMonsters();
    }
    
    // Processa objetos do mundo
    if (data.worldObjects && Array.isArray(data.worldObjects)) {
      for (const objectData of data.worldObjects) {
        if (objectData && objectData.id) {
          this.worldObjectPresenter.updateWorldObject(objectData);
        }
      }
    }
    
    // Processa jogadores
    if (data.players && Array.isArray(data.players)) {
      for (const playerData of data.players) {
        if (playerData && playerData.id) {
          this.playerPresenter.updatePlayer(playerData);

          // Atualiza HUD se este player for o alvo selecionado
          if (this.selectedTargetId === playerData.id && this.selectedTargetType === 'player') {
            this.updateTargetHUD(this.formatTargetForHUD(playerData, 'player'), window.hudManager);
          }
        }
      }
    }
  }
  
  // Processa atualizações binárias do mundo
  processBinaryWorldUpdate(data) {
    // Atualiza objetos do mundo
    if (this.worldObjectPresenter && data.worldObjects) {
      for (const o of data.worldObjects) {
        this.worldObjectPresenter.updateWorldObject({
          id: String(o.id),
          type: o.type,
          position: { x: o.position.x, y: 0, z: o.position.z },
          rotation: o.rotation,
          status: o.status
        });
      }
      
      // Remove objetos do mundo que não vieram no update (saíram do alcance)
      const receivedIds = new Set(data.worldObjects.map(o => String(o.id)));
      for (const id of this.worldObjectPresenter.worldObjects.keys()) {
        if (!receivedIds.has(id)) {
          this.worldObjectPresenter.removeWorldObject(id);
        }
      }
    }
    
    // Atualiza jogadores próximos
    if (this.playerPresenter && data.players) {
      for (const pl of data.players) {
        if (Number(pl.id) === Number(this.localPlayerId)) continue; // Não atualiza o player local!
        
        this.playerPresenter.updateExistingPlayer(String(pl.id), {
          position: { x: pl.position.x, z: pl.position.z },
          rotation: pl.rotation,
          stats: { hp: pl.stats.hp, mana: pl.stats.mana },
          level: pl.level
        });
      }
    }
  }
  
  // Processa morte de monstro
  processMonsterDeath(data) {
    if (!data || !data.id) return;
    
    const mesh = this.monsterPresenter.getMonster(data.id);
    if (mesh) {
      this.applyGrayDeathEffect(mesh);
      
      // Se o monstro morto for o alvo selecionado, atualizar HUD para vida 0
      if (this.selectedTargetId === data.id && this.selectedTargetType === 'monster') {
        const targetData = this.monsterPresenter.getMonsterData(data.id);
        if (targetData) {
          targetData.stats = targetData.stats || {};
          targetData.stats.hp = 0;
          this.updateTargetHUD(this.formatTargetForHUD(targetData, 'monster'), null);
        }
      }
    }
    
    // Remove o corpo do monstro após um curto delay (para animações)
    setTimeout(() => {
      this.monsterPresenter.removeMonster(data.id);
      
      if (this.selectedTargetId === data.id && this.selectedTargetType === 'monster') {
        this.clearTarget(null);
      }
    }, 2000);
  }
  
  // Mostra texto flutuante para dano
  showFloatingDamage(targetMesh, damage, color = '#ff0000') {
    console.log('[DEBUG] Tentando mostrar dano flutuante:', damage, 'para mesh:', targetMesh && targetMesh.userData ? targetMesh.userData.id : 'Unknown');
    
    if (!targetMesh) {
      console.log('[DEBUG] Falha: targetMesh é null ou undefined');
      return;
    }
    
    if (!this.floatingTextManager) {
      console.log('[DEBUG] Falha: floatingTextManager não está inicializado');
      return;
    }
    
    try {
      // Posição acima do alvo
      const worldPos = targetMesh.getWorldPosition(new THREE.Vector3());
      console.log('[DEBUG] Posição do alvo:', worldPos.x.toFixed(2), worldPos.y.toFixed(2), worldPos.z.toFixed(2));
      
      this.floatingTextManager.createFloatingText({
        text: `-${Number(damage).toFixed(1)}`,
        position: { x: worldPos.x, y: worldPos.y + 2.2, z: worldPos.z },
        color: color,
        size: 1,
        duration: 1600,
        fadeOut: true,
        type: 'damage'
      });
      
      console.log('[DEBUG] Texto flutuante de dano criado com sucesso');
    } catch (error) {
      console.error('[DEBUG] Erro ao criar texto flutuante:', error);
    }
  }
  
  // Aplica efeito cinza para entidades mortas
  applyGrayDeathEffect(mesh) {
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
  
  // Remove efeito cinza
  removeGrayDeathEffect(mesh, originalColor = 0x0000ff) {
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
  
  // Atualiza todos os managers que precisam de update por frame
  update(delta = 0.016) { // delta opcional (16ms/frame)
    // Atualiza posições interpoladas dos outros jogadores
    if (this.playerPresenter && this.playerPresenter.updatePositions) {
      this.playerPresenter.updatePositions(delta);
    }
    
    // Atualiza posições interpoladas dos monstros
    if (this.monsterPresenter && this.monsterPresenter.updatePositions) {
      this.monsterPresenter.updatePositions(delta);
    }
    
    // Atualiza os textos flutuantes
    if (this.floatingTextManager) {
      this.floatingTextManager.update(delta);
    }
    
    // Atualiza o sistema de otimização do renderizador
    if (this.worldObjectPresenter && this.worldObjectPresenter.updateRenderer && this.camera) {
      this.worldObjectPresenter.updateRenderer(delta, this.camera.position);
    }
    
    // Se temos um jogador local, atualiza a luz para seguir o jogador
    if (this.localPlayer && this.worldObjectPresenter) {
      this.worldObjectPresenter.updateLightPosition(this.localPlayer.position);
    }
    
    // Atualiza os nomes flutuantes
    if (this.floatingNameManager) {
      this.floatingNameManager.updateAll(window.innerWidth, window.innerHeight);
    }
    
    // Atualiza as barras flutuantes
    if (this.floatingBarManager) {
      this.floatingBarManager.updateAll(window.innerWidth, window.innerHeight);
    }
    
    // Atualiza o jogador local (interpolação de posição)
    if (this.localPlayer && this.localPlayer.targetPosition) {
      this.localPlayer.position.lerp(this.localPlayer.targetPosition, 0.25);
    }
    
    // Atualiza a posição e animação do círculo do alvo selecionado
    if (this.selectedCircle && this.selectedTargetId) {
      let mesh = null;
      if (this.selectedTargetType === 'monster') {
        mesh = this.monsterPresenter.getMonster(this.selectedTargetId);
        
        // Atualiza a HUD periodicamente (a cada 250ms)
        if (mesh && (!this._lastTargetHudUpdate || Date.now() - this._lastTargetHudUpdate > 250)) {
          const monsterData = this.monsterPresenter.getMonsterData(this.selectedTargetId);
          if (monsterData) {
            this.updateTargetHUD(this.formatTargetForHUD(monsterData, 'monster'), window.hudManager);
            this._lastTargetHudUpdate = Date.now();
          }
        }
      } else if (this.selectedTargetType === 'player') {
        mesh = this.playerPresenter.getPlayer(this.selectedTargetId);
        
        // Atualiza a HUD periodicamente (a cada 250ms)
        if (mesh && (!this._lastTargetHudUpdate || Date.now() - this._lastTargetHudUpdate > 250)) {
          const playerData = this.playerPresenter.getPlayerData(this.selectedTargetId);
          if (playerData) {
            this.updateTargetHUD(this.formatTargetForHUD(playerData, 'player'), window.hudManager);
            this._lastTargetHudUpdate = Date.now();
          }
        }
      }
      if (mesh) {
        this.selectedCircle.position.copy(mesh.position);
      }

      // Atualiza rotação/tempo
      const t = performance.now() * 0.001;
      if (this.rotatingRings) {
        this.rotatingRings.forEach(ring => {
          ring.material.uniforms.time.value = t;
        });
      }
    }
    
    this.clearTargetIfInvalid();
  }
  
  // Limpa todos os dados (usado ao desconectar)
  clear() {
    // Remove o jogador local
    if (this.localPlayer) {
      this.scene.remove(this.localPlayer);
      this.localPlayer = null;
    }
    
    // Limpa todos os jogadores
    if (this.playerPresenter) {
      this.playerPresenter.clearAllPlayers();
    }
    
    // Limpa todos os monstros
    if (this.monsterPresenter) {
      this.monsterPresenter.clearAllMonsters();
    }
    
    // Limpa todos os objetos do mundo
    if (this.worldObjectPresenter) {
      this.worldObjectPresenter.clearAllWorldObjects();
    }
    
    // Limpa o alvo selecionado
    this.clearTarget(null);
    
    return this;
  }
  
  // Atualiza a HUD do alvo quando ele sofre dano
  updateTargetHUDForDamage(data) {
    if (!this.selectedTargetId || !this.selectedTargetType) return;
    
    // Verifica se o alvo atingido é o alvo selecionado
    if (this.selectedTargetId === data.targetId && this.selectedTargetType === data.targetType) {
      console.log('[DEBUG] Atualizando HUD para alvo danificado:', data.targetId, 'Dano:', data.damage, 'HP restante:', data.remainingHp);
      
      let targetData = null;
      if (data.targetType === 'monster') {
        // Obter os dados do monstro
        targetData = this.monsterPresenter.getMonsterData(data.targetId) || {};
        
        // Garantir que os dados básicos estejam presentes
        targetData.id = data.targetId;
        targetData.monsterType = targetData.monsterType || data.monsterType;
        targetData.stats = targetData.stats || {};
        
        // Atualiza o HP com base nos dados do evento de dano
        targetData.stats.hp = data.remainingHp !== undefined ? data.remainingHp : targetData.stats.hp - data.damage;
        targetData.stats.maxHp = data.maxHp || targetData.stats.maxHp;
        
        // Atualiza a HUD
        this.updateTargetHUD(this.formatTargetForHUD(targetData, 'monster'), window.hudManager);
      } 
      else if (data.targetType === 'player') {
        // Obter os dados do jogador
        targetData = this.playerPresenter.getPlayerData(data.targetId) || {};
        
        // Garantir que os dados básicos estejam presentes
        targetData.id = data.targetId;
        targetData.stats = targetData.stats || {};
        
        // Atualiza o HP com base nos dados do evento de dano
        targetData.stats.hp = data.remainingHp !== undefined ? data.remainingHp : targetData.stats.hp - data.damage;
        targetData.stats.maxHp = data.maxHp || targetData.stats.maxHp;
        targetData.stats.mana = data.remainingMana || targetData.stats.mana;
        targetData.stats.maxMana = data.maxMana || targetData.stats.maxMana;
        targetData.name = targetData.name || data.name;
        
        // Atualiza a HUD
        this.updateTargetHUD(this.formatTargetForHUD(targetData, 'player'), window.hudManager);
      }
      
      // Armazena o último momento que atualizamos a HUD
      this._lastTargetHudUpdate = Date.now();
    }
  }
} 