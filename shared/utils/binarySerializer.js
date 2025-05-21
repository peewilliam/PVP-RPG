// Utilitário para serialização binária de eventos críticos de rede
// Permite migrar eventos de JSON para binário de forma incremental

// Quantização de posição (mundo centrado em 0: -100 a +100)
const WORLD_MIN = -100;
const WORLD_MAX = 100;
const WORLD_RANGE = WORLD_MAX - WORLD_MIN;
const QUANT_POS = 65535 / WORLD_RANGE;

function quantizePos(value) {
  return Math.round((value - WORLD_MIN) * QUANT_POS);
}
function dequantizePos(value) {
  return (value / QUANT_POS) + WORLD_MIN;
}

// Rotação: 0-2PI mapeado para 0-255
function quantizeRot(rad) {
  return Math.round((rad / (2 * Math.PI)) * 255);
}
function dequantizeRot(byte) {
  return (byte / 255) * 2 * Math.PI;
}

// IDs: garantir que sejam inteiros (ex: hash curto ou contador incremental)
function toEntityId(id) {
  if (typeof id === 'number') return id;
  // Exemplo: extrair número de string 'p_123' => 123
  const match = /_(\d+)$/.exec(id);
  return match ? parseInt(match[1], 10) : 0;
}

// Função utilitária para garantir ArrayBuffer
function toArrayBuffer(data) {
  // Log detalhado do tipo e conteúdo do dado recebido
//   console.log('[DEBUG toArrayBuffer] typeof:', typeof data, '| constructor:', data && data.constructor && data.constructor.name, '| data:', data);

  if (data instanceof ArrayBuffer) return data;
  if (ArrayBuffer.isView(data)) {
    if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  }
  // Caso especial: Node.js Buffer serializado como objeto { type: 'Buffer', data: [...] }
  if (data && data.type === 'Buffer' && Array.isArray(data.data)) {
    return (new Uint8Array(data.data)).buffer;
  }
  // Caso especial: array simples de números
  if (Array.isArray(data)) {
    return (new Uint8Array(data)).buffer;
  }
  // NOVO: Caso especial - objeto com índices numéricos (array-like)
  if (
    data &&
    typeof data === 'object' &&
    !Array.isArray(data) &&
    Object.keys(data).length > 0 &&
    Object.keys(data).every(k => !isNaN(Number(k)))
  ) {
    // Converte para array de números
    const arr = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      arr.push(data[i]);
    }
    return (new Uint8Array(arr)).buffer;
  }
  throw new Error('Formato de buffer não suportado');
}

// Serialização binária para player:move
function serializePlayerMove({ playerId, posX, posY, rot }) {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setUint8(0, 0x01); // opcode
  view.setUint16(1, toEntityId(playerId));
  view.setUint16(3, quantizePos(posX));
  view.setUint16(5, quantizePos(posY));
  view.setUint8(7, quantizeRot(rot));
  return buffer;
}
function deserializePlayerMove(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    playerId: view.getUint16(1),
    posX: dequantizePos(view.getUint16(3)),
    posY: dequantizePos(view.getUint16(5)),
    rot: dequantizeRot(view.getUint8(7))
  };
}

// Serialização binária para player:moved (inclui HP/Mana)
function serializePlayerMoved({ playerId, posX, posY, rot, hp, mana }) {
  const buffer = new ArrayBuffer(12);
  const view = new DataView(buffer);
  view.setUint8(0, 0x02); // opcode
  view.setUint16(1, toEntityId(playerId));
  view.setUint16(3, quantizePos(posX));
  view.setUint16(5, quantizePos(posY));
  view.setUint8(7, quantizeRot(rot));
  view.setUint16(8, hp);
  view.setUint16(10, mana);
  return buffer;
}
function deserializePlayerMoved(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    playerId: view.getUint16(1),
    posX: dequantizePos(view.getUint16(3)),
    posY: dequantizePos(view.getUint16(5)),
    rot: dequantizeRot(view.getUint8(7)),
    hp: view.getUint16(8),
    mana: view.getUint16(10)
  };
}

// Serialização binária para monster:move
function serializeMonsterMove({ monsterId, posX, posY, rot }) {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setUint8(0, 0x03); // opcode
  view.setUint16(1, toEntityId(monsterId));
  view.setUint16(3, quantizePos(posX));
  view.setUint16(5, quantizePos(posY));
  view.setUint8(7, quantizeRot(rot));
  return buffer;
}
function deserializeMonsterMove(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    monsterId: view.getUint16(1),
    posX: dequantizePos(view.getUint16(3)),
    posY: dequantizePos(view.getUint16(5)),
    rot: dequantizeRot(view.getUint8(7))
  };
}

// Serialização binária para world:update (apenas entidades essenciais)
function serializeWorldUpdate(entities) {
  // entities: array de { entityId, posX, posY, rot, hp }
  const count = entities.length;
  const buffer = new ArrayBuffer(3 + count * 9);
  const view = new DataView(buffer);
  view.setUint8(0, 0x05); // opcode
  view.setUint16(1, count);
  for (let i = 0; i < count; i++) {
    const e = entities[i];
    const offset = 3 + i * 9;
    view.setUint16(offset, toEntityId(e.entityId));
    view.setUint16(offset + 2, quantizePos(e.posX));
    view.setUint16(offset + 4, quantizePos(e.posY));
    view.setUint8(offset + 6, quantizeRot(e.rot));
    view.setUint16(offset + 7, e.hp);
  }
  return buffer;
}
function deserializeWorldUpdate(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  const count = view.getUint16(1);
  const entities = [];
  for (let i = 0; i < count; i++) {
    const offset = 3 + i * 9;
    entities.push({
      entityId: view.getUint16(offset),
      posX: dequantizePos(view.getUint16(offset + 2)),
      posY: dequantizePos(view.getUint16(offset + 4)),
      rot: dequantizeRot(view.getUint8(offset + 6)),
      hp: view.getUint16(offset + 7)
    });
  }
  return { opcode: view.getUint8(0), count, entities };
}

// Serialização binária para player:status (status completo, enviado apenas quando necessário)
function serializePlayerStatus({ playerId, hp, maxHp, mana, maxMana, level, xp, nextLevelXp }) {
  const buffer = new ArrayBuffer(21); // 1 + 2*6 + 4*2 = 21 bytes
  const view = new DataView(buffer);
  view.setUint8(0, 0x10); // opcode para status
  view.setUint16(1, playerId);
  view.setUint16(3, hp);
  view.setUint16(5, maxHp);
  view.setUint16(7, mana);
  view.setUint16(9, maxMana);
  view.setUint16(11, level);
  view.setUint32(13, xp);
  view.setUint32(17, nextLevelXp);
  return buffer;
}
function deserializePlayerStatus(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    playerId: view.getUint16(1),
    hp: view.getUint16(3),
    maxHp: view.getUint16(5),
    mana: view.getUint16(7),
    maxMana: view.getUint16(9),
    level: view.getUint16(11),
    xp: view.getUint32(13),
    nextLevelXp: view.getUint32(17)
  };
}

// Serialização binária para input de movimento do player (WASD)
// Bits: 0=W, 1=A, 2=S, 3=D
function serializePlayerMoveInput({ forward, backward, left, right }) {
  let byte = 0;
  if (forward) byte |= 1 << 0;
  if (left)    byte |= 1 << 1;
  if (backward)byte |= 1 << 2;
  if (right)   byte |= 1 << 3;
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setUint8(0, byte);
  return buffer;
}
function deserializePlayerMoveInput(buffer) {
  buffer = toArrayBuffer(buffer);
  const byte = new DataView(buffer).getUint8(0);
  return {
    forward:  !!(byte & (1 << 0)),
    left:     !!(byte & (1 << 1)),
    backward: !!(byte & (1 << 2)),
    right:    !!(byte & (1 << 3))
  };
}

// Serialização binária para monster:death
function serializeMonsterDeath({ monsterId }) {
  const buffer = new ArrayBuffer(3); // 1 opcode + 2 id
  const view = new DataView(buffer);
  view.setUint8(0, 0x20); // opcode para monster:death
  view.setUint16(1, toEntityId(monsterId));
  return buffer;
}
function deserializeMonsterDeath(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    monsterId: view.getUint16(1)
  };
}

// Log utilitário
function logBinary(eventName) {
//   console.log(`[BINÁRIO] Evento: ${eventName}`);
}
function logJson(eventName) {
//   console.log(`[JSON] Evento: ${eventName}`);
}

// Serialização binária para world:update FULL (monstros, objetos do mundo, jogadores)
import { MONSTER_TYPE_INDEX, MONSTER_TYPE_BY_INDEX, WORLD_OBJECT_TYPE_INDEX, WORLD_OBJECT_TYPE_BY_INDEX } from '../constants/gameConstants.js';
function serializeWorldUpdateFull({ monsters, worldObjects, players }) {
  // Header: 1 opcode + 2 N + 2 M + 2 P
  const N = monsters.length;
  const M = worldObjects.length;
  const P = players.length;
  
  // Calcula o tamanho adicional para scales de monstros
  // Scale: 1 byte flag + 2 bytes por componente (x,y,z) = 7 bytes quando scale existe
  let scaleExtraBytes = 0;
  for (let i = 0; i < N; i++) {
    if (monsters[i].scale) {
      scaleExtraBytes += 7; // 1 (flag) + 2*3 (x,y,z)
    } else {
      scaleExtraBytes += 1; // Apenas 1 byte para flag = 0
    }
  }
  
  // Monstro: 2 id + 1 tipo + 2 x + 2 z + 1 rot + 2 hp + 2 maxHp = 12 bytes (básico) + scale bytes
  // Objeto: 2 id + 1 tipo + 2 x + 2 z + 1 rot + 1 status = 9 bytes
  // Jogador: 12 bytes (igual)
  const buffer = new ArrayBuffer(1 + 2 + 2 + 2 + (N * 12) + scaleExtraBytes + (M * 9) + (P * 12));
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x06); offset += 1; // opcode
  view.setUint16(offset, N); offset += 2;
  view.setUint16(offset, M); offset += 2;
  view.setUint16(offset, P); offset += 2;
  
  // Monstros
  for (let i = 0; i < N; i++) {
    const m = monsters[i];
    view.setUint16(offset, toEntityId(m.id)); offset += 2;
    // 1 byte: tipo
    const typeIdx = MONSTER_TYPE_INDEX[m.monsterType] ?? 0;
    view.setUint8(offset, typeIdx); offset += 1;
    view.setUint16(offset, quantizePos(m.position.x)); offset += 2;
    view.setUint16(offset, quantizePos(m.position.z)); offset += 2;
    view.setUint8(offset, quantizeRot(m.rotation)); offset += 1;
    view.setUint16(offset, m.stats?.hp ?? 0); offset += 2;
    view.setUint16(offset, m.stats?.maxHp ?? 1); offset += 2;
    
    // Adiciona escala, se presente
    if (m.scale) {
      view.setUint8(offset, 1); offset += 1; // Flag indicando que tem scale
      view.setUint16(offset, Math.floor(m.scale.x * 100)); offset += 2;
      view.setUint16(offset, Math.floor(m.scale.y * 100)); offset += 2;
      view.setUint16(offset, Math.floor(m.scale.z * 100)); offset += 2;
    } else {
      view.setUint8(offset, 0); offset += 1; // Flag indicando que não tem scale
    }
  }
  
  // Objetos do mundo
  for (let i = 0; i < M; i++) {
    const o = worldObjects[i];
    view.setUint16(offset, toEntityId(o.id)); offset += 2;
    // 1 byte: tipo
    const typeIdx = WORLD_OBJECT_TYPE_INDEX[o.type] ?? 0;
    view.setUint8(offset, typeIdx); offset += 1;
    view.setUint16(offset, quantizePos(o.position.x)); offset += 2;
    view.setUint16(offset, quantizePos(o.position.z)); offset += 2;
    view.setUint8(offset, quantizeRot(o.rotation ?? 0)); offset += 1;
    view.setUint8(offset, o.status ?? 0); offset += 1; // Reservado para flags
  }
  
  // Jogadores (igual)
  for (let i = 0; i < P; i++) {
    const pl = players[i];
    view.setUint16(offset, toEntityId(pl.id)); offset += 2;
    view.setUint16(offset, quantizePos(pl.position.x)); offset += 2;
    view.setUint16(offset, quantizePos(pl.position.z)); offset += 2;
    view.setUint8(offset, quantizeRot(pl.rotation)); offset += 1;
    view.setUint16(offset, pl.stats?.hp ?? 0); offset += 2;
    view.setUint16(offset, pl.stats?.mana ?? 0); offset += 2;
    view.setUint8(offset, pl.level ?? 1); offset += 1;
  }
  return buffer;
}

function deserializeWorldUpdateFull(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const N = view.getUint16(offset); offset += 2;
  const M = view.getUint16(offset); offset += 2;
  const P = view.getUint16(offset); offset += 2;
  const monsters = [];
  for (let i = 0; i < N; i++) {
    const id = view.getUint16(offset); offset += 2;
    const typeIdx = view.getUint8(offset); offset += 1;
    const monsterType = MONSTER_TYPE_BY_INDEX[typeIdx] ?? 'BLACK_MIST_ZOMBIE';
    const posX = dequantizePos(view.getUint16(offset)); offset += 2;
    const posZ = dequantizePos(view.getUint16(offset)); offset += 2;
    const rot = dequantizeRot(view.getUint8(offset)); offset += 1;
    const hp = view.getUint16(offset); offset += 2;
    const maxHp = view.getUint16(offset); offset += 2;
    
    // Lê a escala, se presente
    const hasScale = view.getUint8(offset); offset += 1;
    let scale = null;
    if (hasScale === 1) {
      const scaleX = view.getUint16(offset) / 100; offset += 2;
      const scaleY = view.getUint16(offset) / 100; offset += 2;
      const scaleZ = view.getUint16(offset) / 100; offset += 2;
      scale = { x: scaleX, y: scaleY, z: scaleZ };
    }
    
    monsters.push({ 
      id, 
      monsterType, 
      position: { x: posX, z: posZ }, 
      rotation: rot, 
      stats: { hp, maxHp },
      ...(scale ? { scale } : {})
    });
  }
  const worldObjects = [];
  for (let i = 0; i < M; i++) {
    const id = view.getUint16(offset); offset += 2;
    const typeIdx = view.getUint8(offset); offset += 1;
    const type = WORLD_OBJECT_TYPE_BY_INDEX[typeIdx] ?? 'TREE';
    const posX = dequantizePos(view.getUint16(offset)); offset += 2;
    const posZ = dequantizePos(view.getUint16(offset)); offset += 2;
    const rot = dequantizeRot(view.getUint8(offset)); offset += 1;
    const status = view.getUint8(offset); offset += 1;
    worldObjects.push({ id, type, position: { x: posX, z: posZ }, rotation: rot, status });
  }
  const players = [];
  for (let i = 0; i < P; i++) {
    const id = view.getUint16(offset); offset += 2;
    const posX = dequantizePos(view.getUint16(offset)); offset += 2;
    const posZ = dequantizePos(view.getUint16(offset)); offset += 2;
    const rot = dequantizeRot(view.getUint8(offset)); offset += 1;
    const hp = view.getUint16(offset); offset += 2;
    const mana = view.getUint16(offset); offset += 2;
    const level = view.getUint8(offset); offset += 1;
    players.push({ id, position: { x: posX, z: posZ }, rotation: rot, stats: { hp, mana }, level });
  }
  return { opcode, monsters, worldObjects, players };
}

// Serialização binária para delta de monstros (adicionados/atualizados e removidos)
// Formato:
// [opcode][N_add][N_rem][...N_add monstros...][...N_rem ids...]
// Cada monstro: 2 id + 1 tipo + 2 x + 2 z + 1 rot + 2 hp + 2 maxHp + scale bytes = 12 bytes (básico) + scale bytes
// Cada id removido: 2 bytes
function serializeMonsterDeltaUpdate({ addedOrUpdated, removed }) {
  const N_add = addedOrUpdated.length;
  const N_rem = removed.length;
  
  // Calcula o tamanho adicional para scales de monstros
  let scaleExtraBytes = 0;
  for (let i = 0; i < N_add; i++) {
    if (addedOrUpdated[i].scale) {
      scaleExtraBytes += 7; // 1 (flag) + 2*3 (x,y,z)
    } else {
      scaleExtraBytes += 1; // Apenas 1 byte para flag = 0
    }
  }
  
  const buffer = new ArrayBuffer(1 + 2 + 2 + (N_add * 12) + scaleExtraBytes + (N_rem * 2));
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x21); offset += 1; // opcode exclusivo para delta de monstros
  view.setUint16(offset, N_add); offset += 2;
  view.setUint16(offset, N_rem); offset += 2;
  
  // Monstros adicionados/atualizados
  for (let i = 0; i < N_add; i++) {
    const m = addedOrUpdated[i];
    view.setUint16(offset, toEntityId(m.id)); offset += 2;
    const typeIdx = MONSTER_TYPE_INDEX[m.monsterType] ?? 0;
    view.setUint8(offset, typeIdx); offset += 1;
    view.setUint16(offset, quantizePos(m.position.x)); offset += 2;
    view.setUint16(offset, quantizePos(m.position.z)); offset += 2;
    view.setUint8(offset, quantizeRot(m.rotation)); offset += 1;
    view.setUint16(offset, m.stats?.hp ?? 0); offset += 2;
    view.setUint16(offset, m.stats?.maxHp ?? 1); offset += 2;
    
    // Adiciona escala, se presente
    if (m.scale) {
      view.setUint8(offset, 1); offset += 1; // Flag indicando que tem scale
      view.setUint16(offset, Math.floor(m.scale.x * 100)); offset += 2;
      view.setUint16(offset, Math.floor(m.scale.y * 100)); offset += 2;
      view.setUint16(offset, Math.floor(m.scale.z * 100)); offset += 2;
    } else {
      view.setUint8(offset, 0); offset += 1; // Flag indicando que não tem scale
    }
  }
  
  // IDs removidos
  for (let i = 0; i < N_rem; i++) {
    view.setUint16(offset, toEntityId(removed[i])); offset += 2;
  }
  return buffer;
}

function deserializeMonsterDeltaUpdate(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const N_add = view.getUint16(offset); offset += 2;
  const N_rem = view.getUint16(offset); offset += 2;
  
  const addedOrUpdated = [];
  for (let i = 0; i < N_add; i++) {
    const id = view.getUint16(offset); offset += 2;
    const typeIdx = view.getUint8(offset); offset += 1;
    const monsterType = MONSTER_TYPE_BY_INDEX[typeIdx] ?? 'BLACK_MIST_ZOMBIE';
    const posX = dequantizePos(view.getUint16(offset)); offset += 2;
    const posZ = dequantizePos(view.getUint16(offset)); offset += 2;
    const rot = dequantizeRot(view.getUint8(offset)); offset += 1;
    const hp = view.getUint16(offset); offset += 2;
    const maxHp = view.getUint16(offset); offset += 2;
    
    // Lê a escala, se presente
    const hasScale = view.getUint8(offset); offset += 1;
    let scale = null;
    if (hasScale === 1) {
      const scaleX = view.getUint16(offset) / 100; offset += 2;
      const scaleY = view.getUint16(offset) / 100; offset += 2;
      const scaleZ = view.getUint16(offset) / 100; offset += 2;
      scale = { x: scaleX, y: scaleY, z: scaleZ };
    }
    
    addedOrUpdated.push({ 
      id, 
      monsterType, 
      position: { x: posX, z: posZ }, 
      rotation: rot, 
      stats: { hp, maxHp },
      ...(scale ? { scale } : {})
    });
  }
  
  const removed = [];
  for (let i = 0; i < N_rem; i++) {
    removed.push(view.getUint16(offset)); offset += 2;
  }
  
  return { opcode, addedOrUpdated, removed };
}

// Serialização binária para batching de efeitos de combate (dano, cura, status, floating text)
// Formato: [opcode][N][N efeitos...]
// Cada efeito: 2 sourceId + 2 targetId + 1 skillId + 2 value + 1 effectType + 1 statusType = 9 bytes
function serializeCombatEffects(effects) {
  const N = effects.length;
  const buffer = new ArrayBuffer(1 + 2 + N * 9);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x30); offset += 1; // opcode exclusivo para combat:effects
  view.setUint16(offset, N); offset += 2;
  for (let i = 0; i < N; i++) {
    const e = effects[i];
    view.setUint16(offset, toEntityId(e.sourceId)); offset += 2;
    view.setUint16(offset, toEntityId(e.targetId)); offset += 2;
    view.setUint8(offset, e.skillId ?? 0); offset += 1;
    view.setUint16(offset, e.value ?? 0); offset += 2;
    view.setUint8(offset, e.effectType ?? 0); offset += 1;
    view.setUint8(offset, e.statusType ?? 0); offset += 1;
  }
  return buffer;
}

function deserializeCombatEffects(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const N = view.getUint16(offset); offset += 2;
  const effects = [];
  for (let i = 0; i < N; i++) {
    const sourceId = view.getUint16(offset); offset += 2;
    const targetId = view.getUint16(offset); offset += 2;
    const skillId = view.getUint8(offset); offset += 1;
    const value = view.getUint16(offset); offset += 2;
    const effectType = view.getUint8(offset); offset += 1;
    const statusType = view.getUint8(offset); offset += 1;
    effects.push({ sourceId, targetId, skillId, value, effectType, statusType });
  }
  return effects;
}

// Serialização binária para player:init
function serializePlayerInit({ id, name, position, rotation, stats, level, xp, nextLevelXp }) {
  // Calcula tamanho do buffer: 1 (opcode) + 4 (id) + 1 (nameLen) + nameLen + 4*3 (x,y,z) + 4 (rot) + 2*6 (stats) + 1 (level) + 4*2 (xp, nextLevelXp)
  const nameBytes = new TextEncoder().encode(name || '');
  const nameLen = Math.min(nameBytes.length, 255);
  const buffer = new ArrayBuffer(1 + 4 + 1 + nameLen + 4*3 + 4 + 2*6 + 1 + 4*2);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x10); offset += 1; // opcode
  view.setUint32(offset, id); offset += 4;
  view.setUint8(offset, nameLen); offset += 1;
  for (let i = 0; i < nameLen; i++) {
    view.setUint8(offset++, nameBytes[i]);
  }
  view.setFloat32(offset, position.x); offset += 4;
  view.setFloat32(offset, position.y); offset += 4;
  view.setFloat32(offset, position.z); offset += 4;
  view.setFloat32(offset, rotation); offset += 4;
  view.setUint16(offset, stats.hp); offset += 2;
  view.setUint16(offset, stats.maxHp); offset += 2;
  view.setUint16(offset, stats.mana); offset += 2;
  view.setUint16(offset, stats.maxMana); offset += 2;
  view.setUint16(offset, stats.attack); offset += 2;
  view.setUint16(offset, stats.defense); offset += 2;
  view.setUint8(offset, level); offset += 1;
  view.setUint32(offset, xp); offset += 4;
  view.setUint32(offset, nextLevelXp); offset += 4;
  return buffer;
}

function deserializePlayerInit(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const id = view.getUint32(offset); offset += 4;
  const nameLen = view.getUint8(offset); offset += 1;
  let name = '';
  for (let i = 0; i < nameLen; i++) {
    name += String.fromCharCode(view.getUint8(offset++));
  }
  const position = {
    x: view.getFloat32(offset), offset: offset += 4,
    y: view.getFloat32(offset), offset: offset += 4,
    z: view.getFloat32(offset), offset: offset += 4
  };
  const rotation = view.getFloat32(offset); offset += 4;
  const stats = {
    hp: view.getUint16(offset), offset: offset += 2,
    maxHp: view.getUint16(offset), offset: offset += 2,
    mana: view.getUint16(offset), offset: offset += 2,
    maxMana: view.getUint16(offset), offset: offset += 2,
    attack: view.getUint16(offset), offset: offset += 2,
    defense: view.getUint16(offset), offset: offset += 2
  };
  const level = view.getUint8(offset); offset += 1;
  const xp = view.getUint32(offset); offset += 4;
  const nextLevelXp = view.getUint32(offset); offset += 4;
  return { opcode, id, name, position, rotation, stats, level, xp, nextLevelXp };
}

// Serialização binária para player:disconnected
function serializePlayerDisconnected(id, reason) {
  const buffer = new ArrayBuffer(6); // 1 (opcode) + 4 (id) + 1 (reason)
  const view = new DataView(buffer);
  view.setUint8(0, 0x11); // opcode para player:disconnected
  view.setUint32(1, toEntityId(id));
  view.setUint8(5, reason);
  return buffer;
}
function deserializePlayerDisconnected(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    id: view.getUint32(1),
    reason: view.getUint8(5)
  };
}

// Serialização binária para player:joined (idêntico ao player:init, mas opcode 0x12)
function serializePlayerJoined({ id, name, position, rotation, stats, level, xp, nextLevelXp }) {
  // name: string, prefixado com 1 byte de tamanho
  const nameBytes = new TextEncoder().encode(name);
  const nameLen = Math.min(nameBytes.length, 255);
  const buffer = new ArrayBuffer(1 + 4 + 1 + nameLen + 4*3 + 4 + 2*6 + 1 + 4*2);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x12); offset += 1; // opcode
  view.setUint32(offset, id); offset += 4;
  view.setUint8(offset, nameLen); offset += 1;
  for (let i = 0; i < nameLen; i++) {
    view.setUint8(offset + i, nameBytes[i]);
  }
  offset += nameLen;
  view.setFloat32(offset, position.x, true); offset += 4;
  view.setFloat32(offset, position.y, true); offset += 4;
  view.setFloat32(offset, position.z, true); offset += 4;
  view.setFloat32(offset, rotation, true); offset += 4;
  view.setUint16(offset, stats.hp, true); offset += 2;
  view.setUint16(offset, stats.maxHp, true); offset += 2;
  view.setUint16(offset, stats.mana, true); offset += 2;
  view.setUint16(offset, stats.maxMana, true); offset += 2;
  view.setUint16(offset, stats.attack, true); offset += 2;
  view.setUint16(offset, stats.defense, true); offset += 2;
  view.setUint8(offset, level); offset += 1;
  view.setUint32(offset, xp, true); offset += 4;
  view.setUint32(offset, nextLevelXp, true); offset += 4;
  return buffer;
}
function deserializePlayerJoined(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const id = view.getUint32(offset); offset += 4;
  const nameLen = view.getUint8(offset); offset += 1;
  let name = '';
  for (let i = 0; i < nameLen; i++) {
    name += String.fromCharCode(view.getUint8(offset + i));
  }
  offset += nameLen;
  const x = view.getFloat32(offset, true); offset += 4;
  const y = view.getFloat32(offset, true); offset += 4;
  const z = view.getFloat32(offset, true); offset += 4;
  const rotation = view.getFloat32(offset, true); offset += 4;
  const hp = view.getUint16(offset, true); offset += 2;
  const maxHp = view.getUint16(offset, true); offset += 2;
  const mana = view.getUint16(offset, true); offset += 2;
  const maxMana = view.getUint16(offset, true); offset += 2;
  const attack = view.getUint16(offset, true); offset += 2;
  const defense = view.getUint16(offset, true); offset += 2;
  const level = view.getUint8(offset); offset += 1;
  const xp = view.getUint32(offset, true); offset += 4;
  const nextLevelXp = view.getUint32(offset, true); offset += 4;
  return {
    opcode,
    id,
    name,
    position: { x, y, z },
    rotation,
    stats: { hp, maxHp, mana, maxMana, attack, defense },
    level,
    xp,
    nextLevelXp
  };
}

// Serialização binária para player:existing (alias de player:joined, mas opcode 0x13)
function serializePlayerExisting(args) {
  // Só muda o opcode
  const buffer = serializePlayerJoined(args);
  const view = new DataView(buffer);
  view.setUint8(0, 0x13); // opcode para player:existing
  return buffer;
}
function deserializePlayerExisting(buffer) {
  // Mesmo formato de player:joined
  return deserializePlayerJoined(buffer);
}

// Serialização binária para player:rotate (opcode 0x14)
function serializePlayerRotate({ id, rotation }) {
  const buffer = new ArrayBuffer(9); // 1 + 4 + 4
  const view = new DataView(buffer);
  view.setUint8(0, 0x14); // opcode
  view.setUint32(1, toEntityId(id), true); // id (little-endian)
  view.setFloat32(5, rotation, true); // rotation (little-endian)
  return buffer;
}
function deserializePlayerRotate(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    id: view.getUint32(1, true),
    rotation: view.getFloat32(5, true)
  };
}

// Serialização binária para player:rotated (opcode 0x15)
function serializePlayerRotated({ id, rotation }) {
  const buffer = new ArrayBuffer(9); // 1 + 4 + 4
  const view = new DataView(buffer);
  view.setUint8(0, 0x15); // opcode
  view.setUint32(1, toEntityId(id), true); // id (little-endian)
  view.setFloat32(5, rotation, true); // rotation (little-endian)
  return buffer;
}
function deserializePlayerRotated(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    id: view.getUint32(1, true),
    rotation: view.getFloat32(5, true)
  };
}

// Serialização binária para player:useAbility (opcode 0x16)
function serializePlayerUseAbility({ playerId, skillId, targetId = 0, posX = 0, posY = 0, posZ = 0, extra = '' }) {
  const extraBytes = new TextEncoder().encode(extra || '');
  const extraLen = Math.min(extraBytes.length, 255);
  const buffer = new ArrayBuffer(1 + 4 + 1 + 4 + 4 + 4 + 4 + 1 + extraLen);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x16); offset += 1; // opcode
  view.setUint32(offset, toEntityId(playerId), true); offset += 4;
  view.setUint8(offset, skillId); offset += 1;
  view.setUint32(offset, toEntityId(targetId), true); offset += 4;
  view.setFloat32(offset, posX, true); offset += 4;
  view.setFloat32(offset, posY, true); offset += 4;
  view.setFloat32(offset, posZ, true); offset += 4;
  view.setUint8(offset, extraLen); offset += 1;
  for (let i = 0; i < extraLen; i++) {
    view.setUint8(offset + i, extraBytes[i]);
  }
  // Logging detalhado
  logBinary(`[BINÁRIO] serializePlayerUseAbility: playerId=${playerId}, skillId=${skillId}, targetId=${targetId}, pos=(${posX},${posY},${posZ}), extraLen=${extraLen}`);
  return buffer;
}

function deserializePlayerUseAbility(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const playerId = view.getUint32(offset, true); offset += 4;
  const skillId = view.getUint8(offset); offset += 1;
  const targetId = view.getUint32(offset, true); offset += 4;
  const posX = view.getFloat32(offset, true); offset += 4;
  const posY = view.getFloat32(offset, true); offset += 4;
  const posZ = view.getFloat32(offset, true); offset += 4;
  const extraLen = view.getUint8(offset); offset += 1;
  let extra = '';
  for (let i = 0; i < extraLen; i++) {
    extra += String.fromCharCode(view.getUint8(offset + i));
  }
  // Logging detalhado
  logBinary(`[BINÁRIO] deserializePlayerUseAbility: playerId=${playerId}, skillId=${skillId}, targetId=${targetId}, pos=(${posX},${posY},${posZ}), extraLen=${extraLen}`);
  return { opcode, playerId, skillId, targetId, posX, posY, posZ, extra };
}

// Serialização binária para player:abilityUsed (opcode 0x17) - CONTRATO ENRIQUECIDO
function serializePlayerAbilityUsed({ playerId, skillId, posX = 0, posY = 0, posZ = 0, targetId = 0, targetX = 0, targetY = 0, targetZ = 0, teleport = 0, teleportX = 0, teleportY = 0, teleportZ = 0, areaEffect = 0, extra = '' }) {
  const extraBytes = new TextEncoder().encode(extra || '');
  const extraLen = Math.min(extraBytes.length, 255);
  const buffer = new ArrayBuffer(1 + 4 + 1 + 4*3 + 4 + 4*3 + 1 + 4*3 + 1 + 1 + extraLen);
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x17); offset += 1; // opcode
  view.setUint32(offset, toEntityId(playerId), true); offset += 4;
  view.setUint8(offset, skillId); offset += 1;
  view.setFloat32(offset, posX, true); offset += 4;
  view.setFloat32(offset, posY, true); offset += 4;
  view.setFloat32(offset, posZ, true); offset += 4;
  view.setUint32(offset, toEntityId(targetId), true); offset += 4;
  view.setFloat32(offset, targetX, true); offset += 4;
  view.setFloat32(offset, targetY, true); offset += 4;
  view.setFloat32(offset, targetZ, true); offset += 4;
  view.setUint8(offset, teleport ? 1 : 0); offset += 1;
  view.setFloat32(offset, teleportX, true); offset += 4;
  view.setFloat32(offset, teleportY, true); offset += 4;
  view.setFloat32(offset, teleportZ, true); offset += 4;
  view.setUint8(offset, areaEffect ? 1 : 0); offset += 1;
  view.setUint8(offset, extraLen); offset += 1;
  for (let i = 0; i < extraLen; i++) {
    view.setUint8(offset + i, extraBytes[i]);
  }
  logBinary(`[BINÁRIO] serializePlayerAbilityUsed: playerId=${playerId}, skillId=${skillId}, pos=(${posX},${posY},${posZ}), targetId=${targetId}, target=(${targetX},${targetY},${targetZ}), teleport=${teleport}, teleportPos=(${teleportX},${teleportY},${teleportZ}), areaEffect=${areaEffect}, extraLen=${extraLen}`);
  return buffer;
}

function deserializePlayerAbilityUsed(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const playerId = view.getUint32(offset, true); offset += 4;
  const skillId = view.getUint8(offset); offset += 1;
  const posX = view.getFloat32(offset, true); offset += 4;
  const posY = view.getFloat32(offset, true); offset += 4;
  const posZ = view.getFloat32(offset, true); offset += 4;
  const targetId = view.getUint32(offset, true); offset += 4;
  const targetX = view.getFloat32(offset, true); offset += 4;
  const targetY = view.getFloat32(offset, true); offset += 4;
  const targetZ = view.getFloat32(offset, true); offset += 4;
  const teleport = view.getUint8(offset); offset += 1;
  const teleportX = view.getFloat32(offset, true); offset += 4;
  const teleportY = view.getFloat32(offset, true); offset += 4;
  const teleportZ = view.getFloat32(offset, true); offset += 4;
  const areaEffect = view.getUint8(offset); offset += 1;
  const extraLen = view.getUint8(offset); offset += 1;
  let extra = '';
  for (let i = 0; i < extraLen; i++) {
    extra += String.fromCharCode(view.getUint8(offset + i));
  }
  logBinary(`[BINÁRIO] deserializePlayerAbilityUsed: playerId=${playerId}, skillId=${skillId}, pos=(${posX},${posY},${posZ}), targetId=${targetId}, target=(${targetX},${targetY},${targetZ}), teleport=${teleport}, teleportPos=(${teleportX},${teleportY},${teleportZ}), areaEffect=${areaEffect}, extraLen=${extraLen}`);
  return {
    opcode,
    playerId,
    skillId,
    abilityId: skillId, // Compatibilidade com cliente
    position: { x: posX, y: posY, z: posZ },
    targetId,
    targetPosition: { x: targetX, y: targetY, z: targetZ },
    teleport: !!teleport,
    teleportPosition: { x: teleportX, y: teleportY, z: teleportZ },
    areaEffect: !!areaEffect,
    extra
  };
}

// Serialização binária para player:respawn (opcode 0x18)
function serializePlayerRespawn({ id, position, rotation, hp, mana, level, xp }) {
  const buffer = new ArrayBuffer(1 + 4 + 4*3 + 4 + 2 + 2 + 1 + 4); // 29 bytes
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x18); offset += 1; // opcode
  view.setUint32(offset, id, true); offset += 4;
  view.setFloat32(offset, position.x, true); offset += 4;
  view.setFloat32(offset, position.y, true); offset += 4;
  view.setFloat32(offset, position.z, true); offset += 4;
  view.setFloat32(offset, rotation, true); offset += 4;
  view.setUint16(offset, hp, true); offset += 2;
  view.setUint16(offset, mana, true); offset += 2;
  view.setUint8(offset, level); offset += 1;
  view.setUint32(offset, xp, true); offset += 4;
  logBinary(`[BINÁRIO] serializePlayerRespawn: id=${id}, pos=(${position.x},${position.y},${position.z}), rot=${rotation}, hp=${hp}, mana=${mana}, level=${level}, xp=${xp}`);
  return buffer;
}

function deserializePlayerRespawn(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const id = view.getUint32(offset, true); offset += 4;
  const x = view.getFloat32(offset, true); offset += 4;
  const y = view.getFloat32(offset, true); offset += 4;
  const z = view.getFloat32(offset, true); offset += 4;
  const rotation = view.getFloat32(offset, true); offset += 4;
  const hp = view.getUint16(offset, true); offset += 2;
  const mana = view.getUint16(offset, true); offset += 2;
  const level = view.getUint8(offset); offset += 1;
  const xp = view.getUint32(offset, true); offset += 4;
  logBinary(`[BINÁRIO] deserializePlayerRespawn: id=${id}, pos=(${x},${y},${z}), rot=${rotation}, hp=${hp}, mana=${mana}, level=${level}, xp=${xp}`);
  return { opcode, id, position: { x, y, z }, rotation, hp, mana, level, xp };
}

// Serialização binária para player:death (expandido)
function serializePlayerDeath({ id, killer = 0, reason = 3, lostLevel = 0, lostXP = 0, newLevel = 1, newXP = 0, killerName = '', killerType = 3 }) {
  const encoder = new TextEncoder();
  const nameBytes = encoder.encode(killerName || '');
  const nameLen = Math.min(nameBytes.length, 255);
  const buffer = new ArrayBuffer(21 + 1 + nameLen + 1); // fixo 21 + killerNameLen + killerType
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset++, 0x14); // opcode
  view.setUint32(offset, id, true); offset += 4;
  view.setUint32(offset, killer, true); offset += 4;
  view.setUint8(offset++, reason);
  view.setUint8(offset++, lostLevel);
  view.setUint32(offset, lostXP, true); offset += 4;
  view.setUint8(offset++, newLevel);
  view.setUint32(offset, newXP, true); offset += 4;
  view.setUint8(offset++, nameLen);
  for (let i = 0; i < nameLen; i++) {
    view.setUint8(offset++, nameBytes[i]);
  }
  view.setUint8(offset++, killerType);
  // Logging detalhado
  if (typeof console !== 'undefined' && console.log) {
    // console.log('[BIN][serializePlayerDeath]', { id, killer, reason, lostLevel, lostXP, newLevel, newXP, killerName, killerType });
  }
  return buffer;
}

function deserializePlayerDeath(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset++);
  const id = view.getUint32(offset, true); offset += 4;
  const killer = view.getUint32(offset, true); offset += 4;
  const reason = view.getUint8(offset++);
  const lostLevel = view.getUint8(offset++);
  const lostXP = view.getUint32(offset, true); offset += 4;
  const newLevel = view.getUint8(offset++);
  const newXP = view.getUint32(offset, true); offset += 4;
  const nameLen = view.getUint8(offset++);
  let killerName = '';
  if (nameLen > 0) {
    const nameBytes = new Uint8Array(buffer, offset, nameLen);
    killerName = new TextDecoder().decode(nameBytes);
    offset += nameLen;
  }
  const killerType = view.getUint8(offset++);
  // Logging detalhado
  if (typeof console !== 'undefined' && console.log) {
    console.log('[BIN][deserializePlayerDeath]', { id, killer, reason, lostLevel, lostXP, newLevel, newXP, killerName, killerType });
  }
  return {
    opcode,
    id,
    killer,
    reason,
    lostLevel,
    lostXP,
    newLevel,
    newXP,
    killerName,
    killerType
  };
}

// Serialização binária para player:syncResponse (opcode 0x1A)
function serializePlayerSyncResponse({ playerId, hp, maxHp, mana, maxMana, cooldowns = {}, timestamp }) {
  const cooldownEntries = Object.entries(cooldowns || {});
  const N = Math.min(cooldownEntries.length, 255);
  const buffer = new ArrayBuffer(1 + 4 + 2*4 + 1 + N*5 + 4); // opcode + playerId + hp/maxHp/mana/maxMana + N + (abilityId+cdEnd)*N + timestamp
  const view = new DataView(buffer);
  let offset = 0;
  view.setUint8(offset, 0x1A); offset += 1; // opcode
  view.setUint32(offset, playerId, true); offset += 4;
  view.setUint16(offset, hp, true); offset += 2;
  view.setUint16(offset, maxHp, true); offset += 2;
  view.setUint16(offset, mana, true); offset += 2;
  view.setUint16(offset, maxMana, true); offset += 2;
  view.setUint8(offset, N); offset += 1;
  for (let i = 0; i < N; i++) {
    const [abilityId, cdEnd] = cooldownEntries[i];
    view.setUint8(offset, parseInt(abilityId)); offset += 1;
    view.setUint32(offset, Math.floor(cdEnd / 1000), true); offset += 4; // timestamp em segundos
  }
  view.setUint32(offset, Math.floor(timestamp / 1000), true); offset += 4;
  logBinary(`[BINÁRIO] serializePlayerSyncResponse: playerId=${playerId}, hp=${hp}, mana=${mana}, N=${N}, timestamp=${timestamp}`);
  return buffer;
}

function deserializePlayerSyncResponse(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  let offset = 0;
  const opcode = view.getUint8(offset); offset += 1;
  const playerId = view.getUint32(offset, true); offset += 4;
  const hp = view.getUint16(offset, true); offset += 2;
  const maxHp = view.getUint16(offset, true); offset += 2;
  const mana = view.getUint16(offset, true); offset += 2;
  const maxMana = view.getUint16(offset, true); offset += 2;
  const N = view.getUint8(offset); offset += 1;
  const cooldowns = {};
  for (let i = 0; i < N; i++) {
    const abilityId = view.getUint8(offset); offset += 1;
    const cdEnd = view.getUint32(offset, true); offset += 4;
    cooldowns[abilityId] = cdEnd * 1000; // volta para ms
  }
  const timestamp = view.getUint32(offset, true) * 1000; offset += 4;
  logBinary(`[BINÁRIO] deserializePlayerSyncResponse: playerId=${playerId}, hp=${hp}, mana=${mana}, N=${N}, timestamp=${timestamp}`);
  return { opcode, playerId, hp, maxHp, mana, maxMana, cooldowns, timestamp };
}

// Serialização binária para player:moveToPoint
function serializePlayerMoveToPoint({ x, y, z }) {
  const buffer = new ArrayBuffer(13);
  const view = new DataView(buffer);
  view.setUint8(0, 0x50); // opcode customizado
  view.setFloat32(1, x, true);
  view.setFloat32(5, y, true);
  view.setFloat32(9, z, true);
  return buffer;
}
function deserializePlayerMoveToPoint(buffer) {
  buffer = toArrayBuffer(buffer);
  const view = new DataView(buffer);
  return {
    opcode: view.getUint8(0),
    x: view.getFloat32(1, true),
    y: view.getFloat32(5, true),
    z: view.getFloat32(9, true)
  };
}

export {
  serializePlayerMove,
  deserializePlayerMove,
  serializePlayerMoved,
  deserializePlayerMoved,
  serializeMonsterMove,
  deserializeMonsterMove,
  serializeWorldUpdate,
  deserializeWorldUpdate,
  logBinary,
  logJson,
  serializePlayerStatus,
  deserializePlayerStatus,
  serializePlayerMoveInput,
  deserializePlayerMoveInput,
  serializeMonsterDeath,
  deserializeMonsterDeath,
  serializeWorldUpdateFull,
  deserializeWorldUpdateFull,
  serializeMonsterDeltaUpdate,
  deserializeMonsterDeltaUpdate,
  serializeCombatEffects,
  deserializeCombatEffects,
  serializePlayerInit,
  deserializePlayerInit,
  serializePlayerDisconnected,
  deserializePlayerDisconnected,
  serializePlayerJoined,
  deserializePlayerJoined,
  serializePlayerExisting,
  deserializePlayerExisting,
  serializePlayerRotate,
  deserializePlayerRotate,
  serializePlayerRotated,
  deserializePlayerRotated,
  serializePlayerUseAbility,
  deserializePlayerUseAbility,
  serializePlayerAbilityUsed,
  deserializePlayerAbilityUsed,
  serializePlayerRespawn,
  deserializePlayerRespawn,
  serializePlayerDeath,
  deserializePlayerDeath,
  serializePlayerSyncResponse,
  deserializePlayerSyncResponse,
  serializePlayerMoveToPoint,
  deserializePlayerMoveToPoint
}; 