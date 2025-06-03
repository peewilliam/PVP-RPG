// InputController.js
// Responsável por gerenciar inputs de teclado e mouse

export class InputController {
  constructor() {
    // Posição do mouse normalizada (-1 a 1)
    this.mousePosition = { x: 0, y: 0 };
    this.onMoveToPoint = null; // Callback para movimentação por clique
    this.chatFocused = false;
    this.uiInteractionActive = false; // Novo flag para interação com UI
    
    // Rastreamento de clique do mouse para distinguir entre clique e drag
    this.isMouseDown = false;
    this.mouseDownTime = 0;
    this.mouseDownPosition = { x: 0, y: 0 };
    this.isDragging = false;
    
    // Callbacks para outros sistemas
    this.onMovementChanged = null;
    
    // Bind dos métodos
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    
    // Estado das teclas pressionadas
    this.keyStates = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
    
    // Inicializar event listeners
    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    
    // Impede o menu de contexto padrão ao clicar com o botão direito
    window.addEventListener('contextmenu', e => e.preventDefault());
    
    // Eventos de chat
    window.addEventListener('focus', (e) => {
      // Verifica se o elemento focado é um input ou outro elemento interativo
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' ||
          e.target.getAttribute('contenteditable') === 'true') {
        this.uiInteractionActive = true;
      }
    }, true);
    
    window.addEventListener('blur', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' ||
          e.target.getAttribute('contenteditable') === 'true') {
        this.uiInteractionActive = false;
      }
    }, true);
    
    window.addEventListener('chat:focus', () => { 
      this.chatFocused = true; 
      this.uiInteractionActive = true;
    });
    
    window.addEventListener('chat:blur', () => { 
      this.chatFocused = false;
      this.uiInteractionActive = false;
    });
  }

  removeEventListeners() {
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('contextmenu', e => e.preventDefault());
    window.removeEventListener('chat:focus', () => { this.chatFocused = true; });
    window.removeEventListener('chat:blur', () => { this.chatFocused = false; });
  }

  onMouseDown(event) {
    this.isMouseDown = true;
    this.mouseDownTime = Date.now();
    this.mouseDownPosition = { x: event.clientX, y: event.clientY };
    this.isDragging = false;
    
    // Não processamos o clique aqui, apenas no mouseUp
    // para distinguir entre clique e drag
  }
  
  onMouseMove(event) {
    // Calcula a posição do mouse normalizada (-1 a 1)
    this.mousePosition = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    };
    
    // Verifica se estamos arrastando o mouse (drag)
    if (this.isMouseDown) {
      const dx = event.clientX - this.mouseDownPosition.x;
      const dy = event.clientY - this.mouseDownPosition.y;
      const dragDistance = Math.sqrt(dx * dx + dy * dy);
      
      // Se o mouse se moveu mais que o limiar, é um arrasto e não um clique
      if (dragDistance > 5) { // 5 pixels é um limiar razoável
        this.isDragging = true;
      }
    }
  }
  
  onMouseUp(event) {
    // Verifica se foi um clique válido (não um drag) e não foi em UI
    if (this.isMouseDown && !this.isDragging && !this.chatFocused && !this.uiInteractionActive) {
      // Botão direito (2) OU esquerdo (0)
      if (event.button === 2 || event.button === 0) {
        if (this.onMoveToPoint) {
          this.onMoveToPoint(event);
        }
      }
    }
    
    // Reseta o estado do mouse
    this.isMouseDown = false;
    this.isDragging = false;
  }
  
  onKeyDown(event) {
    // Processa apenas se não estiver em chat ou outra UI
    if (this.chatFocused || this.uiInteractionActive) return;
    
    let changed = false;
    
    // WASD ou setas
    if ((event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') && !this.keyStates.forward) {
      this.keyStates.forward = true;
      changed = true;
    }
    if ((event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') && !this.keyStates.backward) {
      this.keyStates.backward = true;
      changed = true;
    }
    if ((event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') && !this.keyStates.left) {
      this.keyStates.left = true;
      changed = true;
    }
    if ((event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') && !this.keyStates.right) {
      this.keyStates.right = true;
      changed = true;
    }
    
    // Notifica sobre mudança no movimento se houver um callback registrado
    if (changed && this.onMovementChanged) {
      this.onMovementChanged(this.keyStates);
    }
  }
  
  onKeyUp(event) {
    let changed = false;
    
    // WASD ou setas
    if ((event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') && this.keyStates.forward) {
      this.keyStates.forward = false;
      changed = true;
    }
    if ((event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') && this.keyStates.backward) {
      this.keyStates.backward = false;
      changed = true;
    }
    if ((event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') && this.keyStates.left) {
      this.keyStates.left = false;
      changed = true;
    }
    if ((event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') && this.keyStates.right) {
      this.keyStates.right = false;
      changed = true;
    }
    
    // Notifica sobre mudança no movimento se houver um callback registrado
    if (changed && this.onMovementChanged) {
      this.onMovementChanged(this.keyStates);
    }
  }
  
  // Permite verificar se o jogador está se movendo
  isMoving() {
    return this.keyStates.forward || this.keyStates.backward || 
           this.keyStates.left || this.keyStates.right;
  }
  
  // Retorna a direção de movimento para o sistema de predição
  getMovementDirection() {
    let dirX = 0;
    let dirZ = 0;
    
    if (this.keyStates.forward) {
      dirX -= 1;
      dirZ -= 1;
    }
    if (this.keyStates.backward) {
      dirX += 1;
      dirZ += 1;
    }
    if (this.keyStates.left) {
      dirX -= 1;
      dirZ += 1;
    }
    if (this.keyStates.right) {
      dirX += 1;
      dirZ -= 1;
    }
    
    return { dirX, dirZ };
  }
  
  // Retorna o input para o servidor (compatibilidade com o código existente)
  getCameraRelativeInput() {
    return {
      forward: this.keyStates.forward,
      backward: this.keyStates.backward,
      left: this.keyStates.left,
      right: this.keyStates.right
    };
  }
  
  // Permite configurar um callback para quando o movimento mudar
  setMovementChangedCallback(callback) {
    this.onMovementChanged = callback;
  }
  
  // Hook para configurar teclas de habilidade
  setupAbilityHotkeys(callback) {
    window.addEventListener('keydown', (e) => {
      // Não processa se estiver em chat ou outra UI
      if (this.chatFocused || this.uiInteractionActive) return;
      
      let slot = null;
      if (e.key === '1') slot = 1;
      if (e.key === '2') slot = 2;
      if (e.key === '3') slot = 3;
      if (e.key === '4') slot = 4;
      
      if (slot) {
        callback(slot);
      }
    });
  }
  
  // Hook para teclas de sistema (ESC, F9, F10)
  setupSystemHotkeys(options) {
    window.addEventListener('keydown', (e) => {
      // Tecla ESC para cancelar alvos (sempre funciona, mesmo no chat)
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (options.onEscapePressed) options.onEscapePressed();
      }
      
      // Não processa as demais teclas se estiver em chat ou outra UI
      if (this.chatFocused || this.uiInteractionActive) return;
      
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

  setMoveToPointCallback(callback) {
    this.onMoveToPoint = callback;
  }
  
  // Método para marcar explicitamente o início de uma interação com UI
  setUIInteractionActive(active) {
    this.uiInteractionActive = active;
  }
} 