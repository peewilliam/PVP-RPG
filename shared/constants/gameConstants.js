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
    DEATH: 'monster:death'
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

// Configurações de habilidades (agora centralizadas)
export const ABILITIES = SKILLS;

// Configurações do jogador
export const PLAYER = {
  // A velocidade agora é calibrada para um tick rate de 20 ticks por segundo (50ms por tick)
  // Valores menores significam movimento mais lento, valores maiores significam movimento mais rápido
  SPEED: 0.3, // Velocidade por tick
  BASE_STATS: {
    HP: 100,
    MANA: 250,
    ATTACK: 10,
    DEFENSE: 5
  },
  // Configurações de regeneração de recursos
  REGENERATION: {
    HP_PERCENT: 0.01, // 1% do HP máximo por segundo
    MANA_PERCENT: 0.01, // 5% da mana máxima por segundo
    NOTIFY_THRESHOLD: 0.25 // Notificar cliente quando recursos abaixo de 25%
  },
  XP_PER_LEVEL: [
    0, // Nível 1
    100, // Nível 2
    250, // Nível 3
    450, // Nível 4
    700, // Nível 5
    1000 // Nível 6
  ],
  // Habilidades do jogador centralizadas
  ABILITIES: SKILLS
};

// Configurações de monstros
export const MONSTERS = {
  GOBLIN: {
    ID: 1,
    NAME: 'Goblin',
    HP: 50,
    DAMAGE: 50,
    DEFENSE: 2,
    SPEED: 0.05,
    XP_REWARD: 20,
    ATTACK_RANGE: 1.5,
    ATTACK_COOLDOWN: 2000 // ms
  }
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
  }
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
    }
  },
  // Limitações físicas
  BOUNDARIES: {
    ENABLED: true,    // Se verdadeiro, impõe limites físicos no mundo
    BORDER_WIDTH: 2   // Largura da borda ao redor do mundo
  }
}; 