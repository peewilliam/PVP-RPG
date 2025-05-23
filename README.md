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

## Depuração de Problemas Conhecidos

### Sistema de Combate

O sistema de combate foi corrigido para resolver os seguintes problemas:

1. **Aplicação de Dano**: As habilidades estavam apresentando efeitos visuais, mas não aplicando dano aos alvos. Foi adicionado registro de log detalhado no `CombatSystem.js` para monitorar o processo de aplicação de dano.

2. **Efeitos Visuais**: O efeito visual do METEOR_STORM (Chuva de Meteoros) foi reescrito como um componente separado em `client/src/skills/MeteorStormSkill.js`, resolvendo problemas de renderização que preenchiam toda a tela.

### Problemas de Efeitos Visuais de Dano

Foi corrigido o problema com os efeitos visuais de dano que estavam piscando e preenchendo toda a tela:

1. **Tamanho dos Textos Flutuantes**: Limitamos o tamanho máximo dos textos de dano com base no valor do dano causado, usando uma fórmula mais conservadora.

2. **Propriedades de Renderização**: Modificamos as propriedades de renderização dos sprites para evitar problemas de profundidade e garantir que fiquem visíveis sem ocupar toda a tela.

3. **Animação e Fade**: Melhoramos a animação de movimento e o efeito de desvanecimento (fade) para que sejam mais suaves e menos intrusivos.

4. **Escalonamento por Distância**: Modificamos completamente o sistema de escalonamento baseado em distância para evitar que os textos fiquem enormes quando vistos de longe.

### Como Testar as Correções

1. Inicie o servidor:
   ```
   npm run dev:server
   ```

2. Em outra janela de terminal, inicie o cliente:
   ```
   npm run dev:client
   ```

3. Verifique o console do servidor durante o uso de habilidades para ver os logs detalhados que mostram o processo de aplicação de dano:
   - Processe logs começando com "Processando habilidade..."
   - Verifique logs de "Aplicando dano..." e "Após dano..."
   - Confirme se a saúde (HP) dos alvos está diminuindo corretamente

4. Para testar o efeito visual do Chuva de Meteoros (tecla 4):
   - Observe como os meteoros agora caem de forma controlada
   - Confirme que o efeito não está preenchendo toda a tela
   - Verifique se há efeitos de explosão ao atingir o solo

5. Para testar os efeitos de dano:
   - Ataque monstros com diferentes habilidades
   - Verifique se os textos de dano aparecem sobre os monstros sem preencher a tela
   - Confirme que o tamanho do texto de dano é proporcional ao dano causado, mas não excessivamente grande
   - Observe se os textos somem suavemente após 1,2 segundos

### Registros de Alterações

1. Criação de um sistema de efeitos visuais dedicado para cada habilidade:
   - `client/src/skills/FireballSkill.js` (existente)
   - `client/src/skills/IceSpikeSkill.js` (existente)
   - `client/src/skills/TeleportSkill.js` (existente)
   - `client/src/skills/MeteorStormSkill.js` (novo)

2. Maior registro de logs no sistema de combate para melhor depuração no servidor.

3. Correção do método `handlePlayerDeath` para utilizar as constantes globais corretamente.

4. Melhorias no sistema de efeitos visuais:
   - Reduzido tamanho dos textos flutuantes
   - Limitada a escala baseada na distância
   - Melhorada a animação de desvanecimento
   - Ajustadas propriedades de renderização

5. Script de teste para efeitos visuais em `debug/testEffects.js`

### Próximos Passos

- Implementar efeitos visuais dedicados para FROST_SPIKES (atualmente usando um efeito genérico)
- Adicionar suporte a dano ao longo do tempo para habilidades como METEOR_STORM
- Balancear os valores de dano das habilidades 




Olá! Vamos continuar o desenvolvimento do MVP.
Instruções Críticas:
Leia TODO o memory-bank:
É fundamental que você leia e compreenda completamente todos os arquivos principais dentro do diretório memory-bank/ antes de prosseguir. Meu estado é resetado, e dependo totalmente desses arquivos.
Os arquivos principais são:
projectbrief.md
productContext.md
systemPatterns.md
techContext.md
activeContext.md
progress.md
Leia também o arquivo de referência de mapas modulares:
Sempre leia e utilize como referência o arquivo mapas-modulares-plano.md dentro do memory-bank, pois ele contém o plano detalhado, padrões, pipeline e próximos passos para a adoção de mapas modulares GLB no projeto.
Idioma:
Responda sempre em Português do Brasil (pt-br).
Contexto Atual (Resumo):
A estrutura do projeto utiliza Javascript puro, Three.js, MCP, Node.js e Geckos.io.
Consulte activeContext.md e progress.md para detalhes sobre o estado atual e os próximos passos que estávamos considerando.
Consulte mapas-modulares-plano.md para garantir que todas as decisões, padrões e etapas relacionadas a mapas modulares estejam sendo seguidas e evoluídas.
Próxima Ação:
(Descreva aqui o que deseja fazer ou qual etapa do plano deseja avançar, detalhar ou implementar.)