import * as THREE from 'three';

// PADRÃO VISUAL: Proporção baseada no player (1.3x1.3x1.3). Saguaro: 1.5~2.2 de altura. Mandacaru: nunca menor que 0.8. Volume realista e harmônico.

// Função que retorna um cacto procedural para deserto
// type: 'saguaro' | 'mandacaru' | 'random' (default: random)
export function createCactus({
  type = 'random',
  height,
  radius,
  arms
} = {}) {
  const group = new THREE.Group();
  const types = ['saguaro', 'mandacaru'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];
  if (type === 'saguaro') {
    // Cacto saguaro clássico
    height = height ?? (1.5 + Math.random() * 0.7);
    radius = radius ?? (0.19 + Math.random() * 0.07);
    arms = arms ?? (1 + Math.floor(Math.random() * 3));
    const main = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius * 0.9, height, 10),
      new THREE.MeshStandardMaterial({ color: 0x4B9E4D, roughness: 0.7 })
    );
    main.position.y = height / 2;
    main.castShadow = true;
    main.receiveShadow = true;
    group.add(main);
    for (let i = 0; i < arms; i++) {
      const armHeight = 0.7 + Math.random() * 0.5;
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.6, radius * 0.5, armHeight, 8),
        new THREE.MeshStandardMaterial({ color: 0x4B9E4D, roughness: 0.7 })
      );
      arm.position.y = (height * 0.3) + Math.random() * (height * 0.5);
      const angle = (i / arms) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      arm.position.x = Math.cos(angle) * (radius * 1.2);
      arm.position.z = Math.sin(angle) * (radius * 1.2);
      arm.rotation.z = (Math.random() - 0.5) * 0.7;
      arm.castShadow = true;
      arm.receiveShadow = true;
      group.add(arm);
    }
  } else if (type === 'mandacaru') {
    // Cacto mandacaru baixo e arredondado
    height = height ?? (0.8 + Math.random() * 0.5);
    radius = radius ?? (0.24 + Math.random() * 0.09);
    arms = arms ?? (2 + Math.floor(Math.random() * 3));
    const main = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x5CB85C, roughness: 0.75 })
    );
    main.position.y = radius;
    main.castShadow = true;
    main.receiveShadow = true;
    group.add(main);
    for (let i = 0; i < arms; i++) {
      const arm = new THREE.Mesh(
        new THREE.SphereGeometry(radius * (0.5 + Math.random() * 0.4), 8, 7),
        new THREE.MeshStandardMaterial({ color: 0x5CB85C, roughness: 0.75 })
      );
      arm.position.x = Math.cos((i / arms) * Math.PI * 2) * (radius * 1.1);
      arm.position.z = Math.sin((i / arms) * Math.PI * 2) * (radius * 1.1);
      arm.position.y = radius * (0.7 + Math.random() * 0.5);
      arm.castShadow = true;
      arm.receiveShadow = true;
      group.add(arm);
    }
  }
  return group;
} 