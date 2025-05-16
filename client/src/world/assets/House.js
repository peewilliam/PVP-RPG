import * as THREE from 'three';

export function createHouse({ position = { x: 0, y: 0, z: 0 }, scale = { x: 6, y: 5, z: 6 }, rotation = 0 } = {}) {
  const group = new THREE.Group();

  // Base da casa (parede)
  const baseGeometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
  const baseMaterial = new THREE.MeshStandardMaterial({ color: '#e2c290' });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.set(0, scale.y / 2, 0);
  group.add(base);

  // Telhado (pyramid/cone)
  const roofGeometry = new THREE.ConeGeometry(scale.x * 0.7, scale.y * 0.7, 4);
  const roofMaterial = new THREE.MeshStandardMaterial({ color: '#b71c1c' });
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.position.set(0, scale.y + (scale.y * 0.35), 0);
  roof.rotation.y = Math.PI / 4; // Alinha o telhado com a base
  group.add(roof);

  // Porta
  const doorGeometry = new THREE.BoxGeometry(1.2, 2, 0.3);
  const doorMaterial = new THREE.MeshStandardMaterial({ color: '#8d5524' });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(0, 1, scale.z / 2 + 0.16);
  group.add(door);

  // Janela
  const windowGeometry = new THREE.BoxGeometry(1, 1, 0.2);
  const windowMaterial = new THREE.MeshStandardMaterial({ color: '#90caf9' });
  const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
  windowMesh.position.set(-1.8, 2.5, scale.z / 2 + 0.21);
  group.add(windowMesh);

  // Aplica rotação e posição final
  group.rotation.y = rotation;
  group.position.set(position.x, position.y, position.z);

  return group;
} 