# Project Brief: MMORPG Topdown Isométrico

## Objetivo do Projeto
Desenvolver um MMORPG topdown isométrico (estilo AlbionOnline e MuOnline) com movimentação WSAD e rotação do personagem. O projeto foca em criar um mundo persistente gerenciado pelo servidor, com combate em tempo real, habilidades mágicas e progressão de personagem.

## Requisitos Principais

### Personagem
- Uma classe jogável: Mago
- Sistema de XP e nível com incremento de status ao evoluir

### Combate e Habilidades
- 4 habilidades (1, 2, 3, 4) com cooldown, consumo de mana, dano e dano em área
- Habilidades são lançadas na posição do mouse (direcionais ou em área)
- Combate cooperativo: jogadores podem atacar o mesmo monstro

### Mundo e Entidades
- Mundo pequeno com árvores, rochas e spawn de monstros
- Um tipo de monstro com ataque melee

### Mecânicas de Jogo
- Movimentação com WSAD e rotação do personagem
- Câmera topdown isométrica que segue o jogador

### Arquitetura
- Todos os status, habilidades, mundo e monstros são gerenciados pelo servidor
- Comunicação entre cliente e servidor usando geckos.io
- Seguir o padrão arquitetural MCP (Model, Controller, Presenter)
- O servidor deve ser implementado utilizando o padrão ESM (ECMAScript Modules)

## Tecnologias Principais
- Backend: Node.js (ESM)
- Comunicação: geckos.io
- Frontend: JavaScript Vanilla + Three.js

## Escopo e Limites
- Foco inicial em uma única classe jogável
- Um tipo de monstro
- Mundo de tamanho pequeno mas funcional
- Mecânicas básicas de MMORPG implementadas de forma completa 