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
    console.log(`WebShotSkill: Aranha ${monster.id} aplicou slow em ${target.id} por 3 segundos`);
    
    // Emitir texto flutuante para mostrar o efeito
    if (global.server) {
      global.server.emit('combat:floatingText', {
        targetId: target.id,
        targetType: target.type || 'player',
        text: 'Lento',
        color: '#aaccff'
      });
    }
  } catch (error) {
    console.error('WebShotSkill: Erro ao aplicar efeito slow:', error);
  }
} 