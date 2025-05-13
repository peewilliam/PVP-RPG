import fs from 'fs';
import path from 'path';

// Utilitário de logging de auditoria
// Todos os logs devem conter: event, eventType, playerId (se aplicável), payloadSize, entitiesSent, serializationTimeMs, timestamp
const LOG_DIR = path.resolve('server/src/logs');

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function getLogFilePath() {
  const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return path.join(LOG_DIR, `audit-${date}.jsonl`);
}

/**
 * Registra um evento de auditoria no log
 * @param {Object} eventObj - Deve conter pelo menos: event, eventType, playerId, payloadSize, entitiesSent, serializationTimeMs
 */
export function logAuditEvent(eventObj) {
  ensureLogDir();
  const filePath = getLogFilePath();
  const line = JSON.stringify({ ...eventObj, timestamp: new Date().toISOString() }) + '\n';
  fs.appendFile(filePath, line, err => {
    if (err) {
      // Se der erro, loga no console como fallback
      console.error('Erro ao salvar log de auditoria:', err);
    }
  });
} 