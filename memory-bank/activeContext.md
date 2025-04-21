# Active Context

## Foco atual
- Refino visual e usabilidade da barra de skills, HUD, chat e HUD do alvo.
- Sincronização e atualização instantânea da HUD do alvo (vida, mana, nome pt-br, status) ao receber dano ou atualização do mundo.
- Painel visual (lil-gui) para ajuste em tempo real de exposição, luzes e bloom.
- Seleção de alvo robusta: mantém alvo ao clicar em área vazia, remove ao clicar no próprio player ou ESC.
- Correção de bugs de cooldown e nomes de habilidades/jogadores.
- Aprimoramento visual dos modelos 3D (árvores, vegetação, rochas, etc).
- Correção de cores escuras nas árvores (folhas e tronco).
- Implementação de sistema de iluminação avançado (ambiente, sol, hemisférica, névoa).
- Otimização de performance: LOD, culling, materiais simplificados para objetos distantes.
- Estrutura para instanciamento futuro de objetos repetidos.
- **Chat em tempo real** implementado e integrado ao HUD, com atalhos de teclado, foco automático e sem bloquear inputs de gameplay.
- **NOVIDADE:** Sistema de nomes flutuantes para monstros implementado, exibindo nome pt-br acima da cabeça, centralizado, responsivo à distância e com visual MMORPG.

## Mudanças recentes
- HUD do alvo agora sincronizada e localizada, com nome pt-br e atualização instantânea.
- Painel visual (lil-gui) adicionado para ajuste fino de luzes, exposição e bloom.
- Seleção de alvo aprimorada: só remove ao clicar no próprio player, em outro alvo ou pressionar ESC.
- Troca de emojis por imagens reais nas skills.
- Cooldown agora acompanha a habilidade ao trocar de slot.
- Barra de skills com hover, glow, transições e número do slot sempre visível.
- Chat sem borda inferior.
- HUD com barras de vida/mana animadas e feedback visual para vida/mana baixa.
- **Sistema de nomes flutuantes para monstros:**
  - FloatingNameManager criado e integrado ao MonsterPresenter.
  - Nomes pt-br exibidos acima da cabeça dos monstros, centralizados e com escala dinâmica baseada na distância da câmera.
  - Visual aprimorado: fonte maior, sombra forte, fundo translúcido, padding, borda arredondada.
  - Altura calibrada para diferentes tamanhos de monstros.
  - Correção de bugs de escopo e inicialização do floatingNameManager.
  - Decisão: nomes de monstros sempre localizados, nunca o identificador interno.

## Próximos passos
- Refino de tooltips, responsividade mobile, e integração de novas habilidades.
- Testes de usabilidade e coleta de feedback dos jogadores.
- Implementar sistema de inventário e drops de itens.
- Melhorias visuais e efeitos para habilidades.
- Adicionar novos tipos de monstros e desafios.
- **Expandir sistema de nomes flutuantes para outros tipos de entidades (players, NPCs, bosses) e refino visual adicional.**

# Contexto Ativo

## Foco de Trabalho Atual
Estamos desenvolvendo o MMORPG isométrico, e o foco atual está em:
1. ✅ Estrutura básica do projeto e comunicação cliente-servidor
2. ✅ Sincronização e movimentação autoritativa de jogadores
3. ✅ Renderização isométrica e arquitetura MCP
4. ✅ Sincronização e renderização de monstros e objetos do mundo
5. ✅ Sistema de colisão robusto
6. ✅ Organização do mundo em biomas distintos (SPAWN, FOREST_NORTH, FOREST_WEST, MOUNTAINS, PLAINS, SWAMP, RUINS)
7. ✅ Aumento do mundo para 200x200 unidades
8. ✅ Objetos do mundo limitados a árvores, rochas e arbustos (casas/cercas removidas temporariamente)
9. ✅ Estruturas especiais desativadas temporariamente
10. ✅ Spawns de monstros distribuídos por bioma, com diferentes níveis e quantidades
11. ✅ Sistema de FPS e ping na UI do cliente
12. ✅ Sistema de combate funcional com habilidades que aplicam dano

## Mudanças Recentes
- ✅ Organização dos biomas e distribuição de objetos por região
- ✅ Remoção temporária de casas e cercas
- ✅ Estruturas especiais desativadas
- ✅ Sistema de spawn de monstros revisado e distribuído
- ✅ FPS e ping adicionados à interface do cliente
- ✅ Regeneração de Mana ajustada para 5% por segundo (PLAYER.REGENERATION.MANA_PERCENT = 0.05)
- ✅ Sincronização Cliente-Servidor otimizada com intervalo reduzido para 2s
- ✅ Debug completo da DamageZone para garantir aplicação correta de dano em zonas de habilidades
- ✅ Correção do loop de processamento de múltiplos ticks em DamageZone (`while` em vez de `if`)
- ✅ Implementação de dicionário de IDs de habilidades em constants para evitar uso de valores literais
- ✅ Adição de logs extensivos para debug do fluxo de execução de habilidades
- ✅ Foco recente em refino visual e funcional do HUD central (borda de XP, SVG, feedback imediato)
- ✅ Sincronização robusta de level, xp, nextLevelXp e name entre servidor e cliente
- ✅ Correção de eventos do servidor para garantir envio desses campos
- ✅ Padrão de atualização do HUD: sempre usar dados recebidos do servidor e atualizar player.userData
- ✅ Garantia de clareza visual e UX consistente desde o início do jogo
- ✅ Decisão: HUD deve sempre mostrar o fundo da borda de XP, mesmo sem progresso
- ✅ Decisão: UI agora exibe nomes localizados de monstros (campo NAME), nunca o identificador interno. Mudança melhora clareza, localização e experiência do usuário. Exemplo: BLACK_MIST_ZOMBIE exibe 'Zumbi da Névoa Negra'.
- ✅ **Sistema de nomes flutuantes para monstros:** visual MMORPG, responsivo, centralizado, nome pt-br, integração total ao ciclo de animação.

## Próximos Passos
- Refinar efeitos visuais das habilidades
- Implementar novas habilidades seguindo o mesmo padrão
- Adicionar sistema de drops de itens de monstros
- Implementar sistema de inventário básico
- Reavaliar retorno de casas/cercas e estruturas especiais
- Adicionar novos tipos de monstros e desafios
- Melhorar feedback visual e efeitos
- **Expandir nomes flutuantes para outros tipos de entidades (players, NPCs, bosses).**

## Decisões e Considerações Ativas
- Mundo grande, explorável, com biomas distintos
- Objetos do mundo não se sobrepõem (verificação de colisão)
- Spawns de monstros balanceados por região
- Interface do cliente com feedback de performance (FPS/ping)
- Sistema de combate com habilidades de diferentes tipos (projétil, mobilidade, área, zona)
- Aplicação de dano das habilidades através de sistema de zonas (DamageZone) bem testado
- **Nomes de monstros sempre localizados, nunca o identificador interno.**
- **Sistema de nomes flutuantes integrado ao ciclo de animação e presenters.**

# Contexto Ativo do PVP-RPG

## Trabalho Atual

Estamos refinando o sistema de combate completo do jogo, que permite aos jogadores usar habilidades (slots 1-4) para atacar monstros e outros jogadores. Recentes melhorias incluem:

1. **Correção da DamageZone**: 
   - Transformação do `if` para `while` no método `update()` para garantir processamento de múltiplos ticks
   - Adição de logs detalhados no construtor e método `update()` para rastrear ciclo de vida e lógica de ticks
   - Garantia de que entidades são danificadas corretamente dentro da zona

2. **Melhorias no CombatSystem**:
   - Substituição de IDs literais pelo dicionário `ABILITY_IDS` para melhor legibilidade e manutenção
   - Adição de logs de debug para rastrear o fluxo de processamento de habilidades
   - Validação de parâmetros de habilidades (duração, intervalo de tick, etc.)

3. **Habilidades Funcionais**:
   - **Bola de Fogo** (ID: 1): Projétil que causa dano direto e em área
   - **Teleporte** (ID: 2): Permite o jogador se teleportar instantaneamente
   - **Estacas de Gelo** (ID: 3): Ataque em área que causa dano e aplica lentidão
   - **Chuva de Meteoros** (ID: 4): Ataque em área contínuo com múltiplos ticks de dano

4. **Feedback Visual**:
   - Textos flutuantes para mostrar dano
   - Efeitos visuais para cada habilidade
   - Feedback visual de morte e respawn

## Fluxo de Execução do Sistema de Combate

1. **Uso da Habilidade**: Jogador pressiona tecla 1-4 e clica em uma posição alvo
2. **Processamento no Servidor**: 
   - CombatSystem.processAbilityUse() verifica tipo da habilidade
   - Para habilidades do tipo 'zone' (Meteor Storm): cria uma DamageZone
   - Para projéteis: cria Projectile com física e colisão
   - Para mobilidade (Teleporte): move o jogador instantaneamente
   - Para área instantânea: aplica dano imediatamente

3. **Ciclo de Vida da DamageZone**:
   - Construtor inicializa propriedades e registra logs
   - update() método é chamado a cada tick do jogo
   - Múltiplos ticks de dano são aplicados via loop while
   - Entidades são verificadas para colisão a cada tick
   - Zona é marcada para remoção após a duração

4. **Loop do Jogo**: 
   - GameWorld.update() chamado a cada tick (20 por segundo)
   - CombatSystem.updateDamageZones() processa todas as zonas ativas
   - CollisionSystem verifica e resolve colisões

## Componentes Principais

- `server/src/systems/CombatSystem.js`: Sistema principal de combate
- `server/src/models/DamageZone.js`: Implementa zonas de dano contínuo
- `server/src/models/Projectile.js`: Gerencia projéteis (Bola de Fogo)
- `shared/constants/gameConstants.js`: Centraliza constantes, incluindo ABILITY_IDS
- `shared/skills/skillsConfig.js`: Configuração de todas as habilidades

## Próximos Passos
- Refinar efeitos visuais (partículas, shader, etc)
- Implementar/testar novas habilidades seguindo o mesmo padrão
- Aprimorar feedback visual de cooldown e disponibilidade de habilidades
- Balancear valores de dano, custos de mana e cooldowns

## Decisões Recentes
- Troca de materiais físicos por standard para vegetação.
- Aumento da exposição global e intensidade das luzes.
- Remoção de escalas e offsets dos modelos (tamanho nativo).
- Ajuste de emissive e variação de cor para naturalidade.
- Atualização do plano do chão para receber sombras.
- **Chat estável e funcional, integrado à experiência do usuário.** 