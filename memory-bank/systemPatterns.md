# Padrões do Sistema

## Arquitetura do Sistema

O MMORPG isométrico segue uma arquitetura cliente-servidor onde o servidor é autoritativo e gerencia todos os aspectos do mundo do jogo.

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

4. **Desconexão**:
   - O servidor detecta a desconexão de um jogador
   - O servidor notifica todos os outros jogadores via `player:disconnected`

## Padrões de Design em Uso

### Padrão Observer
- Utilizado para notificar o cliente sobre mudanças no estado do jogo
- Implementado através do sistema de eventos do geckos.io

### Padrão Component-Entity-System
- Entidades do jogo (jogadores, monstros, elementos do mundo) são compostas por componentes reutilizáveis
- Componentes comuns: Position, Health, MovementController, CombatStats

### Padrão State
- Utilizado para gerenciar estados de entidades (idle, moving, attacking, dead)
- Facilita a transição entre comportamentos

### Padrão Factory
- Utilizado para criar entidades e componentes de forma padronizada
- Factories específicas para Player, Monster, WorldObject

### Padrão Command
- Implementado para o sistema de movimento, onde o cliente envia comandos em vez de estado
- Separa a intenção (comando) da execução (lógica de movimento no servidor)

## Relacionamentos entre Componentes

### Servidor
```
GameServer
 ├── WorldManager
 │    ├── EntityManager
 │    ├── SpawnSystem
 │    └── CollisionSystem
 ├── PlayerManager
 │    ├── ConnectionHandler
 │    └── AuthenticationService
 └── GameLoop
      ├── PhysicsSystem
      ├── CombatSystem
      └── AISystem
```

### Cliente
```
GameClient
 ├── InputManager
 │    ├── KeyboardHandler
 │    └── MouseHandler
 ├── RenderEngine
 │    ├── SceneManager
 │    ├── CameraController
 │    └── EntityRenderer
 ├── NetworkManager
 │    ├── ConnectionHandler
 │    └── SyncManager
 └── UIManager
      ├── HUD
      ├── InventoryUI
      └── AbilityBar
``` 