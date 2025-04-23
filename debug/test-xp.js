// Script para testar o cálculo de XP

// Definindo as constantes do jogo
const PLAYER = {
  LEVEL_SYSTEM: {
    MAX_LEVEL: 50,
    BASE_XP: 100,
    GROWTH_FACTOR: 1.5
  }
};

// Constantes de monstros do gameConstants.js
const MONSTERS = {
  BLACK_MIST_ZOMBIE: {
    ID: 1,
    NAME: 'Zumbi da Névoa Negra',
    INTERNAL_NAME: 'BlackMistZombie',
    monsterType: 'BLACK_MIST_ZOMBIE',
    HP: 50,
    DAMAGE: 50,
    DEFENSE: 2,
    SPEED: 0.05,
    XP_REWARD: 20,
    ATTACK_RANGE: 1.5,
    ATTACK_COOLDOWN: 2000 // ms
  },
  SPIDER: {
    NAME: 'Aranha Sombria',
    HP: 80,
    DAMAGE: 60,
    DEFENSE: 3,
    SPEED: 0.15,
    ATTACK_RANGE: 3.0,
    ATTACK_COOLDOWN: 600,
    XP_REWARD: 35
  }
};

// Função de cálculo de XP
function getXpForLevel(level) {
  if (level <= 1) return 0;
  if (level > PLAYER.LEVEL_SYSTEM.MAX_LEVEL) return Infinity;
  
  const baseXp = PLAYER.LEVEL_SYSTEM.BASE_XP;
  const growthFactor = PLAYER.LEVEL_SYSTEM.GROWTH_FACTOR;
  
  return Math.floor(baseXp * Math.pow(growthFactor, level - 2));
}

// Calcula o XP total necessário para alcançar um nível
function getTotalXpForLevel(level) {
  if (level <= 1) return 0;
  
  let totalXp = 0;
  for (let i = 2; i <= level; i++) {
    totalXp += getXpForLevel(i);
  }
  
  return totalXp;
}

// Determina o nível baseado no XP total
function getLevelFromTotalXp(totalXp) {
  let level = 1;
  let accumulatedXp = 0;
  
  for (let i = 2; i <= PLAYER.LEVEL_SYSTEM.MAX_LEVEL; i++) {
    const xpForLevel = getXpForLevel(i);
    if (accumulatedXp + xpForLevel > totalXp) {
      break;
    }
    
    level = i;
    accumulatedXp += xpForLevel;
  }
  
  return {
    level,
    currentLevelXp: totalXp - accumulatedXp,
    xpForNextLevel: getXpForLevel(level + 1),
    totalXp
  };
}

// Função para simular ganho de XP e subida de nível
function simulateXpGain(startLevel, startXp, xpGained) {
  const totalXpBefore = getTotalXpForLevel(startLevel) + startXp;
  const totalXpAfter = totalXpBefore + xpGained;
  const result = getLevelFromTotalXp(totalXpAfter);
  
  return {
    startLevel,
    startXp,
    xpGained,
    newLevel: result.level,
    newXp: result.currentLevelXp,
    leveledUp: result.level > startLevel,
    levelsGained: result.level - startLevel
  };
}

// Função para calcular XP ajustado com base na diferença de nível
function calculateAdjustedXp(monsterLevel, monsterBaseXp, playerLevel) {
  let adjustedXpReward = monsterBaseXp;
  
  // Se o nível do jogador for maior que o do monstro, reduz o XP
  if (playerLevel > monsterLevel) {
    const levelDiff = playerLevel - monsterLevel;
    // Reduz 10% por nível de diferença, até um mínimo de 10% do XP original
    const reductionFactor = Math.max(0.1, 1 - (levelDiff * 0.1));
    adjustedXpReward = Math.floor(monsterBaseXp * reductionFactor);
  } 
  // Se o nível do jogador for menor, aumenta o XP (bônus por derrotar monstro mais forte)
  else if (playerLevel < monsterLevel) {
    const levelDiff = monsterLevel - playerLevel;
    // Aumenta 20% por nível de diferença, até um máximo de 100% extra (dobro do XP)
    const bonusFactor = Math.min(2.0, 1 + (levelDiff * 0.2));
    adjustedXpReward = Math.floor(monsterBaseXp * bonusFactor);
  }
  
  // Garante um mínimo de XP (1% do próximo nível)
  const minXpReward = Math.ceil(getXpForLevel(playerLevel + 1) * 0.01);
  adjustedXpReward = Math.max(minXpReward, adjustedXpReward);
  
  // Limita o XP máximo a 50% do necessário para o próximo nível
  const maxXpReward = Math.floor(getXpForLevel(playerLevel + 1) * 0.5);
  adjustedXpReward = Math.min(adjustedXpReward, maxXpReward);
  
  return adjustedXpReward;
}

// Função para formatar números grandes
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}

// Escolha a funcionalidade a testar modificando o valor de 'testMode'
// 1: Teste de XP por nível
// 2: Teste de XP total acumulado
// 3: Teste de recompensa de XP ajustada por monstro
// 4: Teste de simulação de ganho de XP
// 5: Teste de monstros necessários para subir de nível
// 6: Teste de tempo estimado para subir de nível
// 7: Teste com monstros reais do jogo
// 0: Todos os testes
const testMode = 0;

if (testMode === 1 || testMode === 0) {
  console.log("=== Teste de cálculo de XP por nível ===");
  console.log("Nível | XP necessário | Aumento %");
  console.log("---------------------------------");
  let prevXp = 100;
  for (let level = 1; level <= 30; level++) {
    const xp = getXpForLevel(level);
    const increase = level > 2 ? ((xp / prevXp) * 100 - 100).toFixed(1) + '%' : '-';
    prevXp = xp;
    console.log(`${level.toString().padStart(2, ' ')}    | ${formatNumber(xp).padStart(8, ' ')} XP | ${increase.padStart(6, ' ')}`);
  }
}

if (testMode === 2 || testMode === 0) {
  console.log("\n=== XP Total acumulado por nível ===");
  console.log("Nível | XP total acumulado");
  console.log("---------------------------");
  for (let level = 1; level <= 30; level += level < 10 ? 1 : 5) {
    const totalXp = getTotalXpForLevel(level);
    console.log(`${level.toString().padStart(2, ' ')}    | ${formatNumber(totalXp).padStart(10, ' ')} XP`);
  }
  
  // Níveis altos
  console.log("\n--- Níveis Altos ---");
  for (let level = 35; level <= 50; level += 5) {
    const totalXp = getTotalXpForLevel(level);
    console.log(`${level.toString().padStart(2, ' ')}    | ${formatNumber(totalXp).padStart(10, ' ')} XP`);
  }
}

if (testMode === 3 || testMode === 0) {
  console.log("\n=== Recompensa de XP ajustada por monstro ===");
  const monsterTypes = [
    { level: 1, type: "Zumbi", baseXP: MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD },
    { level: 3, type: "Aranha", baseXP: MONSTERS.SPIDER.XP_REWARD },
    { level: 5, type: "Monstro Nível 5", baseXP: 35 * 5 },
    { level: 10, type: "Monstro Nível 10", baseXP: 35 * 10 },
  ];
  
  // Tabela para cada monstro
  for (const monster of monsterTypes) {
    console.log(`\n--- ${monster.type} (Nível ${monster.level}, XP Base: ${monster.baseXP}) ---`);
    console.log("Nível jogador | XP ajustado | Ajuste | % do próximo nível");
    console.log("--------------------------------------------------");
    
    for (let playerLevel = 1; playerLevel <= 15; playerLevel++) {
      const adjustedXpReward = calculateAdjustedXp(monster.level, monster.baseXP, playerLevel);
      const adjustment = playerLevel !== monster.level 
        ? (playerLevel < monster.level ? "(+bônus)" : "(reduzido)") 
        : "(normal)";
      
      // % do próximo nível que esse XP representa
      const percentOfNextLevel = (adjustedXpReward / getXpForLevel(playerLevel + 1) * 100).toFixed(1);
      
      console.log(`${playerLevel.toString().padStart(2, ' ')}           | ${adjustedXpReward.toString().padStart(3, ' ')} XP     | ${adjustment.padStart(9, ' ')} | ${percentOfNextLevel.padStart(5, ' ')}%`);
    }
  }
}

if (testMode === 4 || testMode === 0) {
  console.log("\n=== Simulação de ganho de XP ===");
  
  const scenarios = [
    { startLevel: 1, startXp: 0, xpGained: 50 },
    { startLevel: 1, startXp: 50, xpGained: 50 },
    { startLevel: 2, startXp: 75, xpGained: 100 },
    { startLevel: 5, startXp: 300, xpGained: 500 },
    { startLevel: 10, startXp: 1000, xpGained: 5000 },
    { startLevel: 20, startXp: 50000, xpGained: 100000 }
  ];
  
  console.log("Início               | Ganho XP  | Resultado            | Níveis");
  console.log("--------------------------------------------------------------");
  
  for (const scenario of scenarios) {
    const result = simulateXpGain(scenario.startLevel, scenario.startXp, scenario.xpGained);
    console.log(
      `Nível ${result.startLevel.toString().padStart(2, ' ')} (${result.startXp.toString().padStart(6, ' ')} XP) | ${formatNumber(result.xpGained).padStart(6, ' ')} XP | Nível ${result.newLevel.toString().padStart(2, ' ')} (${result.newXp.toString().padStart(6, ' ')} XP) | ${result.levelsGained > 0 ? '+' + result.levelsGained : '0'}`
    );
  }
}

if (testMode === 5 || testMode === 0) {
  console.log("\n=== Monstros necessários para subir de nível ===");
  
  // Monstros presentes no jogo
  const zombieXP = MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD;
  const spiderXP = MONSTERS.SPIDER.XP_REWARD;
  
  console.log("Nível atual | Zumbis (n.1) | Aranhas (n.3) | Monstro n.10");
  console.log("---------------------------------------------------------");
  
  for (let playerLevel = 1; playerLevel <= 15; playerLevel++) {
    const xpNeeded = getXpForLevel(playerLevel + 1);
    
    // Zumbis (nível 1)
    const zombieAdjustedXP = calculateAdjustedXp(1, zombieXP, playerLevel);
    const zombiesNeeded = Math.ceil(xpNeeded / zombieAdjustedXP);
    
    // Aranhas (nível 3)
    const spiderAdjustedXP = calculateAdjustedXp(3, spiderXP, playerLevel);
    const spidersNeeded = Math.ceil(xpNeeded / spiderAdjustedXP);
    
    // Monstro genérico nível 10
    const monster10XP = 35 * 10;
    const monster10AdjustedXP = calculateAdjustedXp(10, monster10XP, playerLevel);
    const monsters10Needed = Math.ceil(xpNeeded / monster10AdjustedXP);
    
    console.log(`${playerLevel.toString().padStart(2, ' ')}          | ${formatNumber(zombiesNeeded).padStart(7, ' ')} | ${formatNumber(spidersNeeded).padStart(9, ' ')} | ${formatNumber(monsters10Needed).padStart(7, ' ')}`);
  }
  
  // Níveis altos
  console.log("\n--- Níveis Altos ---");
  console.log("Nível atual | Aranhas (n.3) | Monstro n.10 | Monstro n.25");
  console.log("---------------------------------------------------------");
  
  for (let playerLevel = 20; playerLevel <= 40; playerLevel += 5) {
    const xpNeeded = getXpForLevel(playerLevel + 1);
    
    // Aranhas (nível 3)
    const spiderAdjustedXP = calculateAdjustedXp(3, spiderXP, playerLevel);
    const spidersNeeded = Math.ceil(xpNeeded / spiderAdjustedXP);
    
    // Monstro genérico nível 10
    const monster10XP = 35 * 10;
    const monster10AdjustedXP = calculateAdjustedXp(10, monster10XP, playerLevel);
    const monsters10Needed = Math.ceil(xpNeeded / monster10AdjustedXP);
    
    // Monstro genérico nível 25
    const monster25XP = 35 * 25;
    const monster25AdjustedXP = calculateAdjustedXp(25, monster25XP, playerLevel);
    const monsters25Needed = Math.ceil(xpNeeded / monster25AdjustedXP);
    
    console.log(`${playerLevel.toString().padStart(2, ' ')}          | ${formatNumber(spidersNeeded).padStart(9, ' ')} | ${formatNumber(monsters10Needed).padStart(9, ' ')} | ${formatNumber(monsters25Needed).padStart(9, ' ')}`);
  }
}

if (testMode === 6 || testMode === 0) {
  console.log("\n=== Tempo estimado para subir de nível ===");
  console.log("(Assumindo um monstro do seu nível a cada 30 segundos)");
  console.log("Nível | XP Necessário | Monstros | Tempo estimado");
  console.log("-------------------------------------------------");
  
  for (let level = 1; level <= 30; level += level < 10 ? 1 : 5) {
    const xpNeeded = getXpForLevel(level + 1);
    const monsterXp = 35 * level; // Recompensa base de um monstro do mesmo nível
    const monstersNeeded = Math.ceil(xpNeeded / monsterXp);
    const timeSeconds = monstersNeeded * 30;
    
    // Converter para formato legível
    let timeStr;
    if (timeSeconds < 60) {
      timeStr = `${timeSeconds}s`;
    } else if (timeSeconds < 3600) {
      const min = Math.floor(timeSeconds / 60);
      const sec = timeSeconds % 60;
      timeStr = `${min}m ${sec}s`;
    } else if (timeSeconds < 86400) {
      const hr = Math.floor(timeSeconds / 3600);
      const min = Math.floor((timeSeconds % 3600) / 60);
      timeStr = `${hr}h ${min}m`;
    } else {
      const days = Math.floor(timeSeconds / 86400);
      const hr = Math.floor((timeSeconds % 86400) / 3600);
      timeStr = `${days}d ${hr}h`;
    }
    
    console.log(`${level.toString().padStart(2, ' ')}    | ${formatNumber(xpNeeded).padStart(8, ' ')} XP | ${formatNumber(monstersNeeded).padStart(7, ' ')} | ${timeStr}`);
  }
}

// Teste específico para os monstros reais do jogo
if (testMode === 7 || testMode === 0) {
  console.log("\n=== Análise de Monstros Reais do Jogo ===");
  
  // Tabela comparativa
  console.log("\n--- Informações de Monstros ---");
  console.log("Monstro             | Nível | HP | Dano | Defesa | XP Base");
  console.log("-----------------------------------------------------");
  console.log(`${MONSTERS.BLACK_MIST_ZOMBIE.NAME.padEnd(20)} | ${('1').padStart(3)} | ${MONSTERS.BLACK_MIST_ZOMBIE.HP.toString().padStart(3)} | ${MONSTERS.BLACK_MIST_ZOMBIE.DAMAGE.toString().padStart(4)} | ${MONSTERS.BLACK_MIST_ZOMBIE.DEFENSE.toString().padStart(6)} | ${MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD.toString().padStart(6)}`);
  console.log(`${MONSTERS.SPIDER.NAME.padEnd(20)} | ${('3').padStart(3)} | ${MONSTERS.SPIDER.HP.toString().padStart(3)} | ${MONSTERS.SPIDER.DAMAGE.toString().padStart(4)} | ${MONSTERS.SPIDER.DEFENSE.toString().padStart(6)} | ${MONSTERS.SPIDER.XP_REWARD.toString().padStart(6)}`);
  
  // Quantos monstros reais para subir cada nível
  console.log("\n--- Quantidade de Monstros para Subir de Nível ---");
  
  for (let level = 1; level <= 10; level++) {
    const xpForNextLevel = getXpForLevel(level + 1);
    
    // Zumbis
    const zombieXpAdjusted = calculateAdjustedXp(1, MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD, level);
    const zombiesNeeded = Math.ceil(xpForNextLevel / zombieXpAdjusted);
    
    // Aranhas
    const spiderXpAdjusted = calculateAdjustedXp(3, MONSTERS.SPIDER.XP_REWARD, level);
    const spidersNeeded = Math.ceil(xpForNextLevel / spiderXpAdjusted);
    
    // Estimativa de tempo (assumindo 45 segundos por monstro)
    const timeWithZombies = Math.ceil(zombiesNeeded * 45);
    const timeWithSpiders = Math.ceil(spidersNeeded * 45);
    
    // Formato de tempo
    const formatTime = (seconds) => {
      if (seconds < 60) return `${seconds}s`;
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
      return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
    };
    
    console.log(`Nível ${level} → ${level+1} (${xpForNextLevel} XP):`);
    console.log(`  - Zumbis: ${zombiesNeeded} (${formatTime(timeWithZombies)})`);
    console.log(`  - Aranhas: ${spidersNeeded} (${formatTime(timeWithSpiders)})`);
  }
  
  // Simulações para quests
  console.log("\n--- Simulações de Quests ---");
  
  // Diferentes cenários de quests
  const questScenarios = [
    { name: "Matar 10 Zumbis", reward: 10 * MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD },
    { name: "Matar 5 Aranhas", reward: 5 * MONSTERS.SPIDER.XP_REWARD },
    { name: "Limpar Caverna (20 Zumbis + 10 Aranhas)", reward: 20 * MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD + 10 * MONSTERS.SPIDER.XP_REWARD },
    { name: "Quest Épica (50 Zumbis + 25 Aranhas)", reward: 50 * MONSTERS.BLACK_MIST_ZOMBIE.XP_REWARD + 25 * MONSTERS.SPIDER.XP_REWARD },
  ];
  
  for (let level = 1; level <= 5; level++) {
    console.log(`\nPara um jogador nível ${level}:`);
    const xpForNextLevel = getXpForLevel(level + 1);
    
    for (const quest of questScenarios) {
      const percentOfLevel = ((quest.reward / xpForNextLevel) * 100).toFixed(1);
      console.log(`  - ${quest.name}: ${quest.reward} XP (${percentOfLevel}% do próximo nível)`);
    }
  }
} 