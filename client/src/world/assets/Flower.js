// client/src/world/assets/Flower.js
// Asset: Flor decorativa (FLOWER)
import * as THREE from 'three';

export function createFlower({ scale = { x: 1, y: 1, z: 1 } } = {}) {
  const group = new THREE.Group();

  // Haste
  const stemGeometry = new THREE.CylinderGeometry(0.03, 0.04, 0.35, 6);
  const stemMaterial = new THREE.MeshStandardMaterial({ color: '#3a7a2a' });
  const stem = new THREE.Mesh(stemGeometry, stemMaterial);
  stem.position.y = 0.175;
  group.add(stem);

  // Pétalas (escolhe cor aleatória)
  const colors = ['#ffe066', '#ff66c4', '#66b3ff'];
  const petalColor = colors[Math.floor(Math.random() * colors.length)];
  const petalGeometry = new THREE.SphereGeometry(0.09, 8, 8);
  const petalMaterial = new THREE.MeshStandardMaterial({ color: petalColor });
  const petal = new THREE.Mesh(petalGeometry, petalMaterial);
  petal.position.y = 0.36;
  group.add(petal);

  group.scale.set(scale.x, scale.y, scale.z);
  return group;
} 