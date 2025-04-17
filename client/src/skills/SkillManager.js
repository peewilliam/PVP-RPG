// SkillManager.js - Gerenciador central de habilidades no cliente
import * as THREE from 'three';
import { SKILLS } from '../../../shared/skills/skillsConfig.js';
import { spawnFireballEffect, updateFireballProjectiles } from './FireballSkill.js';
import { spawnIceSpikeEffect, updateIceSpikeProjectiles } from './IceSpikeSkill.js';
import { spawnTeleportEffect } from './TeleportSkill.js';
import { spawnMeteorStormEffect } from './MeteorStormSkill.js';

/**
 * Gerencia todas as habilidades do jogo no cliente
 */
export class SkillManager {
  constructor(scene) {
    this.scene = scene;
    this.lastUpdate = performance.now();
    this.playerCooldowns = {};  // Controle local de cooldowns {abilityId: timestamp}
    this.playerMana = 250;      // Mana do jogador local
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
    
    if (!ability) {
      console.warn(`Habilidade com ID ${abilityId} não encontrada`);
      return false;
    }
    
    // Verifica cooldown local
    if (this.playerCooldowns[abilityId]) {
      // O valor armazenado é o timestamp de quando o cooldown termina
      const cooldownEndTime = this.playerCooldowns[abilityId];
      const remainingTime = Math.max(0, cooldownEndTime - now);
      
      if (remainingTime > 0) {
        // Formatação mais legível do tempo restante
        const remainingSeconds = (remainingTime / 1000).toFixed(1);
        console.log(`Habilidade ${ability.NAME} em cooldown! Tempo restante: ${remainingSeconds}s`);
        return false;
      }
    }
    
    // Verifica mana
    if (this.playerMana < ability.MANA_COST) {
      console.log(`Mana insuficiente para usar ${ability.NAME}! Necessário: ${ability.MANA_COST}, Atual: ${this.playerMana.toFixed(1)}`);
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
          // Atualizado: Usa a nova implementação 3D detalhada da estaca de gelo
          return spawnIceSpikeEffect(
            origin,
            target,
            this.scene,
            caster,
            {
              radius: SKILLS.FROST_SPIKES.AREA_RADIUS,
              delay: SKILLS.FROST_SPIKES.DELAY,
              spikeCount: 12 // Número de estacas a criar
            }
          );
        case 4: // METEOR_STORM
          return spawnMeteorStormEffect(origin, target, this.scene, effect);
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

  useAbility(abilityIndex) {
    const abilityId = this.abilitiesInSlots[abilityIndex];
    
    if (!abilityId) {
      console.warn(`Não há habilidade no slot ${abilityIndex + 1}`);
      return false;
    }

    const ability = this.abilitiesConfig.find(a => a.id === abilityId);
    
    if (!ability) {
      console.warn(`Configuração não encontrada para habilidade ID ${abilityId}`);
      return false;
    }

    // Verifica se a habilidade está em cooldown
    if (this.cooldowns[abilityIndex] > 0) {
      console.log(`Habilidade ${ability.name} ainda está em cooldown: ${this.cooldowns[abilityIndex].toFixed(1)}s`);
      return false;
    }

    // Verifica se o jogador tem mana suficiente
    const currentStats = this.playerManager.getCurrentStats();
    if (currentStats.mana < ability.mana) {
      console.log(`Mana insuficiente para usar ${ability.name}. Necessário: ${ability.mana}, Atual: ${currentStats.mana.toFixed(1)}`);
      return false;
    }

    // Envia evento para o servidor
    this.socket.emit(EVENTS.PLAYER.USE_ABILITY, {
      abilityId: abilityId,
      targetPosition: this.getMouseTargetPosition(),
      currentPosition: this.playerManager.getPlayerPosition()
    });

    // Define o cooldown visual (o servidor definirá o cooldown real)
  }

  /**
   * Retorna o motivo pelo qual uma habilidade não pode ser usada
   * @param {number} abilityId - ID da habilidade
   * @returns {string} - Motivo formatado para exibição
   */
  getWhyCannotUse(abilityId) {
    const now = Date.now();
    const ability = this.getAbilityById(abilityId);
    
    if (!ability) {
      return "Habilidade inválida";
    }
    
    // Verifica cooldown local
    if (this.playerCooldowns[abilityId]) {
      const cooldownEndTime = this.playerCooldowns[abilityId];
      const remainingTime = Math.max(0, cooldownEndTime - now);
      
      if (remainingTime > 0) {
        const remainingSeconds = (remainingTime / 1000).toFixed(1);
        return `Em cooldown: ${remainingSeconds}s`;
      }
    }
    
    // Verifica mana
    if (this.playerMana < ability.MANA_COST) {
      return `Mana insuficiente (${this.playerMana.toFixed(0)}/${ability.MANA_COST})`;
    }
    
    return "Pronto para usar";
  }
} 