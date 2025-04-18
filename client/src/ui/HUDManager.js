// HUDManager.js
import { SKILLS } from '../../../shared/skills/skillsConfig.js';

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
  }

  createHUD() {
    this.hud = document.createElement('div');
    this.hud.id = 'hud';
    this.hud.style.position = 'fixed';
    this.hud.style.left = '50%';
    this.hud.style.bottom = '38px';
    this.hud.style.transform = 'translateX(-50%)';
    this.hud.style.zIndex = '2000';
    this.hud.style.display = 'flex';
    this.hud.style.flexDirection = 'column';
    this.hud.style.alignItems = 'center';
    this.hud.innerHTML = `
      <div id="hud-barrow" style="display: flex; align-items: center; gap: 0;">
        <div id="hud-hp-wrap" style="position: relative; width: 220px; height: 26px; display: flex; align-items: center;">
          <div id="hud-hp-bg" style="position: absolute; left: 0; top: 6px; width: 100%; height: 14px; background: #3a1818; border-radius: 8px 0 0 8px;"></div>
          <div id="hud-hp" style="position: absolute; left: 0; top: 6px; height: 14px; background: linear-gradient(90deg, #ff4444, #b80000); border-radius: 8px 0 0 0; transition: width 0.2s;"></div>
          <div id="hud-hp-text" style="position: absolute; left: 18px; top: 6px; color: #fff; font-size: 13px; font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
        <div id="hud-center-diamond" style="width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; position: relative; z-index:3; margin: 0 -8px;">
          <svg width="64" height="64" viewBox="0 0 64 64" style="position:absolute;left:0;top:0;z-index:1;">
            <!-- Borda de XP -->
            <polygon id="hud-xp-border" points="32,4 60,32 32,60 4,32" fill="none" stroke="#ffe066" stroke-width="9" stroke-linejoin="round" style="filter: drop-shadow(0 0 4px #ffb700cc);" />
            <!-- Losango de fundo -->
            <polygon points="32,4 60,32 32,60 4,32" fill="#000" stroke="#fff" stroke-width="3"/>
          </svg>
          <span id="hud-level" style="position: absolute; left: 0; top: 0; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 22px; font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;">1</span>
        </div>
        <div id="hud-mp-wrap" style="position: relative; width: 220px; height: 26px; display: flex; align-items: center;">
          <div id="hud-mp-bg" style="position: absolute; right: 0; top: 6px; width: 100%; height: 14px; background: #1a2a3a; border-radius: 0 8px 8px 8px;"></div>
          <div id="hud-mp" style="position: absolute; right: 0; top: 6px; height: 14px; background: linear-gradient(90deg, #3399ff, #003366); border-radius: 0 8px 8px 0; transition: width 0.2s;"></div>
          <div id="hud-mp-text" style="position: absolute; right: 18px; top: 6px; color: #fff; font-size: 13px; font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
      </div>
      <div id="hud-slots" style="margin-top: 12px; display: flex; gap: 8px;"></div>
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
      slotDiv.style.background = '#2226';
      slotDiv.style.borderRadius = '8px';
      slotDiv.style.border = '2px solid #444';
      slotDiv.style.boxShadow = '0 1px 4px #0008';
      slotDiv.style.position = 'relative';
      slotDiv.style.display = 'flex';
      slotDiv.style.alignItems = 'center';
      slotDiv.style.justifyContent = 'center';
      slotDiv.style.cursor = 'pointer';
      
      // Ícone da habilidade
      const abilityId = this.abilitySlots[i];
      const ability = this.abilities.find(a => a.id === abilityId);
      const iconSpan = document.createElement('span');
      iconSpan.textContent = ability ? ability.icon : '?';
      iconSpan.style.fontSize = '28px';
      iconSpan.style.userSelect = 'none';
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
      numSpan.style.left = '6px';
      numSpan.style.top = '4px';
      numSpan.style.fontSize = '12px';
      numSpan.style.color = '#fff8';
      numSpan.style.pointerEvents = 'none';
      slotDiv.appendChild(numSpan);
      
      slotsDiv.appendChild(slotDiv);
    }
  }

  // Troca habilidades entre slots
  swapAbilities(from, to) {
    const temp = this.abilitySlots[from];
    this.abilitySlots[from] = this.abilitySlots[to];
    this.abilitySlots[to] = temp;
    this.renderAbilitySlots();
  }

  update(stats, level, name, xp, nextLevelXp) {
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
      xpBorder.setAttribute('stroke-dasharray', 0);
      xpBorder.setAttribute('stroke-dashoffset', 0);
      xpBorder.style.opacity = '0.3';
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
      overlay.style.background = 'rgba(0,0,0,0.55)';
      overlay.style.color = '#fff';
      overlay.style.fontWeight = 'bold';
      overlay.style.fontSize = '18px';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.borderRadius = '6px';
      slotDiv.appendChild(overlay);
    }
    if (this.cooldowns[slot - 1] > 0) {
      overlay.style.display = 'flex';
      overlay.textContent = Math.ceil(this.cooldowns[slot - 1] / 1000);
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
   * @param {boolean} show - Se deve mostrar ou esconder a mensagem
   */
  showDeathMessage(show) {
    let deathMessage = document.getElementById('death-message');
    
    // Se não existir, cria o elemento
    if (!deathMessage && show) {
      deathMessage = document.createElement('div');
      deathMessage.id = 'death-message';
      deathMessage.style.position = 'absolute';
      deathMessage.style.top = '40%';
      deathMessage.style.left = '50%';
      deathMessage.style.transform = 'translate(-50%, -50%)';
      deathMessage.style.color = '#ff0000';
      deathMessage.style.fontSize = '48px';
      deathMessage.style.fontWeight = 'bold';
      deathMessage.style.textAlign = 'center';
      deathMessage.style.textShadow = '0 0 10px #000000';
      deathMessage.style.zIndex = '1000';
      deathMessage.style.fontFamily = 'Arial, sans-serif';
      deathMessage.style.opacity = '0';
      deathMessage.style.transition = 'opacity 0.5s ease-in-out';
      
      // Adiciona o texto da mensagem
      deathMessage.innerHTML = `
        <div>VOCÊ MORREU</div>
        <div style="font-size: 24px; margin-top: 20px;">Perdeu todo seu progresso e XP</div>
        <div style="font-size: 20px; margin-top: 40px;">Você será teletransportado para o ponto de respawn...</div>
      `;
      
      // Adiciona ao corpo do documento
      document.body.appendChild(deathMessage);
      
      // Força um reflow para garantir que a transição funcione
      void deathMessage.offsetWidth;
    }
    
    // Mostra ou esconde
    if (deathMessage) {
      deathMessage.style.opacity = show ? '1' : '0';
      
      // Remove o elemento do DOM após a transição se estiver escondendo
      if (!show) {
        setTimeout(() => {
          if (deathMessage && deathMessage.parentNode) {
            deathMessage.parentNode.removeChild(deathMessage);
          }
        }, 600); // Um pouco mais que a duração da transição
      }
    }
  }

  /**
   * Atualiza a barra de saúde
   * @param {number} currentHealth - Saúde atual
   * @param {number} maxHealth - Saúde máxima
   */
  updateHealth(currentHealth, maxHealth) {
    const healthBar = document.getElementById('health-bar');
    const healthText = document.getElementById('health-text');
    
    if (healthBar && maxHealth !== undefined) {
      const healthPercent = (currentHealth / maxHealth) * 100;
      healthBar.style.width = `${healthPercent}%`;
      
      // Muda a cor baseado na porcentagem de vida
      if (healthPercent < 20) {
        healthBar.style.backgroundColor = '#ff0000'; // Vermelho para vida baixa
      } else if (healthPercent < 50) {
        healthBar.style.backgroundColor = '#ffaa00'; // Laranja para vida média
      } else {
        healthBar.style.backgroundColor = '#00ff00'; // Verde para vida alta
      }
    }
    
    if (healthText) {
      healthText.textContent = maxHealth !== undefined 
        ? `${Math.floor(currentHealth)}/${Math.floor(maxHealth)}`
        : `${Math.floor(currentHealth)}`;
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
} 