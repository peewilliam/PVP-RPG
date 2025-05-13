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
    INIT: 'player:init',
    MOVE: 'player:move',
    MOVED: 'player:moved',
    DISCONNECTED: 'player:disconnected',
    JOINED: 'player:joined',    // Notifica quando um novo jogador entra
    EXISTING: 'player:existing', // Envia informações de jogadores existentes
    ROTATE: 'player:rotate',    // Novo evento para rotação do jogador
    ROTATED: 'player:rotated',  // Confirmação de rotação do jogador
    USE_ABILITY: 'player:useAbility',
    ABILITY_USED: 'player:abilityUsed',
    DAMAGE: 'player:damage',
    LEVEL_UP: 'player:levelUp',
    DEATH: 'player:death',     // Quando um jogador morre
    RESPAWN: 'player:respawn', // Quando um jogador reaparece
    TARGET: 'player:target',   // Jogador seleciona um alvo
    SYNC_REQUEST: 'player:syncRequest', // Solicitação de sincronização de cooldowns e mana
    SYNC_RESPONSE: 'player:syncResponse' // Resposta com dados sincronizados do servidor
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
    HIT: 'combat:hit',         // Indica um acerto bem-sucedido
    DAMAGE_DEALT: 'combat:damageDealt', // Dano causado por uma habilidade
    FLOATING_TEXT: 'combat:floatingText' // Texto flutuante (dano, cura, etc)
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
  ABILITIES: SKILLS
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
};

// Configurações do mundo
export const WORLD = {
  // Dimensões do mundo em unidades
  SIZE: {
    WIDTH: 200,    // Largura do mundo (eixo X) - Aumentado de 100 para 200
    HEIGHT: 200,   // Altura do mundo (eixo Z) - Aumentado de 100 para 200
    VISIBLE_RANGE: 40  // Distância máxima para sincronização de entidades com o cliente - Aumentado de 30 para 40
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
  PLAYER_MOVE: 'bin:player:move', // Evento de movimento do jogador (funcionando 100% e unico)
  PLAYER_MOVED: 'bin:player:moved', // Evento de movimento do jogador confirmado (funcionando 100% e unico)
  MONSTER_DEATH: 'bin:monster:death',
  WORLD_UPDATE: 'bin:world:update', // Evento de atualização do mundo
  PLAYER_STATUS: 'bin:player:status', // Evento de status do jogador (funcionando 100% e unico)
  MONSTER_DELTA_UPDATE: 'bin:monster:delta',
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
  CACTUS: 5
  // Adicione outros tipos conforme necessário
};
export const WORLD_OBJECT_TYPE_BY_INDEX = [
  'TREE',
  'ROCK',
  'BUSH',
  'HOUSE',
  'FENCE',
  'CACTUS'
  // Adicione outros tipos conforme necessário
]; 