// NetworkManager.js
// Gerencia a comunicação com o servidor usando geckos.io
import geckos from '@geckos.io/client';
import { deserializePlayerMoved, deserializeWorldUpdate, deserializePlayerStatus, serializePlayerMoveInput, deserializeMonsterDeath, deserializeWorldUpdateFull, deserializeMonsterDeltaUpdate } from '../../../shared/utils/binarySerializer.js';
import pako from 'pako';

export class NetworkManager {
  constructor(serverConfig) {
    this.channel = null;
    this.serverConfig = serverConfig;
    this.playerId = null;
    this.connected = false;
    
    // Callbacks para eventos do servidor
    this.callbacks = {
      onConnect: [],
      onDisconnect: [],
      onError: [],
      onPlayerInit: [],
      onWorldInit: [],
      onPlayerExisting: [],
      onPlayerJoined: [],
      onPlayerMoved: [],
      onPlayerRotated: [],
      onPlayerDisconnected: [],
      onWorldUpdate: [],
      onPlayerDamage: [],
      onMonsterDamage: [],
      onPlayerAbilityUsed: [],
      onCombatDamageDealt: [],
      onFloatingText: [],
      onPlayerDeath: [],
      onPlayerRespawn: [],
      onSyncResponse: [],
      onMonsterDeath: [],
      onWebShot: [],
      onSpiderLeap: [],
      onCombatSlow: [],
      onBinaryWorldUpdate: [],
      onBinaryPlayerMoved: [],
      onBinaryPlayerStatus: [],
      onBinaryMonsterDeath: [],
      onBinaryMonsterDeltaUpdate: []
    };
    
    // Timestamp da última solicitação de sincronização
    this.lastSyncRequest = 0;
    this.syncInterval = 2000; // A cada 2 segundos
  }
  
  // Conecta ao servidor
  connect() {
    console.log(`Tentando conectar ao servidor na porta: ${this.serverConfig.PORT}`);
    
    // Força a conexão explicitamente usando a porta das constantes
    this.channel = geckos({ port: this.serverConfig.PORT });
    
    // Configura o evento de conexão
    this.channel.onConnect(error => {
      if (error) {
        console.error('Erro ao conectar ao servidor:', error);
        this.callbacks.onError.forEach(callback => callback(error));
        return;
      }
      
      console.log('Conectado ao servidor!');
      this.connected = true;
      
      // Inicializa os eventos do servidor
      this.initServerEvents();
      
      // Notifica os callbacks de conexão
      this.callbacks.onConnect.forEach(callback => callback());
    });
    
    return this;
  }
  
  // Inicializa os eventos do servidor
  initServerEvents() {
    const { EVENTS, BINARY_EVENTS } = this.serverConfig;
    
    // Eventos base de jogador
    this.channel.on(EVENTS.PLAYER.INIT, data => {
      try {
        console.log('ID recebido do servidor:', data.id);
        this.playerId = data.id;
        this.callbacks.onPlayerInit.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar ID do jogador:', error);
      }
    });
    
    // Inicialização do mundo
    this.channel.on(EVENTS.WORLD.INIT, data => {
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
        
        this.callbacks.onWorldInit.forEach(callback => callback(worldData));
      } catch (error) {
        console.error('[ERRO] Falha ao processar dados iniciais do mundo:', error);
      }
    });
    
    // Jogador desconectado
    this.channel.on(EVENTS.PLAYER.DISCONNECTED, data => {
      try {
        if (!data || !data.id) {
          console.error('Dados de desconexão inválidos:', data);
          return;
        }
        
        this.callbacks.onPlayerDisconnected.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar desconexão de jogador:', error);
      }
    });
    
    // Jogadores existentes
    this.channel.on(EVENTS.PLAYER.EXISTING, data => {
      try {
        if (!data || !data.id || !data.position) {
          console.error('Dados de jogador existente inválidos:', data);
          return;
        }
        
        this.callbacks.onPlayerExisting.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar jogador existente:', error);
      }
    });
    
    // Jogadores que acabaram de se conectar
    this.channel.on(EVENTS.PLAYER.JOINED, data => {
      try {
        if (!data || !data.id || !data.position) {
          console.error('Dados de novo jogador inválidos:', data);
          return;
        }
        
        this.callbacks.onPlayerJoined.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar novo jogador:', error);
      }
    });
    
    // Atualizações de rotação
    this.channel.on(EVENTS.PLAYER.ROTATED, data => {
      try {
        if (!data || !data.id || data.rotation === undefined) {
          console.error('Dados de rotação inválidos:', data);
          return;
        }
        
        this.callbacks.onPlayerRotated.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar rotação de jogador:', error);
      }
    });
    
    // Atualizações do mundo
    this.channel.on(EVENTS.WORLD.UPDATE, data => {
      try {
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
        
        this.callbacks.onWorldUpdate.forEach(callback => callback(update));
      } catch (error) {
        console.error('Erro ao processar atualização do mundo:', error);
      }
    });
    
    // Desconexão do servidor
    this.channel.onDisconnect(() => {
      console.log('Desconectado do servidor');
      this.connected = false;
      this.callbacks.onDisconnect.forEach(callback => callback());
    });
    
    // Processamento de dano em jogadores
    this.channel.on(EVENTS.PLAYER.DAMAGE, data => {
      if (!data || !data.id || !data.damage) return;
      this.callbacks.onPlayerDamage.forEach(callback => callback(data));
    });
    
    // Processamento de dano em monstros
    this.channel.on(EVENTS.MONSTER.DAMAGE, data => {
      if (!data || !data.id || !data.damage) return;
      this.callbacks.onMonsterDamage.forEach(callback => callback(data));
    });
    
    // Uso de habilidades
    this.channel.on(EVENTS.PLAYER.ABILITY_USED, data => {
      try {
        if (!data || !data.abilityId) return;
        this.callbacks.onPlayerAbilityUsed.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar habilidade:', error);
      }
    });
    
    // Dano causado em combate
    this.channel.on(EVENTS.COMBAT.DAMAGE_DEALT, data => {
      try {
        if (!data || !data.targetId || !data.damage) return;
        this.callbacks.onCombatDamageDealt.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar evento DAMAGE_DEALT:', error);
      }
    });
    
    // Texto flutuante
    this.channel.on(EVENTS.COMBAT.FLOATING_TEXT, data => {
      try {
        if (!data || !data.text || !data.position) return;
        this.callbacks.onFloatingText.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar evento de texto flutuante:', error);
      }
    });
    
    // Morte de jogador
    this.channel.on(EVENTS.PLAYER.DEATH, data => {
      try {
        if (!data || !data.id) return;
        this.callbacks.onPlayerDeath.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar evento de morte:', error);
      }
    });
    
    // Respawn de jogador
    this.channel.on(EVENTS.PLAYER.RESPAWN, data => {
      try {
        if (!data) return;
        this.callbacks.onPlayerRespawn.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar evento de respawn:', error);
      }
    });
    
    // Resposta de sincronização
    this.channel.on(EVENTS.PLAYER.SYNC_RESPONSE, data => {
      try {
        console.log("Sincronização recebida:", 
          `Mana: ${data.mana?.toFixed(1)}/${data.maxMana?.toFixed(1)}`, 
          `Cooldowns: ${Object.keys(data.cooldowns || {}).length}`);
        
        this.callbacks.onSyncResponse.forEach(callback => callback(data));
      } catch (error) {
        console.error("Erro ao processar sincronização:", error);
      }
    });
    
    // Morte de monstro
    this.channel.on(EVENTS.MONSTER.DEATH, data => {
      try {
        if (!data || !data.id) return;
        console.log('[CLIENT] [EVENTS.MONSTER.DEATH] Recebido para monstro:', data.id);
        this.callbacks.onMonsterDeath.forEach(callback => callback(data));
      } catch (error) {
        console.error("Erro ao processar morte de monstro:", error);
      }
    });
    
    // Habilidades de aranha
    this.channel.on('monster:webShot', data => {
      try {
        this.callbacks.onWebShot.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar monster:webShot:', error);
      }
    });
    
    this.channel.on('monster:spiderLeap', data => {
      try {
        this.callbacks.onSpiderLeap.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar monster:spiderLeap:', error);
      }
    });
    
    // Efeitos de status (slow)
    this.channel.on('combat:slow', data => {
      if (data && data.targetId === this.playerId) {
        this.callbacks.onCombatSlow.forEach(callback => callback(data));
      }
    });
    
    // Eventos binários para maior eficiência
    this.channel.on(BINARY_EVENTS.WORLD_UPDATE, buffer => {
      const data = deserializeWorldUpdateFull(buffer);
      this.callbacks.onBinaryWorldUpdate.forEach(callback => callback(data));
    });
    
    this.channel.on(BINARY_EVENTS.PLAYER_MOVED, buffer => {
      const data = deserializePlayerMoved(buffer);
      
      this.callbacks.onBinaryPlayerMoved.forEach(callback => callback(data));
    });
    
    this.channel.on(BINARY_EVENTS.PLAYER_STATUS, buffer => {
      const data = deserializePlayerStatus(buffer);
      this.callbacks.onBinaryPlayerStatus.forEach(callback => callback(data));
    });
    
    this.channel.on(BINARY_EVENTS.MONSTER_DEATH, buffer => {
      const data = deserializeMonsterDeath(buffer);
      this.callbacks.onBinaryMonsterDeath.forEach(callback => callback(data));
    });
    
    this.channel.on(BINARY_EVENTS.MONSTER_DELTA_UPDATE, buffer => {
      const data = deserializeMonsterDeltaUpdate(buffer);
      this.callbacks.onBinaryMonsterDeltaUpdate.forEach(callback => callback(data));
    });
  }
  
  // Envia movimento para o servidor (formato binário)
  sendMovementInput(cameraRelativeInput) {
    if (!this.connected || !this.channel) return;
    
    try {
      const buffer = serializePlayerMoveInput(cameraRelativeInput);
      this.channel.emit(this.serverConfig.BINARY_EVENTS.PLAYER_MOVE, new Uint8Array(buffer));
    } catch (error) {
      console.error('Erro ao enviar comando de movimento (binário):', error);
    }
  }
  
  // Envia uso de habilidade para o servidor
  sendAbilityUse(abilityId, targetPosition) {
    if (!this.connected || !this.channel) return;
    
    this.channel.emit(this.serverConfig.EVENTS.PLAYER.USE_ABILITY, {
      abilityId,
      targetPosition
    });
  }
  
  // Envia comando de respawn
  sendRespawnRequest() {
    if (!this.connected || !this.channel) return;
    
    this.channel.emit(this.serverConfig.EVENTS.PLAYER.RESPAWN);
  }
  
  // Solicita sincronização com o servidor (para cooldowns, mana, etc.)
  requestServerSync() {
    if (!this.connected || !this.channel) return;
    
    const now = Date.now();
    
    // Limita a frequência de sincronização
    if (now - this.lastSyncRequest < this.syncInterval) return;
    
    console.log("Solicitando sincronização com servidor...");
    this.channel.emit(this.serverConfig.EVENTS.PLAYER.SYNC_REQUEST);
    this.lastSyncRequest = now;
  }
  
  // Registra callbacks para os eventos
  on(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event].push(callback);
    } else {
      console.warn(`Evento não suportado: ${event}`);
    }
    return this;
  }
  
  // Remove um callback específico
  off(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback);
    }
    return this;
  }
  
  // Desconecta do servidor
  disconnect() {
    if (this.channel) {
      this.channel.close();
      this.connected = false;
    }
  }
  
  // Retorna o canal para uso direto quando necessário
  getChannel() {
    return this.channel;
  }
  
  // Retorna o ID do jogador
  getPlayerId() {
    return this.playerId;
  }
  
  // Verifica se está conectado ao servidor
  isConnected() {
    return this.connected;
  }
} 