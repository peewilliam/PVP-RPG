// FireballSkill.js - Toon Fireball Effect
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

const activeProjectiles = [];

export function spawnFireballEffect(origin, target, scene, effect = {}) {
  console.log('[DEBUG] Criando efeito de Bola de Fogo', 
    'Origem:', origin instanceof THREE.Vector3 ? `Vector3(${origin.x.toFixed(2)}, ${origin.y.toFixed(2)}, ${origin.z.toFixed(2)})` : origin,
    'Alvo:', target instanceof THREE.Vector3 ? `Vector3(${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)})` : target
  );
  
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);

  // Fireball maior
  const coreGeometry = new THREE.SphereGeometry(0.5, 24, 24); // Raio aumentado
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6600,
    emissive: 0xff3300,
    emissiveIntensity: 2.2, // Mais brilho para o Bloom
    roughness: 0.3,
    metalness: 0.15
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.position.copy(originPos);

  // Fire aura maior
  const fireParticles = new THREE.Group();
  const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.6 });
  for (let i = 0; i < 14; i++) {
    const pGeo = new THREE.SphereGeometry(0.12 + Math.random() * 0.18, 10, 10); // Partículas maiores
    const pMesh = new THREE.Mesh(pGeo, particleMaterial.clone());
    pMesh.position.set(
      (Math.random() - 0.5) * 1.0,
      (Math.random() - 0.5) * 1.0,
      (Math.random() - 0.5) * 1.0
    );
    fireParticles.add(pMesh);
  }
  core.add(fireParticles);
  scene.add(core);

  // Luz mais intensa
  const fireLight = new THREE.PointLight(0xff6600, 2.2, 8);
  core.add(fireLight);

  // Movimento
  const dir = new THREE.Vector3().subVectors(targetPos, originPos).normalize();
  const speed = effect.speed || SKILLS.FIREBALL.SPEED || 18;
  const maxDist = effect.maxDist || SKILLS.FIREBALL.RANGE || 40;

  const projectile = {
    mesh: core,
    dir,
    speed,
    start: performance.now(),
    maxDist,
    origin: originPos.clone(),
    type: 'fireball',
    aura: fireParticles,
    target: targetPos.clone(),
    exploded: false // Novo flag
  };

  activeProjectiles.push(projectile);
  return projectile;
}

// Função auxiliar para explosão
function createFireballExplosion(position, scene) {
  // Esfera emissiva que expande e some
  const geo = new THREE.SphereGeometry(0.6, 20, 20);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffbb33,
    emissive: 0xff6600,
    emissiveIntensity: 3.5,
    transparent: true,
    opacity: 0.85,
    roughness: 0.2
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  scene.add(mesh);
  // Anima expansão e fade
  const start = performance.now();
  const duration = 420;
  function animate() {
    const now = performance.now();
    const t = Math.min((now - start) / duration, 1);
    mesh.scale.setScalar(1.0 + t * 2.2);
    mat.opacity = 0.85 * (1 - t);
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

// Função auxiliar para fumaça
function createSmokeEffect(position, scene) {
  const group = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const geo = new THREE.SphereGeometry(0.18 + Math.random() * 0.22, 8, 8);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.38 + Math.random() * 0.18,
      roughness: 1.0
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    mesh.position.x += (Math.random() - 0.5) * 0.7;
    mesh.position.y += Math.random() * 0.5;
    mesh.position.z += (Math.random() - 0.5) * 0.7;
    group.add(mesh);
    // Anima fade out
    const start = performance.now();
    const duration = 900 + Math.random() * 400;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.scale.setScalar(1.0 + t * 1.2);
      mat.opacity = (0.38 + Math.random() * 0.18) * (1 - t);
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
  setTimeout(() => scene.remove(group), 1500);
}

export function updateFireballProjectiles(delta, scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type !== 'fireball') continue;

    // Movimento
    p.mesh.position.addScaledVector(p.dir, p.speed * delta);
    p.mesh.rotation.y += delta * 5;
    p.mesh.rotation.x += delta * 3;

    // Animate aura
    for (let j = 0; j < p.aura.children.length; j++) {
      const auraParticle = p.aura.children[j];
      auraParticle.scale.setScalar(0.9 + Math.sin(performance.now() * 0.005 + j) * 0.1);
    }

    // Detecta colisão com o alvo (explosão)
    if (!p.exploded && p.mesh.position.distanceTo(p.target) < 0.7) {
      p.exploded = true;
      createFireballExplosion(p.mesh.position, scene);
      createSmokeEffect(p.mesh.position, scene);
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
      continue;
    }

    // Remove se passar da distância máxima
    if (p.mesh.position.distanceTo(p.origin) > p.maxDist) {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

export function clearFireballProjectiles(scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type === 'fireball') {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
}

export function getActiveFireballProjectiles() {
  return activeProjectiles.filter(p => p.type === 'fireball');
}
