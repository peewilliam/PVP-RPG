import * as THREE from 'three';

/**
 * Presenter responsável por renderizar e gerenciar jogadores no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */
export class PlayerPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os jogadores serão renderizados
   */
  constructor(scene) {
    this.scene = scene;
    this.players = new Map(); // Map para armazenar todos os jogadores por ID
    this.localPlayerId = null; // ID do jogador local
  }

  /**
   * Define o ID do jogador local
   * @param {string} id - ID do jogador local
   */
  setLocalPlayerId(id) {
    this.localPlayerId = id;
  }

  /**
   * Verifica se um jogador existe no presenter
   * @param {string} id - ID do jogador
   * @returns {boolean} - true se o jogador existe, false caso contrário
   */
  hasPlayer(id) {
    return this.players.has(id);
  }

  /**
   * Atualiza apenas a rotação de um jogador
   * @param {string} id - ID do jogador
   * @param {number} rotation - Nova rotação (em radianos)
   */
  updatePlayerRotation(id, rotation) {
    const player = this.players.get(id);
    if (player) {
      player.rotation.y = Number(rotation) || 0;
    }
  }

  /**
   * Cria ou atualiza um jogador baseado nos dados recebidos do servidor
   * @param {Object} playerData - Dados do jogador vindos do servidor
   */
  updatePlayer(playerData) {
    if (!playerData || !playerData.id) {
      console.error('Dados de jogador inválidos:', playerData);
      return;
    }

    const playerId = playerData.id;
    
    // Ignoramos o jogador local, pois ele é gerenciado separadamente
    if (playerId === this.localPlayerId) return;

    // Se o jogador já existe, apenas atualiza sua posição e rotação
    if (this.players.has(playerId)) {
      this.updateExistingPlayer(playerId, playerData);
    } else {
      // Caso contrário, cria uma nova representação visual
      this.createPlayer(playerId, playerData);
    }
  }

  /**
   * Cria uma representação visual para um novo jogador
   * @param {string} id - ID único do jogador
   * @param {Object} data - Dados do jogador
   */
  createPlayer(id, data) {
    // Geometria e material para o jogador (cubo azul)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
    
    const player = new THREE.Mesh(geometry, material);
    
    // Adiciona à cena
    this.scene.add(player);
    
    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    player.position.set(
      Number(position.x) || 0,
      0.5, // y fixo em 0.5 para alinhar a base do cubo ao chão
      Number(position.z) || 0
    );
    
    // Adiciona um indicador de direção (cone verde)
    const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4);
    const frontMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0, 0, 0.8);
    front.rotation.x = Math.PI / 2;
    player.add(front);
    
    // Armazena metadados junto com a mesh
    player.userData = {
      id: id,
      type: 'player',
      name: data.name || `Player${id.slice(-4)}`,
      stats: data.stats || {},
      level: data.level || 1,
      created: Date.now()
    };
    
    // Armazena referência ao objeto
    this.players.set(id, player);
    
    console.log(`Jogador criado: ${id}`);
  }

  /**
   * Atualiza um jogador existente com novos dados
   * @param {string} id - ID do jogador
   * @param {Object} data - Novos dados do jogador
   */
  updateExistingPlayer(id, data) {
    const player = this.players.get(id);
    if (!player) return;
    
    // Atualiza posição se fornecida
    if (data.position) {
      player.position.set(
        Number(data.position.x) || player.position.x,
        0.5, // y fixo em 0.5 para alinhar a base do cubo ao chão
        Number(data.position.z) || player.position.z
      );
    }
    
    // Atualiza rotação se fornecida
    if (data.rotation !== undefined) {
      player.rotation.y = Number(data.rotation) || player.rotation.y;
    }
    
    // Atualiza stats se fornecidos
    if (data.stats) {
      player.userData.stats = data.stats;
    }

    // Atualiza nível se fornecido
    if (data.level) {
      player.userData.level = data.level;
    }

    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      player.visible = data.active;
    }
  }

  /**
   * Remove um jogador da cena
   * @param {string} id - ID do jogador a ser removido
   */
  removePlayer(id) {
    if (!this.players.has(id)) return;
    
    const player = this.players.get(id);
    
    // Remove da cena
    this.scene.remove(player);
    
    // Remove do mapa
    this.players.delete(id);
    
    console.log(`Jogador removido: ${id}`);
  }

  /**
   * Obtém a referência a um jogador pelo ID
   * @param {string} id - ID do jogador
   * @returns {THREE.Object3D|null} - Referência ao objeto 3D ou null se não existir
   */
  getPlayer(id) {
    return this.players.get(id) || null;
  }

  /**
   * Limpa todos os jogadores da cena
   */
  clearAllPlayers() {
    for (const id of this.players.keys()) {
      this.removePlayer(id);
    }
  }

  /**
   * Retorna os dados completos do player selecionado
   * @param {string} id - ID do player
   * @returns {Object|null} - Dados do player (userData + status) ou null
   */
  getPlayerData(id) {
    const mesh = this.getPlayer(id);
    if (!mesh) return null;
    // Retorna userData + status (se existir)
    return {
      ...mesh.userData,
      status: mesh.userData.status || {},
    };
  }
} 