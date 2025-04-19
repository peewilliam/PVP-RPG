# Project Brief

Este projeto é um MMORPG Topdown Isométrico com foco em PVP e RPG, inspirado em grandes MMOs modernos. O objetivo é criar uma experiência visual e de jogabilidade profissional, com interface responsiva, barra de skills customizável, HUD moderno e chat lateral eficiente.

## Requisitos principais
- Barra de skills com drag-and-drop, cooldown visual, ícones em PNG.
- Chat lateral moderno, com abas, atalhos de teclado e sem borda inferior.
- HUD com barras de vida/mana estilizadas, animações e responsividade.
- Sincronização de cooldown ao mover habilidades de slot.
- Sistema de combate, XP, eventos de rede padronizados.
- Arquitetura MCP (Model-Controller-Presenter) e servidor autoritativo.

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

# Resumo do Projeto

O projeto implementa um MMORPG topdown isométrico com combate em tempo real, habilidades de área, sistema de status (ex: slow), arquitetura MCP e servidor autoritativo. Recentemente, foram padronizadas as seguintes práticas:

- Habilidades de área (como Meteor Storm e Estacas de Gelo) usam DamageZone para centralizar lógica de dano e efeitos.
- Efeitos de status (ex: slow) são aplicados via DamageZone e consultados por Player e Monster para modificar comportamento (ex: velocidade).
- Eventos de rede específicos (ex: `combat:slow`) são usados para sincronizar efeitos visuais entre servidor e cliente.
- O sistema de combate foi robustecido com logs detalhados, validação de parâmetros e tratamento de edge cases.
- O cliente exibe efeitos visuais de status (ex: congelado) de forma sincronizada com o servidor.

Esses padrões garantem escalabilidade, fácil manutenção e experiência consistente para o jogador. 