import * as THREE from 'three';

export default function NpcPlaceholder({ position = { x: 0, y: 0, z: 0 }, scale = { x: 0.7, y: 1.8, z: 0.7 } }) {
  // Corpo (cilindro)
  const bodyGeometry = new THREE.CylinderGeometry(scale.x, scale.x, scale.y, 16);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#ffcc00' });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(position.x, position.y + scale.y / 2, position.z);

  // Cabeça (esfera)
  const headGeometry = new THREE.SphereGeometry(scale.x * 0.6, 16, 16);
  const headMaterial = new THREE.MeshStandardMaterial({ color: '#ffe066' });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.set(position.x, position.y + scale.y + scale.x * 0.6, position.z);

  // Agrupar
  const group = new THREE.Group();
  group.add(body);
  group.add(head);
  return group;
} 