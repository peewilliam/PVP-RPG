import * as THREE from 'three';
import { Monsters } from './entities/index.js';
import { MONSTERS } from '../../../shared/constants/gameConstants.js';
import { FloatingNameManager } from './FloatingNameManager.js';
import { FloatingBarManager } from './FloatingBarManager.js';

/**
 * Presenter responsável por renderizar e gerenciar monstros no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */
export class MonsterPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os monstros serão renderizados
   * @param {FloatingNameManager} floatingNameManager - Gerenciador de nomes flutuantes
   * @param {FloatingBarManager} floatingBarManager - Gerenciador de barras flutuantes
   */
  constructor(scene, floatingNameManager, floatingBarManager) {
    this.scene = scene;
    this.monsters = new Map(); // Map para armazenar todos os monstros ativos por ID
    this.lastResetTime = Date.now(); // Timestamp da última limpeza completa
    this.floatingNameManager = floatingNameManager;
    this.floatingBarManager = floatingBarManager;
  }

  /**
   * Atualiza ou cria monstros recebidos do servidor
   * @param {Object} data - Dados do monstro
   */
  updateMonster(data) {
    // Log detalhado para dados de monstros com escala
    if (data.scale) {
      console.log(`[CLIENT] Recebendo monstro ${data.id} (${data.monsterType}) com escala:`, data.scale);
    }
    
    // Verifica se o monstro já existe
    const monster = this.monsters.get(String(data.id));
    
    // Se não existir ou se o tipo mudou, cria um novo
    if (!monster || (data.monsterType && monster.userData.monsterType !== data.monsterType)) {
      this.createMonster(data.id, data);
      return;
    }
    
    // Atualiza monstro existente
    this.updateExistingMonster(data.id, data);
  }

  /**
   * Cria uma representação visual para um novo monstro
   * @param {string} id - ID único do monstro
   * @param {Object} data - Dados do monstro
   */
  createMonster(id, data) {
    id = String(id);
    // Remove monstro antigo se já existir
    if (this.monsters.has(id)) {
      this.removeMonster(id);
    }
    let monster;
    console.log(data.monsterType)
    // Usa o tipo recebido (data.monsterType) para criar a geometria correta
    const monsterType = data.monsterType || 'BLACK_MIST_ZOMBIE';
    if (monsterType === 'BLACK_MIST_ZOMBIE') {
      monster = Monsters.createBlackMistZombieVisual();
    } else if (monsterType === 'SPIDER') {
      monster = Monsters.createSpiderVisual();
    } else {
      // Fallback para outros tipos (placeholder antigo)
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      monster = new THREE.Mesh(geometry, material);
      // Adiciona um indicador de direção (cone)
      const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4);
      const frontMaterial = new THREE.MeshStandardMaterial({ color: 0xff7700 });
      const front = new THREE.Mesh(frontGeometry, frontMaterial);
      front.position.set(0, 0, 0.8);
      front.rotation.x = Math.PI / 2;
      monster.add(front);
    }
    // Adiciona à cena
    this.scene.add(monster);
    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    monster.position.set(
      Number(position.x) || 0,
      Number(position.y) || 0.5, // Um pouco acima do chão
      Number(position.z) || 0
    );
    // Aplica escala se fornecida
    if (data.scale && typeof data.scale === 'object') {
      monster.scale.set(
        Number(data.scale.x) || 1,
        Number(data.scale.y) || 1,
        Number(data.scale.z) || 1
      );
    } else {
      monster.scale.set(1, 1, 1);
    }
    // Armazena metadados junto com a mesh
    monster.userData = {
      id: id,
      type: 'monster',
      monsterType: monsterType,
      stats: data.stats || {},
      level: data.level || 1,
      created: Date.now(),
      lastUpdated: Date.now(),
      scale: data.scale || null // Armazena a escala nos metadados para uso futuro
    };
    // Armazena referência ao objeto
    this.monsters.set(id, monster);
    // Adiciona nome flutuante sempre que criar um monstro
    if (this.floatingNameManager) {
      const name = MONSTERS[monsterType]?.NAME || monsterType;
      this.floatingNameManager.addName(id, this.monsters.get(id), name);
    }
    // Adiciona barra de vida
    if (this.floatingBarManager) {
      const monsterStats = data.stats || {};
      this.floatingBarManager.addBar(
        id,
        this.monsters.get(id),
        'monster',
        MONSTERS[monsterType]?.NAME || monsterType || id
      );
      this.floatingBarManager.updateBar(id, {
        hp: monsterStats.hp ?? 1,
        maxHp: monsterStats.maxHp ?? 1
      });
    }
    // console.log(`Monstro criado: ${id}, tipo: ${monster.userData.monsterType}`);
  }

  /**
   * Atualiza um monstro existente com novos dados
   * @param {string|number} id - ID do monstro
   * @param {Object} data - Novos dados do monstro
   */
  updateExistingMonster(id, data) {
    id = String(id);
    let monster = this.monsters.get(id);
    if (!monster) {
      console.log('[DEBUG] Criando novo monstro:', id, data.position);
      this.createMonster(id, data);
      monster = this.monsters.get(id);
      if (!monster) return;
    }
    // Atualiza tipo se necessário
    if (data.monsterType && monster.userData.monsterType !== data.monsterType) {
      this.createMonster(id, data);
      monster = this.monsters.get(id);
      if (!monster) return;
    }
    // Atualiza posição alvo para interpolação
    if (data.position) {
      if (!monster.targetPosition) {
        monster.targetPosition = new THREE.Vector3();
      }
      monster.targetPosition.set(
        Number(data.position.x) || monster.position.x,
        Number(data.position.y) || monster.position.y,
        Number(data.position.z) || monster.position.z
      );
      // console.log('[DEBUG] Monstro', id, 'targetPosition atualizada para', monster.targetPosition.x, monster.targetPosition.y, monster.targetPosition.z);
    }
    // Atualiza rotação se fornecida
    if (data.rotation !== undefined) {
      monster.rotation.y = Number(data.rotation) || monster.rotation.y;
    }
    // Atualiza escala se fornecida
    if (data.scale && typeof data.scale === 'object') {
      monster.scale.set(
        Number(data.scale.x) || 1,
        Number(data.scale.y) || 1,
        Number(data.scale.z) || 1
      );
      monster.userData.scale = data.scale; // Atualiza a escala nos metadados
    }
    // Atualiza stats
    if (data.stats) {
      monster.userData.stats = {
        ...monster.userData.stats,
        ...data.stats
      };
    }
    // Atualiza level
    if (data.level !== undefined) {
      monster.userData.level = data.level;
    }
    // Atualiza visibilidade
    if (data.active !== undefined) {
      monster.visible = data.active;
    }
    // Marca timestamp
    monster.userData.lastUpdated = Date.now();
    // Atualiza barra de vida
    if (this.floatingBarManager && data.stats) {
      this.floatingBarManager.updateBar(id, {
        hp: data.stats.hp ?? monster.userData.stats.maxHp ?? 1,
        maxHp: data.stats.maxHp ?? monster.userData.stats.maxHp ?? 1
      });
    }
  }

  /**
   * Remove um monstro da cena
   * @param {string} id - ID do monstro a ser removido
   */
  removeMonster(id) {
    id = String(id);
    if (!this.monsters.has(id)) return;
    const monster = this.monsters.get(id);
    this.scene.remove(monster);
    // Zera a barra de vida antes de remover
    if (this.floatingBarManager) {
      this.floatingBarManager.updateBar(id, {
        hp: 0,
        maxHp: monster.userData.stats.maxHp ?? 1
      });
      this.floatingBarManager.removeBar(id);
    }
    this.monsters.delete(id);
    if (this.floatingNameManager) {
      this.floatingNameManager.removeName(id);
    }
    console.log(`Monstro removido: ${id}`);
  }

  /**
   * Obtém a referência a um monstro pelo ID
   * @param {string} id - ID do monstro
   * @returns {THREE.Object3D|null} - Referência ao objeto 3D ou null se não existir
   */
  getMonster(id) {
    return this.monsters.get(String(id)) || null;
  }

  /**
   * Limpa todos os monstros da cena
   */
  clearAllMonsters() {
    console.log(`Limpando todos os monstros. Total antes: ${this.monsters.size}`);
    for (const id of this.monsters.keys()) {
      this.removeMonster(id);
    }
    this.lastResetTime = Date.now();
    console.log('Todos os monstros foram removidos.');
  }

  /**
   * Remover monstros que não foram atualizados recentemente
   * @param {number} olderThanMs - Tempo em milissegundos, monstros mais antigos que isso serão removidos
   */
  pruneStaleMonsters(olderThanMs = 15000) {
    const now = Date.now();
    const staleIds = [];
    
    // Identifica monstros obsoletos
    for (const [id, monster] of this.monsters.entries()) {
      if (!monster.userData.lastUpdated || 
          now - monster.userData.lastUpdated > olderThanMs) {
        staleIds.push(id);
      }
    }
    
    // Remove os monstros obsoletos
    if (staleIds.length > 0) {
      console.log(`Removendo ${staleIds.length} monstros obsoletos`);
      staleIds.forEach(id => this.removeMonster(id));
    }
  }

  /**
   * Retorna os dados completos do monstro selecionado
   * @param {string} id - ID do monstro
   * @returns {Object|null} - Dados do monstro (userData + status) ou null
   */
  getMonsterData(id) {
    const mesh = this.getMonster(id);
    if (!mesh) return null;
    // Retorna userData + status (se existir)
    return {
      ...mesh.userData,
      status: mesh.userData.status || {},
    };
  }

  updateBar(id, { hp, maxHp }) {
    const mesh = this.getMonster(id);
    // Se o monstro está morto, sempre zere a barra
    if (mesh && mesh.userData && mesh.userData._wasGray) {
      hp = 0;
    }
    // ... resto do código ...
  }

  /**
   * Atualiza as posições interpoladas dos monstros
   * @param {number} deltaTime - Tempo em segundos desde o último frame
   */
  updatePositions(deltaTime) {
    // Se não existem monstros, não há o que atualizar
    if (!this.monsters || this.monsters.size === 0) return;
    
    // Para cada monstro, verifica se precisa atualizar posição
    for (const [id, monster] of this.monsters.entries()) {
      // Verifica se o monstro tem uma posição alvo definida
      if (monster.targetPosition) {
        // Só mostra logs a cada ~1 segundo (não em cada frame)
        const shouldLog = Math.random() < 0.01; // ~1% de chance por frame
        
        // Calcula a distância atual para a posição alvo
        const distance = monster.position.distanceTo(monster.targetPosition);
        
        // Se já chegou próximo o suficiente da posição alvo, não continua interpolando
        if (distance < 0.01) {
          monster.position.copy(monster.targetPosition);
          continue;
        }
        
        // Interpola a posição atual em direção à posição alvo
        // Ajusta o fator de interpolação com base na distância - movimento mais rápido para distâncias maiores
        const lerpFactor = Math.min(0.1 * (1 + distance * 2), 0.3);
        monster.position.lerp(monster.targetPosition, lerpFactor);
        
        // Debug: mostra a posição sendo interpolada (com taxa reduzida)
        if (shouldLog) {
          // console.log(`[DEBUG] Monstro ${id} movendo para X:${monster.targetPosition.x.toFixed(2)}, Z:${monster.targetPosition.z.toFixed(2)}, Distância: ${distance.toFixed(2)}`);
        }
      }
    }
  }
} 