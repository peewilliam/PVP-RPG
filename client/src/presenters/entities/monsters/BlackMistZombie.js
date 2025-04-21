import * as THREE from 'three';

// Função para criar o visual do BlackMistZombie
export function createBlackMistZombieVisual(options = {}) {
  // Tronco
  const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({
    color: 0x5a3d22, // marrom mais claro
    roughness: 0.5,
    metalness: 0.15,
    emissive: 0x2d1a10,
    emissiveIntensity: 0.18
  });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.y = 0.75;
  trunk.castShadow = true;
  trunk.receiveShadow = true;

  // Corpo (cubo) - verde podre
  const bodyGeometry = new THREE.BoxGeometry(1, 1.2, 0.7);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x3e7a3a, // verde podre
    roughness: 0.5,
    metalness: 0.18,
    emissive: 0x1a3a1a,
    emissiveIntensity: 0.22
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 1.6;
  body.castShadow = true;
  body.receiveShadow = true;

  // Cabeça (esfera) - cinza esverdeado claro
  const headGeometry = new THREE.SphereGeometry(0.38, 12, 12);
  const headMaterial = new THREE.MeshStandardMaterial({
    color: 0xbad6b8, // cinza esverdeado claro
    roughness: 0.45,
    metalness: 0.13,
    emissive: 0x3a4a3a,
    emissiveIntensity: 0.18
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 2.3;
  head.castShadow = true;
  head.receiveShadow = true;

  // Olhos vermelhos brilhantes
  const eyeGeometry = new THREE.SphereGeometry(0.07, 8, 8);
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    emissive: 0xff0000,
    emissiveIntensity: 0.7
  });
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.12, 2.38, 0.33);
  const rightEye = leftEye.clone();
  rightEye.position.x = 0.12;

  // Braços
  const armGeometry = new THREE.CylinderGeometry(0.11, 0.13, 0.9, 8);
  const armMaterial = new THREE.MeshStandardMaterial({
    color: 0x3e7a3a,
    roughness: 0.5,
    metalness: 0.18,
    emissive: 0x1a3a1a,
    emissiveIntensity: 0.22
  });
  const leftArm = new THREE.Mesh(armGeometry, armMaterial);
  leftArm.position.set(-0.55, 1.6, 0);
  leftArm.rotation.z = Math.PI / 6;
  leftArm.castShadow = true;
  leftArm.receiveShadow = true;
  const rightArm = leftArm.clone();
  rightArm.position.x = 0.55;
  rightArm.rotation.z = -Math.PI / 6;

  // Grupo final
  const zombie = new THREE.Group();
  zombie.add(trunk);
  zombie.add(body);
  zombie.add(head);
  zombie.add(leftArm);
  zombie.add(rightArm);
  zombie.add(leftEye);
  zombie.add(rightEye);

  // Tag para identificação
  zombie.userData.monsterType = 'BLACK_MIST_ZOMBIE';

  // Permite fácil aplicação de efeitos visuais futuros
  // Exemplo: zombie.applyBurn = () => ...

  return zombie;
} 