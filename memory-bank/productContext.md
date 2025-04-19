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

## Como deve funcionar
- Usuário pode arrastar habilidades entre slots e o cooldown acompanha a habilidade.
- Chat sempre visível, sem borda inferior, com abas e atalhos de teclado.
- HUD centralizado, com barras animadas e informações de XP, vida, mana e nível.
- Skills exibem imagens reais, não emojis, e o número do slot é sempre visível. 