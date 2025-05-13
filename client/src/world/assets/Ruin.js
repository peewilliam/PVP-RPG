import * as THREE from 'three';

// Função que retorna uma ruína procedural para deserto
// type: 'egyptian' | 'broken_stone' | 'obelisk' | 'random' (default: random)
export function createRuin({
  type = 'random',
  pillarHeight,
  pillarCount,
  color
} = {}) {
  const group = new THREE.Group();
  const types = ['egyptian', 'broken_stone', 'obelisk'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];
  color = color ?? 0xC2A060;
  if (type === 'egyptian') {
    // Pilares e arco egípcios
    pillarCount = pillarCount ?? (2 + Math.floor(Math.random() * 2));
    pillarHeight = pillarHeight ?? (2.5 + Math.random() * 1.2);
    for (let i = 0; i < pillarCount; i++) {
      const h = pillarHeight * (0.7 + Math.random() * 0.6);
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.28, h, 10),
        new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
      );
      pillar.position.x = Math.cos((i / pillarCount) * Math.PI * 2) * 0.9;
      pillar.position.z = Math.sin((i / pillarCount) * Math.PI * 2) * 0.9;
      pillar.position.y = h / 2;
      group.add(pillar);
    }
    // Arco
    const arch = new THREE.Mesh(
      new THREE.TorusGeometry(0.9, 0.09, 10, 18, Math.PI),
      new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
    );
    arch.position.y = pillarHeight * 0.95;
    arch.rotation.x = Math.PI / 2;
    group.add(arch);
    // Fragmento de estátua (simplificado)
    if (Math.random() > 0.5) {
      const statue = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.5 + Math.random() * 0.3, 0.18),
        new THREE.MeshStandardMaterial({ color: 0xB7A07A, roughness: 0.8 })
      );
      statue.position.set(0.3, 0.25, -0.3);
      group.add(statue);
    }
  } else if (type === 'broken_stone') {
    // Pedras quebradas genéricas
    const stoneCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < stoneCount; i++) {
      const stone = new THREE.Mesh(
        new THREE.BoxGeometry(0.4 + Math.random() * 0.3, 0.18 + Math.random() * 0.12, 0.3 + Math.random() * 0.2),
        new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
      );
      stone.position.x = (Math.random() - 0.5) * 1.2;
      stone.position.z = (Math.random() - 0.5) * 1.2;
      stone.position.y = 0.09 + Math.random() * 0.05;
      stone.rotation.y = Math.random() * Math.PI * 2;
      group.add(stone);
    }
  } else if (type === 'obelisk') {
    // Obelisco egípcio
    const obelisk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.28, 2.2 + Math.random() * 1.2, 6),
      new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
    );
    obelisk.position.y = 1.1 + Math.random() * 0.6;
    group.add(obelisk);
    // Base de pedra
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.18, 0.5),
      new THREE.MeshStandardMaterial({ color: 0xB7A07A, roughness: 0.8 })
    );
    base.position.y = 0.09;
    group.add(base);
  }
  return group;
} 