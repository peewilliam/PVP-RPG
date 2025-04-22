// HUDManager.js
import { SKILLS } from '../../../shared/skills/skillsConfig.js';
import { ChatManager } from './ChatManager.js';

export class HUDManager {
  constructor() {
    // Habilidades disponíveis (usando o objeto centralizado SKILLS)
    this.abilities = [
      {
        id: SKILLS.FIREBALL.ID,
        name: SKILLS.FIREBALL.NAME,
        description: SKILLS.FIREBALL.DESCRIPTION,
        cooldown: SKILLS.FIREBALL.COOLDOWN,
        mana: SKILLS.FIREBALL.MANA_COST,
        icon: SKILLS.FIREBALL.ICON,
      },
      {
        id: SKILLS.TELEPORT.ID,
        name: SKILLS.TELEPORT.NAME,
        description: SKILLS.TELEPORT.DESCRIPTION,
        cooldown: SKILLS.TELEPORT.COOLDOWN,
        mana: SKILLS.TELEPORT.MANA_COST,
        icon: SKILLS.TELEPORT.ICON,
      },
      {
        id: SKILLS.FROST_SPIKES.ID,
        name: SKILLS.FROST_SPIKES.NAME,
        description: SKILLS.FROST_SPIKES.DESCRIPTION,
        cooldown: SKILLS.FROST_SPIKES.COOLDOWN,
        mana: SKILLS.FROST_SPIKES.MANA_COST,
        icon: SKILLS.FROST_SPIKES.ICON,
      },
      {
        id: SKILLS.METEOR_STORM.ID,
        name: SKILLS.METEOR_STORM.NAME,
        description: SKILLS.METEOR_STORM.DESCRIPTION,
        cooldown: SKILLS.METEOR_STORM.COOLDOWN,
        mana: SKILLS.METEOR_STORM.MANA_COST,
        icon: SKILLS.METEOR_STORM.ICON,
      },
    ];
    // Mapeamento inicial: slots 1-4 com habilidades 1-4
    this.abilitySlots = [1, 2, 3, 4];
    this.createHUD();
    this.cooldowns = [0, 0, 0, 0];
    this.abilityMaxCooldowns = [0, 0, 0, 0];
    this.lastUpdate = Date.now();
    this.animateCooldowns();
    // Inicializa o chat lateral
    this.chatManager = new ChatManager(document.body);
  }

  createHUD() {
    this.hud = document.createElement('div');
    this.hud.id = 'hud';
    this.hud.style.position = 'fixed';
    this.hud.style.left = '50%';
    this.hud.style.bottom = '3vw';
    this.hud.style.transform = 'translateX(-50%)';
    this.hud.style.zIndex = '2000';
    this.hud.style.display = 'flex';
    this.hud.style.flexDirection = 'column';
    this.hud.style.alignItems = 'center';
    this.hud.style.width = '32vw';
    this.hud.style.minWidth = '240px';
    this.hud.style.maxWidth = '520px';
    this.hud.style.fontSize = 'min(1.2vw, 16px)';
    this.hud.innerHTML = `
      <div id="hud-barrow" style="display: flex; align-items: center; gap: 0; width: 100%;">
        <div id="hud-hp-wrap" style="position: relative; width: 40%; height: 2.2vw; min-width: 90px; max-width: 220px; display: flex; align-items: center;">
          <div id="hud-hp-bg" style="position: absolute; left: 0; top: 0.5vw; width: 100%; height: 1vw; background: #3a1818; border-radius: 0.6vw 0 0 0.6vw;"></div>
          <div id="hud-hp" style="position: absolute; left: 0; top: 0.5vw; height: 1vw; background: linear-gradient(90deg, #ff4444, #b80000); border-radius: 0.6vw 0 0 0; transition: width 0.2s;"></div>
          <div id="hud-hp-text" style="position: absolute; left: 1vw; top: 0.5vw; color: #fff; font-size: min(1vw, 13px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
        <div id="hud-center-diamond" style="width: 4.5vw; height: 4.5vw; min-width: 54px; min-height: 54px; display: flex; align-items: center; justify-content: center; position: relative; z-index:3; margin: 0 -0.5vw; overflow: visible;">
          <svg width="100%" height="100%" viewBox="-8 -8 80 80" style="position:absolute;left:0;top:0;z-index:1;overflow:visible;">
            <!-- Fundo da borda de XP -->
            <polygon points="32,4 60,32 32,60 4,32" fill="none" stroke="#8888" stroke-width="12" stroke-linejoin="round" /> <!-- Fundo cinza translúcido -->
            <!-- Borda de XP -->
            <polygon id="hud-xp-border" points="32,4 60,32 32,60 4,32" fill="none" stroke="#ffe066" stroke-width="12" stroke-linejoin="round" style="filter: drop-shadow(0 0 4px #ffb700cc);" />
            <!-- Losango de fundo -->
            <polygon points="32,4 60,32 32,60 4,32" fill="#000" stroke="#fff" stroke-width="3"/>
          </svg>
          <span id="hud-level" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: min(2vw, 22px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;">1</span>
        </div>
        <div id="hud-mp-wrap" style="position: relative; width: 40%; height: 2.2vw; min-width: 90px; max-width: 220px; display: flex; align-items: center;">
          <div id="hud-mp-bg" style="position: absolute; right: 0; top: 0.5vw; width: 100%; height: 1vw; background: #1a2a3a; border-radius: 0 0.6vw 0.6vw 0;"></div>
          <div id="hud-mp" style="position: absolute; right: 0; top: 0.5vw; height: 1vw; background: linear-gradient(90deg, #3399ff, #003366); border-radius: 0 0.6vw 0.6vw 0; transition: width 0.2s;"></div>
          <div id="hud-mp-text" style="position: absolute; right: 1vw; top: 0.5vw; color: #fff; font-size: min(1vw, 13px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
      </div>
      <div id="hud-slots" style="margin-top: 1vw; display: flex; gap: 0.6vw; width: 100%; justify-content: center;"></div>
    `;
    document.body.appendChild(this.hud);
    this.renderAbilitySlots();

    // --- HUD de Alvo (Target) ---
    if (!document.querySelector('.target-ui')) {
      const targetHud = document.createElement('div');
      targetHud.className = 'target-ui';
      targetHud.style.display = 'none';
      targetHud.innerHTML = `
        <div class="target-header">
          <span class="target-icon">👤</span>
          <span class="target-name">Nome</span>
        </div>
        <div class="target-bars">
          <div class="hp-bar">
            <div class="hp-fill" style="width: 100%"></div>
            <span class="hp-text">0 / 0</span>
          </div>
          <div class="mana-bar">
            <div class="mana-fill" style="width: 100%"></div>
            <span class="mana-text">0 / 0</span>
          </div>
        </div>
        <div class="target-status"></div>
      `;
      
      // Estilização completa conforme especificado
      targetHud.style.position = 'absolute';
      targetHud.style.top = '0px';
      targetHud.style.left = '50%';
      targetHud.style.transform = 'translateX(-50%)';
      targetHud.style.width = '400px';
      targetHud.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
      targetHud.style.borderRadius = '10px';
      targetHud.style.padding = '10px';
      targetHud.style.fontFamily = 'Segoe UI, sans-serif';
      targetHud.style.color = 'white';
      targetHud.style.boxShadow = '0 0 10px #000';
      targetHud.style.zIndex = '3000';
      
      // Estilização do cabeçalho
      const header = targetHud.querySelector('.target-header');
      header.style.display = 'flex';
      header.style.justifyContent = 'space-between';
      header.style.fontWeight = 'bold';
      header.style.marginBottom = '5px';
      header.style.fontSize = '14px';
      
      // Estilização das barras
      const bars = targetHud.querySelector('.target-bars');
      bars.style.marginBottom = '5px';
      
      // Estilização das barras de HP e mana
      const hpBar = targetHud.querySelector('.hp-bar');
      const manaBar = targetHud.querySelector('.mana-bar');
      [hpBar, manaBar].forEach(bar => {
        bar.style.position = 'relative';
        bar.style.height = '20px';
        bar.style.borderRadius = '4px';
        bar.style.overflow = 'hidden';
        bar.style.marginBottom = '3px';
      });
      
      // Estilização específica da barra de HP
      hpBar.style.backgroundColor = '#440000';
      const hpFill = targetHud.querySelector('.hp-fill');
      hpFill.style.background = 'linear-gradient(to right, #ff3333, #cc0000)';
      hpFill.style.height = '100%';
      const hpText = targetHud.querySelector('.hp-text');
      hpText.style.position = 'absolute';
      hpText.style.width = '100%';
      hpText.style.textAlign = 'center';
      hpText.style.top = '0';
      hpText.style.lineHeight = '20px';
      hpText.style.fontSize = '13px';
      
      // Estilização específica da barra de mana
      manaBar.style.backgroundColor = '#003366';
      const manaFill = targetHud.querySelector('.mana-fill');
      manaFill.style.background = 'linear-gradient(to right, #3399ff, #0066cc)';
      manaFill.style.height = '100%';
      const manaText = targetHud.querySelector('.mana-text');
      manaText.style.position = 'absolute';
      manaText.style.width = '100%';
      manaText.style.textAlign = 'center';
      manaText.style.top = '0';
      manaText.style.lineHeight = '20px';
      manaText.style.fontSize = '13px';
      
      // Estilização dos ícones de status
      const statusDiv = targetHud.querySelector('.target-status');
      statusDiv.style.display = 'flex';
      statusDiv.style.gap = '5px';
      statusDiv.style.justifyContent = 'flex-end';
      
      // Estilo para as imagens de status (aplicado via JS ao criar dinamicamente)
      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.textContent = `
        .target-status img {
          width: 20px;
          height: 20px;
        }
      `;
      document.head.appendChild(styleSheet);
      
      document.body.appendChild(targetHud);
    }

    // Cria o elemento de tooltip customizado
    this.tooltip = document.createElement('div');
    this.tooltip.id = 'hud-tooltip';
    this.tooltip.style.position = 'fixed';
    this.tooltip.style.zIndex = '3000';
    this.tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    this.tooltip.style.borderRadius = '8px';
    this.tooltip.style.padding = '10px';
    this.tooltip.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    this.tooltip.style.color = '#fff';
    this.tooltip.style.fontSize = '14px';
    this.tooltip.style.fontFamily = 'Arial, sans-serif';
    this.tooltip.style.pointerEvents = 'none';
    this.tooltip.style.maxWidth = '240px';
    this.tooltip.style.display = 'none';
    document.body.appendChild(this.tooltip);
  }

  // Renderiza os slots de habilidades com ícones, drag-and-drop e tooltips
  renderAbilitySlots() {
    const slotsDiv = document.getElementById('hud-slots');
    slotsDiv.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const slotDiv = document.createElement('div');
      slotDiv.className = 'hud-slot';
      slotDiv.id = `slot-${i + 1}`;
      slotDiv.style.width = '44px';
      slotDiv.style.height = '44px';
      slotDiv.style.background = 'linear-gradient(145deg, #1a2334, #2a3349)';
      slotDiv.style.borderRadius = '8px';
      slotDiv.style.border = '2px solid #334466';
      slotDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1)';
      slotDiv.style.position = 'relative';
      slotDiv.style.display = 'flex';
      slotDiv.style.alignItems = 'center';
      slotDiv.style.justifyContent = 'center';
      slotDiv.style.cursor = 'pointer';
      slotDiv.style.transition = 'all 0.2s ease';
      slotDiv.style.overflow = 'hidden';
      
      // Efeito hover
      slotDiv.addEventListener('mouseenter', () => {
        if (this.cooldowns[i] <= 0) {
          slotDiv.style.boxShadow = '0 2px 8px rgba(120,180,255,0.4), inset 0 1px 1px rgba(255,255,255,0.2)';
          slotDiv.style.border = '2px solid #5599ff';
        }
      });
      
      slotDiv.addEventListener('mouseleave', () => {
        slotDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1)';
        slotDiv.style.border = '2px solid #334466';
      });
      
      // Ícone da habilidade
      const abilityId = this.abilitySlots[i];
      const ability = this.abilities.find(a => a.id === abilityId);
      const iconSpan = document.createElement('span');
      if (ability && ability.icon && ability.icon.endsWith('.png')) {
        iconSpan.innerHTML = `<img src='${ability.icon}' alt='${ability.name}' class='skill-icon-img' style='width:100%;height:100%;object-fit:cover;display:block;margin:0;border-radius:6px;transition:all 0.2s ease;'>`;
      } else {
        iconSpan.textContent = ability ? ability.icon : '?';
        iconSpan.style.fontSize = '28px';
        iconSpan.style.userSelect = 'none';
      }
      slotDiv.appendChild(iconSpan);
      
      // Tooltip customizado em vez de title
      slotDiv.addEventListener('mouseenter', (e) => {
        if (!ability) return;
        
        this.tooltip.innerHTML = `
          <div style="color: #ffcc66; font-weight: bold; font-size: 16px; margin-bottom: 5px; text-align: center;">
            ${ability.name}
          </div>
          <div style="margin-bottom: 8px; color: #eee;">
            ${ability.description}
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #77bbff;">Mana: ${ability.mana}</span>
            <span style="color: #ffaa77;">CD: ${ability.cooldown/1000}s</span>
          </div>
          <div style="margin-top: 5px; font-size: 12px; color: #aaa; text-align: center;">
            (Slot ${i+1})
          </div>
        `;
        
        // Posicionamento do tooltip
        const rect = slotDiv.getBoundingClientRect();
        this.tooltip.style.left = `${rect.left + rect.width/2}px`;
        this.tooltip.style.top = `${rect.top - 10}px`;
        this.tooltip.style.transform = 'translate(-50%, -100%)';
        this.tooltip.style.display = 'block';
      });
      
      slotDiv.addEventListener('mouseleave', () => {
        this.tooltip.style.display = 'none';
      });
      
      // Drag-and-drop
      slotDiv.draggable = true;
      slotDiv.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', i);
      };
      slotDiv.ondragover = (e) => {
        e.preventDefault();
        slotDiv.style.background = '#444a';
      };
      slotDiv.ondragleave = (e) => {
        slotDiv.style.background = '#2226';
      };
      slotDiv.ondrop = (e) => {
        e.preventDefault();
        slotDiv.style.background = '#2226';
        const from = parseInt(e.dataTransfer.getData('text/plain'));
        this.swapAbilities(from, i);
      };
      
      // Número do slot
      const numSpan = document.createElement('span');
      numSpan.textContent = i + 1;
      numSpan.style.position = 'absolute';
      numSpan.style.left = '4px';
      numSpan.style.top = '2px';
      numSpan.style.fontSize = '13px';
      numSpan.style.color = '#fff';
      numSpan.style.background = 'rgba(0,0,0,0.55)';
      numSpan.style.padding = '1px 5px 1px 3px';
      numSpan.style.borderRadius = '6px';
      numSpan.style.zIndex = '2';
      numSpan.style.pointerEvents = 'none';
      numSpan.style.fontWeight = 'bold';
      slotDiv.appendChild(numSpan);
      
      slotsDiv.appendChild(slotDiv);
    }
  }

  // Troca habilidades entre slots
  swapAbilities(from, to) {
    // Troca as habilidades
    const temp = this.abilitySlots[from];
    this.abilitySlots[from] = this.abilitySlots[to];
    this.abilitySlots[to] = temp;
    
    // Troca os cooldowns também
    const tempCooldown = this.cooldowns[from];
    this.cooldowns[from] = this.cooldowns[to];
    this.cooldowns[to] = tempCooldown;
    
    // Troca os cooldowns máximos também
    const tempMaxCooldown = this.abilityMaxCooldowns[from];
    this.abilityMaxCooldowns[from] = this.abilityMaxCooldowns[to];
    this.abilityMaxCooldowns[to] = tempMaxCooldown;
    
    // Renderiza os slots com as novas posições
    this.renderAbilitySlots();
    
    // Atualiza o visual de cooldown para ambos os slots
    this.updateCooldownVisual(from + 1);
    this.updateCooldownVisual(to + 1);
  }

  update(stats, level, name, xp, nextLevelXp) {
    // console.log('[HUD] update - level:', level, 'xp:', xp, 'nextLevelXp:', nextLevelXp);
    const hp = Math.max(0, Math.round(stats.hp));
    const maxHp = Math.round(stats.maxHp);
    const mp = Math.max(0, Math.round(stats.mana));
    const maxMp = Math.round(stats.maxMana);
    document.getElementById('hud-hp').style.width = `${(hp / maxHp) * 100}%`;
    document.getElementById('hud-hp-text').textContent = `${hp} / ${maxHp}`;
    document.getElementById('hud-mp').style.width = `${(mp / maxMp) * 100}%`;
    document.getElementById('hud-mp-text').textContent = `${mp} / ${maxMp}`;
    document.getElementById('hud-level').textContent = `${level || 1}`;
    
    // Atualiza o estado visual das habilidades baseado na mana atual
    this.updateAbilityStates(mp);
    
    // XP na borda do losango
    if (typeof xp === 'number' && typeof nextLevelXp === 'number' && nextLevelXp > 0) {
      const xpPerc = Math.min(1, xp / nextLevelXp);
      // Comprimento do losango: 4 lados de ~39.6px (distância entre vértices)
      // sqrt((32-60)^2 + (4-32)^2) = sqrt(28^2 + 28^2) = sqrt(1568) ≈ 39.6
      // Perímetro ≈ 4 * 39.6 = 158.4
      const perimeter = 4 * Math.sqrt(Math.pow(32-60,2) + Math.pow(4-32,2));
      const dashArray = perimeter;
      const dashOffset = perimeter * (1 - xpPerc);
      const xpBorder = document.getElementById('hud-xp-border');
      xpBorder.setAttribute('stroke-dasharray', dashArray);
      xpBorder.setAttribute('stroke-dashoffset', dashOffset);
      xpBorder.style.opacity = '1';
    } else {
      const xpBorder = document.getElementById('hud-xp-border');
      const perimeter = 4 * Math.sqrt(Math.pow(32-60,2) + Math.pow(4-32,2));
      xpBorder.setAttribute('stroke-dasharray', perimeter); // dasharray completo
      xpBorder.setAttribute('stroke-dashoffset', perimeter); // dashoffset total (zerado)
      xpBorder.style.opacity = '1'; // sempre visível
    }
  }

  setCooldown(slot, cooldown, maxCooldown) {
    this.cooldowns[slot - 1] = cooldown;
    this.abilityMaxCooldowns[slot - 1] = maxCooldown;
    this.updateCooldownVisual(slot);
  }

  updateCooldownVisual(slot) {
    const slotDiv = document.getElementById(`slot-${slot}`);
    let overlay = slotDiv.querySelector('.cooldown-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'cooldown-overlay';
      overlay.style.position = 'absolute';
      overlay.style.left = '0';
      overlay.style.top = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0,10,30,0.75)';
      overlay.style.color = '#fff';
      overlay.style.fontWeight = 'bold';
      overlay.style.fontSize = '19px';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.borderRadius = '6px';
      overlay.style.backdropFilter = 'blur(1px)';
      overlay.style.textShadow = '0 0 4px #000';
      overlay.style.transition = 'all 0.15s ease-out';
      overlay.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.5)';
      slotDiv.appendChild(overlay);
    }
    if (this.cooldowns[slot - 1] > 0) {
      overlay.style.display = 'flex';
      overlay.textContent = Math.ceil(this.cooldowns[slot - 1] / 1000);
      
      // Cálculo da porcentagem de cooldown para efeito radial
      const percentRemaining = this.cooldowns[slot - 1] / this.abilityMaxCooldowns[slot - 1];
      const angle = percentRemaining * 360;
      
      // Gradiente radial para efeito de preenchimento circular
      overlay.style.background = `conic-gradient(
        transparent ${angle}deg, 
        rgba(0,10,30,0.75) ${angle}deg
      )`;
    } else {
      overlay.style.display = 'none';
    }
  }

  animateCooldowns() {
    const now = Date.now();
    const dt = now - this.lastUpdate;
    this.lastUpdate = now;
    let needsUpdate = false;
    for (let i = 0; i < 4; i++) {
      if (this.cooldowns[i] > 0) {
        this.cooldowns[i] = Math.max(0, this.cooldowns[i] - dt);
        this.updateCooldownVisual(i + 1);
        needsUpdate = true;
      }
    }
    requestAnimationFrame(() => this.animateCooldowns());
  }

  /**
   * Mostra ou esconde a mensagem de morte no HUD
   */
  showDeathMessage(show) {
    let deathMessage = document.getElementById('death-message');
    if (deathMessage && !show) {
      deathMessage.style.opacity = '0';
      setTimeout(() => {
        if (deathMessage && deathMessage.parentNode) {
          deathMessage.parentNode.removeChild(deathMessage);
        }
      }, 500);
      return;
    }
  }

  /**
   * Atualiza a barra de saúde
   * @param {number} currentHealth - Saúde atual
   * @param {number} maxHealth - Saúde máxima
   */
  updateHealth(currentHealth, maxHealth) {
    if (!this.healthBar || !this.healthText) return;

    const healthPercent = Math.max(0, currentHealth / maxHealth);
    this.healthBar.style.width = `${healthPercent * 100}%`;
    this.healthText.textContent = `${Math.floor(currentHealth)} / ${Math.floor(maxHealth)}`;
    
    // Adicionar efeito visual quando a vida está baixa
    if (healthPercent < 0.3) {
      this.healthBar.style.background = 'linear-gradient(to right, #7f0000, #c0392b)';
      
      // Adicionar animação de pulsação quando vida está muito baixa
      if (healthPercent < 0.15) {
        if (!this.lowHealthAnimation) {
          this.lowHealthAnimation = this.healthBar.animate(
            [
              { opacity: 0.7 },
              { opacity: 1 }
            ],
            {
              duration: 800,
              iterations: Infinity,
              direction: 'alternate',
              easing: 'ease-in-out'
            }
          );
        }
      } else if (this.lowHealthAnimation) {
        this.lowHealthAnimation.cancel();
        this.lowHealthAnimation = null;
        this.healthBar.style.opacity = 1;
      }
    } else {
      this.healthBar.style.background = 'linear-gradient(to right, #c0392b, #e74c3c)';
      if (this.lowHealthAnimation) {
        this.lowHealthAnimation.cancel();
        this.lowHealthAnimation = null;
        this.healthBar.style.opacity = 1;
      }
    }
  }

  /**
   * Atualiza o estado visual das habilidades baseado na mana disponível
   * @param {number} currentMana - Mana atual do jogador
   */
  updateAbilityStates(currentMana) {
    for (let i = 0; i < 4; i++) {
      const abilityId = this.abilitySlots[i];
      const ability = this.abilities.find(a => a.id === abilityId);
      if (!ability) continue;
      
      const slotDiv = document.getElementById(`slot-${i + 1}`);
      if (!slotDiv) continue;
      
      const iconSpan = slotDiv.querySelector('span:not(.cooldown-overlay)');
      if (!iconSpan) continue;
      
      // Se está em cooldown, não altera a aparência
      if (this.cooldowns[i] > 0) continue;
      
      // Verifica se tem mana suficiente
      const hasMana = currentMana >= ability.mana;
      
      // Atualiza a aparência do ícone
      if (hasMana) {
        iconSpan.style.color = ''; // Remove qualquer estilo específico
        iconSpan.style.opacity = '1';
        slotDiv.style.background = '#2226';
      } else {
        iconSpan.style.color = '#999'; // Tom cinza
        iconSpan.style.opacity = '0.6';
        slotDiv.style.background = '#1a1a1a80'; // Fundo mais escuro
      }
    }
  }

  // --- HUD de Alvo (Target) ---
  updateMonsterHUD(target) {
    const hud = document.querySelector('.target-ui');
    if (!hud) return;
    hud.style.display = 'block';
    hud.querySelector('.target-icon').textContent = '👹';
    hud.querySelector('.target-name').textContent = target.name;
    // Vida
    const hpPercent = (target.hp / target.maxHp) * 100;
    hud.querySelector('.hp-fill').style.width = hpPercent + '%';
    hud.querySelector('.hp-text').textContent = `${target.hp} / ${target.maxHp}`;
    // Esconde barra de mana/energia
    hud.querySelector('.mana-bar').style.display = 'none';
    // Status
    const statusDiv = hud.querySelector('.target-status');
    statusDiv.innerHTML = '';
    (target.status || []).forEach(st => {
      const span = document.createElement('span');
      span.textContent = st.icon;
      span.title = st.tooltip;
      span.className = 'status-icon';
      statusDiv.appendChild(span);
    });
  }

  updatePlayerHUD(target) {
    const hud = document.querySelector('.target-ui');
    if (!hud) return;
    hud.style.display = 'block';
    hud.querySelector('.target-icon').textContent = '👤';
    hud.querySelector('.target-name').textContent = target.name;
    // Vida
    const hpPercent = (target.hp / target.maxHp) * 100;
    hud.querySelector('.hp-fill').style.width = hpPercent + '%';
    hud.querySelector('.hp-text').textContent = `${target.hp} / ${target.maxHp}`;
    // Mana/energia
    const manaBar = hud.querySelector('.mana-bar');
    if (target.maxEnergy) {
      manaBar.style.display = 'block';
      const manaPercent = (target.energy / target.maxEnergy) * 100;
      hud.querySelector('.mana-fill').style.width = manaPercent + '%';
      hud.querySelector('.mana-text').textContent = `${target.energy} / ${target.maxEnergy}`;
    } else {
      manaBar.style.display = 'none';
    }
    // Status
    const statusDiv = hud.querySelector('.target-status');
    statusDiv.innerHTML = '';
    (target.status || []).forEach(st => {
      const span = document.createElement('span');
      span.textContent = st.icon;
      span.title = st.tooltip;
      span.className = 'status-icon';
      statusDiv.appendChild(span);
    });
  }

  clearMonsterHUD() {
    const hud = document.querySelector('.target-ui');
    if (hud) hud.style.display = 'none';
  }

  clearPlayerHUD() {
    const hud = document.querySelector('.target-ui');
    if (hud) hud.style.display = 'none';
  }

  // Métodos para adicionar mensagens ao chat lateral
  addSystemMessage(text) { this.chatManager.addSystemMessage(text); }
  addXPMessage(text) { this.chatManager.addXPMessage(text); }
  addCooldownMessage(text) { this.chatManager.addCooldownMessage(text); }
  addManaMessage(text) { this.chatManager.addManaMessage(text); }
  addErrorMessage(text) { this.chatManager.addErrorMessage(text); }
  addDamageMessage(text) { this.chatManager.addDamageMessage(text); }
  addHealMessage(text) { this.chatManager.addHealMessage(text); }
  addPlayerMessage(name, text, tab) { this.chatManager.addPlayerMessage(name, text, tab); }

  setChannel(channel) {
    if (this.chatManager) {
      this.chatManager.setChannel(channel);
    }
  }

  createHealthBar() {
    const healthBarOuter = document.createElement('div');
    healthBarOuter.classList.add('health-bar-outer');
    healthBarOuter.style.position = 'absolute';
    healthBarOuter.style.left = '20px';
    healthBarOuter.style.bottom = '80px';
    healthBarOuter.style.width = '230px';
    healthBarOuter.style.height = '22px';
    healthBarOuter.style.backgroundColor = 'rgba(0,0,0,0.6)';
    healthBarOuter.style.padding = '3px';
    healthBarOuter.style.borderRadius = '6px';
    healthBarOuter.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)';
    healthBarOuter.style.border = '1px solid #444';
    document.body.appendChild(healthBarOuter);

    const healthBar = document.createElement('div');
    healthBar.classList.add('health-bar');
    healthBar.style.width = '100%';
    healthBar.style.height = '100%';
    healthBar.style.backgroundColor = '#e74c3c';
    healthBar.style.background = 'linear-gradient(to right, #c0392b, #e74c3c)';
    healthBar.style.borderRadius = '4px';
    healthBar.style.boxShadow = 'inset 0 0 5px rgba(0,0,0,0.3)';
    healthBar.style.transition = 'width 0.3s ease-out';
    healthBarOuter.appendChild(healthBar);

    const healthText = document.createElement('div');
    healthText.classList.add('health-text');
    healthText.style.position = 'absolute';
    healthText.style.left = '0';
    healthText.style.top = '0';
    healthText.style.width = '100%';
    healthText.style.height = '100%';
    healthText.style.display = 'flex';
    healthText.style.alignItems = 'center';
    healthText.style.justifyContent = 'center';
    healthText.style.color = 'white';
    healthText.style.fontSize = '12px';
    healthText.style.fontWeight = 'bold';
    healthText.style.textShadow = '0 0 3px #000';
    healthBarOuter.appendChild(healthText);

    this.healthBar = healthBar;
    this.healthText = healthText;
  }

  createManaBar() {
    const manaBarOuter = document.createElement('div');
    manaBarOuter.classList.add('mana-bar-outer');
    manaBarOuter.style.position = 'absolute';
    manaBarOuter.style.left = '20px';
    manaBarOuter.style.bottom = '50px';
    manaBarOuter.style.width = '230px';
    manaBarOuter.style.height = '22px';
    manaBarOuter.style.backgroundColor = 'rgba(0,0,0,0.6)';
    manaBarOuter.style.padding = '3px';
    manaBarOuter.style.borderRadius = '6px';
    manaBarOuter.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)';
    manaBarOuter.style.border = '1px solid #444';
    document.body.appendChild(manaBarOuter);

    const manaBar = document.createElement('div');
    manaBar.classList.add('mana-bar');
    manaBar.style.width = '100%';
    manaBar.style.height = '100%';
    manaBar.style.backgroundColor = '#3498db';
    manaBar.style.background = 'linear-gradient(to right, #2980b9, #3498db)';
    manaBar.style.borderRadius = '4px';
    manaBar.style.boxShadow = 'inset 0 0 5px rgba(0,0,0,0.3)';
    manaBar.style.transition = 'width 0.3s ease-out';
    manaBarOuter.appendChild(manaBar);

    const manaText = document.createElement('div');
    manaText.classList.add('mana-text');
    manaText.style.position = 'absolute';
    manaText.style.left = '0';
    manaText.style.top = '0';
    manaText.style.width = '100%';
    manaText.style.height = '100%';
    manaText.style.display = 'flex';
    manaText.style.alignItems = 'center';
    manaText.style.justifyContent = 'center';
    manaText.style.color = 'white';
    manaText.style.fontSize = '12px';
    manaText.style.fontWeight = 'bold';
    manaText.style.textShadow = '0 0 3px #000';
    manaBarOuter.appendChild(manaText);

    this.manaBar = manaBar;
    this.manaText = manaText;
  }

  updateMana(currentMana, maxMana) {
    if (!this.manaBar || !this.manaText) return;

    const manaPercent = Math.max(0, currentMana / maxMana);
    this.manaBar.style.width = `${manaPercent * 100}%`;
    this.manaText.textContent = `${Math.floor(currentMana)} / ${Math.floor(maxMana)}`;
    
    // Adicionar efeito visual quando a mana está baixa
    if (manaPercent < 0.3) {
      this.manaBar.style.background = 'linear-gradient(to right, #1a5276, #2980b9)';
    } else {
      this.manaBar.style.background = 'linear-gradient(to right, #2980b9, #3498db)';
    }
  }

  /**
   * Exibe o modal de morte com penalidade, killer e botão de respawn
   * @param {Object} deathData - Dados do evento de morte
   */
  showDeathModal(deathData) {
    // Remove modal anterior se existir
    if (this.deathModal && this.deathModal.parentNode) {
      this.deathModal.parentNode.removeChild(this.deathModal);
    }
    this.deathModal = document.createElement('div');
    this.deathModal.id = 'death-modal';
    this.deathModal.style.position = 'fixed';
    this.deathModal.style.left = '0';
    this.deathModal.style.top = '0';
    this.deathModal.style.width = '100vw';
    this.deathModal.style.height = '100vh';
    this.deathModal.style.background = 'rgba(20, 10, 30, 0.92)';
    this.deathModal.style.display = 'flex';
    this.deathModal.style.flexDirection = 'column';
    this.deathModal.style.alignItems = 'center';
    this.deathModal.style.justifyContent = 'center';
    this.deathModal.style.zIndex = '9999';
    this.deathModal.style.fontFamily = 'Segoe UI, sans-serif';
    this.deathModal.innerHTML = `
      <div style="background: rgba(30,30,40,0.98); border-radius: 14px; box-shadow: 0 0 24px #000a; padding: 32px 28px; min-width: 260px; max-width: 92vw; text-align: center; border: 1.5px solid #444;">
        <div style="color: #ffe066; font-size: 1.6em; font-family: 'Segoe UI', serif; letter-spacing: 1px; margin-bottom: 0.5em;">
          <span style="vertical-align: middle; margin-right: 8px;">&#9760;</span>
          Você morreu
        </div>
        <div style="color: #fff; font-size: 1.1em; margin-bottom: 0.7em; display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <span>
            <b style='color:#ffe066;'>Nível:</b> Perdeu <b style='color:#ffe066;'>${deathData.lostLevel}</b> (agora: <b>${deathData.newLevel}</b>)
          </span>
          <span>
            <b style='color:#ffe066;'>XP:</b> Perdeu <b style='color:#ffe066;'>${deathData.lostXP}</b> (agora: <b>${deathData.newXP}</b>)
          </span>
        </div>
        <div style="color: #ffb700; font-size: 1em; margin-bottom: 1.1em;">
          <span style="vertical-align:middle;margin-right:4px;">⚔️</span>
          <b>${deathData.killerName || 'Desconhecido'}</b>
          <span style="color:#888; font-size:0.9em;">(${deathData.killerType || 'desconhecido'})</span>
        </div>
        <button id="btn-respawn" style="background: linear-gradient(90deg,#ffe066,#ffb700); color: #222; font-weight: bold; font-size: 1.1em; border: none; border-radius: 8px; padding: 10px 34px; cursor: pointer; box-shadow: 0 2px 8px #0007; transition: background 0.2s;">Respawnar</button>
      </div>
    `;
    document.body.appendChild(this.deathModal);
    // Bloqueia rolagem e inputs
    document.body.style.overflow = 'hidden';
    // Foco no botão
    const btn = this.deathModal.querySelector('#btn-respawn');
    if (btn) btn.focus();
  }

  /**
   * Remove o modal de morte e desbloqueia controles
   */
  hideDeathModal() {
    if (this.deathModal && this.deathModal.parentNode) {
      this.deathModal.parentNode.removeChild(this.deathModal);
      this.deathModal = null;
    }
    document.body.style.overflow = '';
  }
} 