// InputController.js
// Responsável por gerenciar inputs de teclado e mouse

export class InputController {
  constructor() {
    // Estado das teclas
    this.keys = {
      w: false,
      a: false,
      s: false,
      d: false
    };

    // Estado anterior das teclas para detectar mudanças
    this.prevKeys = {
      w: false,
      a: false,
      s: false,
      d: false
    };

    // Posição do mouse normalizada (-1 a 1)
    this.mousePosition = { x: 0, y: 0 };
    
    // Callbacks para outros sistemas
    this.onMovementChanged = null;
    this.chatFocused = false;
    
    // Bind dos métodos
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    
    // Inicializar event listeners
    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousemove', this.onMouseMove);
    
    // Eventos de chat
    window.addEventListener('chat:focus', () => { this.chatFocused = true; });
    window.addEventListener('chat:blur', () => { this.chatFocused = false; });
  }

  removeEventListeners() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('chat:focus', () => { this.chatFocused = true; });
    window.removeEventListener('chat:blur', () => { this.chatFocused = false; });
  }

  onKeyDown(e) {
    const keyChanged = this.updateKey(e.key, true);
    if (keyChanged && this.onMovementChanged) {
      this.onMovementChanged(this.keys);
    }
  }

  onKeyUp(e) {
    const keyChanged = this.updateKey(e.key, false);
    if (keyChanged && this.onMovementChanged) {
      this.onMovementChanged(this.keys);
    }
  }

  onMouseMove(event) {
    // Calcula a posição do mouse normalizada (-1 a 1)
    this.mousePosition = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    };
  }

  // Atualiza estado da tecla e retorna se houve mudança
  updateKey(key, isDown) {
    let changed = false;
    
    if (key === 'w' || key === 'W') {
      changed = this.keys.w !== isDown;
      this.keys.w = isDown;
    }
    else if (key === 'a' || key === 'A') {
      changed = this.keys.a !== isDown;
      this.keys.a = isDown;
    }
    else if (key === 's' || key === 'S') {
      changed = this.keys.s !== isDown;
      this.keys.s = isDown;
    }
    else if (key === 'd' || key === 'D') {
      changed = this.keys.d !== isDown;
      this.keys.d = isDown;
    }
    
    // Atualiza o estado anterior para a próxima comparação se houve mudança
    if (changed) {
      this.prevKeys = { ...this.keys };
    }
    
    return changed;
  }

  // Retorna a direção do movimento baseada nos inputs atuais
  getMovementDirection() {
    let dirX = 0;
    let dirZ = 0;
    
    if (this.keys.w) {
      dirX -= 1;
      dirZ -= 1;
    }
    if (this.keys.s) {
      dirX += 1;
      dirZ += 1;
    }
    if (this.keys.a) {
      dirX -= 1;
      dirZ += 1;
    }
    if (this.keys.d) {
      dirX += 1;
      dirZ -= 1;
    }
    
    return { dirX, dirZ };
  }

  // Verifica se alguma tecla de movimento está pressionada
  isMoving() {
    return this.keys.w || this.keys.a || this.keys.s || this.keys.d;
  }

  // Verifica se as entradas mudaram desde a última verificação
  hasChanged() {
    return (
      this.prevKeys.w !== this.keys.w || 
      this.prevKeys.a !== this.keys.a || 
      this.prevKeys.s !== this.keys.s || 
      this.prevKeys.d !== this.keys.d
    );
  }

  // Converte as teclas pressionadas em um objeto de input para o servidor
  getCameraRelativeInput() {
    return {
      forward: this.keys.w,
      backward: this.keys.s,
      left: this.keys.a,
      right: this.keys.d
    };
  }
  
  // Permite configurar um callback para quando o movimento mudar
  setMovementChangedCallback(callback) {
    this.onMovementChanged = callback;
  }
  
  // Hook para configurar teclas de habilidade
  setupAbilityHotkeys(callback) {
    window.addEventListener('keydown', (e) => {
      let slot = null;
      if (e.key === '1') slot = 1;
      if (e.key === '2') slot = 2;
      if (e.key === '3') slot = 3;
      if (e.key === '4') slot = 4;
      
      if (slot && !this.chatFocused) {
        callback(slot);
      }
    });
  }
  
  // Hook para teclas de sistema (ESC, F9, F10)
  setupSystemHotkeys(options) {
    window.addEventListener('keydown', (e) => {
      // Tecla ESC para cancelar alvos
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (options.onEscapePressed) options.onEscapePressed();
      }
      
      // F9 para alternar predição de movimento
      if (e.key === 'F9') {
        if (options.onF9Pressed) options.onF9Pressed();
      }
      
      // F10 para painel de debug visual
      if (e.key === 'F10') {
        if (options.onF10Pressed) options.onF10Pressed();
      }
    });
  }
} 