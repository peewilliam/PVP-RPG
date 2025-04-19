// ChatManager.js
// Componente de chat lateral moderno estilo MMORPG

import './ChatManager.css';

export class ChatManager {
  constructor(container = document.body) {
    this.container = container;
    this.tabs = ['Main', 'Sistema(Dano/Cura)', 'Global'];
    this.activeTab = 'Main';
    this.messages = {
      Main: [],
      Sistema: [],
      'Sistema(Dano/Cura)': [],
      Global: [],
      Privado: []
    };
    this._createChatElement();
  }

  _createChatElement() {
    // Cria estrutura base
    this.chatEl = document.createElement('div');
    this.chatEl.className = 'chat-manager';
    this.chatEl.style.position = 'fixed';
    this.chatEl.style.left = '2vw';
    this.chatEl.style.bottom = '3vw';

    // Alça de redimensionamento (handle) - agora elemento irmão do chat
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'chat-resize-handle';
    const handleBar = document.createElement('div');
    handleBar.className = 'chat-resize-handle-bar';
    resizeHandle.appendChild(handleBar);
    document.body.appendChild(resizeHandle);

    // Função para posicionar o handle acima do chat, centralizado
    const positionHandle = () => {
      const chatRect = this.chatEl.getBoundingClientRect();
      // Centraliza o handle em relação ao chat
      resizeHandle.style.left = (chatRect.left + chatRect.width / 2 - 30) + 'px'; // 30 = metade da largura do handle (60px)
      // Colado ao topo do chat
      resizeHandle.style.top = (chatRect.top - 14) + 'px'; // 14px para ficar colado, pode ajustar se quiser mais próximo
    };
    // Chama ao criar e ao redimensionar
    setTimeout(positionHandle, 100);
    window.addEventListener('resize', positionHandle);
    const observer = new ResizeObserver(positionHandle);
    observer.observe(this.chatEl);

    // Lógica de drag para redimensionar
    let isResizing = false;
    let startY = 0;
    let startHeight = 0;
    const minHeight = 120; // px
    const maxHeight = 600; // px
    resizeHandle.addEventListener('mousedown', (e) => {
      isResizing = true;
      startY = e.clientY;
      startHeight = this.chatEl.offsetHeight;
      document.body.style.userSelect = 'none';
    });
    window.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      const dy = e.clientY - startY;
      let newHeight = Math.max(minHeight, Math.min(maxHeight, startHeight - dy));
      this.chatEl.style.height = newHeight + 'px';
      // Calcula a altura do input para garantir que ele nunca suma
      const inputHeight = this.inputEl.offsetHeight || 44;
      const tabsHeight = this.tabButtons.Main?.offsetHeight || 36;
      // 12px de margem extra
      this.messagesEl.style.maxHeight = (newHeight - inputHeight - tabsHeight - 12) + 'px';
      positionHandle();
    });
    window.addEventListener('mouseup', () => {
      if (isResizing) {
        isResizing = false;
        document.body.style.userSelect = '';
      }
    });

    // Abas
    const tabsEl = document.createElement('div');
    tabsEl.className = 'chat-tabs';
    this.tabButtons = {};
    this.tabs.forEach(tab => {
      const btn = document.createElement('button');
      btn.className = 'chat-tab-btn' + (tab === this.activeTab ? ' active' : '');
      btn.textContent = tab;
      btn.onclick = () => this.setActiveTab(tab);
      tabsEl.appendChild(btn);
      this.tabButtons[tab] = btn;
    });
    this.chatEl.appendChild(tabsEl);

    // Área de mensagens
    this.messagesEl = document.createElement('div');
    this.messagesEl.className = 'chat-messages';
    this.chatEl.appendChild(this.messagesEl);

    // Input
    this.inputEl = document.createElement('textarea');
    this.inputEl.className = 'chat-input';
    this.inputEl.rows = 1;
    this.inputEl.placeholder = 'Digite sua mensagem...';
    this.inputEl.style.resize = 'none';
    this.inputEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const value = this.inputEl.value.trim();
        if (value) {
          this._handleInput(value);
          this.inputEl.value = '';
          this.inputEl.rows = 1;
        }
      } else {
        // Ajusta altura do textarea
        setTimeout(() => {
          this.inputEl.rows = Math.min(4, this.inputEl.value.split('\n').length);
        }, 0);
      }
    });
    this.inputEl.addEventListener('focus', () => {
      this.chatEl.classList.add('focused');
      window.dispatchEvent(new CustomEvent('chat:focus'));
    });
    this.inputEl.addEventListener('blur', () => {
      this.chatEl.classList.remove('focused');
      window.dispatchEvent(new CustomEvent('chat:blur'));
    });

    // Atalho: Enter para focar, ESC para desfocar
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && document.activeElement !== this.inputEl) {
        this.inputEl.focus();
        e.preventDefault();
      }
      if (e.key === 'Escape' && document.activeElement === this.inputEl) {
        this.inputEl.blur();
        e.preventDefault();
      }
    });

    this.chatEl.appendChild(this.inputEl);

    this.container.appendChild(this.chatEl);
    this.renderMessages();
  }

  setActiveTab(tab) {
    if (!this.tabs.includes(tab) && tab !== 'Privado') return;
    this.activeTab = tab;
    Object.entries(this.tabButtons).forEach(([t, btn]) => {
      btn.classList.toggle('active', t === tab);
    });
    this.renderMessages();
  }

  renderMessages() {
    this.messagesEl.innerHTML = '';
    const msgs = this.messages[this.activeTab] || [];
    msgs.slice(-100).forEach(msg => {
      const msgEl = document.createElement('div');
      msgEl.className = 'chat-message ' + (msg.type || 'player');
      if (msg.name) {
        const nameEl = document.createElement('span');
        nameEl.className = 'chat-name ' + (msg.nameClass || 'player');
        nameEl.textContent = msg.name + ': ';
        msgEl.appendChild(nameEl);
      }
      const textEl = document.createElement('span');
      textEl.className = 'chat-text';
      textEl.innerHTML = this._sanitize(msg.text, msg.type === 'me');
      msgEl.appendChild(textEl);
      this.messagesEl.appendChild(msgEl);
    });
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  setChannel(channel) {
    this.channel = channel;
    // Listeners para mensagens recebidas do servidor
    channel.on('chat:main', data => {
      if (data && data.text && data.from) {
        this._addMessage({ text: data.text, type: 'player', name: data.from, nameClass: 'player' }, ['Main']);
      }
    });
    channel.on('chat:global', data => {
      if (data && data.text && data.from) {
        this._addMessage({ text: data.text, type: 'player', name: data.from, nameClass: 'player' }, ['Global']);
      }
    });
    channel.on('chat:private', data => {
      if (data && data.text && data.from) {
        this._addMessage({ text: data.text, type: 'private', name: data.from, nameClass: 'private' }, ['Privado']);
        this.setActiveTab('Privado');
      }
    });
    // Mensagens de sistema podem ser integradas aqui futuramente
  }

  // Parser de comandos (ajustado para enviar via socket)
  _handleInput(value) {
    if (value.startsWith('/')) {
      const [cmd, ...args] = value.slice(1).split(' ');
      switch (cmd.toLowerCase()) {
        case 'w': {
          const target = args.shift();
          const msg = args.join(' ');
          if (target && msg) {
            if (this.channel) {
              this.channel.emit('chat:private', { to: target, text: msg });
            } else {
              this.addPrivateMessage('Você', target, msg);
              this.setActiveTab('Privado');
            }
          } else {
            this.addSystemMessage('Uso: /w nome mensagem');
          }
          break;
        }
        case 'me': {
          const action = args.join(' ');
          if (action) {
            this._addMessage({ text: action, type: 'me', name: 'Você', nameClass: 'player' }, [this.activeTab, 'Main']);
          }
          break;
        }
        case 'help': {
          this.addSystemMessage('Bem-vindo ao MMORPG!\nComandos disponíveis:\n/me ação - faz uma ação\n/w nome mensagem - envia mensagem privada\n/help - mostra esta ajuda\nObjetivo: evolua, lute e interaja com outros jogadores!');
          break;
        }
        default:
          this.addSystemMessage('Comando desconhecido. Use /help para ver os comandos.');
      }
    } else {
      // Envio normal: decide canal
      if (this.channel) {
        if (this.activeTab === 'Global') {
          this.channel.emit('chat:global', { text: value });
        } else if (this.activeTab === 'Main') {
          this.channel.emit('chat:main', { text: value });
        } else {
          // Por padrão, envia para Main
          this.channel.emit('chat:main', { text: value });
        }
      } else {
        this.addPlayerMessage('Você', value, this.activeTab);
      }
    }
  }

  // Sanitização básica para evitar XSS
  _sanitize(text, isMe = false) {
    let safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');
    if (isMe) safe = `<i>${safe}</i>`;
    return safe;
  }

  // Métodos para adicionar mensagens
  addSystemMessage(text) {
    this._addMessage({ text, type: 'system', name: 'Sistema', nameClass: 'system' }, ['Main', 'Sistema']);
  }
  addXPMessage(text) {
    this._addMessage({ text, type: 'xp', name: 'XP', nameClass: 'xp' }, ['Main', 'Sistema']);
  }
  addCooldownMessage(text) {
    this._addMessage({ text, type: 'cooldown', name: 'Cooldown', nameClass: 'cooldown' }, ['Main', 'Sistema']);
  }
  addManaMessage(text) {
    this._addMessage({ text, type: 'mana', name: 'Mana', nameClass: 'mana' }, ['Main', 'Sistema']);
  }
  addErrorMessage(text) {
    this._addMessage({ text, type: 'error', name: 'Erro', nameClass: 'error' }, ['Main', 'Sistema']);
  }
  addDamageMessage(text) {
    console.log('[CHAT] addDamageMessage:', text);
    this._addMessage({ text, type: 'damage', name: 'Dano', nameClass: 'damage' }, ['Sistema(Dano/Cura)']);
  }
  addHealMessage(text) {
    console.log('[CHAT] addHealMessage:', text);
    this._addMessage({ text, type: 'heal', name: 'Cura', nameClass: 'heal' }, ['Sistema(Dano/Cura)']);
  }
  addPlayerMessage(name, text, tab = 'Main') {
    this._addMessage({ text, type: 'player', name, nameClass: 'player' }, [tab, 'Main']);
  }
  addPrivateMessage(from, to, text) {
    this._addMessage({ text: `(para ${to}) ${text}`, type: 'private', name: from, nameClass: 'private' }, ['Privado']);
  }

  _addMessage(msg, tabs) {
    console.log('[CHAT] _addMessage:', msg, tabs);
    tabs.forEach(tab => {
      if (!this.messages[tab]) this.messages[tab] = [];
      this.messages[tab].push(msg);
      if (this.messages[tab].length > 200) this.messages[tab].shift();
    });
    if (tabs.includes(this.activeTab)) this.renderMessages();
  }
} 