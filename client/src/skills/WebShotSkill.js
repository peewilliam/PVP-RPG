import * as THREE from 'three';

/**
 * Exibe o efeito visual da aranha lançando teia em um alvo
 * @param {THREE.Object3D|{position:{x,y,z}}} source - Aranha que lançou a teia
 * @param {THREE.Object3D|{position:{x,y,z}}} target - Alvo atingido
 * @param {THREE.Scene} scene - Cena Three.js
 */
export function showWebShotEffect(source, target, scene) {
  if (!source || !target || !scene) return;
  
  const sourcePos = source.position || source;
  const targetPos = target.position || target;
  
  // 1. Linha de teia ligando aranha e alvo
  const material = new THREE.LineBasicMaterial({ 
    color: 0xffffff, 
    opacity: 0.8,
    transparent: true,
    linewidth: 2 // Nota: linewidth acima de 1 só funciona em alguns navegadores
  });
  
  const points = [
    new THREE.Vector3(sourcePos.x, sourcePos.y + 0.4, sourcePos.z),
    new THREE.Vector3(targetPos.x, targetPos.y + 0.7, targetPos.z)
  ];
  
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  
  // 2. Partículas de teia ao atingir o alvo
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 15;
  const posArray = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    posArray[i] = targetPos.x + (Math.random() - 0.5) * 0.5;
    posArray[i + 1] = targetPos.y + 0.5 + (Math.random() - 0.5) * 0.5;
    posArray[i + 2] = targetPos.z + (Math.random() - 0.5) * 0.5;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.05,
    transparent: true,
    opacity: 0.8
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // 3. Aplicar efeito de slow visual ao alvo (azul claro)
  if (target.userData && target.userData.type === 'player') {
    // Aplica efeito visual de slow apenas se for um jogador
    const targetMesh = target;
    const originalMaterial = Array.isArray(targetMesh.material) 
      ? [...targetMesh.material] 
      : targetMesh.material;

    // Aplicar efeito azulado
    if (Array.isArray(targetMesh.material)) {
      targetMesh.material.forEach(mat => {
        mat.emissive = new THREE.Color(0x0088ff);
        mat.emissiveIntensity = 0.2;
      });
    } else if (targetMesh.material) {
      targetMesh.material.emissive = new THREE.Color(0x0088ff);
      targetMesh.material.emissiveIntensity = 0.2;
    }
    
    // Restaurar material original após 3s (duração do slow)
    setTimeout(() => {
      if (Array.isArray(targetMesh.material) && Array.isArray(originalMaterial)) {
        targetMesh.material.forEach((mat, i) => {
          if (originalMaterial[i]) {
            mat.emissive = originalMaterial[i].emissive || new THREE.Color(0x000000);
            mat.emissiveIntensity = originalMaterial[i].emissiveIntensity || 0;
          }
        });
      } else if (targetMesh.material && originalMaterial) {
        targetMesh.material.emissive = originalMaterial.emissive || new THREE.Color(0x000000);
        targetMesh.material.emissiveIntensity = originalMaterial.emissiveIntensity || 0;
      }
    }, 3000);
  }
  
  // Limpar recursos após 1s
  setTimeout(() => {
    scene.remove(line);
    scene.remove(particles);
    geometry.dispose();
    material.dispose();
    particlesGeometry.dispose();
    particlesMaterial.dispose();
  }, 1000);
} 