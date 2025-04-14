import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

import { Game } from './game.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';
import { World } from './world.js';
import { UI } from './ui.js';

// Inicializa o jogo quando a janela carrega
window.addEventListener('load', () => {
    const game = new Game();
    game.init();
}); 