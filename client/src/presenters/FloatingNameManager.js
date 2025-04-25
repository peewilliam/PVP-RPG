export class FloatingNameManager {
  constructor(container, camera) {
    this.container = container; // div overlay
    this.camera = camera;
    this.names = new Map(); // id -> {el, mesh}
  }

  addName(id, mesh, name) {
    // Não cria mais o nome flutuante, apenas registra para compatibilidade
    this.names.set(id, { el: null, mesh });
  }

  removeName(id) {
    const obj = this.names.get(id);
    if (obj) {
      if (obj.el && obj.el.parentNode) {
        this.container.removeChild(obj.el);
      }
      this.names.delete(id);
    }
  }

  updateAll(width, height) {
    for (const { el, mesh } of this.names.values()) {
      if (!el) continue;
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