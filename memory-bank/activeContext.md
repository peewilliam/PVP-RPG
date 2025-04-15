# Contexto Ativo

## Foco de Trabalho Atual
Estamos desenvolvendo o MMORPG isométrico, e o foco atual está em:
1. ✅ Estabelecer a estrutura básica do projeto
2. ✅ Configurar a comunicação cliente-servidor usando geckos.io
3. ✅ Implementar o sistema básico de movimentação do personagem (servidor autoritativo)
4. ✅ Criar o ambiente visual básico com Three.js
5. ✅ Implementar sincronização inicial de jogadores entre clientes

## Mudanças Recentes
- ✅ Definição inicial dos requisitos do projeto
- ✅ Configuração do Memory Bank para documentação do projeto
- ✅ Criação da estrutura de diretórios cliente/servidor
- ✅ Inicialização do projeto NPM e configuração do package.json
- ✅ Implementação básica do servidor com geckos.io
- ✅ Implementação básica do cliente com Three.js
- ✅ Correção da arquitetura de movimentação para seguir o padrão MCP (servidor autoritativo)
- ✅ Implementação de eventos específicos para novos jogadores e jogadores existentes
- ✅ Correção de bugs na comunicação cliente-servidor
- ✅ Implementação da rotação do personagem baseada no movimento WASD
- ✅ Implementação de movimentação relativa à orientação da câmera isométrica
- ✅ Correção dos ângulos de rotação para visão isométrica
- ✅ Melhorias nos indicadores visuais de direção dos personagens
- ✅ Correção do alinhamento entre movimentação e rotação
- ✅ Movimentação do cálculo de rotação para o servidor (servidor totalmente autoritativo)
- ✅ Correção final da rotação para que o personagem aponte na direção oposta ao movimento

## Próximos Passos
1. **Instalação de Dependências**:
   - Executar `npm install` para instalar todas as dependências necessárias

2. **Aprimoramento do Servidor**:
   - ✅ Implementar lógica de movimento no servidor
   - ✅ Implementar sincronização de jogadores entre clientes
   - Implementar classes Model para entidades (Player, Monster)
   - Desenvolver sistema de colisão básico
   - Implementar lógica de spawn de monstros

3. **Aprimoramento do Cliente**:
   - Melhorar a câmera isométrica
   - ✅ Implementar rotação do personagem com o mouse
   - Adicionar elementos visuais básicos (árvores, rochas)

4. **Implementação de Habilidades**:
   - Criar sistema básico de habilidades no servidor
   - Implementar interface para habilidades no cliente
   - Desenvolver efeitos visuais para habilidades

5. **Sistema de Combate**:
   - Implementar lógica de combate no servidor
   - Desenvolver sistema de dano e morte
   - Implementar sistema de XP e nível

## Decisões e Considerações Ativas

### Arquitetura
- **Padrão MCP**: Estrutura inicial implementada com separação clara entre servidor e cliente.
- **Sincronização de Estado**: ✅ Implementada arquitetura autoritativa onde o servidor controla toda a lógica do jogo e o cliente apenas envia comandos e renderiza o estado.
- **Validação de Dados**: Adicionado tratamento de erros e validação de dados em todas as comunicações.
- **Eventos Específicos**: Criados eventos específicos (JOINED, EXISTING) para lidar com a sincronização inicial de jogadores.
- **Rotação com WASD**: ✅ Implementada rotação baseada na direção do movimento WASD, com ângulos alinhados à perspectiva da câmera isométrica. Cálculo de rotação foi movido para o servidor para garantir consistência.

### Tecnologia
- **ESM vs CJS**: Configurado para usar ESM conforme definido nos requisitos.
- **Câmera Isométrica**: Implementada usando THREE.OrthographicCamera.
- **Geckos.io**: Implementada comunicação client-servidor resiliente, com tratamento adequado de erros.
- **Three.js Raycasting**: Utilizado para calcular a interseção do mouse com o mundo 3D.

### Gameplay
- **Movimentação**: ✅ Implementada arquitetura autoritativa onde o cliente envia comandos e o servidor processa e atualiza as posições. Movimentação é relativa à câmera isométrica.
- **Representação Visual**: Temporariamente usando cubos para representar jogadores, com indicadores de direção em forma de cone.
- **Multi-jogador**: ✅ Implementada sincronização de jogadores para visualização mútua.
- **Rotação**: ✅ Implementada rotação do personagem baseada na direção do movimento, com abordagem onde o personagem aponta na direção oposta ao movimento para corresponder à convenção esperada na visão isométrica.

### Desenvolvimento
- Estrutura de arquivos organizada conforme padrões definidos
- Sistema de comunicação cliente-servidor implementado usando geckos.io
- Interface básica de usuário preparada com slots para habilidades e barras de status
- Implementado sistema robusto de tratamento de erros para evitar crashes 