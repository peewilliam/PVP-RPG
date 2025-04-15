# MMORPG Isométrico

Um MMORPG topdown isométrico com movimentação WSAD, rotação do personagem e combate em tempo real.

## Requisitos

- Node.js v16.0 ou superior
- npm v7.0 ou superior
- Navegador moderno com suporte a WebGL

## Instalação

1. Clone o repositório:
```
git clone [URL_DO_REPOSITÓRIO]
cd mmorpg-isometrico
```

2. Instale as dependências:
```
npm install
```

## Executando o Projeto

### Servidor de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento:
```
npm run dev:server
```

### Cliente de Desenvolvimento

Para iniciar o cliente em modo de desenvolvimento:
```
npm run dev:client
```

## Comandos do Jogo

- **Movimento**: Teclas WSAD
- **Habilidades**: Teclas 1, 2, 3, 4 (a ser implementado)
- **Ataque**: Clique do mouse (a ser implementado)

## Estrutura do Projeto

```
/
├── client/              # Código do cliente
│   ├── assets/          # Modelos 3D, texturas, áudio
│   ├── src/             # Código fonte do cliente
│   └── index.html       # Página de entrada do cliente
│
├── server/              # Código do servidor
│   └── src/             # Código fonte do servidor
│
├── shared/              # Código compartilhado
│   ├── constants/       # Constantes do jogo
│   └── utils/           # Funções utilitárias
│
└── memory-bank/         # Documentação do projeto
```

## Recursos e Funcionalidades

- Classe jogável: Mago
- Habilidades mágicas com cooldown
- Mundo persistente gerenciado pelo servidor
- Combate cooperativo
- Sistema de XP e níveis

## Tecnologias Utilizadas

- **Backend**: Node.js (ESM)
- **Comunicação**: geckos.io
- **Frontend**: JavaScript Vanilla + Three.js 