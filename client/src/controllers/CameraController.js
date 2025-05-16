// CameraController.js
// Responsável por gerenciar a câmera, seu posicionamento e movimento
import * as THREE from 'three';

export class CameraController {
  constructor() {
    // Parâmetros da câmera
    this.cameraSize = 13;
    this.cameraDistance = 24;
    this.cameraHeightAngle = Math.PI / 4.7; // ~38°
    this.cameraLerpSpeed = 0.13; // Suavidade da interpolação
    
    // Referências
    this.camera = null;
    this.playerObject = null;
  }
  
  setup(width, height) {
    const aspectRatio = width / height;
    
    // Cria câmera isométrica
    this.camera = new THREE.OrthographicCamera(
      -this.cameraSize * aspectRatio, 
      this.cameraSize * aspectRatio,
      this.cameraSize, 
      -this.cameraSize,
      0.1, 
      1000
    );
    
    // Posiciona a câmera para vista isométrica
    this.camera.position.set(20, 20, 20);
    this.camera.lookAt(0, 0, 0);
    
    return this.camera;
  }
  
  // Define o jogador que a câmera deve seguir
  followPlayer(playerObject) {
    this.playerObject = playerObject;
  }
  
  // Atualiza a posição da câmera para seguir o jogador
  update() {
    if (!this.playerObject || !this.camera) return;

    // Calcula direção isométrica
    const lookAt = new THREE.Vector3(
      this.playerObject.position.x,
      this.playerObject.position.y,
      this.playerObject.position.z
    );

    // Player levemente abaixo do centro (offset na direção do olhar)
    const offsetX = Math.cos(this.cameraHeightAngle) * this.cameraDistance;
    const offsetY = Math.sin(this.cameraHeightAngle) * this.cameraDistance;
    const offsetZ = Math.cos(this.cameraHeightAngle) * this.cameraDistance;

    // Posição alvo da câmera (levemente à frente do player)
    const cameraTarget = new THREE.Vector3(
      this.playerObject.position.x + offsetX * 0.7,
      this.playerObject.position.y + offsetY,
      this.playerObject.position.z + offsetZ * 0.7
    );

    // Se a distância for grande (ex: teleporte ou início), pula a interpolação
    if (this.camera.position.distanceTo(cameraTarget) > 8) {
      this.camera.position.copy(cameraTarget);
    } else {
      // Interpolação suave (lerp)
      this.camera.position.lerp(cameraTarget, this.cameraLerpSpeed);
    }

    // Olha para o player
    this.camera.lookAt(lookAt);
  }
  
  // Ajusta a câmera quando a janela é redimensionada
  onWindowResize(width, height) {
    if (!this.camera) return;
    
    const newAspectRatio = width / height;
    
    this.camera.left = -this.cameraSize * newAspectRatio;
    this.camera.right = this.cameraSize * newAspectRatio;
    this.camera.top = this.cameraSize;
    this.camera.bottom = -this.cameraSize;
    this.camera.updateProjectionMatrix();
  }
  
  // Retorna a posição do mouse no mundo usando raycasting
  getMouseWorldPosition(mousePosition, plane) {
    if (!this.camera || !plane) return new THREE.Vector3(0, 0, 0);
    
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mousePosition, this.camera);
    const intersects = raycaster.intersectObject(plane);
    
    if (intersects.length > 0) {
      return intersects[0].point;
    }
    
    // Fallback: posição do jogador ou origem
    return this.playerObject ? 
      this.playerObject.position.clone() : 
      new THREE.Vector3(0, 0, 0);
  }
} 