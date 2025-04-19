# Tech Context

## Stack
- Frontend: JavaScript puro, manipulação direta do DOM, CSS customizado.
- Imagens de skills em PNG, pasta `/client/src/imagens/skills`.
- Estrutura modular: `/client`, `/server`, `/shared`.

## Dependências
- Nenhuma dependência externa obrigatória para HUD/skills/chat.

## Restrições
- Foco em performance e responsividade.
- Sem frameworks pesados no frontend.
- CSS customizado para todos os componentes visuais.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Plataforma de runtime para JavaScript no servidor
- **ECMAScript Modules (ESM)**: Formato modular para organização do código
- **geckos.io**: Biblioteca para comunicação cliente-servidor em tempo real via WebRTC

### Frontend
- **JavaScript Vanilla**: Sem frameworks para o código do cliente
- **Three.js**: Biblioteca para renderização 3D no navegador
- **WebGL**: API utilizada pelo Three.js para renderização 3D

### Ferramentas de Desenvolvimento
- **npm**: Gerenciador de pacotes para dependências do projeto
- **Git**: Sistema de controle de versão
- **ESLint**: Linter para garantir qualidade do código JavaScript
- **nodemon**: Ferramenta de desenvolvimento para reiniciar automaticamente o servidor

## Configuração do Ambiente de Desenvolvimento

### Estrutura do Projeto
```
/
├── client/
│   ├── assets/          # Modelos 3D, texturas, áudio
│   ├── src/
│   │   ├── presenters/  # Implementações do padrão Presenter
│   │   ├── input/       # Gerenciamento de entrada do usuário
│   │   ├── rendering/   # Código de renderização com Three.js
│   │   └── network/     # Comunicação com o servidor
│   └── index.html       # Página de entrada do cliente
│
├── server/
│   ├── src/
│   │   ├── models/      # Implementações do padrão Model
│   │   ├── controllers/ # Implementações do padrão Controller
│   │   ├── systems/     # Sistemas do jogo (combate, física, etc.)
│   │   └── network/     # Código de comunicação com os clientes
│   └── index.js         # Ponto de entrada do servidor
│
├── shared/              # Código compartilhado entre cliente e servidor
│   ├── constants/       # Constantes do jogo
│   └── utils/           # Funções utilitárias comuns
│
├── package.json         # Definição de dependências e scripts
└── README.md            # Documentação do projeto
```

### Requisitos do Sistema
- Node.js v16.0 ou superior
- Navegador moderno com suporte a WebGL (Chrome, Firefox, Edge, Safari)
- npm v7.0 ou superior

### Scripts de Desenvolvimento
- `npm run dev:server`: Inicia o servidor em modo de desenvolvimento
- `npm run dev:client`: Inicia um servidor de desenvolvimento para o cliente
- `npm run build`: Compila o cliente para produção
- `npm run start`: Inicia o servidor em modo de produção

## Restrições Técnicas

### Servidor
- Deve utilizar ESM (ECMAScript Modules) devido à dependência do geckos.io
- O servidor é autoritativo e deve validar todas as ações do cliente
- Loop de jogo deve rodar em tick rate consistente (ex: 20 ticks por segundo)

### Cliente
- Deve funcionar em navegadores que suportam WebGL
- Não deve confiar em código do cliente para decisões relacionadas à lógica do jogo
- Deve implementar interpolação para movimento suave entre atualizações do servidor

### Rede
- Comunicação via WebRTC (geckos.io) com fallback para WebSockets
- Otimizações para minimizar a largura de banda (atualizações delta, compressão)
- Lidar com latência variável e perda de pacotes

## Dependências

### Dependências do Servidor
```json
{
  "dependencies": {
    "@geckos.io/server": "^2.3.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "eslint": "^8.38.0"
  }
}
```

### Dependências do Cliente
```json
{
  "dependencies": {
    "@geckos.io/client": "^2.3.0",
    "three": "^0.150.1"
  },
  "devDependencies": {
    "vite": "^4.2.1",
    "eslint": "^8.38.0"
  }
}
```

## Decisões e Compromissos Técnicos

- **Vanilla JS vs Framework**: Optamos por JavaScript puro para o cliente para minimizar overhead e manter o controle preciso sobre o ciclo de renderização, essencial para jogos.

- **WebRTC vs WebSockets**: Escolhemos geckos.io (WebRTC) pela menor latência e comunicação P2P, com fallback para WebSockets.

- **Three.js vs Engine de Jogos**: Three.js foi escolhido por ser leve e focado na renderização 3D, sem as complexidades de uma engine completa que não seria totalmente aproveitada em um jogo isométrico.

- **Servidor Node.js**: Permite compartilhar código entre cliente e servidor (ambos em JavaScript) e oferece boa performance para um servidor de jogos do porte planejado. 