# Product Context

## Por que este projeto existe?
Para criar um MMORPG isométrico com experiência visual clara, realista e inspirada em grandes títulos (Diablo 4, POE2), com navegação intuitiva, feedback visual profissional e assets facilmente reconhecíveis.

## Problemas que resolve
- Spawn inicial sempre no início do mapa linear, evitando confusão e spawn em áreas perigosas.
- Passagens e bloqueios naturais bem definidos, sem frustração para o jogador.
- Assets do mundo com proporção e materiais realistas, facilitando identificação e navegação.
- Labels/efeitos de chão para spots e boss, sempre visíveis e informativos.
- Iluminação global polida, com névoa sutil e sombras suaves, melhorando a imersão.

## Como deve funcionar
- O jogador sempre nasce no início do caminho em mapas lineares (ex: DESERT_PATH).
- Labels/efeitos de chão indicam claramente spots e boss.
- Passagens são sempre visíveis, bloqueios naturais nunca impedem navegação fluida.
- Assets e iluminação seguem padrão realista e harmônico.

## Objetivos de experiência do usuário
- Clareza visual e feedback imediato
- Navegação intuitiva e sem frustrações
- Identificação fácil de áreas importantes (spots, boss, spawn)
- Imersão visual e sensação de mundo vivo

## Público-alvo
- Jogadores de MMORPGs que procuram uma experiência mais direta e focada em ação
- Fãs de jogos topdown isométricos
- Jogadores que gostam de classes mágicas e sistemas de habilidades
- Entusiastas de jogos multiplayer cooperativos

O sistema agora oferece feedback visual e mecânico consistente para habilidades de área e efeitos de status:
- Jogadores e monstros recebem dano e efeitos (ex: slow) de forma clara e previsível.
- O efeito de slow é visível no cliente, reforçando o impacto das habilidades e melhorando a clareza do combate.
- A arquitetura permite fácil expansão para novos efeitos e habilidades, mantendo a experiência do usuário fluida e responsiva.

## Problemas resolvidos
- Interface de skills e HUD mais profissional e clara.
- Feedback visual aprimorado para cooldown, mana, vida e ações do jogador.
- Experiência de usuário moderna, inspirada em MMOs atuais.
- HUD do alvo sincronizada, nome pt-br, painel visual para calibração, seleção de alvo robusta, clareza visual e feedback imediato.

## Como deve funcionar
- Usuário pode arrastar habilidades entre slots e o cooldown acompanha a habilidade.
- Chat sempre visível, sem borda inferior, com abas e atalhos de teclado.
- HUD centralizado, com barras animadas e informações de XP, vida, mana e nível.
- Skills exibem imagens reais, não emojis, e o número do slot é sempre visível.
- HUD do alvo sempre sincronizada, nome pt-br, seleção robusta.

## Experiência do Usuário
- Visual limpo, colorido e agradável.
- Mundo com sensação de profundidade e vida.
- Jogabilidade fluida, sem travamentos mesmo com muitos jogadores/objetos.
- Feedback visual claro para ações, habilidades e interações.
- **Chat em tempo real** integrado ao HUD, permitindo comunicação entre jogadores sem atrapalhar a experiência de jogo. O chat é essencial para a interação social e colaboração dentro do MMORPG.
- UX aprimorada: HUD central com feedback visual imediato de XP, borda dourada e fundo cinza sempre visível
- Clareza visual: jogador sempre entende o progresso de XP, mesmo sem ter ganho XP ainda
- Sincronização robusta: level, xp, nextLevelXp e name sempre atualizados entre servidor e cliente
- Decisão: feedback visual e clareza são prioridades para engajamento e satisfação do jogador
- Padrão: fallback visual no HUD para evitar sensação de "vazio" ou "invisível"
- UI exibe nomes localizados de monstros (campo NAME), nunca o identificador interno. Garante clareza, localização e experiência de usuário consistente. Exemplo: BLACK_MIST_ZOMBIE exibe 'Zumbi da Névoa Negra'.

# Melhorias Recentes

- O sistema de entidades foi totalmente reestruturado: agora cada tipo (jogador, monstro, objeto do mundo) é gerenciado separadamente, evitando bugs de sumiço ou comportamento estranho e tornando o mundo mais estável.
- A comunicação entre cliente e servidor foi otimizada com eventos binários: as informações mais importantes do jogo (movimento, status, morte, atualização de mundo) agora são transmitidas em formato binário, reduzindo o tempo de resposta e o uso de internet, deixando a experiência mais fluida mesmo com muitos jogadores.
- Essas mudanças aumentam a escalabilidade do sistema, permitindo mais jogadores e monstros simultâneos, e preparam o terreno para futuras expansões e novidades.

## Objetivo
- Prover uma experiência multiplayer fluida, robusta e escalável, mesmo em áreas densas do mapa.
- Reduzir o tráfego de rede e o processamento no cliente, mantendo a sincronização visual perfeita.

## Evolução recente
- Adoção do padrão de delta update binário para monstros:
  - Apenas monstros que mudam ou entram/saem do alcance são enviados a cada tick.
  - Redução significativa do tráfego e do custo de processamento.
  - Arquitetura pronta para expandir o padrão delta para outros tipos de entidades. 