import * as THREE from 'three';

export function createWall({ position = { x: 0, y: 0, z: 0 }, scale = { x: 2, y: 2, z: 0.5 }, rotation = 0 } = {}) {
  const geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
  const material = new THREE.MeshStandardMaterial({ color: '#bdbdbd' });
  const wall = new THREE.Mesh(geometry, material);
  wall.position.set(position.x, position.y + scale.y / 2, position.z);
  wall.rotation.y = rotation;
  wall.castShadow = true;
  wall.receiveShadow = true;
  return wall;
} 