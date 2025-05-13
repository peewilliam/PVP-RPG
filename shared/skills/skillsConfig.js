// Configurações centralizadas das habilidades do jogo
export const SKILLS = {
  FIREBALL: {
    ID: 1,
    NAME: 'Bola de Fogo',
    DESCRIPTION: 'Lança uma esfera de fogo em linha reta que explode ao atingir o inimigo, causando dano direto e queimando inimigos ao redor.',
    TYPE: 'projectile',
    COOLDOWN: 500, // ms
    MANA_COST: 15,
    DAMAGE: 20,
    AREA_DAMAGE: 10, // 50% do dano base
    AREA_RADIUS: 2, // metros
    RANGE: 20, // metros
    ICON: '/textures/skills/fireball.png',
    EFFECTS: ['explosion', 'burn'],
  },
  TELEPORT: {
    ID: 2,
    NAME: 'Teleporte',
    DESCRIPTION: 'O mago se desfaz em partículas mágicas e se move instantaneamente para outra posição, ignorando obstáculos.',
    TYPE: 'mobility',
    COOLDOWN: 1000, // ms
    MANA_COST: 20,
    RANGE: 15, // metros
    ICON: '/textures/skills/teleport.png',
    EFFECTS: ['fade', 'particles'],
  },
  FROST_SPIKES: {
    ID: 3,
    NAME: 'Estacas de Gelo',
    DESCRIPTION: 'O mago conjura uma área de gelo no chão. Após 1 segundo, várias estacas congeladas irrompem da terra, atingindo todos os inimigos na área e aplicando lentidão.',
    TYPE: 'aoe',
    COOLDOWN: 2000, // ms
    MANA_COST: 60,
    DAMAGE: 30,
    AREA_RADIUS: 5, // metros
    RANGE: 15, // metros
    DELAY: 1000, // ms
    SLOW: 0.4, // 40% de lentidão
    SLOW_DURATION: 5000, // ms
    ICON: '/textures/skills/frost_spikes.png',
    EFFECTS: ['spikes', 'slow'],
  },
  METEOR_STORM: {
    ID: 4,
    NAME: 'Chuva de Meteoros',
    DESCRIPTION: 'O mago invoca uma tempestade de meteoros que caem continuamente por 5 segundos em uma área. Cada meteoro causa dano ao atingir o solo, afetando todos os inimigos na zona.',
    TYPE: 'zone',
    COOLDOWN: 4000, // ms
    MANA_COST: 90,
    DAMAGE: 30,
    AREA_RADIUS: 6, // metros
    RANGE: 18, // metros
    DURATION: 5000, // ms
    METEORS: 10,
    METEOR_INTERVAL: 500, // ms
    TICK_INTERVAL:500,
    ICON: '/textures/skills/meteor_storm.png',
    EFFECTS: ['meteor', 'fire', 'smoke'],
  },
  DASH: {
    ID: 5,
    NAME: 'Investida Ágil',
    DESCRIPTION: 'O mago se esquiva instantaneamente para a esquerda ou direita, tornando‑se invulnerável por um breve instante e reposicionando‑se.',
    TYPE: 'mobility',
    COOLDOWN: 4000,       // ms
    MANA_COST: 20,
    RANGE: 6,             // metros deslocados
    INVULNERABILITY: 200, // ms de invulnerabilidade
    ICON: '/textures/skills/dash.png',
    EFFECTS: ['dash', 'invuln'],
  },

  FIRE_WALL: {
    ID: 6,
    NAME: 'Muralha de Fogo',
    DESCRIPTION: 'Cria uma barreira flamejante à sua frente que dura alguns segundos, bloqueando projéteis inimigos e queimando quem tente atravessá‑la.',
    TYPE: 'zone',
    COOLDOWN: 15000,   // ms
    MANA_COST: 80,
    DURATION: 6000,    // ms de duração da parede
    DAMAGE_PER_SECOND: 10,
    WIDTH: 8,          // metros de comprimento
    ICON: '/textures/skills/fire_wall.png',
    EFFECTS: ['wall', 'burn'],
  },

  CELESTIAL_HEAL: {
    ID: 7,
    NAME: 'Bênção Celestial',
    DESCRIPTION: 'Invoca um raio de luz do céu que cura instantaneamente aliados em uma pequena área, restaurando sua vida.',
    TYPE: 'heal',
    COOLDOWN: 12000,    // ms
    MANA_COST: 70,
    HEAL_AMOUNT: 100,
    AREA_RADIUS: 4,     // metros de raio de cura
    ICON: '/textures/skills/celestial_heal.png',
    EFFECTS: ['heal', 'light'],
  },
  UNSTABLE_CURSE: {
    ID: 101,
    NAME: 'Maldição Instável',
    DESCRIPTION: 'Aplica uma maldição instável no inimigo. Após 4 segundos, ela explode causando dano em área e corrompendo todos os inimigos próximos.',
    TYPE: 'dot-explode',
    COOLDOWN: 7000, // ms
    MANA_COST: 45,
    DAMAGE: 30,
    AREA_RADIUS: 3,
    DELAY: 4000, // ms até a explosão
    ICON: '/textures/skills/unstable_curse.png',
    EFFECTS: ['curse', 'explosion', 'corruption'],
  },

  DARK_BEAM: {
    ID: 102,
    NAME: 'Raio das Sombras',
    DESCRIPTION: 'Canaliza um feixe sombrio contínuo por 3 segundos, drenando vida do inimigo e causando dano por segundo.',
    TYPE: 'channel',
    COOLDOWN: 10000,
    MANA_COST: 60,
    DAMAGE_PER_SECOND: 12,
    DURATION: 3000,
    LIFESTEAL: 0.25, // 25% do dano convertido em cura
    ICON: '/textures/skills/dark_beam.png',
    EFFECTS: ['beam', 'lifesteal', 'dark'],
  },

  CURSE_EXPANSION: {
    ID: 103,
    NAME: 'Expansão da Maldição',
    DESCRIPTION: 'Transfere todas as maldições do alvo para inimigos próximos, espalhando os efeitos negativos com potência reduzida.',
    TYPE: 'aoe-debuff',
    COOLDOWN: 15000,
    MANA_COST: 50,
    RANGE: 10,
    SPREAD_RADIUS: 5,
    EFFECT_REDUCTION: 0.5,
    ICON: '/textures/skills/curse_expansion.png',
    EFFECTS: ['spread', 'curse'],
  },

  SHADOW_PRISON: {
    ID: 104,
    NAME: 'Prisão Sombria',
    DESCRIPTION: 'Cria uma prisão mágica que aprisiona o inimigo no lugar por 3 segundos e causa dano sombrio contínuo durante a duração.',
    TYPE: 'zone-root',
    COOLDOWN: 12000,
    MANA_COST: 55,
    DURATION: 3000,
    DAMAGE_PER_SECOND: 10,
    ICON: '/textures/skills/shadow_prison.png',
    EFFECTS: ['root', 'dark', 'zone'],
  },
}; 