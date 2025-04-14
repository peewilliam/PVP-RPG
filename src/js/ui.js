export class UI {
    constructor(game) {
        this.game = game;
        this.healthElement = null;
        this.levelElement = null;
        this.xpElement = null;
        this.messagesElement = null;
        this.messageTimeout = null;
    }
    
    init() {
        // Obter referências aos elementos HTML
        this.healthElement = document.getElementById('health-value');
        this.levelElement = document.getElementById('level-value');
        this.xpElement = document.getElementById('xp-value');
        this.messagesElement = document.getElementById('messages');
        
        // Inicializar com valores padrão
        this.updateStats();
        
        // Mensagem de boas-vindas
        this.showMessage("Bem-vindo ao RPG PvP! Use as setas ou WASD para mover, SHIFT para correr, e ESPAÇO para atacar.");
    }
    
    updateStats() {
        // Atualizar estatísticas do jogador na interface
        if (this.game.player) {
            this.healthElement.textContent = this.game.player.health;
            this.levelElement.textContent = this.game.playerLevel;
            this.xpElement.textContent = `${this.game.playerXP} / ${this.game.nextLevelXP}`;
        }
    }
    
    showMessage(text, duration = 5000) {
        // Criar elemento de mensagem
        const messageElement = document.createElement('div');
        messageElement.textContent = text;
        messageElement.className = 'message';
        
        // Adicionar à área de mensagens
        this.messagesElement.appendChild(messageElement);
        
        // Scroll para a mensagem mais recente
        this.messagesElement.scrollTop = this.messagesElement.scrollHeight;
        
        // Remover mensagens antigas se houver mais de 5
        while (this.messagesElement.children.length > 5) {
            this.messagesElement.removeChild(this.messagesElement.firstChild);
        }
        
        // Fade out e remover após a duração
        if (duration > 0) {
            setTimeout(() => {
                // Aplicar efeito de fade out
                messageElement.style.opacity = '0.5';
                
                // Remover após o fade
                setTimeout(() => {
                    if (messageElement.parentNode === this.messagesElement) {
                        this.messagesElement.removeChild(messageElement);
                    }
                }, 1000);
            }, duration);
        }
    }
    
    showAlert(text) {
        // Mostrar alerta mais proeminente para eventos importantes
        this.showMessage(text);
        
        // Também poderia criar um elemento de alerta visual ou sonoro
        console.log("ALERTA: " + text);
    }
    
    // Método para atualizar indicadores de inimigos
    updateEnemyIndicators() {
        // Para ser implementado: Mostrar direção de inimigos próximos
    }
} 