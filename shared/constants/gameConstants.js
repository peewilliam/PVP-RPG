// Constantes compartilhadas entre cliente e servidor
import { config } from '../utils/config.js';
import { SKILLS } from '../skills/skillsConfig.js';

// Configurações do servidor
export const SERVER = {
  PORT: config.server.port,
  TICK_RATE: config.game.tickRate
};

// Eventos de rede
export const EVENTS = {
  PLAYER: {
    // MOVE: 'player:move', // Migrado para binário (bin:player:move)
    // MOVED: 'player:moved', // Migrado para binário (bin:player:moved)
    // DISCONNECTED: 'player:disconnected', // Migrado para binário (bin:player:disconnected)
    // JOINED: 'player:joined',    // Migrado para binário (bin:player:joined)
    // EXISTING: 'player:existing', // Migrado para binário (bin:player:existing)
    // ROTATED: 'player:rotated',  // Migrado para binário (bin:player:rotated)
    // USE_ABILITY: 'player:useAbility', // Migrado para binário (bin:player:useAbility)
    // DAMAGE: 'player:damage', // Migrado para binário (bin:combat:effects)
    // LEVEL_UP: 'player:levelUp', // (ainda em JSON se existir)
    // DEATH: 'player:death',     // Migrado para binário (bin:player:death)
    RESPAWN: 'player:respawn', // Migrado para binário (bin:player:respawn)
    // SYNC_RESPONSE: 'player:syncResponse', // Migrado para binário (bin:player:syncResponse)
    SYNC_REQUEST: 'player:syncRequest', // Permanece em JSON (trigger do cliente)
    // TARGET: 'player:target',   // Jogador seleciona um alvo
  },
  MONSTER: {
    SPAWN: 'monster:spawn',
    MOVE: 'monster:move',
    ATTACK: 'monster:attack',
    DAMAGE: 'monster:damage',
    DEATH: 'monster:death',
    ABILITY: 'monster:ability', // Eventos de habilidades de monstros como 'monster:webShot' e 'monster:spiderLeap'
    SPAWNED: 'monster:spawned',
    MOVED: 'monster:moved',
    ATTACKED: 'monster:attacked',
    DIED: 'monster:died',
    DAMAGED: 'monster:damaged'
  },
  COMBAT: {
    // Eventos antigos removidos: HIT, DAMAGE_DEALT, FLOATING_TEXT
  },
  WORLD: {
    UPDATE: 'world:update',
    INIT: 'world:init'
  }
};

// IDs de habilidades para facilitar comparações
export const ABILITY_IDS = {
  FIREBALL: 1,
  TELEPORT: 2,
  FROST_SPIKES: 3,
  METEOR_STORM: 4
};

// Configurações de habilidades (agora centralizadas)
export const ABILITIES = SKILLS;

// Configurações do jogador
export const PLAYER = {
  // A velocidade agora é calibrada para um tick rate de 20 ticks por segundo (50ms por tick)
  // Valores menores significam movimento mais lento, valores maiores significam movimento mais rápido
  SPEED: 0.4, // Velocidade por tick
  // NOVO PADRÃO: Escala visual 1.3x1.3x1.3, cone de direção 0.4x1.2, colisão 0.65 (estilo Diablo 4)
  BASE_STATS: {
    HP: 540,
    MANA: 600,
    ATTACK: 50,
    DEFENSE: 1
  },
  // Configurações de regeneração de recursos
  REGENERATION: {
    HP_PERCENT: 0.01, // 1% do HP máximo por segundo
    MANA_PERCENT: 0.05, // 1% da mana máxima por segundo
    NOTIFY_THRESHOLD: 0.25 // Notificar cliente quando recursos abaixo de 25%
  },
  // Sistema de níveis
  LEVEL_SYSTEM: {
    MAX_LEVEL: 50, // Nível máximo que um jogador pode atingir
    BASE_XP: 30,  // XP base para o nível 2
    GROWTH_FACTOR: 3, // Fator de crescimento da curva de XP
    // Os valores de XP por nível são calculados com a fórmula:
    // XP necessário para o nível N = BASE_XP * (GROWTH_FACTOR ^ (N-1))
    // Exemplo:
    // Nível 1: 0 XP
    // Nível 2: 100 XP
    // Nível 3: 100 * (1.5^1) = 150 XP
    // Nível 4: 100 * (1.5^2) = 225 XP
    // Nível 5: 100 * (1.5^3) = 337.5 XP
    // e assim por diante...
  },
  // Habilidades do jogador centralizadas
  ABILITIES: SKILLS,
  DEATH_PENALTY: {
    XP_PERCENT: 0.10, // Percentual de XP perdido (0.10 = 10%)
    LEVELS_LOST: 0,   // Quantidade de níveis perdidos (0 = não perde nível fixo)
    MIN_LEVEL: 1,     // Nível mínimo permitido após penalidade
    RESPAWN_TIME: 5000 // Tempo de respawn em milissegundos (5 segundos)
  },
};

// Configurações de monstros
export const MONSTERS = {
  BLACK_MIST_ZOMBIE: {
    ID: 1,
    NAME: 'Zumbi da Névoa Negra',
    INTERNAL_NAME: 'BlackMistZombie',
    monsterType: 'BLACK_MIST_ZOMBIE',
    HP: 120,
    DAMAGE: 50,
    DEFENSE: 5,
    SPEED: 0.15,
    XP_REWARD: 20,
    ATTACK_RANGE: 1.5,
    ATTACK_COOLDOWN: 500 // ms
  },
  SPIDER: {
    NAME: 'Aranha Sombria',
    HP: 90,
    DAMAGE: 40,
    DEFENSE: 3,
    SPEED: 0.30, // Ajustado para ficar consistente com outros monstros
    ATTACK_RANGE: 3.0,
    ATTACK_COOLDOWN: 100,
    XP_REWARD: 35,
    // Habilidades especiais:
    // - webShot: Lança teia que reduz a velocidade de movimento do alvo
    // - spiderLeap: Salta em direção ao alvo causando dano extra
  },
};

// Tipos de objetos do mundo
export const WORLD_OBJECTS = {
  TREE: {
    ID: 1,
    NAME: 'Árvore',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.8
  },
  ROCK: {
    ID: 2,
    NAME: 'Rocha',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 1.2
  },
  BUSH: {
    ID: 3,
    NAME: 'Arbusto',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.4
  },
  HOUSE: {
    ID: 4,
    NAME: 'Casa',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 3.0,
    IS_ENTERRABLE: true
  },
  FENCE: {
    ID: 5,
    NAME: 'Cerca',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.3
  },
  CACTUS: {
    ID: 6,
    NAME: 'Cacto',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.6
  },
  TRUNK: {
    ID: 7,
    NAME: 'Tronco',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.7
  },
  FLOWER: {
    ID: 8,
    NAME: 'Flor',
    IS_COLLIDABLE: false,
    COLLISION_RADIUS: 0.2
  },
  MUSHROOM: {
    ID: 9,
    NAME: 'Cogumelo',
    IS_COLLIDABLE: false,
    COLLISION_RADIUS: 0.2
  },
  WATER_PUDDLE: {
    ID: 10,
    NAME: 'Poça d\'Água',
    IS_COLLIDABLE: false,
    COLLISION_RADIUS: 0.4
  },
  DEAD_TREE: {
    ID: 11,
    NAME: 'Árvore Morta',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 0.8
  },
  BONE: {
    ID: 12,
    NAME: 'Ossada',
    IS_COLLIDABLE: false,
    COLLISION_RADIUS: 0.3
  },
  RUIN: {
    ID: 13,
    NAME: 'Ruína',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 1.0
  },
  BOSS_PLACEHOLDER: {
    ID: 14,
    NAME: 'Boss Placeholder',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 2.0
  },
  WALL: {
    ID: 15,
    NAME: 'Parede',
    IS_COLLIDABLE: true,
    COLLISION_RADIUS: 1.0
  },
  NPC_PLACEHOLDER: {
    ID: 16,
    NAME: 'NPC Placeholder',
    IS_COLLIDABLE: false,
    COLLISION_RADIUS: 0.7
  }
};

// Configurações do mundo
export const WORLD = {
  // Dimensões do mundo em unidades
  SIZE: {
    WIDTH: 200,    // Largura do mundo (eixo X) - Aumentado de 100 para 200
    HEIGHT: 200,   // Altura do mundo (eixo Z) - Aumentado de 100 para 200
    VISIBLE_RANGE: 30  // Distância máxima para sincronização de entidades com o cliente - Aumentado de 30 para 40
  },
  // Zonas do mundo
  ZONES: {
    // Área inicial para os jogadores
    SPAWN: {
      X_MIN: -15,
      X_MAX: 15,
      Z_MIN: -15,
      Z_MAX: 15
    },
    // Floresta densa ao norte
    FOREST_NORTH: {
      X_MIN: -80,
      X_MAX: 80,
      Z_MIN: -100,
      Z_MAX: -40
    },
    // Floresta ao oeste
    FOREST_WEST: {
      X_MIN: -100,
      X_MAX: -50,
      Z_MIN: -50,
      Z_MAX: 50
    },
    // Região montanhosa ao leste
    MOUNTAINS: {
      X_MIN: 50,
      X_MAX: 100,
      Z_MIN: -40, 
      Z_MAX: 70
    },
    // Planície ao sul com menos obstáculos
    PLAINS: {
      X_MIN: -60,
      X_MAX: 60,
      Z_MIN: 40,
      Z_MAX: 100
    },
    // Região de pântano ao sudeste
    SWAMP: {
      X_MIN: 30,
      X_MAX: 90,
      Z_MIN: 70,
      Z_MAX: 100
    },
    // Região de ruínas ao nordeste
    RUINS: {
      X_MIN: 40,
      X_MAX: 100,
      Z_MIN: -100,
      Z_MAX: -40
    },
    DESERT_PATH: {
      // Mapa linear com ramificações, 7 spots e boss no final
      // O caminho principal vai de Z_MIN a Z_MAX, com pequenas ramificações laterais
      X_MIN: -30,
      X_MAX: 30,
      Z_MIN: -100,
      Z_MAX: 100,
      // Spots principais (coordenadas aproximadas, podem ser ajustadas depois)
      SPOTS: [
        { id: 'spot1', x: 0, z: -80 },
        { id: 'spot2', x: -10, z: -55 },
        { id: 'spot3', x: 12, z: -30 },
        { id: 'spot4', x: -8, z: 0 },
        { id: 'spot5', x: 15, z: 25 },
        { id: 'spot6', x: -12, z: 55 },
        { id: 'spot7', x: 0, z: 80 }
      ],
      // Boss arena
      BOSS: { id: 'boss', x: 0, z: 95, radius: 10 }
    }
  },
  // Limitações físicas
  BOUNDARIES: {
    ENABLED: true,    // Se verdadeiro, impõe limites físicos no mundo
    BORDER_WIDTH: 2   // Largura da borda ao redor do mundo
  },
  MONSTER_TYPES: {
    BLACK_MIST_ZOMBIE: 'BLACK_MIST_ZOMBIE',
    SPIDER: 'SPIDER',
    // Adicione novos tipos de monstros aqui
  }
};

export const BINARY_EVENTS = {
  PLAYER_MOVE: 'bin:player:move',
  PLAYER_MOVED: 'bin:player:moved',
  MONSTER_DEATH: 'bin:monster:death',
  WORLD_UPDATE: 'bin:world:update',
  PLAYER_STATUS: 'bin:player:status',
  MONSTER_DELTA_UPDATE: 'bin:monster:delta',
  COMBAT_EFFECTS: 'bin:combat:effects',
  WORLD_INIT: 'bin:world:init',
  PLAYER_INIT: 'bin:player:init',
  PLAYER_DISCONNECTED: 'bin:player:disconnected',
  PLAYER_JOINED: 'bin:player:joined',
  PLAYER_EXISTING: 'bin:player:existing',
  PLAYER_ROTATE: 'bin:player:rotate',
  PLAYER_ROTATED: 'bin:player:rotated',
  PLAYER_USE_ABILITY: 'bin:player:useAbility',
  PLAYER_ABILITY_USED: 'bin:player:abilityUsed',
  PLAYER_RESPAWN: 'bin:player:respawn',
  PLAYER_DEATH: 'bin:player:death',
  PLAYER_SYNC_RESPONSE: 'bin:player:syncResponse',
  PLAYER_MOVE_TO_POINT: 'bin:player:moveToPoint',
};

// Enum para motivos de desconexão de jogador (para uso no campo 'reason' do evento binário)
export const PLAYER_DISCONNECT_REASON = {
  NORMAL: 0,      // Desconexão voluntária
  TIMEOUT: 1,     // Timeout/inatividade
  KICK: 2,        // Expulso pelo servidor/admin
  ERROR: 3        // Erro de rede ou outro
};

// Tabela de índices para tipos de monstros (para serialização binária)
export const MONSTER_TYPE_INDEX = {
  BLACK_MIST_ZOMBIE: 0,
  SPIDER: 1
  // Adicione outros tipos de monstro aqui, sempre na mesma ordem do array abaixo
};
export const MONSTER_TYPE_BY_INDEX = [
  'BLACK_MIST_ZOMBIE',
  'SPIDER'
  // Adicione outros tipos de monstro aqui, na mesma ordem do objeto acima
];

// Tabela de índices para tipos de objetos do mundo (para serialização binária)
export const WORLD_OBJECT_TYPE_INDEX = {
  TREE: 0,
  ROCK: 1,
  BUSH: 2,
  HOUSE: 3,
  FENCE: 4,
  CACTUS: 5,
  TRUNK: 6,
  FLOWER: 7,
  MUSHROOM: 8,
  WATER_PUDDLE: 9,
  DEAD_TREE: 10,
  BONE: 11,
  RUIN: 12,
  BOSS_PLACEHOLDER: 13,
  WALL: 14,
  NPC_PLACEHOLDER: 15
};
export const WORLD_OBJECT_TYPE_BY_INDEX = [
  'TREE',
  'ROCK',
  'BUSH',
  'HOUSE',
  'FENCE',
  'CACTUS',
  'TRUNK',
  'FLOWER',
  'MUSHROOM',
  'WATER_PUDDLE',
  'DEAD_TREE',
  'BONE',
  'RUIN',
  'BOSS_PLACEHOLDER',
  'WALL',
  'NPC_PLACEHOLDER'
];

// Tipos padronizados de evento para logging e auditoria
export const EVENT_TYPE = {
  BINARY: 'BINARY',
  JSON: 'JSON',
  CHAT: 'CHAT',
  CUSTOM: 'CUSTOM',
  SYSTEM: 'SYSTEM'
}; 