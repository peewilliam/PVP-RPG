# RPG PvP - Jogo 3D com Three.js

Um MVP (Produto Mínimo Viável) de um jogo RPG com suporte a PvP desenvolvido com Three.js, baseado no exemplo de animação de caminhada disponível no repositório oficial do Three.js.

## Funcionalidades

- Movimentação do personagem com animações (andar, correr, atacar)
- Inimigos controlados por IA
- Sistema de combate básico
- Sistema de níveis e experiência
- Ambiente 3D com árvores e obstáculos
- Possibilidade de PvP (em desenvolvimento)

## Como Executar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador moderno

Ou use um servidor local (recomendado para evitar problemas de CORS):

```powershell
# Usando Python
python -m http.server

# Ou usando Node.js (depois de instalar o http-server)
npx http-server
```

## Controles

- **W/A/S/D** ou **Setas**: Mover personagem
- **Shift**: Correr
- **Espaço**: Atacar
- **Mouse**: Controlar câmera

## Desenvolvimento

Este projeto foi construído com:

- Three.js para renderização 3D
- JavaScript puro para lógica do jogo
- HTML/CSS para interface do usuário

## Estrutura do Projeto

```
project/
├── index.html            # Página principal
├── src/
│   ├── js/               # Arquivos JavaScript
│   │   ├── main.js       # Ponto de entrada
│   │   ├── game.js       # Classe principal
│   │   ├── player.js     # Jogador
│   │   ├── enemy.js      # Inimigos
│   │   ├── world.js      # Ambiente
│   │   └── ui.js         # Interface
│   ├── css/              # Estilos CSS
│   ├── models/           # Modelos 3D
│   ├── textures/         # Texturas
│   └── audio/            # Sons
└── README.md             # Este arquivo
```

## Próximos Passos

- Implementar multiplayer com WebSockets
- Adicionar mais tipos de inimigos
- Implementar sistema de equipamentos
- Adicionar mais habilidades
- Criar sistema de missões

## Créditos

- Three.js (https://threejs.org/)
- Modelo de personagem: Mixamo (https://www.mixamo.com/)
- Texturas: Three.js examples repository

## Licença

Este projeto está sob a licença MIT. 