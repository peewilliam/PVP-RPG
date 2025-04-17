// MeteorStormSkill.js - Efeito visual da habilidade Chuva de Meteoros
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

/**
 * Cria o efeito visual de uma chuva de meteoros
 * @param {THREE.Vector3} origin - Posição de origem da habilidade
 * @param {THREE.Vector3} target - Posição alvo da habilidade
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o efeito
 * @param {Object} effect - Configurações adicionais do efeito
 * @returns {Object} Resultado da criação do efeito
 */
export function spawnMeteorStormEffect(origin, target, scene, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);
  
  // Cria o indicador de área (círculo no chão)
  const areaRadius = effect.radius || SKILLS.METEOR_STORM.AREA_RADIUS || 6;
  const areaGeometry = new THREE.CircleGeometry(areaRadius, 32);
  const areaMaterial = new THREE.MeshBasicMaterial({
    color: 0xff6600, // Laranja
    transparent: true,
    opacity: 0.3
  });
  
  const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
  areaMesh.position.set(targetPos.x, 0.1, targetPos.z); // Ligeiramente acima do chão
  areaMesh.rotation.x = -Math.PI / 2; // Rotaciona para ficar horizontal
  scene.add(areaMesh);
  
  // Duração total do efeito
  const duration = effect.duration || SKILLS.METEOR_STORM.DURATION || 5000;
  
  // Número de meteoros a criar
  const meteorCount = effect.meteorCount || SKILLS.METEOR_STORM.METEORS || 10;
  
  // Intervalo entre meteoros
  const meteorInterval = effect.meteorInterval || SKILLS.METEOR_STORM.METEOR_INTERVAL || 500;
  
  // Inicia a criação de meteoros
  startMeteorSequence(targetPos, areaRadius, scene, meteorCount, meteorInterval);
  
  // Remove o indicador de área após a duração da habilidade
  setTimeout(() => {
    if (scene.getObjectById(areaMesh.id)) {
      scene.remove(areaMesh);
      areaMaterial.dispose();
      areaGeometry.dispose();
    }
  }, duration);
  
  return { success: true, areaMesh, duration };
}

/**
 * Inicia uma sequência de criação de meteoros na área
 * @param {THREE.Vector3} center - Centro da área de efeito
 * @param {number} radius - Raio da área
 * @param {THREE.Scene} scene - Cena para adicionar os meteoros
 * @param {number} count - Número de meteoros a criar
 * @param {number} interval - Intervalo entre meteoros em ms
 */
function startMeteorSequence(center, radius, scene, count, interval) {
  let meteorIndex = 0;
  
  const createMeteor = () => {
    if (meteorIndex >= count) return;
    
    // Posição aleatória dentro do círculo
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radius * 0.9; // 90% do raio para manter dentro da área
    const x = center.x + Math.cos(angle) * distance;
    const z = center.z + Math.sin(angle) * distance;
    
    // Cria o meteoro
    createSingleMeteor(new THREE.Vector3(x, 15, z), new THREE.Vector3(x, 0, z), scene);
    
    // Agenda o próximo meteoro
    meteorIndex++;
    if (meteorIndex < count) {
      setTimeout(createMeteor, interval);
    }
  };
  
  // Inicia a sequência
  createMeteor();
}

/**
 * Cria um único meteoro
 * @param {THREE.Vector3} start - Posição inicial (no ar)
 * @param {THREE.Vector3} end - Posição final (no chão)
 * @param {THREE.Scene} scene - Cena para adicionar o meteoro
 */
function createSingleMeteor(start, end, scene) {
  // Cria a geometria do meteoro (esfera irregular)
  const meteorGeometry = new THREE.SphereGeometry(0.4, 8, 8);
  const meteorMaterial = new THREE.MeshStandardMaterial({
    color: 0xff4400,
    emissive: 0xff2200,
    emissiveIntensity: 1,
    roughness: 0.7
  });
  
  // Adiciona deformação à esfera para parecer mais irregular
  const vertices = meteorGeometry.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i);
    const y = vertices.getY(i);
    const z = vertices.getZ(i);
    
    // Deforma ligeiramente
    vertices.setX(i, x + (Math.random() - 0.5) * 0.1);
    vertices.setY(i, y + (Math.random() - 0.5) * 0.1);
    vertices.setZ(i, z + (Math.random() - 0.5) * 0.1);
  }
  
  // Atualiza as normais para refletir as deformações
  meteorGeometry.computeVertexNormals();
  
  // Cria o meteoro
  const meteor = new THREE.Mesh(meteorGeometry, meteorMaterial);
  meteor.position.copy(start);
  scene.add(meteor);
  
  // Adiciona rastro/cauda de fogo (partículas)
  const trailGeometry = new THREE.SphereGeometry(0.1, 8, 8);
  const trailMaterial = new THREE.MeshBasicMaterial({
    color: 0xff6600,
    transparent: true,
    opacity: 0.7
  });
  
  const trail = new THREE.Group();
  const trailLength = 6;
  const trailSegments = [];
  
  for (let i = 0; i < trailLength; i++) {
    const segment = new THREE.Mesh(trailGeometry, trailMaterial.clone());
    segment.material.opacity = 0.7 - (i * 0.1);
    segment.scale.set(1 - (i * 0.1), 1 - (i * 0.1), 1 - (i * 0.1));
    trail.add(segment);
    trailSegments.push(segment);
  }
  
  scene.add(trail);
  
  // Direção e velocidade
  const direction = new THREE.Vector3().subVectors(end, start).normalize();
  const speed = 15; // Unidades por segundo
  const fallDistance = start.y - end.y;
  const fallTime = fallDistance / speed; // Tempo em segundos
  
  // Animação do meteoro caindo
  const startTime = Date.now();
  const endTime = startTime + (fallTime * 1000);
  
  function animateMeteor() {
    const now = Date.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / (fallTime * 1000), 1);
    
    if (progress < 1) {
      // Atualiza posição do meteoro
      const newPos = new THREE.Vector3().lerpVectors(start, end, progress);
      meteor.position.copy(newPos);
      
      // Atualiza posição dos segmentos do rastro
      for (let i = 0; i < trailSegments.length; i++) {
        const trailProgress = Math.max(0, progress - (i * 0.02));
        const trailPos = new THREE.Vector3().lerpVectors(start, end, trailProgress);
        trailSegments[i].position.copy(trailPos);
      }
      
      // Continua a animação
      requestAnimationFrame(animateMeteor);
    } else {
      // Cria efeito de explosão
      createExplosion(end, scene);
      
      // Remove o meteoro e seu rastro
      scene.remove(meteor);
      scene.remove(trail);
      
      // Libera recursos
      meteorGeometry.dispose();
      meteorMaterial.dispose();
      trailGeometry.dispose();
      
      for (let i = 0; i < trailSegments.length; i++) {
        trailSegments[i].material.dispose();
      }
    }
  }
  
  // Inicia a animação
  animateMeteor();
}

/**
 * Cria um efeito de explosão
 * @param {THREE.Vector3} position - Posição da explosão
 * @param {THREE.Scene} scene - Cena para adicionar a explosão
 */
function createExplosion(position, scene) {
  // Geometria da explosão (esfera que expande)
  const explosionGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const explosionMaterial = new THREE.MeshBasicMaterial({
    color: 0xff9900,
    transparent: true,
    opacity: 0.8
  });
  
  const explosion = new THREE.Mesh(explosionGeometry, explosionMaterial);
  explosion.position.copy(position);
  explosion.position.y += 0.2; // Ligeiramente acima do chão
  scene.add(explosion);
  
  // Duração da explosão
  const duration = 600; // ms
  const startTime = Date.now();
  const endTime = startTime + duration;
  const maxScale = 2.0;
  
  function animateExplosion() {
    const now = Date.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    if (progress < 1) {
      // Expande a explosão
      const scale = maxScale * progress;
      explosion.scale.set(scale, scale, scale);
      
      // Reduz a opacidade conforme expande
      explosionMaterial.opacity = 0.8 * (1 - progress);
      
      // Continua a animação
      requestAnimationFrame(animateExplosion);
    } else {
      // Remove a explosão
      scene.remove(explosion);
      
      // Libera recursos
      explosionGeometry.dispose();
      explosionMaterial.dispose();
    }
  }
  
  // Inicia a animação da explosão
  animateExplosion();
} 