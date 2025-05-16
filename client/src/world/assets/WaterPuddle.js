// client/src/world/assets/WaterPuddle.js
// Asset: Poça d'Água decorativa (WATER_PUDDLE)
import * as THREE from 'three';

export function createWaterPuddle({ scale = { x: 1, y: 1, z: 1 } } = {}) {
  const group = new THREE.Group();

  // Poça (disco irregular)
  const shape = new THREE.Shape();
  shape.moveTo(0.2, 0);
  shape.quadraticCurveTo(0.1, 0.15, 0, 0.2);
  shape.quadraticCurveTo(-0.15, 0.1, -0.2, 0);
  shape.quadraticCurveTo(-0.1, -0.15, 0, -0.2);
  shape.quadraticCurveTo(0.15, -0.1, 0.2, 0);
  const geometry = new THREE.ShapeGeometry(shape, 16);
  const material = new THREE.MeshStandardMaterial({ color: '#6ec6f1', transparent: true, opacity: 0.55, roughness: 0.3 });
  const puddle = new THREE.Mesh(geometry, material);
  puddle.rotation.x = -Math.PI / 2;
  group.add(puddle);

  group.scale.set(scale.x, scale.y, scale.z);
  return group;
} 