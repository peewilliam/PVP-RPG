// main-refactored.js
// Arquivo principal refatorado que inicializa o jogo
import { GameController } from './controllers/GameController.js';
import { SERVER, EVENTS, PLAYER, WORLD, ABILITIES, MONSTERS, BINARY_EVENTS } from '../../shared/constants/gameConstants.js';
import { SKILLS } from '../../shared/skills/skillsConfig.js';

// Importa as funções de atualização de projéteis
import { updateFireballProjectiles } from './skills/FireballSkill.js';
import { updateIceSpikeProjectiles } from './skills/IceSpikeSkill.js';
import { updateMeteorProjectiles } from './skills/MeteorStormSkill.js';

// Exporta as constantes para uso global (necessário para alguns componentes legados)
window.MONSTERS = MONSTERS;

// Log para debug - verificando a porta que está sendo usada
console.log(`Tentando conectar ao servidor na porta: ${SERVER.PORT}`);

// Cria o controlador do jogo com as configurações do servidor
const gameController = new GameController({
  PORT: SERVER.PORT,
  EVENTS: EVENTS,
  BINARY_EVENTS: BINARY_EVENTS,
  PLAYER: PLAYER,
  WORLD: WORLD,
  ABILITIES: ABILITIES,
  MONSTERS: MONSTERS
});

// Quando o DOM estiver carregado, inicializa o jogo
document.addEventListener('DOMContentLoaded', () => {
  // Obtém o container do jogo
  const container = document.getElementById('game-container');
  
  if (!container) {
    console.error('Container do jogo não encontrado!');
    return;
  }
  
  // Inicializa o jogo
  gameController.initialize(container);
  
  // Expor o gameController globalmente para HUD e debug
  window.gameController = gameController;
  // Expor o renderer globalmente para HUD de performance
  window.renderer = gameController.sceneManager.renderer;
  
  // Inicia a conexão com o servidor e o loop de renderização
  gameController.start();
  
  // Adiciona sistemas de atualização de projéteis diretamente ao loop de renderização
  const scene = gameController.sceneManager.scene;
  
  // Cria um objeto para gerenciar a atualização dos projéteis
  const projectileSystem = {
    update: function(deltaTime) {
      // Atualiza os projéteis de cada tipo de habilidade
      if (typeof updateFireballProjectiles === 'function') {
        updateFireballProjectiles(deltaTime, scene);
      }
      
      if (typeof updateIceSpikeProjectiles === 'function') {
        updateIceSpikeProjectiles(deltaTime, scene);
      }
      
      if (typeof updateMeteorProjectiles === 'function') {
        updateMeteorProjectiles(deltaTime, scene);
      }
    }
  };
  
  // Adiciona o sistema de projéteis ao loop de renderização
  gameController.renderManager.addUpdateSystem(projectileSystem);
  
  // Configura o intervalo de sincronização com o servidor
  setInterval(() => {
    gameController.requestServerSync();
  }, 2000); // A cada 2 segundos
  
  console.log('Jogo inicializado!');
}); 