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
   * Cria ou atualiza um monstro baseado nos dados recebidos do servidor
   * @param {Object} monsterData - Dados do monstro vindos do servidor
   */
  updateMonster(monsterData) {
    if (!monsterData || !monsterData.id) {
      console.error('Dados de monstro inválidos:', monsterData);
      return;
    }

    const monsterId = monsterData.id;

    // Se o monstro já existe, apenas atualiza sua posição e rotação
    if (this.monsters.has(monsterId)) {
      this.updateExistingMonster(monsterId, monsterData);
    } else {
      // Caso contrário, cria uma nova representação visual
      this.createMonster(monsterId, monsterData);
    }
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
    if (data.monsterType === 'BLACK_MIST_ZOMBIE') {
      monster = Monsters.createBlackMistZombieVisual();
    } else if (data.monsterType === 'SPIDER') {
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

    // Armazena metadados junto com a mesh
    monster.userData = {
      id: id,
      type: 'monster',
      monsterType: data.monsterType || 'unknown',
      stats: data.stats || {},
      level: data.level || 1,
      created: Date.now(),
      lastUpdated: Date.now()
    };

    // Armazena referência ao objeto
    this.monsters.set(id, monster);
    // Adiciona nome flutuante sempre que criar um monstro
    if (this.floatingNameManager) {
      const monsterType = data.monsterType || 'BLACK_MIST_ZOMBIE';
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
        MONSTERS[data.monsterType]?.NAME || data.monsterType || id
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
   * @param {string} id - ID do monstro
   * @param {Object} data - Novos dados do monstro
   */
  updateExistingMonster(id, data) {
    id = String(id);
    const monster = this.monsters.get(id);
    if (!monster) return;
    
    // Atualiza posição se fornecida
    if (data.position) {
      monster.position.set(
        Number(data.position.x) || monster.position.x,
        Number(data.position.y) || monster.position.y,
        Number(data.position.z) || monster.position.z
      );
    }
    
    // Atualiza rotação se fornecida
    if (data.rotation !== undefined) {
      monster.rotation.y = Number(data.rotation) || monster.rotation.y;
    }
    
    // Atualiza stats de forma incremental
    if (data.stats) {
      monster.userData.stats = {
        ...monster.userData.stats,
        ...data.stats
      };
    }

    // Atualiza level se fornecido
    if (data.level !== undefined) {
      monster.userData.level = data.level;
    }

    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      monster.visible = data.active;
    }
    
    // Marca o timestamp da última atualização
    monster.userData.lastUpdated = Date.now();

    // Atualiza barra de vida
    if (this.floatingBarManager && data.stats) {
      console.log('[MonsterPresenter] updateBar', id, data.stats);
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
} 