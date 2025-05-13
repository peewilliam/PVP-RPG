# Padrões do Sistema

## Arquitetura Refatorada do Cliente

A refatoração do cliente segue uma abordagem modular e extensível, separando claramente responsabilidades e permitindo manutenção e evolução mais fáceis do código.

### Estrutura de Diretórios Modular
```
client/src/
├── controllers/       # Controladores de entrada e fluxo principal
│   ├── GameController.js
│   ├── InputController.js
│   └── CameraController.js
├── managers/          # Gerenciadores de recursos e estados
│   ├── EntityManager.js
│   ├── SceneManager.js
│   └── RenderManager.js
├── presenters/        # Apresentação visual das entidades
│   ├── PlayerPresenter.js
│   ├── MonsterPresenter.js
│   └── WorldObjectPresenter.js
├── services/          # Serviços de comunicação com servidor
│   └── NetworkManager.js
├── systems/           # Sistemas de mecânicas específicas
│   └── MovementPrediction.js
├── ui/                # Interface do usuário
│   ├── HUDManager.js
│   └── ChatManager.js
├── skills/            # Habilidades e seus efeitos visuais
│   ├── FireballSkill.js
│   ├── TeleportSkill.js
│   ├── IceSpikeSkill.js
│   └── MeteorStormSkill.js
├── effects/           # Efeitos visuais e partículas
│   └── FloatingTextManager.js
└── main-refactored.js # Ponto de entrada refatorado
```

### Principais Componentes Refatorados

#### 1. GameController
- Orquestra todos os outros componentes
- Inicializa e conecta sistemas (renderização, rede, entrada)
- Configura callbacks de rede e input
- Gerencia o ciclo de vida do jogo (inicialização, loop principal, término)

#### 2. EntityManager
- Gerencia todas as entidades do jogo (jogadores, monstros, objetos)
- Mantém referência ao jogador local
- Processa atualizações do servidor (processWorldUpdate)
- Gerencia seleção de alvos e HUD relacionada
- Integra sistema de nomes flutuantes e barras de vida

#### 3. RenderManager
- Gerencia o loop de renderização usando requestAnimationFrame
- Atualiza todos os sistemas registrados a cada frame
- Controla o renderizador Three.js e pós-processamento
- Monitora performance e FPS

#### 4. NetworkManager
- Abstrai comunicação com o servidor via geckos.io
- Expõe interface baseada em eventos para o resto do sistema
- Gerencia eventos binários e JSON
- Implementa compressão e otimização de rede

#### 5. Sistema de Habilidades Modular
- Cada habilidade agora tem seu próprio arquivo (FireballSkill.js, etc.)
- Efeitos visuais encapsulados em funções específicas (spawnFireballEffect)
- Permite expansão fácil com novas habilidades
- Melhor separação entre lógica de jogo e efeitos visuais

### Padrões de Design Implementados

#### Observer Pattern
- Sistema de eventos do NetworkManager
- Callbacks registrados para eventos de rede e input
- Atualizações baseadas em inscrições de sistemas

#### Component Pattern
- Entidades compostas por componentes (mesh, userData, stats)
- Componentes visuais como anéis de seleção, nomes flutuantes, etc.

#### Factory Pattern
- Criação padronizada de entidades via presenters
- Método createLocalPlayer para jogador principal

#### Dependency Injection
- Componentes recebem suas dependências no construtor
- Facilita testes e extensibilidade

#### Command Pattern
- Inputs do jogador transformados em comandos para o servidor
- Estrutura clara para ações do jogador

### Fluxo de Renderização

```mermaid
flowchart TD
    Start[RenderManager.animate] --> A[Calcular deltaTime]
    A --> B[Atualizar estatísticas]
    B --> C[Atualizar sistemas registrados]
    C --> D{Para cada sistema}
    D --> E[Chamar método de update]
    E --> D
    D --> F[Renderizar cena]
    F --> G[Próximo frame via requestAnimationFrame]
    G --> Start
```

### Fluxo de Processamento de Eventos

```mermaid
flowchart TD
    Event[Evento recebido do servidor] --> Check{Tipo de evento?}
    Check -->|player:init| Init[Inicializar jogador local]
    Check -->|world:update| Update[Processar atualizações do mundo]
    Check -->|combat:damageDealt| Damage[Processar dano em combate]
    Init --> EntityCreate[Criar entidade do jogador]
    Init --> CameraFollow[Configurar câmera para seguir]
    Update --> EntityUpdate[Atualizar entidades existentes]
    Update --> EntityCleanup[Remover entidades obsoletas]
    Damage --> FloatingText[Exibir texto de dano]
    Damage --> UpdateHUD[Atualizar HUD do alvo]
```

### Benefícios da Refatoração

1. **Modularidade**: Cada sistema tem responsabilidade única e bem definida
2. **Testabilidade**: Componentes isolados são mais fáceis de testar
3. **Manutenibilidade**: Bugs e novas features podem ser localizados em módulos específicos
4. **Escalabilidade**: Novos sistemas podem ser adicionados sem afetar os existentes
5. **Performance**: Melhor gerenciamento de recursos e otimizações específicas
6. **Colaboração**: Várias pessoas podem trabalhar em diferentes módulos simultaneamente

## Novos Padrões e Melhorias Recentes

### HUD do Alvo Sincronizada
- A HUD do alvo (target HUD) é atualizada instantaneamente sempre que o alvo sofre dano, seja causado pelo jogador local ou por outros jogadores.
- O nome do alvo é sempre exibido em pt-br, usando o dicionário MONSTERS para monstros.
- A HUD do alvo é sincronizada tanto por evento de dano (`combat:damageDealt`) quanto por atualização do mundo (`world:update`), garantindo consistência mesmo em situações de latência ou ordem diferente dos eventos.
- Seleção de alvo robusta: o alvo só é removido ao clicar em outro alvo, no próprio player ou pressionar ESC. Clicar em área vazia mantém o alvo atual.
- Uso consistente da função `formatTargetForHUD` para montar os dados do alvo em todos os fluxos (clique, dano, atualização).

### Painel Visual (lil-gui)
- Painel flutuante acessível por F10, permitindo ajuste em tempo real de exposição, intensidade das luzes (direcional, ambiente, hemisférica) e parâmetros do bloom.
- Permite resetar para o preset visual Albion Online.
- Facilita calibração visual sem necessidade de editar código.

### Integração de Eventos e Presenters
- O fluxo de atualização da HUD do alvo é robusto: usa dados do evento de dano para atualização imediata e dados do evento de mundo para garantir sincronização total.
- Presenters e eventos trabalham juntos para garantir que a interface sempre reflita o estado real das entidades.

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

## Eventos de Rede
- Formato `categoria:ação` (ex: `player:move`, `world:init`).
- Sincronização baseada em comandos, não posições absolutas.
- **Chat**: eventos dedicados para mensagens de chat, broadcast para todos os clientes conectados.

## Renderização e Otimização
- Uso de Three.js com OrthographicCamera para visão isométrica.
- Materiais `MeshStandardMaterial` para vegetação e objetos, com emissive e variação de cor.
- Iluminação composta: ambiente, direcional (sol), hemisférica e névoa.
- Sistema de LOD: objetos próximos com alta qualidade, distantes simplificados ou ocultos.
- Frustum e distance culling para ocultar objetos fora do campo de visão ou muito distantes.
- Estrutura para instanciamento de objetos repetidos.
- Atualização de sombras e culling em intervalos otimizados.

## Chat
- Sistema de chat integrado ao HUD, não bloqueia inputs de gameplay.
- Eventos de rede específicos para envio e recebimento de mensagens.
- Foco em usabilidade: atalhos de teclado, foco automático, não atrapalha a experiência de jogo.

## Robustez
- Validação de dados recebidos.
- Try/catch em handlers críticos.
- Logs descritivos para depuração.

## Padrão de Centralização de Progressão, Status e Dano
- Toda a lógica de XP, level, benefícios por level, multiplicador global de XP, cálculo de dano PvP/PvE, defesa, HP e mana está centralizada no módulo shared/progressionSystem.js.
- O progressionSystem.js exporta funções utilitárias para cálculo de XP, level, benefícios, dano, defesa, HP, mana e aplicação de bônus por level.
- O multiplicador global de XP (XP_MULTIPLIER) permite eventos como XP em dobro de forma simples e segura.
- Todos os eventos de dano (PLAYER.DAMAGE, COMBAT.DAMAGE_DEALT, etc.) transmitem o valor real sofrido pelo alvo, já com defesa, ataque e multiplicadores aplicados.
- O método takeDamage de jogadores e monstros retorna sempre o valor real do dano sofrido, e esse valor é usado nos eventos enviados ao cliente.
- O cliente exibe exatamente o valor recebido do servidor, garantindo feedback visual fiel e sem inconsistências.

## Padrão de nomes localizados na UI
- Sempre integrar nomes localizados de entidades (monstros, jogadores, etc) na UI usando o campo NAME da configuração.
- Nunca exibir identificador/código interno para o usuário final.
- Exemplo: BLACK_MIST_ZOMBIE exibe 'Zumbi da Névoa Negra'.

## Arquitetura Geral

O projeto segue uma arquitetura MCP (Model-Controller-Presenter) adaptada para jogos multijogador em tempo real:

- **Model (Servidor)**: Gerencia todo o estado do jogo, lógica de negócios e processamento
- **Controller (Servidor)**: Gerencia entradas e saídas, coordena a lógica de alto nível
- **Presenter (Cliente)**: Responsável pela renderização e envio de inputs do usuário

Esta arquitetura garante a separação de responsabilidades e mantém o servidor como fonte de verdade.

```mermaid
graph TD
    subgraph Cliente
        Input[Input do Usuário] --> ClientController
        ClientController --> Presenter
        Presenter --> Rendering[Renderização]
    end
    
    subgraph Servidor
        ServerController --> Model
        Model --> ServerController
    end
    
    ClientController -.-> |Eventos de Input| ServerController
    ServerController -.-> |Estado do Jogo| ClientController
```

## Sistema de Rede

### Princípios
- Servidor é sempre autoritativo
- Cliente apenas envia intenções (inputs), nunca altera estado diretamente
- Toda lógica de jogo roda no servidor

### Eventos de Comunicação
O sistema usa eventos nomeados no formato `categoria:ação`:

```mermaid
sequenceDiagram
    participant C as Cliente
    participant S as Servidor
    
    C->>S: player:move {direction}
    S->>C: player:moved {id, position, rotation}
    
    C->>S: player:useAbility {id, target}
    S->>C: player:abilityUsed {id, type, position}
    S->>C: combat:damageDealt {source, target, amount}
```

### Sistema de Otimização de Rede

O sistema implementa várias estratégias para otimizar o tráfego de rede e garantir performance mesmo com muitas entidades:

```mermaid
graph TD
    subgraph "Sistema de Otimização de Rede"
        DeltaUpdates[Delta Updates] --> Compressão
        EnvioSeletivo[Envio Seletivo] --> Compressão
        Compressão --> Monitoramento
        Monitoramento --> Análise
    end
```

#### Delta Updates
Cada jogador tem um snapshot do último estado enviado:
- O servidor compara o estado atual com o snapshot
- Apenas entidades com mudanças são enviadas
- Reduz o tamanho das mensagens em até 80%

```javascript
// Exemplo simplificado
const playerLastState = playerSnapshots.get(playerId) || {};
const updatedEntities = [];

for (const entity of worldEntities) {
    if (entityHasChanged(entity, playerLastState[entity.id])) {
        updatedEntities.push(entity);
        playerLastState[entity.id] = {...entity};
    }
}

// Envia apenas entidades atualizadas
sendToPlayer(playerId, updatedEntities);
```

#### Envio Seletivo
- Na conexão inicial, apenas entidades próximas ao jogador são enviadas
- Utiliza um sistema de raio de visibilidade configurável
- Reduz o payload inicial de ~200KB para ~7KB

```javascript
// Exemplo simplificado
const visibleEntities = worldEntities.filter(entity => 
    isWithinRadius(entity.position, player.position, VISIBILITY_RADIUS)
);

sendToPlayer(playerId, visibleEntities);
```

#### Compressão de Dados
- Sistema global de compressão adaptativa
- Mensagens acima de 500 bytes são comprimidas
- Utiliza zlib no servidor e pako no cliente
- Reduz ainda mais o tamanho dos payloads (até 70% adicionais)

```javascript
// Exemplo simplificado
function compressAndSend(playerId, data) {
    const message = JSON.stringify(data);
    
    if (message.length > 500) {
        const compressed = zlib.deflateSync(message);
        send(playerId, {compressed: true, data: compressed});
    } else {
        send(playerId, {compressed: false, data: message});
    }
}
```

#### Monitoramento
- Logs detalhados do tamanho original e comprimido dos payloads
- Rastreamento do número de entidades enviadas por atualização
- Análise em tempo real da economia de banda

#### Resultados
- Redução de ~95% no tráfego de rede
- Eliminação dos erros de "maxMessageSize exceeded"
- Experiência mais fluida mesmo com centenas de entidades
- Suporte a conexões mais lentas e maior número de jogadores

## Sistema de Controle de Entidades

### EntityManager
Gerencia a criação, atualização e remoção de todas as entidades do jogo:

```mermaid
classDiagram
    class EntityManager {
        +entities: Map
        +add(entity)
        +remove(id)
        +getById(id)
        +getByType(type)
        +update(delta)
    }
    
    class Entity {
        +id: string
        +type: string
        +position: Vector3
        +update(delta)
    }
    
    EntityManager "1" --> "*" Entity
```

### Sistema de IDs
- IDs únicos para cada entidade usando UUIDs
- Prefixos para facilitar depuração:
  - `p_` para jogadores
  - `m_` para monstros
  - `o_` para objetos do mundo
  - `z_` para zonas de dano

## Padrão de Serialização Binária e Sincronização de Entidades

### Serialização Binária (WORLD_UPDATE_FULL)
- Eventos críticos de atualização de mundo (monstros, objetos, jogadores) são transmitidos em formato binário customizado para máxima performance e economia de banda.
- O pacote `WORLD_UPDATE_FULL` inclui, para cada monstro: `id`, `monsterType` (índice), `position`, `rotation`, `stats: { hp, maxHp }`.
- Objetos do mundo incluem: `id`, `type` (índice), `position`, `rotation`, `status`.
- Jogadores incluem: `id`, `position`, `rotation`, `stats: { hp, mana }`, `level`.
- O serializador binário (`serializeWorldUpdateFull`/`deserializeWorldUpdateFull`) garante que todos os campos críticos estejam presentes, inclusive para entidades dinâmicas (spawnadas após login).
- O campo `maxHp` é sempre serializado e desserializado para monstros, evitando bugs de barra de vida zerada.

### Padronização de IDs
- Todos os IDs de entidades (monstros, objetos, jogadores) são convertidos para string no cliente antes de serem usados como chave em presenters ou mapas.
- Isso evita bugs de recriação/remoção indevida de entidades por mismatch de tipo (string vs int).
- O padrão é: sempre que um pacote binário chega, converter `id: String(id)` antes de atualizar presenters.

### Atualização Robusta de Entidades Dinâmicas
- Presenters (MonsterPresenter, WorldObjectPresenter) atualizam entidades existentes ou criam novas se não existirem.
- A atualização só recria o mesh se o tipo da entidade mudou (ex: `monsterType` ou `type` diferente).
- Campos de status (hp, maxHp, status) são sempre atualizados, mesmo para entidades criadas dinamicamente.
- FloatingBarManager e FloatingNameManager são integrados no momento da criação e atualização, garantindo que barras de vida e nomes flutuantes estejam sempre corretos.

### Fallback Visual e Robustez
- Se o tipo de entidade recebido não for reconhecido, presenters usam um fallback visual seguro (ex: cubo vermelho para monstros desconhecidos).
- Logs de advertência são emitidos para facilitar debug de tipos não mapeados.
- Presenters nunca recriam mesh sem necessidade, evitando flicker e perda de performance.

### Garantia de hp/maxHp e Sincronização Visual
- Sempre que um monstro é criado ou atualizado, a barra de vida (FloatingBarManager) é sincronizada usando os valores de `hp` e `maxHp` recebidos do servidor.
- Isso garante que monstros dinâmicos (spawnados após login) tenham barra de vida correta e responsiva ao sofrer dano.
- O mesmo padrão se aplica a jogadores e outros tipos de entidades com barra de status.

### Resumo do Fluxo Binário Moderno
1. Servidor monta arrays de entidades próximas ao jogador, incluindo todos os campos críticos.
2. Serializador binário compacta e envia o pacote `WORLD_UPDATE_FULL`.
3. Cliente desserializa, converte IDs para string e atualiza presenters.
4. Presenters criam/atualizam entidades, sincronizam barras de vida e nomes flutuantes.
5. Fallback visual é aplicado para tipos desconhecidos, logs são emitidos para debug.
6. O fluxo garante robustez, performance e experiência visual consistente mesmo com entidades dinâmicas.

## Sistema de Combate

O sistema de combate gerencia dano, efeitos de status e morte:

## Padrão de Spawn Inicial
- Em mapas lineares (ex: DESERT_PATH), o player sempre nasce e respawna no início do caminho (x:0, y:0, z:-95).
- Para mapas abertos, spawn aleatório dentro da zona SPAWN.

## Padrão Visual
- Iluminação global realista: tons naturais, exposição calibrada, névoa sutil para profundidade.
- Materiais dos assets: MeshStandard/Physical, roughness >= 0.7, metalness <= 0.2.
- Proporções dos assets baseadas no player (árvore 2.5~3.5x mais alta, rocha até 2.0, arbusto até 0.9, cacto 1.5~2.2).
- Sombras sempre ativas para assets principais.

## Labels/Efeitos de Chão
- Labels 3D sempre visíveis para spots e boss, integrados ao WorldObjectPresenter.
- Efeito visual profissional, textos em português, cor e outline distintos.

## Clareza de Passagens/Bloqueios
- Espaçamento mínimo entre objetos aumentado (minDistance 3.5, clusters maiores).
- Bloqueios naturais (rochas, árvores) delimitam caminhos, mas sempre há passagens claras.
