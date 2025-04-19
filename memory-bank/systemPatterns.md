# Padrões do Sistema

## Arquitetura do Sistema

O MMORPG isométrico segue uma arquitetura cliente-servidor onde o servidor é autoritativo e gerencia todos os aspectos do mundo do jogo.

### Organização do Mundo
- O mundo foi expandido para 200x200 unidades e dividido em biomas distintos:
  - SPAWN (área inicial)
  - FOREST_NORTH (floresta densa)
  - FOREST_WEST (floresta)
  - MOUNTAINS (montanhas)
  - PLAINS (planícies)
  - SWAMP (pântano)
  - RUINS (ruínas)
- Cada bioma possui densidades e escalas específicas para árvores, rochas e arbustos.
- Casas e cercas foram removidas temporariamente, assim como estruturas especiais (vilas, ruínas, fazendas).
- Objetos do mundo não se sobrepõem devido à verificação de colisão na geração.

### Sistema de Spawn de Monstros
- Áreas de spawn de monstros distribuídas por bioma, com diferentes quantidades, níveis e tempos de respawn.
- Apenas goblins estão implementados no momento, mas o sistema é extensível para outros tipos.
- O respawn é automático e balanceado por região.

### Interface do Cliente
- Exibe FPS e ping em tempo real no canto superior esquerdo.
- Interface preparada para feedback de performance e debug.

### Arquitetura MCP
- **Model (servidor)**: Gerencia toda a lógica, entidades, colisão, spawn e estado do mundo.
- **Controller (servidor)**: Interpreta comandos dos jogadores e orquestra a lógica de alto nível.
- **Presenter (cliente)**: Renderiza o estado do jogo, processa eventos e inputs, exibe informações de performance.

### Sistema de Colisão
- Implementado para evitar sobreposição de objetos do mundo.
- Cada entidade possui raio de colisão específico.
- Monstros e jogadores respeitam colisão física.

### Comunicação Cliente-Servidor
- Utiliza geckos.io para eventos em tempo real.
- Sincronização eficiente de entidades próximas ao jogador.

### Padrões de Design
- **Observer**: Eventos de atualização e sincronização.
- **Component-Entity-System**: Entidades compostas por componentes reutilizáveis.
- **State**: Gerenciamento de estados de entidades (idle, moving, attacking, dead).
- **Factory**: Criação padronizada de entidades.
- **Command**: Cliente envia comandos, servidor executa lógica.
- **Timer**: Gerenciamento de respawn de monstros e ciclos de atualização.

### Considerações
- Estruturas especiais e construções podem ser reativadas conforme evolução do gameplay.
- O sistema está pronto para expansão de tipos de monstros, habilidades e desafios.

### Diagrama de Alto Nível

```
+----------------+                    +----------------+
|                |                    |                |
|    Cliente     |                    |    Servidor    |
|                |                    |                |
+----------------+                    +----------------+
|                |                    |                |
|  Apresentação  |<--- geckos.io ---->|    Modelo     |
|  (Presenter)   |      eventos       |    (Model)     |
|                |                    |                |
+----------------+                    +----------------+
        |                                     |
        v                                     v
+----------------+                    +----------------+
|                |                    |                |
|   Input do     |                    | Controladores  |
|   Usuário      |                    | (Controller)   |
|                |                    |                |
+----------------+                    +----------------+
```

## Decisões Técnicas Principais

### Padrão MCP (Model-Controller-Presenter)

O projeto utiliza o padrão MCP como estrutura arquitetural principal, com clara separação entre:

1. **Model (no servidor)**:
   - Contém toda a lógica do jogo e o estado das entidades
   - Gerencia atributos, comportamentos e regras de negócio
   - É a fonte da verdade para todas as entidades do jogo
   - Processa comandos de movimento recebidos dos clientes
   - Mantém e atualiza a posição dos jogadores

2. **Controller (no servidor)**:
   - Interpreta inputs dos jogadores
   - Aplica inputs ao modelo
   - Orquestra a lógica do jogo de alto nível
   - Gerencia eventos do mundo
   - Coordena a comunicação entre jogadores

3. **Presenter (no cliente)**:
   - Renderiza o estado do jogo usando Three.js
   - Interpreta atualizações do servidor
   - Captura e envia inputs do jogador
   - Gerencia efeitos visuais e feedback
   - Não realiza cálculos de posição ou estado do jogo

### Comunicação Cliente-Servidor

Utilizamos geckos.io como sistema de comunicação em tempo real, que oferece:
- Transporte de mensagens via WebRTC com fallback para WebSockets
- Baixa latência e comunicação confiável
- Suporte a eventos personalizados

#### Eventos Principais:
- `player:init` - Inicialização do jogador
- `player:move` - Envio de comandos de movimento
- `player:moved` - Atualização de posição
- `player:joined` - Notificação de novo jogador
- `player:existing` - Sincronização de jogadores existentes
- `player:disconnected` - Desconexão de jogador
- `player:useAbility` - Uso de habilidades
- `player:abilityUsed` - Confirmação de uso de habilidade
- `world:update` - Atualizações do estado do mundo
- `world:init` - Inicialização do estado do mundo
- `entity:spawn` - Spawn de novas entidades

### Fluxo de Sincronização de Jogadores

A implementação atual segue um fluxo específico para garantir a sincronização adequada entre jogadores:

1. **Conexão Inicial**:
   - O servidor gera um ID único para o novo jogador
   - O servidor envia o ID ao cliente conectado via `player:init`

2. **Sincronização de Jogadores Existentes**:
   - O servidor notifica todos os jogadores existentes sobre o novo jogador via `player:joined`
   - O servidor envia ao novo jogador informações sobre todos os jogadores existentes via `player:existing`

3. **Movimentação**:
   - O cliente envia comandos de movimento (não posições) via `player:move`
   - O servidor processa os comandos, atualiza o estado do jogador
   - O servidor envia atualizações de posição para todos os clientes via `player:moved`

## Sistema de Combate

O sistema de combate do jogo foi implementado seguindo uma arquitetura modular:

### Arquitetura do Sistema de Combate

1. **CombatSystem (Servidor)**
   - Classe principal que processa todas as interações de combate
   - Gerencia cálculos de dano, área de efeito e aplicação de efeitos
   - Utiliza método `processAbilityUse` que recebe jogador, ID da habilidade e posição alvo
   - Suporta diferentes tipos de habilidades: projétil, área, teleporte
   - Implementa multiplicadores de dano para balancear PvP vs PvE

2. **Fluxo de Processamento de Habilidades**
   ```
   Cliente               Servidor                       Cliente
   [Input] --------> [Validação] --------> [Evento de Confirmação]
     ↓                   ↓                          ↓
   [Cooldown      [Processamento         [Renderização do
    Local]         de Combate]            Efeito Visual]
                       ↓
                  [Distribuição
                   de Eventos de Dano]
   ```

3. **Eventos de Rede para Combate**
   - `PLAYER.USE_ABILITY`: Cliente informa servidor sobre uso de habilidade
   - `PLAYER.ABILITY_USED`: Servidor confirma uso de habilidade para todos
   - `COMBAT.DAMAGE_DEALT`: Servidor informa sobre dano causado
   - `COMBAT.FLOATING_TEXT`: Controla textos flutuantes no cliente
   - `PLAYER.DEATH`: Informa sobre morte de jogador
   - `PLAYER.RESPAWN`: Informa sobre respawn de jogador

### Sistema de Habilidades

1. **Tipos de Habilidades**
   - **Projétil**: Viaja em linha reta (ex: Bola de Fogo)
   - **Área**: Afeta alvos em um raio (ex: Estacas de Gelo)
   - **Mobilidade**: Move o jogador (ex: Teleporte)
   - **Zona**: Efeito contínuo em área (ex: Chuva de Meteoros)

2. **Configuração de Habilidades**
   - Centralizada em `shared/skills/skillsConfig.js`
   - Cada habilidade possui ID, nome, descrição, tipo, cooldown, custo de mana, dano, etc.
   - Fácil de estender para adicionar novas habilidades

3. **Feedback Visual**
   - Sistema de textos flutuantes para mostrar dano, cura, etc.
   - Efeitos visuais específicos para cada habilidade
   - Feedback visual de morte e respawn

### Sistema de Morte e Respawn

1. **Processo de Morte**
   - Jogador perde todo XP e nível ao morrer
   - `resetAfterDeath()` restaura estatísticas base
   - Jogador é teleportado para ponto de spawn

2. **Interface do Usuário**
   - Mensagem de morte é exibida na tela
   - Controles são desativados temporariamente
   - Efeito visual de respawn

### Problemas Atuais

- As habilidades não estão aplicando dano aos alvos corretamente
- Precisamos verificar a integração entre o CombatSystem e os métodos takeDamage dos alvos

## Sistema de Renderização

[...resto do conteúdo existente...]

## Habilidades de Área e DamageZone
- Todas as habilidades de área (ex: Meteor Storm, Estacas de Gelo) usam a classe DamageZone para centralizar lógica de dano, ticks e efeitos.
- DamageZone aceita flags customizadas (ex: frostSpikes) para efeitos especiais.
- O CombatSystem é responsável por criar e atualizar zonas de dano, além de aplicar efeitos de status.

## Aplicação de Status (Slow)
- O status de lentidão (slow) é aplicado via DamageZone, usando os parâmetros da habilidade (SLOW, SLOW_DURATION).
- Player e Monster consultam status.slowedUntil e lastSlowValue para modificar a velocidade de movimento enquanto o efeito estiver ativo.

## Integração Visual Cliente-Servidor
- O servidor emite o evento `combat:slow` para todos os clientes próximos sempre que um alvo recebe slow.
- O cliente exibe o efeito visual de congelado/lentidão (ex: cor azul) durante a duração do efeito.

## Robustez e Logs
- O sistema de combate possui logs detalhados para depuração de zonas, ticks, aplicação de dano e status.
- Parâmetros de habilidades são validados e edge cases tratados (ex: duração, tickInterval, múltiplos alvos).

## Manutenção e Escalabilidade
- O padrão DamageZone + eventos permite fácil adição de novas habilidades de área e efeitos de status.
- Toda a lógica de efeitos é centralizada e desacoplada da renderização visual.

## System Patterns

### Arquitetura
- MCP (Model-Controller-Presenter) para separação de lógica, apresentação e controle.
- Servidor autoritativo para validação de ações e sincronização de estado.

### Eventos de rede
- Padrão `categoria:ação` (ex: `player:move`, `combat:damageDealt`).
- Cliente envia comandos, servidor processa e retorna estado.

### Barra de skills
- Slots renderizados dinamicamente, drag-and-drop, cooldown visual com gradiente radial.
- Ícones de habilidades via `<img>`, responsivos, com fallback para emoji/texto.
- Número do slot sempre visível, com fundo escuro translúcido.

### HUD
- Barras de vida/mana com gradiente, animação de pulsação para vida baixa.
- XP em losango central, nível destacado.

### Chat
- Estrutura flexível, abas, atalhos, sem borda inferior, responsivo.
- Input com atalhos de teclado (Enter/Esc), abas para Main, Sistema(Dano/Cura), Global e Privado.