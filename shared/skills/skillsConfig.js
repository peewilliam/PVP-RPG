// Configurações centralizadas das habilidades do jogo
export const SKILLS = {
  FIREBALL: {
    ID: 1,
    NAME: 'Bola de Fogo',
    DESCRIPTION: 'Lança uma esfera de fogo em linha reta que explode ao atingir o inimigo, causando dano direto e queimando inimigos ao redor.',
    TYPE: 'projectile',
    COOLDOWN: 5000, // ms
    MANA_COST: 40,
    DAMAGE: 20,
    AREA_DAMAGE: 10, // 50% do dano base
    AREA_RADIUS: 2, // metros
    RANGE: 20, // metros
    ICON: '🔥',
    EFFECTS: ['explosion', 'burn'],
  },
  TELEPORT: {
    ID: 2,
    NAME: 'Teleporte',
    DESCRIPTION: 'O mago se desfaz em partículas mágicas e se move instantaneamente para outra posição, ignorando obstáculos.',
    TYPE: 'mobility',
    COOLDOWN: 10000, // ms
    MANA_COST: 25,
    RANGE: 15, // metros
    ICON: '✨',
    EFFECTS: ['fade', 'particles'],
  },
  FROST_SPIKES: {
    ID: 3,
    NAME: 'Estacas de Gelo',
    DESCRIPTION: 'O mago conjura uma área de gelo no chão. Após 1 segundo, várias estacas congeladas irrompem da terra, atingindo todos os inimigos na área e aplicando lentidão.',
    TYPE: 'aoe',
    COOLDOWN: 12000, // ms
    MANA_COST: 60,
    DAMAGE: 25,
    AREA_RADIUS: 5, // metros
    RANGE: 15, // metros
    DELAY: 1000, // ms
    SLOW: 0.4, // 40% de lentidão
    SLOW_DURATION: 3000, // ms
    ICON: '❄️',
    EFFECTS: ['spikes', 'slow'],
  },
  METEOR_STORM: {
    ID: 4,
    NAME: 'Chuva de Meteoros',
    DESCRIPTION: 'O mago invoca uma tempestade de meteoros que caem continuamente por 5 segundos em uma área. Cada meteoro causa dano ao atingir o solo, afetando todos os inimigos na zona.',
    TYPE: 'zone',
    COOLDOWN: 20000, // ms
    MANA_COST: 90,
    DAMAGE: 15,
    AREA_RADIUS: 6, // metros
    RANGE: 18, // metros
    DURATION: 5000, // ms
    METEORS: 10,
    METEOR_INTERVAL: 500, // ms
    ICON: '☄️',
    EFFECTS: ['meteor', 'fire', 'smoke'],
  }
}; 