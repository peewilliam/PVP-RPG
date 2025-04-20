// TeleportSkill.js - Efeito visual da habilidade Teleporte
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

/**
 * Cria o efeito visual de teleporte (completo, com fade no player)
 * @param {THREE.Vector3} origin - Posição de origem do teleporte
 * @param {THREE.Vector3} destination - Posição de destino do teleporte
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o efeito
 * @param {THREE.Object3D} [meshToMove=null] - Objeto 3D para fade out/in (opcional)
 * @param {Object} effect - Configurações adicionais do efeito
 */
export function spawnTeleportEffect(origin, destination, scene, meshToMove = null, effect = {}) {
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const destPos = destination instanceof THREE.Vector3 ? destination : new THREE.Vector3(destination.x, destination.y, destination.z);

  // --- FLASH CIRCULAR INTENSO ---
  function createFlashCircle(pos) {
    const flashGeo = new THREE.RingGeometry(0.2, 1.1, 48);
    const flashMat = new THREE.MeshStandardMaterial({
      color: 0xffe066,
      emissive: 0xffd700,
      emissiveIntensity: 2.5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.position.copy(pos);
    flash.position.y += 0.1;
    flash.rotation.x = -Math.PI/2;
    scene.add(flash);
    // Anima expansão e fade
    const start = performance.now();
    const duration = 420;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      flash.scale.setScalar(1.0 + t * 2.5);
      flashMat.opacity = 0.7 * (1 - t);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        scene.remove(flash);
        flashGeo.dispose();
        flashMat.dispose();
      }
    }
    animate();
  }

  // --- PILAR DE LUZ DOURADO ALTO ---
  function createLightPillar(pos) {
    const pillarGeo = new THREE.CylinderGeometry(0.45, 0.7, 3.5, 32, 1, true);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0xffe066,
      emissive: 0xffd700,
      emissiveIntensity: 3.5,
      transparent: true,
      opacity: 0.55,
      roughness: 0.25,
      metalness: 0.2
    });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.copy(pos);
    pillar.position.y += 1.7;
    scene.add(pillar);
    // Anima fade out
    const start = performance.now();
    const duration = 600;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      pillarMat.opacity = 0.55 * (1 - t);
      pillar.scale.y = 1.0 + t * 0.5;
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        scene.remove(pillar);
        pillarGeo.dispose();
        pillarMat.dispose();
      }
    }
    animate();
  }

  // --- PARTÍCULAS ASCENDENTES DOURADAS ---
  function createAscendParticles(pos) {
    const group = new THREE.Group();
    for (let i = 0; i < 18; i++) {
      const geo = new THREE.SphereGeometry(0.07 + Math.random() * 0.07, 8, 8);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffe066,
        emissive: 0xffd700,
        emissiveIntensity: 1.5,
        transparent: true,
        opacity: 0.7 + Math.random() * 0.2,
        roughness: 0.5
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.position.x += (Math.random() - 0.5) * 0.7;
      mesh.position.y += Math.random() * 0.2;
      mesh.position.z += (Math.random() - 0.5) * 0.7;
      group.add(mesh);
      // Anima subida e fade
      const start = performance.now();
      const duration = 700 + Math.random() * 300;
      const yStart = mesh.position.y;
      function animate() {
        const now = performance.now();
        const t = Math.min((now - start) / duration, 1);
        mesh.position.y = yStart + t * (0.7 + Math.random() * 0.5);
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
    setTimeout(() => scene.remove(group), 1200);
  }

  // --- Linhas de energia entre origem e destino ---
  function createTeleportLines() {
    const lineMat = new THREE.LineBasicMaterial({ 
      color: effect.lineColor || 0xffe066,
      transparent: true,
      opacity: 0.5
    });
    for (let i = 0; i < 6; i++) {
      const curve = new THREE.QuadraticBezierCurve3(
        originPos.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0.5, Math.random() * 0.6 - 0.3)),
        new THREE.Vector3(
          (originPos.x + destPos.x) / 2 + (Math.random() * 4 - 2),
          Math.random() * 3 + 2,
          (originPos.z + destPos.z) / 2 + (Math.random() * 4 - 2)
        ),
        destPos.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0.5, Math.random() * 0.6 - 0.3))
      );
      const points = curve.getPoints(20);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat.clone());
      scene.add(line);
      setTimeout(() => scene.remove(line), (effect.duration || 500) * 0.8);
    }
  }

  // --- Partículas extras na origem e destino ---
  function createExtraParticles(pos) {
    const particleCount = 20;
    const particleGeo = new THREE.BufferGeometry();
    const particleMat = new THREE.PointsMaterial({
      color: effect.particleColor || 0xcc99ff,
      size: 0.2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        pos.x + (Math.random() * 2 - 1),
        pos.y + (Math.random() * 2),
        pos.z + (Math.random() * 2 - 1)
      );
    }
    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);
    setTimeout(() => scene.remove(particleSystem), effect.duration || 500);
  }

  // --- Fade out/in do player (se meshToMove fornecido) ---
  function fadePlayer(mesh, fadeOut = true, cb) {
    if (!mesh || !mesh.material) return cb && cb();
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const start = performance.now();
    const duration = 120;
    function animate() {
      const now = performance.now();
      const t = Math.min((now - start) / duration, 1);
      materials.forEach(mat => {
        mat.transparent = true;
        mat.opacity = fadeOut ? 1 - t : t;
      });
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        if (!fadeOut) materials.forEach(mat => { mat.opacity = 1; });
        if (cb) cb();
      }
    }
    animate();
  }

  // --- Execução do efeito completo ---
  // Efeito na origem
  createFlashCircle(originPos);
  createLightPillar(originPos);
  createAscendParticles(originPos);
  createExtraParticles(originPos);

  // Linhas de energia
  createTeleportLines();

  // Fade out/in do player (se fornecido)
  if (meshToMove) {
    fadePlayer(meshToMove, true, () => {
      setTimeout(() => {
        meshToMove.position.copy(destPos);
        // Efeito no destino
        createFlashCircle(destPos);
        createLightPillar(destPos);
        createAscendParticles(destPos);
        createExtraParticles(destPos);
        fadePlayer(meshToMove, false);
      }, 60);
    });
  } else {
    setTimeout(() => {
      createFlashCircle(destPos);
      createLightPillar(destPos);
      createAscendParticles(destPos);
      createExtraParticles(destPos);
    }, 60);
  }
} 