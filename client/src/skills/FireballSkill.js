// FireballSkill.js - Efeito visual da habilidade Bola de Fogo
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

// Lista de projéteis ativos para atualização
const activeProjectiles = [];

/**
 * Cria o efeito visual de uma bola de fogo
 * @param {THREE.Vector3} origin - Posição de origem do projétil
 * @param {THREE.Vector3} target - Posição alvo do projétil
 * @param {Object} effect - Configurações adicionais do efeito
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o projétil
 * @returns {Object} Dados do projétil criado
 */
export function spawnFireballEffect(origin, target, scene, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);
  
  // Cria a geometria da bola de fogo
  const geometry = new THREE.SphereGeometry(0.25, 16, 16);
  const material = new THREE.MeshStandardMaterial({ 
    color: effect.color || 0xff6600, 
    emissive: effect.color || 0xff2200,
    emissiveIntensity: 1.2,
  });
  
  // Cria o mesh e posiciona na origem
  const fireball = new THREE.Mesh(geometry, material);
  fireball.position.copy(originPos);
  scene.add(fireball);
  
  // Calcula o vetor direção normalizado
  const dir = new THREE.Vector3().subVectors(targetPos, originPos).normalize();
  
  // Configura a velocidade e distância máxima
  const speed = effect.speed || SKILLS.FIREBALL.SPEED || 18;
  const maxDist = effect.maxDist || SKILLS.FIREBALL.RANGE || 40;
  
  // Adiciona o projétil à lista de projéteis ativos
  const projectile = { 
    mesh: fireball, 
    dir, 
    speed, 
    start: performance.now(), 
    maxDist, 
    origin: originPos.clone(),
    type: 'fireball'
  };
  
  activeProjectiles.push(projectile);
  return projectile;
}

/**
 * Atualiza as posições e ciclo de vida dos projéteis de fogo
 * @param {number} delta - Tempo desde o último frame em segundos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis expirados
 */
export function updateFireballProjectiles(delta, scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type !== 'fireball') continue;
    
    // Atualiza posição com base na velocidade
    p.mesh.position.addScaledVector(p.dir, p.speed * delta);
    
    // Adiciona efeito de rotação para mais dinamismo
    p.mesh.rotation.x += delta * 5;
    p.mesh.rotation.z += delta * 3;
    
    // Remove o projétil se estiver além da distância máxima
    if (p.mesh.position.distanceTo(p.origin) > p.maxDist) {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

/**
 * Limpa todos os projéteis de bola de fogo ativos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis
 */
export function clearFireballProjectiles(scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type === 'fireball') {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

/**
 * Obtém a lista de projéteis ativos
 * @returns {Array} Lista de projéteis ativos
 */
export function getActiveFireballProjectiles() {
  return activeProjectiles.filter(p => p.type === 'fireball');
} 