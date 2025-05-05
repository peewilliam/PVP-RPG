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
} 