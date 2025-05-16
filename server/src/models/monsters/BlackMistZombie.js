import { BaseMonster } from './BaseMonster.js';

export class BlackMistZombie extends BaseMonster {
  constructor(id, position = { x: 0, y: 0, z: 0 }, level = 1, scale = null) {
    super(id, 'BLACK_MIST_ZOMBIE', position, level, scale);
    // Aqui você pode adicionar habilidades, efeitos ou IA específica
  }

  // Exemplo de override de IA
  // updateAI(deltaTime, players) {
  //   super.updateAI(deltaTime, players);
  //   // Lógica específica do zumbi aqui
  // }
} 