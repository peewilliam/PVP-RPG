import * as THREE from 'three';

export function createDefaultPlayerVisual(options = {}) {
  // Corpo principal (cubo azul)
  const bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.receiveShadow = true;

  // Cone verde indicando direção
  const frontGeometry = new THREE.ConeGeometry(0.3, 1.0, 4);
  const frontMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const front = new THREE.Mesh(frontGeometry, frontMaterial);
  front.position.set(0, 0, 0.8);
  front.rotation.x = Math.PI / 2;
  body.add(front);

  // Tag para identificação
  body.userData.playerType = 'DEFAULT_PLAYER';

  return body;
} 