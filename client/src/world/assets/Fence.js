import * as THREE from 'three';

export function createFence({ position = { x: 0, y: 0, z: 0 }, scale = { x: 4, y: 1, z: 0.3 }, rotation = 0 } = {}) {
  const group = new THREE.Group();
  // Trave principal
  const mainGeometry = new THREE.BoxGeometry(scale.x, scale.y * 0.3, scale.z);
  const mainMaterial = new THREE.MeshStandardMaterial({ color: '#8d5524' });
  const mainBar = new THREE.Mesh(mainGeometry, mainMaterial);
  mainBar.position.set(0, scale.y * 0.15, 0);
  group.add(mainBar);
  // Pilares
  for (let i = -1; i <= 1; i += 2) {
    const postGeometry = new THREE.BoxGeometry(scale.y * 0.3, scale.y, scale.z * 0.7);
    const post = new THREE.Mesh(postGeometry, mainMaterial);
    post.position.set((scale.x / 2 - scale.y * 0.15) * i, scale.y / 2, 0);
    group.add(post);
  }
  // Aplica rotação e posição final
  group.rotation.y = rotation;
  group.position.set(position.x, position.y, position.z);
  return group;
} 