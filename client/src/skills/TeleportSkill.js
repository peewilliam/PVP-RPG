// TeleportSkill.js - Efeito visual da habilidade Teleporte
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

/**
 * Cria o efeito visual de teleporte
 * @param {THREE.Vector3} origin - Posição de origem do teleporte
 * @param {THREE.Vector3} destination - Posição de destino do teleporte
 * @param {THREE.Object3D} [meshToMove=null] - Objeto 3D para ser teleportado (opcional)
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o efeito
 * @param {Object} effect - Configurações adicionais do efeito
 */
export function spawnTeleportEffect(origin, destination, scene, meshToMove = null, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const destPos = destination instanceof THREE.Vector3 ? destination : new THREE.Vector3(destination.x, destination.y, destination.z);
  
  // Efeito de flash na origem 
  const flashGeo = new THREE.RingGeometry(0.2, 0.7, 32);
  const flashMat = new THREE.MeshBasicMaterial({ 
    color: effect.color || 0xaa00ff, 
    side: THREE.DoubleSide, 
    transparent: true, 
    opacity: 0.7 
  });
  
  // Flash na origem
  const flash1 = new THREE.Mesh(flashGeo, flashMat.clone());
  flash1.position.copy(originPos);
  flash1.position.y += 0.5;
  flash1.rotation.x = -Math.PI/2;
  scene.add(flash1);
  
  // Flash no destino
  const flash2 = new THREE.Mesh(flashGeo, flashMat.clone());
  flash2.position.copy(destPos);
  flash2.position.y += 0.5;
  flash2.rotation.x = -Math.PI/2;
  scene.add(flash2);
  
  // Linhas de teleporte (opcional)
  if (!effect.noLines) {
    const lineMat = new THREE.LineBasicMaterial({ 
      color: effect.lineColor || 0xaa00ff,
      transparent: true,
      opacity: 0.5
    });
    
    // Cria pontos para várias linhas curvas
    for (let i = 0; i < 6; i++) {
      const curve = new THREE.QuadraticBezierCurve3(
        originPos.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0.5, Math.random() * 0.6 - 0.3)),
        new THREE.Vector3(
          (originPos.x + destPos.x) / 2 + (Math.random() * 4 - 2),
          Math.random() * 3 + 2, // Altura do ponto de controle
          (originPos.z + destPos.z) / 2 + (Math.random() * 4 - 2)
        ),
        destPos.clone().add(new THREE.Vector3(Math.random() * 0.6 - 0.3, 0.5, Math.random() * 0.6 - 0.3))
      );
      
      const points = curve.getPoints(20);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, lineMat.clone());
      scene.add(line);
      
      // Remove linha após um curto intervalo
      setTimeout(() => scene.remove(line), (effect.duration || 500) * 0.8);
    }
  }
  
  // Efeito de partículas (opcional)
  if (!effect.noParticles) {
    // Partículas na origem e destino
    const particleCount = 20;
    const particleGeo = new THREE.BufferGeometry();
    const particleMat = new THREE.PointsMaterial({
      color: effect.particleColor || 0xcc99ff,
      size: 0.2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Partículas na origem
    const particlesStart = [];
    for (let i = 0; i < particleCount; i++) {
      particlesStart.push(
        originPos.x + (Math.random() * 2 - 1),
        originPos.y + (Math.random() * 2),
        originPos.z + (Math.random() * 2 - 1)
      );
    }
    particleGeo.setAttribute('position', new THREE.Float32BufferAttribute(particlesStart, 3));
    const particleSystem1 = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem1);
    
    // Partículas no destino
    const particlesEnd = [];
    for (let i = 0; i < particleCount; i++) {
      particlesEnd.push(
        destPos.x + (Math.random() * 2 - 1),
        destPos.y + (Math.random() * 2),
        destPos.z + (Math.random() * 2 - 1)
      );
    }
    const particleGeo2 = new THREE.BufferGeometry();
    particleGeo2.setAttribute('position', new THREE.Float32BufferAttribute(particlesEnd, 3));
    const particleSystem2 = new THREE.Points(particleGeo2, particleMat.clone());
    scene.add(particleSystem2);
    
    // Remove partículas após um intervalo
    setTimeout(() => {
      scene.remove(particleSystem1);
      scene.remove(particleSystem2);
    }, effect.duration || 500);
  }
  
  // Remove os flashes após o tempo especificado
  setTimeout(() => {
    scene.remove(flash1);
    scene.remove(flash2);
  }, effect.duration || 500);
  
  // Teleporta o mesh se necessário
  if (meshToMove) {
    meshToMove.position.copy(destPos);
  }
  
  return { origin: originPos, destination: destPos };
} 