// client/src/world/assets/BossPlaceholder.js
// Asset: Placeholder visual para Bosses (esfera grande vermelha com anel dourado)
import * as THREE from 'three';

export function createBossPlaceholder({ scale = { x: 1.5, y: 1.5, z: 1.5 } } = {}) {
  const group = new THREE.Group();

  // Corpo principal (esfera vermelha)
  const sphereGeometry = new THREE.SphereGeometry(0.8, 24, 16);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: '#b80000', emissive: '#ff2222', roughness: 0.4 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.y = 0.8;
  group.add(sphere);

  // Anel dourado na base
  const ringGeometry = new THREE.TorusGeometry(0.9, 0.08, 12, 32);
  const ringMaterial = new THREE.MeshStandardMaterial({ color: '#ffd700', metalness: 0.7, roughness: 0.2 });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.1;
  group.add(ring);

  // Ajuste de escala
  group.scale.set(scale.x, scale.y, scale.z);

  return group;
} 