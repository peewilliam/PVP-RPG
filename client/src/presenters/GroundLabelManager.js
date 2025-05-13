import * as THREE from 'three';

/**
 * GroundLabelManager: Renderiza labels 3D no chão, sempre visíveis, para spots e boss.
 * Labels são sprites com texto, contorno escuro, sombra e cor customizável.
 */
export class GroundLabelManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.labels = [];
  }

  /**
   * Adiciona um label no chão
   * @param {Object} options
   *   - text: string (texto a exibir)
   *   - position: {x, y, z} (posição no mundo)
   *   - color: string (cor do texto, ex: '#ffe066')
   *   - outline: string (cor do contorno, ex: '#000000')
   *   - size: number (escala base, default 1.0)
   *   - alwaysFaceCamera: boolean (default true)
   */
  addLabel({ text, position, color = '#ffe066', outline = '#000000', size = 1.0, alwaysFaceCamera = true }) {
    // Cria canvas para o texto
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const fontSize = 64;
    ctx.font = `bold ${fontSize}px Arial`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = textWidth + 32;
    canvas.height = fontSize + 32;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Sombra
    ctx.shadowColor = outline;
    ctx.shadowBlur = 8;
    // Contorno
    ctx.lineWidth = 8;
    ctx.strokeStyle = outline;
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    // Texto principal
    ctx.shadowBlur = 0;
    ctx.fillStyle = color;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    // Cria textura
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    // Cria material e sprite
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(material);
    // Escala proporcional ao texto
    const worldWidth = Math.max(3.5, text.length * 0.45) * size;
    const worldHeight = 1.2 * size;
    sprite.scale.set(worldWidth, worldHeight, 1);
    // Posição no chão
    sprite.position.set(position.x, (position.y || 0) + 0.05, position.z);
    // Guarda referência para atualização
    this.labels.push({ sprite, alwaysFaceCamera });
    this.scene.add(sprite);
    return sprite;
  }

  /** Remove todos os labels */
  clear() {
    for (const { sprite } of this.labels) {
      this.scene.remove(sprite);
    }
    this.labels = [];
  }

  /** Atualiza orientação dos labels para sempre olhar para a câmera (chamar a cada frame) */
  update() {
    if (!this.camera) return;
    for (const { sprite, alwaysFaceCamera } of this.labels) {
      if (alwaysFaceCamera) {
        sprite.quaternion.copy(this.camera.quaternion);
        // Mantém o label "em pé" (não inclina com a câmera)
        sprite.rotation.x = 0;
        sprite.rotation.z = 0;
      }
    }
  }
} 