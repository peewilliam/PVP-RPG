export function spiderLeapSkill(monster, target, gameWorld) {
  if (!target) return;
  
  // Em vez de teleportar, calcular direção e distância até o alvo
  const dx = target.position.x - monster.position.x;
  const dz = target.position.z - monster.position.z;
  const dist = Math.sqrt(dx * dx + dz * dz);
  
  // Nota: O dano não é mais aplicado aqui
  // É aplicado no método endLeap da classe Spider
  
  // Aumenta velocidade da aranha em 3x na direção do alvo
  const speedMultiplier = 3;
  monster.velocity.x = (dx / dist) * monster.moveSpeed * speedMultiplier;
  monster.velocity.z = (dz / dist) * monster.moveSpeed * speedMultiplier;
  
  // Rotacionar a aranha para olhar para o alvo
  monster.rotation = Math.atan2(dz, dx);
  
  // Registra que está saltando e qual o alvo
  monster.isLeaping = true;
  monster.leapTargetId = target.id;
  monster.leapStartTime = Date.now();
  monster.leapDuration = 500; // 500ms, mesmo tempo da animação no cliente
  
  console.log(`SpiderLeapSkill: Aranha ${monster.id} saltando para ${target.id}`);
} 