import zlib from 'zlib';
import { logAuditEvent } from './auditLogger.js';
import { EVENT_TYPE } from '../../../shared/constants/gameConstants.js';

export function compressAndSend(channel, eventName, data) {
  try {
    // Detecta se é binário (ArrayBuffer, Buffer, Uint8Array)
    const isBinary = data instanceof ArrayBuffer ||
      (typeof Buffer !== 'undefined' && data instanceof Buffer) ||
      (typeof Uint8Array !== 'undefined' && data instanceof Uint8Array);
    let eventType = EVENT_TYPE.JSON;
    if (eventName.startsWith('chat:')) eventType = EVENT_TYPE.CHAT;
    else if (eventName.startsWith('bin:')) eventType = EVENT_TYPE.BINARY;
    else if (eventName.startsWith('monster:') || eventName.startsWith('player:') || eventName.startsWith('combat:')) eventType = EVENT_TYPE.CUSTOM;
    if (isBinary) {
      // Envia binário puro
      channel.emit(eventName, data);
      return;
    }
    const json = JSON.stringify(data);
    const jsonSize = json.length;
    let compressed = null;
    let compressedSize = null;
    // Só compacta se o payload for maior que 500 bytes
    if (jsonSize > 500) {
      compressed = zlib.deflateSync(json);
      compressedSize = compressed.length;
      const base64 = compressed.toString('base64');
      channel.emit(eventName, {
        compressed: true,
        data: base64
      });
    } else {
      channel.emit(eventName, data);
    }
  } catch (error) {
    console.error(`Erro ao compactar dados para ${eventName}:`, error);
    channel.emit(eventName, data);
  }
} 