# Plano de Conversão de Eventos JSON para Binário

## Objetivo
Converter todos os eventos críticos de gameplay (movimento, mundo, status, etc) que ainda utilizam JSON para o formato binário, seguindo o padrão já estabelecido no sistema de combate. O objetivo é garantir máxima performance, padronização, clareza e evitar qualquer duplicidade/confusão no código.

## Mapeamento Inicial dos Eventos JSON Ativos

### PLAYER
- [x] player:init (BINÁRIO ✔️)
- [x] player:disconnected (BINÁRIO ✔️)
- [x] player:joined (BINÁRIO ✔️)
- [x] player:existing (BINÁRIO ✔️)
- [x] player:rotate (BINÁRIO ✔️)
- [x] player:rotated (BINÁRIO ✔️)
- [x] player:useAbility (BINÁRIO ✔️)
- [x] player:abilityUsed (BINÁRIO ✔️)
- [x] player:death (BINÁRIO ✔️)
- [x] player:respawn (BINÁRIO ✔️)
- [x] player:syncRequest (JSON) — binário: NÃO PRECISO CONVERTER POIS É SÓ UAM TRIGGER
- [x] player:syncResponse (BINÁRIO ✔️)

### MONSTER
- [ ] monster:spawn (JSON) — binário: NÃO
- [ ] monster:move (JSON) — binário: NÃO
- [ ] monster:attack (JSON) — binário: NÃO
- [ ] monster:damage (JSON) — binário: NÃO
- [ ] monster:death (JSON) — binário: SIM (bin:monster:death)
- [ ] monster:ability (JSON) — binário: NÃO
- [ ] monster:spawned (JSON) — binário: NÃO
- [ ] monster:moved (JSON) — binário: NÃO
- [ ] monster:attacked (JSON) — binário: NÃO
- [ ] monster:died (JSON) — binário: NÃO
- [ ] monster:damaged (JSON) — binário: NÃO

### WORLD
- [ ] world:update (JSON) — binário: SIM (bin:world:update)
- [ ] world:init (JSON) — binário: SIM (bin:world:init)

### Outros
- [ ] Eventos de chat e sistema: permanecem em JSON

## Priorização dos Eventos para Conversão

1. player:init ✔️
2. player:disconnected (PRÓXIMO)
3. player:joined
4. player:existing
5. player:rotate
6. player:rotated
7. player:useAbility
8. player:abilityUsed
9. player:respawn
10. player:target
11. player:syncRequest
12. player:syncResponse
13. monster:spawn
14. monster:move
15. monster:attack
16. monster:damage
17. monster:ability
18. monster:spawned
19. monster:moved
20. monster:attacked
21. monster:died
22. monster:damaged

## Contrato Binário: player:init

**Opcode sugerido:** `0x10`

**Formato do Payload:**
| Campo         | Tipo         | Tamanho/Obs.         |
|---------------|--------------|----------------------|
| id            | Uint32       | 4 bytes              |
| name          | String       | 1 byte tamanho + UTF-8 bytes |
| x             | Float32      | 4 bytes              |
| y             | Float32      | 4 bytes              |
| z             | Float32      | 4 bytes              |
| rotation      | Float32      | 4 bytes              |
| hp            | Uint16       | 2 bytes              |
| maxHp         | Uint16       | 2 bytes              |
| mana          | Uint16       | 2 bytes              |
| maxMana       | Uint16       | 2 bytes              |
| attack        | Uint16       | 2 bytes              |
| defense       | Uint16       | 2 bytes              |
| level         | Uint8        | 1 byte               |
| xp            | Uint32       | 4 bytes              |
| nextLevelXp   | Uint32       | 4 bytes              |

**Strings:** Prefixar com 1 byte de tamanho (até 255 caracteres).

**Exemplo de Serialização:**
```
[opcode][id][nameLen][name][x][y][z][rotation][hp][maxHp][mana][maxMana][attack][defense][level][xp][nextLevelXp]
```

## Contrato Binário: player:disconnected

**Opcode:** `0x11`

**Formato do Payload:**
| Campo   | Tipo   | Tamanho/Obs. |
|---------|--------|--------------|
| id      | Uint32 | 4 bytes      |
| reason  | Uint8  | 1 byte (enum PLAYER_DISCONNECT_REASON) |

**Serialização:**
```
[opcode][id][reason]
```

**Enum de motivos:**
- 0: NORMAL (desconexão voluntária)
- 1: TIMEOUT (inatividade)
- 2: KICK (expulso)
- 3: ERROR (erro de rede)

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID e motivo.
- Cliente loga cada recebimento do evento binário, incluindo ID e motivo.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Contrato Binário: player:joined

**Opcode:** `0x12`

**Formato do Payload:**
| Campo        | Tipo     | Tamanho/Obs.                        |
|--------------|----------|-------------------------------------|
| id           | Uint32   | 4 bytes                             |
| name         | String   | 1 byte tamanho + UTF-8 bytes (até 255) |
| x            | Float32  | 4 bytes                             |
| y            | Float32  | 4 bytes                             |
| z            | Float32  | 4 bytes                             |
| rotation     | Float32  | 4 bytes                             |
| hp           | Uint16   | 2 bytes                             |
| maxHp        | Uint16   | 2 bytes                             |
| mana         | Uint16   | 2 bytes                             |
| maxMana      | Uint16   | 2 bytes                             |
| attack       | Uint16   | 2 bytes                             |
| defense      | Uint16   | 2 bytes                             |
| level        | Uint8    | 1 byte                              |
| xp           | Uint32   | 4 bytes                             |
| nextLevelXp  | Uint32   | 4 bytes                             |

**Serialização:**
```
[opcode][id][nameLen][name][x][y][z][rotation][hp][maxHp][mana][maxMana][attack][defense][level][xp][nextLevelXp]
```

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID e nome do jogador.
- Cliente loga cada recebimento do evento binário, incluindo ID e nome do jogador.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Contrato Binário: player:existing

**Opcode:** `0x13`

**Formato do Payload:**
| Campo        | Tipo     | Tamanho/Obs.                        |
|--------------|----------|-------------------------------------|
| id           | Uint32   | 4 bytes                             |
| name         | String   | 1 byte tamanho + UTF-8 bytes (até 255) |
| x            | Float32  | 4 bytes                             |
| y            | Float32  | 4 bytes                             |
| z            | Float32  | 4 bytes                             |
| rotation     | Float32  | 4 bytes                             |
| hp           | Uint16   | 2 bytes                             |
| maxHp        | Uint16   | 2 bytes                             |
| mana         | Uint16   | 2 bytes                             |
| maxMana      | Uint16   | 2 bytes                             |
| attack       | Uint16   | 2 bytes                             |
| defense      | Uint16   | 2 bytes                             |
| level        | Uint8    | 1 byte                              |
| xp           | Uint32   | 4 bytes                             |
| nextLevelXp  | Uint32   | 4 bytes                             |

**Serialização:**
```
[opcode][id][nameLen][name][x][y][z][rotation][hp][maxHp][mana][maxMana][attack][defense][level][xp][nextLevelXp]
```

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID e nome do jogador.
- Cliente loga cada recebimento do evento binário, incluindo ID e nome do jogador.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Contrato Binário: player:rotate

**Opcode:** `0x14`

**Formato do Payload:**
| Campo     | Tipo     | Tamanho/Obs.         |
|-----------|----------|----------------------|
| id        | Uint32   | 4 bytes              |
| rotation  | Float32  | 4 bytes (radianos)   |

**Serialização:**
```
[opcode][id][rotation]
```
- Todos os campos em little-endian.
- id: identificador único do jogador.
- rotation: ângulo em radianos.

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID, rotation e payloadSize.
- Cliente loga cada recebimento do evento binário, incluindo ID, rotation e payloadSize.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Contrato Binário: player:rotated

**Opcode:** `0x15`

**Formato do Payload:**
| Campo     | Tipo     | Tamanho/Obs.         |
|-----------|----------|----------------------|
| id        | Uint32   | 4 bytes              |
| rotation  | Float32  | 4 bytes (radianos)   |

**Serialização:**
```
[opcode][id][rotation]
```
- Todos os campos em little-endian.
- id: identificador único do jogador.
- rotation: ângulo em radianos.

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID, rotation e payloadSize.
- Cliente loga cada recebimento do evento binário, incluindo ID, rotation e payloadSize.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Contrato Binário: player:useAbility

**Opcode:** `0x16`

**Formato do Payload:**
| Campo     | Tipo     | Tamanho/Obs.                        |
|-----------|----------|-------------------------------------|
| opcode    | Uint8    | 1 byte (0x16)                       |
| playerId  | Uint32   | 4 bytes (little-endian)             |
| skillId   | Uint8    | 1 byte                              |
| targetId  | Uint32   | 4 bytes (little-endian, 0 se não houver) |
| posX      | Float32  | 4 bytes (little-endian, 0 se não usado)  |
| posY      | Float32  | 4 bytes (little-endian, 0 se não usado)  |
| posZ      | Float32  | 4 bytes (little-endian, 0 se não usado)  |
| extra     | String   | 1 byte tamanho + UTF-8 bytes (opcional)  |

**Serialização:**
```
[opcode][playerId][skillId][targetId][posX][posY][posZ][extraLen][extra]
```
- `targetId` pode ser 0 se não houver alvo.
- `posX`, `posY`, `posZ` são usados para habilidades de área/projétil.
- `extra` pode ser string vazia (tamanho 0) na maioria dos casos.

**Logging:**
- Servidor loga cada envio/recebimento do evento binário, incluindo todos os campos.
- Cliente loga cada envio/recebimento do evento binário, incluindo todos os campos.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional (integração binária validada, efeitos e dano OK)

## Contrato Binário: player:abilityUsed

**Opcode:** `0x17`

**Formato do Payload:**
| Campo     | Tipo      | Tamanho/Obs.                                 |
|-----------|-----------|----------------------------------------------|
| opcode    | Uint8     | 1 byte (0x17)                                |
| playerId  | Uint32    | 4 bytes (little-endian)                      |
| skillId   | Uint8     | 1 byte                                       |
| targetId  | Uint32    | 4 bytes (little-endian, 0 se não houver)     |
| posX      | Float32   | 4 bytes (little-endian, 0 se não usado)      |
| posY      | Float32   | 4 bytes (little-endian, 0 se não usado)      |
| posZ      | Float32   | 4 bytes (little-endian, 0 se não usado)      |
| result    | Uint8     | 1 byte (enum: 0=OK, 1=FAIL, etc)             |
| extra     | String    | 1 byte tamanho + UTF-8 bytes (opcional)      |

**Serialização:**
```
[opcode][playerId][skillId][targetId][posX][posY][posZ][result][extraLen][extra]
```

**Status:**
- [x] Serialização/deserialização implementada
- [x] Logging robusto
- [x] Evento JSON removido
- [x] Pipeline cliente-servidor validado
- [x] Atualização do memory-bank concluída

### Atualização: Contrato Binário Enriquecido (Teleport)
- [x] Contrato binário agora inclui todos os campos necessários para efeitos visuais:
  - playerId, skillId, abilityId, position, targetPosition, teleport, teleportPosition, areaEffect, extra
- [x] Compatibilidade garantida: campo abilityId adicionado no deserializador para o cliente funcionar sem alterações profundas
- [x] Adicionado 'bin:player:abilityUsed' em eventosPermitidosMultiplos para permitir múltiplos envios por tick
- [x] Efeito visual de teleporte agora aparece para todos os jogadores (ajuste no callback do cliente)
- [x] Pipeline validado ponta a ponta (cliente-servidor-cliente)

## Contrato Binário: player:respawn

**Opcode:** `0x18`

**Formato do Payload:**
| Campo    | Tipo      | Tamanho/Obs.                |
|----------|-----------|-----------------------------|
| id       | Uint32    | 4 bytes (ID do jogador)     |
| x        | Float32   | 4 bytes (posição X)         |
| y        | Float32   | 4 bytes (posição Y)         |
| z        | Float32   | 4 bytes (posição Z)         |
| rotation | Float32   | 4 bytes (rotação inicial)   |
| hp       | Uint16    | 2 bytes (vida atual)        |
| mana     | Uint16    | 2 bytes (mana atual)        |
| level    | Uint8     | 1 byte (nível do jogador)   |
| xp       | Uint32    | 4 bytes (xp atual)          |

**Serialização:**
```
[opcode][id][x][y][z][rotation][hp][mana][level][xp]
```
- Todos os campos em little-endian.
- Logging detalhado obrigatório no envio e recebimento.

**Logging:**
- Servidor loga cada envio do evento binário, incluindo ID, posição, rotação, hp, mana, level, xp e payloadSize.
- Cliente loga cada recebimento do evento binário, incluindo todos os campos.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Pipeline cliente-servidor validado
- [x] Atualização do memory-bank concluída

## Contrato Binário: player:death

**Opcode:** `0x14`

**Formato do Payload:**
| Campo      | Tipo     | Tamanho/Obs.                                 |
|------------|----------|----------------------------------------------|
| id         | Uint32   | 4 bytes (ID do jogador que morreu)           |
| killer     | Uint32   | 4 bytes (ID do assassino, 0 se nenhum)       |
| reason     | Uint8    | 1 byte (enum PLAYER_DEATH_REASON)            |
| lostLevel  | Uint8    | 1 byte (níveis perdidos)                     |
| lostXP     | Uint32   | 4 bytes (XP perdido)                         |
| newLevel   | Uint8    | 1 byte (nível atual após morte)              |
| newXP      | Uint32   | 4 bytes (XP atual após morte)                |
| killerName | String   | 1 byte tamanho + UTF-8 bytes (até 255)       |
| killerType | Uint8    | 1 byte (0=monster, 1=player, 2=environment, 3=other) |

**Ordem no buffer:**
```
[opcode][id][killer][reason][lostLevel][lostXP][newLevel][newXP][killerNameLen][killerName][killerType]
```

**Strings:** Prefixadas com 1 byte de tamanho (até 255 caracteres).
**Numéricos:** Sempre little-endian.

**Penalidade de morte:**
- Agora configurável via `gameConstants.js`:
  - `XP_PERCENT`: percentual de XP perdido
  - `LEVELS_LOST`: níveis perdidos fixos
  - `MIN_LEVEL`: nível mínimo permitido
- Lógica: aplica perda de níveis, depois perda de XP, nunca abaixo do nível mínimo.

**Logging:**
- Logging detalhado no envio e recebimento do evento binário, incluindo todos os campos.

**Cliente:**
- Exibe nome e tipo do assassino de forma amigável (Monstro, Jogador, Ambiente).
- Tela de morte mostra penalidade real aplicada.

**Problemas e soluções:**
- Corrigido bug de valores undefined e penalidade zerada (cálculo agora ocorre antes de atualizar os valores do jogador).
- Corrigido bug de exibição de killerType como número ou "desconhecido" (HUD agora traduz para texto amigável).
- Contrato binário expandido para suportar tela de morte rica e flexível.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido
- [x] Logging robusto
- [x] Testado e funcional

## Atualização: Remoção do evento player:target

Após análise detalhada do fluxo de targeting no cliente e servidor, foi constatado que o evento `player:target` não está em uso real no pipeline de rede. O targeting é tratado localmente no cliente e, quando necessário, o alvo é transmitido ao servidor via o evento binário de uso de habilidade (`bin:player:useAbility`), que já inclui o campo `targetId`.

Portanto, o evento `player:target` foi removido completamente do projeto:
- Removido de `shared/constants/gameConstants.js`.
- Removido de listas de eventos permitidos no servidor.
- Nenhuma emissão ou handler existia no cliente ou servidor.

**Motivo:**
- Não estava em uso real.
- Não influencia o fluxo de targeting ou gameplay.
- Mantém o código mais limpo e padronizado.

Se targeting persistente for implementado no futuro, um novo contrato binário poderá ser definido conforme necessidade.

## Progresso e Próximos Passos
- [x] player:init convertido para binário, testado e funcional
- [x] player:disconnected convertido para binário, testado e funcional
- [x] player:joined convertido para binário, testado e funcional
- [x] player:existing convertido para binário, testado e funcional
- [x] player:rotate convertido para binário, testado e funcional
- [x] player:rotated convertido para binário, testado e funcional
- [x] player:useAbility convertido para binário, testado e funcional
- [x] player:abilityUsed convertido para binário, testado e funcional
- [x] player:respawn convertido para binário, testado e funcional
- [x] player:syncResponse convertido para binário, testado e funcional
- [x] player:death convertido para binário, testado e funcional
- [x] player:target removido do projeto (não era necessário)

**Todos os eventos PLAYER críticos agora estão 100% binários, validados ponta a ponta, com logging robusto e documentação atualizada. O pipeline de rede está padronizado, eficiente e pronto para evoluções futuras.**

- [ ] Implementação, testes e validação do próximo evento (MONSTER/WORLD)
- [ ] Atualização deste documento a cada etapa concluída

## Observações Importantes
- Eventos de chat e sistema podem permanecer em JSON, conforme decisão do projeto.
- Sempre remover o evento antigo do código e das constantes após a conversão.
- Garantir que o painel de auditoria/logs reflita apenas os eventos binários após a migração.
- Seguir rigorosamente o padrão já adotado no sistema de combate para opcodes, serialização e logging.

## Migração: player:syncResponse para binário

**Contrato Binário:**
- Opcode: 0x1A
- [opcode][playerId][hp][maxHp][mana][maxMana][N][abilityId_1][cdEnd_1]...[abilityId_N][cdEnd_N][timestamp]
- playerId: Uint32
- hp, maxHp, mana, maxMana: Uint16
- N: Uint8 (quantidade de cooldowns)
- abilityId: Uint8
- cdEnd: Uint32 (timestamp em segundos)
- timestamp: Uint32 (timestamp do servidor em segundos)
- Todos os campos little-endian.

**Fluxo:**
- Cliente envia `player:syncRequest` (JSON, comando simples).
- Servidor responde com `bin:player:syncResponse` (binário, status e cooldowns).

**Implementação:**
- Funções: `serializePlayerSyncResponse`, `deserializePlayerSyncResponse`.
- Logging detalhado no envio e recebimento (playerId, N, abilityIds, timestamps, payloadSize).
- Atualizado pipeline de rede no servidor e cliente.
- Removido handler antigo JSON do cliente.

**Status:**
- [x] Serialização/deserialização implementada
- [x] Evento JSON removido do cliente
- [x] Logging robusto
- [x] Pipeline cliente-servidor validado
- [x] Atualização do memory-bank concluída

**Decisão:**
- O comando `player:syncRequest` permanece em JSON, pois é apenas trigger.
- A resposta crítica agora é sempre binária, padronizando o fluxo de status do jogador.

## Limpeza dos eventos JSON PLAYER em gameConstants.js

Após análise do fluxo real do projeto, todos os eventos PLAYER que já foram migrados para binário ou removidos do pipeline foram eliminados do arquivo `shared/constants/gameConstants.js`. Permanece apenas o evento `player:syncRequest` em JSON, pois é um trigger do cliente para o servidor. Os comentários foram atualizados para refletir o novo padrão.

**Critério:**
- Remover tudo que já está 100% binário ou não é mais utilizado.
- Manter apenas o que está ativo no fluxo real.
- Eventos MONSTER e WORLD serão analisados individualmente em etapa posterior. 