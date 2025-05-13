/**
 * Habilidade de teia da aranha
 * Reduz a velocidade do alvo em 60% por 3 segundos
 * 
 * @param {Object} monster - A aranha que lançou a teia
 * @param {Object} target - O alvo da teia
 * @param {Object} gameWorld - Referência ao mundo do jogo (não usado atualmente)
 */
export function webShotSkill(monster, target, gameWorld) {
  if (!target) {
    console.error('WebShotSkill: Alvo não definido');
    return;
  }
  
  // Verificar se o alvo tem o método applyEffect
  if (typeof target.applyEffect !== 'function') {
    console.error(`WebShotSkill: Alvo ${target.id} não possui método applyEffect`);
    return;
  }
  
  // Aplicar slow por 3 segundos (redução de 60% na velocidade)
  try {
    target.applyEffect({ 
      type: 'slow', 
      duration: 3000, 
      value: 0.4 
    });
    if (global.combatEffectsBuffer) {
      global.combatEffectsBuffer.push({
        sourceId: monster.id,
        targetId: target.id,
        skillId: 0,
        value: 3000,
        effectType: 2, // Status
        statusType: 1  // Slow/Frost
      });
    }
    console.log(`WebShotSkill: Aranha ${monster.id} aplicou slow em ${target.id} por 3 segundos`);
  } catch (error) {
    console.error('WebShotSkill: Erro ao aplicar efeito slow:', error);
  }
} 