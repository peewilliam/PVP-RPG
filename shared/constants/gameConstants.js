// Constantes compartilhadas entre cliente e servidor
import { config } from '../utils/config.js';

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
    LEVEL_UP: 'player:levelUp'
  },
  MONSTER: {
    SPAWN: 'monster:spawn',
    MOVE: 'monster:move',
    ATTACK: 'monster:attack',
    DAMAGE: 'monster:damage',
    DEATH: 'monster:death'
  },
  WORLD: {
    UPDATE: 'world:update',
    INIT: 'world:init'
  }
};

// Configurações do jogador
export const PLAYER = {
  SPEED: 0.1,
  BASE_STATS: {
    HP: 100,
    MANA: 100,
    ATTACK: 10,
    DEFENSE: 5
  },
  XP_PER_LEVEL: [
    0, // Nível 1
    100, // Nível 2
    250, // Nível 3
    450, // Nível 4
    700, // Nível 5
    1000 // Nível 6
  ]
};

// Configurações de habilidades
export const ABILITIES = {
  FIREBALL: {
    ID: 1,
    NAME: 'Bola de Fogo',
    COOLDOWN: 3000, // ms
    MANA_COST: 20,
    DAMAGE: 25,
    RANGE: 8,
    AREA_OF_EFFECT: 2
  },
  ICE_SPIKE: {
    ID: 2,
    NAME: 'Estaca de Gelo',
    COOLDOWN: 5000, // ms
    MANA_COST: 30,
    DAMAGE: 40,
    RANGE: 6,
    AREA_OF_EFFECT: 0
  },
  ARCANE_BLAST: {
    ID: 3,
    NAME: 'Explosão Arcana',
    COOLDOWN: 8000, // ms
    MANA_COST: 45,
    DAMAGE: 60,
    RANGE: 4,
    AREA_OF_EFFECT: 3
  },
  LIGHTNING_BOLT: {
    ID: 4,
    NAME: 'Raio',
    COOLDOWN: 12000, // ms
    MANA_COST: 50,
    DAMAGE: 80,
    RANGE: 10,
    AREA_OF_EFFECT: 1
  }
};

// Configurações de monstros
export const MONSTERS = {
  GOBLIN: {
    ID: 1,
    NAME: 'Goblin',
    HP: 50,
    DAMAGE: 5,
    DEFENSE: 2,
    SPEED: 0.05,
    XP_REWARD: 20,
    ATTACK_RANGE: 1.5,
    ATTACK_COOLDOWN: 2000 // ms
  }
}; 