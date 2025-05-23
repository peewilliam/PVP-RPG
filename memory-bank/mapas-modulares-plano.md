# Plano de Adoção de Mapas Modulares GLB

## Objetivo
Permitir que o MMORPG utilize mapas modulares exportados do Blender (GLB), mantendo o servidor autoritativo, a performance de rede e a flexibilidade para expansão futura (mundo aberto ou múltiplas instâncias).

---

## 1. Padrão de Exportação no Blender
- **Chão:** Mesh único nomeado (`Ground` ou `Chao`).
- **Obstáculos:** Meshes nomeados com prefixos (`COLLISION_`, `BLOCK_`).
- **Pontos de interesse:** Empties/objetos nomeados (`SPAWN_`, `PORTAL_`, `NPC_`).
- **Áreas de transição:** Empties para portais/saídas (`PORTAL_TO_CIDADE2`).
- **Documentar exemplos visuais e nomes obrigatórios.**

---

## 2. Pipeline de Importação no Servidor
- **Parser GLB:** Implementar parser Node.js (ex: `three` + `canvas` ou `@gltf-transform/core`).
- **Extração de dados:**
  - Chão: gerar heightmap (grid de alturas) ou navmesh simplificado.
  - Obstáculos: extrair bounding boxes/posições dos meshes de colisão.
  - Spawns/Portais: extrair posições dos empties/objetos nomeados.
- **Conversão:** Converter para lógica do servidor (colisão, spawn, áreas válidas de movimento).
- **Mapas modulares:** Cada mapa = GLB + config extraído, carregado/descartado dinamicamente.

---

## 3. Adaptação do Sistema de Mundo no Servidor
- **Estrutura:** Refatorar `mapConfig.js` para múltiplos mapas (`MAPS`).
- **Gerenciamento:** Criar `MapManager` para carregar/descarregar mapas.
- **Instâncias:** Permitir múltiplas instâncias (masmorras, cidades, áreas abertas).
- **Transição:** Lógica para mover jogadores entre mapas (portais).

---

## 4. Integração Cliente-Servidor
- **Cliente:**
  - Carrega GLB do mapa atual via `ImportedWorld.js`.
  - Usa raycast no mesh do chão para altura do player.
  - Carrega assets dinâmicos conforme dados do servidor.
- **Servidor:**
  - Valida movimento usando heightmap/navmesh.
  - Envia eventos binários de spawn/despawn conforme mapa do jogador.
  - Gerencia colisão, spawn, eventos e transições.

---

## 5. Expansão dos Eventos Binários
- **ID do mapa:** Incluir nos eventos de `world:init`, `world:update`, etc.
- **Transição de mapa:** Criar eventos binários para transição (`player:changeMap`, `world:loadMap`).
- **Sincronização:** Enviar apenas entidades do mapa/área do jogador.

---

## 6. Pipeline de Desenvolvimento
1. Artista modela e exporta mapas no padrão.
2. Dev roda parser, gera configs e integra ao servidor.
3. Testes de colisão, movimentação, spawn e transições.
4. Documentação incremental no memory-bank.

---

## Referências do Projeto
- `client/src/world/ImportedWorld.js` (importação/renderização GLB)
- `server/src/mapConfig.js` (definição do mapa atual)
- `shared/utils/binarySerializer.js` (eventos binários)
- `shared/constants/gameConstants.js` (eventos, tipos de entidades)

---

## Próximos Passos Detalhados
1. Definir padrão de exportação no Blender e documentar.
2. Implementar parser de GLB no servidor (Node.js): extração de chão, obstáculos, spawns, portais, heightmap/navmesh.
3. Refatorar sistema de mapas no servidor para múltiplos mapas modulares.
4. Expandir eventos binários para múltiplos mapas.
5. Adaptar cliente para carregar mapas dinâmicos e usar raycast para altura.
6. Testar pipeline completo: exportação → parsing → integração → gameplay.
7. Documentar todo o fluxo no memory-bank.

---

## Observações
- Sempre manter o servidor como fonte de verdade.
- Priorizar performance e modularidade.
- Documentar padrões e exemplos para artistas e devs. 