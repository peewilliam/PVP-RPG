// IceSpikeSkill.js - Efeito visual da habilidade Estaca de Gelo
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

// Lista de projéteis e efeitos ativos para atualização
const activeProjectiles = [];
const activeEffects = [];

/**
 * Cria o efeito visual de uma estaca de gelo
 * @param {THREE.Vector3} origin - Posição de origem do projétil
 * @param {THREE.Vector3} target - Posição alvo do projétil
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o projétil
 * @param {THREE.Object3D} [caster=null] - Objeto que está conjurando a habilidade (opcional)
 * @param {Object} effect - Configurações adicionais do efeito
 * @returns {Object} Dados do projétil criado
 */
export function spawnIceSpikeEffect(origin, target, scene, caster = null, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);
  
  // Criar indicador de área (círculo no chão)
  const areaRadius = effect.radius || SKILLS.FROST_SPIKES.AREA_RADIUS || 5;
  const areaGeometry = new THREE.CircleGeometry(areaRadius, 32);
  const areaMaterial = new THREE.MeshBasicMaterial({
    color: 0x66ccff, // Azul claro
    transparent: true,
    opacity: 0.3
  });
  
  const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
  areaMesh.position.set(targetPos.x, 0.1, targetPos.z); // Ligeiramente acima do chão
  areaMesh.rotation.x = -Math.PI / 2; // Rotaciona para ficar horizontal
  scene.add(areaMesh);
  
  // Efeito de cristalização do chão
  createCrystallizationEffect(targetPos, areaRadius, scene);
  
  // Duração do atraso antes das estacas surgirem
  const delay = effect.delay || SKILLS.FROST_SPIKES.DELAY || 1000;
  
  // Número de estacas a criar
  const spikeCount = effect.spikeCount || 12;
  
  // Cronograma para remover o indicador de área
  setTimeout(() => {
    if (scene.getObjectById(areaMesh.id)) {
      scene.remove(areaMesh);
      areaMaterial.dispose();
      areaGeometry.dispose();
    }
  }, delay + 500); // Remove após as estacas surgirem
  
  // Agenda a criação das estacas após o delay
  setTimeout(() => {
    createIceSpikes(targetPos, areaRadius, spikeCount, scene);
  }, delay);
  
  return { success: true, areaMesh, delay };
}

/**
 * Cria o efeito de cristalização do chão
 * @param {THREE.Vector3} center - Centro da área de efeito
 * @param {number} radius - Raio da área
 * @param {THREE.Scene} scene - Cena do Three.js
 */
function createCrystallizationEffect(center, radius, scene) {
  // Cria material com efeito de cristal de gelo
  const iceMaterial = new THREE.MeshStandardMaterial({
    color: 0xaaddff,
    emissive: 0x3399ff,
    emissiveIntensity: 0.3,
    transparent: true,
    opacity: 0.7,
    roughness: 0.2,
    metalness: 0.8
  });
  
  // Cria 20-30 cristais pequenos espalhados pela área
  const crystalCount = Math.floor(15 + Math.random() * 15);
  const crystalGroup = new THREE.Group();
  
  for (let i = 0; i < crystalCount; i++) {
    // Posição aleatória dentro do círculo
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radius * 0.9; // 90% do raio
    const x = center.x + Math.cos(angle) * distance;
    const z = center.z + Math.sin(angle) * distance;
    
    // Tamanho e geometria variáveis
    const size = 0.1 + Math.random() * 0.3;
    let geometry;
    
    // Varia entre diferentes formas de cristais
    const crystalType = Math.floor(Math.random() * 4);
    switch (crystalType) {
      case 0:
        geometry = new THREE.ConeGeometry(size * 0.5, size, 6);
        break;
      case 1:
        geometry = new THREE.OctahedronGeometry(size * 0.6);
        break;
      case 2:
        geometry = new THREE.TetrahedronGeometry(size * 0.7);
        break;
      default:
        geometry = new THREE.BoxGeometry(size * 0.6, size, size * 0.6);
    }
    
    const crystal = new THREE.Mesh(geometry, iceMaterial.clone());
    crystal.position.set(x, 0.02, z); // Ligeiramente acima do chão
    crystal.rotation.y = Math.random() * Math.PI * 2;
    crystal.rotation.x = Math.random() * 0.2;
    crystal.rotation.z = Math.random() * 0.2;
    
    crystalGroup.add(crystal);
  }
  
  scene.add(crystalGroup);
  
  // Anima a opacidade para fazer os cristais desaparecerem após um tempo
  const duration = 4000; // ms
  const startTime = Date.now();
  
  function animateCrystals() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    if (progress < 1) {
      // Fade out gradual após a marca de 50% do tempo
      if (progress > 0.5) {
        const fadeProgress = (progress - 0.5) * 2; // 0 a 1
        crystalGroup.children.forEach(crystal => {
          crystal.material.opacity = 0.7 * (1 - fadeProgress);
        });
      }
      
      requestAnimationFrame(animateCrystals);
    } else {
      // Remove os cristais
      scene.remove(crystalGroup);
      
      // Libera recursos
      crystalGroup.children.forEach(crystal => {
        crystal.geometry.dispose();
        crystal.material.dispose();
      });
    }
  }
  
  // Adiciona à lista de efeitos ativos
  activeEffects.push({
    group: crystalGroup,
    animate: animateCrystals,
    type: 'ice_crystals'
  });
  
  // Inicia a animação
  animateCrystals();
}

/**
 * Cria as estacas de gelo que irrompem do chão
 * @param {THREE.Vector3} center - Centro da área de efeito
 * @param {number} radius - Raio da área
 * @param {number} count - Número de estacas a criar
 * @param {THREE.Scene} scene - Cena do Three.js
 */
function createIceSpikes(center, radius, count, scene) {
  // Material das estacas com aparência de gelo cristalino
  const spikeMaterial = new THREE.MeshStandardMaterial({
    color: 0x99ccff,
    emissive: 0x3399ff,
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.8,
    roughness: 0.3,
    metalness: 0.7
  });
  
  // Grupo para todas as estacas
  const spikeGroup = new THREE.Group();
  
  // --- ONDAS DE ESTACAS ---
  const waves = 3; // Número de ondas
  const spikesPerWave = Math.ceil(count / waves);
  const waveDelay = 80; // ms entre ondas
  let spikeIndex = 0;

  function spawnWave(waveNum) {
    // Flash azul intenso no centro
    createBlueFlash(center, radius * (0.7 + 0.1 * waveNum), scene);
    // Partículas brilhantes (AdditiveBlending)
    createIceParticlesBright(center, 10 + Math.floor(Math.random() * 6), scene);
    for (let i = 0; i < spikesPerWave && spikeIndex < count; i++, spikeIndex++) {
      // Posição aleatória dentro do círculo (mais concentrada no centro)
      const angle = Math.random() * Math.PI * 2;
      const distanceFactor = Math.pow(Math.random(), 0.7);
      const distance = distanceFactor * radius * 0.95;
      const x = center.x + Math.cos(angle) * distance;
      const z = center.z + Math.sin(angle) * distance;
      // Tamanho variável para cada estaca
      const spikeHeight = 1.5 + Math.random() * 1.5;
      const spikeWidth = 0.2 + Math.random() * 0.3;
      // Criar estaca básica (combinação de formas geométricas)
      const spikeBase = new THREE.Group();
      // Parte principal (cone afiado)
      const mainSpike = new THREE.Mesh(
        new THREE.ConeGeometry(spikeWidth, spikeHeight, 8),
        spikeMaterial.clone()
      );
      mainSpike.position.y = spikeHeight / 2;
      spikeBase.add(mainSpike);
      // Adicionar pequenos fragmentos de gelo na base
      const fragmentCount = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < fragmentCount; j++) {
        const fragSize = spikeWidth * (0.4 + Math.random() * 0.3);
        const fragHeight = spikeHeight * (0.2 + Math.random() * 0.3);
        let fragGeometry;
        if (Math.random() > 0.5) {
          fragGeometry = new THREE.ConeGeometry(fragSize, fragHeight, 6);
        } else {
          fragGeometry = new THREE.TetrahedronGeometry(fragSize);
        }
        const fragment = new THREE.Mesh(fragGeometry, spikeMaterial.clone());
        const fragAngle = Math.random() * Math.PI * 2;
        const fragDistance = spikeWidth * 0.8;
        fragment.position.x = Math.cos(fragAngle) * fragDistance;
        fragment.position.z = Math.sin(fragAngle) * fragDistance;
        fragment.position.y = fragHeight / 3;
        fragment.rotation.x = (Math.random() - 0.5) * 0.3;
        fragment.rotation.y = Math.random() * Math.PI * 2;
        fragment.rotation.z = (Math.random() - 0.5) * 0.3;
        spikeBase.add(fragment);
      }
      // Posiciona a estaca
      spikeBase.position.set(x, -spikeHeight, z);
      spikeGroup.add(spikeBase);
      // Anima a estaca surgindo do chão
      animateSpikeEmergence(spikeBase, spikeHeight);
      // Fragmentos de gelo caindo após impacto
      setTimeout(() => {
        createFallingIceFragments(new THREE.Vector3(x, 0.2, z), scene);
      }, 220 + Math.random() * 120);
    }
    // Próxima onda
    if (waveNum + 1 < waves) {
      setTimeout(() => spawnWave(waveNum + 1), waveDelay);
    }
  }
  // Inicia a primeira onda
  spawnWave(0);

  scene.add(spikeGroup);
  
  // Programa a remoção das estacas após um tempo
  const duration = 3000; // 3 segundos
  setTimeout(() => {
    // Anima a retração das estacas para o chão
    animateSpikeRetraction(spikeGroup, scene, duration);
  }, duration);
  
  // Efeitos visuais de impacto geral
  createFrostMist(center, radius, scene);
}

/**
 * Anima uma estaca emergindo do chão
 * @param {THREE.Group} spike - Grupo da estaca
 * @param {number} height - Altura final da estaca
 */
function animateSpikeEmergence(spike, height) {
  const startY = spike.position.y;
  const endY = 0; // Posição final no nível do chão
  const duration = 300 + Math.random() * 200; // Duração ligeiramente variável para cada estaca
  const startTime = Date.now();
  
  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    if (progress < 1) {
      // Função de easing para movimento mais natural
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Easing de saída cúbica
      spike.position.y = startY + (endY - startY) * easedProgress;
      
      requestAnimationFrame(animate);
    } else {
      spike.position.y = endY;
    }
  }
  
  // Inicia a animação
  animate();
}

/**
 * Anima a retração das estacas para o chão
 * @param {THREE.Group} spikeGroup - Grupo de todas as estacas
 * @param {THREE.Scene} scene - Cena do Three.js
 * @param {number} delay - Atraso antes de iniciar a retração
 */
function animateSpikeRetraction(spikeGroup, scene, delay) {
  const duration = 1000; // Duração da animação de retração
  const startTime = Date.now();
  
  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    if (progress < 1) {
      // Retrai as estacas de volta para o chão
      spikeGroup.children.forEach((spike, index) => {
        // Retração com leve variação no tempo
        const spikeProgress = Math.min(progress * (1 + index * 0.05), 1);
        const easedProgress = spikeProgress * spikeProgress; // Easing quadrático
        
        // Move para baixo e reduz a opacidade
        const originalY = 0;
        const targetY = -2 - Math.random(); // Variação na profundidade final
        spike.position.y = originalY + (targetY - originalY) * easedProgress;
        
        // Reduz a opacidade
        spike.children.forEach(part => {
          if (part.material) {
            part.material.opacity = 0.8 * (1 - easedProgress);
          }
        });
      });
      
      requestAnimationFrame(animate);
    } else {
      // Remove o grupo de estacas
      scene.remove(spikeGroup);
      
      // Libera recursos
      spikeGroup.children.forEach(spike => {
        spike.children.forEach(part => {
          if (part.geometry) part.geometry.dispose();
          if (part.material) part.material.dispose();
        });
      });
    }
  }
  
  // Inicia a animação
  animate();
}

/**
 * Cria um flash circular azulado no chão
 * @param {THREE.Vector3} pos - Posição central
 * @param {number} radius - Raio do flash
 * @param {THREE.Scene} scene
 */
function createBlueFlash(pos, radius, scene) {
  const geo = new THREE.RingGeometry(radius * 0.7, radius, 48);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x99e0ff,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos.x, 0.11, pos.z);
  mesh.rotation.x = -Math.PI/2;
  scene.add(mesh);
  const start = performance.now();
  const duration = 320;
  function animate() {
    const now = performance.now();
    const t = Math.min((now - start) / duration, 1);
    mesh.scale.setScalar(1.0 + t * 1.7);
    mat.opacity = 0.45 * (1 - t);
    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      scene.remove(mesh);
      geo.dispose();
      mat.dispose();
    }
  }
  animate();
}

/**
 * Cria partículas de gelo voando para cima e para os lados
 * @param {THREE.Vector3} pos - Centro da explosão
 * @param {number} count - Quantidade de partículas
 * @param {THREE.Scene} scene
 */
function createIceParticles(pos, count, scene) {
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.06 + Math.random() * 0.04, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xcceeff,
      emissive: 0x99ccff,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.7 + Math.random() * 0.2,
      roughness: 0.4
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.position.x += (Math.random() - 0.5) * 1.2;
    mesh.position.y += 0.1 + Math.random() * 0.2;
    mesh.position.z += (Math.random() - 0.5) * 1.2;
    group.add(mesh);
    // Anima subida e fade
    const start = performance.now();
    const duration = 420 + Math.random() * 180;
    const yStart = mesh.position.y;
    const xDir = (Math.random() - 0.5) * 1.2;
    const zDir = (Math.random() - 0.5) * 1.2;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.y = yStart + t * (0.7 + Math.random() * 0.3);
      mesh.position.x += xDir * 0.01;
      mesh.position.z += zDir * 0.01;
      mat.opacity = (0.7 + Math.random() * 0.2) * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        group.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }
  scene.add(group);
  setTimeout(() => scene.remove(group), 900);
}

/**
 * Cria uma névoa fria/frost na base das estacas
 * @param {THREE.Vector3} pos - Centro
 * @param {number} radius - Raio
 * @param {THREE.Scene} scene
 */
function createFrostMist(pos, radius, scene) {
  const geo = new THREE.CircleGeometry(radius * 0.8, 32);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xbbeeff,
    transparent: true,
    opacity: 0.22,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos.x, 0.12, pos.z);
  mesh.rotation.x = -Math.PI/2;
  scene.add(mesh);
  const start = performance.now();
  const duration = 700;
  function animate() {
    const now = performance.now();
    const t = Math.min((now - start) / duration, 1);
    mesh.scale.setScalar(1.0 + t * 1.2);
    mat.opacity = 0.22 * (1 - t);
    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      scene.remove(mesh);
      geo.dispose();
      mat.dispose();
    }
  }
  animate();
}

/**
 * Atualiza as posições e ciclo de vida dos projéteis de gelo
 * @param {number} delta - Tempo desde o último frame em segundos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis expirados
 */
export function updateIceSpikeProjectiles(delta, scene) {
  // Atualiza projéteis
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type !== 'ice_spike') continue;
    
    // Atualiza posição com base na velocidade
    p.mesh.position.addScaledVector(p.dir, p.speed * delta);
    
    // Remove o projétil se estiver além da distância máxima
    if (p.mesh.position.distanceTo(p.origin) > p.maxDist) {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
  
  // Atualiza efeitos ativos
  for (let i = activeEffects.length - 1; i >= 0; i--) {
    const effect = activeEffects[i];
    
    // Executa a função de animação associada
    if (typeof effect.animate === 'function') {
      effect.animate();
    }
  }
}

/**
 * Limpa todos os projéteis de estaca de gelo ativos
 * @param {THREE.Scene} scene - Cena do Three.js para remover projéteis
 */
export function clearIceSpikeProjectiles(scene) {
  // Limpa projéteis
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    if (p.type === 'ice_spike') {
      scene.remove(p.mesh);
      activeProjectiles.splice(i, 1);
    }
  }
  
  // Limpa efeitos
  for (let i = activeEffects.length - 1; i >= 0; i--) {
    const effect = activeEffects[i];
    if (effect.type.includes('ice_')) {
      if (effect.group) {
        scene.remove(effect.group);
      }
      activeEffects.splice(i, 1);
    }
  }
}

/**
 * Obtém a lista de projéteis ativos
 * @returns {Array} Lista de projéteis ativos
 */
export function getActiveIceSpikeProjectiles() {
  return activeProjectiles.filter(p => p.type === 'ice_spike');
}

/**
 * Aplica efeito de congelamento visual em um inimigo
 * @param {THREE.Object3D} enemyMesh - Mesh do inimigo
 * @param {THREE.Scene} scene
 * @param {number} duration - Duração do efeito em ms
 */
export function applyFreezeEffect(enemyMesh, scene, duration = 900) {
  if (!enemyMesh) return;
  // Overlay azulado
  const overlayMat = new THREE.MeshBasicMaterial({
    color: 0x99ccff,
    transparent: true,
    opacity: 0.55,
    depthWrite: false
  });
  // Aplica overlay em todos os materiais do mesh
  const originalMaterials = Array.isArray(enemyMesh.material) ? enemyMesh.material.slice() : [enemyMesh.material];
  enemyMesh.material = [ ...originalMaterials, overlayMat ];
  // Partículas de gelo ao redor
  const pos = enemyMesh.position.clone();
  createIceParticles(pos, 8, scene);
  // Remove overlay após a duração
  setTimeout(() => {
    if (enemyMesh.material && Array.isArray(enemyMesh.material)) {
      enemyMesh.material = originalMaterials;
    }
  }, duration);
}

/**
 * Cria um círculo de energia animado para o pré-cast da Ice Spike
 * @param {THREE.Vector3} pos - Centro
 * @param {number} radius - Raio
 * @param {THREE.Scene} scene
 * @param {number} duration - Duração do pré-cast em ms
 */
function createAnimatedPrecastCircle(pos, radius, scene, duration = 1000) {
  // Círculo base
  const geo = new THREE.RingGeometry(radius * 0.7, radius, 64);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x99e0ff,
    transparent: true,
    opacity: 0.38,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(pos.x, 0.13, pos.z);
  mesh.rotation.x = -Math.PI/2;
  scene.add(mesh);

  // Névoa fria
  const mistGeo = new THREE.CircleGeometry(radius * 0.8, 32);
  const mistMat = new THREE.MeshBasicMaterial({
    color: 0xbbeeff,
    transparent: true,
    opacity: 0.13,
    depthWrite: false
  });
  const mist = new THREE.Mesh(mistGeo, mistMat);
  mist.position.set(pos.x, 0.12, pos.z);
  mist.rotation.x = -Math.PI/2;
  scene.add(mist);

  // Partículas de gelo saindo do círculo
  const particles = [];
  for (let i = 0; i < 18; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = radius * (0.7 + Math.random() * 0.3);
    const px = pos.x + Math.cos(angle) * r;
    const pz = pos.z + Math.sin(angle) * r;
    const geo = new THREE.SphereGeometry(0.06 + Math.random() * 0.04, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xcceeff,
      emissive: 0x99ccff,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.7 + Math.random() * 0.2,
      roughness: 0.4
    });
    const meshP = new THREE.Mesh(geo, mat);
    meshP.position.set(px, 0.15, pz);
    particles.push({mesh: meshP, angle, r, speed: 0.12 + Math.random() * 0.08});
    scene.add(meshP);
  }

  // Animação
  const start = performance.now();
  function animate() {
    const now = performance.now();
    const t = Math.min((now - start) / duration, 1);
    // Círculo pulsa e gira
    mesh.scale.setScalar(1 + 0.08 * Math.sin(t * Math.PI * 2 * 2));
    mesh.rotation.z += 0.015;
    mat.opacity = 0.38 * (1 - t * 0.5);
    // Névoa aumenta
    mist.scale.setScalar(1 + t * 0.25);
    mistMat.opacity = 0.13 + 0.18 * t * (1 - t);
    // Partículas se afastam e sobem
    particles.forEach(p => {
      p.r += p.speed * 0.04;
      p.mesh.position.x = pos.x + Math.cos(p.angle) * p.r;
      p.mesh.position.z = pos.z + Math.sin(p.angle) * p.r;
      p.mesh.position.y += 0.012 + 0.01 * Math.random();
      p.mesh.material.opacity = 0.7 * (1 - t);
    });
    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      scene.remove(mesh);
      geo.dispose();
      mat.dispose();
      scene.remove(mist);
      mistGeo.dispose();
      mistMat.dispose();
      particles.forEach(p => {
        scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
      });
    }
  }
  animate();
}

/**
 * Cria partículas de gelo brilhantes (AdditiveBlending)
 */
function createIceParticlesBright(pos, count, scene) {
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.07 + Math.random() * 0.05, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xe0f6ff,
      emissive: 0x99ccff,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.position.x += (Math.random() - 0.5) * 1.2;
    mesh.position.y += 0.1 + Math.random() * 0.2;
    mesh.position.z += (Math.random() - 0.5) * 1.2;
    group.add(mesh);
    // Anima subida e fade
    const start = performance.now();
    const duration = 420 + Math.random() * 180;
    const yStart = mesh.position.y;
    const xDir = (Math.random() - 0.5) * 1.2;
    const zDir = (Math.random() - 0.5) * 1.2;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.y = yStart + t * (0.9 + Math.random() * 0.4);
      mesh.position.x += xDir * 0.012;
      mesh.position.z += zDir * 0.012;
      mat.opacity = 0.85 * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        group.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }
  scene.add(group);
  setTimeout(() => scene.remove(group), 900);
}

/**
 * Cria fragmentos de gelo caindo após o impacto das estacas
 */
function createFallingIceFragments(pos, scene) {
  const group = new THREE.Group();
  const count = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const geo = new THREE.TetrahedronGeometry(0.08 + Math.random() * 0.05);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xcceeff,
      emissive: 0x99ccff,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.8,
      roughness: 0.4
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    mesh.position.x += (Math.random() - 0.5) * 0.3;
    mesh.position.z += (Math.random() - 0.5) * 0.3;
    mesh.position.y += 0.2 + Math.random() * 0.1;
    group.add(mesh);
    // Anima queda e fade
    const start = performance.now();
    const duration = 420 + Math.random() * 180;
    const yStart = mesh.position.y;
    const yEnd = yStart - (0.5 + Math.random() * 0.2);
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      mesh.position.y = yStart + (yEnd - yStart) * t;
      mat.opacity = 0.8 * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        group.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    animate();
  }
  scene.add(group);
  setTimeout(() => scene.remove(group), 900);
} 