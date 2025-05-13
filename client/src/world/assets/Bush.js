import * as THREE from 'three';

// PADRÃO VISUAL: Proporção baseada no player (1.3x1.3x1.3). Arbustos até 0.9 de altura e 1.0 de largura, servindo de bloqueio visual, mas nunca maiores que o player.

// Função que retorna um arbusto/capim procedural para deserto
// type: 'dry_bush' | 'grass_tuft' | 'ground_plant' | 'random' (default: random)
export function createBush({
  type = 'random',
  mainRadius,
  height,
  color,
  arms
} = {}) {
  const group = new THREE.Group();
  const types = ['dry_bush', 'grass_tuft', 'ground_plant'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];

  if (type === 'dry_bush') {
    // Moita seca, galhos finos
    mainRadius = mainRadius ?? (0.45 + Math.random() * 0.25);
    height = height ?? (0.7 + Math.random() * 0.2);
    arms = arms ?? (3 + Math.floor(Math.random() * 3));
    color = color ?? 0xC2A060;
    for (let i = 0; i < arms; i++) {
      const branch = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.01, height, 6),
        new THREE.MeshStandardMaterial({ color, roughness: 0.8 })
      );
      branch.position.y = height / 2;
      branch.position.x = Math.cos((i / arms) * Math.PI * 2) * mainRadius;
      branch.position.z = Math.sin((i / arms) * Math.PI * 2) * mainRadius;
      branch.rotation.z = (Math.random() - 0.5) * 0.7;
      branch.castShadow = true;
      branch.receiveShadow = true;
      group.add(branch);
    }
  } else if (type === 'grass_tuft') {
    // Tufo de capim amarelado
    mainRadius = mainRadius ?? (0.32 + Math.random() * 0.18);
    height = height ?? (0.5 + Math.random() * 0.2);
    arms = arms ?? (5 + Math.floor(Math.random() * 3));
    color = color ?? 0xE2C290;
    for (let i = 0; i < arms; i++) {
      const blade = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.03, height, 5),
        new THREE.MeshStandardMaterial({ color, roughness: 0.7 })
      );
      blade.position.y = height / 2;
      blade.position.x = Math.cos((i / arms) * Math.PI * 2) * mainRadius * (0.7 + Math.random() * 0.5);
      blade.position.z = Math.sin((i / arms) * Math.PI * 2) * mainRadius * (0.7 + Math.random() * 0.5);
      blade.rotation.z = (Math.random() - 0.5) * 0.8;
      blade.castShadow = true;
      blade.receiveShadow = true;
      group.add(blade);
    }
  } else if (type === 'ground_plant') {
    // Pequena planta rasteira
    mainRadius = mainRadius ?? (0.22 + Math.random() * 0.08);
    height = height ?? (0.18 + Math.random() * 0.08);
    color = color ?? 0xB7A07A;
    const leafCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < leafCount; i++) {
      const leaf = new THREE.Mesh(
        new THREE.SphereGeometry(mainRadius * (0.5 + Math.random() * 0.5), 6, 6),
        new THREE.MeshStandardMaterial({ color, roughness: 0.8 })
      );
      leaf.position.y = height / 2;
      leaf.position.x = Math.cos((i / leafCount) * Math.PI * 2) * mainRadius * 0.7;
      leaf.position.z = Math.sin((i / leafCount) * Math.PI * 2) * mainRadius * 0.7;
      leaf.castShadow = true;
      leaf.receiveShadow = true;
      group.add(leaf);
    }
  }
  return group;
} 