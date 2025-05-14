// Arquivo principal do servidor
import geckos from '@geckos.io/server';
import { SERVER, EVENTS, WORLD, BINARY_EVENTS, EVENT_TYPE } from '../../shared/constants/gameConstants.js';
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
  deserializePlayerMoveInput,
  serializeWorldUpdateFull,
  serializeMonsterDeltaUpdate,
  serializeCombatEffects
} from '../../shared/utils/binarySerializer.js';
import { logAuditEvent } from './utils/auditLogger.js';
import fs from 'fs';
import { compressAndSend } from './utils/compressAndSend.js';

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

// Snapshot de monstros enviados por player
const lastSentMonsters = new Map(); // playerId -> Map<monsterId, { ...dados }>

// --- MÉTRICAS DE TRÁFEGO POR CLIENTE ---
const trafficStats = new Map(); // playerId -> { bytes: 0, lastLog: Date.now(), ticks: 0 }

function logTraffic(playerId, bytes) {
  let stat = trafficStats.get(playerId);
  if (!stat) {
    stat = { bytes: 0, lastLog: Date.now(), ticks: 0 };
    trafficStats.set(playerId, stat);
  }
  stat.bytes += bytes;
  stat.ticks++;
  const now = Date.now();
  if (now - stat.lastLog >= 5000) {
    const kb = (stat.bytes / 1024).toFixed(2);
    const avgPerTick = stat.ticks ? (stat.bytes / stat.ticks).toFixed(1) : 0;
    console.log(`[TRÁFEGO] Player ${playerId}: ${kb} KB em 5s | Média: ${(kb/5).toFixed(2)} KB/s | ${avgPerTick} bytes/tick`);
    stat.bytes = 0;
    stat.ticks = 0;
    stat.lastLog = now;
  }
}

// Buffer global de efeitos de combate por tick
const combatEffectsBuffer = [];
// Torna acessível globalmente para outros sistemas (ex: CombatSystem)
global.combatEffectsBuffer = combatEffectsBuffer;

// --- CONTROLE DE DUPLICIDADE E SEQUÊNCIA DE EVENTOS ---
// Mapa: playerId -> { tick: number, sentEvents: Set<string>, worldInitConfirmed: boolean }
const eventControlMap = new Map();
let currentTick = 0;

// Função para ser chamada a cada tick do servidor
function nextServerTick() {
  currentTick++;
  // Limpa os eventos enviados por tick
  for (const ctrl of eventControlMap.values()) {
    ctrl.sentEvents.clear();
  }
}

// Exemplo: chame nextServerTick() no loop principal do servidor a cada tick
// setInterval(nextServerTick, 50); // 20 ticks por segundo

// Lista de eventos que podem ser enviados múltiplas vezes por tick
const eventosPermitidosMultiplos = [
  'combat:effects',
  'bin:combat:effects',
  'combat:floatingText',
  'combat:damageDealt',
  'player:abilityUsed',
  'monster:damage',
  'player:damage',
  'monster:attack',
  'monster:attacked',
  'monster:ability',
  'player:target',
  // Adicione outros eventos de efeito em área ou múltiplos hits
];

function safeCompressAndSend(channel, eventName, data) {
  const playerId = channel.playerId || channel.id;
  let ctrl = eventControlMap.get(playerId);
  if (!ctrl) {
    ctrl = { tick: currentTick, sentEvents: new Set(), worldInitConfirmed: false };
    eventControlMap.set(playerId, ctrl);
  }
  // Definir eventType
  let eventType = EVENT_TYPE.JSON;
  if (eventName.startsWith('chat:')) eventType = EVENT_TYPE.CHAT;
  else if (eventName.startsWith('bin:')) eventType = EVENT_TYPE.BINARY;
  else if (eventName.startsWith('monster:') || eventName.startsWith('player:') || eventName.startsWith('combat:')) eventType = EVENT_TYPE.CUSTOM;
  // Checa duplicidade apenas para eventos que NÃO estão na lista acima
  if (!eventosPermitidosMultiplos.includes(eventName) && ctrl.sentEvents.has(eventName)) {
    logAuditEvent({
      playerId,
      event: eventName,
      eventType,
      tick: currentTick,
      status: 'suprimido',
      motivo: 'duplicidade',
      timestamp: new Date().toISOString(),
      payloadSize: data?.byteLength || data?.length || JSON.stringify(data).length || 0
    });
    return; // Não envia duplicado
  }
  // Checa sequência lógica para eventos críticos
  const eventosCriticos = [
    'bin:world:init',
    'bin:world:update',
    'bin:monster:deltaUpdate',
    'bin:player:status',
    'combat:effects',
    'player:status',
    'player:abilityUsed',
    'player:death',
    'player:respawn',
    // Adicione outros eventos críticos conforme necessário
  ];
  if (eventosCriticos.includes(eventName) && !ctrl.worldInitConfirmed && eventName !== 'bin:world:init') {
    logAuditEvent({
      playerId,
      event: eventName,
      eventType,
      tick: currentTick,
      status: 'suprimido',
      motivo: 'aguardando confirmação world:init',
      timestamp: new Date().toISOString(),
      payloadSize: data?.byteLength || data?.length || JSON.stringify(data).length || 0
    });
    return; // Não envia eventos críticos antes da confirmação
  }
  // Marca como enviado
  ctrl.sentEvents.add(eventName);
  // Envia normalmente
  compressAndSend(channel, eventName, data);
  logAuditEvent({
    playerId,
    event: eventName,
    eventType,
    tick: currentTick,
    status: 'enviado',
    motivo: null,
    timestamp: new Date().toISOString(),
    payloadSize: data?.byteLength || data?.length || JSON.stringify(data).length || 0
  });
}

// Gerenciamento de conexões
io.onConnection(channel => {
  try {
    console.log(`[DEBUG] Handler de conexão chamado para canal: ${channel.id}, playerId atual: ${channel.playerId}`);
    // Adiciona jogador ao mundo do jogo
    const player = gameWorld.addPlayer(channel);
    console.log(`[DEBUG] Player adicionado: ${player.id} para canal: ${channel.id}`);
    channel.playerId = player.id; // Salva o ID numérico no canal
    // Envia ID e dados completos para o cliente
    console.log(`[DEBUG] Enviando player:init para playerId: ${player.id}, canal: ${channel.id}`);
    safeCompressAndSend(channel, EVENTS.PLAYER.INIT, {
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
      if (monster.active && player.distanceTo(monster) < WORLD.SIZE.VISIBLE_RANGE) {
        nearbyMonsters.push(monster.serialize({ compact: true }));
      }
    }
    for (const worldObject of gameWorld.entityManager.worldObjects.values()) {
      if (worldObject.active && player.distanceTo(worldObject) < WORLD.SIZE.VISIBLE_RANGE) {
        nearbyWorldObjects.push(worldObject.serialize({ compact: true }));
      }
    }
    // --- NOVO: Serialização binária do payload inicial ---
    const buffer = serializeWorldUpdateFull({
      monsters: nearbyMonsters,
      worldObjects: nearbyWorldObjects,
      players: [player] // Envia apenas o próprio jogador no payload inicial
    });
    const initialPayloadSize = buffer.byteLength || buffer.length;
    console.log(`[DEBUG] Enviando bin:world:init para playerId: ${player.id}, canal: ${channel.id}`);
    console.log(`[INIT] Enviando WORLD.INIT (BINÁRIO) para ${channel.id}: ${initialPayloadSize} bytes | Objetos: ${nearbyWorldObjects.length} | Monstros: ${nearbyMonsters.length}`);
    safeCompressAndSend(channel, BINARY_EVENTS.WORLD_INIT, new Uint8Array(buffer));
    
    // Informa outros jogadores sobre o novo jogador que entrou
    // e envia informações sobre jogadores existentes para o novo jogador
    const allPlayers = gameWorld.getSerializedPlayers();
    
    for (const p of allPlayers) {
      if (p.id !== player.id) {
        // Notifica os outros jogadores sobre o novo jogador
        const otherPlayer = gameWorld.entityManager.getPlayer(p.id);
        if (otherPlayer && otherPlayer.channel) {
          safeCompressAndSend(otherPlayer.channel, EVENTS.PLAYER.JOINED, {
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
        safeCompressAndSend(channel, EVENTS.PLAYER.EXISTING, {
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
        safeCompressAndSend(channel, EVENTS.PLAYER.ABILITY_USED, {
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
            safeCompressAndSend(otherPlayer.channel, EVENTS.PLAYER.ABILITY_USED, {
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
                safeCompressAndSend(nearbyPlayer.channel, EVENTS.COMBAT.DAMAGE_DEALT, {
                  sourceId: player.id,
                  targetId: hit.id,
                  targetType: hit.type,
                  damage: hit.damage,
                  position: hit.position,
                  abilityId: data.abilityId
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
        safeCompressAndSend(channel, EVENTS.PLAYER.SYNC_RESPONSE, {
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
            safeCompressAndSend(other.channel, 'chat:main', {
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
            safeCompressAndSend(other.channel, 'chat:global', {
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
          safeCompressAndSend(toPlayer.channel, 'chat:private', {
            from: player.name || 'Player',
            text
          });
          // Feedback para quem enviou
          safeCompressAndSend(channel, 'chat:private', {
            from: player.name || 'Player',
            text,
            to: data.to
          });
        } else {
          console.log(`[CHAT:PRIVATE] Destinatário não encontrado: ${data.to}`);
          safeCompressAndSend(channel, 'chat:private', {
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
      // Se o mapa ativo for DESERT_PATH, respawn fixo no início do caminho
      const isDesertPath = !!WORLD.ZONES.DESERT_PATH;
      let pos;
      if (isDesertPath) {
        pos = { x: 0, y: 0, z: -95 };
      } else {
        const spawnZone = WORLD.ZONES.SPAWN;
        pos = {
          x: spawnZone.X_MIN + Math.random() * (spawnZone.X_MAX - spawnZone.X_MIN),
          y: 0,
          z: spawnZone.Z_MIN + Math.random() * (spawnZone.Z_MAX - spawnZone.Z_MIN)
        };
      }
      player.respawn(pos);
      // (O método respawn já envia o evento de confirmação para o cliente)
    });

    // Handler para confirmação do cliente após world:init
    channel.on('client:worldInitAck', () => {
      const playerId = channel.playerId || channel.id;
      let ctrl = eventControlMap.get(playerId);
      if (!ctrl) {
        ctrl = { tick: currentTick, sentEvents: new Set(), worldInitConfirmed: false };
        eventControlMap.set(playerId, ctrl);
      }
      ctrl.worldInitConfirmed = true;
      console.log(`[CONFIRMAÇÃO] Recebida confirmação de world:init do jogador ${playerId}`);
    });

    console.log('[DEBUG][SERVER] combatEffectsBuffer para player', player.id, ':', combatEffectsBuffer);
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
    for (const player of gameWorld.entityManager.players.values()) {
      if (!player.active || !player.channel) continue;
      // --- DELTA DE MONSTROS ---
      const currentMonsters = new Map();
      for (const monster of gameWorld.entityManager.monsters.values()) {
        if (monster.active && player.distanceTo(monster) < 40) {
          currentMonsters.set(monster.id, {
            id: monster.id,
            monsterType: monster.monsterType,
            position: { ...monster.position },
            rotation: monster.rotation,
            stats: { ...monster.stats }
          });
        }
      }
      const prev = lastSentMonsters.get(player.id) || new Map();
      const addedOrUpdated = [];
      const removed = [];
      for (const [id, data] of currentMonsters) {
        if (!prev.has(id)) {
          addedOrUpdated.push(data);
        } else {
          const prevData = prev.get(id);
          if (
            data.position.x !== prevData.position.x ||
            data.position.z !== prevData.position.z ||
            data.rotation !== prevData.rotation ||
            data.stats.hp !== prevData.stats.hp
          ) {
            addedOrUpdated.push(data);
          }
        }
      }
      for (const id of prev.keys()) {
        if (!currentMonsters.has(id)) {
          removed.push(id);
        }
      }
      lastSentMonsters.set(player.id, currentMonsters);
      // Envia delta binário de monstros APENAS se houver entidades para enviar
      const totalDeltaEntities = addedOrUpdated.length + removed.length;
      if (totalDeltaEntities > 0) {
        const t0_mon = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        const binMonsterDelta = serializeMonsterDeltaUpdate({ addedOrUpdated, removed });
        const t1_mon = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        player.channel.emit(BINARY_EVENTS.MONSTER_DELTA_UPDATE, new Uint8Array(binMonsterDelta));
        logAuditEvent({
          playerId: player.id,
          event: 'MONSTER_DELTA_UPDATE',
          eventType: EVENT_TYPE.BINARY,
          entitiesSent: totalDeltaEntities,
          payloadSize: binMonsterDelta.byteLength || binMonsterDelta.length || 0,
          serializationTimeMs: Number((t1_mon - t0_mon).toFixed(2))
        });
      }
      // --- OBJETOS E JOGADORES (WORLD_UPDATE) ---
      const worldObjects = [];
      for (const worldObject of gameWorld.entityManager.worldObjects.values()) {
        if (worldObject.active && player.distanceTo(worldObject) < WORLD.SIZE.VISIBLE_RANGE) {
          worldObjects.push({
            id: worldObject.id,
            type: worldObject.objectType,
            position: { ...worldObject.position },
            rotation: worldObject.rotation,
            status: 0
          });
        }
      }
      const playersNearby = [];
      for (const other of gameWorld.entityManager.players.values()) {
        if (other.active && other.id !== player.id && player.distanceTo(other) < WORLD.SIZE.VISIBLE_RANGE) {
          playersNearby.push(other);
        }
      }
      const totalWorldEntities = worldObjects.length + playersNearby.length;
      if (totalWorldEntities > 0) {
        const t0_world = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        const binWorldUpdate = serializeWorldUpdateFull({
          monsters: [], // <- não envia mais monstros aqui
          worldObjects,
          players: playersNearby
        });
        const t1_world = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        player.channel.emit(BINARY_EVENTS.WORLD_UPDATE, new Uint8Array(binWorldUpdate));
        logAuditEvent({
          playerId: player.id,
          event: 'WORLD_UPDATE',
          eventType: EVENT_TYPE.BINARY,
          entitiesSent: totalWorldEntities,
          payloadSize: binWorldUpdate.byteLength || binWorldUpdate.length || 0,
          serializationTimeMs: Number((t1_world - t0_world).toFixed(2))
        });
      }
      // PLAYER_MOVED permanece igual, mas padroniza o cálculo do tempo
      const t0_moved = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      const binMoved = serializePlayerMoved({
        playerId: player.id,
        posX: player.position.x,
        posY: player.position.z,
        rot: player.rotation,
        hp: player.stats.hp,
        mana: player.stats.mana
      });
      const t1_moved = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
      player.channel.emit(BINARY_EVENTS.PLAYER_MOVED, new Uint8Array(binMoved));
      logAuditEvent({
        playerId: player.id,
        event: 'PLAYER_MOVED',
        eventType: EVENT_TYPE.BINARY,
        payloadSize: binMoved.byteLength || binMoved.length || 0,
        serializationTimeMs: Number((t1_moved - t0_moved).toFixed(2))
      });
      // --- ENVIO DE EFEITOS DE COMBATE EM LOTE (BINÁRIO) ---
      if (combatEffectsBuffer.length > 0) {
        const t0_combat = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        const binCombatEffects = serializeCombatEffects(combatEffectsBuffer);
        const t1_combat = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        safeCompressAndSend(player.channel, BINARY_EVENTS.COMBAT_EFFECTS, new Uint8Array(binCombatEffects));
        logAuditEvent({
          playerId: player.id,
          event: 'COMBAT_EFFECTS',
          eventType: EVENT_TYPE.BINARY,
          entitiesSent: combatEffectsBuffer.length,
          payloadSize: binCombatEffects.byteLength || binCombatEffects.length || 0,
          serializationTimeMs: Number((t1_combat - t0_combat).toFixed(2))
        });
      }
    }
    // Limpa o buffer após o envio para todos
    combatEffectsBuffer.length = 0;
  } catch (error) {
    console.error('Erro no broadcastUpdates:', error);
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

// Rota para acessar os logs de auditoria
app.get('/audit/logs', (req, res) => {
  try {
    const date = req.query.date || new Date().toISOString().slice(0, 10);
    const logPath = path.resolve('server/src/logs', `audit-${date}.jsonl`);
    if (!fs.existsSync(logPath)) {
      return res.status(404).json({ error: 'Arquivo de log não encontrado para a data especificada.' });
    }
    const lines = fs.readFileSync(logPath, 'utf-8').split('\n').filter(Boolean);
    const logs = lines.map(line => {
      try {
        return JSON.parse(line);
      } catch (e) {
        return null;
      }
    }).filter(Boolean);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao ler logs de auditoria.' });
  }
});

// Servir arquivos estáticos do painel de auditoria
app.use('/audit-panel', express.static(path.join(__dirname, 'server/src/audit-panel')));
app.get('/audit', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/src/audit-panel/index.html'));
}); 