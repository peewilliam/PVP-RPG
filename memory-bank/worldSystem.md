# Sistema de Geração e Gerenciamento de Mundo (World System)

## Visão Geral
O objetivo deste sistema é centralizar toda a lógica de criação, configuração, spawn e respawn de entidades do mundo (objetos, monstros, jogadores) em um único módulo do servidor. O sistema será facilmente expansível e preparado para integração futura com um editor visual de mapas.

## Objetivos
- Gerar o mundo do jogo a partir de uma configuração (JS/JSON), incluindo tamanho, biomas, spots de monstros, objetos e pontos de spawn de jogadores.
- Gerenciar o respawn de monstros e jogadores de forma autoritativa e otimizada.
- Garantir que não haja sobreposição de entidades (colisão) na geração e respawn.
- Permitir fácil importação/exportação de mapas customizados criados por um editor visual.
- Facilitar a serialização do estado do mundo para sincronização com o cliente.

## Componentes do Sistema
- **WorldManager.js**: Módulo principal responsável por toda a lógica do mundo.
- **mapConfig.js**: Arquivo de configuração do mapa (pode ser gerado manualmente ou por editor).
- **Estruturas de Dados**: Definição clara de biomas, objetos, spots de monstros, pontos de spawn, etc.

## Fluxo de Funcionamento
1. **Inicialização**: O servidor carrega o `mapConfig.js` e instancia o `WorldManager`.
2. **Geração do Mundo**: O `WorldManager` cria todos os objetos, define biomas, posiciona spots de monstros e pontos de spawn de jogadores.
3. **Spawn Inicial**: Monstros e jogadores são posicionados conforme as regras do mapa.
4. **Loop de Jogo**: A cada tick, o `WorldManager` gerencia respawns, verifica colisões e atualiza o estado do mundo.
5. **Serialização**: O estado do mundo pode ser exportado para JSON para integração com o cliente ou editor de mapas.
6. **Integração Futura**: O sistema aceitará mapas criados por um editor visual, bastando importar o JSON gerado.

## Plano de Ação
1. **Definir estrutura de dados do mapa** (biomas, objetos, spots, spawns).
2. **Criar arquivo `mapConfig.js`** com exemplo de configuração.
3. **Implementar esqueleto do `WorldManager.js`** com métodos para inicialização, spawn, respawn e serialização.
4. **Integrar verificação de colisão para evitar sobreposição de entidades.**
5. **Integrar o `WorldManager` ao loop principal do servidor.**
6. **Documentar o formato do mapa e as funções principais.**
7. **Planejar pontos de integração com editor de mapas (import/export JSON).**
8. **Testar geração procedural e carregamento de mapas customizados.**

## Integração com Editor de Mapas (Futuro)
- O sistema aceitará arquivos JSON exportados por um editor visual.
- O formato do mapa será documentado e versionado para garantir compatibilidade.
- O `WorldManager` terá métodos para importar/exportar mapas facilmente.

## Considerações
- O sistema deve ser modular, testável e fácil de expandir.
- Toda lógica de spawn/respawn deve ser centralizada para facilitar manutenção.
- O formato do mapa deve ser validado antes de ser carregado.

## Sistema de SQMs/Tiles Coloridos para Customização de Chão

### Visão Geral
Para permitir a criação de estradas, áreas especiais, zonas de evento, marcações de boss e customização visual do chão, o sistema de mundo suportará a definição de "SQMs" (tiles/quadrados) com cores ou propriedades específicas. Isso possibilita pintar o mapa com diferentes padrões, facilitando a criação de caminhos, praças, áreas de boss, etc.

### Estrutura de Configuração
A configuração dos tiles pode ser feita de duas formas:

#### a) Por Área Retangular (eficiente para grandes regiões)
```js
// Exemplo de configuração
 groundTiles: [
   // Estrada horizontal
   { from: { x: -10, z: -95 }, to: { x: 10, z: 95 }, color: "#bfa76a", type: "road" },
   // Praça central
   { from: { x: -5, z: -5 }, to: { x: 5, z: 5 }, color: "#e2c290", type: "plaza" },
   // Área de boss
   { from: { x: 40, z: 40 }, to: { x: 50, z: 50 }, color: "#ff0000", type: "boss_area" },
 ]
```

#### b) Por Lista de Tiles Individuais (para detalhes)
```js
 groundTiles: [
   { x: 0, z: 0, color: "#bfa76a", type: "road" },
   { x: 1, z: 0, color: "#bfa76a", type: "road" },
   // ...
 ]
```

#### c) Misturando Áreas e Tiles
- Use áreas para grandes regiões (estradas, campos, lagos).
- Use tiles individuais para detalhes (placas, marcações, bordas).

### Funcionamento
- O servidor mantém a configuração dos tiles/áreas coloridas e pode enviar para o cliente apenas os tiles próximos ao jogador (ou toda a configuração, se não for pesada).
- O cliente renderiza o chão usando as cores/texturas definidas para cada SQM/tile. Se não houver cor definida, usa a cor padrão do bioma.

### Exemplo de Configuração Completa
```js
export const MAP_CONFIG = {
  size: { width: 200, height: 200 },
  groundDefault: "#e2c290",
  groundTiles: [
    { from: { x: -10, z: -95 }, to: { x: 10, z: 95 }, color: "#bfa76a", type: "road" },
    { from: { x: 40, z: 40 }, to: { x: 50, z: 50 }, color: "#ff0000", type: "boss_area" },
    { x: 0, z: 0, color: "#bfa76a", type: "road" },
    // ...
  ],
  // ... resto da configuração (áreas, objetos, spots, etc)
};
```

### Integração com Editor de Mapas
- O editor de mapas poderá permitir "pintar" áreas ou tiles individuais, exportando para esse formato.
- O sistema pode ser expandido para suportar texturas, animações, efeitos visuais, etc.

### Renderização no Cliente
- O cliente, ao renderizar o chão, verifica se existe uma cor/tile especial para cada SQM visível.
- Se existir, usa a cor/textura definida; se não, usa a cor padrão do bioma.
- Permite criar estradas, praças, áreas de evento, etc., de forma visualmente clara e customizável.

### Benefícios
- Flexível: permite criar estradas, áreas especiais, marcações, etc.
- Escalável: fácil de expandir para grandes áreas ou detalhes finos.
- Integrável: pronto para uso em editor de mapas e para renderização eficiente no cliente.

## Aprendizados e Solução de Bugs

### Problema Identificado
Durante testes, foi observado que objetos do mundo (ex: árvores, rochas) trocavam de forma ou tipo ao se aproximar/afastar do jogador, causando inconsistências visuais e confusão.

### Análise
- O cliente recriava objetos do mundo se recebesse o mesmo ID com tipos diferentes em updates distintos.
- IDs dos objetos do mundo eram gerados como strings UUID (uuidv4), não como números.
- O protocolo binário de sincronização espera IDs numéricos (2 bytes), e o mapeamento de tipos depende de IDs estáveis.
- Se o servidor removesse e recriasse objetos com o mesmo ID mas tipo diferente, o cliente via "troca de forma".

### Solução Aplicada
- A geração de IDs dos objetos do mundo foi centralizada no EntityManager, usando um contador incremental global (nextWorldObjectId).
- IDs agora são sempre numéricos, únicos e persistentes enquanto o objeto existir.
- O método createWorldObject do WorldManager foi adaptado para delegar a criação ao EntityManager, garantindo a consistência dos IDs.
- Removido o uso de uuidv4 para worldObjects.
- Garantido que o campo 'type' nunca muda para um mesmo ID.

### Recomendações Futuras
- IDs de objetos do mundo devem ser sempre numéricos e nunca reutilizados para tipos diferentes.
- O mapeamento de tipos (WORLD_OBJECT_TYPE_INDEX/BY_INDEX) deve ser mantido sincronizado entre cliente e servidor.
- Sempre serialize o campo 'type' corretamente.
- Em caso de persistência entre sessões, garantir que o contador global de IDs não seja reiniciado.

---

**Este documento deve ser atualizado conforme o progresso do desenvolvimento do sistema de mundo.** 