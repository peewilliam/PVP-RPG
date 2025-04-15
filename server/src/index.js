// Arquivo principal do servidor
import geckos from '@geckos.io/server';
import { v4 as uuidv4 } from 'uuid';
import { SERVER, EVENTS } from '../../shared/constants/gameConstants.js';

// Inicializa o servidor geckos.io com configurações para desenvolvimento
const io = geckos({
  ordered: false, // Para melhor desempenho de UDP
  cors: { 
    origin: '*',
    allowAuthorization: true 
  }
});

// Lista de jogadores conectados
const connectedPlayers = new Map();

// Inicia o servidor na porta configurada
io.listen(SERVER.PORT);

console.log(`Servidor iniciado na porta ${SERVER.PORT}`);

// Gerenciamento de conexões
io.onConnection(channel => {
  try {
    // Gera ID único para o jogador
    const playerId = uuidv4();
    
    console.log(`Novo jogador conectado: ${playerId}`);
    
    // Adiciona jogador à lista de conectados
    const newPlayer = {
      id: playerId,
      position: { x: 0, y: 0, z: 0 },
      rotation: 0,
      channel
    };
    
    connectedPlayers.set(channel.id, newPlayer);
    
    // Envia ID para o cliente
    channel.emit(EVENTS.PLAYER.INIT, { id: playerId });
    
    // Informa outros jogadores sobre o novo jogador que entrou
    for (const [id, p] of connectedPlayers.entries()) {
      if (id !== channel.id) {
        // Notifica os outros jogadores sobre o novo jogador
        p.channel.emit(EVENTS.PLAYER.JOINED, {
          id: playerId,
          position: newPlayer.position,
          rotation: newPlayer.rotation
        });
        
        // Envia informações sobre jogadores existentes para o novo jogador
        channel.emit(EVENTS.PLAYER.EXISTING, {
          id: p.id,
          position: p.position,
          rotation: p.rotation
        });
      }
    }
    
    // Gerencia desconexão
    channel.onDisconnect(() => {
      try {
        console.log(`Jogador desconectado: ${playerId}`);
        connectedPlayers.delete(channel.id);
        // Notifica outros jogadores sobre a desconexão
        io.emit(EVENTS.PLAYER.DISCONNECTED, { id: playerId });
      } catch (error) {
        console.error('Erro no tratamento de desconexão:', error);
      }
    });
    
    // Processa eventos de movimento
    channel.on(EVENTS.PLAYER.MOVE, data => {
      try {
        // Verifica se os dados são válidos antes de processá-los
        if (!data || !data.input) {
          console.error('Comandos de movimento inválidos:', data);
          return;
        }
        
        // Recupera o jogador do mapa de jogadores conectados
        const player = connectedPlayers.get(channel.id);
        if (player) {
          // Processa os comandos de movimento
          const input = data.input;
          const speed = 0.1; // Velocidade de movimento
          let moved = false;
          let directionX = 0;
          let directionZ = 0;
          
          // Verifica se o movimento é relativo à câmera isométrica
          if (data.isRelativeToCamera) {
            // Movimento relativo à câmera isométrica
            
            // Em uma visão isométrica típica:
            // - Forward (W): mover na direção (x-1, z-1)
            // - Backward (S): mover na direção (x+1, z+1)
            // - Left (A): mover na direção (x-1, z+1)
            // - Right (D): mover na direção (x+1, z-1)
            
            if (input.forward) {
              player.position.x -= speed * 0.7; // Ajustado para manter a mesma velocidade total
              player.position.z -= speed * 0.7;
              directionX -= 1;
              directionZ -= 1;
              moved = true;
            }
            if (input.backward) {
              player.position.x += speed * 0.7;
              player.position.z += speed * 0.7;
              directionX += 1;
              directionZ += 1;
              moved = true;
            }
            if (input.left) {
              player.position.x -= speed * 0.7;
              player.position.z += speed * 0.7;
              directionX -= 1;
              directionZ += 1;
              moved = true;
            }
            if (input.right) {
              player.position.x += speed * 0.7;
              player.position.z -= speed * 0.7;
              directionX += 1;
              directionZ -= 1;
              moved = true;
            }
          } else {
            // Movimento absoluto no mundo (antigo sistema)
            if (input.up) {
              player.position.z -= speed;
              directionZ -= 1;
              moved = true;
            }
            if (input.down) {
              player.position.z += speed;
              directionZ += 1;
              moved = true;
            }
            if (input.left) {
              player.position.x -= speed;
              directionX -= 1;
              moved = true;
            }
            if (input.right) {
              player.position.x += speed;
              directionX += 1;
              moved = true;
            }
          }
          
          // Se o jogador se moveu, atualizamos a rotação e emitimos a nova posição/rotação
          if (moved) {
            // Calcular a rotação baseada na direção do movimento
            let rotation = calculateRotation(directionX, directionZ);
            
            // Atualiza a rotação do jogador
            player.rotation = rotation;
            
            // Aplica verificações e restrições de movimento (ex: colisões) - a ser implementado
            
            // Cria mensagem com nova posição e rotação
            const updateMessage = {
              id: player.id,
              position: player.position,
              rotation: player.rotation
            };
            
            // Envia para o jogador que se moveu
            channel.emit(EVENTS.PLAYER.MOVED, updateMessage);
            
            // Propaga o movimento para outros jogadores
            for (const [id, p] of connectedPlayers.entries()) {
              if (id !== channel.id) {
                p.channel.emit(EVENTS.PLAYER.MOVED, updateMessage);
              }
            }
          }
        }
      } catch (error) {
        console.error('Erro no tratamento de movimento:', error);
      }
    });
    
    // Função para calcular a rotação baseada na direção do movimento
    function calculateRotation(directionX, directionZ) {
      // Se não há movimento, mantém a rotação atual
      if (directionX === 0 && directionZ === 0) {
        return 0;
      }
      
      // Mapeamento CORRIGIDO de direções para ângulos de rotação em radianos
      // Em visão isométrica:
      
      if (directionX < 0 && directionZ < 0) {
        // W: Movendo para frente/cima na isométrica (Noroeste)
        return Math.PI * 1.25; // Aponta para SE (oposto a NW)
      } else if (directionX > 0 && directionZ > 0) {
        // S: Movendo para trás/baixo na isométrica (Sudeste)
        return Math.PI * 0.25; // Aponta para NW (oposto a SE)
      } else if (directionX < 0 && directionZ > 0) {
        // A: Movendo para esquerda na isométrica (Sudoeste)
        return Math.PI * 1.75; // Aponta para NE (oposto a SW)
      } else if (directionX > 0 && directionZ < 0) {
        // D: Movendo para direita na isométrica (Nordeste)
        return Math.PI * 0.75; // Aponta para SW (oposto a NE)
      } else if (directionX === 0 && directionZ < 0) {
        // W+D: Movendo para Norte
        return Math.PI * 1.0; // Aponta para Sul (oposto)
      } else if (directionX < 0 && directionZ === 0) {
        // W+A: Movendo para Oeste
        return Math.PI * 1.5; // Aponta para Leste (oposto)
      } else if (directionX === 0 && directionZ > 0) {
        // S+A: Movendo para Sul
        return Math.PI * 0.0; // Aponta para Norte (oposto)
      } else if (directionX > 0 && directionZ === 0) {
        // S+D: Movendo para Leste
        return Math.PI * 0.5; // Aponta para Oeste (oposto)
      }
      
      // Caso padrão (não deveria chegar aqui)
      return 0;
    }
  } catch (error) {
    console.error('Erro na conexão de jogador:', error);
  }
});

// Handler para erros não capturados para evitar que o servidor caia
process.on('uncaughtException', (error) => {
  console.error('Erro não capturado:', error);
});

// Handler para promessas rejeitadas não tratadas
process.on('unhandledRejection', (reason, promise) => {
  console.error('Promessa rejeitada não tratada:', reason);
});

// Loop básico do jogo (20 ticks por segundo)
setInterval(() => {
  try {
    // Implementação futura: lógica de jogo como movimentação de monstros, 
    // verificação de colisão, combate, etc.
  } catch (error) {
    console.error('Erro no loop do jogo:', error);
  }
}, SERVER.TICK_RATE); 