# Tech Context

## Stack
- Frontend: JavaScript puro, manipulação direta do DOM, CSS customizado.
- Imagens de skills em PNG, pasta `/client/src/imagens/skills`.
- Estrutura modular: `/client`, `/server`, `/shared`.

## Dependências
- **lil-gui**: Utilizado para painel visual de calibração de luzes, exposição e bloom no cliente.
- **pako**: Biblioteca JavaScript para descompressão (usado para otimização de rede no cliente).
- Nenhuma dependência externa obrigatória para HUD/skills/chat além do painel visual.

## Restrições
- Foco em performance e responsividade.
- Sem frameworks pesados no frontend.
- CSS customizado para todos os componentes visuais.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Plataforma de runtime para JavaScript no servidor
- **ECMAScript Modules (ESM)**: Formato modular para organização do código
- **geckos.io**: Biblioteca para comunicação cliente-servidor em tempo real via WebRTC
- **zlib**: Biblioteca nativa do Node.js para compressão de dados

### Frontend
- **JavaScript Vanilla**: Sem frameworks para o código do cliente
- **Three.js**: Biblioteca para renderização 3D no navegador
- **WebGL**: API utilizada pelo Three.js para renderização 3D
- **lil-gui**: Painel visual para ajuste em tempo real de exposição, luzes e bloom
- **pako**: Biblioteca para descompressão de dados no navegador

### Ferramentas de Desenvolvimento
- **npm**: Gerenciador de pacotes para dependências do projeto
- **Git**: Sistema de controle de versão
- **ESLint**: Linter para garantir qualidade do código JavaScript
- **nodemon**: Ferramenta de desenvolvimento para reiniciar automaticamente o servidor

## Configuração do Ambiente de Desenvolvimento

### Estrutura do Projeto
```
/
├── client/
│   ├── assets/          # Modelos 3D, texturas, áudio
│   ├── src/
│   │   ├── presenters/  # Implementações do padrão Presenter
│   │   ├── input/       # Gerenciamento de entrada do usuário
│   │   ├── rendering/   # Código de renderização com Three.js
│   │   └── network/     # Comunicação com o servidor
│   └── index.html       # Página de entrada do cliente
│
├── server/
│   ├── src/
│   │   ├── models/      # Implementações do padrão Model
│   │   ├── controllers/ # Implementações do padrão Controller
│   │   ├── systems/     # Sistemas do jogo (combate, física, etc.)
│   │   └── network/     # Código de comunicação com os clientes
│   └── index.js         # Ponto de entrada do servidor
│
├── shared/              # Código compartilhado entre cliente e servidor
│   ├── constants/       # Constantes do jogo
│   └── utils/           # Funções utilitárias comuns
│
├── package.json         # Definição de dependências e scripts
└── README.md            # Documentação do projeto
```

### Requisitos do Sistema
- Node.js v16.0 ou superior
- Navegador moderno com suporte a WebGL (Chrome, Firefox, Edge, Safari)
- npm v7.0 ou superior

### Scripts de Desenvolvimento
- `npm run dev:server`: Inicia o servidor em modo de desenvolvimento
- `npm run dev:client`: Inicia um servidor de desenvolvimento para o cliente
- `npm run build`: Compila o cliente para produção
- `npm run start`: Inicia o servidor em modo de produção

## Restrições Técnicas

### Servidor
- Deve utilizar ESM (ECMAScript Modules) devido à dependência do geckos.io
- O servidor é autoritativo e deve validar todas as ações do cliente
- Loop de jogo deve rodar em tick rate consistente (ex: 20 ticks por segundo)

### Cliente
- Deve funcionar em navegadores que suportam WebGL
- Não deve confiar em código do cliente para decisões relacionadas à lógica do jogo
- Deve implementar interpolação para movimento suave entre atualizações do servidor

### Rede
- Comunicação via WebRTC (geckos.io) com fallback para WebSockets
- **Sistema de otimização de rede** usando delta updates, compressão e envio seletivo
- **Compressão de dados** usando zlib no servidor e pako no cliente
- Limite de 256KB por mensagem WebSocket (maxMessageSize)
- Monitoramento de uso de banda através de logs detalhados

## Dependências

### Dependências do Servidor
```json
{
  "dependencies": {
    "@geckos.io/server": "^2.3.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "eslint": "^8.38.0"
  }
}
```

### Dependências do Cliente
```json
{
  "dependencies": {
    "@geckos.io/client": "^2.3.0",
    "three": "^0.150.1",
    "pako": "^2.1.0"
  },
  "devDependencies": {
    "vite": "^4.2.1",
    "eslint": "^8.38.0"
  }
}
```

## Decisões e Compromissos Técnicos

- **Visual e UX**: O projeto prioriza clareza visual, feedback imediato e controle total do visual via painel lil-gui. HUD do alvo sempre sincronizada, nome pt-br, seleção robusta e pós-processamento calibrado.
- **Vanilla JS vs Framework**: Optamos por JavaScript puro para o cliente para minimizar overhead e manter o controle preciso sobre o ciclo de renderização, essencial para jogos.
- **WebRTC vs WebSockets**: Escolhemos geckos.io (WebRTC) pela menor latência e comunicação P2P, com fallback para WebSockets.
- **Three.js vs Engine de Jogos**: Three.js foi escolhido por ser leve e focado na renderização 3D, sem as complexidades de uma engine completa que não seria totalmente aproveitada em um jogo isométrico.
- **Servidor Node.js**: Permite compartilhar código entre cliente e servidor (ambos em JavaScript) e oferece boa performance para um servidor de jogos do porte planejado.
- **Otimização de Rede**: Sistema completo que combina delta updates (só envia mudanças), compressão (zlib/pako) e envio seletivo para garantir baixa latência e uso mínimo de banda.

## Sistema de Otimização de Rede

Implementamos um sistema avançado de otimização de rede que resolve problemas de latência e uso excessivo de largura de banda:

### 1. **Delta Updates**
- O servidor mantém um snapshot do último estado enviado para cada jogador
- A cada tick, compara o estado atual com o último enviado
- Apenas entidades que mudaram são incluídas no update
- Redução de até 80% no tráfego de rede

### 2. **Envio Seletivo**
- Ao conectar, enviamos apenas entidades próximas ao jogador (raio de 30-40 unidades)
- Evita o erro `maxMessageSize exceeded` (limite de 256KB por mensagem)
- Reduziu o payload inicial de ~200KB para ~7KB (redução de 97%)

### 3. **Compressão de Dados**
- Função global `compressAndSend` no servidor que:
  - Compacta automaticamente mensagens >500 bytes com zlib
  - Envia mensagens menores sem compressão (otimização de CPU)
  - Monitora e loga taxas de compressão
- Cliente usa pako para descompactar payloads com flag `compressed: true`
- Redução adicional de 50-80% no tamanho das mensagens grandes

### 4. **Monitoramento Integrado**
- Logs detalhados sobre tamanho original e compactado dos pacotes
- Rastreamento de quantidade de entidades enviadas por update
- Análise da economia de banda em tempo real

## Tecnologias
- **Three.js** para renderização 3D.
- **Node.js** e **geckos.io** para servidor e rede.
- **GLTFLoader** para modelos 3D.
- Estrutura modular: `/client`, `/server`, `/shared`.
- **Sistema de chat em tempo real** implementado via eventos de rede, integrado ao frontend Three.js.
- **Sistema de otimização de rede** com delta updates, compressão zlib/pako e envio seletivo.

## Setup
- Renderizador configurado para alta qualidade (antialias, sRGB, ACESFilmicToneMapping).
- Pixel ratio limitado para performance.
- Materiais otimizados para balancear visual e desempenho.
- Sistema de iluminação customizado via código.
- **Input de chat customizado**: atalhos de teclado, foco automático, integração com HUD.
- **Sistema de descompressão** integrado a todos os eventos importantes do cliente.

## Restrições
- Modelos devem ser otimizados (baixo polycount, sem texturas pesadas).
- Performance priorizada em dispositivos médios.
- Atualizações de sombra e culling não são por frame, mas em intervalos.
- Limite de 256KB por mensagem WebSocket (contornado por envio seletivo e compressão).

- HUD central utiliza SVG com múltiplos polígonos para borda de XP (fundo cinza translúcido + stroke dourado dinâmico)
- Progresso de XP controlado via stroke-dasharray e stroke-dashoffset
- Sincronização de level, xp, nextLevelXp e name garantida em todos os eventos relevantes do servidor
- Cliente atualiza player.userData e HUD imediatamente ao receber eventos
- Padrão: fallback visual sempre presente no HUD para evitar valores undefined ou sensação de vazio
- Decisão: clareza visual e feedback imediato são prioridades técnicas para UX
- UI sempre usa o campo NAME da configuração do monstro para exibição, nunca o identificador/código. Padrão de localização e clareza implementado. Exemplo: BLACK_MIST_ZOMBIE exibe 'Zumbi da Névoa Negra'.

## Configuração Avançada: Multi-Entry Vite com Middleware
- Para servir diferentes páginas/SPA em rotas distintas (ex: landing page em `/` e jogo em `/play`), o projeto utiliza Vite com root na raiz.
- Middleware customizado intercepta `/play` e serve `client/index.html` (SPA do jogo), enquanto `/` serve o `index.html` da raiz normalmente.
- Alias de `/src/*` para `/client/src/*` garante que assets JS/CSS funcionem sem alterar caminhos no HTML.
- Essa abordagem evita duplicação de arquivos, mantém o build limpo e permite roteamento flexível.
- Motivo: Permitir múltiplos pontos de entrada reais, sem gambiarras, mantendo a arquitetura limpa e fácil de manter. 