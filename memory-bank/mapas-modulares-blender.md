# Guia de Exportação de Mapas Modulares no Blender (GLB)

## Objetivo
Definir um padrão claro e visual para exportação de mapas do Blender em GLB, garantindo compatibilidade total com o pipeline do servidor e facilitando o trabalho de artistas e desenvolvedores.

---

## 1. Estrutura Básica do Mapa no Blender
- **Chão:**
  - Mesh único nomeado obrigatoriamente como `Ground` ou `Chao`.
  - Deve ser o mesh principal do piso, com todas as elevações e detalhes do terreno.
- **Obstáculos:**
  - Meshes nomeados com prefixos `COLLISION_` ou `BLOCK_` (ex: `COLLISION_Rock1`, `BLOCK_WallA`).
  - Usados para definir áreas de colisão e bloqueio no servidor.
- **Pontos de Interesse:**
  - Empties ou objetos nomeados com prefixos:
    - `SPAWN_` (ex: `SPAWN_Player`, `SPAWN_Monster1`)
    - `PORTAL_` (ex: `PORTAL_TO_CIDADE2`)
    - `NPC_` (ex: `NPC_Merchant`)
- **Áreas de Transição:**
  - Empties nomeados para portais/saídas (ex: `PORTAL_TO_DUNGEON1`).

---

## 2. Exemplos Visuais (Sugestão)
- Inclua prints do Blender mostrando:
  - Hierarquia de objetos com nomes corretos.
  - Seleção do mesh do chão.
  - Empties posicionados para spawns e portais.
  - Meshes de colisão destacados.

*(Adicione imagens ou links conforme necessário)*

---

## 3. Dicas para Exportação
- **Mantenha o GLB leve:**
  - Use baixo polycount para o chão e obstáculos.
  - Evite texturas pesadas; prefira materiais simples.
  - Remova objetos não utilizados antes de exportar.
- **Centralize o mapa na origem (0,0,0)** para facilitar o alinhamento no jogo.
- **Verifique nomes e prefixos** antes de exportar.
- **Use escala padrão (1 unidade = 1 metro)** para consistência com o jogo.

---

## 4. Checklist de Exportação
- [ ] O mesh do chão está nomeado como `Ground` ou `Chao`?
- [ ] Todos os obstáculos possuem prefixo `COLLISION_` ou `BLOCK_`?
- [ ] Todos os pontos de spawn, portais e NPCs estão marcados com empties nomeados corretamente?
- [ ] O mapa está centralizado na origem?
- [ ] O GLB está leve e sem objetos desnecessários?
- [ ] Escala e proporções conferidas?

---

## 5. Observações
- Siga sempre este padrão para garantir que o parser do servidor reconheça todos os elementos do mapa.
- Em caso de dúvida, consulte o arquivo `memory-bank/mapas-modulares-plano.md` para o pipeline completo.
- Atualize este guia conforme o pipeline evoluir ou surgirem novas necessidades. 