// client/src/world/assets/DeadTree.js
// Asset: Árvore Morta para o Pântano das Ruínas
import * as THREE from 'three';

export function createDeadTree({ scale = { x: 1, y: 2, z: 1 } } = {}) {
  const group = new THREE.Group();

  // Tronco (cilindro mais escuro)
  const trunkGeometry = new THREE.CylinderGeometry(0.25, 0.35, 2, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#4b3b2a' });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.y = 1;
  group.add(trunk);

  // Copa morta (cone marrom acinzentado)
  const crownGeometry = new THREE.ConeGeometry(0.7, 1.2, 8);
  const crownMaterial = new THREE.MeshStandardMaterial({ color: '#7a6e5a', flatShading: true });
  const crown = new THREE.Mesh(crownGeometry, crownMaterial);
  crown.position.y = 2.2;
  group.add(crown);

  // Ajuste de escala
  group.scale.set(scale.x, scale.y, scale.z);

  return group;
} 