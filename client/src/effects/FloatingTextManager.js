/**
 * Gerenciador de textos flutuantes no mundo 3D
 * Usado para mostrar dano, cura, efeitos e outros textos informativos
 */
import * as THREE from 'three';

export class FloatingTextManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.texts = [];
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    
    // Canvas maior para suportar fontes grandes e textos longos
    this.canvas.width = 384;
    this.canvas.height = 192;
    
    this.lastUpdate = performance.now();
    // Novo: mapa para cooldown de mensagens
    this.lastMessageTimestamps = new Map();
  }
  
  /**
   * Cria um texto flutuante no mundo
   * @param {Object} options - Opções do texto flutuante
   * @param {string} options.text - Texto a ser exibido
   * @param {Object} options.position - Posição 3D {x, y, z}
   * @param {string} options.color - Cor do texto em formato hexadecimal
   * @param {number} options.size - Tamanho do texto (escala)
   * @param {number} options.duration - Duração em ms antes do texto desaparecer
   * @param {boolean} options.fadeOut - Se o texto deve desvanecer gradualmente
   * @param {string} options.type - Tipo de texto ('damage', 'heal', 'xp', etc)
   * @param {number} options.index - Índice para offset vertical
   */
  createFloatingText(options) {
    const {
      text = '',
      position = { x: 0, y: 2, z: 0 },
      color,
      size = 1.0,
      duration = 2000,
      fadeOut = true,
      type = 'default',
      index = 0
    } = options;

    // Exibir apenas dano e cura como texto flutuante
    if (type !== 'damage' && type !== 'heal') {
      // Futuramente: enviar para o chat lateral
      return null;
    }

    // Fonte grande e bold
    let fontSize = 120;
    if (text.length > 12) fontSize = 90;
    if (text.length > 20) fontSize = 60;
    if (fontSize < 60) fontSize = 60;
    
    // Limita o tamanho para evitar textos gigantes (até 4)
    const limitedSize = Math.min(size, 4);
    
    // Cores padronizadas por tipo
    let fillColor = '#ffffff';
    switch (type) {
      case 'damage': fillColor = '#ff4444'; break;
      case 'heal': fillColor = '#44ff44'; break;
      case 'xp': fillColor = '#ffe066'; break;
      case 'cooldown': fillColor = '#ffaa00'; break;
      case 'mana': fillColor = '#44caff'; break;
      case 'error': fillColor = '#ff2222'; break;
      default: if (color) fillColor = color;
    }
    
    // Ajuste dinâmico do canvas para caber o texto
    // Primeiro, defina um canvas temporário para medir
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = `bold ${fontSize}px Arial`;
    let textWidth = tempCtx.measureText(text).width;
    let padding = 40;
    let canvasWidth = Math.max(384, textWidth + padding);
    let canvasHeight = 192;
    // Limite máximo para evitar sprites gigantes
    if (canvasWidth > 1024) {
      canvasWidth = 1024;
      // Se ainda assim for muito grande, reduza a fonte
      while (textWidth + padding > 1024 && fontSize > 40) {
        fontSize -= 4;
        tempCtx.font = `bold ${fontSize}px Arial`;
        textWidth = tempCtx.measureText(text).width;
      }
    }
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    
    // Desenha o texto no canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = `bold ${fontSize}px Arial`;
    this.context.fillStyle = fillColor;
    this.context.strokeStyle = '#000000';
    this.context.lineWidth = 6;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    // Sombra para destacar
    this.context.shadowColor = '#000';
    this.context.shadowBlur = 8;
    // Desenha texto com borda e sombra
    this.context.strokeText(text, this.canvas.width / 2, this.canvas.height / 2);
    this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    // Remove sombra para não afetar outros desenhos
    this.context.shadowBlur = 0;
    
    // Cria textura a partir do canvas
    const texture = new THREE.CanvasTexture(this.canvas);
    texture.needsUpdate = true;
    
    // Cria material com a textura
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false
    });
    
    // Cria o sprite
    const sprite = new THREE.Sprite(material);
    
    // Escala do sprite baseada no tamanho real do canvas para manter qualidade e proporção
    const baseWorldWidth = 5; // O texto ocupará até 5 unidades do mundo em largura
    const baseWorldHeight = 2.5; // E até 2.5 unidades em altura
    // Aplica o multiplicador de tamanho
    const scaleX = (canvasWidth / 384) * baseWorldWidth * limitedSize;
    const scaleY = (canvasHeight / 192) * baseWorldHeight * limitedSize;
    sprite.scale.set(scaleX, scaleY, 1);
    
    // Offset vertical para múltiplos textos
    const verticalOffset = index * 1.1; // 1.1 unidades acima para cada texto extra
    const posY = position.y !== undefined ? Math.min(position.y + 1.0 + verticalOffset, 8.0) : 2.0 + verticalOffset;
    sprite.position.set(position.x, posY, position.z);
    
    // Adiciona à cena
    this.scene.add(sprite);
    
    // Cria objeto do texto flutuante
    const floatingText = {
      sprite,
      createdAt: performance.now(),
      duration,
      fadeOut,
      velocity: { y: 0.003 },
      distanceScale: true,
      baseScale: limitedSize,
      type,
      textKey: type,
      count: 1,
      displayText: text
    };
    
    // Adiciona à lista de textos
    this.texts.push(floatingText);
    
    return floatingText;
  }
  
  // Novo método para redesenhar texto agrupado
  _redrawFloatingText(floatingText) {
    // Ajuste dinâmico do canvas para caber o texto
    let fontSize = 120;
    if (floatingText.displayText.length > 12) fontSize = 90;
    if (floatingText.displayText.length > 20) fontSize = 60;
    if (fontSize < 60) fontSize = 60;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = `bold ${fontSize}px Arial`;
    let textWidth = tempCtx.measureText(floatingText.displayText).width;
    let padding = 40;
    let canvasWidth = Math.max(384, textWidth + padding);
    let canvasHeight = 192;
    if (canvasWidth > 1024) {
      canvasWidth = 1024;
      while (textWidth + padding > 1024 && fontSize > 40) {
        fontSize -= 4;
        tempCtx.font = `bold ${fontSize}px Arial`;
        textWidth = tempCtx.measureText(floatingText.displayText).width;
      }
    }
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = `bold ${fontSize}px Arial`;
    this.context.fillStyle = '#ff2222'; // cor padrão para erro, pode ser ajustado
    this.context.strokeStyle = '#000000';
    this.context.lineWidth = 6;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.shadowColor = '#000';
    this.context.shadowBlur = 8;
    this.context.strokeText(floatingText.displayText, this.canvas.width / 2, this.canvas.height / 2);
    this.context.fillText(floatingText.displayText, this.canvas.width / 2, this.canvas.height / 2);
    this.context.shadowBlur = 0;
    // Atualiza textura
    floatingText.sprite.material.map = new THREE.CanvasTexture(this.canvas);
    floatingText.sprite.material.map.needsUpdate = true;
  }
  
  /**
   * Atualiza todos os textos flutuantes
   */
  update() {
    const now = performance.now();
    const deltaTime = now - this.lastUpdate;
    this.lastUpdate = now;
    
    // Atualiza cada texto
    for (let i = this.texts.length - 1; i >= 0; i--) {
      const text = this.texts[i];
      const age = now - text.createdAt;
      
      // Remove se expirou
      if (age > text.duration) {
        this.scene.remove(text.sprite);
        text.sprite.material.dispose();
        text.sprite.material.map.dispose();
        this.texts.splice(i, 1);
        // Limpa contador/cooldown
        if (this.lastMessageTimestamps.has(text.textKey)) {
          this.lastMessageTimestamps.delete(text.textKey);
        }
        continue;
      }
      
      // Atualiza posição (sobe lentamente)
      text.sprite.position.y += text.velocity.y * deltaTime;
      
      // Fade out gradual
      if (text.fadeOut) {
        const fadeStart = text.duration * 0.5;
        if (age > fadeStart) {
          const fadeAmount = 1.0 - (age - fadeStart) / (text.duration - fadeStart);
          text.sprite.material.opacity = Math.max(0, fadeAmount);
        }
      }
    }
  }
  
  /**
   * Limpa todos os textos flutuantes
   */
  clear() {
    for (const text of this.texts) {
      this.scene.remove(text.sprite);
      text.sprite.material.dispose();
      if (text.sprite.material.map) {
        text.sprite.material.map.dispose();
      }
    }
    this.texts = [];
  }
} 