# Convenção de Tipos de Evento (eventType)

## Objetivo
Padronizar a classificação dos eventos de rede enviados do servidor para o cliente, facilitando a análise, filtragem, auditoria e otimização do tráfego no MMORPG. Essa convenção garante clareza nos logs, métricas e no painel SPA (/audit).

---

## Tipos de Evento Padronizados

### `BINARY`
- **Descrição:** Eventos enviados em formato binário, geralmente para otimização de performance e redução de payload.
- **Exemplos:**
  - `MONSTER_DELTA_UPDATE`
  - `WORLD_UPDATE`
  - `PLAYER_MOVED`
  - `COMBAT_EFFECTS`
- **Uso:** Sempre que o evento utiliza serialização binária customizada (ex: buffer, DataView).

### `JSON`
- **Descrição:** Eventos enviados em formato JSON padrão.
- **Exemplos:**
  - Atualizações de status simples
  - Mensagens de sistema
- **Uso:** Eventos que não exigem performance máxima ou são menos frequentes.

### `CHAT`
- **Descrição:** Eventos relacionados ao sistema de chat do jogo.
- **Exemplos:**
  - `chat:message`
  - `chat:private`
- **Uso:** Qualquer evento cujo nome comece com `chat:`.

### `CUSTOM`
- **Descrição:** Eventos customizados do jogo, geralmente em JSON, mas que não se encaixam nas categorias acima.
- **Exemplos:**
  - `monster:spawn`, `player:useAbility`, `combat:damageDealt`
- **Uso:** Eventos de gameplay, habilidades, ações, etc.

### `SYSTEM`
- **Descrição:** Reservado para eventos internos do sistema, logs automáticos, heartbeat, etc.
- **Exemplos:**
  - `system:heartbeat`, `system:log`
- **Uso:** Eventos de manutenção, monitoramento ou integração.

---

## Como Utilizar
- O tipo de evento deve ser definido no momento do envio/log do evento, usando o objeto `EVENT_TYPE` de `shared/constants/gameConstants.js`.
- Utilitários como `compressAndSend` e `logAuditEvent` já estão adaptados para classificar automaticamente.
- Para eventos binários, sempre use `EVENT_TYPE.BINARY`.
- Para eventos de chat, use `EVENT_TYPE.CHAT`.
- Para eventos JSON comuns, use `EVENT_TYPE.JSON`.
- Para eventos customizados de gameplay, use `EVENT_TYPE.CUSTOM`.
- Para eventos internos do sistema, use `EVENT_TYPE.SYSTEM`.

---

## Impacto nos Logs e Painel SPA
- O campo `eventType` aparece em todos os logs de auditoria e pode ser filtrado no painel SPA (/audit).
- Gráficos, métricas e relatórios agrupam eventos por tipo, facilitando a análise de tráfego e performance.
- A padronização permite identificar rapidamente gargalos, eventos críticos e oportunidades de otimização.

---

## Exemplo de Log
```json
{
  "timestamp": "2024-06-10T14:23:01.123Z",
  "event": "MONSTER_DELTA_UPDATE",
  "eventType": "BINARY",
  "playerId": "player_123",
  "entitiesSent": 5,
  "payloadSize": 120,
  "serializationTimeMs": 0.12
}
```

---

## Observações
- Sempre que um novo tipo de evento for criado, avalie se ele se encaixa em uma das categorias acima.
- Em caso de dúvida, utilize `CUSTOM` como fallback.
- Mantenha esta documentação atualizada conforme o projeto evoluir. 