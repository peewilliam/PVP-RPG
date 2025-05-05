// RenderManager.js
// Responsável por gerenciar o loop de renderização e FPS
export class RenderManager {
  constructor(sceneManager, cameraController) {
    // Dependências
    this.sceneManager = sceneManager;
    this.cameraController = cameraController;
    
    // Propriedades para controle de FPS e tempo
    this.framesThisSecond = 0;
    this.lastFpsUpdateTime = performance.now();
    this.fps = 0;
    this.lastFrameTime = 0;
    this.fpsLimitActive = false;
    this.minFrameTime = 0;
    this.lastFpsLimitedFrame = 0;
    
    // Lista de sistemas que precisam ser atualizados a cada frame
    this.updateSystems = [];
    
    // Flag de execução
    this.isRunning = false;
    
    // Callback de renderização
    this.animate = this.animate.bind(this);
  }
  
  // Inicializa o gerenciador
  initialize() {
    // Inicializa com as configurações salvas
    this.loadUserSettings();
    
    // Adiciona listener para mudanças de configuração
    window.addEventListener('pvpRpgUserSettingsChanged', this.handleSettingsChanged.bind(this));
    
    return this;
  }
  
  // Adiciona um sistema para ser atualizado a cada frame
  addUpdateSystem(system, updateMethod = 'update') {
    this.updateSystems.push({
      system,
      updateMethod
    });
    
    return this;
  }
  
  // Remove um sistema da lista de atualização
  removeUpdateSystem(system) {
    this.updateSystems = this.updateSystems.filter(item => item.system !== system);
    return this;
  }
  
  // Inicia o loop de renderização
  start() {
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    requestAnimationFrame(this.animate);
    
    return this;
  }
  
  // Para o loop de renderização
  stop() {
    this.isRunning = false;
    return this;
  }
  
  // Loop de renderização
  animate() {
    if (!this.isRunning) return;
    
    requestAnimationFrame(this.animate);
    
    const now = performance.now();
    
    // Limite de FPS (se ativado)
    if (this.fpsLimitActive && this.lastFpsLimitedFrame && now - this.lastFpsLimitedFrame < this.minFrameTime) {
      return;
    }
    
    this.lastFpsLimitedFrame = now;
    
    // --- Cálculo de FPS real ---
    this.framesThisSecond++;
    if (now - this.lastFpsUpdateTime >= 1000) {
      this.fps = this.framesThisSecond;
      this.framesThisSecond = 0;
      this.lastFpsUpdateTime = now;
    }
    
    // Calcula o delta time desde o último frame para animações suaves
    const deltaTime = (now - this.lastFrameTime) / 1000; // Converte para segundos
    this.lastFrameTime = now;
    
    // --- Medição do tempo de atualização de monstros/UI ---
    const uiStart = performance.now();
    // Atualiza a câmera
    this.cameraController.update();
    
    // Atualiza todos os sistemas registrados
    for (const item of this.updateSystems) {
      if (typeof item.system[item.updateMethod] === 'function') {
        item.system[item.updateMethod](deltaTime);
      }
    }
    window.__lastUiUpdateTimeMs = (performance.now() - uiStart).toFixed(2);
    
    // --- Medição do tempo de renderização ---
    const renderStart = performance.now();
    this.sceneManager.render(this.cameraController.camera);
    window.__lastRenderTimeMs = (performance.now() - renderStart).toFixed(2);
    
    // Expõe o FPS para outros componentes
    window.fps = this.fps;
  }
  
  // Tratamento de redimensionamento da janela
  handleResize(width, height) {
    this.sceneManager.onWindowResize(width, height);
    this.cameraController.onWindowResize(width, height);
  }
  
  // Carrega as configurações do usuário
  loadUserSettings() {
    const settings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
    
    // Limite de FPS
    this.fpsLimitActive = !!settings.fpslimit;
    this.minFrameTime = this.fpsLimitActive ? 1000 / 30 : 0;
  }
  
  // Manipula mudanças nas configurações do usuário
  handleSettingsChanged(e) {
    const settings = e.detail;
    
    // Limite de FPS
    this.fpsLimitActive = !!settings.fpslimit;
    this.minFrameTime = this.fpsLimitActive ? 1000 / 30 : 0;
  }
  
  // Retorna o FPS atual
  getFPS() {
    return this.fps;
  }
  
  // Alterna o limitador de FPS
  toggleFPSLimit() {
    this.fpsLimitActive = !this.fpsLimitActive;
    this.minFrameTime = this.fpsLimitActive ? 1000 / 30 : 0;
    
    // Salva a configuração
    const userSettings = JSON.parse(localStorage.getItem('pvpRpgUserSettings') || '{}');
    userSettings.fpslimit = this.fpsLimitActive;
    localStorage.setItem('pvpRpgUserSettings', JSON.stringify(userSettings));
    
    // Notifica outros componentes
    window.dispatchEvent(new CustomEvent('pvpRpgUserSettingsChanged', { detail: userSettings }));
    
    return this.fpsLimitActive;
  }
} 