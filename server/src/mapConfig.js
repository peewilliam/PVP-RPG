// server/src/mapConfig.js
// Configuração do mundo MMORPG baseada no mapa fornecido

export const MAP_CONFIG = {
  name: "Terras de Adria",
  size: { width: 200, height: 200 },
  groundDefault: "#e2c290",

  // Áreas/Zonas do mapa (os valores vão de -100 a 100 em X e Z)
  areas: [
    // Vila dos Lenhadores (NW) - área verde com floresta
    {
      id: "VILA_LENHADORES",
      name: "Vila dos Lenhadores",
      bounds: { xMin: -100, xMax: -50, zMin: 50, zMax: 100 },
      groundColor: "#b6e2a1", // Verde claro para área de floresta
      ambientLight: { color: "#b6e2a1", intensity: 0.5 },
      events: [],
    },
    // Vila Mineira (NE) - área cinza/rochosa
    {
      id: "VILA_MINEIRA",
      name: "Vila Mineira",
      bounds: { xMin: 50, xMax: 100, zMin: 50, zMax: 100 },
      groundColor: "#bfc9c9", // Cinza para área rochosa
      ambientLight: { color: "#e0e0e0", intensity: 0.6 },
      events: [],
    },
    // Vila Abandonada (SW) - área verde escuro/pântano
    {
      id: "VILA_ABANDONADA",
      name: "Vila Abandonada",
      bounds: { xMin: -100, xMax: -50, zMin: -100, zMax: -50 },
      groundColor: "#7ca97c", // Verde escuro para área de pântano
      ambientLight: { color: "#7ca97c", intensity: 0.4 },
      events: [],
    },
    // Oasis do Sul (SE) - área amarela/deserto
    {
      id: "OASIS_SUL",
      name: "Oasis do Sul",
      bounds: { xMin: 50, xMax: 100, zMin: -100, zMax: -50 },
      groundColor: "#e9d8a6", // Amarelo claro para área de deserto
      ambientLight: { color: "#fffbe6", intensity: 0.8 },
      events: [],
    },
    // Centro do mapa (área de interseção)
    {
      id: "CENTRO",
      name: "Cruzamento dos Caminhos",
      bounds: { xMin: -25, xMax: 25, zMin: -25, zMax: 25 },
      groundColor: "#e2c290", // Cor neutra para o centro
      ambientLight: { color: "#fffbe6", intensity: 0.7 },
      events: [],
    },
  ],

  // Objetos do mundo
  objects: [
    // === Vila dos Lenhadores (NW) ===
    // Removendo os objetos antigos e substituindo por um layout mais natural

    // Caminho central da vila
    { type: "FENCE", position: { x: -80, y: 0, z: 75 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 10, y: 0.8, z: 0.3 } },

    // Casa principal do chefe da vila (maior, centralizada)
    { type: "HOUSE", position: { x: -80, y: 0, z: 83 }, rotation: { x: 0, y: 0.3, z: 0 }, scale: { x: 3, y: 3.2, z: 3 } },

    // Casas dos moradores em posições orgânicas (rotações variadas para criar sensação natural)
    { type: "HOUSE", position: { x: -87, y: 0, z: 77 }, rotation: { x: 0, y: 0.7, z: 0 }, scale: { x: 2.2, y: 2, z: 2.2 } },
    { type: "HOUSE", position: { x: -73, y: 0, z: 77 }, rotation: { x: 0, y: -0.5, z: 0 }, scale: { x: 2.2, y: 2.1, z: 2.2 } },
    { type: "HOUSE", position: { x: -90, y: 0, z: 87 }, rotation: { x: 0, y: 1.2, z: 0 }, scale: { x: 2, y: 1.8, z: 2 } },
    { type: "HOUSE", position: { x: -70, y: 0, z: 87 }, rotation: { x: 0, y: -0.8, z: 0 }, scale: { x: 2, y: 1.9, z: 2 } },

    // Galpão de madeiras (típico de vila lenhadora)
    { type: "HOUSE", position: { x: -77, y: 0, z: 93 }, rotation: { x: 0, y: 0.2, z: 0 }, scale: { x: 2.5, y: 1.6, z: 3.5 } },

    // Paliçada ao redor da vila (mais natural, seguindo terreno)
    // Lado Norte (irregular com troncos de diferentes alturas)
    { type: "FENCE", position: { x: -80, y: 0, z: 97 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 35, y: 1.2, z: 0.4 } },
    // Lado Leste (partes quebradas em dois segmentos)
    { type: "FENCE", position: { x: -63, y: 0, z: 87 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 15, y: 1.1, z: 0.4 } },
    { type: "FENCE", position: { x: -63, y: 0, z: 78 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 12, y: 1.1, z: 0.4 } },
    // Lado Sul (com portão)
    { type: "FENCE", position: { x: -70, y: 0, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 15, y: 1.1, z: 0.4 } },
    { type: "FENCE", position: { x: -90, y: 0, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 15, y: 1.1, z: 0.4 } },
    // Lado Oeste (com pequenas variações na altura)
    { type: "FENCE", position: { x: -97, y: 0, z: 87 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 20, y: 1.2, z: 0.4 } },
    { type: "FENCE", position: { x: -97, y: 0, z: 77 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 10, y: 1.1, z: 0.4 } },

    // Portão de entrada da vila (mais elaborado)
    { type: "FENCE", position: { x: -83, y: 0, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1.5, z: 0.4 } },
    { type: "FENCE", position: { x: -77, y: 0, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1.5, z: 0.4 } },
    { type: "FENCE", position: { x: -80, y: 1.2, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 6, y: 0.5, z: 0.2 } },

    // NPCs com funções específicas
    // Chefe lenhador perto da casa principal
    { type: "NPC_PLACEHOLDER", position: { x: -82, y: 0, z: 79 }, rotation: { x: 0, y: -0.3, z: 0 }, scale: { x: 0.8, y: 2, z: 0.8 } },
    // Lenhador trabalhando
    { type: "NPC_PLACEHOLDER", position: { x: -75, y: 0, z: 91 }, rotation: { x: 0, y: 0.8, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Vendedor de suprimentos
    { type: "NPC_PLACEHOLDER", position: { x: -87, y: 0, z: 74 }, rotation: { x: 0, y: -0.5, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Guarda do portão
    { type: "NPC_PLACEHOLDER", position: { x: -80, y: 0, z: 69 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 1.9, z: 0.8 } },

    // Detalhes ambientais que fazem sentido em uma vila de lenhadores
    // Troncos empilhados perto do galpão
    { type: "TRUNK", position: { x: -73, y: 0, z: 93 }, rotation: { x: 0, y: 0.3, z: 0 }, scale: { x: 1.2, y: 0.8, z: 0.8 } },
    { type: "TRUNK", position: { x: -72, y: 0, z: 91 }, rotation: { x: 0, y: -0.5, z: 0 }, scale: { x: 1.3, y: 0.8, z: 0.8 } },
    { type: "TRUNK", position: { x: -72, y: 0.8, z: 92 }, rotation: { x: 0, y: 0.8, z: 0 }, scale: { x: 1.2, y: 0.7, z: 0.7 } },

    // Toco de árvore usado como mesa perto do centro
    { type: "TRUNK", position: { x: -80, y: 0, z: 78 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.6, y: 0.5, z: 1.6 } },

    // Flores e jardim perto das casas de moradores
    { type: "FLOWER", position: { x: -85, y: 0, z: 75 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },
    { type: "FLOWER", position: { x: -84, y: 0, z: 76 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.4, y: 0.4, z: 0.4 } },
    { type: "FLOWER", position: { x: -86, y: 0, z: 74 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 0.6, z: 0.6 } },

    // Pequenos arbustos decorativos
    { type: "BUSH", position: { x: -87, y: 0, z: 82 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 0.8, z: 0.7 } },
    { type: "BUSH", position: { x: -73, y: 0, z: 82 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 0.7, z: 0.7 } },
    { type: "BUSH", position: { x: -81, y: 0, z: 90 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 0.9, z: 0.8 } },
    { type: "BUSH", position: { x: -79, y: 0, z: 90 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 0.7, z: 0.6 } },

    // Pequeno poço de água 
    { type: "WATER_PUDDLE", position: { x: -75, y: 0, z: 83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 2, y: 0.1, z: 2 } },

    // === Vila Mineira (NE) ===
    // Layout mais natural para a vila mineira com estruturas de pedra

    // Praça central com pavimentação de pedra (representado pelo posicionamento)
    // Casa principal/prefeitura no centro norte (orientada para a praça central)
    { type: "HOUSE", position: { x: 80, y: 0, z: 88 }, rotation: { x: 0, y: 3.14, z: 0 }, scale: { x: 3.5, y: 3, z: 3.5 } },

    // Casas menores ao redor, seguindo um padrão circular irregular (com orientação para o centro)
    { type: "HOUSE", position: { x: 73, y: 0, z: 84 }, rotation: { x: 0, y: 2.8, z: 0 }, scale: { x: 2.3, y: 2.1, z: 2.3 } },
    { type: "HOUSE", position: { x: 87, y: 0, z: 84 }, rotation: { x: 0, y: -2.8, z: 0 }, scale: { x: 2.3, y: 2.1, z: 2.3 } },
    { type: "HOUSE", position: { x: 75, y: 0, z: 76 }, rotation: { x: 0, y: 2.3, z: 0 }, scale: { x: 2.1, y: 2, z: 2.1 } },
    { type: "HOUSE", position: { x: 85, y: 0, z: 76 }, rotation: { x: 0, y: -2.3, z: 0 }, scale: { x: 2.2, y: 2, z: 2.2 } },

    // Forja do ferreiro (estrutura mais robusta, orientada para a praça)
    { type: "HOUSE", position: { x: 92, y: 0, z: 79 }, rotation: { x: 0, y: 4.7, z: 0 }, scale: { x: 2.6, y: 2.2, z: 2.4 } },

    // Muros de pedra robustos seguindo a topografia (com pedras maiores em baixo e menores em cima)
    // Muro Norte
    { type: "WALL", position: { x: 80, y: 0, z: 96 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 40, y: 2.5, z: 1.1 } },
    // Muro Leste
    { type: "WALL", position: { x: 96, y: 0, z: 80 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 35, y: 2.5, z: 1.1 } },
    // Muro Sul (com abertura central para portão)
    { type: "WALL", position: { x: 70, y: 0, z: 65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 20, y: 2.5, z: 1.1 } },
    { type: "WALL", position: { x: 90, y: 0, z: 65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 20, y: 2.5, z: 1.1 } },
    // Muro Oeste
    { type: "WALL", position: { x: 65, y: 0, z: 80 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 35, y: 2.5, z: 1.1 } },

    // Portão de entrada da vila (arco de pedra)
    { type: "WALL", position: { x: 80, y: 2.5, z: 65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 10, y: 1, z: 1 } },
    { type: "WALL", position: { x: 77, y: 0, z: 65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.5, y: 3, z: 1 } },
    { type: "WALL", position: { x: 83, y: 0, z: 65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.5, y: 3, z: 1 } },

    // NPCs com funções claras relacionadas à mineração
    // Líder da vila/prefeito
    { type: "NPC_PLACEHOLDER", position: { x: 80, y: 0, z: 85 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 2, z: 0.8 } },
    // Ferreiro trabalhando
    { type: "NPC_PLACEHOLDER", position: { x: 90, y: 0, z: 79 }, rotation: { x: 0, y: 1.5, z: 0 }, scale: { x: 0.7, y: 1.9, z: 0.7 } },
    // Mineiro descansando
    { type: "NPC_PLACEHOLDER", position: { x: 76, y: 0, z: 79 }, rotation: { x: 0, y: 0.5, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Guarda do portão
    { type: "NPC_PLACEHOLDER", position: { x: 80, y: 0, z: 67 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 1.9, z: 0.8 } },

    // Elementos ambientais relacionados à mineração
    // Pedras decorativas arranjadas em círculo na praça central
    { type: "ROCK", position: { x: 80, y: 0, z: 80 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.5, y: 1.2, z: 1.5 } },
    { type: "ROCK", position: { x: 83, y: 0, z: 81 }, rotation: { x: 0, y: 0.7, z: 0 }, scale: { x: 0.9, y: 0.7, z: 0.9 } },
    { type: "ROCK", position: { x: 77, y: 0, z: 81 }, rotation: { x: 0, y: -0.4, z: 0 }, scale: { x: 0.8, y: 0.6, z: 0.8 } },
    { type: "ROCK", position: { x: 81, y: 0, z: 77 }, rotation: { x: 0, y: 0.3, z: 0 }, scale: { x: 0.7, y: 0.5, z: 0.7 } },
    { type: "ROCK", position: { x: 79, y: 0, z: 77 }, rotation: { x: 0, y: -0.8, z: 0 }, scale: { x: 0.6, y: 0.4, z: 0.6 } },

    // Pilhas de minério perto da forja
    { type: "ROCK", position: { x: 88, y: 0, z: 81 }, rotation: { x: 0, y: 0.3, z: 0 }, scale: { x: 0.8, y: 0.6, z: 0.8 } },
    { type: "ROCK", position: { x: 87, y: 0, z: 79 }, rotation: { x: 0, y: 0.5, z: 0 }, scale: { x: 0.7, y: 0.5, z: 0.7 } },
    { type: "ROCK", position: { x: 89, y: 0, z: 78 }, rotation: { x: 0, y: 0.2, z: 0 }, scale: { x: 0.9, y: 0.7, z: 0.9 } },

    // Pequena fonte d'água para uso comunitário
    { type: "WATER_PUDDLE", position: { x: 80, y: 0, z: 82 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 3, y: 0.1, z: 3 } },

    // === Vila Abandonada (SW) ===
    // Praça central com ruínas principais (ligeiramente desalinhadas para parecer abandonadas)
    { type: "RUIN", position: { x: -80, y: 0, z: -80 }, rotation: { x: 0, y: 0.3, z: 0.05 }, scale: { x: 3.5, y: 2.5, z: 3.5 } },

    // Casas em ruínas arranjadas em padrão orgânico (com rotações irregulares)
    { type: "RUIN", position: { x: -87, y: 0, z: -75 }, rotation: { x: 0, y: 0.8, z: -0.05 }, scale: { x: 2.2, y: 1.5, z: 2.2 } },
    { type: "RUIN", position: { x: -73, y: 0, z: -75 }, rotation: { x: 0, y: -0.5, z: 0.03 }, scale: { x: 2, y: 1.3, z: 2 } },
    { type: "RUIN", position: { x: -88, y: 0, z: -85 }, rotation: { x: 0, y: 0.2, z: -0.02 }, scale: { x: 2.3, y: 1.7, z: 2.3 } },
    { type: "RUIN", position: { x: -72, y: 0, z: -85 }, rotation: { x: 0, y: -0.4, z: 0.04 }, scale: { x: 2.1, y: 1.4, z: 2.1 } },

    // Uma casa parcialmente intacta perto da entrada (talvez usada por algum morador solitário)
    { type: "HOUSE", position: { x: -80, y: 0, z: -70 }, rotation: { x: 0, y: 0.2, z: 0 }, scale: { x: 2.5, y: 2, z: 2.5 } },

    // Cercas quebradas e irregulares ao redor da vila (aspecto abandonado)
    // Norte - parcialmente caída
    { type: "FENCE", position: { x: -85, y: 0, z: -70 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 12, y: 0.9, z: 0.3 } },
    { type: "FENCE", position: { x: -73, y: 0, z: -70 }, rotation: { x: 0, y: 0, z: 0.1 }, scale: { x: 10, y: 0.8, z: 0.3 } },
    // Leste - com grandes seções caídas
    { type: "FENCE", position: { x: -70, y: 0, z: -75 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 8, y: 0.9, z: 0.3 } },
    { type: "FENCE", position: { x: -70, y: 0, z: -90 }, rotation: { x: 0, y: 1.57, z: 0.05 }, scale: { x: 7, y: 0.8, z: 0.3 } },
    // Sul - quase completamente destruída
    { type: "FENCE", position: { x: -77, y: 0, z: -95 }, rotation: { x: 0, y: 0, z: -0.1 }, scale: { x: 8, y: 0.7, z: 0.3 } },
    { type: "FENCE", position: { x: -90, y: 0, z: -95 }, rotation: { x: 0, y: 0, z: 0.1 }, scale: { x: 10, y: 0.7, z: 0.3 } },
    // Oeste - com pedaços caídos no chão
    { type: "FENCE", position: { x: -95, y: 0, z: -77 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 12, y: 0.9, z: 0.3 } },
    { type: "FENCE", position: { x: -95, y: 0, z: -88 }, rotation: { x: 0, y: 1.57, z: -0.05 }, scale: { x: 9, y: 0.8, z: 0.3 } },

    // Pedaços de cerca caídos no chão (para aumentar sensação de abandono)
    { type: "FENCE", position: { x: -70, y: 0, z: -83 }, rotation: { x: 0, y: 0.5, z: 1.57 }, scale: { x: 5, y: 0.9, z: 0.3 } },
    { type: "FENCE", position: { x: -83, y: 0, z: -95 }, rotation: { x: 0, y: 0.3, z: 1.47 }, scale: { x: 3, y: 0.9, z: 0.3 } },

    // NPCs fantasmagóricos (poucos, para dar sensação de isolamento)
    // Figura sombria na entrada da casa parcialmente intacta
    { type: "NPC_PLACEHOLDER", position: { x: -80, y: 0, z: -73 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Espectro vagando entre as ruínas
    { type: "NPC_PLACEHOLDER", position: { x: -84, y: 0, z: -81 }, rotation: { x: 0, y: 0.5, z: 0 }, scale: { x: 0.7, y: 1.9, z: 0.7 } },

    // Elementos ambientais aumentando a atmosfera de vila abandonada
    // Árvores mortas em lugares estratégicos
    { type: "DEAD_TREE", position: { x: -75, y: 0, z: -80 }, rotation: { x: 0, y: 0.3, z: 0.05 }, scale: { x: 1.5, y: 2.5, z: 1.5 } },
    { type: "DEAD_TREE", position: { x: -85, y: 0, z: -87 }, rotation: { x: 0, y: -0.4, z: 0.03 }, scale: { x: 1.3, y: 2.2, z: 1.3 } },
    { type: "DEAD_TREE", position: { x: -90, y: 0, z: -78 }, rotation: { x: 0, y: 0.8, z: -0.05 }, scale: { x: 1.2, y: 2, z: 1.2 } },

    // Ossos/caveiras espalhados (narrativa visual de tragédia)
    { type: "BONE", position: { x: -78, y: 0, z: -77 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 0.8, z: 0.8 } },
    { type: "BONE", position: { x: -83, y: 0, z: -74 }, rotation: { x: 0, y: 0.4, z: 0 }, scale: { x: 0.7, y: 0.7, z: 0.7 } },
    { type: "BONE", position: { x: -76, y: 0, z: -86 }, rotation: { x: 0, y: -0.6, z: 0 }, scale: { x: 0.9, y: 0.9, z: 0.9 } },
    { type: "BONE", position: { x: -89, y: 0, z: -82 }, rotation: { x: 0, y: 0.8, z: 0 }, scale: { x: 0.8, y: 0.8, z: 0.8 } },

    // Poças de água esverdeada distribuídas (implicando água estagnada)
    { type: "WATER_PUDDLE", position: { x: -81, y: 0, z: -83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 4, y: 0.1, z: 4 } },
    { type: "WATER_PUDDLE", position: { x: -74, y: 0, z: -90 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 2.5, y: 0.1, z: 2.5 } },
    { type: "WATER_PUDDLE", position: { x: -87, y: 0, z: -92 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 3.5, y: 0.1, z: 3.5 } },

    // Névoa baixa (representada por água muito plana e grande)
    { type: "WATER_PUDDLE", position: { x: -80, y: 0, z: -80 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 25, y: 0.01, z: 25 } },

    // === Oasis do Sul (SE) ===
    // Layout natural e orgânico para o oásis no deserto

    // Grande lago central (característica principal do oásis)
    { type: "WATER_PUDDLE", position: { x: 80, y: 0, z: -80 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 12, y: 0.1, z: 12 } },

    // Casa principal no estilo de palácio/mesquita (influência desértica, orientada para o lago)
    { type: "HOUSE", position: { x: 75, y: 0, z: -75 }, rotation: { x: 0, y: 0.8, z: 0 }, scale: { x: 3.5, y: 3, z: 3.5 } },

    // Casas menores espalhadas em padrão semicircular ao redor do oásis (orientadas para o centro)
    { type: "HOUSE", position: { x: 85, y: 0, z: -75 }, rotation: { x: 0, y: -0.6, z: 0 }, scale: { x: 2.2, y: 2, z: 2.2 } },
    { type: "HOUSE", position: { x: 88, y: 0, z: -82 }, rotation: { x: 0, y: -1.2, z: 0 }, scale: { x: 2, y: 1.8, z: 2 } },
    { type: "HOUSE", position: { x: 85, y: 0, z: -88 }, rotation: { x: 0, y: -1.8, z: 0 }, scale: { x: 2.1, y: 1.9, z: 2.1 } },
    { type: "HOUSE", position: { x: 75, y: 0, z: -88 }, rotation: { x: 0, y: 2.5, z: 0 }, scale: { x: 2.3, y: 2.1, z: 2.3 } },

    // Cerca no estilo de paliçada baixa (apenas para delimitar, não para proteger)
    // Estilo circular acompanhando o formato do oásis
    // Norte
    { type: "FENCE", position: { x: 80, y: 0, z: -70 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 25, y: 0.8, z: 0.2 } },
    // Leste
    { type: "FENCE", position: { x: 92.5, y: 0, z: -80 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 20, y: 0.8, z: 0.2 } },
    // Sul
    { type: "FENCE", position: { x: 80, y: 0, z: -90 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 25, y: 0.8, z: 0.2 } },
    // Oeste (com abertura para entrada)
    { type: "FENCE", position: { x: 67.5, y: 0, z: -75 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 10, y: 0.8, z: 0.2 } },
    { type: "FENCE", position: { x: 67.5, y: 0, z: -85 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 10, y: 0.8, z: 0.2 } },

    // Palmeiras e cactos estrategicamente posicionados (vegetação do oásis)
    // Palmeiras/árvores ao redor da água (representadas por cactos grandes)
    { type: "CACTUS", position: { x: 75, y: 0, z: -80 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 3, z: 1 } },
    { type: "CACTUS", position: { x: 80, y: 0, z: -75 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.2, y: 3.5, z: 1.2 } },
    { type: "CACTUS", position: { x: 85, y: 0, z: -80 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.1, y: 3.2, z: 1.1 } },
    { type: "CACTUS", position: { x: 80, y: 0, z: -85 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.9, y: 2.8, z: 0.9 } },

    // Cactos menores em grupos ao redor da vila (típicos do deserto)
    { type: "CACTUS", position: { x: 70, y: 0, z: -73 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 1.5, z: 0.8 } },
    { type: "CACTUS", position: { x: 72, y: 0, z: -71 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 1.2, z: 0.6 } },
    { type: "CACTUS", position: { x: 88, y: 0, z: -72 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 1.4, z: 0.7 } },
    { type: "CACTUS", position: { x: 90, y: 0, z: -70 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.5, y: 1, z: 0.5 } },

    // NPCs em posições naturais para um oásis
    // Líder/sábio perto da casa principal
    { type: "NPC_PLACEHOLDER", position: { x: 77, y: 0, z: -73 }, rotation: { x: 0, y: 0.3, z: 0 }, scale: { x: 0.8, y: 2, z: 0.8 } },
    // Comerciante de água/suprimentos
    { type: "NPC_PLACEHOLDER", position: { x: 80, y: 0, z: -77 }, rotation: { x: 0, y: -0.3, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Morador descansando à sombra
    { type: "NPC_PLACEHOLDER", position: { x: 82, y: 0, z: -82 }, rotation: { x: 0, y: 0.8, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Viajante na entrada
    { type: "NPC_PLACEHOLDER", position: { x: 67, y: 0, z: -80 }, rotation: { x: 0, y: 1.57, z: 0 }, scale: { x: 0.7, y: 1.8, z: 0.7 } },

    // Decorações e elementos ambientais
    // Flores e vegetação apenas ao redor do oásis (contraste com o deserto)
    { type: "FLOWER", position: { x: 78, y: 0, z: -78 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },
    { type: "FLOWER", position: { x: 82, y: 0, z: -77 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 0.6, z: 0.6 } },
    { type: "FLOWER", position: { x: 79, y: 0, z: -83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.4, y: 0.4, z: 0.4 } },
    { type: "FLOWER", position: { x: 83, y: 0, z: -81 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },

    // Pequenos arbustos
    { type: "BUSH", position: { x: 76, y: 0, z: -77 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 0.7, z: 0.7 } },
    { type: "BUSH", position: { x: 81, y: 0, z: -76 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 0.6, z: 0.6 } },
    { type: "BUSH", position: { x: 77, y: 0, z: -83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.7, y: 0.7, z: 0.7 } },
    { type: "BUSH", position: { x: 84, y: 0, z: -83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 0.8, z: 0.8 } },

    // Pequenas poças adicionais ao redor do oásis principal
    { type: "WATER_PUDDLE", position: { x: 73, y: 0, z: -83 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 2, y: 0.1, z: 2 } },
    { type: "WATER_PUDDLE", position: { x: 86, y: 0, z: -77 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.5, y: 0.1, z: 1.5 } },
  ],

  // Spots de monstros
  monsterSpots: [
    // Vila dos Lenhadores - Região Florestal (Zumbis nível baixo) - FORA DA VILA
    {
      area: "VILA_LENHADORES",
      type: "BLACK_MIST_ZOMBIE",
      count: 6,
      respawnTime: 30,
      level: 1,
      bounds: { xMin: -100, xMax: -60, zMin: 30, zMax: 50 }, // Ao sul da vila, fora dos muros
    },
    // Mais zumbis na floresta a leste da vila
    {
      area: "VILA_LENHADORES",
      type: "BLACK_MIST_ZOMBIE",
      count: 4,
      respawnTime: 30,
      level: 1,
      bounds: { xMin: -50, xMax: -30, zMin: 60, zMax: 90 }, // A leste da vila
    },
    // Boss da Floresta (Zumbi forte nível 5)
    {
      area: "VILA_LENHADORES",
      type: "BLACK_MIST_ZOMBIE",
      count: 1,
      respawnTime: 300,
      level: 42,
      scale: { x: 2, y: 2, z: 2 },
      bounds: { xMin: -95, xMax: -90, zMin: 40, zMax: 45 }
    },
    
    // Vila Mineira - Região Montanhosa (Aranhas nível médio-baixo) - FORA DA VILA
    {
      area: "VILA_MINEIRA",
      type: "SPIDER",
      count: 5,
      respawnTime: 40,
      level: 2,
      bounds: { xMin: 40, xMax: 60, zMin: 60, zMax: 90 }, // A oeste da vila
    },
    // Mais aranhas nas montanhas ao norte
    {
      area: "VILA_MINEIRA",
      type: "SPIDER",
      count: 4,
      respawnTime: 40,
      level: 2,
      bounds: { xMin: 70, xMax: 90, zMin: 30, zMax: 50 }, // Ao sul da vila
    },
    // Boss das Montanhas (Aranha forte nível 6)
    {
      area: "VILA_MINEIRA",
      type: "SPIDER",
      count: 1,
      respawnTime: 300,
      level: 47,
      scale: { x: 2.2, y: 2.2, z: 2.2 },
      bounds: { xMin: 90, xMax: 95, zMin: 40, zMax: 45 }
    },
    
    // Vila Abandonada - Região Pantanosa (Zumbis nível médio-alto) - FORA DA VILA
    {
      area: "VILA_ABANDONADA",
      type: "BLACK_MIST_ZOMBIE",
      count: 5,
      respawnTime: 40,
      level: 3,
      bounds: { xMin: -50, xMax: -30, zMin: -90, zMax: -60 }, // A leste da vila
    },
    // Mais zumbis no pântano ao norte
    {
      area: "VILA_ABANDONADA",
      type: "BLACK_MIST_ZOMBIE",
      count: 4,
      respawnTime: 40,
      level: 3,
      bounds: { xMin: -90, xMax: -60, zMin: -50, zMax: -30 }, // Ao norte da vila
    },
    // Boss do Pântano (Zumbi forte nível 7)
    {
      area: "VILA_ABANDONADA",
      type: "BLACK_MIST_ZOMBIE",
      count: 1,
      respawnTime: 300,
      level: 44,
      scale: { x: 2, y: 2, z: 2 },
      bounds: { xMin: -95, xMax: -90, zMin: -45, zMax: -40 }
    },
    
    // Oasis do Sul - Região Desértica (Aranhas nível alto) - FORA DA VILA
    {
      area: "OASIS_SUL",
      type: "SPIDER",
      count: 5,
      respawnTime: 45,
      level: 4,
      bounds: { xMin: 30, xMax: 50, zMin: -90, zMax: -60 }, // A oeste do oásis
    },
    // Mais aranhas no deserto ao norte
    {
      area: "OASIS_SUL",
      type: "SPIDER",
      count: 5,
      respawnTime: 45,
      level: 4,
      bounds: { xMin: 60, xMax: 90, zMin: -50, zMax: -30 }, // Ao norte do oásis
    },
    // Boss do Deserto (Aranha forte nível 8)
    {
      area: "OASIS_SUL",
      type: "SPIDER",
      count: 1,
      respawnTime: 300,
      level: 50,
      scale: { x: 5, y: 5, z: 5},
      bounds: { xMin: 90, xMax: 95, zMin: -45, zMax: -40 }
    },
    
    // Áreas centrais de grinding (nível variado)
    // Centro-Norte (entre Vila dos Lenhadores e Vila Mineira)
    {
      area: "CENTRO",
      type: "BLACK_MIST_ZOMBIE",
      count: 5,
      respawnTime: 25,
      level: 2,
      bounds: { xMin: -20, xMax: 20, zMin: 10, zMax: 30 },
    },
    // Centro-Sul (entre Vila Abandonada e Oasis)
    {
      area: "CENTRO",
      type: "SPIDER",
      count: 5,
      respawnTime: 25,
      level: 3,
      bounds: { xMin: -20, xMax: 20, zMin: -30, zMax: -10 },
    },
    // Centro-Este (entre Vila Mineira e Oasis)
    {
      area: "CENTRO",
      type: "SPIDER",
      count: 4,
      respawnTime: 30,
      level: 3,
      bounds: { xMin: 10, xMax: 30, zMin: -10, zMax: 10 },
    },
    // Centro-Oeste (entre Vila dos Lenhadores e Vila Abandonada)
    {
      area: "CENTRO",
      type: "BLACK_MIST_ZOMBIE",
      count: 4,
      respawnTime: 30,
      level: 2,
      bounds: { xMin: -30, xMax: -10, zMin: -10, zMax: 10 },
    },
  ],

  // Pontos de spawn de jogador (um em cada vila)
  playerSpawns: [
    { position: { x: -80, z: 80 }, area: "VILA_LENHADORES", range: 5 },
    { position: { x: 80, z: 80 }, area: "VILA_MINEIRA", range: 5 },
    { position: { x: -80, z: -80 }, area: "VILA_ABANDONADA", range: 5 },
    { position: { x: 80, z: -80 }, area: "OASIS_SUL", range: 5 },
  ],

  // Tiles customizados (estradas, praças, áreas de boss, áreas de grind)
  groundTiles: [
    // Estradas principais (amarelo claro)
    { type: 'road', color: '#ffe082', from: { x: -80, z: 80 }, to: { x: 0, z: 0 } }, // Lenhadores → Centro
    { type: 'road', color: '#ffe082', from: { x: 80, z: 80 }, to: { x: 0, z: 0 } },  // Mineira → Centro
    { type: 'road', color: '#ffe082', from: { x: -80, z: -80 }, to: { x: 0, z: 0 } }, // Abandonada → Centro
    { type: 'road', color: '#ffe082', from: { x: 80, z: -80 }, to: { x: 0, z: 0 } },  // Oasis → Centro

    // Estradas diagonais
    { type: 'road', color: '#ffe082', from: { x: -80, z: 80 }, to: { x: 80, z: -80 } }, // NW → SE
    { type: 'road', color: '#ffe082', from: { x: 80, z: 80 }, to: { x: -80, z: -80 } }, // NE → SW

    // Estradas horizontais/verticais
    { type: 'road', color: '#ffe082', from: { x: -80, z: 80 }, to: { x: 80, z: 80 } },   // Norte
    { type: 'road', color: '#ffe082', from: { x: -80, z: -80 }, to: { x: 80, z: -80 } }, // Sul
    { type: 'road', color: '#ffe082', from: { x: 80, z: 80 }, to: { x: 80, z: -80 } },   // Leste
    { type: 'road', color: '#ffe082', from: { x: -80, z: 80 }, to: { x: -80, z: -80 } }, // Oeste

    // Trilhas secundárias (marrom claro)
    { type: 'trail', color: '#bfa76a', from: { x: 0, z: 0 }, to: { x: 0, z: 40 } },     // Centro → grind spot norte
    { type: 'trail', color: '#bfa76a', from: { x: 0, z: 0 }, to: { x: 0, z: -40 } },    // Centro → grind spot sul
    { type: 'trail', color: '#bfa76a', from: { x: 0, z: 0 }, to: { x: 40, z: 0 } },     // Centro → grind spot leste
    { type: 'trail', color: '#bfa76a', from: { x: 0, z: 0 }, to: { x: -40, z: 0 } }     // Centro → grind spot oeste
  ],
};

// =========================
// Funções utilitárias internas para povoamento automático
// =========================

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function addRandomObjects(objects, type, area, count, xRange, zRange, scaleRange) {
  for (let i = 0; i < count; i++) {
    objects.push({
      type,
      position: {
        x: random(xRange[0], xRange[1]),
        y: 0,
        z: random(zRange[0], zRange[1])
      },
      area,
      scale: {
        x: random(scaleRange[0], scaleRange[1]),
        y: random(scaleRange[0], scaleRange[1]),
        z: random(scaleRange[0], scaleRange[1])
      }
    });
  }
}

// Função para adicionar trilhas (tiles de estrada) entre pontos
function addTrail(groundTiles, from, to, color = "#bfa76a", type = "trail") {
  // Caminho simples em linha reta (pode ser aprimorado para curvas)
  groundTiles.push({ from, to, color, type });
}

// =========================
// Exemplos de povoamento automático e detalhes para cada bioma
// =========================

// Floresta do Norte: densa, viva, com trilhas e clareiras
addRandomObjects(MAP_CONFIG.objects, "TREE", "FOREST_NORTH", 40, [-95, -10], [110, 190], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "BUSH", "FOREST_NORTH", 20, [-95, -10], [110, 190], [0.6, 1.1]);
addRandomObjects(MAP_CONFIG.objects, "ROCK", "FOREST_NORTH", 10, [-95, -10], [110, 190], [0.7, 1.2]);
addRandomObjects(MAP_CONFIG.objects, "TREE", "FOREST_SOUTH", 40, [-95, -10], [-90, -10], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "BUSH", "FOREST_SOUTH", 20, [-95, -10], [-90, -10], [0.6, 1.1]);
addRandomObjects(MAP_CONFIG.objects, "ROCK", "FOREST_SOUTH", 10, [-95, -10], [-90, -10], [0.7, 1.2]);
addRandomObjects(MAP_CONFIG.objects, "ROCK", "MOUNTAINS_NE", 40, [10, 90], [120, 190], [1.0, 2.0]);
addRandomObjects(MAP_CONFIG.objects, "RUIN", "MOUNTAINS_NE", 10, [20, 80], [130, 180], [0.8, 1.5]);
addRandomObjects(MAP_CONFIG.objects, "TREE", "MOUNTAINS_NE", 10, [10, 90], [120, 190], [0.6, 1.0]);
addRandomObjects(MAP_CONFIG.objects, "ROCK", "MOUNTAINS_SOUTH", 40, [10, 90], [-90, -10], [1.0, 2.0]);
addRandomObjects(MAP_CONFIG.objects, "RUIN", "MOUNTAINS_SOUTH", 10, [20, 80], [-80, -20], [0.8, 1.5]);
addRandomObjects(MAP_CONFIG.objects, "TREE", "MOUNTAINS_SOUTH", 10, [10, 90], [-90, -10], [0.6, 1.0]);
addRandomObjects(MAP_CONFIG.objects, "CACTUS", "DESERT_SE", 40, [10, 90], [10, 90], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "CACTUS", "MOUNTAINS_SOUTH", 20, [10, 90], [-90, -10], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "DEAD_TREE", "FOREST_SOUTH", 10, [-95, -10], [-90, -10], [1, 2]);
// Arena Central Segura
addRandomObjects(MAP_CONFIG.objects, "TREE", "SAFE_ARENA", 10, [-30, 30], [70, 130], [1, 2]);
addRandomObjects(MAP_CONFIG.objects, "FLOWER", "SAFE_ARENA", 20, [-35, 35], [75, 125], [0.3, 0.5]);
addRandomObjects(MAP_CONFIG.objects, "BUSH", "SAFE_ARENA", 8, [-30, 30], [80, 120], [0.7, 1.1]);
addRandomObjects(MAP_CONFIG.objects, "HOUSE", "SAFE_ARENA", 4, [-25, 25], [90, 110], [2, 3]);
addRandomObjects(MAP_CONFIG.objects, "NPC_PLACEHOLDER", "SAFE_ARENA", 6, [-20, 20], [85, 115], [0.7, 1.8]);
MAP_CONFIG.objects.push({
  type: "ROCK",
  position: { x: 0, y: 0, z: 100 },
  area: "SAFE_ARENA",
  scale: { x: 2, y: 2, z: 2 }
});

// Trilha principal da floresta até a vila
// addTrail(MAP_CONFIG.groundTiles, { x: -80, z: 180 }, { x: -30, z: 120 }, "#bfa76a", "trail");
// addTrail(MAP_CONFIG.groundTiles, { x: -30, z: 120 }, { x: 0, z: 100 }, "#bfa76a", "trail");

// Montanhas Rochosas: rochas, ruínas, trilhas sinuosas
addRandomObjects(MAP_CONFIG.objects, "ROCK", "MOUNTAINS_NE", 80, [10, 90], [120, 190], [1.0, 2.0]);
addRandomObjects(MAP_CONFIG.objects, "RUIN", "MOUNTAINS_NE", 18, [20, 80], [130, 180], [0.8, 1.5]);
addRandomObjects(MAP_CONFIG.objects, "TREE", "MOUNTAINS_NE", 25, [10, 90], [120, 190], [0.6, 1.0]);
addRandomObjects(MAP_CONFIG.objects, "TRUNK", "MOUNTAINS_NE", 10, [10, 90], [120, 190], [0.5, 1.0]);
addRandomObjects(MAP_CONFIG.objects, "FLOWER", "MOUNTAINS_NE", 18, [10, 90], [120, 190], [0.2, 0.4]);
addRandomObjects(MAP_CONFIG.objects, "MUSHROOM", "MOUNTAINS_NE", 10, [10, 90], [120, 190], [0.2, 0.3]);
// Área de grind (centro-norte)
addRandomObjects(MAP_CONFIG.objects, "ROCK", "MOUNTAINS_NE", 30, [40, 70], [160, 190], [1.2, 2.2]);
addRandomObjects(MAP_CONFIG.objects, "SPIDER", "MOUNTAINS_NE", 15, [45, 65], [165, 185], [1, 1]);
// Rotas
// addTrail(MAP_CONFIG.groundTiles, { x: 60, z: 180 }, { x: 40, z: 150 }, "#bfa76a", "trail");
// addTrail(MAP_CONFIG.groundTiles, { x: 40, z: 150 }, { x: 0, z: 100 }, "#bfa76a", "trail");
// Ponto de interesse manual
MAP_CONFIG.objects.push({
  type: "RUIN",
  position: { x: 50, y: 0, z: 150 },
  area: "MOUNTAINS_NE",
  scale: { x: 2, y: 2, z: 2 }
});

// Pântano das Ruínas: árvores mortas, poças, ruínas, ossos
addRandomObjects(MAP_CONFIG.objects, "DEAD_TREE", "SWAMP_SW", 40, [-95, -10], [10, 90], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "RUIN", "SWAMP_SW", 18, [-80, -20], [20, 80], [0.8, 1.2]);
addRandomObjects(MAP_CONFIG.objects, "BONE", "SWAMP_SW", 20, [-95, -10], [10, 90], [0.7, 1.1]);
addRandomObjects(MAP_CONFIG.objects, "BUSH", "SWAMP_SW", 16, [-95, -10], [10, 90], [0.6, 1.0]);
addRandomObjects(MAP_CONFIG.objects, "WATER_PUDDLE", "SWAMP_SW", 18, [-95, -10], [10, 90], [2, 3]);
addRandomObjects(MAP_CONFIG.objects, "MUSHROOM", "SWAMP_SW", 14, [-95, -10], [10, 90], [0.2, 0.3]);
// Área de grind (centro-sul)
addRandomObjects(MAP_CONFIG.objects, "BLACK_MIST_ZOMBIE", "SWAMP_SW", 18, [-60, -30], [30, 70], [1, 1]);
// Rotas
// addTrail(MAP_CONFIG.groundTiles, { x: -80, z: 10 }, { x: -30, z: 60 }, "#bfa76a", "trail");
// addTrail(MAP_CONFIG.groundTiles, { x: -30, z: 60 }, { x: 0, z: 100 }, "#bfa76a", "trail");
// Ponto de interesse manual
MAP_CONFIG.objects.push({
  type: "WATER_PUDDLE",
  position: { x: -50, y: 0, z: 50 },
  area: "SWAMP_SW",
  scale: { x: 3, y: 1, z: 3 }
});

// Deserto do Sul: cactos, ossos, rochas, flores secas
addRandomObjects(MAP_CONFIG.objects, "CACTUS", "DESERT_SE", 60, [10, 90], [10, 90], [0.8, 1.3]);
addRandomObjects(MAP_CONFIG.objects, "BONE", "DESERT_SE", 20, [10, 90], [10, 90], [0.7, 1.1]);
addRandomObjects(MAP_CONFIG.objects, "ROCK", "DESERT_SE", 24, [10, 90], [10, 90], [1.0, 1.5]);
addRandomObjects(MAP_CONFIG.objects, "FLOWER", "DESERT_SE", 16, [10, 90], [10, 90], [0.2, 0.3]);
addRandomObjects(MAP_CONFIG.objects, "TRUNK", "DESERT_SE", 8, [10, 90], [10, 90], [0.5, 0.8]);
// Área de grind (centro-leste)
addRandomObjects(MAP_CONFIG.objects, "SPIDER", "DESERT_SE", 18, [40, 80], [30, 70], [1, 1]);
// Rotas
// addTrail(MAP_CONFIG.groundTiles, { x: 60, z: 10 }, { x: 40, z: 50 }, "#bfa76a", "trail");
// addTrail(MAP_CONFIG.groundTiles, { x: 40, z: 50 }, { x: 0, z: 100 }, "#bfa76a", "trail");
// Ponto de interesse manual
MAP_CONFIG.objects.push({
  type: "BONE",
  position: { x: 80, y: 0, z: 40 },
  area: "DESERT_SE",
  scale: { x: 2, y: 2, z: 2 }
});

// =========================
// Tipos de objetos decorativos adicionados:
// - TRUNK: tronco caído
// - FLOWER: flor decorativa
// - MUSHROOM: cogumelo
// - WATER_PUDDLE: poça d'água
// =========================
// Para cada novo asset, crie um arquivo em client/src/world/assets seguindo o padrão dos existentes.
// =========================

// =========================
// LOGS DE DEBUG PARA ASSETS DECORATIVOS E TOTAL DE OBJETOS
console.log('FLOWERS:', MAP_CONFIG.objects.filter(o => o.type === 'FLOWER').length);
console.log('TRUNKS:', MAP_CONFIG.objects.filter(o => o.type === 'TRUNK').length);
console.log('MUSHROOMS:', MAP_CONFIG.objects.filter(o => o.type === 'MUSHROOM').length);
console.log('WATER_PUDDLES:', MAP_CONFIG.objects.filter(o => o.type === 'WATER_PUDDLE').length);
console.log('TOTAL OBJECTS:', MAP_CONFIG.objects.length);
// =========================

// =========================
// Povoa todas as vilas com casas, muralhas, cercas, NPCs e decoração
// =========================

// =========================
// Exemplo de casa central na arena segura
MAP_CONFIG.objects.push({
  type: "HOUSE",
  position: { x: 0, y: 0, z: 100 },
  area: "SAFE_ARENA",
  scale: { x: 6, y: 5, z: 6 },
  rotation: Math.PI / 4 // 45 graus para alinhar com a grade isométrica
});
// Exemplo de parede horizontal
MAP_CONFIG.objects.push({
  type: "WALL",
  position: { x: 10, y: 0, z: 100 },
  area: "SAFE_ARENA",
  scale: { x: 8, y: 2.5, z: 1 },
  rotation: 0
});
// Exemplo de parede vertical
MAP_CONFIG.objects.push({
  type: "WALL",
  position: { x: 0, y: 0, z: 110 },
  area: "SAFE_ARENA",
  scale: { x: 8, y: 2.5, z: 1 },
  rotation: Math.PI / 2
});
// Exemplo de cerca
MAP_CONFIG.objects.push({
  type: "FENCE",
  position: { x: -10, y: 0, z: 100 },
  area: "SAFE_ARENA",
  scale: { x: 4, y: 1, z: 0.3 },
  rotation: 0
});
// Exemplo de NPC
MAP_CONFIG.objects.push({
  type: "NPC_PLACEHOLDER",
  position: { x: 5, y: 0, z: 105 },
  area: "SAFE_ARENA",
  scale: { x: 1, y: 1.8, z: 1 },
});
// Exemplo de árvore
MAP_CONFIG.objects.push({
  type: "TREE",
  position: { x: -5, y: 0, z: 95 },
  area: "SAFE_ARENA",
  scale: { x: 2, y: 4, z: 2 },
});
// Exemplo de rocha
MAP_CONFIG.objects.push({
  type: "ROCK",
  position: { x: 8, y: 0, z: 98 },
  area: "SAFE_ARENA",
  scale: { x: 1.5, y: 1, z: 1.5 },
});
// Exemplo de flor
MAP_CONFIG.objects.push({
  type: "FLOWER",
  position: { x: 2, y: 0, z: 102 },
  area: "SAFE_ARENA",
  scale: { x: 0.4, y: 0.4, z: 0.4 },
});
// Exemplo de cogumelo
MAP_CONFIG.objects.push({
  type: "MUSHROOM",
  position: { x: -2, y: 0, z: 98 },
  area: "SAFE_ARENA",
  scale: { x: 0.3, y: 0.3, z: 0.3 },
});
// Repita para as vilas, ajustando posição e área.

// ========================= 