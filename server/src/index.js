// Arquivo principal do servidor
import geckos from '@geckos.io/server';
import { SERVER, EVENTS, WORLD } from '../../shared/constants/gameConstants.js';
import { GameWorld } from './models/GameWorld.js';

// Inicializa o servidor geckos.io com configurações para desenvolvimento
const io = geckos({
  ordered: false, // Para melhor desempenho de UDP
  cors: { 
    origin: '*',
    allowAuthorization: true 
  }
});

// Inicializa o mundo do jogo
const gameWorld = new GameWorld();

// Define a referência global para o GameWorld para ser acessada por outras classes
global.gameWorld = gameWorld;

// Inicia o servidor na porta configurada
io.listen(SERVER.PORT);

console.log(`Servidor iniciado na porta ${SERVER.PORT}`);

// Inicializa o mundo com objetos e áreas de spawn
gameWorld.initialize();

// Gerenciamento de conexões
io.onConnection(channel => {
  try {
    console.log(`Novo jogador conectado: ${channel.id}`);
    
    // Adiciona jogador ao mundo do jogo
    const player = gameWorld.addPlayer(channel);
    
    // Envia ID para o cliente
    channel.emit(EVENTS.PLAYER.INIT, { id: player.id });
    
    // Envia informações sobre objetos do mundo para o novo jogador
    channel.emit(EVENTS.WORLD.INIT, {
      worldObjects: gameWorld.getSerializedWorldObjects(),
      monsters: gameWorld.getSerializedMonsters()
    });
    
    // Informa outros jogadores sobre o novo jogador que entrou
    // e envia informações sobre jogadores existentes para o novo jogador
    const allPlayers = gameWorld.getSerializedPlayers();
    
    for (const p of allPlayers) {
      if (p.id !== player.id) {
        // Notifica os outros jogadores sobre o novo jogador
        const otherPlayer = gameWorld.entityManager.getPlayer(p.id);
        if (otherPlayer && otherPlayer.channel) {
          otherPlayer.channel.emit(EVENTS.PLAYER.JOINED, {
            id: player.id,
            position: player.position,
            rotation: player.rotation,
            stats: player.stats,
            level: player.level
          });
        }
        
        // Envia informações sobre jogadores existentes para o novo jogador
        channel.emit(EVENTS.PLAYER.EXISTING, {
          id: p.id,
          position: p.position,
          rotation: p.rotation,
          stats: p.stats,
          level: p.level
        });
      }
    }
    
    // Gerencia desconexão
    channel.onDisconnect(() => {
      try {
        console.log(`Jogador desconectado: ${player.id}`);
        
        // Remove o jogador do mundo
        gameWorld.removePlayer(player.id);
        
        // Notifica outros jogadores sobre a desconexão
        io.emit(EVENTS.PLAYER.DISCONNECTED, { id: player.id });
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
        
        // Recupera o jogador do mundo
        const player = gameWorld.entityManager.getPlayer(channel.id);
        
        if (!player) {
          console.error(`Jogador não encontrado para ID: ${channel.id}`);
          return;
        }
        
        // Atualiza o estado de movimento do jogador com base nos inputs
        player.movementState.forward = data.input.forward || false;
        player.movementState.backward = data.input.backward || false;
        player.movementState.left = data.input.left || false;
        player.movementState.right = data.input.right || false;
        
        // O movimento será processado no próximo update do loop do jogo
        // e a rotação será calculada automaticamente com base na direção
      } catch (error) {
        console.error('Erro no tratamento de movimento:', error);
      }
    });
    
    // Processa uso de habilidades (action)
    channel.on(EVENTS.PLAYER.USE_ABILITY, data => {
      try {
        if (!data || !data.abilityId || !data.targetPosition) {
          console.error('Dados de habilidade inválidos:', data);
          return;
        }
        
        const player = gameWorld.entityManager.getPlayer(channel.id);
        if (!player) return;
        
        const ability = player.getAbilityById(data.abilityId);
        if (!ability) return;
        
        // Verifica cooldown e mana no método useAbility
        if (!player.useAbility(data.abilityId, data.targetPosition)) {
          return; // Se não puder usar a habilidade, retorna
        }
        
        // Processa a habilidade usando o sistema de combate
        const result = gameWorld.processAbilityUse(player, data.abilityId, data.targetPosition);
        
        // Se a habilidade não teve sucesso, retorna
        if (!result.success) return;
        
        // Notifica o cliente que a habilidade foi usada
        channel.emit(EVENTS.PLAYER.ABILITY_USED, {
          id: player.id,
          abilityId: data.abilityId,
          position: player.position,
          targetPosition: data.targetPosition,
          teleport: result.teleportPosition ? true : false,
          teleportPosition: result.teleportPosition,
          areaEffect: result.areaEffect,
          cooldownStart: player.abilityCooldowns[data.abilityId],
          cooldownDuration: ability.COOLDOWN,
          cooldownEnd: player.abilityCooldowns[data.abilityId] + ability.COOLDOWN,
          mana: player.stats.mana,
          maxMana: player.stats.maxMana
        });
        
        // Notifica outros jogadores sobre a habilidade usada
        for (const otherPlayer of gameWorld.entityManager.players.values()) {
          if (otherPlayer.id !== player.id && otherPlayer.channel && 
              otherPlayer.distanceTo(player) < WORLD.SIZE.VISIBLE_RANGE) {
            otherPlayer.channel.emit(EVENTS.PLAYER.ABILITY_USED, {
              playerId: player.id,
              abilityId: data.abilityId,
              position: player.position,
              targetPosition: data.targetPosition,
              teleport: result.teleportPosition ? true : false,
              teleportPosition: result.teleportPosition,
              areaEffect: result.areaEffect
            });
          }
        }
        
        // Envia resultados do combate para todos os jogadores próximos
        if (result.hits && result.hits.length > 0) {
          for (const hit of result.hits) {
            // Envia informações sobre o hit para jogadores na área
            for (const nearbyPlayer of gameWorld.entityManager.players.values()) {
              if (nearbyPlayer.channel && 
                  (nearbyPlayer.distanceTo(player) < WORLD.SIZE.VISIBLE_RANGE || 
                   (hit.position && nearbyPlayer.distanceTo({position: hit.position}) < WORLD.SIZE.VISIBLE_RANGE))) {
                
                // Envia evento de dano
                nearbyPlayer.channel.emit(EVENTS.COMBAT.DAMAGE_DEALT, {
                  sourceId: player.id,
                  targetId: hit.id,
                  targetType: hit.type,
                  damage: hit.damage,
                  position: hit.position,
                  abilityId: data.abilityId
                });
                
                // Envia evento de texto flutuante para mostrar dano
                nearbyPlayer.channel.emit(EVENTS.COMBAT.FLOATING_TEXT, {
                  text: hit.damage.toString(),
                  position: hit.position,
                  color: '#ff0000', // Vermelho para dano
                  size: Math.min(0.7 + (hit.damage / 50), 1.5), // Tamanho mais controlado baseado no dano
                  duration: 1200 // Reduzido de 1000 para 1200 ms
                });
              }
            }
          }
        }
      } catch (error) {
        console.error('Erro ao processar uso de habilidade:', error);
      }
    });

    // Processa requisições de sincronização
    channel.on(EVENTS.PLAYER.SYNC_REQUEST, () => {
      try {
        const player = gameWorld.entityManager.getPlayer(channel.id);
        if (!player) return;
        
        // Envia mana e cooldowns atualizados para o cliente
        const cooldowns = {};
        const now = Date.now();
        
        // Para cada habilidade, envia o timestamp de fim do cooldown
        for (const abilityId in player.abilityCooldowns) {
          const abilityStartTime = player.abilityCooldowns[abilityId];
          if (abilityStartTime === 0) continue; // Ignora se não estiver em cooldown
          
          const ability = player.getAbilityById(parseInt(abilityId));
          if (!ability) continue;
          
          // Calcula quando o cooldown termina
          const cooldownEndTime = abilityStartTime + ability.COOLDOWN;
          
          // Só envia se ainda estiver em cooldown
          if (cooldownEndTime > now) {
            cooldowns[abilityId] = cooldownEndTime;
          }
        }
        
        channel.emit(EVENTS.PLAYER.SYNC_RESPONSE, {
          mana: player.stats.mana,
          maxMana: player.stats.maxMana,
          hp: player.stats.hp,
          maxHp: player.stats.maxHp,
          cooldowns: cooldowns,
          timestamp: now // Enviando timestamp do servidor para ajustar diferenças de relógio
        });
        
        // Adicionalmente, enviamos um evento MOVED para garantir que os stats estejam sincronizados
        channel.emit(EVENTS.PLAYER.MOVED, {
          id: player.id,
          position: { ...player.position },
          rotation: player.rotation,
          stats: { ...player.stats }
        });
      } catch (error) {
        console.error('Erro ao processar sincronização:', error);
      }
    });
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

// Função para enviar atualizações aos clientes
function broadcastUpdates() {
  try {
    // Serializa o estado atual de todos os jogadores para envio eficiente
    const serializedPlayers = {};
    
    // Pré-serializa todos os jogadores para evitar fazer isso várias vezes
    for (const player of gameWorld.entityManager.players.values()) {
      if (player.active) {
        serializedPlayers[player.id] = {
          id: player.id,
          position: { ...player.position },
          rotation: player.rotation,
          stats: { ...player.stats }
        };
      }
    }
    
    // Para cada jogador, envia as atualizações relevantes
    for (const player of gameWorld.entityManager.players.values()) {
      if (!player.active || !player.channel) continue;
      
      // Envia a posição atualizada do próprio jogador
      player.channel.emit(EVENTS.PLAYER.MOVED, serializedPlayers[player.id]);
      
      // Envia posições de outros jogadores
      for (const otherPlayerId in serializedPlayers) {
        if (otherPlayerId !== player.id) {
          player.channel.emit(EVENTS.PLAYER.MOVED, serializedPlayers[otherPlayerId]);
        }
      }
      
      // Envia atualizações de entidades próximas (monstros e objetos do mundo)
      const nearbyMonsters = [];
      const nearbyWorldObjects = [];
      
      // Coleta monstros próximos
      for (const monster of gameWorld.entityManager.monsters.values()) {
        if (monster.active && player.distanceTo(monster) < 30) {
          nearbyMonsters.push(monster.serialize());
        }
      }
      
      // Coleta objetos do mundo próximos
      for (const worldObject of gameWorld.entityManager.worldObjects.values()) {
        if (worldObject.active && player.distanceTo(worldObject) < 40) {
          nearbyWorldObjects.push(worldObject.serialize());
        }
      }
      
      // Envia atualização do mundo se houver entidades para enviar
      if (nearbyMonsters.length > 0 || nearbyWorldObjects.length > 0) {
        player.channel.emit(EVENTS.WORLD.UPDATE, {
          monsters: nearbyMonsters,
          worldObjects: nearbyWorldObjects
        });
      }
    }
  } catch (error) {
    console.error('Erro ao enviar atualizações:', error);
  }
}

// Loop do jogo (20 ticks por segundo)
const TICK_RATE = SERVER.TICK_RATE;
setInterval(() => {
  try {
    // Atualiza o mundo do jogo
    gameWorld.update();
    
    // Envia atualizações aos clientes
    broadcastUpdates();
  } catch (error) {
    console.error('Erro no loop do jogo:', error);
  }
}, TICK_RATE);

// Limpeza adequada ao encerrar o servidor
process.on('SIGINT', () => {
  console.log('Encerrando servidor...');
  gameWorld.cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Encerrando servidor...');
  gameWorld.cleanup();
  process.exit(0);
}); 