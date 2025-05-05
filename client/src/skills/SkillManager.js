// SkillManager.js - Gerenciador central de habilidades no cliente
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

/**
 * Gerencia todas as habilidades do jogo no cliente
 */
export class SkillManager {
  constructor(scene) {
    this.scene = scene;
    this.abilitiesConfig = Object.values(SKILLS);
    this.cooldowns = {}; // slots -> cooldowns visuais
    this.playerCooldowns = {}; // id da habilidade -> timestamp quando termina
    this.playerMana = 100; // mana atual do jogador
    this.abilitiesInSlots = {};
  }
  
  /**
   * Atualiza os projéteis e efeitos visuais das habilidades
   */
  update() {
    // Atualiza cooldowns 
    const now = Date.now();
    
    // Para cada slot, atualiza o cooldown visual
    for (const slot in this.cooldowns) {
      if (this.cooldowns[slot] > 0) {
        this.cooldowns[slot] -= 1000/60; // Reduz aproximadamente 1s a cada 60 frames
        if (this.cooldowns[slot] < 0) {
          this.cooldowns[slot] = 0;
        }
      }
    }
  }
  
  /**
   * Verifica se uma habilidade pode ser usada
   * @param {number} abilityId - ID da habilidade
   * @returns {boolean} - true se a habilidade pode ser usada
   */
  canUseAbility(abilityId) {
    const now = Date.now();
    const ability = this.getAbilityById(abilityId);
    
    // Verifica se a habilidade existe
    if (!ability) {
      return false;
    }
    
    // Verifica cooldown
    if (this.playerCooldowns[abilityId] && this.playerCooldowns[abilityId] > now) {
      return false;
    }
    
    // Verifica mana
    if (this.playerMana < ability.MANA_COST) {
      return false;
    }
    
    return true;
  }
  
  /**
   * Inicia o cooldown visual de uma habilidade
   * @param {number} abilityId - ID da habilidade
   * @param {number} [timestamp=Date.now()] - Timestamp do início do cooldown
   */
  startCooldown(abilityId, timestamp = Date.now()) {
    const ability = this.getAbilityById(abilityId);
    if (!ability) return;
    
    this.playerCooldowns[abilityId] = timestamp + ability.COOLDOWN * 1000;
  }
  
  /**
   * Atualiza a mana do jogador (chamado quando a mana muda)
   * @param {number} mana - Nova mana do jogador
   */
  updateMana(mana) {
    this.playerMana = mana;
  }
  
  /**
   * Encontra uma habilidade pelo ID
   * @param {number} abilityId - ID da habilidade
   * @returns {Object|null} - Configuração da habilidade ou null se não encontrada
   */
  getAbilityById(abilityId) {
    return this.abilitiesConfig.find(a => a.ID === Number(abilityId));
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