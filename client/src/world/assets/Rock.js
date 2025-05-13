import * as THREE from 'three';

// PADRÃO VISUAL: Proporção baseada no player (1.3x1.3x1.3). Rochas grandes até 2.0 unidades, pequenas nunca menores que 0.7. Formatos achatados e realistas.
// Função que retorna uma rocha procedural estilizada para deserto
// type: 'sandstone' | 'boulder' | 'flat' | 'random' (default: random)
export function createRock({
  type = 'random',
  width,
  height,
  depth,
  color
} = {}) {
  const types = ['sandstone', 'boulder', 'flat'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];
  let geometry, matColor;
  if (type === 'sandstone') {
    width = width ?? (1.4 + Math.random() * 0.6);
    height = height ?? (0.8 + Math.random() * 0.3);
    depth = depth ?? (1.2 + Math.random() * 0.5);
    matColor = color ?? 0xE2C290;
    geometry = new THREE.BoxGeometry(width, height, depth, 3, 2, 3);
  } else if (type === 'boulder') {
    width = width ?? (1.0 + Math.random() * 0.7);
    height = height ?? (1.1 + Math.random() * 0.6);
    depth = depth ?? (1.0 + Math.random() * 0.7);
    matColor = color ?? 0xC2A060;
    geometry = new THREE.SphereGeometry(width * 0.5, 8, 7);
  } else if (type === 'flat') {
    width = width ?? (1.3 + Math.random() * 0.5);
    height = height ?? (0.35 + Math.random() * 0.15);
    depth = depth ?? (1.1 + Math.random() * 0.5);
    matColor = color ?? 0xB7A07A;
    geometry = new THREE.BoxGeometry(width, height, depth, 2, 1, 2);
  }
  // Deformar vértices para aparência erodida
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);
    const z = geometry.attributes.position.getZ(i);
    geometry.attributes.position.setXYZ(
      i,
      x + (Math.random() - 0.5) * 0.18 * (width ?? 1),
      y + (Math.random() - 0.5) * 0.18 * (height ?? 1),
      z + (Math.random() - 0.5) * 0.18 * (depth ?? 1)
    );
  }
  geometry.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({ color: matColor, roughness: 0.85 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
} 