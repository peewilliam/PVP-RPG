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
  
  // --- Efeito de cinzas caindo durante a tempestade ---
  const ashesGroup = new THREE.Group();
  const ashesCount = 32;
  for (let i = 0; i < ashesCount; i++) {
    const geo = new THREE.SphereGeometry(0.07 + Math.random() * 0.04, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      emissive: 0x111111,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.22 + Math.random() * 0.13,
      roughness: 0.8
    });
    const mesh = new THREE.Mesh(geo, mat);
    // Posição inicial aleatória acima da área
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * areaRadius * 0.95;
    mesh.position.set(
      target.x + Math.cos(angle) * r,
      3.5 + Math.random() * 2.5,
      target.z + Math.sin(angle) * r
    );
    ashesGroup.add(mesh);
    // Anima queda lenta
    const yStart = mesh.position.y;
    const yEnd = 0.1 + Math.random() * 0.2;
    const xDrift = (Math.random() - 0.5) * 0.2;
    const zDrift = (Math.random() - 0.5) * 0.2;
    const start = performance.now();
    const ashesDuration = duration * (0.7 + Math.random() * 0.4);
    function animateAsh() {
      const now = performance.now();
      const t = Math.min((now - start) / ashesDuration, 1);
      mesh.position.y = yStart + (yEnd - yStart) * t;
      mesh.position.x += xDrift * 0.01;
      mesh.position.z += zDrift * 0.01;
      mat.opacity = (0.22 + Math.random() * 0.13) * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animateAsh);
      } else {
        ashesGroup.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animateAsh();
  }
  scene.add(ashesGroup);
  // Remove todas as cinzas ao final
  setTimeout(() => {
    scene.remove(ashesGroup);
    ashesGroup.children.forEach(mesh => {
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
  }, duration + 500);
  
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
  // --- Flash circular laranja/vermelho ---
  const flashGeo = new THREE.RingGeometry(0.7, 2.1, 48);
  const flashMat = new THREE.MeshBasicMaterial({
    color: 0xffa040,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const flash = new THREE.Mesh(flashGeo, flashMat);
  flash.position.copy(position);
  flash.position.y += 0.12;
  flash.rotation.x = -Math.PI/2;
  scene.add(flash);
  // Anima expansão e fade
  const flashStart = performance.now();
  const flashDuration = 220;
  function animateFlash() {
    const now = performance.now();
    const t = Math.min((now - flashStart) / flashDuration, 1);
    flash.scale.setScalar(1.0 + t * 2.2);
    flashMat.opacity = 0.45 * (1 - t);
    if (t < 1) {
      requestAnimationFrame(animateFlash);
    } else {
      scene.remove(flash);
      flashGeo.dispose();
      flashMat.dispose();
    }
  }
  animateFlash();

  // --- Partículas de fogo e fumaça ---
  for (let i = 0; i < 18; i++) {
    const isSmoke = Math.random() > 0.5;
    const geo = new THREE.SphereGeometry(isSmoke ? 0.22 : 0.13, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: isSmoke ? 0x333333 : 0xffa040,
      emissive: isSmoke ? 0x222222 : 0xff6600,
      emissiveIntensity: isSmoke ? 0.2 : 1.2,
      transparent: true,
      opacity: isSmoke ? 0.32 : 0.7,
      roughness: isSmoke ? 0.8 : 0.3,
      metalness: isSmoke ? 0.1 : 0.7
    });
    if (!isSmoke) mat.blending = THREE.AdditiveBlending;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    mesh.position.y += 0.2 + Math.random() * 0.2;
    scene.add(mesh);
    // Anima dispersão e fade
    const dir = new THREE.Vector3(
      (Math.random() - 0.5) * 2.2,
      0.5 + Math.random() * 1.2,
      (Math.random() - 0.5) * 2.2
    );
    const start = performance.now();
    const duration = 420 + Math.random() * 180;
    const yStart = mesh.position.y;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.x += dir.x * 0.012;
      mesh.position.y = yStart + dir.y * t * 0.7;
      mesh.position.z += dir.z * 0.012;
      mat.opacity = (isSmoke ? 0.32 : 0.7) * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        scene.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }

  // --- Fragmentos de rocha incandescente saltando ---
  for (let i = 0; i < 7; i++) {
    const geo = new THREE.TetrahedronGeometry(0.13 + Math.random() * 0.07);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffa040,
      emissive: 0xff6600,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.8,
      roughness: 0.5,
      metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    mesh.position.y += 0.18 + Math.random() * 0.12;
    scene.add(mesh);
    // Anima salto e fade
    const dir = new THREE.Vector3(
      (Math.random() - 0.5) * 1.2,
      0.7 + Math.random() * 0.7,
      (Math.random() - 0.5) * 1.2
    );
    const start = performance.now();
    const duration = 520 + Math.random() * 180;
    const yStart = mesh.position.y;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.x += dir.x * 0.012;
      mesh.position.y = yStart + dir.y * t * 0.7 - 1.2 * t * t;
      mesh.position.z += dir.z * 0.012;
      mat.opacity = 0.8 * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        scene.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }

  // --- Marca de queimado temporária no chão ---
  const scorchGeo = new THREE.CircleGeometry(1.2 + Math.random() * 0.7, 24);
  const scorchMat = new THREE.MeshBasicMaterial({
    color: 0x222211,
    transparent: true,
    opacity: 0.32,
    depthWrite: false
  });
  const scorch = new THREE.Mesh(scorchGeo, scorchMat);
  scorch.position.copy(position);
  scorch.position.y += 0.09;
  scorch.rotation.x = -Math.PI/2;
  scene.add(scorch);
  // Fade out da marca
  const scorchStart = performance.now();
  const scorchDuration = 1800;
  function animateScorch() {
    const now = performance.now();
    const t = Math.min((now - scorchStart) / scorchDuration, 1);
    scorchMat.opacity = 0.32 * (1 - t);
    if (t < 1) {
      requestAnimationFrame(animateScorch);
    } else {
      scene.remove(scorch);
      scorchGeo.dispose();
      scorchMat.dispose();
    }
  }
  animateScorch();
}

/**
 * Aplica efeito visual de queimadura em um inimigo
 * @param {THREE.Object3D} enemyMesh - Mesh do inimigo
 * @param {THREE.Scene} scene
 * @param {number} duration - Duração do efeito em ms
 */
export function applyBurnEffect(enemyMesh, scene, duration = 1200) {
  if (!enemyMesh) return;
  // Overlay avermelhado/brilhante
  const overlayMat = new THREE.MeshBasicMaterial({
    color: 0xff4400,
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  // Aplica overlay em todos os materiais do mesh
  const originalMaterials = Array.isArray(enemyMesh.material) ? enemyMesh.material.slice() : [enemyMesh.material];
  enemyMesh.material = [ ...originalMaterials, overlayMat ];
  // Partículas flamejantes subindo
  const pos = enemyMesh.position.clone();
  createBurnParticles(pos, scene);
  // Remove overlay após a duração
  setTimeout(() => {
    if (enemyMesh.material && Array.isArray(enemyMesh.material)) {
      enemyMesh.material = originalMaterials;
    }
  }, duration);
}

/**
 * Cria partículas flamejantes subindo
 */
function createBurnParticles(pos, scene) {
  const group = new THREE.Group();
  for (let i = 0; i < 10; i++) {
    const geo = new THREE.SphereGeometry(0.06 + Math.random() * 0.04, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffa040,
      emissive: 0xff6600,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.7 + Math.random() * 0.2,
      roughness: 0.3,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.position.x += (Math.random() - 0.5) * 0.5;
    mesh.position.z += (Math.random() - 0.5) * 0.5;
    mesh.position.y += 0.2 + Math.random() * 0.2;
    group.add(mesh);
    // Anima subida e fade
    const start = performance.now();
    const duration = 420 + Math.random() * 180;
    const yStart = mesh.position.y;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.y = yStart + t * (0.7 + Math.random() * 0.3);
      mat.opacity = (0.7 + Math.random() * 0.2) * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        group.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }
  scene.add(group);
  setTimeout(() => scene.remove(group), 900);
} 