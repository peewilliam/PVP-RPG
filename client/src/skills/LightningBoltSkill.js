// LightningBoltSkill.js - Efeito visual da habilidade Raio
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

/**
 * Cria o efeito visual de um raio
 * @param {THREE.Vector3} origin - Posição de origem do raio
 * @param {THREE.Vector3} target - Posição alvo do raio
 * @param {THREE.Scene} scene - Cena do Three.js onde adicionar o efeito
 * @param {Object} effect - Configurações adicionais do efeito
 */
export function spawnLightningBoltEffect(origin, target, scene, effect = {}) {
  // Garante que estamos usando Vector3
  const originPos = origin instanceof THREE.Vector3 ? origin : new THREE.Vector3(origin.x, origin.y, origin.z);
  const targetPos = target instanceof THREE.Vector3 ? target : new THREE.Vector3(target.x, target.y, target.z);
  
  // Cria o material para o raio
  const material = new THREE.LineBasicMaterial({ 
    color: effect.color || 0xffff99,
    linewidth: 3
  });
  
  // Cria o raio principal
  const mainPoints = [];
  mainPoints.push(originPos.clone().add(new THREE.Vector3(0, 0.7, 0)));
  mainPoints.push(targetPos.clone().add(new THREE.Vector3(0, 0.7, 0)));
  const mainGeometry = new THREE.BufferGeometry().setFromPoints(mainPoints);
  const mainLine = new THREE.Line(mainGeometry, material);
  scene.add(mainLine);
  
  // Cria raios secundários (ramificações)
  const lightningEffects = [mainLine];
  const branches = effect.branches || 3;
  
  for (let i = 0; i < branches; i++) {
    const lineLength = originPos.distanceTo(targetPos);
    const midPoint = new THREE.Vector3().lerpVectors(originPos, targetPos, Math.random() * 0.6 + 0.2);
    
    // Adiciona algum deslocamento aleatório ao ponto médio
    midPoint.x += (Math.random() - 0.5) * lineLength * 0.2;
    midPoint.y += (Math.random() - 0.5) * lineLength * 0.1 + 0.7;
    midPoint.z += (Math.random() - 0.5) * lineLength * 0.2;
    
    // Cria o raio secundário como uma sequência de 2 segmentos
    const branchPoints = [];
    const startPoint = new THREE.Vector3().lerpVectors(originPos, targetPos, Math.random() * 0.4 + 0.1).add(new THREE.Vector3(0, 0.7, 0));
    const endPoint = new THREE.Vector3().lerpVectors(originPos, targetPos, Math.random() * 0.3 + 0.6).add(new THREE.Vector3(0, 0.7, 0));
    
    // Adiciona deslocamento aleatório aos pontos finais
    endPoint.x += (Math.random() - 0.5) * 3;
    endPoint.z += (Math.random() - 0.5) * 3;
    
    branchPoints.push(startPoint);
    branchPoints.push(midPoint);
    branchPoints.push(endPoint);
    
    const branchGeometry = new THREE.BufferGeometry().setFromPoints(branchPoints);
    const branchMaterial = new THREE.LineBasicMaterial({ 
      color: effect.color || 0xffff99,
      transparent: true,
      opacity: 0.7
    });
    const branchLine = new THREE.Line(branchGeometry, branchMaterial);
    scene.add(branchLine);
    lightningEffects.push(branchLine);
  }
  
  // Adiciona efeito de luz
  const light = new THREE.PointLight(0xffffcc, 1, 10);
  light.position.copy(targetPos);
  scene.add(light);
  lightningEffects.push(light);
  
  // Efeito de flash global (opcional)
  if (!effect.noFlash) {
    const flashIntensity = effect.flashIntensity || 0.3;
    const ambientLight = scene.children.find(child => child instanceof THREE.AmbientLight);
    
    if (ambientLight) {
      const originalIntensity = ambientLight.intensity;
      ambientLight.intensity += flashIntensity;
      
      setTimeout(() => {
        ambientLight.intensity = originalIntensity;
      }, 100);
    }
  }
  
  // Remove os efeitos após o tempo especificado
  setTimeout(() => {
    lightningEffects.forEach(obj => scene.remove(obj));
  }, effect.duration || 180);
  
  return lightningEffects;
} 