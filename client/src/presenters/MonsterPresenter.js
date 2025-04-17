import * as THREE from 'three';

/**
 * Presenter responsável por renderizar e gerenciar monstros no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */
export class MonsterPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os monstros serão renderizados
   */
  constructor(scene) {
    this.scene = scene;
    this.monsters = new Map(); // Map para armazenar todos os monstros ativos por ID
    this.lastResetTime = Date.now(); // Timestamp da última limpeza completa
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
    // Representação visual temporária (cubo vermelho)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Vermelho
    
    const monster = new THREE.Mesh(geometry, material);
    
    // Adiciona à cena
    this.scene.add(monster);
    
    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    monster.position.set(
      Number(position.x) || 0,
      Number(position.y) || 0.5, // Um pouco acima do chão
      Number(position.z) || 0
    );
    
    // Adiciona um indicador de direção (cone)
    const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4);
    const frontMaterial = new THREE.MeshStandardMaterial({ color: 0xff7700 }); // Laranja
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0, 0, 0.8);
    front.rotation.x = Math.PI / 2;
    monster.add(front);
    
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
    
    // console.log(`Monstro criado: ${id}, tipo: ${monster.userData.monsterType}`);
  }

  /**
   * Atualiza um monstro existente com novos dados
   * @param {string} id - ID do monstro
   * @param {Object} data - Novos dados do monstro
   */
  updateExistingMonster(id, data) {
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
    
    // Atualiza stats se fornecidos
    if (data.stats) {
      monster.userData.stats = data.stats;
    }

    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      monster.visible = data.active;
    }
    
    // Marca o timestamp da última atualização
    monster.userData.lastUpdated = Date.now();
  }

  /**
   * Remove um monstro da cena
   * @param {string} id - ID do monstro a ser removido
   */
  removeMonster(id) {
    if (!this.monsters.has(id)) return;
    
    const monster = this.monsters.get(id);
    
    // Remove da cena
    this.scene.remove(monster);
    
    // Remove do mapa
    this.monsters.delete(id);
    
    console.log(`Monstro removido: ${id}`);
  }

  /**
   * Obtém a referência a um monstro pelo ID
   * @param {string} id - ID do monstro
   * @returns {THREE.Object3D|null} - Referência ao objeto 3D ou null se não existir
   */
  getMonster(id) {
    return this.monsters.get(id) || null;
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
} 