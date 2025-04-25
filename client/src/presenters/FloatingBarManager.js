import * as THREE from 'three';

export class FloatingBarManager {
  constructor(container, camera) {
    this.container = container;
    this.camera = camera;
    this.bars = new Map();
  }

  addBar(id, mesh, type = 'player', name = '') {
    const barContainer = document.createElement('div');
    Object.assign(barContainer.style, {
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 10,
      minWidth: '100px',
    });

    // Nome acima da barra
    const nameEl = document.createElement('div');
    nameEl.textContent = name;
    Object.assign(nameEl.style, {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '10px',
      fontFamily: 'Arial, sans-serif',
      textShadow: '0 0 4px #000, 0 0 2px #000',
      userSelect: 'none',
      marginBottom: '2px',
      pointerEvents: 'none',
    });

    // Wrapper da barra de vida
    const hpWrapper = document.createElement('div');
    Object.assign(hpWrapper.style, {
      position: 'relative',
      width: '100px',
      height: '6px',
      background: '#111',
      borderRadius: '3px',
      border: '1px solid #222',
      boxShadow: 'inset 0 0 4px rgba(0,0,0,0.8)',
      overflow: 'hidden',
    });

    const hpBar = document.createElement('div');
    Object.assign(hpBar.style, {
      height: '100%',
      width: '100%',
      background: 'linear-gradient(to right, #00ff00, #44cc44)',
      transition: 'width 0.2s ease-in-out',
    });

    hpWrapper.appendChild(hpBar);

    // Mana
    let manaWrapper = null;
    let manaBar = null;
    if (type === 'player') {
      manaWrapper = document.createElement('div');
      Object.assign(manaWrapper.style, {
        width: '100px',
        height: '4px',
        marginTop: '2px',
        background: '#111',
        borderRadius: '3px',
        border: '1px solid #222',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.7)',
        overflow: 'hidden',
      });

      manaBar = document.createElement('div');
      Object.assign(manaBar.style, {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(to right, #3399ff, #0066ff)',
        transition: 'width 0.2s ease-in-out',
      });

      manaWrapper.appendChild(manaBar);
    }

    barContainer.appendChild(nameEl);
    barContainer.appendChild(hpWrapper);
    if (manaWrapper) barContainer.appendChild(manaWrapper);

    this.container.appendChild(barContainer);
    this.bars.set(id, { el: barContainer, mesh, type, hpBar, manaBar });
  }

  updateBar(id, { hp, maxHp, mana, maxMana }) {
    const bar = this.bars.get(id);
    if (!bar) return;

    if (bar.hpBar && maxHp > 0) {
      const percent = Math.max(0, Math.min(1, hp / maxHp));
      bar.hpBar.style.width = `${percent * 100}%`;
      bar.hpBar.style.background = percent > 0.5
        ? 'linear-gradient(to right, #00ff00, #44cc44)'
        : percent > 0.2
          ? 'linear-gradient(to right, #ffee55, #cc9900)'
          : 'linear-gradient(to right, #ff4444, #cc0000)';
    }

    if (bar.manaBar && maxMana > 0) {
      const percent = Math.max(0, Math.min(1, mana / maxMana));
      bar.manaBar.style.width = `${percent * 100}%`;
    }
  }

  removeBar(id) {
    const bar = this.bars.get(id);
    if (bar?.el?.parentNode) {
      bar.el.parentNode.removeChild(bar.el);
    }
    this.bars.delete(id);
  }

  updateAll(width, height) {
    for (const { el, mesh } of this.bars.values()) {
      if (!mesh?.position) continue;
      const pos = mesh.position.clone();
      pos.y += 3.2;
      pos.x -= 3;
      pos.project(this.camera);

      const x = (pos.x * 0.5 + 0.5) * width;
      const y = (-pos.y * 0.5 + 0.5) * height;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.display = mesh.visible ? 'block' : 'none';
    }
  }

  clear() {
    for (const { el } of this.bars.values()) {
      if (el?.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
    this.bars.clear();
  }
}
