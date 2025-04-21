export class FloatingNameManager {
  constructor(container, camera) {
    this.container = container; // div overlay
    this.camera = camera;
    this.names = new Map(); // id -> {el, mesh}
  }

  addName(id, mesh, name) {
    const el = document.createElement('div');
    el.className = 'monster-name';
    el.textContent = name;
    el.style.position = 'absolute';
    el.style.color = '#ffffff';
    el.style.fontWeight = 'bold';
    // Sombra mais grossa para melhor contraste em qualquer fundo
    el.style.textShadow = '0 0 6px #000, 0 0 3px #000, 1px 1px 2px #000';
    el.style.pointerEvents = 'none';
    el.style.fontSize = '12px'; // Aumentado para 18px
    el.style.fontFamily = 'Arial, sans-serif';
    el.style.textAlign = 'center';
    el.style.whiteSpace = 'nowrap';
    el.style.userSelect = 'none';
    el.style.padding = '2px 8px'; // Adiciona um pequeno padding
    el.style.borderRadius = '3px'; // Bordas levemente arredondadas
    el.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // Fundo semi-transparente para melhor legibilidade
    this.container.appendChild(el);
    this.names.set(id, { el, mesh });
  }

  removeName(id) {
    const obj = this.names.get(id);
    if (obj) {
      this.container.removeChild(obj.el);
      this.names.delete(id);
    }
  }

  updateAll(width, height) {
    for (const { el, mesh } of this.names.values()) {
      if (!mesh || !mesh.position) continue;
      const pos = mesh.position.clone();
      pos.y += 4.2; // Ajustado para posição ideal acima da cabeça
      pos.project(this.camera);
      const x = (pos.x * 0.5 + 0.5) * width;
      const y = (-pos.y * 0.5 + 0.5) * height;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.display = mesh.visible ? 'block' : 'none';
      
      // Escala de tamanho baseada na distância da câmera
      const distance = this.camera.position.distanceTo(mesh.position);
      const scale = Math.max(0.8, Math.min(1.2, 30 / distance));
      el.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
  }
} 