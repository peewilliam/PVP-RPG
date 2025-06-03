// MovementPrediction.js
// Sistema de predição de movimento do jogador para compensar latência
import * as THREE from 'three';

export class MovementPrediction {
  constructor(player, worldBoundaries) {
    // Referência ao jogador
    this.player = player;
    
    // Limites do mundo
    this.worldBoundaries = worldBoundaries;
    
    // Configurações do sistema
    this.enabled = true;
    this.inputBuffer = [];
    this.lastPredictionTime = 0;
    this.serverReconciliationEnabled = true;
    this.reconciliationThreshold = 0.05;
    this.sequenceNumber = 0;
    this.lastAcknowledgedSeq = -1;
    this.lastServerPosition = null;
    this.predictedPosition = null;
    this.reconciliationLerpFactor = 0.2;
    this.speedModifier = 1.0;
    this.isSlowed = false;
    this.slowValue = 0.4;
    
    // Armazena a última direção e velocidade para uso em movimentos contínuos
    this.lastInputDirection = { dirX: 0, dirZ: 0 };
    this.lastPlayerSpeed = 0.1; // Velocidade padrão
    this.lastPredictionPing = 0; // Ping de predição (ms)
    this.moveToPoint = null; // Novo: destino de movimentação
  }
  
  // Atualiza o estado de slow
  setSlowEffect(isSlowed, value = 0.4) {
    this.isSlowed = isSlowed;
    this.slowValue = value;
  }
  
  // Aplica um movimento à predição atual
  applyPredictedMovement(deltaTime, playerSpeed, inputDirection) {
    if (!this.enabled || !this.player) return;
    
    // Usa a última direção de entrada e velocidade se não forem fornecidas
    const direction = inputDirection || this.lastInputDirection;
    const speed = playerSpeed || this.lastPlayerSpeed;
    
    // Salva os valores atuais para uso futuro
    if (inputDirection) {
      this.lastInputDirection = inputDirection;
    }
    if (playerSpeed) {
      this.lastPlayerSpeed = playerSpeed;
    }
    
    // Se não há direção, não há movimento
    if (direction.dirX === 0 && direction.dirZ === 0) return;
    
    // Reseta a velocidade local
    const velocity = { x: 0, z: 0 };
    
    // Aplica o modificador de velocidade e efeito de slow
    let moveSpeed = speed * this.speedModifier;
    if (this.isSlowed) {
      moveSpeed *= this.slowValue;
    }
    
    // Obtém a direção normalizada
    let { dirX, dirZ } = direction;
    
    // Normaliza o vetor de direção
    const length = Math.sqrt(dirX * dirX + dirZ * dirZ);
    if (length !== 0) {
      dirX /= length;
      dirZ /= length;
    }
    
    // Calcula o movimento baseado no delta time normalizado para o tick rate do servidor
    // O servidor usa um tick rate de 20 (50ms), então normalizamos para esse valor
    const normalizedDelta = deltaTime * 1000 / 50;
    velocity.x = dirX * moveSpeed * normalizedDelta;
    velocity.z = dirZ * moveSpeed * normalizedDelta;
    
    // Inicializa a posição prevista se ainda não existir
    if (!this.predictedPosition) {
      this.predictedPosition = this.player.position.clone();
    }
    
    // Atualiza a posição predita
    this.predictedPosition.x += velocity.x;
    this.predictedPosition.z += velocity.z;
    
    // Restringe ao limite do mundo
    if (this.worldBoundaries) {
      const { minX, maxX, minZ, maxZ } = this.worldBoundaries;
      this.predictedPosition.x = Math.max(minX, Math.min(maxX, this.predictedPosition.x));
      this.predictedPosition.z = Math.max(minZ, Math.min(maxZ, this.predictedPosition.z));
    }
    
    // Define a posição alvo para o jogador
    this.player.targetPosition.copy(this.predictedPosition);
    
    // Calcula e aplica a rotação baseada na direção
    const rotation = this.calculateRotation(direction);
    this.player.rotation.y = rotation;
    
    // Salva o timestamp da predição
    this.lastPredictionTime = Date.now();
  }
  
  // Calcula a rotação baseada na direção do movimento
  calculateRotation(inputDirection) {
    const { dirX, dirZ } = inputDirection;
    
    // Se não há movimento, mantém a rotação atual
    if (dirX === 0 && dirZ === 0) {
      return this.player.rotation.y;
    }
    
    // Direções puras
    if (dirX === -1 && dirZ === -1 && dirX !== 0 && dirZ !== 0) {
      // W: Noroeste → Sudeste (1.25π)
      return 1.25 * Math.PI;
    } else if (dirX === 1 && dirZ === 1 && dirX !== 0 && dirZ !== 0) {
      // S: Sudeste → Noroeste (0.25π)
      return 0.25 * Math.PI;
    } else if (dirX === -1 && dirZ === 1 && dirX !== 0 && dirZ !== 0) {
      // A: Sudoeste → Nordeste (1.75π)
      return 1.75 * Math.PI;
    } else if (dirX === 1 && dirZ === -1 && dirX !== 0 && dirZ !== 0) {
      // D: Nordeste → Sudoeste (0.75π)
      return 0.75 * Math.PI;
    }
    
    // W+D: Norte → Sul (1.0π)
    if (dirX === 0 && dirZ < 0) return 1.0 * Math.PI;
    
    // W+A: Oeste → Leste (1.5π)
    if (dirX < 0 && dirZ === 0) return 1.5 * Math.PI;
    
    // S+D: Leste → Oeste (0.5π)
    if (dirX > 0 && dirZ === 0) return 0.5 * Math.PI;
    
    // S+A: Sul → Norte (0.0π)
    if (dirX === 0 && dirZ > 0) return 0.0 * Math.PI;
    
    // Para outras direções, cálculo padrão (apontando na direção oposta ao movimento)
    let angle = Math.atan2(-dirZ, -dirX);
    if (angle < 0) angle += 2 * Math.PI;
    
    return angle;
  }
  
  // Reconcilia a posição do jogador com a posição recebida do servidor
  reconcilePosition(serverX, serverZ, serverRot) {
    if (!this.player || !this.enabled || !this.serverReconciliationEnabled) return;
    
    // Se não temos uma posição predita, simplesmente aceita a posição do servidor
    if (!this.predictedPosition) {
      this.player.position.set(serverX, 0.5, serverZ);
      this.player.targetPosition.set(serverX, 0.5, serverZ);
      this.player.rotation.y = serverRot;
      this.predictedPosition = this.player.position.clone();
      return;
    }
    
    // Calcula a diferença entre a posição predita e a recebida do servidor
    const dx = serverX - this.predictedPosition.x;
    const dz = serverZ - this.predictedPosition.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    // Salva a última posição recebida do servidor
    this.lastServerPosition = new THREE.Vector3(serverX, 0.5, serverZ);
    
    // Calcula o ping de predição (tempo desde o último input enviado)
    if (this.inputBuffer && this.inputBuffer.length > 0) {
      const lastInput = this.inputBuffer[this.inputBuffer.length - 1];
      if (lastInput && lastInput.timestamp) {
        this.lastPredictionPing = Date.now() - lastInput.timestamp;
      }
    }
    
    // Se a distância for muito grande (maior que um limiar de "teleporte"),
    // assume que foi um teleporte ou outra habilidade de movimentação instantânea
    const teleportThreshold = 5.0; // 5 unidades é considerado um teleporte
    if (distance > teleportThreshold) {
      // Teleporte ou grande correção - aceita a posição do servidor diretamente
      this.player.position.set(serverX, 0.5, serverZ);
      this.player.targetPosition.set(serverX, 0.5, serverZ);
      this.predictedPosition.set(serverX, 0.5, serverZ);
      this.player.rotation.y = serverRot;
      return;
    }
    
    // Se a diferença for maior que o limiar, reconcilia
    if (distance > this.reconciliationThreshold) {
      // Interpola suavemente para a posição correta
      const lerpFactor = this.reconciliationLerpFactor;
      
      // Corrige a posição predita (com lerp para suavizar)
      this.predictedPosition.x += dx * lerpFactor;
      this.predictedPosition.z += dz * lerpFactor;
      
      // Atualiza a posição alvo do jogador
      this.player.targetPosition.copy(this.predictedPosition);
    }
    
    // Atualiza a rotação diretamente
    this.player.rotation.y = serverRot;
  }
  
  // Prepare um movimento para ser enviado ao servidor (incrementa sequência)
  prepareMovementInput(cameraRelativeInput) {
    const currentSeq = this.sequenceNumber++;
    const inputData = {
      sequence: currentSeq,
      input: { ...cameraRelativeInput },
      timestamp: Date.now()
    };
    
    this.inputBuffer.push(inputData);
    
    // Limita o tamanho do buffer para evitar crescimento excessivo
    if (this.inputBuffer.length > 30) {
      this.inputBuffer.shift();
    }
    
    // Converte o formato de entrada em formato de direção para uso na predição
    if (cameraRelativeInput) {
      const { forward, backward, left, right } = cameraRelativeInput;
      
      // Calcula a direção baseada nas teclas pressionadas
      let dirX = 0;
      let dirZ = 0;
      
      if (forward) {
        dirX -= 1;
        dirZ -= 1;
      }
      if (backward) {
        dirX += 1;
        dirZ += 1;
      }
      if (left) {
        dirX -= 1;
        dirZ += 1;
      }
      if (right) {
        dirX += 1;
        dirZ -= 1;
      }
      
      // Atualiza a última direção
      this.lastInputDirection = { dirX, dirZ };
    }
    
    return inputData;
  }
  
  // Força uma teletransporte (para habilidades como teleporte)
  forceTeleport(position) {
    if (!this.player) return;
    
    // Cancela qualquer movimento por clique em progresso
    this.cancelMoveToPoint();
    
    // Atualiza diretamente sem interpolação
    this.player.position.set(position.x, 0.5, position.z);
    this.player.targetPosition.set(position.x, 0.5, position.z);
    
    // Atualiza também a posição de predição
    if (this.predictedPosition) {
      this.predictedPosition.set(position.x, 0.5, position.z);
    } else {
      this.predictedPosition = new THREE.Vector3(position.x, 0.5, position.z);
    }
    
    // Armazena como última posição do servidor para evitar reconciliação
    this.lastServerPosition = new THREE.Vector3(position.x, 0.5, position.z);
    
    // Limpa estados de direção para evitar movimento residual
    this.lastInputDirection = { dirX: 0, dirZ: 0 };
    
    console.log('[DEBUG] Teleporte forçado para:', position);
  }
  
  // Cancela o movimento por clique em andamento
  cancelMoveToPoint() {
    if (this.moveToPoint) {
      console.log('[DEBUG] Cancelando movimento por clique');
      this.moveToPoint = null;
    }
  }
  
  // Alternar o sistema de predição (ativo/inativo)
  toggle() {
    this.enabled = !this.enabled;
    
    // Se desativando a predição, reseta o estado para evitar bugs
    if (!this.enabled) {
      // Limpa o buffer de inputs
      this.inputBuffer = [];
      // Reseta a posição predita
      this.predictedPosition = null;
      // Reseta a última posição do servidor
      this.lastServerPosition = null;
    }
    
    return this.enabled;
  }
  
  // Retorna estatísticas sobre o estado atual da predição
  getStats() {
    // Calcula a reconciliação atual (distância entre posição predita e posição do servidor)
    let reconcileDistance = 0;
    if (this.predictedPosition && this.lastServerPosition) {
      const dx = this.predictedPosition.x - this.lastServerPosition.x;
      const dz = this.predictedPosition.z - this.lastServerPosition.z;
      reconcileDistance = Math.sqrt(dx * dx + dz * dz);
    }
    
    return {
      enabled: this.enabled,
      reconcileDistance,
      isReconciling: reconcileDistance > this.reconciliationThreshold,
      significantDivergence: reconcileDistance > 1.0,
      isSlowed: this.isSlowed,
      slowValue: this.slowValue,
      bufferSize: this.inputBuffer.length
    };
  }

  setMoveToPoint(dest) {
    console.log('[DEBUG] MovementPrediction.setMoveToPoint chamado com:', dest);
    if (!dest) return;
    this.moveToPoint = { x: dest.x, y: dest.y, z: dest.z };
  }

  update(deltaTime) {
    if (!this.player) return;
    if (this.moveToPoint) {
      const dx = this.moveToPoint.x - this.player.position.x;
      const dz = this.moveToPoint.z - this.player.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const stopDist = 0.2;
      if (dist > stopDist) {
        let moveSpeed = this.lastPlayerSpeed || 0.4;
        // Normaliza direção
        const dirX = dx / dist;
        const dirZ = dz / dist;
        // Atualiza posição prevista
        this.player.targetPosition.x += dirX * moveSpeed * (deltaTime * 1000 / 50);
        this.player.targetPosition.z += dirZ * moveSpeed * (deltaTime * 1000 / 50);
        // Rotaciona para o destino
        this.player.rotation.y = Math.atan2(-dirZ, -dirX);
      } else {
        this.moveToPoint = null;
      }
    }
  }
} 