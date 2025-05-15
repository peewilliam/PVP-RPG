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
    // Painel de métricas de performance
    this.createPerformancePanel();
    // Painel de status de predição
    this.createPredictionPanel();
    // Botão de configurações
    this.createSettingsButton();
    // Carregar configurações do usuário
    this.loadUserSettings();
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
    this.channel = channel;
    if (this.pingInterval) clearInterval(this.pingInterval);
    if (this.pingListener && this.channel && this.channel.off) {
      this.channel.off('pong', this.pingListener);
    }
    this.pingListener = () => {
      this.ping = Math.round(performance.now() - this.pingStartTime);
      console.log('[HUD] Pong recebido, ping:', this.ping);
    };
    if (this.channel && this.channel.on) {
      this.channel.on('pong', this.pingListener);
    }
    this.pingInterval = setInterval(() => this.sendPing(), 2000);
  }

  sendPing() {
    if (this.channel && this.channel.emit) {
      this.pingStartTime = performance.now();
      this.channel.emit('ping');
      console.log('[HUD] Ping enviado');
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
          <span style="color:#888; font-size:0.9em;">
            ${this.getKillerTypeLabel(deathData.killerType) ? `(${this.getKillerTypeLabel(deathData.killerType)})` : ''}
          </span>
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

  createPerformancePanel() {
    this.perfPanel = document.createElement('div');
    this.perfPanel.id = 'performance-panel';
    this.perfPanel.style.position = 'fixed';
    this.perfPanel.style.top = '8px';
    this.perfPanel.style.left = '8px';
    this.perfPanel.style.background = 'rgba(20,20,20,0.85)';
    this.perfPanel.style.color = '#fff';
    this.perfPanel.style.fontSize = '13px';
    this.perfPanel.style.padding = '8px 14px';
    this.perfPanel.style.borderRadius = '8px';
    this.perfPanel.style.zIndex = '4000';
    this.perfPanel.style.pointerEvents = 'none';
    this.perfPanel.innerHTML = 'FPS: --<br>FPS Média: --<br>Ping: --<br>Memória: --<br>Render: --ms<br>Monstros/UI: -- ms';
    document.body.appendChild(this.perfPanel);
    // FPS
    this.fps = 0;
    this.frameCount = 0;
    this.lastFpsTime = performance.now();
    // Ping
    this.ping = '--';
    this.pingStartTime = 0;
    this.pingInterval = null;
    this.pingListener = null;
    this.channel = null;
    // FPS histórico para média móvel
    if (!this.fpsHistory) this.fpsHistory = [];
    // Atualização do painel
    requestAnimationFrame(this.updatePerformancePanel.bind(this));
  }

  updatePerformancePanel(now) {
    // FPS instantâneo
    const realFps = typeof window.fps === 'number' ? window.fps : this.fps;
    // Histórico para média móvel
    if (!this.fpsHistory) this.fpsHistory = [];
    this.fpsHistory.push(realFps);
    if (this.fpsHistory.length > 30) this.fpsHistory.shift();
    const fpsAvg = this.fpsHistory.length
      ? Math.round(this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length)
      : '--';
    // Memória
    let mem = '--';
    if (window.performance && performance.memory) {
      mem = (performance.memory.usedJSHeapSize / 1048576).toFixed(1) + ' MB';
    }
    // Render e UI (placeholders, podem ser refinados)
    const renderMs = window.__lastRenderTimeMs || '--';
    const uiMs = window.__lastUiUpdateTimeMs || '--';
    // Históricos para média móvel
    if (!this.renderHistory) this.renderHistory = [];
    if (!this.uiHistory) this.uiHistory = [];
    if (renderMs !== '--') this.renderHistory.push(parseFloat(renderMs));
    if (uiMs !== '--') this.uiHistory.push(parseFloat(uiMs));
    if (this.renderHistory.length > 30) this.renderHistory.shift();
    if (this.uiHistory.length > 30) this.uiHistory.shift();
    const renderAvg = this.renderHistory.length
      ? (this.renderHistory.reduce((a, b) => a + b, 0) / this.renderHistory.length).toFixed(2)
      : '--';
    const uiAvg = this.uiHistory.length
      ? (this.uiHistory.reduce((a, b) => a + b, 0) / this.uiHistory.length).toFixed(2)
      : '--';
    // Render status
    function getPerfStatus(ms) {
      if (ms === '--') return {text: '', color: '#fff'};
      ms = parseFloat(ms);
      if (ms <= 16) return {text: 'Excelente', color: '#4caf50'};
      if (ms <= 25) return {text: 'Bom', color: '#ffe066'};
      if (ms <= 33) return {text: 'Aceitável', color: '#ff9800'};
      return {text: 'Ruim', color: '#f44336'};
    }
    const renderStatus = getPerfStatus(renderAvg);
    const uiStatus = getPerfStatus(uiAvg);
    // Ping status
    let pingText = '--';
    let pingStatus = '';
    let pingColor = '#fff';
    if (typeof this.ping === 'number') {
      pingText = `${this.ping} ms`;
      if (this.ping < 60) {
        pingStatus = 'Excelente';
        pingColor = '#4caf50';
      } else if (this.ping < 121) {
        pingStatus = 'Bom';
        pingColor = '#ffe066';
      } else if (this.ping < 201) {
        pingStatus = 'Ruim';
        pingColor = '#ff9800';
      } else {
        pingStatus = 'Péssimo';
        pingColor = '#f44336';
      }
      pingText += ` <span style="color:${pingColor}">${pingStatus}</span>`;
    }
    // --- NOVO: Métricas Three.js e da cena ---
    let lights = '--', objects = '--', geometries = '--', textures = '--', drawCalls = '--', mode = '--';
    let renderer = window.renderer;
    let scene = window.gameController && window.gameController.sceneManager && window.gameController.sceneManager.scene;
    if (scene) {
      lights = scene.children.filter(obj => obj.isLight).length;
      objects = scene.children.length;
    }
    if (!renderer && window.gameController && window.gameController.renderManager) {
      renderer = window.gameController.renderManager.renderer;
    }
    if (renderer && renderer.info) {
      geometries = renderer.info.memory.geometries;
      textures = renderer.info.memory.textures;
      drawCalls = renderer.info.render.calls;
    }
    // Detecta modo de renderização (composer ou puro)
    if (window.gameController && window.gameController.sceneManager) {
      const sm = window.gameController.sceneManager;
      mode = (sm.visualEffectsActive && sm.composer) ? 'Composer' : 'Render Puro';
    }

    this.perfPanel.innerHTML =
      `FPS: ${realFps}<br>` +
      `FPS Média: ${fpsAvg}<br>` +
      `Ping: ${pingText}<br>` +
      `Memória: ${mem}<br>` +
      `Render: ${renderAvg} ms <span style="color:${renderStatus.color}">${renderStatus.text}</span><br>` +
      `Monstros/UI: ${uiAvg} ms <span style="color:${uiStatus.color}">${uiStatus.text}</span><br>` +
      `<hr style="border:none;border-top:1px solid #333;margin:4px 0;">` +
      `Luzes: ${lights} | Objetos: ${objects}<br>` +
      `Geometrias: ${geometries} | Texturas: ${textures}<br>` +
      `Draw Calls: ${drawCalls}<br>` +
      `Modo: <b>${mode}</b>`;
    requestAnimationFrame(this.updatePerformancePanel.bind(this));
  }

  createSettingsButton() {
    this.settingsBtn = document.createElement('button');
    this.settingsBtn.id = 'settings-btn';
    this.settingsBtn.innerText = '⚙️';
    this.settingsBtn.title = 'Configurações';
    this.settingsBtn.style.position = 'fixed';
    this.settingsBtn.style.top = '8px';
    this.settingsBtn.style.right = '8px';
    this.settingsBtn.style.zIndex = '4100';
    this.settingsBtn.style.background = '#222';
    this.settingsBtn.style.color = '#ffe066';
    this.settingsBtn.style.border = 'none';
    this.settingsBtn.style.borderRadius = '50%';
    this.settingsBtn.style.width = '40px';
    this.settingsBtn.style.height = '40px';
    this.settingsBtn.style.fontSize = '22px';
    this.settingsBtn.style.cursor = 'pointer';
    this.settingsBtn.style.boxShadow = '0 2px 8px #0008';
    this.settingsBtn.addEventListener('click', () => this.toggleSettingsMenu());
    document.body.appendChild(this.settingsBtn);
    this.createSettingsMenu();
  }

  createSettingsMenu() {
    this.settingsMenu = document.createElement('div');
    this.settingsMenu.id = 'settings-menu';
    this.settingsMenu.style.position = 'fixed';
    this.settingsMenu.style.top = '60px';
    this.settingsMenu.style.right = '16px';
    this.settingsMenu.style.background = 'rgba(30,30,30,0.98)';
    this.settingsMenu.style.color = '#fff';
    this.settingsMenu.style.padding = '24px 28px';
    this.settingsMenu.style.borderRadius = '12px';
    this.settingsMenu.style.zIndex = '4200';
    this.settingsMenu.style.display = 'none';
    this.settingsMenu.style.minWidth = '320px';
    this.settingsMenu.style.boxShadow = '0 4px 24px #000b';
    this.settingsMenu.innerHTML = `
      <h2 style="margin-top:0;font-size:20px;color:#ffe066;">Configurações</h2>
      <label><input type="checkbox" id="setting-effects"> Efeitos visuais avançados</label><br>
      <label><input type="checkbox" id="setting-lod"> Qualidade alta de modelos (LOD)</label><br>
      <label><input type="checkbox" id="setting-bars"> Barras/nome flutuante em tempo real</label><br>
      <label><input type="checkbox" id="setting-compression"> Compressão de dados</label><br>
      <label><input type="checkbox" id="setting-fpslimit"> Limitar FPS a 30</label><br>
      <button id="settings-save" style="margin-top:18px;padding:8px 18px;background:#ffe066;color:#222;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">Salvar</button>
      <button id="settings-close" style="margin-top:18px;margin-left:12px;padding:8px 18px;background:#333;color:#fff;border:none;border-radius:6px;cursor:pointer;">Fechar</button>
    `;
    document.body.appendChild(this.settingsMenu);
    this.settingsMenu.querySelector('#settings-save').onclick = () => this.saveUserSettings();
    this.settingsMenu.querySelector('#settings-close').onclick = () => this.toggleSettingsMenu(false);
  }

  toggleSettingsMenu(force) {
    const show = force !== undefined ? force : this.settingsMenu.style.display === 'none';
    this.settingsMenu.style.display = show ? 'block' : 'none';
  }

  loadUserSettings() {
    const settings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
    this.settingsMenu.querySelector('#setting-effects').checked = settings.visualEffects !== false;
    this.settingsMenu.querySelector('#setting-lod').checked = settings.lod !== false;
    this.settingsMenu.querySelector('#setting-bars').checked = settings.bars !== false;
    this.settingsMenu.querySelector('#setting-compression').checked = settings.compression !== false;
    this.settingsMenu.querySelector('#setting-fpslimit').checked = settings.fpslimit === true;
    window.__pvpRpgUserSettings = settings;
  }

  saveUserSettings() {
    const settings = {
      visualEffects: this.settingsMenu.querySelector('#setting-effects').checked,
      lod: this.settingsMenu.querySelector('#setting-lod').checked,
      bars: this.settingsMenu.querySelector('#setting-bars').checked,
      compression: this.settingsMenu.querySelector('#setting-compression').checked,
      fpslimit: this.settingsMenu.querySelector('#setting-fpslimit').checked
    };
    localStorage.setItem('pvpRpgUserSettings', JSON.stringify(settings));
    window.__pvpRpgUserSettings = settings;
    this.toggleSettingsMenu(false);
    window.dispatchEvent(new CustomEvent('pvpRpgUserSettingsChanged', { detail: settings }));

    // --- APLICAÇÃO IMEDIATA DAS CONFIGS ---
    if (window.gameController && window.gameController.sceneManager) {
      // Troca efeitos visuais avançados imediatamente
      const sm = window.gameController.sceneManager;
      if (typeof sm.visualEffectsActive !== 'undefined') {
        sm.visualEffectsActive = settings.visualEffects;
        if (typeof sm.updateVisualEffectsMode === 'function') {
          sm.updateVisualEffectsMode();
        }
      }
    }
    if (window.gameController && window.gameController.renderManager) {
      // Limita FPS imediatamente
      const rm = window.gameController.renderManager;
      if (typeof rm.fpsLimitActive !== 'undefined') {
        rm.fpsLimitActive = settings.fpslimit;
        if (settings.fpslimit) {
          rm.minFrameTime = 1000 / 30;
        } else {
          rm.minFrameTime = 0;
        }
      }
    }
  }

  createPredictionPanel() {
    this.predictionPanel = document.createElement('div');
    this.predictionPanel.id = 'prediction-status-panel';
    this.predictionPanel.style.position = 'fixed';
    this.predictionPanel.style.top = '8px';
    this.predictionPanel.style.right = '60px';
    this.predictionPanel.style.background = 'rgba(30,30,60,0.92)';
    this.predictionPanel.style.color = '#ffe066';
    this.predictionPanel.style.fontSize = '13px';
    this.predictionPanel.style.padding = '8px 14px';
    this.predictionPanel.style.borderRadius = '8px';
    this.predictionPanel.style.zIndex = '4001';
    this.predictionPanel.style.pointerEvents = 'none';
    this.predictionPanel.style.boxShadow = '0 2px 8px #0008';
    this.predictionPanel.innerHTML = 'Predict: --<br>Erro: --<br>Ping: --';
    document.body.appendChild(this.predictionPanel);
    // Atualização automática
    requestAnimationFrame(this.updatePredictionPanel.bind(this));
  }

  updatePredictionPanel() {
    // movementPrediction deve estar disponível globalmente ou ser setado via método
    const mp = window.movementPrediction || (window.gameController && window.gameController.movementPrediction);
    let reconcileDistance = 0;
    let status = '❓';
    let predictionPing = '--';
    if (mp && mp.enabled) {
      if (mp.predictedPosition && mp.lastServerPosition) {
        const dx = mp.predictedPosition.x - mp.lastServerPosition.x;
        const dz = mp.predictedPosition.z - mp.lastServerPosition.z;
        reconcileDistance = Math.sqrt(dx * dx + dz * dz);
      }
      status = '✅';
      if (reconcileDistance > (mp.reconciliationThreshold || 0.05)) status = '🔄';
      if (reconcileDistance > 1.0) status = '⚠️';
      if (typeof mp.lastPredictionPing === 'number' && mp.lastPredictionPing > 0) predictionPing = `${mp.lastPredictionPing} ms`;
    }
    this.predictionPanel.innerHTML = `Predict: ${status}<br>Erro: ${reconcileDistance.toFixed(3)}<br>Ping Predição: ${predictionPing}`;
    requestAnimationFrame(this.updatePredictionPanel.bind(this));
  }

  // Função utilitária para traduzir killerType em texto amigável
  getKillerTypeLabel(killerType) {
    switch (killerType) {
      case 0: return 'Monstro';
      case 1: return 'Jogador';
      case 2: return 'Ambiente';
      default: return '';
    }
  }
} 