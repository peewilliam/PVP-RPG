// IceSpikeSkill.js - Efeito visual da habilidade Estaca de Gelo
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

// Lista de projéteis ativos para atualização
const activeProjectiles = [];

/**
 * Cria o efeito visual de uma estaca de gelo
 * @param {THREE.Vector3} origin - Posição de origem do projétil
 * @param {THREE.Vector3} target - Posição alvo do projétil
 * @param {THREE.Object3D} [caster=null] - Objeto que está conjurando a habilidade (opcional)
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o projétil
 * @param {Object} effect - Configurações adicionais do efeito
 * @returns {Object} Dados do projétil criado
 */
export function spawnIceSpikeEffect(origin, target, scene, caster = null, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);
  
  // Cria a geometria da estaca de gelo
  const geometry = new THREE.ConeGeometry(0.18, 0.8, 12);
  const material = new THREE.MeshStandardMaterial({ 
    color: effect.color || 0x66ccff, 
    emissive: effect.color || 0x3399ff,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.8
  });
  
  // Cria o mesh e posiciona na origem
  const spike = new THREE.Mesh(geometry, material);
  spike.position.copy(originPos);
  
  // Rotaciona para apontar na direção do alvo
  spike.lookAt(targetPos);
  // Adiciona 90 graus na rotação X para apontar o cone para frente
  spike.rotateX(Math.PI / 2);
  
  scene.add(spike);
  
  // Calcula o vetor direção normalizado
  const dir = new THREE.Vector3().subVectors(targetPos, originPos).normalize();
  
  // Configura a velocidade e distância máxima
  const speed = effect.speed || SKILLS.ICE_SPIKE.SPEED || 14;
  const maxDist = effect.maxDist || SKILLS.ICE_SPIKE.RANGE || 30;
  
  // Adiciona o projétil à lista de projéteis ativos
  const projectile = { 
    mesh: spike, 
    dir, 
    speed, 
    start: performance.now(), 
    maxDist, 
    origin: originPos.clone(),
    type: 'ice_spike'
  };
  
  activeProjectiles.push(projectile);
  return projectile;
}

/**
 * Atualiza as posições e ciclo de vida dos projéteis de gelo
 * @param {number} delta - Tempo desde o último frame em segundos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis expirados
 */
export function updateIceSpikeProjectiles(delta, scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type !== 'ice_spike') continue;
    
    // Atualiza posição com base na velocidade
    p.mesh.position.addScaledVector(p.dir, p.speed * delta);
    
    // Remove o projétil se estiver além da distância máxima
    if (p.mesh.position.distanceTo(p.origin) > p.maxDist) {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

/**
 * Limpa todos os projéteis de estaca de gelo ativos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis
 */
export function clearIceSpikeProjectiles(scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type === 'ice_spike') {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

/**
 * Obtém a lista de projéteis ativos
 * @returns {Array} Lista de projéteis ativos
 */
export function getActiveIceSpikeProjectiles() {
  return activeProjectiles.filter(p => p.type === 'ice_spike');
} 