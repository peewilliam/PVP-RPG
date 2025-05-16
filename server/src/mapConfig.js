// server/src/mapConfig.js
// Configuração expandida do mundo MMORPG com 4 biomas, vilas, bosses e assets exclusivos

export const MAP_CONFIG = {
  name: "Mundo Principal Expandido",
  size: { width: 200, height: 200 },
  groundDefault: "#e2c290",

  // Áreas/Zonas do mapa
  areas: [
    // Floresta do Norte (NW)
    {
      id: "FOREST_NORTH",
      name: "Floresta do Norte",
      bounds: { xMin: -100, xMax: 0, zMin: 100, zMax: 200 },
      groundColor: "#b6e2a1",
      ambientLight: { color: "#b6e2a1", intensity: 0.5 },
      events: [],
    },
    // Floresta do Sul (SW) - NOVA ÁREA
    {
      id: "FOREST_SOUTH",
      name: "Floresta do Sul",
      bounds: { xMin: -100, xMax: 0, zMin: -100, zMax: 0 },
      groundColor: "#b6e2a1",
      ambientLight: { color: "#b6e2a1", intensity: 0.5 },
      events: [],
    },
    // Montanhas Rochosas (NE)
    {
      id: "MOUNTAINS_NE",
      name: "Montanhas Rochosas",
      bounds: { xMin: 0, xMax: 100, zMin: 100, zMax: 200 },
      groundColor: "#bfc9c9",
      ambientLight: { color: "#e0e0e0", intensity: 0.6 },
      events: [],
    },
    // Montanhas do Sul (SE) - NOVA ÁREA
    {
      id: "MOUNTAINS_SOUTH",
      name: "Montanhas do Sul",
      bounds: { xMin: 0, xMax: 100, zMin: -100, zMax: 0 },
      groundColor: "#bfc9c9",
      ambientLight: { color: "#e0e0e0", intensity: 0.6 },
      events: [],
    },
    // Arena Central Segura
    {
      id: "SAFE_ARENA",
      name: "Arena Segura Central",
      bounds: { xMin: -40, xMax: 40, zMin: 60, zMax: 140 },
      groundColor: "#e2c290",
      ambientLight: { color: "#fffbe6", intensity: 0.9 },
      events: [],
    },
    {
      id: "VILLAGE_NW",
      name: "Vila dos Lenhadores",
      bounds: { xMin: -80, xMax: -60, zMin: 180, zMax: 195 },
      groundColor: "#e2c290",
      ambientLight: { color: "#fffbe6", intensity: 0.8 },
      events: [],
    },
    {
      id: "VILLAGE_NE",
      name: "Vila Mineira",
      bounds: { xMin: 60, xMax: 80, zMin: 180, zMax: 195 },
      groundColor: "#e2c290",
      ambientLight: { color: "#fffbe6", intensity: 0.8 },
      events: [],
    },
    {
      id: "VILLAGE_SW",
      name: "Vila Abandonada",
      bounds: { xMin: -80, xMax: -60, zMin: 10, zMax: 25 },
      groundColor: "#e2c290",
      ambientLight: { color: "#fffbe6", intensity: 0.8 },
      events: [],
    },
    {
      id: "VILLAGE_SE",
      name: "Oásis do Sul",
      bounds: { xMin: 60, xMax: 80, zMin: 10, zMax: 25 },
      groundColor: "#e2c290",
      ambientLight: { color: "#fffbe6", intensity: 0.8 },
      events: [],
    },
  ],

  // Objetos do mundo (exemplo por bioma)
  objects: [
    // Floresta do Norte (NW) - x: -100 a 0, z: 100 a 200
    { type: "TREE", position: { x: -95, y: 0, z: 195 }, area: "FOREST_NORTH", scale: { x: 1.2, y: 3, z: 1.2 } },
    { type: "TREE", position: { x: -60, y: 0, z: 150 }, area: "FOREST_NORTH", scale: { x: 1, y: 2.5, z: 1 } },
    { type: "BUSH", position: { x: -80, y: 0, z: 180 }, area: "FOREST_NORTH", scale: { x: 0.8, y: 0.8, z: 0.8 } },
    { type: "ROCK", position: { x: -70, y: 0, z: 170 }, area: "FOREST_NORTH", scale: { x: 1.2, y: 1, z: 1.2 } },
    { type: "HOUSE", position: { x: -85, y: 0, z: 190 }, area: "VILLAGE_NW", scale: { x: 2.5, y: 2.5, z: 2.5 } },
    { type: "NPC_PLACEHOLDER", position: { x: -90, y: 0, z: 180 }, area: "VILLAGE_NW", scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Montanhas Rochosas (NE) - x: 0 a 100, z: 100 a 200
    { type: "ROCK", position: { x: 10, y: 0, z: 150 }, area: "MOUNTAINS_NE", scale: { x: 2, y: 1.5, z: 2 } },
    { type: "RUIN", position: { x: 30, y: 0, z: 180 }, area: "MOUNTAINS_NE", scale: { x: 1.5, y: 1, z: 1.5 } },
    { type: "TREE", position: { x: 20, y: 0, z: 120 }, area: "MOUNTAINS_NE", scale: { x: 0.7, y: 2, z: 0.7 } },
    { type: "HOUSE", position: { x: 80, y: 0, z: 190 }, area: "VILLAGE_NE", scale: { x: 2.5, y: 2.5, z: 2.5 } },
    { type: "NPC_PLACEHOLDER", position: { x: 95, y: 0, z: 180 }, area: "VILLAGE_NE", scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Pântano das Ruínas (SW) - x: -100 a 0, z: 0 a 100
    { type: "DEAD_TREE", position: { x: -95, y: 0, z: 10 }, area: "SWAMP_SW", scale: { x: 1, y: 2, z: 1 } },
    { type: "BONE", position: { x: -80, y: 0, z: 30 }, area: "SWAMP_SW", scale: { x: 1, y: 1, z: 1 } },
    { type: "BUSH", position: { x: -70, y: 0, z: 40 }, area: "SWAMP_SW", scale: { x: 0.8, y: 0.8, z: 0.8 } },
    { type: "HOUSE", position: { x: -85, y: 0, z: 20 }, area: "VILLAGE_SW", scale: { x: 2.5, y: 2.5, z: 2.5 } },
    { type: "NPC_PLACEHOLDER", position: { x: -90, y: 0, z: 10 }, area: "VILLAGE_SW", scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Deserto do Sul (SE) - x: 0 a 100, z: 0 a 100
    { type: "CACTUS", position: { x: 10, y: 0, z: 20 }, area: "DESERT_SE", scale: { x: 1, y: 2, z: 1 } },
    { type: "BONE", position: { x: 20, y: 0, z: 30 }, area: "DESERT_SE", scale: { x: 1, y: 1, z: 1 } },
    { type: "ROCK", position: { x: 30, y: 0, z: 40 }, area: "DESERT_SE", scale: { x: 1.5, y: 1, z: 1.5 } },
    { type: "HOUSE", position: { x: 80, y: 0, z: 20 }, area: "VILLAGE_SE", scale: { x: 2.5, y: 2.5, z: 2.5 } },
    { type: "NPC_PLACEHOLDER", position: { x: 95, y: 0, z: 10 }, area: "VILLAGE_SE", scale: { x: 0.7, y: 1.8, z: 0.7 } },
    // Centro do mapa (para testar transição de áreas)
    { type: "TREE", position: { x: 0, y: 0, z: 100 }, area: "FOREST_NORTH", scale: { x: 1.5, y: 3, z: 1.5 } },
    { type: "ROCK", position: { x: 0, y: 0, z: 0 }, area: "MOUNTAINS_NE", scale: { x: 1.5, y: 1, z: 1.5 } },
    { type: "BUSH", position: { x: 0, y: 0, z: 50 }, area: "SWAMP_SW", scale: { x: 1, y: 1, z: 1 } },
    { type: "CACTUS", position: { x: 0, y: 0, z: -50 }, area: "DESERT_SE", scale: { x: 1, y: 2, z: 1 } },
  ],

  // Spots de monstros (exemplo por bioma)
  monsterSpots: [
    // Floresta (Zumbi)
    {
      area: "FOREST_NORTH",
      type: "BLACK_MIST_ZOMBIE",
      count: 6,
      respawnTime: 30,
      level: 1,
      bounds: { xMin: -90, xMax: -60, zMin: 160, zMax: 195 },
    },
    // Boss Floresta (Zumbi mais forte)
    {
      area: "FOREST_NORTH",
      type: "BLACK_MIST_ZOMBIE",
      count: 1,
      respawnTime: 300,
      level: 5,
      bounds: { xMin: -95, xMax: -85, zMin: 190, zMax: 195 },
    },
    // Montanhas (Aranha)
    {
      area: "MOUNTAINS_NE",
      type: "SPIDER",
      count: 5,
      respawnTime: 40,
      level: 2,
      bounds: { xMin: 10, xMax: 40, zMin: 120, zMax: 180 },
    },
    // Boss Montanhas (Aranha mais forte)
    {
      area: "MOUNTAINS_NE",
      type: "SPIDER",
      count: 1,
      respawnTime: 300,
      level: 6,
      bounds: { xMin: 35, xMax: 45, zMin: 175, zMax: 185 },
    },
    // Pântano (Zumbi)
    {
      area: "SWAMP_SW",
      type: "BLACK_MIST_ZOMBIE",
      count: 6,
      respawnTime: 40,
      level: 3,
      bounds: { xMin: -90, xMax: -60, zMin: 10, zMax: 50 },
    },
    // Boss Pântano (Zumbi mais forte)
    {
      area: "SWAMP_SW",
      type: "BLACK_MIST_ZOMBIE",
      count: 1,
      respawnTime: 300,
      level: 7,
      bounds: { xMin: -95, xMax: -85, zMin: 45, zMax: 50 },
    },
    // Deserto (Aranha)
    {
      area: "DESERT_SE",
      type: "SPIDER",
      count: 7,
      respawnTime: 45,
      level: 4,
      bounds: { xMin: 10, xMax: 40, zMin: 10, zMax: 40 },
    },
    // Boss Deserto (Aranha mais forte)
    {
      area: "DESERT_SE",
      type: "SPIDER",
      count: 1,
      respawnTime: 300,
      level: 8,
      bounds: { xMin: 35, xMax: 45, zMin: 35, zMax: 45 },
    },
  ],

  // Pontos de spawn de jogador (vila inicial na floresta)
  playerSpawns: [
    { area: "VILLAGE_NW", range: 10 },
    { area: "VILLAGE_NE", range: 10 },
    { area: "VILLAGE_SW", range: 10 },
    { area: "VILLAGE_SE", range: 10 },
  ],

  // Tiles customizados (estradas, praças, áreas de boss)
  groundTiles: [
    // Estrada principal ligando vilas
    { from: { x: -70, z: 185 }, to: { x: 70, z: 185 }, color: "#bfa76a", type: "road" },
    { from: { x: -70, z: 15 }, to: { x: 70, z: 15 }, color: "#bfa76a", type: "road" },
    { from: { x: -70, z: 15 }, to: { x: -70, z: 185 }, color: "#bfa76a", type: "road" },
    { from: { x: 70, z: 15 }, to: { x: 70, z: 185 }, color: "#bfa76a", type: "road" },
    // Praças centrais das vilas
    { from: { x: -80, z: 180 }, to: { x: -60, z: 195 }, color: "#e2c290", type: "plaza" },
    { from: { x: 60, z: 180 }, to: { x: 80, z: 195 }, color: "#e2c290", type: "plaza" },
    { from: { x: -80, z: 10 }, to: { x: -60, z: 25 }, color: "#e2c290", type: "plaza" },
    { from: { x: 60, z: 10 }, to: { x: 80, z: 25 }, color: "#e2c290", type: "plaza" },
    // Áreas de boss
    { from: { x: -95, z: 190 }, to: { x: -85, z: 195 }, color: "#ff0000", type: "boss_area" },
    { from: { x: 35, z: 175 }, to: { x: 45, z: 185 }, color: "#ff0000", type: "boss_area" },
    { from: { x: -95, z: 45 }, to: { x: -85, z: 50 }, color: "#ff0000", type: "boss_area" },
    { from: { x: 35, z: 35 }, to: { x: 45, z: 45 }, color: "#ff0000", type: "boss_area" },
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
addTrail(MAP_CONFIG.groundTiles, { x: -80, z: 180 }, { x: -30, z: 120 }, "#bfa76a", "trail");
addTrail(MAP_CONFIG.groundTiles, { x: -30, z: 120 }, { x: 0, z: 100 }, "#bfa76a", "trail");

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
addTrail(MAP_CONFIG.groundTiles, { x: 60, z: 180 }, { x: 40, z: 150 }, "#bfa76a", "trail");
addTrail(MAP_CONFIG.groundTiles, { x: 40, z: 150 }, { x: 0, z: 100 }, "#bfa76a", "trail");
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
addRandomObjects(MAP_CONFIG.objects, "WATER_PUDDLE", "SWAMP_SW", 18, [-95, -10], [10, 90], [0.5, 0.8]);
addRandomObjects(MAP_CONFIG.objects, "MUSHROOM", "SWAMP_SW", 14, [-95, -10], [10, 90], [0.2, 0.3]);
// Área de grind (centro-sul)
addRandomObjects(MAP_CONFIG.objects, "BLACK_MIST_ZOMBIE", "SWAMP_SW", 18, [-60, -30], [30, 70], [1, 1]);
// Rotas
addTrail(MAP_CONFIG.groundTiles, { x: -80, z: 10 }, { x: -30, z: 60 }, "#bfa76a", "trail");
addTrail(MAP_CONFIG.groundTiles, { x: -30, z: 60 }, { x: 0, z: 100 }, "#bfa76a", "trail");
// Ponto de interesse manual
MAP_CONFIG.objects.push({
  type: "WATER_PUDDLE",
  position: { x: -50, y: 0, z: 50 },
  area: "SWAMP_SW",
  scale: { x: 2, y: 1, z: 2 }
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
addTrail(MAP_CONFIG.groundTiles, { x: 60, z: 10 }, { x: 40, z: 50 }, "#bfa76a", "trail");
addTrail(MAP_CONFIG.groundTiles, { x: 40, z: 50 }, { x: 0, z: 100 }, "#bfa76a", "trail");
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