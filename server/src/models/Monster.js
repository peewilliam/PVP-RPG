import { Entity } from './Entity.js';
import { MONSTERS, EVENTS } from '../../../shared/constants/gameConstants.js';

/**
 * Classe que representa um monstro no jogo.
 * Inclui comportamento de IA, atributos e sistema de combate.
 */
export class Monster extends Entity {
  /**
   * @param {string} id - ID único do monstro
   * @param {string} type - Tipo do monstro (ex: 'GOBLIN')
   * @param {Object} position - Posição inicial {x, y, z}
   * @param {number} level - Nível do monstro (afeta atributos)
   */
  constructor(id, type, position = { x: 0, y: 0, z: 0 }, level = 1) {
    super(id, position);
    
    // Configurações baseadas no tipo do monstro
    const monsterType = this.getMonsterTypeConfig(type);
    
    if (!monsterType) {
      throw new Error(`Tipo de monstro inválido: ${type}`);
    }
    
    this.monsterType = type;
    this.type = 'monster';
    
    // Raio de colisão do monstro
    this.collisionRadius = 0.6; // Um pouco maior que o jogador
    
    // Sistema de nível
    this.level = level;
    this.xpReward = monsterType.XP_REWARD * level;
    
    // Escala de atributos com base no nível
    const levelMultiplier = 1 + ((level - 1) * 0.2); // +20% por nível
    
    // Atributos do monstro
    this.stats = {
      maxHp: Math.floor(monsterType.HP * levelMultiplier),
      hp: Math.floor(monsterType.HP * levelMultiplier),
      damage: Math.floor(monsterType.DAMAGE * levelMultiplier),
      defense: Math.floor(monsterType.DEFENSE * levelMultiplier)
    };
    
    // Comportamento e IA
    this.moveSpeed = monsterType.SPEED;
    this.attackRange = monsterType.ATTACK_RANGE;
    this.attackCooldown = monsterType.ATTACK_COOLDOWN;
    this.lastAttackTime = 0;
    this.aggroRange = 8; // Distância para começar a seguir o jogador
    
    // Estado da IA
    this.aiState = 'idle'; // idle, patrolling, chasing, attacking, returning
    this.targetId = null; // ID do alvo (geralmente um jogador)
    
    // Ponto de spawn para retornar quando não há alvos
    this.spawnPoint = { ...position };
    
    // Temporização para comportamentos da IA
    this.lastStateChange = Date.now();
    this.patrolTimer = 0;
    this.patrolDirection = { x: 0, z: 0 };
  }
  
  /**
   * Retorna a configuração do tipo de monstro
   * @param {string} type - Tipo do monstro (ex: 'GOBLIN')
   * @returns {Object|null} - Configuração do tipo de monstro ou null se não encontrado
   */
  getMonsterTypeConfig(type) {
    switch (type) {
      case 'BLACK_MIST_ZOMBIE': return MONSTERS.BLACK_MIST_ZOMBIE;
      // Adicionar outros tipos de monstros aqui
      default: return null;
    }
  }
  
  /**
   * Atualiza o monstro com base no estado da IA e delta time
   * @param {number} deltaTime - Tempo desde a última atualização
   * @param {Array} players - Lista de jogadores para detectar alvos
   */
  update(deltaTime, players = []) {
    // Atualiza o comportamento da IA
    this.updateAI(deltaTime, players);
    
    // Chama o método da classe pai para mover o monstro
    super.update(deltaTime);
  }
  
  /**
   * Atualiza o comportamento da IA do monstro
   * @param {number} deltaTime - Tempo desde a última atualização
   * @param {Array} players - Lista de jogadores para detectar alvos
   */
  updateAI(deltaTime, players) {
    // Não faz nada se estiver morto
    if (this.stats.hp <= 0) return;
    
    const now = Date.now();
    let moveSpeed; // Corrigido: declarar apenas uma vez
    
    // Verifica o estado atual e realiza ações apropriadas
    switch (this.aiState) {
      case 'idle':
        // Permanece parado por um tempo e então começa a patrulhar
        if (now - this.lastStateChange > 3000) {
          this.setAIState('patrolling');
        }
        
        // Verifica se há jogadores próximos para começar a perseguir
        this.findTarget(players);
        break;
        
      case 'patrolling':
        // Atualiza a direção de patrulha periodicamente
        if (this.patrolTimer <= 0) {
          this.patrolTimer = 5000; // 5 segundos
          // Gera uma direção aleatória para patrulha
          const angle = Math.random() * Math.PI * 2;
          this.patrolDirection.x = Math.cos(angle) * 0.5;
          this.patrolDirection.z = Math.sin(angle) * 0.5;
          
          // Atualiza a rotação para a direção da patrulha
          this.rotation = angle;
        }
        
        // Decrementa o timer de patrulha
        this.patrolTimer -= deltaTime;
        
        // Move na direção da patrulha
        moveSpeed = this.moveSpeed;
        if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) {
          moveSpeed *= (this.lastSlowValue || 0.4);
        }
        this.velocity.x = this.patrolDirection.x * moveSpeed;
        this.velocity.z = this.patrolDirection.z * moveSpeed;
        
        // Verifica se há jogadores próximos para começar a perseguir
        this.findTarget(players);
        
        // Volta para idle periodicamente
        if (now - this.lastStateChange > 8000) {
          this.setAIState('idle');
        }
        break;
        
      case 'chasing':
        // Encontra o jogador alvo na lista
        const target = this.findPlayerById(players, this.targetId);
        
        // Se não encontrar o alvo ou estiver muito longe, volta a patrulhar
        if (!target || this.distanceTo(target) > this.aggroRange * 1.5) {
          this.targetId = null;
          this.setAIState('returning');
          break;
        }
        
        // Move em direção ao alvo
        this.moveTowardsTarget(target, deltaTime);
        
        // Se estiver dentro do alcance de ataque, ataca
        if (this.distanceTo(target) <= this.attackRange) {
          this.setAIState('attacking');
        }
        break;
        
      case 'attacking':
        // Encontra o jogador alvo na lista
        const attackTarget = this.findPlayerById(players, this.targetId);
        
        // Se não encontrar o alvo ou estiver fora do alcance, volta a perseguir
        if (!attackTarget || this.distanceTo(attackTarget) > this.attackRange) {
          this.setAIState('chasing');
          break;
        }
        
        // Para de se mover durante o ataque
        this.velocity.x = 0;
        this.velocity.z = 0;
        
        // Olha para o alvo
        this.lookAt(attackTarget.position);
        
        // Ataca se o cooldown permitir
        if (now - this.lastAttackTime > this.attackCooldown) {
          this.attackTarget(attackTarget);
          this.lastAttackTime = now;
        }
        break;
        
      case 'returning':
        // Calcula a distância até o ponto de spawn
        const dx = this.spawnPoint.x - this.position.x;
        const dz = this.spawnPoint.z - this.position.z;
        const distToSpawn = Math.sqrt(dx * dx + dz * dz);
        
        // Se estiver próximo ao ponto de spawn, volta para idle
        if (distToSpawn < 1) {
          this.position.x = this.spawnPoint.x;
          this.position.z = this.spawnPoint.z;
          this.velocity.x = 0;
          this.velocity.z = 0;
          this.setAIState('idle');
          break;
        }
        
        // Move em direção ao ponto de spawn
        const length = Math.sqrt(dx * dx + dz * dz);
        moveSpeed = this.moveSpeed;
        if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) {
          moveSpeed *= (this.lastSlowValue || 0.4);
        }
        this.velocity.x = (dx / length) * moveSpeed;
        this.velocity.z = (dz / length) * moveSpeed;
        
        // Atualiza a rotação para a direção do movimento
        this.rotation = Math.atan2(dz, dx);
        
        // Verifica se há jogadores próximos para começar a perseguir novamente
        this.findTarget(players);
        break;
    }
  }
  
  /**
   * Altera o estado da IA do monstro
   * @param {string} newState - Novo estado da IA
   */
  setAIState(newState) {
    this.aiState = newState;
    this.lastStateChange = Date.now();
    
    // Reset de velocidade ao mudar de estado
    if (newState === 'idle') {
      this.velocity.x = 0;
      this.velocity.z = 0;
    }
  }
  
  /**
   * Procura um alvo (jogador) próximo para perseguir
   * @param {Array} players - Lista de jogadores para verificar
   */
  findTarget(players) {
    // Não procura alvo se já estiver atacando ou perseguindo
    if (this.aiState === 'attacking' || this.aiState === 'chasing') return;
    
    // Encontra o jogador mais próximo dentro do alcance de aggro
    let closestPlayer = null;
    let closestDistance = this.aggroRange;
    
    for (const player of players) {
      // Ignora jogadores mortos
      if (player.stats.hp <= 0) continue;
      
      const distance = this.distanceTo(player);
      if (distance < closestDistance) {
        closestPlayer = player;
        closestDistance = distance;
      }
    }
    
    // Se encontrou um alvo, começa a perseguir
    if (closestPlayer) {
      this.targetId = closestPlayer.id;
      this.setAIState('chasing');
    }
  }
  
  /**
   * Encontra um jogador pelo ID
   * @param {Array} players - Lista de jogadores
   * @param {string} playerId - ID do jogador a encontrar
   * @returns {Object|null} - Jogador encontrado ou null
   */
  findPlayerById(players, playerId) {
    return players.find(player => player.id === playerId) || null;
  }
  
  /**
   * Move o monstro em direção ao alvo
   * @param {Object} target - Alvo para se mover em direção
   * @param {number} deltaTime - Tempo desde a última atualização
   */
  moveTowardsTarget(target, deltaTime) {
    const dx = target.position.x - this.position.x;
    const dz = target.position.z - this.position.z;
    
    // Calcula a direção normalizada
    const length = Math.sqrt(dx * dx + dz * dz);
    
    // Declara e inicializa moveSpeed antes de usar
    let moveSpeed = this.moveSpeed;
    if (this.status && this.status.slowedUntil && this.status.slowedUntil > Date.now()) {
      moveSpeed *= (this.lastSlowValue || 0.4);
    }
    
    // Atualiza a velocidade
    this.velocity.x = (dx / length) * moveSpeed;
    this.velocity.z = (dz / length) * moveSpeed;
    
    // Atualiza a rotação para olhar para o alvo
    this.lookAt(target.position);
  }
  
  /**
   * Faz o monstro olhar para uma determinada posição
   * @param {Object} position - Posição para olhar
   */
  lookAt(position) {
    const dx = position.x - this.position.x;
    const dz = position.z - this.position.z;
    
    // Atualiza a rotação para olhar para a posição
    this.rotation = Math.atan2(dz, dx);
  }
  
  /**
   * Ataca um alvo, causando dano
   * @param {Object} target - Alvo para atacar
   */
  attackTarget(target) {
    // Verifica se o alvo possui o método takeDamage
    if (target && typeof target.takeDamage === 'function') {
      target.takeDamage(this.stats.damage, this);
    }
  }
  
  /**
   * Aplica dano ao monstro
   * @param {number} amount - Quantidade de dano a aplicar
   * @param {Entity} source - Entidade que causou o dano
   * @returns {boolean} - true se o monstro morreu, false caso contrário
   */
  takeDamage(amount, source) {
    // Cálculo de dano considerando defesa
    const damageTaken = Math.max(1, amount - (this.stats.defense * 0.5));
    
    this.stats.hp -= damageTaken;
    
    // Se o atacante for um jogador, torna-o alvo
    if (source && source.type === 'player') {
      this.targetId = source.id;
      
      // Se estiver ocioso ou patrulhando, começa a perseguir
      if (this.aiState === 'idle' || this.aiState === 'patrolling' || this.aiState === 'returning') {
        this.setAIState('chasing');
      }
    }
    
    // Verifica se o monstro morreu
    if (this.stats.hp <= 0) {
      this.stats.hp = 0;
      this.die(source);
      return true;
    }
    
    return false;
  }
  
  /**
   * Processa a morte do monstro
   * @param {Entity} killer - Entidade que matou o monstro
   */
  die(killer) {
    // Atualiza o estado
    this.active = false;
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    // Concede XP ao jogador que matou o monstro
    if (killer && killer.type === 'player' && typeof killer.addExperience === 'function') {
      killer.addExperience(this.xpReward);
    }
    
    // Recupera a referência do mundo do jogo do contexto global
    // Assume que a referência ao GameWorld está disponível em um contexto global
    if (global.gameWorld) {
      // Notifica o sistema de spawn para agendar o respawn
      global.gameWorld.monsterDied(this.id);
      console.log(`Monstro ${this.id} morreu e foi agendado para respawn`);
    } else {
      console.error(`Erro ao agendar respawn do monstro ${this.id}: gameWorld não encontrado`);
    }
  }
  
  /**
   * Retorna um objeto com os dados serializáveis do monstro
   * para envio ao cliente
   */
  serialize() {
    return {
      ...super.serialize(),
      monsterType: this.monsterType,
      level: this.level,
      stats: {
        hp: this.stats.hp,
        maxHp: this.stats.maxHp
      },
      aiState: this.aiState
    };
  }
} 