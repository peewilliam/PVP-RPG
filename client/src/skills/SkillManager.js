// SkillManager.js - Gerenciador central de habilidades no cliente
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';
import { spawnFireballEffect, updateFireballProjectiles } from './FireballSkill.js';
import { spawnIceSpikeEffect, updateIceSpikeProjectiles } from './IceSpikeSkill.js';
import { spawnTeleportEffect } from './TeleportSkill.js';
import { spawnLightningBoltEffect } from './LightningBoltSkill.js';

/**
 * Gerencia todas as habilidades do jogo no cliente
 */
export class SkillManager {
  constructor(scene) {
    this.scene = scene;
    this.lastUpdate = performance.now();
    this.playerCooldowns = {};  // Controle local de cooldowns {abilityId: timestamp}
    this.playerMana = 100;      // Mana do jogador local
  }
  
  /**
   * Atualiza os projéteis e efeitos visuais das habilidades
   */
  update() {
    const now = performance.now();
    const delta = (now - this.lastUpdate) / 1000; // Delta em segundos
    this.lastUpdate = now;
    
    // Atualiza projéteis ativos se as funções existirem
    if (typeof updateFireballProjectiles === 'function') {
      updateFireballProjectiles(delta, this.scene);
    }
    
    if (typeof updateIceSpikeProjectiles === 'function') {
      updateIceSpikeProjectiles(delta, this.scene);
    }
  }
  
  /**
   * Verifica se uma habilidade pode ser usada localmente
   * @param {number} abilityId - ID da habilidade
   * @returns {boolean} - true se a habilidade pode ser usada
   */
  canUseAbility(abilityId) {
    const now = Date.now();
    const ability = this.getAbilityById(abilityId);
    
    if (!ability) return false;
    
    // Verifica cooldown local
    if (this.playerCooldowns[abilityId] && 
        now - this.playerCooldowns[abilityId] < ability.COOLDOWN) {
      console.log(`Habilidade ${ability.NAME} em cooldown!`);
      return false;
    }
    
    // Verifica mana
    if (this.playerMana < ability.MANA_COST) {
      console.log(`Mana insuficiente para usar ${ability.NAME}!`);
      return false;
    }
    
    return true;
  }
  
  /**
   * Inicia o cooldown local de uma habilidade
   * @param {number} abilityId - ID da habilidade
   * @param {number} [timestamp=Date.now()] - Timestamp do início do cooldown
   */
  startCooldown(abilityId, timestamp = Date.now()) {
    this.playerCooldowns[abilityId] = timestamp;
  }
  
  /**
   * Atualiza a mana do jogador local
   * @param {number} mana - Nova mana do jogador
   */
  updateMana(mana) {
    this.playerMana = mana;
  }
  
  /**
   * Retorna a configuração de uma habilidade pelo ID
   * @param {number} abilityId - ID da habilidade
   * @returns {Object|null} - Configuração da habilidade ou null se não encontrada
   */
  getAbilityById(abilityId) {
    switch (abilityId) {
      case 1: return SKILLS.FIREBALL;
      case 2: return SKILLS.TELEPORT;
      case 3: return SKILLS.FROST_SPIKES;
      case 4: return SKILLS.METEOR_STORM;
      default: return null;
    }
  }
  
  /**
   * Executa o efeito visual de uma habilidade
   * @param {number} abilityId - ID da habilidade
   * @param {THREE.Vector3} origin - Posição de origem
   * @param {THREE.Vector3} target - Posição alvo
   * @param {THREE.Object3D} [caster=null] - Objeto que está lançando a habilidade
   * @param {Object} [effect={}] - Configurações adicionais do efeito
   * @returns {Object|null} - Resultado do efeito ou null se falhar
   */
  spawnSkillEffect(abilityId, origin, target, caster = null, effect = {}) {
    try {
      const ability = this.getAbilityById(abilityId);
      if (!ability) {
        console.warn(`Habilidade de ID ${abilityId} não encontrada!`);
        return null;
      }
      
      console.log(`Executando efeito visual da habilidade: ${ability.NAME} (ID: ${abilityId})`);
      
      switch (abilityId) {
        case 1: // FIREBALL
          return spawnFireballEffect(origin, target, this.scene, effect);
        case 2: // TELEPORT
          return spawnTeleportEffect(origin, target, this.scene, caster, effect);
        case 3: // FROST_SPIKES
          // Se não tiver implementação específica, cria um efeito genérico
          this.createSimpleEffect(origin, target, 0x00ffff, caster); // Azul claro
          return { success: true };
        case 4: // METEOR_STORM
          // Se não tiver implementação específica, cria um efeito genérico
          this.createSimpleEffect(origin, target, 0xff6600, caster); // Laranja
          return { success: true };
        default:
          console.warn(`Implementação visual para habilidade ID ${abilityId} não encontrada!`);
          return null;
      }
    } catch (error) {
      console.error(`Erro ao executar efeito da habilidade ${abilityId}:`, error);
      return null;
    }
  }
  
  /**
   * Cria um efeito visual simples para habilidades sem implementação específica
   * @private
   */
  createSimpleEffect(origin, target, color = 0xffffff, caster = null) {
    const geometry = new THREE.SphereGeometry(0.5, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
      color: color,
      transparent: true,
      opacity: 0.7
    });
    
    const effect = new THREE.Mesh(geometry, material);
    effect.position.copy(target);
    effect.position.y += 0.5; // Ligeiramente acima do chão
    
    this.scene.add(effect);
    
    // Efeito de expansão e desaparecimento
    const duration = 1000; // 1 segundo
    const startTime = performance.now();
    
    const animate = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Escala aumenta com o tempo
      const scale = 1 + progress * 3;
      effect.scale.set(scale, scale, scale);
      
      // Opacidade diminui com o tempo
      effect.material.opacity = 0.7 * (1 - progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Remove o efeito quando terminar
        this.scene.remove(effect);
        effect.geometry.dispose();
        effect.material.dispose();
      }
    };
    
    animate();
  }
} 