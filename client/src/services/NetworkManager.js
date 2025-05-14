// NetworkManager.js
// Gerencia a comunicação com o servidor usando geckos.io
import geckos from '@geckos.io/client';
import { deserializePlayerMoved, deserializeWorldUpdate, deserializePlayerStatus, serializePlayerMoveInput, deserializeMonsterDeath, deserializeWorldUpdateFull, deserializeMonsterDeltaUpdate, deserializeCombatEffects, deserializePlayerInit, deserializePlayerDisconnected, deserializePlayerJoined, deserializePlayerExisting } from '../../../shared/utils/binarySerializer.js';
import pako from 'pako';
import { BINARY_EVENTS } from '../../../shared/constants/gameConstants.js';

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
      onPlayerDeath: [],
      onPlayerRespawn: [],
      onSyncResponse: [],
      onMonsterDeath: [],
      onWebShot: [],
      onSpiderLeap: [],
      onBinaryWorldUpdate: [],
      onBinaryPlayerMoved: [],
      onBinaryPlayerStatus: [],
      onBinaryMonsterDeath: [],
      onBinaryMonsterDeltaUpdate: [],
      onBinaryCombatEffects: []
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
    
    // Inicialização do jogador (binário)
    this.channel.on(BINARY_EVENTS.PLAYER_INIT, buffer => {
      try {
        const data = deserializePlayerInit(buffer);
        console.log('[CLIENT] Recebido evento: bin:player:init', data);
        this.playerId = data.id;
        this.callbacks.onPlayerInit.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar bin:player:init:', error);
      }
    });
    
    // Inicialização do mundo (binário)
    this.channel.on(BINARY_EVENTS.WORLD_INIT, data => {
      console.log('[CLIENT] Recebido evento: bin:world:init', data);
      try {
        console.log('[DEBUG] bin:world:init tipo recebido:', data && data.constructor ? data.constructor.name : typeof data, data);

        // Tenta converter se for um objeto "array-like"
        if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
          const worldData = deserializeWorldUpdateFull(data);
          this.callbacks.onWorldInit.forEach(callback => callback(worldData));
          // Envia confirmação para o servidor
          if (this.channel && typeof this.channel.emit === 'function') {
            this.channel.emit('client:worldInitAck');
          }
        } else if (data && typeof data === 'object' && Object.keys(data).every(k => !isNaN(Number(k)))) {
          // Tenta converter objeto {0:..., 1:..., ...} para Uint8Array
          const arr = Object.values(data);
          const uint8 = new Uint8Array(arr);
          const worldData = deserializeWorldUpdateFull(uint8.buffer);
          this.callbacks.onWorldInit.forEach(callback => callback(worldData));
          // Envia confirmação para o servidor
          if (this.channel && typeof this.channel.emit === 'function') {
            this.channel.emit('client:worldInitAck');
          }
          console.warn('[WARN] bin:world:init chegou como objeto, convertido para Uint8Array automaticamente.');
        } else {
          console.error('[ERRO] Payload de bin:world:init não é binário! Ignorando.', data);
        }
      } catch (error) {
        console.error('[ERRO] Falha ao processar dados iniciais do mundo (binário):', error);
      }
    });
    
    // Jogador desconectado (BINÁRIO)
    this.channel.on(BINARY_EVENTS.PLAYER_DISCONNECTED, buffer => {
      try {
        const data = deserializePlayerDisconnected(buffer);
        console.log('[CLIENT] Recebido evento: bin:player:disconnected', data);
        this.callbacks.onPlayerDisconnected.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar bin:player:disconnected:', error);
      }
    });
    
    // Jogador existente (BINÁRIO)
    this.channel.on(BINARY_EVENTS.PLAYER_EXISTING, buffer => {
      try {
        const data = deserializePlayerExisting(buffer);
        console.log('[CLIENT] Recebido evento: bin:player:existing', data);
        this.callbacks.onPlayerExisting.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar bin:player:existing:', error);
      }
    });
    
    // Jogador entrou (BINÁRIO)
    this.channel.on(BINARY_EVENTS.PLAYER_JOINED, buffer => {
      try {
        const data = deserializePlayerJoined(buffer);
        console.log('[CLIENT] Recebido evento: bin:player:joined', data);
        this.callbacks.onPlayerJoined.forEach(callback => callback(data));
      } catch (error) {
        console.error('Erro ao processar bin:player:joined:', error);
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
    
    // Novo evento binário: efeitos de combate em lote
    this.channel.on(BINARY_EVENTS.COMBAT_EFFECTS, buffer => {
      const effects = deserializeCombatEffects(buffer);
      this.callbacks.onBinaryCombatEffects.forEach(callback => callback(effects));
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