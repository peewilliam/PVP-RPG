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
    
    // Limita o tamanho para evitar textos gigantes
    const limitedSize = Math.min(size, 2.5);
    
    // Desenha o texto no canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Estilo baseado no tipo
    switch (type) {
      case 'damage':
        this.context.font = 'bold 36px Arial'; // Reduzido de 48px para 36px
        this.context.fillStyle = color || '#ff0000';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 3; // Reduzido de 4 para 3
        break;
      case 'heal':
        this.context.font = 'bold 36px Arial'; // Reduzido de 48px para 36px
        this.context.fillStyle = color || '#00ff00';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 3; // Reduzido de 4 para 3
        break;
      case 'xp':
        this.context.font = '32px Arial'; // Reduzido de 36px para 32px
        this.context.fillStyle = color || '#ffff00';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 2; // Reduzido de 3 para 2
        break;
      default:
        this.context.font = '28px Arial'; // Reduzido de 32px para 28px
        this.context.fillStyle = color || '#ffffff';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 2; // Reduzido de 3 para 2
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
      opacity: 1.0,
      depthTest: false, // Não testamos profundidade para garantir visibilidade
      depthWrite: false // Não escrevemos no buffer de profundidade
    });
    
    // Cria o sprite
    const sprite = new THREE.Sprite(material);
    
    // Posiciona o sprite - limitamos a altura para evitar problemas de visibilidade
    const posY = position.y !== undefined ? Math.min(position.y + 1.0, 5.0) : 2.0;
    sprite.position.set(position.x, posY, position.z);
    
    // Escala inicial mais conservadora
    sprite.scale.set(limitedSize * 1.5, limitedSize * 0.75, 1);
    
    // Adiciona à cena
    this.scene.add(sprite);
    
    // Cria objeto do texto flutuante
    const floatingText = {
      sprite,
      createdAt: performance.now(),
      duration,
      fadeOut,
      velocity: { y: 0.003 }, // Move para cima mais lentamente (reduzido de 0.005)
      distanceScale: true,    // Mantém tamanho consistente na tela
      baseScale: limitedSize, // Armazena a escala base para referência
      type                    // Armazena o tipo para comportamentos específicos
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
        const fadeStart = text.duration * 0.5; // Começa a desvanecer após 50% do tempo (antes era 60%)
        if (age > fadeStart) {
          const fadeAmount = 1.0 - (age - fadeStart) / (text.duration - fadeStart);
          text.sprite.material.opacity = Math.max(0, fadeAmount);
        }
      }
      
      // Ajusta escala com base na distância da câmera - limitamos muito mais agora
      if (text.distanceScale && this.camera) {
        // Calcula distância da câmera
        const distance = this.camera.position.distanceTo(text.sprite.position);
        
        // Escala muito mais conservadora baseada na distância
        // Limitamos muito mais o crescimento, especialmente para efeitos de dano
        let scaleFactor;
        
        if (text.type === 'damage') {
          // Dano tem um escalonamento mais controlado para evitar textos gigantes
          scaleFactor = Math.min(1.0 + (distance * 0.04), 1.5);
        } else {
          // Outros textos podem ter um escalonamento um pouco mais agressivo, mas ainda limitado
          scaleFactor = Math.min(1.0 + (distance * 0.05), 1.8);
        }
        
        // Aplicamos a escala, mantendo proporção largura/altura
        const baseScale = text.baseScale || 1.0;
        text.sprite.scale.set(
          baseScale * 1.5 * scaleFactor, 
          baseScale * 0.75 * scaleFactor, 
          1
        );
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