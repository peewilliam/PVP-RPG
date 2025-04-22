import { PLAYER } from '../constants/gameConstants.js';

/**
 * Calcula o XP necessário para um determinado nível
 * @param {number} level - O nível para calcular o XP necessário
 * @returns {number} - O XP necessário para atingir o nível
 */
export function getXpForLevel(level) {
  if (level <= 1) return 0;
  if (level > PLAYER.LEVEL_SYSTEM.MAX_LEVEL) return Infinity;
  
  const baseXp = PLAYER.LEVEL_SYSTEM.BASE_XP;
  const growthFactor = PLAYER.LEVEL_SYSTEM.GROWTH_FACTOR;
  
  return Math.floor(baseXp * Math.pow(growthFactor, level - 2));
}

/**
 * Calcula o XP total necessário para um jogador atingir um nível específico
 * @param {number} level - O nível alvo
 * @returns {number} - XP total acumulado para atingir o nível
 */
export function getTotalXpForLevel(level) {
  if (level <= 1) return 0;
  
  let totalXp = 0;
  for (let i = 2; i <= level; i++) {
    totalXp += getXpForLevel(i);
  }
  
  return totalXp;
}

/**
 * Determina o nível baseado no XP total do jogador
 * @param {number} totalXp - O XP total acumulado pelo jogador
 * @returns {Object} - Objeto contendo {level, xp, nextLevelXp}
 */
export function getLevelInfoFromXp(totalXp) {
  let level = 1;
  let accumulatedXp = 0;
  
  // Limite para evitar loop infinito
  const maxIterations = PLAYER.LEVEL_SYSTEM.MAX_LEVEL;
  
  for (let i = 0; i < maxIterations; i++) {
    const nextLevelXp = getXpForLevel(level + 1);
    const xpForNextLevel = accumulatedXp + nextLevelXp;
    
    if (totalXp < xpForNextLevel || level >= PLAYER.LEVEL_SYSTEM.MAX_LEVEL) {
      break;
    }
    
    level++;
    accumulatedXp = xpForNextLevel;
  }
  
  return {
    level,
    currentLevelXp: totalXp - accumulatedXp,
    xpForNextLevel: getXpForLevel(level + 1)
  };
}

/**
 * Calcula a porcentagem de progresso para o próximo nível
 * @param {number} currentXp - XP atual do jogador
 * @param {number} nextLevelXp - XP necessário para o próximo nível
 * @returns {number} - Porcentagem de 0 a 1
 */
export function getProgressToNextLevel(currentXp, nextLevelXp) {
  if (nextLevelXp === 0 || nextLevelXp === Infinity) return 1;
  return Math.min(1, currentXp / nextLevelXp);
} 