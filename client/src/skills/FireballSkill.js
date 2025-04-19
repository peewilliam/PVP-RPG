// FireballSkill.js - Toon Fireball Effect
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

const activeProjectiles = [];

export function spawnFireballEffect(origin, target, scene, effect = {}) {
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);

  // Create core fireball geometry
  const coreGeometry = new THREE.SphereGeometry(0.25, 16, 16);
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0xff6600,
    emissive: 0xff3300,
    emissiveIntensity: 1.5,
    roughness: 0.4,
    metalness: 0.1
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.position.copy(originPos);

  // Create fire aura using sprite particles
  const fireParticles = new THREE.Group();
  const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.5 });
  for (let i = 0; i < 10; i++) {
    const pGeo = new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 8, 8);
    const pMesh = new THREE.Mesh(pGeo, particleMaterial);
    pMesh.position.set(
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.6
    );
    fireParticles.add(pMesh);
  }
  core.add(fireParticles);
  scene.add(core);

  // Add firelight
  const fireLight = new THREE.PointLight(0xff6600, 1, 5);
  core.add(fireLight);

  // Movement
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
    aura: fireParticles
  };

  activeProjectiles.push(projectile);
  return projectile;
}

export function updateFireballProjectiles(delta, scene) {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type !== 'fireball') continue;

    p.mesh.position.addScaledVector(p.dir, p.speed * delta);
    p.mesh.rotation.y += delta * 5;
    p.mesh.rotation.x += delta * 3;

    // Animate aura
    for (let j = 0; j < p.aura.children.length; j++) {
      const auraParticle = p.aura.children[j];
      auraParticle.scale.setScalar(0.9 + Math.sin(performance.now() * 0.005 + j) * 0.1);
    }

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
