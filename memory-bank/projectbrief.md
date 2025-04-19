# Project Brief

Desenvolver um MMORPG topdown isométrico com renderização 3D, foco em performance, visual vibrante e arquitetura robusta (MCP). O objetivo é criar um mundo imersivo, com biomas distintos, objetos 3D otimizados, sistema de combate, movimentação fluida, sincronização eficiente entre cliente e servidor e chat em tempo real integrado.

## Requisitos principais
- Mundo 3D com biomas, vegetação, rochas, estruturas e ambientação variada.
- Sincronização de jogadores e entidades via eventos de rede.
- Sistema de combate, habilidades e morte/respawn.
- Renderização isométrica com Three.js, materiais realistas e iluminação dinâmica.
- Otimização para alta performance mesmo com muitos objetos.
- Estrutura de código clara, separando cliente, servidor e código compartilhado.
- **Chat em tempo real** integrado à interface do jogo, permitindo comunicação entre jogadores de forma fluida e intuitiva.

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