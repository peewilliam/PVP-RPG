import * as THREE from 'three';

export function createSpiderVisual() {
  const group = new THREE.Group();
  group.scale.set(1.4, 1.4, 1.4);
  group.rotation.x = Math.PI; // Vira a aranha pro lado certo

  // Abdômen
  const abdomen = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 })
  );
  abdomen.position.set(0, 0.25, -0.25);
  group.add(abdomen);

  // Cefalotórax
  const cephalothorax = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 })
  );
  cephalothorax.position.set(0, 0.22, 0.25);
  group.add(cephalothorax);

  // Olhos vermelhos
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  for (let i = 0; i < 6; i++) {
    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 8, 8),
      eyeMaterial
    );
    const angle = (i / 6) * Math.PI * 2;
    eye.position.set(
      Math.cos(angle) * 0.1,
      0.28,
      0.35 + Math.sin(angle) * 0.04
    );
    group.add(eye);
  }

  // Pernas com 3 segmentos
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 });

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const legBase = new THREE.Group();
    legBase.position.set(Math.cos(angle) * 0.22, 0.18, Math.sin(angle) * 0.22);
    legBase.rotation.y = angle;

    // Segmento 1 (coxa)
    const upper = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.03, 0.4, 8),
      legMaterial
    );
    upper.position.y = 0.2;
    upper.rotation.z = Math.PI / 3; // invertido

    // Segmento 2 (joelho)
    const middle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.025, 0.35, 8),
      legMaterial
    );
    middle.position.set(0.3, 0.15, 0);
    middle.rotation.z = Math.PI / 4;

    // Segmento 3 (ponta)
    const tip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.02, 0.25, 8),
      legMaterial
    );
    tip.position.set(0.55, 0.05, 0);
    tip.rotation.z = Math.PI / 6;

    legBase.add(upper);
    legBase.add(middle);
    legBase.add(tip);
    group.add(legBase);
  }

  group.position.y = 0.05;
  return group;
}
