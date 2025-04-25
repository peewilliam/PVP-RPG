# Contexto do Produto

## Por que este projeto existe
Este MMORPG topdown isométrico foi concebido para oferecer uma experiência de jogo multiplayer online que combina elementos clássicos de jogos como AlbionOnline e MuOnline, mas com uma implementação moderna e acessível. O projeto busca criar uma experiência de jogo colaborativa e envolvente, focada em mecânicas de combate mágico em tempo real.

## Problemas que resolve
1. **Complexidade de entrada**: Muitos MMORPGs apresentam curvas de aprendizado íngremes. Este projeto visa oferecer mecânicas acessíveis, mas com profundidade suficiente para jogadores experientes.
2. **Barreiras técnicas**: Utilizando tecnologias web modernas, o jogo pode ser acessado facilmente sem necessidade de instalações complexas.
3. **Experiência de combate limitada**: O sistema de combate focado em posicionamento e uso estratégico de habilidades oferece uma alternativa aos sistemas baseados apenas em cliques.
4. **Integração servidor-cliente**: O projeto demonstra uma implementação de mundo persistente gerenciado pelo servidor, resolvendo desafios comuns de sincronização em jogos multiplayer.

## Como deve funcionar
1. **Autenticação e Entrada**:
   - O jogador se conecta ao servidor
   - Seleciona seu personagem (classe Mago na versão inicial)
   - Entra no mundo do jogo

2. **Gameplay Principal**:
   - Movimentação intuitiva com WSAD e rotação do personagem
   - Exploração de um mundo com elementos interativos (árvores, rochas)
   - Combate contra monstros usando habilidades mágicas
   - Cooperação com outros jogadores para derrotar inimigos
   - Progressão de personagem através de XP e níveis

3. **Sistemas de Combate**:
   - Habilidades lançadas na direção do cursor
   - Sistema de cooldown e gerenciamento de recursos (mana)
   - Impacto visual e feedback ao acertar alvos
   - Monstros com comportamento de IA que respondem às ações do jogador

## Objetivos de experiência do usuário
1. **Imersão**: Criar uma sensação de mundo vivo e persistente onde as ações dos jogadores têm impacto.
2. **Satisfação de combate**: Oferecer feedback visual e mecânico satisfatório ao usar habilidades e derrotar inimigos.
3. **Progressão clara**: Garantir que o jogador sinta seu personagem ficando mais forte através de aumento de status.
4. **Cooperação natural**: Facilitar a interação e cooperação entre jogadores sem necessidade de mecânicas complexas.
5. **Controle responsivo**: Garantir que a movimentação e o uso de habilidades sejam precisos e responsivos.
6. **Desafio balanceado**: Oferecer um nível adequado de desafio que incentive o aprendizado e a melhoria das habilidades do jogador.
7. **Clareza visual e feedback imediato**: HUD do alvo sempre sincronizada, nome pt-br, painel visual para calibração, seleção de alvo robusta.

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