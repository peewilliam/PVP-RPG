import * as THREE from 'three';

export default function Wall({ position = { x: 0, y: 0, z: 0 }, scale = { x: 2, y: 2, z: 0.5 } }) {
  const geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
  const material = new THREE.MeshStandardMaterial({ color: '#555555' });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y + scale.y / 2, position.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
} 