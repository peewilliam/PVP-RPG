import * as THREE from 'three';

/**
 * Exibe o efeito visual da aranha saltando até um alvo
 * @param {THREE.Object3D} spiderMesh - Mesh da aranha
 * @param {Object|THREE.Vector3} targetPos - Posição alvo do salto
 * @param {THREE.Scene} scene - Cena Three.js
 */
export function showSpiderLeapEffect(spiderMesh, targetPos, scene) {
  if (!spiderMesh || !targetPos || !scene) return;
  
  // Converter para Vector3 se for objeto com x,y,z
  const endPos = targetPos instanceof THREE.Vector3 
    ? targetPos.clone() 
    : new THREE.Vector3(
        targetPos.x || 0,
        targetPos.y || 0.5,
        targetPos.z || 0
      );
  
  // Guardar posição inicial da aranha
  const startPos = spiderMesh.position.clone();
  
  // Criar ponto mais alto para trajetória em arco (arco mais alto e salto mais longo)
  const distance = startPos.distanceTo(endPos);
  const arcHeight = Math.max(2.5, distance * 0.35); // Arco proporcional ao salto
  const midPoint = new THREE.Vector3(
    (startPos.x + endPos.x) / 2,
    Math.max(startPos.y, endPos.y) + arcHeight,
    (startPos.z + endPos.z) / 2
  );
  
  // Efeito de energia sombria durante o salto
  const shadowTrailMaterial = new THREE.MeshBasicMaterial({
    color: 0x222244,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending
  });
  const shadowTrailGeometry = new THREE.SphereGeometry(0.5, 8, 8);
  const shadowTrail = new THREE.Mesh(shadowTrailGeometry, shadowTrailMaterial);
  shadowTrail.visible = false;
  scene.add(shadowTrail);

  // Animação do salto
  let time = 0;
  const duration = Math.max(0.5, distance * 0.07); // Salto mais longo = mais tempo
  let animationFrameId = null;
  
  // Função para criar o efeito de impacto quando a aranha pousar
  function createImpactEffect(scene, position) {
    // 1. Círculo de impacto com bloom/glow
    const impactGeometry = new THREE.RingGeometry(0.2, 2.2, 32);
    const impactMaterial = new THREE.MeshBasicMaterial({
      color: 0xaa00ff,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const impactRing = new THREE.Mesh(impactGeometry, impactMaterial);
    impactRing.position.set(position.x, 0.06, position.z);
    impactRing.rotation.x = -Math.PI / 2;
    scene.add(impactRing);
    
    // 2. Partículas de energia sombria
    const particlesCount = 32;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particlesCount * 3);
    const particlesVelocities = [];
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      particlesPositions[i3] = position.x;
      particlesPositions[i3 + 1] = 0.2;
      particlesPositions[i3 + 2] = position.z;
      // Velocidade radial
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.08 + Math.random() * 0.12;
      particlesVelocities.push({
        x: Math.cos(angle) * speed,
        y: 0.04 + Math.random() * 0.04,
        z: Math.sin(angle) * speed,
        gravity: 0.003 + Math.random() * 0.004
      });
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xaa00ff,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animar efeitos por 1.2 segundos
    let impactTime = 0;
    const impactDuration = 1.2;
    function animateImpact() {
      impactTime += 0.016;
      // Expandir e esmaecer o círculo
      impactRing.scale.set(1 + impactTime * 2.5, 1 + impactTime * 2.5, 1);
      impactRing.material.opacity = 0.7 * (1 - impactTime / impactDuration);
      // Animar partículas
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const vel = particlesVelocities[i];
        positions[i3] += vel.x;
        positions[i3 + 1] += vel.y;
        positions[i3 + 2] += vel.z;
        vel.y -= vel.gravity;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.material.opacity = 0.85 * (1 - impactTime / impactDuration);
      if (impactTime < impactDuration) {
        requestAnimationFrame(animateImpact);
      } else {
        scene.remove(impactRing);
        scene.remove(particles);
      }
    }
    requestAnimationFrame(animateImpact);
  }
  
  function animateLeap() {
    time += 0.016;
    const t = Math.min(time / duration, 1);
    // Interpolação quadrática para criar um arco
    let pos = new THREE.Vector3();
    if (t < 0.5) {
      const tq = t * 2;
      pos.lerpVectors(startPos, midPoint, tq);
    } else {
      const tq = (t - 0.5) * 2;
      pos.lerpVectors(midPoint, endPos, tq);
    }
    spiderMesh.position.copy(pos);
    // Efeito de energia sombria durante o salto
    if (t > 0.1 && t < 0.95) {
      shadowTrail.visible = true;
      shadowTrail.position.copy(pos);
      shadowTrail.scale.set(1 + t * 1.5, 0.5 + t, 1 + t * 1.5);
      shadowTrail.material.opacity = 0.25 + 0.25 * Math.sin(t * Math.PI);
    } else {
      shadowTrail.visible = false;
    }
    // Rotacionar a aranha para olhar para o alvo
    const direction = new THREE.Vector3().subVectors(endPos, pos).normalize();
    if (direction.length() > 0.01) {
      const angle = Math.atan2(direction.z, direction.x);
      spiderMesh.rotation.y = angle;
    }
    if (t < 1) {
      animationFrameId = requestAnimationFrame(animateLeap);
    } else {
      spiderMesh.position.copy(endPos);
      shadowTrail.visible = false;
      scene.remove(shadowTrail);
      createImpactEffect(scene, endPos);
    }
  }
  animationFrameId = requestAnimationFrame(animateLeap);
} 