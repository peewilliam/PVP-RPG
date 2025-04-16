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
    
    // Configuração da tela de texto
    this.canvas.width = 256;
    this.canvas.height = 128;
    
    this.lastUpdate = performance.now();
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
   */
  createFloatingText(options) {
    const {
      text = '',
      position = { x: 0, y: 2, z: 0 }, // Um pouco acima da cabeça
      color = '#ffffff',
      size = 1.0,
      duration = 2000,
      fadeOut = true,
      type = 'default'
    } = options;
    
    // Desenha o texto no canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Estilo baseado no tipo
    switch (type) {
      case 'damage':
        this.context.font = 'bold 48px Arial';
        this.context.fillStyle = color || '#ff0000';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 4;
        break;
      case 'heal':
        this.context.font = 'bold 48px Arial';
        this.context.fillStyle = color || '#00ff00';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 4;
        break;
      case 'xp':
        this.context.font = '36px Arial';
        this.context.fillStyle = color || '#ffff00';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 3;
        break;
      default:
        this.context.font = '32px Arial';
        this.context.fillStyle = color || '#ffffff';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 3;
    }
    
    // Desenha texto com borda
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.strokeText(text, this.canvas.width / 2, this.canvas.height / 2);
    this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    
    // Cria textura a partir do canvas
    const texture = new THREE.CanvasTexture(this.canvas);
    texture.needsUpdate = true;
    
    // Cria material com a textura
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 1.0
    });
    
    // Cria o sprite
    const sprite = new THREE.Sprite(material);
    sprite.position.set(position.x, position.y + 1.5, position.z);
    sprite.scale.set(size * 2, size, 1);
    
    // Adiciona à cena
    this.scene.add(sprite);
    
    // Cria objeto do texto flutuante
    const floatingText = {
      sprite,
      createdAt: performance.now(),
      duration,
      fadeOut,
      velocity: { y: 0.005 }, // Move para cima lentamente
      distanceScale: true     // Mantém tamanho consistente na tela
    };
    
    // Adiciona à lista de textos
    this.texts.push(floatingText);
    
    return floatingText;
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
        continue;
      }
      
      // Atualiza posição (sobe lentamente)
      text.sprite.position.y += text.velocity.y * deltaTime;
      
      // Fade out gradual
      if (text.fadeOut) {
        const fadeStart = text.duration * 0.6; // Começa a desvanecer após 60% do tempo
        if (age > fadeStart) {
          const fadeAmount = 1.0 - (age - fadeStart) / (text.duration - fadeStart);
          text.sprite.material.opacity = Math.max(0, fadeAmount);
        }
      }
      
      // Ajusta escala com base na distância da câmera
      if (text.distanceScale && this.camera) {
        // Faz o sprite olhar para a câmera
        const vector = new THREE.Vector3();
        vector.subVectors(this.camera.position, text.sprite.position);
        vector.normalize();
        
        // Mantém tamanho consistente independente da distância
        const distance = this.camera.position.distanceTo(text.sprite.position);
        const baseScale = text.sprite.scale.x / 2; // Recupera a escala base (dividido por 2 por causa da linha 102)
        
        // Ajusta escala para maior visibilidade
        const scaleFactor = Math.min(distance * 0.15, 3.0);
        text.sprite.scale.set(baseScale * scaleFactor, baseScale * 0.5 * scaleFactor, 1);
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