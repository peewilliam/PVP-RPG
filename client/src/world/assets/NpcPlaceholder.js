import * as THREE from 'three';

export function createNpcPlaceholder({ position = { x: 0, y: 0, z: 0 }, scale = { x: 1, y: 1.8, z: 1 }, rotation = 0 } = {}) {
  const group = new THREE.Group();
  // Corpo
  const bodyGeometry = new THREE.CylinderGeometry(scale.x * 0.5, scale.x * 0.5, scale.y, 16);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#ffe082' });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, scale.y / 2, 0);
  group.add(body);
  // Cabeça
  const headGeometry = new THREE.SphereGeometry(scale.x * 0.5, 16, 16);
  const headMaterial = new THREE.MeshStandardMaterial({ color: '#ffe0b2' });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.set(0, scale.y + scale.x * 0.3, 0);
  group.add(head);
  // Aplica rotação e posição final
  group.rotation.y = rotation;
  group.position.set(position.x, position.y, position.z);
  return group;
} 