/**
 * Script de teste para efeitos visuais
 * Executa com: node debug/testEffects.js
 * 
 * Este script simula um cenário de combate onde diferentes quantidades de dano
 * são aplicadas e textos flutuantes são criados para visualização do efeito.
 */

// Simula um evento de dano pequeno (1-10)
const smallDamage = {
  targetId: 'monster1',
  targetType: 'monster',
  damage: Math.floor(Math.random() * 10) + 1,
  position: { x: 10, y: 0.5, z: 10 }
};

// Simula um evento de dano médio (10-30)
const mediumDamage = {
  targetId: 'monster2',
  targetType: 'monster',
  damage: Math.floor(Math.random() * 20) + 10,
  position: { x: 15, y: 0.5, z: 15 }
};

// Simula um evento de dano grande (30-60)
const largeDamage = {
  targetId: 'monster3',
  targetType: 'monster',
  damage: Math.floor(Math.random() * 30) + 30,
  position: { x: 20, y: 0.5, z: 20 }
};

// Simula um evento de dano crítico (60-100)
const criticalDamage = {
  targetId: 'monster4',
  targetType: 'monster',
  damage: Math.floor(Math.random() * 40) + 60,
  position: { x: 25, y: 0.5, z: 25 }
};

// Instruções para testar manualmente
console.log('==== INSTRUÇÕES DE TESTE ====');
console.log('1. Inicie o cliente e servidor do jogo');
console.log('2. Entre no jogo e encontre um monstro');
console.log('3. Use diferentes habilidades (teclas 1-4) para visualizar os efeitos');
console.log('4. Observe especialmente o efeito de METEOR_STORM (tecla 4)');
console.log('5. Verifique se os textos de dano estão visualmente corretos');
console.log('6. Confira se não há piscar da tela inteira');
console.log('');
console.log('==== VALORES DE TESTE ====');
console.log('Dano pequeno:', smallDamage);
console.log('Dano médio:', mediumDamage);
console.log('Dano grande:', largeDamage);
console.log('Dano crítico:', criticalDamage);
console.log('');

// Cálculo de visualização para cada tipo de dano
console.log('==== PROPRIEDADES VISUAIS ====');

function calculateVisualProperties(damage) {
  // Cálculo do tamanho do texto flutuante
  const damageValue = parseInt(damage) || 0;
  const sizeMultiplier = Math.min(0.7 + (damageValue / 50), 1.5);
  
  return {
    size: sizeMultiplier,
    actualSize: sizeMultiplier * 1.5, // Fator aplicado no código
    fontSize: Math.round(28 + (damageValue / 10)), // Aproximação do efeito visual
    duration: 1200, // ms
    fadeStartTime: 600 // ms (50% da duração)
  };
}

console.log('Dano pequeno:', calculateVisualProperties(smallDamage.damage));
console.log('Dano médio:', calculateVisualProperties(mediumDamage.damage));
console.log('Dano grande:', calculateVisualProperties(largeDamage.damage));
console.log('Dano crítico:', calculateVisualProperties(criticalDamage.damage)); 