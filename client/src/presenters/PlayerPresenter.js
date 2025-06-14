import * as THREE from 'three';
import { FloatingBarManager } from './FloatingBarManager.js';

/**
 * Presenter responsável por renderizar e gerenciar jogadores no cliente.
 * Segue o padrão MCP, onde o presenter não contém lógica de jogo,
 * apenas recebe dados do servidor e os apresenta visualmente.
 */
export class PlayerPresenter {
  /**
   * @param {THREE.Scene} scene - Cena Three.js onde os jogadores serão renderizados
   * @param {FloatingBarManager} floatingBarManager - Gerenciador de barras flutuantes
   */
  constructor(scene, floatingBarManager) {
    this.scene = scene;
    this.players = new Map(); // Map para armazenar todos os jogadores por ID
    this.localPlayerId = null; // ID do jogador local
    this.floatingBarManager = floatingBarManager;
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
    id = String(id); // Padroniza ID como string
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
    id = String(id); // Padroniza ID como string
    if (this.players.has(id)) {
      this.removePlayer(id);
    }
    // Geometria e material para o jogador (cubo azul)
    const geometry = new THREE.BoxGeometry(1.3, 1.3, 1.3); // Escala aumentada
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
    
    const player = new THREE.Mesh(geometry, material);
    
    // Adiciona à cena
    this.scene.add(player);
    
    // Posição inicial
    const position = data.position || { x: 0, y: 0, z: 0 };
    player.position.set(
      Number(position.x) || 0,
      0.65, // y fixo em 0.65 para alinhar a base do cubo ao chão
      Number(position.z) || 0
    );
    
    // Adiciona um indicador de direção (cone verde)
    const frontGeometry = new THREE.ConeGeometry(0.4, 1.2, 4); // Escala aumentada
    const frontMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    front.position.set(0, 0, 1.05);
    front.rotation.x = Math.PI / 2;
    player.add(front);
    
    // Armazena metadados junto com a mesh
    player.userData = {
      id: id,
      type: 'player',
      name: data.name || `Player${String(id).slice(-4)}`,
      stats: data.stats || {},
      level: data.level || 1,
      created: Date.now()
    };
    
    // Armazena referência ao objeto
    this.players.set(id, player);
    
    // Adiciona barra de vida/energia e nome flutuante (exceto para o player local)
    if (this.floatingBarManager && id !== this.localPlayerId) {
      this.floatingBarManager.addBar(
        id,
        player,
        'player',
        data.name || `Player${String(id).slice(-4)}`
      );
      // Atualiza barra com valores iniciais
      this.floatingBarManager.updateBar(id, {
        hp: data.stats?.hp ?? 1,
        maxHp: data.stats?.maxHp ?? 1,
        mana: data.stats?.mana ?? 1,
        maxMana: data.stats?.maxMana ?? 1
      });
    }
    
    console.log(`Jogador criado: ${id}`);
    console.log('Players atuais:', Array.from(this.players.keys()));
  }

  /**
   * Atualiza um jogador existente com novos dados
   * @param {string} id - ID do jogador
   * @param {Object} data - Novos dados do jogador
   */
  updateExistingPlayer(id, data) {
    id = String(id); // Padroniza ID como string
    let player = this.players.get(id);
    if (!player) {
      this.createPlayer(id, data);
      player = this.players.get(id);
      if (!player) {
        console.error(`[PlayerPresenter] Falha ao criar mesh para player ${id}`);
        return;
      }
    }

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

    // Atualiza stats se fornecidos (garantindo todos os campos)
    if (data.stats) {
      player.userData.stats = {
        ...player.userData.stats,
        ...data.stats
      };
      // Garante que maxHp/maxMana existam
      if (data.stats.maxHp !== undefined) player.userData.stats.maxHp = data.stats.maxHp;
      if (data.stats.maxMana !== undefined) player.userData.stats.maxMana = data.stats.maxMana;
      if (data.stats.hp !== undefined) player.userData.stats.hp = data.stats.hp;
      if (data.stats.mana !== undefined) player.userData.stats.mana = data.stats.mana;
    }

    // Atualiza nível se fornecido
    if (data.level) {
      player.userData.level = data.level;
    }

    // Atualiza o estado ativo/inativo
    if (data.active !== undefined) {
      player.visible = data.active;
    }

    // Atualiza barra de vida/energia se não for o player local
    if (this.floatingBarManager && id !== this.localPlayerId && player.userData.stats) {
      this.floatingBarManager.updateBar(id, {
        hp: player.userData.stats.hp ?? 1,
        maxHp: player.userData.stats.maxHp ?? 1,
        mana: player.userData.stats.mana ?? 1,
        maxMana: player.userData.stats.maxMana ?? 1
      });
    }
    // Log para depuração
    // console.log(`[PlayerPresenter] updateExistingPlayer: ${id}`, player.position, player.rotation.y, player.userData.stats);
    // console.log('Players atuais após update:', Array.from(this.players.keys()));
  }

  /**
   * Remove um jogador da cena
   * @param {string} id - ID do jogador a ser removido
   */
  removePlayer(id) {
    id = String(id); // Padroniza ID como string
    if (!this.players.has(id)) return;
    const player = this.players.get(id);
    this.scene.remove(player);
    this.players.delete(id);
    if (this.floatingBarManager) {
      this.floatingBarManager.removeBar(id);
    }
    console.log(`Jogador removido: ${id}`);
    console.log('Players atuais após remoção:', Array.from(this.players.keys()));
  }

  /**
   * Obtém a referência a um jogador pelo ID
   * @param {string} id - ID do jogador
   * @returns {THREE.Object3D|null} - Referência ao objeto 3D ou null se não existir
   */
  getPlayer(id) {
    id = String(id); // Padroniza ID como string
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