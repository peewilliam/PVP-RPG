// client/src/world/assets/Trunk.js
// Asset: Tronco Caído (TRUNK)
import * as THREE from 'three';

export function createTrunk({ scale = { x: 1, y: 1, z: 1 } } = {}) {
  const group = new THREE.Group();

  // Tronco principal (cilindro deitado)
  const trunkGeometry = new THREE.CylinderGeometry(0.18, 0.22, 1.4, 10);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#5a3c1a', roughness: 0.6 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.rotation.z = Math.PI / 2;
  trunk.position.y = 0.18;
  group.add(trunk);

  // Detalhe: corte na ponta (tampa)
  const capGeometry = new THREE.CircleGeometry(0.18, 10);
  const capMaterial = new THREE.MeshStandardMaterial({ color: '#7a5a3a', roughness: 0.5 });
  const cap1 = new THREE.Mesh(capGeometry, capMaterial);
  cap1.position.set(0.7, 0, 0);
  cap1.rotation.y = Math.PI / 2;
  group.add(cap1);
  const cap2 = new THREE.Mesh(capGeometry, capMaterial);
  cap2.position.set(-0.7, 0, 0);
  cap2.rotation.y = -Math.PI / 2;
  group.add(cap2);

  group.scale.set(scale.x, scale.y, scale.z);
  return group;
} 