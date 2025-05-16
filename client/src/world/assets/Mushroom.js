// client/src/world/assets/Mushroom.js
// Asset: Cogumelo decorativo (MUSHROOM)
import * as THREE from 'three';

export function createMushroom({ scale = { x: 1, y: 1, z: 1 } } = {}) {
  const group = new THREE.Group();

  // Haste
  const stemGeometry = new THREE.CylinderGeometry(0.05, 0.07, 0.18, 8);
  const stemMaterial = new THREE.MeshStandardMaterial({ color: '#f5f5dc' });
  const stem = new THREE.Mesh(stemGeometry, stemMaterial);
  stem.position.y = 0.09;
  group.add(stem);

  // Chapéu
  const capGeometry = new THREE.SphereGeometry(0.13, 12, 10, 0, Math.PI * 2, 0, Math.PI / 1.2);
  const capMaterial = new THREE.MeshStandardMaterial({ color: '#d32f2f' });
  const cap = new THREE.Mesh(capGeometry, capMaterial);
  cap.position.y = 0.19;
  group.add(cap);

  // Pintas brancas
  for (let i = 0; i < 4; i++) {
    const dotGeometry = new THREE.SphereGeometry(0.025, 6, 6);
    const dotMaterial = new THREE.MeshStandardMaterial({ color: '#fff' });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.position.set(
      Math.cos((i / 4) * Math.PI * 2) * 0.09,
      0.22 + Math.random() * 0.03,
      Math.sin((i / 4) * Math.PI * 2) * 0.09
    );
    group.add(dot);
  }

  group.scale.set(scale.x, scale.y, scale.z);
  return group;
} 