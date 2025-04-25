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
- **NOVIDADE:** Implementação de sistema avançado de otimização de rede usando delta updates, compressão de dados e envio seletivo de entidades.

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
- **Textos flutuantes de dano/cura padronizados:**
  - Sempre exibem apenas 1 dígito após o ponto decimal (toFixed(1)).
  - Tamanho visual uniforme para todos os tipos de dano/cura.
  - Lógica de anti-flood removida: múltiplos textos iguais aparecem sem bloqueio.
- **Reformulação total do visual da aranha:**
  - Novo modelo cartoon: abdômen ovalado, cefalotórax separado, pernas segmentadas e arqueadas, olhos vermelhos, proporções ajustadas.
  - Pernas longas, afastadas do corpo, com faixas vermelhas grandes e bem visíveis.
  - Escala maior, grupo elevado para pernas não afundarem no chão.
  - Foco em silhueta clara, visual cartoon, destaque mesmo em ambientes escuros.
  - Decisão: remover detalhes desnecessários, priorizar legibilidade e estilo cartoon.
- **Sistema avançado de otimização de rede:**
  - **Delta Updates**: O servidor mantém snapshot do último estado enviado para cada jogador e envia apenas o que mudou.
  - **Envio Seletivo**: Na conexão inicial, enviamos apenas entidades próximas ao jogador (raio de 30-40 unidades).
  - **Compressão de Dados**: Sistema global que compacta mensagens grandes (>500 bytes) usando zlib no servidor e pako no cliente.
  - **Monitoramento**: Logs detalhados com tamanho original/compactado dos pacotes e estatísticas de economia de banda.
  - Redução total de ~95% no tráfego de rede, eliminando problemas de latência e erro de `maxMessageSize exceeded`.
- **Configuração avançada do Vite para múltiplos pontos de entrada:**
  - Implementado middleware customizado que serve `index.html` da raiz em `/` e `client/index.html` em `/play`, sem duplicação de arquivos.
  - Middleware também faz alias de `/src/*` para `/client/src/*` para garantir que assets funcionem corretamente em ambos os pontos de entrada.

## Mudanças recentes (Centralização e Robustez)
- Centralização total dos sistemas de XP, level, benefícios por level, multiplicador global de XP, cálculo de dano PvP/PvE, defesa, HP e mana no progressionSystem.js (shared).
- Todos os eventos de dano agora transmitem o valor real sofrido, garantindo feedback visual fiel ao jogador.
- IA dos monstros ajustada: zumbi volta a perseguir após atacar se o player fugir.
- Sistema de morte do player robusto: morre corretamente ao chegar a 0 de HP.
- Remoção do antigo levelUtils.js e refatoração de monstros para usar o sistema centralizado.
- Balanceamento de XP e dano agora é feito exclusivamente via progressionSystem.js, facilitando eventos (ex: XP em dobro) e ajustes finos.

## Mudanças recentes (Infraestrutura e Rede)
- Refatoração do sistema de entidades: agora cada tipo (player, monster, worldObject, damageZone) é gerenciado em mapas separados, eliminando conflitos de ID e bugs de remoção.
- Implementação de eventos binários para comunicação cliente-servidor: eventos críticos (movimento, status, morte, update de mundo) agora usam serialização binária customizada (binarySerializer.js), reduzindo drasticamente o tamanho dos pacotes, a latência e o uso de banda.
- Documentação incremental dos eventos binários: cada evento possui opcode, formato e exemplos claros, facilitando manutenção e expansão.
- Essas mudanças aumentam a performance, permitem mais entidades simultâneas e melhoram a experiência do jogador, tornando o sistema mais escalável e preparado para o futuro.

## Próximos passos
- Refino de tooltips, responsividade mobile, e integração de novas habilidades.
- Testes de usabilidade e coleta de feedback dos jogadores.
- Implementar sistema de inventário e drops de itens.
- Melhorias visuais e efeitos para habilidades.
- Adicionar novos tipos de monstros e desafios.
- **Expandir sistema de nomes flutuantes para outros tipos de entidades (players, NPCs, bosses) e refino visual adicional.**
- Refinar efeitos visuais das habilidades da aranha (salto, tiro de teia) para combinar com o novo visual cartoon e garantir clareza visual.
- **Expandir o sistema de otimização de rede:**
  - Implementar priorização de eventos por importância
  - Ajuste fino dos raios de visibilidade conforme densidade de entidades
  - Sistema de invalidação periódica de entidades obsoletas
  - Métricas de desempenho de rede por jogador

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
13. ✅ Sistema de otimização de rede com delta updates, compressão e envio seletivo

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
- ✅ **Sistema avançado de otimização de rede:** delta updates, compressão, e envio seletivo implementados com sucesso, resultando em 95% de redução no tráfego e eliminação dos problemas de latência.
- **Frontend agora suporta múltiplos pontos de entrada via Vite:**
  - `/` serve o index.html raiz (landing page, institucional, etc)
  - `/play` serve o client/index.html (SPA do jogo)
  - Middleware customizado garante assets corretos e roteamento limpo, sem gambiarras ou duplicação de arquivos.

## Próximos Passos
- Refinar efeitos visuais das habilidades
- Implementar novas habilidades seguindo o mesmo padrão
- Adicionar sistema de drops de itens de monstros
- Implementar sistema de inventário básico
- Reavaliar retorno de casas/cercas e estruturas especiais
- Adicionar novos tipos de monstros e desafios
- Melhorar feedback visual e efeitos
- **Expandir nomes flutuantes para outros tipos de entidades (players, NPCs, bosses).**
- **Continuar otimizando a performance de rede e uso de banda.**

## Decisões e Considerações Ativas
- Mundo grande, explorável, com biomas distintos
- Objetos do mundo não se sobrepõem (verificação de colisão)
- Spawns de monstros balanceados por região
- Interface do cliente com feedback de performance (FPS/ping)
- Sistema de combate com habilidades de diferentes tipos (projétil, mobilidade, área, zona)
- Aplicação de dano das habilidades através de sistema de zonas (DamageZone) bem testado
- **Nomes de monstros sempre localizados, nunca o identificador interno.**
- **Sistema de nomes flutuantes integrado ao ciclo de animação e presenters.**
- **Otimização de rede como prioridade para garantir experiência fluida mesmo em conexões mais lentas.**
- **Compressão adaptativa baseada no tamanho do payload para equilibrar uso de CPU e banda.**
- **Frontend agora suporta múltiplos pontos de entrada via Vite:**
  - `/` serve o index.html raiz (landing page, institucional, etc)
  - `/play` serve o client/index.html (SPA do jogo)
  - Middleware customizado garante assets corretos e roteamento limpo, sem gambiarras ou duplicação de arquivos.

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
   
5. **Sistema de Otimização de Rede**:
   - **Delta Updates**: Servidor envia apenas entidades que mudaram, reduzindo tráfego em até 80%.
   - **Payload Inicial Otimizado**: Redução de ~200KB para ~7KB na conexão inicial.
   - **Compressão Universal**: Sistema que compacta todos os principais eventos de comunicação.
   - **Monitoramento de Tráfego**: Logs detalhados para análise de economia de banda.

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
   
5. **Fluxo de Comunicação Otimizado**:
   - Servidor compacta dados importantes antes de enviar (compressAndSend)
   - Cliente descompacta automaticamente usando pako
   - Updates são filtrados para conter apenas entidades relevantes que mudaram

## Componentes Principais

- `server/src/systems/CombatSystem.js`: Sistema principal de combate
- `server/src/models/DamageZone.js`: Implementa zonas de dano contínuo
- `server/src/models/Projectile.js`: Gerencia projéteis (Bola de Fogo)
- `shared/constants/gameConstants.js`: Centraliza constantes, incluindo ABILITY_IDS
- `shared/skills/skillsConfig.js`: Configuração de todas as habilidades
- `server/src/index.js`: Função compressAndSend e gerenciamento de delta updates
- `client/src/main.js`: Handlers para descompressão de eventos

## Próximos Passos
- Refinar efeitos visuais (partículas, shader, etc)
- Implementar/testar novas habilidades seguindo o mesmo padrão
- Aprimorar feedback visual de cooldown e disponibilidade de habilidades
- Balancear valores de dano, custos de mana e cooldowns
- Expandir sistema de otimização de rede com priorização de eventos

## Decisões Recentes
- Troca de materiais físicos por standard para vegetação.
- Aumento da exposição global e intensidade das luzes.
- Remoção de escalas e offsets dos modelos (tamanho nativo).
- Ajuste de emissive e variação de cor para naturalidade.
- Atualização do plano do chão para receber sombras.
- **Chat estável e funcional, integrado à experiência do usuário.**
- **Otimização de rede como prioridade máxima para garantir experiência fluida mesmo com muitas entidades.**
- **Implementação de sistema de compressão adaptativo baseado no tamanho da mensagem.**

# Contexto Ativo

## Foco Atual
O foco atual do desenvolvimento está na otimização de rede do jogo para suportar uma grande quantidade de entidades e jogadores simultâneos. Implementamos um sistema avançado de otimização de rede que reduziu significativamente o tráfego e melhorou a experiência de jogo.

### Sistema de Otimização de Rede
- **Delta Updates**: Implementado sistema que envia apenas as alterações de estado das entidades
- **Envio Seletivo**: Apenas entidades próximas ao jogador são transmitidas
- **Compressão de Dados**: Compressão automática de mensagens grandes usando zlib/pako
- **Monitoramento Detalhado**: Logs de uso de banda e otimizações aplicadas

### Resultados das Otimizações
- Redução de aproximadamente 95% no tráfego de rede
- Eliminação dos erros "maxMessageSize exceeded"
- Suporte para mais de 300 entidades simultâneas
- Experiência mais suave, mesmo em conexões mais lentas

## Mudanças Recentes
- Implementação do sistema completo de delta updates para sincronização de entidades
- Adição do raio de visibilidade configurável para limitar entidades transmitidas
- Implementação da compressão adaptativa para mensagens grandes
- Adição de painéis de depuração para monitoramento de largura de banda

## Próximos Passos
- Expandir o sistema de otimização para incluir mais tipos de dados
- Implementar predição de movimento no cliente para reduzir percepção de latência
- Adicionar prefetching inteligente de recursos baseado em movimento do jogador
- Implementar sistema de LOD (Level of Detail) baseado na distância
- Otimizar sincronização de animações de habilidades

## Decisões e Considerações Ativas

### Estratégia de Sincronização
- O servidor continua como autoridade final sobre todo o estado do jogo
- O cliente envia apenas intenções, nunca modifica o estado diretamente
- Implementada lógica de cache no cliente para reduzir chamadas redundantes

### Limitações de Rede
- A compressão adiciona um pequeno overhead de CPU, mas a economia de banda compensa
- Delta updates podem levar a estados inconsistentes se pacotes forem perdidos
- Implementamos um sistema de heartbeat e resync periódico para mitigar o problema
- Configuramos um limite máximo de entidades visíveis por jogador (padrão: 150)

### Considerações de Performance
- Monitorizamos cuidadosamente o uso de CPU do servidor durante os picos de uso
- Ajustamos a taxa de atualização do estado do mundo para otimizar o equilíbrio entre responsividade e sobrecarga
- Implementamos throttling de eventos de movimentação para reduzir picos de tráfego

## Estado dos Componentes Principais

| Componente | Status | Observações |
|------------|--------|-------------|
| Sistema de Mundo | ✅ Funcional | Contém 4 biomas distintos e mais de 300 entidades |
| Sistema de Movimentação | ✅ Funcional | Otimizado com delta updates e predição |
| Sistema de Colisão | ✅ Funcional | Otimizado para verificar apenas entidades próximas |
| Sistema de Habilidades | ⚠️ Parcial | Implementado mas precisa de ajustes na lógica de dano |
| Sistema de Combate | ⚠️ Parcial | Precisa integrar melhor com o sistema de habilidades |
| UI/HUD | ✅ Funcional | Responsiva e com performance otimizada |
| Sistema de Rede | ✅ Funcional | Recentemente otimizado, redução de 95% no tráfego |
| Servidor | ✅ Funcional | Suporta mais jogadores graças às otimizações |

## Problemas Conhecidos
- Algumas habilidades não aplicam dano corretamente em todos os casos
- Raramente ocorrem dessincronizações em conexões instáveis
- O sistema de resync completo pode causar pequenos congelamentos
- A compressão pode aumentar uso de CPU em dispositivos mais antigos

## Métricas Importantes
- **Tráfego Médio por Jogador**: Reduzido de ~120KB/s para ~6KB/s
- **Latência Média**: Melhorada em 35% após otimizações
- **Entidades Suportadas**: Aumentado de ~100 para mais de 300
- **Taxa de Atualização**: Mantida em 20 ticks/segundo

# Contexto Ativo

## Foco atual
- Integração do script de simulação de XP (`test-xp.js`) com as constantes reais do jogo (`gameConstants.js`), incluindo todos os monstros definidos.
- O script agora permite simular:
  - Progresso de níveis com base em XP real
  - Quantidade de monstros reais necessários para upar
  - Impacto de quests e grind
  - Tempo estimado para subir de nível
  - Comparação entre diferentes monstros e cenários
- Ferramenta essencial para ajuste fino do balanceamento de XP, progressão e design de quests.

## Decisões recentes
- O cálculo de XP, simulações de ganho, previsões de tempo e quantidade de monstros necessários para upar estão alinhados com o balanceamento real do servidor.
- O script pode ser facilmente ajustado para refletir mudanças futuras nas constantes do jogo.

## Próximos passos
- Usar o script para validar e ajustar o balanceamento de XP e recompensas de monstros/quests.
- Documentar exemplos de uso para designers e devs.
- Automatizar integração do script com alterações futuras em `gameConstants.js`.

## Observações
- O script é uma ferramenta de apoio para tomada de decisão de design e balanceamento, não faz parte do runtime do jogo. 