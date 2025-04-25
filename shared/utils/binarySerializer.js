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
  deserializeMonsterDeath
}; 