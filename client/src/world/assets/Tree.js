import * as THREE from 'three';

// PADRÃO VISUAL: Proporção baseada no player (1.3x1.3x1.3). Árvores devem ser 2.5~3.5x mais altas que o player, copas largas e realistas.

// Função que retorna uma árvore procedural estilizada para deserto
// type: 'palm' | 'dead' | 'acacia' | 'random' (default: random)
export function createTree({
  type = 'random',
  trunkHeight,
  trunkRadius,
  crownHeight,
  crownRadius
} = {}) {
  const group = new THREE.Group();
  // Escolha aleatória se type for random
  const types = ['palm', 'dead', 'acacia'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];

  if (type === 'palm') {
    // Palmeira seca estilizada
    trunkHeight = trunkHeight ?? (4.0 + Math.random() * 1.0); // 4.0~5.0 unidades
    trunkRadius = trunkRadius ?? (0.22 + Math.random() * 0.06); // proporcional
    const trunkGeometry = new THREE.CylinderGeometry(trunkRadius * 0.7, trunkRadius, trunkHeight, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0xBFA76A, roughness: 0.8 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    trunk.rotation.z = (Math.random() - 0.5) * 0.25; // leve curvatura
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);
    // Folhas secas (poucas, caídas)
    const leafCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < leafCount; i++) {
      const leafGeom = new THREE.CylinderGeometry(0.03, 0.08, 1.2 + Math.random() * 0.5, 6);
      const leafMat = new THREE.MeshStandardMaterial({ color: 0xD9C97A, roughness: 0.7 });
      const leaf = new THREE.Mesh(leafGeom, leafMat);
      leaf.position.y = trunkHeight;
      leaf.position.x = Math.cos((i / leafCount) * Math.PI * 2) * 0.3;
      leaf.position.z = Math.sin((i / leafCount) * Math.PI * 2) * 0.3;
      leaf.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.5;
      leaf.rotation.z = (i / leafCount) * Math.PI * 2;
      leaf.castShadow = true;
      leaf.receiveShadow = true;
      group.add(leaf);
    }
  } else if (type === 'dead') {
    // Árvore morta, galhos retorcidos
    trunkHeight = trunkHeight ?? (3.0 + Math.random() * 0.8); // 3.0~3.8 unidades
    trunkRadius = trunkRadius ?? (0.22 + Math.random() * 0.07);
    const trunkGeometry = new THREE.CylinderGeometry(trunkRadius * 0.7, trunkRadius, trunkHeight, 7);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0xA08B6A, roughness: 0.85 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    trunk.rotation.z = (Math.random() - 0.5) * 0.18;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);
    // Galhos secos
    const branchCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < branchCount; i++) {
      const branchGeom = new THREE.CylinderGeometry(0.03, 0.06, 0.8 + Math.random() * 0.5, 5);
      const branchMat = new THREE.MeshStandardMaterial({ color: 0xB7A07A, roughness: 0.8 });
      const branch = new THREE.Mesh(branchGeom, branchMat);
      branch.position.y = trunkHeight - 0.2 - Math.random() * 0.5;
      branch.position.x = Math.cos((i / branchCount) * Math.PI * 2) * 0.18;
      branch.position.z = Math.sin((i / branchCount) * Math.PI * 2) * 0.18;
      branch.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.7;
      branch.rotation.z = (i / branchCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      branch.castShadow = true;
      branch.receiveShadow = true;
      group.add(branch);
    }
  } else if (type === 'acacia') {
    // Árvore tipo acácia africana (tronco baixo, copa larga e achatada)
    trunkHeight = trunkHeight ?? (2.2 + Math.random() * 0.6); // 2.2~2.8 unidades
    trunkRadius = trunkRadius ?? (0.24 + Math.random() * 0.06);
    crownHeight = crownHeight ?? (0.7 + Math.random() * 0.2); // copa mais volumosa
    crownRadius = crownRadius ?? (1.7 + Math.random() * 0.6); // copa larga: 1.7~2.3
    const trunkGeometry = new THREE.CylinderGeometry(trunkRadius * 0.7, trunkRadius, trunkHeight, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0xBFA76A, roughness: 0.8 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    trunk.rotation.z = (Math.random() - 0.5) * 0.12;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);
    // Copa achatada
    const crownGeometry = new THREE.SphereGeometry(crownRadius, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const crownMaterial = new THREE.MeshStandardMaterial({ color: 0xC7B97A, roughness: 0.7 });
    const crown = new THREE.Mesh(crownGeometry, crownMaterial);
    crown.position.y = trunkHeight + crownHeight * 0.2;
    crown.scale.y = 0.35 + Math.random() * 0.15;
    crown.castShadow = true;
    crown.receiveShadow = true;
    group.add(crown);
  }
  return group;
} 