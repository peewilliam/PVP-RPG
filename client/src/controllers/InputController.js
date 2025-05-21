// InputController.js
// Responsável por gerenciar inputs de teclado e mouse

export class InputController {
  constructor() {
    // Posição do mouse normalizada (-1 a 1)
    this.mousePosition = { x: 0, y: 0 };
    this.onMoveToPoint = null; // Novo callback para movimentação por clique
    this.chatFocused = false;
    
    // Callbacks para outros sistemas
    this.onMovementChanged = null;
    
    // Bind dos métodos
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    
    // Inicializar event listeners
    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    // Impede o menu de contexto padrão ao clicar com o botão direito
    window.addEventListener('contextmenu', e => e.preventDefault());
    
    // Eventos de chat
    window.addEventListener('chat:focus', () => { this.chatFocused = true; });
    window.addEventListener('chat:blur', () => { this.chatFocused = false; });
  }

  removeEventListeners() {
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('chat:focus', () => { this.chatFocused = true; });
    window.removeEventListener('chat:blur', () => { this.chatFocused = false; });
  }

  onMouseDown(event) {
    // Botão direito (2) OU esquerdo (0)
    if ((event.button === 2 || event.button === 0) && !this.chatFocused) {
      if (this.onMoveToPoint) {
        this.onMoveToPoint(event);
      }
    }
  }

  onMouseMove(event) {
    // Calcula a posição do mouse normalizada (-1 a 1)
    this.mousePosition = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
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

  setMoveToPointCallback(callback) {
    this.onMoveToPoint = callback;
  }
} 