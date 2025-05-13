import * as THREE from 'three';

// Função que retorna um osso procedural estilizado para deserto
// type: 'long' | 'skull' | 'fragment' | 'random' (default: random)
export function createBone({
  type = 'random',
  length,
  radius,
  color
} = {}) {
  const group = new THREE.Group();
  const types = ['long', 'skull', 'fragment'];
  if (type === 'random') type = types[Math.floor(Math.random() * types.length)];
  color = color ?? 0xF5E6C5;
  if (type === 'long') {
    // Osso longo ressecado
    length = length ?? (1.7 + Math.random() * 1.2);
    radius = radius ?? (0.13 + Math.random() * 0.07);
    const bone = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius * 0.8, length, 8),
      new THREE.MeshStandardMaterial({ color, roughness: 0.7 })
    );
    group.add(bone);
    // Esferas nas pontas
    const sphereGeom = new THREE.SphereGeometry(radius * 1.2, 8, 8);
    const sphereMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });
    const s1 = new THREE.Mesh(sphereGeom, sphereMat);
    const s2 = new THREE.Mesh(sphereGeom, sphereMat);
    s1.position.y = length / 2;
    s2.position.y = -length / 2;
    group.add(s1);
    group.add(s2);
  } else if (type === 'skull') {
    // Fragmento de crânio (simplificado)
    const skull = new THREE.Mesh(
      new THREE.SphereGeometry(0.22 + Math.random() * 0.12, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.7),
      new THREE.MeshStandardMaterial({ color, roughness: 0.8 })
    );
    skull.position.y = 0.13 + Math.random() * 0.07;
    skull.rotation.x = Math.PI * 0.18;
    group.add(skull);
  } else if (type === 'fragment') {
    // Fragmento de osso
    const frag = new THREE.Mesh(
      new THREE.BoxGeometry(0.18 + Math.random() * 0.12, 0.08 + Math.random() * 0.05, 0.06 + Math.random() * 0.04),
      new THREE.MeshStandardMaterial({ color, roughness: 0.8 })
    );
    frag.position.y = 0.05 + Math.random() * 0.03;
    frag.rotation.x = (Math.random() - 0.5) * 0.7;
    frag.rotation.z = (Math.random() - 0.5) * 0.7;
    group.add(frag);
  }
  return group;
} 