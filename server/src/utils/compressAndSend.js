import zlib from 'zlib';
import { logAuditEvent } from './auditLogger.js';
import { EVENT_TYPE } from '../../../shared/constants/gameConstants.js';

export function compressAndSend(channel, eventName, data) {
  try {
    const json = JSON.stringify(data);
    const jsonSize = json.length;
    let compressed = null;
    let compressedSize = null;
    let eventType = EVENT_TYPE.JSON;
    if (eventName.startsWith('chat:')) eventType = EVENT_TYPE.CHAT;
    else if (eventName.startsWith('bin:')) eventType = EVENT_TYPE.BINARY;
    else if (eventName.startsWith('monster:') || eventName.startsWith('player:') || eventName.startsWith('combat:')) eventType = EVENT_TYPE.CUSTOM;
    // Só compacta se o payload for maior que 500 bytes
    if (jsonSize > 500) {
      compressed = zlib.deflateSync(json);
      compressedSize = compressed.length;
      const base64 = compressed.toString('base64');
      channel.emit(eventName, {
        compressed: true,
        data: base64
      });
      logAuditEvent({
        playerId: channel.playerId || channel.id,
        event: eventName,
        eventType,
        payloadSize: compressedSize,
        serializationTimeMs: null
      });
    } else {
      channel.emit(eventName, data);
      logAuditEvent({
        playerId: channel.playerId || channel.id,
        event: eventName,
        eventType,
        payloadSize: jsonSize,
        serializationTimeMs: null
      });
    }
  } catch (error) {
    console.error(`Erro ao compactar dados para ${eventName}:`, error);
    channel.emit(eventName, data);
    logAuditEvent({
      playerId: channel.playerId || channel.id,
      event: eventName,
      eventType: EVENT_TYPE.JSON,
      payloadSize: JSON.stringify(data).length,
      serializationTimeMs: null
    });
  }
} 