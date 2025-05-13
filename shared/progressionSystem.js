// Sistema centralizado de progressão, status e cálculo de XP/level/benefícios
import { PLAYER } from './constants/gameConstants.js';
// Multiplicador global de XP (ajustável para eventos)
export let XP_MULTIPLIER = 1;

export function setXpMultiplier(mult) {
  XP_MULTIPLIER = mult;
}

// Tabela de XP por level (exponencial simples, pode ser ajustada)
export function getXpForLevel(level) {
  // Exemplo: curva exponencial
  return Math.floor(100 * Math.pow(1.2, level - 1));
}

// Benefícios automáticos por level
export function getLevelBenefits(level) {
  // Exemplo: cada level dá +10 HP, +5 Mana, +2 Defesa, +2 Dano
  return {
    maxHp: PLAYER.BASE_STATS.HP + (level - 1) * 10,
    maxMana: PLAYER.BASE_STATS.MANA + (level - 1) * 5,
    defense: PLAYER.BASE_STATS.DEFENSE + (level - 1) * 2,
    attack: PLAYER.BASE_STATS.ATTACK + (level - 1) * 2,
  };
}

// Cálculo de XP ganho (aplica multiplicador global)
export function calculateXpGain(baseXp) {
  return Math.floor(baseXp * XP_MULTIPLIER);
}

// Cálculo de dano PvP/PvE (pode ser expandido para tipos de entidade)
export function calculateDamage({
  attackerAttack,
  defenderDefense,
  isPvP = false,
  isPvE = false,
  damageMultiplier = 1,
}) {
  // Exemplo: PvP reduz dano, PvE normal
  let baseDamage = attackerAttack - defenderDefense;
  if (baseDamage < 1) baseDamage = 1;
  if (isPvP) baseDamage *= 0.8; // PvP: 20% menos dano
  if (isPvE) baseDamage *= 1.0; // PvE: normal
  return Math.floor(baseDamage * damageMultiplier);
}

// Cálculo de HP/Mana máximos por level
export function getMaxHp(level) {
  return getLevelBenefits(level).maxHp;
}
export function getMaxMana(level) {
  return getLevelBenefits(level).maxMana;
}

// Exemplo de função para resetar status ao upar
export function applyLevelUp(oldLevel, newLevel, currentStats) {
  const benefits = getLevelBenefits(newLevel);
  return {
    ...currentStats,
    level: newLevel,
    maxHp: benefits.maxHp,
    maxMana: benefits.maxMana,
    defense: benefits.defense,
    attack: benefits.attack,
    hp: benefits.maxHp, // restaura HP ao máximo
    mana: benefits.maxMana, // restaura Mana ao máximo
  };
}

// Exemplo de função para calcular XP necessário para próximo level
export function getNextLevelXp(level) {
  return getXpForLevel(level + 1);
}

// Exporta tudo para uso no servidor e cliente
export default {
  XP_MULTIPLIER,
  setXpMultiplier,
  getXpForLevel,
  getLevelBenefits,
  calculateXpGain,
  calculateDamage,
  getMaxHp,
  getMaxMana,
  applyLevelUp,
  getNextLevelXp,
}; 