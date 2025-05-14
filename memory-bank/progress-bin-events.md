# Plano de Conversão de Eventos JSON para Binário

## Objetivo
Converter todos os eventos críticos de gameplay (movimento, mundo, status, etc) que ainda utilizam JSON para o formato binário, seguindo o padrão já estabelecido no sistema de combate. O objetivo é garantir máxima performance, padronização, clareza e evitar qualquer duplicidade/confusão no código.

## Mapeamento Inicial dos Eventos JSON Ativos

### PLAYER
- [x] player:init (BINÁRIO ✔️)
- [x] player:disconnected (BINÁRIO ✔️)
- [x] player:joined (BINÁRIO ✔️)
- [x] player:existing (BINÁRIO ✔️)
- [ ] player:rotate (JSON) — binário: NÃO
- [ ] player:rotated (JSON) — binário: NÃO
- [ ] player:useAbility (JSON) — binário: NÃO
- [ ] player:abilityUsed (JSON) — binário: NÃO
- [ ] player:death (JSON) — binário: NÃO
- [ ] player:respawn (JSON) — binário: NÃO
- [ ] player:target (JSON) — binário: NÃO
- [ ] player:syncRequest (JSON) — binário: NÃO
- [ ] player:syncResponse (JSON) — binário: NÃO

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

## Progresso e Próximos Passos
- [x] player:init convertido para binário, testado e funcional
- [x] player:disconnected convertido para binário, testado e funcional
- [x] player:joined convertido para binário, testado e funcional
- [x] player:existing convertido para binário, testado e funcional
- [ ] Iniciar definição do contrato binário para player:rotate
- [ ] Implementação, testes e validação do próximo evento
- [ ] Atualização deste documento a cada etapa concluída

## Observações Importantes
- Eventos de chat e sistema podem permanecer em JSON, conforme decisão do projeto.
- Sempre remover o evento antigo do código e das constantes após a conversão.
- Garantir que o painel de auditoria/logs reflita apenas os eventos binários após a migração.
- Seguir rigorosamente o padrão já adotado no sistema de combate para opcodes, serialização e logging. 