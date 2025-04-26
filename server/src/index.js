// Arquivo principal do servidor
import geckos from '@geckos.io/server';
import { SERVER, EVENTS, WORLD, BINARY_EVENTS } from '../../shared/constants/gameConstants.js';
import { GameWorld } from './models/GameWorld.js';
import zlib from 'zlib';
import express from 'express';
import path from 'path';
import {
  serializePlayerMove,
  serializePlayerMoved,
  serializeMonsterMove,
  serializeWorldUpdate,
  logBinary,
  logJson,
  deserializePlayerMoveInput
} from '../../shared/utils/binarySerializer.js';

const app = express();
const __dirname = path.resolve();

app.get('/play', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(express.static('dist'));
app.listen(3001, () => console.log('Servidor rodando na porta 3001'));

// Inicializa o servidor geckos.io com configurações para desenvolvimento
const io = geckos({
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:freestun.net:3478' },
    {
      urls: 'turn:freestun.net:3478',
      username: 'free',
      credential: 'free'
    },
    {
      urls: 'turn:openrelay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    }
  ],
  maxPacketLifeTime: null,
  ordered: false, // Para melhor desempenho de UDP
  cors: { 
    origin: '*',
    allowAuthorization: true 
  }
});

global.server = io; // Torna o servidor acessível globalmente

// Inicializa o mundo do jogo
const gameWorld = new GameWorld();

// Define a referência global para o GameWorld para ser acessada por outras classes
global.gameWorld = gameWorld;

// Inicia o servidor na porta configurada
io.listen(SERVER.PORT);

console.log(`Servidor iniciado na porta ${SERVER.PORT}`);

// Inicializa o mundo com objetos e áreas de spawn
gameWorld.initialize();

// Snapshot do último estado enviado para cada jogador
const lastSentState = {};

// Gerenciamento de conexões
io.onConnection(channel => {
  try {
    console.log(`Novo jogador conectado: ${channel.id}`);
    
    // Adiciona jogador ao mundo do jogo
    const player = gameWorld.addPlayer(channel);
    channel.playerId = player.id; // Salva o ID numérico no canal
    
    // Envia ID e dados completos para o cliente
    channel.emit(EVENTS.PLAYER.INIT, {
      id: player.id,
      position: player.position,
      rotation: player.rotation,
      stats: player.stats,
      level: player.level,
      xp: player.xp,
      nextLevelXp: player.nextLevelXp,
      name: player.name
    });
    
    // Envia informações sobre objetos do mundo para o novo jogador (apenas próximos)
    const nearbyMonsters = [];
    const nearbyWorldObjects = [];
    for (const monster of gameWorld.entityManager.monsters.values()) {
      if (monster.active && player.distanceTo(monster) < 30) {
        nearbyMonsters.push(monster.serialize());
      }
    }
    for (const worldObject of gameWorld.entityManager.worldObjects.values()) {
      if (worldObject.active && player.distanceTo(worldObject) < 40) {
        nearbyWorldObjects.push(worldObject.serialize());
      }
    }
    const initialPayload = {
      worldObjects: nearbyWorldObjects,
      monsters: nearbyMonsters
    };
    const initialPayloadSize = Buffer.byteLength(JSON.stringify(initialPayload));
    console.log(`[INIT] Enviando WORLD.INIT para ${channel.id}: ${initialPayloadSize} bytes | Objetos: ${initialPayload.worldObjects.length} | Monstros: ${initialPayload.monsters.length}`);
    compressAndSend(channel, EVENTS.WORLD.INIT, initialPayload);
    
    // Informa outros jogadores sobre o novo jogador que entrou
    // e envia informações sobre jogadores existentes para o novo jogador
    const allPlayers = gameWorld.getSerializedPlayers();
    
    for (const p of allPlayers) {
      if (p.id !== player.id) {
        // Notifica os outros jogadores sobre o novo jogador
        const otherPlayer = gameWorld.entityManager.getPlayer(p.id);
        if (otherPlayer && otherPlayer.channel) {
          otherPlayer.channel.emit(EVENTS.PLAYER.JOINED, {
            id: player.id,
            position: player.position,
            rotation: player.rotation,
            stats: player.stats,
            level: player.level,
            xp: player.xp,
            nextLevelXp: player.nextLevelXp,
            name: player.name
          });
        }
        
        // Envia informações sobre jogadores existentes para o novo jogador
        channel.emit(EVENTS.PLAYER.EXISTING, {
          id: p.id,
          position: p.position,
          rotation: p.rotation,
          stats: p.stats,
          level: p.level,
          xp: p.xp,
          nextLevelXp: p.nextLevelXp,
          name: p.name
        });
      }
    }
    
    // Gerencia desconexão
    channel.onDisconnect(() => {
      try {
        console.log(`Jogador desconectado: ${player.id}`);
        
        // Remove o jogador do mundo
        gameWorld.removePlayer(player.id);
        
        // Notifica outros jogadores sobre a desconexão
        io.emit(EVENTS.PLAYER.DISCONNECTED, { id: player.id });
      } catch (error) {
        console.error('Erro no tratamento de desconexão:', error);
      }
    });
    
    // Processa eventos de movimento (BINÁRIO)
    channel.on(BINARY_EVENTS.PLAYER_MOVE, buffer => {
      try {
        const input = deserializePlayerMoveInput(buffer);
        const player = gameWorld.entityManager.getPlayer(channel.playerId);
        if (!player) {
          console.error(`Jogador não encontrado para ID: ${channel.playerId}`);
          return;
        }
        player.movementState.forward = input.forward || false;
        player.movementState.backward = input.backward || false;
        player.movementState.left = input.left || false;
        player.movementState.right = input.right || false;
      } catch (error) {
        console.error('Erro no tratamento de movimento (binário):', error);
      }
    });

    // Processa uso de habilidades (action)
    channel.on(EVENTS.PLAYER.USE_ABILITY, data => {
      try {
        if (!data || !data.abilityId || !data.targetPosition) {
          console.error('Dados de habilidade inválidos:', data);
          return;
        }
        
        const player = gameWorld.entityManager.getPlayer(channel.playerId);
        if (!player) return;
        
        const ability = player.getAbilityById(data.abilityId);
        if (!ability) return;
        
        // Verifica cooldown e mana no método useAbility
        if (!player.useAbility(data.abilityId, data.targetPosition)) {
          return; // Se não puder usar a habilidade, retorna
        }
        
        // Processa a habilidade usando o sistema de combate
        const result = gameWorld.processAbilityUse(player, data.abilityId, data.targetPosition);
        
        // Se a habilidade não teve sucesso, retorna
        if (!result.success) return;
        
        // Notifica o cliente que a habilidade foi usada
        compressAndSend(channel, EVENTS.PLAYER.ABILITY_USED, {
          id: player.id,
          abilityId: data.abilityId,
          position: player.position,
          targetPosition: data.targetPosition,
          teleport: result.teleportPosition ? true : false,
          teleportPosition: result.teleportPosition,
          areaEffect: result.areaEffect,
          cooldownStart: player.abilityCooldowns[data.abilityId],
          cooldownDuration: ability.COOLDOWN,
          cooldownEnd: player.abilityCooldowns[data.abilityId] + ability.COOLDOWN,
          mana: player.stats.mana,
          maxMana: player.stats.maxMana
        });
        
        // Notifica outros jogadores sobre a habilidade usada
        for (const otherPlayer of gameWorld.entityManager.players.values()) {
          if (otherPlayer.id !== player.id && otherPlayer.channel && 
              otherPlayer.distanceTo(player) < WORLD.SIZE.VISIBLE_RANGE) {
            compressAndSend(otherPlayer.channel, EVENTS.PLAYER.ABILITY_USED, {
              playerId: player.id,
              abilityId: data.abilityId,
              position: player.position,
              targetPosition: data.targetPosition,
              teleport: result.teleportPosition ? true : false,
              teleportPosition: result.teleportPosition,
              areaEffect: result.areaEffect
            });
          }
        }
        
        // Envia resultados do combate para todos os jogadores próximos
        if (result.hits && result.hits.length > 0) {
          for (const hit of result.hits) {
            // Envia informações sobre o hit para jogadores na área
            for (const nearbyPlayer of gameWorld.entityManager.players.values()) {
              if (nearbyPlayer.channel && 
                  (nearbyPlayer.distanceTo(player) < WORLD.SIZE.VISIBLE_RANGE || 
                   (hit.position && nearbyPlayer.distanceTo({position: hit.position}) < WORLD.SIZE.VISIBLE_RANGE))) {
                
                // Envia evento de dano
                compressAndSend(nearbyPlayer.channel, EVENTS.COMBAT.DAMAGE_DEALT, {
                  sourceId: player.id,
                  targetId: hit.id,
                  targetType: hit.type,
                  damage: hit.damage,
                  position: hit.position,
                  abilityId: data.abilityId
                });
                
                // Envia evento de texto flutuante para mostrar dano
                nearbyPlayer.channel.emit(EVENTS.COMBAT.FLOATING_TEXT, {
                  text: hit.damage.toString(),
                  position: hit.position,
                  color: '#ff0000', // Vermelho para dano
                  size: Math.min(0.7 + (hit.damage / 50), 1.5), // Tamanho mais controlado baseado no dano
                  duration: 1200 // Reduzido de 1000 para 1200 ms
                });
              }
            }
          }
        }
      } catch (error) {
        console.error('Erro ao processar uso de habilidade:', error);
      }
    });

    // Processa requisições de sincronização
    channel.on(EVENTS.PLAYER.SYNC_REQUEST, () => {
      try {
        const player = gameWorld.entityManager.getPlayer(channel.playerId);
        if (!player) return;
        // Envia mana e cooldowns atualizados para o cliente
        const cooldowns = {};
        const now = Date.now();
        for (const abilityId in player.abilityCooldowns) {
          const abilityStartTime = player.abilityCooldowns[abilityId];
          if (abilityStartTime === 0) continue;
          const ability = player.getAbilityById(parseInt(abilityId));
          if (!ability) continue;
          const cooldownEndTime = abilityStartTime + ability.COOLDOWN;
          if (cooldownEndTime > now) {
            cooldowns[abilityId] = cooldownEndTime;
          }
        }
        compressAndSend(channel, EVENTS.PLAYER.SYNC_RESPONSE, {
          mana: player.stats.mana,
          maxMana: player.stats.maxMana,
          hp: player.stats.hp,
          maxHp: player.stats.maxHp,
          cooldowns: cooldowns,
          timestamp: now
        });
      } catch (error) {
        console.error('Erro ao processar sincronização:', error);
      }
    });

    // --- CHAT SYSTEM ---
    // Controle de anti-spam por jogador
    player._lastChat = 0;
    channel.on('chat:main', data => {
      try {
        console.log(`[CHAT:MAIN] Recebido de ${player.id} (${player.name}):`, data);
        if (!data || typeof data.text !== 'string') return;
        const now = Date.now();
        if (now - player._lastChat < 700) {
          console.log(`[CHAT:MAIN] Bloqueado por anti-spam: ${player.name}`);
          return;
        }
        player._lastChat = now;
        const text = sanitizeText(data.text, 200);
        if (!text) {
          console.log(`[CHAT:MAIN] Mensagem vazia após sanitização de ${player.name}`);
          return;
        }
        // Envia só para jogadores próximos
        for (const other of gameWorld.entityManager.players.values()) {
          if (!other.channel) continue;
          if (other.id === player.id || player.distanceTo(other) < 25) {
            console.log(`[CHAT:MAIN] Enviando para ${other.id} (${other.name}):`, text);
            compressAndSend(other.channel, 'chat:main', {
              from: player.name || 'Player',
              text
            });
          }
        }
      } catch (e) { console.error('Erro chat:main', e); }
    });
    channel.on('chat:global', data => {
      try {
        console.log(`[CHAT:GLOBAL] Recebido de ${player.id} (${player.name}):`, data);
        if (!data || typeof data.text !== 'string') return;
        const now = Date.now();
        if (now - player._lastChat < 1200) {
          console.log(`[CHAT:GLOBAL] Bloqueado por anti-spam: ${player.name}`);
          return;
        }
        player._lastChat = now;
        const text = sanitizeText(data.text, 200);
        if (!text) {
          console.log(`[CHAT:GLOBAL] Mensagem vazia após sanitização de ${player.name}`);
          return;
        }
        for (const other of gameWorld.entityManager.players.values()) {
          if (other.channel) {
            console.log(`[CHAT:GLOBAL] Enviando para ${other.id} (${other.name}):`, text);
            compressAndSend(other.channel, 'chat:global', {
              from: player.name || 'Player',
              text
            });
          }
        }
      } catch (e) { console.error('Erro chat:global', e); }
    });
    channel.on('chat:private', data => {
      try {
        console.log(`[CHAT:PRIVATE] Recebido de ${player.id} (${player.name}):`, data);
        if (!data || typeof data.text !== 'string' || typeof data.to !== 'string') return;
        const now = Date.now();
        if (now - player._lastChat < 1000) {
          console.log(`[CHAT:PRIVATE] Bloqueado por anti-spam: ${player.name}`);
          return;
        }
        player._lastChat = now;
        const text = sanitizeText(data.text, 200);
        if (!text) {
          console.log(`[CHAT:PRIVATE] Mensagem vazia após sanitização de ${player.name}`);
          return;
        }
        // Procura destinatário
        const toPlayer = Array.from(gameWorld.entityManager.players.values()).find(p => p.name === data.to);
        if (toPlayer && toPlayer.channel) {
          console.log(`[CHAT:PRIVATE] Enviando para ${toPlayer.id} (${toPlayer.name}):`, text);
          compressAndSend(toPlayer.channel, 'chat:private', {
            from: player.name || 'Player',
            text
          });
          // Feedback para quem enviou
          compressAndSend(channel, 'chat:private', {
            from: player.name || 'Player',
            text,
            to: data.to
          });
        } else {
          console.log(`[CHAT:PRIVATE] Destinatário não encontrado: ${data.to}`);
          compressAndSend(channel, 'chat:private', {
            from: 'Sistema',
            text: `Jogador '${data.to}' não encontrado.`
          });
        }
      } catch (e) { console.error('Erro chat:private', e); }
    });
    // --- FIM CHAT SYSTEM ---

    // Garante nome único para o jogador
    if (!player.name) {
      const idStr = String(channel.id);
      player.name = 'Player' + idStr.slice(-4);
      console.log(`[CHAT:NOME] Definido nome padrão para ${player.id}: ${player.name}`);
    } else {
      console.log(`[CHAT:NOME] Nome já definido para ${player.id}: ${player.name}`);
    }

    // Handler de ping para medir latência
    channel.on('ping', () => {
      channel.emit('pong');
    });

    // Handler para respawn do player
    channel.on(EVENTS.PLAYER.RESPAWN, () => {
      const player = gameWorld.entityManager.getPlayer(channel.playerId);
      if (!player || !player.dead) return;
      // Define posição de respawn (spawn zone)
      const spawnZone = WORLD.ZONES.SPAWN;
      const pos = {
        x: spawnZone.X_MIN + Math.random() * (spawnZone.X_MAX - spawnZone.X_MIN),
        y: 0,
        z: spawnZone.Z_MIN + Math.random() * (spawnZone.Z_MAX - spawnZone.Z_MIN)
      };
      player.respawn(pos);
      // (O método respawn já envia o evento de confirmação para o cliente)
    });
  } catch (error) {
    console.error('Erro na conexão de jogador:', error);
  }
});

// Handler para erros não capturados para evitar que o servidor caia
process.on('uncaughtException', (error) => {
  console.error('Erro não capturado:', error);
});

// Handler para promessas rejeitadas não tratadas
process.on('unhandledRejection', (reason, promise) => {
  console.error('Promessa rejeitada não tratada:', reason);
});

// Função para enviar atualizações aos clientes
function broadcastUpdates() {
  try {
    const serializedPlayers = {};
    for (const player of gameWorld.entityManager.players.values()) {
      if (player.active) {
        serializedPlayers[player.id] = {
          id: player.id,
          position: { ...player.position },
          rotation: player.rotation,
          stats: { ...player.stats },
          level: player.level,
          xp: player.xp,
          nextLevelXp: player.nextLevelXp,
          name: player.name
        };
      }
    }
    for (const player of gameWorld.entityManager.players.values()) {
      if (!player.active || !player.channel) continue;
      // Envia versão binária (player:moved)
      const binMoved = serializePlayerMoved({
        playerId: player.id,
        posX: player.position.x,
        posY: player.position.z,
        rot: player.rotation,
        hp: player.stats.hp,
        mana: player.stats.mana
      });
      logBinary(BINARY_EVENTS.PLAYER_MOVED);
      player.channel.emit(BINARY_EVENTS.PLAYER_MOVED, new Uint8Array(binMoved));
      // Envia posições de outros jogadores
      for (const otherPlayerId in serializedPlayers) {
        if (otherPlayerId !== player.id) {
          // Binário para outros jogadores
          const other = serializedPlayers[otherPlayerId];
          const binOtherMoved = serializePlayerMoved({
            playerId: other.id,
            posX: other.position.x,
            posY: other.position.z,
            rot: other.rotation,
            hp: other.stats.hp,
            mana: other.stats.mana
          });
          logBinary(BINARY_EVENTS.PLAYER_MOVED);
          player.channel.emit(BINARY_EVENTS.PLAYER_MOVED, new Uint8Array(binOtherMoved));
        }
      }
      // --- DELTA UPDATE ---
      if (!lastSentState[player.id]) {
        lastSentState[player.id] = { monsters: {}, worldObjects: {} };
      }
      const prev = lastSentState[player.id];
      const deltaMonsters = [];
      const deltaWorldObjects = [];
      for (const monster of gameWorld.entityManager.monsters.values()) {
        if (monster.active && player.distanceTo(monster) < 30) {
          const serialized = monster.serialize();
          const prevSerialized = prev.monsters[monster.id];
          if (!prevSerialized || JSON.stringify(prevSerialized) !== JSON.stringify(serialized)) {
            deltaMonsters.push(serialized);
            prev.monsters[monster.id] = serialized;
          }
        }
      }
      for (const worldObject of gameWorld.entityManager.worldObjects.values()) {
        if (worldObject.active && player.distanceTo(worldObject) < 40) {
          const serialized = worldObject.serialize();
          const prevSerialized = prev.worldObjects[worldObject.id];
          if (!prevSerialized || JSON.stringify(prevSerialized) !== JSON.stringify(serialized)) {
            deltaWorldObjects.push(serialized);
            prev.worldObjects[worldObject.id] = serialized;
          }
        }
      }
      if (deltaMonsters.length > 0 || deltaWorldObjects.length > 0) {
        const updatePayload = {
          monsters: deltaMonsters,
          worldObjects: deltaWorldObjects
        };
        const updatePayloadSize = Buffer.byteLength(JSON.stringify(updatePayload));
        // Envio JSON
        compressAndSend(player.channel, EVENTS.WORLD.UPDATE, updatePayload);
        logJson(EVENTS.WORLD.UPDATE);
        // Envio binário (apenas monstros por exemplo)
        const binEntities = [];
        for (const m of deltaMonsters) {
          binEntities.push({
            entityId: m.id,
            posX: m.position.x,
            posY: m.position.z,
            rot: m.rotation,
            hp: m.stats ? m.stats.hp : 0
          });
        }
        if (binEntities.length > 0) {
          const binWorldUpdate = serializeWorldUpdate(binEntities);
          logBinary('bin:world:update');
          player.channel.emit(BINARY_EVENTS.WORLD_UPDATE, new Uint8Array(binWorldUpdate));
        }
      }
    }
  } catch (error) {
    console.error('Erro ao enviar atualizações:', error);
  }
}

// Loop do jogo (20 ticks por segundo)
const TICK_RATE = SERVER.TICK_RATE;
setInterval(() => {
  try {
    // Atualiza o mundo do jogo
    gameWorld.update();
    
    // Envia atualizações aos clientes
    broadcastUpdates();
  } catch (error) {
    console.error('Erro no loop do jogo:', error);
  }
}, TICK_RATE);

// Limpeza adequada ao encerrar o servidor
process.on('SIGINT', () => {
  console.log('Encerrando servidor...');
  gameWorld.cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Encerrando servidor...');
  gameWorld.cleanup();
  process.exit(0);
});

// Função utilitária para sanitizar texto
function sanitizeText(text, maxLen = 200) {
  if (typeof text !== 'string') return '';
  let t = text.trim().slice(0, maxLen);
  t = t.replace(/[<>]/g, ''); // Remove < >
  t = t.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''); // Remove chars de controle
  return t;
}

// Função utilitária para compactar dados antes de enviar
function compressAndSend(channel, eventName, data) {
  try {
    const json = JSON.stringify(data);
    const jsonSize = json.length;
    // Só compacta se o payload for maior que 500 bytes
    if (jsonSize > 500) {
      const compressed = zlib.deflateSync(json);
      const compressedSize = compressed.length;
      const base64 = compressed.toString('base64');
      // Log de diagnóstico para monitorar a compactação
      // console.log(`[COMPRESS] ${eventName}: ${jsonSize} bytes → ${compressedSize} bytes (${Math.round((compressedSize/jsonSize)*100)}%)`);
      channel.emit(eventName, {
        compressed: true,
        data: base64
      });
    } else {
      // Payloads pequenos são enviados normalmente
      channel.emit(eventName, data);
    }
  } catch (error) {
    console.error(`Erro ao compactar dados para ${eventName}:`, error);
    // Fallback: envia sem compressão em caso de erro
    channel.emit(eventName, data);
  }
} 