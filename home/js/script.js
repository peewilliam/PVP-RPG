document.addEventListener('DOMContentLoaded', function() {
  // Obter o elemento de áudio do HTML
  const backgroundMusic = document.getElementById('background-music');
  backgroundMusic.volume = 0.7;
  
  // Algumas navegadores bloqueiam a reprodução automática sem interação do usuário
  // Adicionamos um botão sonoro para iniciar a reprodução
  const soundToggle = document.createElement('div');
  soundToggle.className = 'sound-toggle';
  soundToggle.innerHTML = '<i class="fa fa-volume-mute"></i>';
  document.body.appendChild(soundToggle);
  
  let isPlaying = false;
  
  // Função para alternar a reprodução de áudio
  function toggleAudio() {
    if (isPlaying) {
      backgroundMusic.pause();
      soundToggle.innerHTML = '<i class="fa fa-volume-mute"></i>';
    } else {
      backgroundMusic.play().catch(error => {
        console.log('Reprodução automática bloqueada pelo navegador:', error);
      });
      soundToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    isPlaying = !isPlaying;
  }
  
  // Tenta iniciar a reprodução automaticamente
  let playPromise = backgroundMusic.play();
  
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isPlaying = true;
      soundToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
      console.log('Reprodução automática iniciada com sucesso');
    }).catch(error => {
      console.log('Reprodução automática bloqueada pelo navegador:', error);
      // Manter o ícone de mudo
    });
  }
  
  soundToggle.addEventListener('click', toggleAudio);
  
  // Adicionar evento para iniciar música no primeiro clique em qualquer lugar da página
  document.addEventListener('click', function startAudioOnFirstClick() {
    if (!isPlaying) {
      backgroundMusic.play().then(() => {
        isPlaying = true;
        soundToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
      }).catch(e => console.log(e));
    }
    // Remover este evento após o primeiro clique
    document.removeEventListener('click', startAudioOnFirstClick);
  }, { once: true });
  
  // Verifica se está em dispositivo móvel
  const isMobile = window.innerWidth <= 768;
  
  // Adiciona efeito de paralaxe no background
  if (!isMobile) {
    document.addEventListener('mousemove', function(e) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      document.querySelector('.darkgradient').style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
  
  // Implementa menu mobile
  const menuBtn = document.querySelector('.menubtn');
  if (menuBtn) {
    let menuOpen = false;
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.style.display = 'none';
    
    // Clona os links da navegação para o menu mobile
    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      const newLink = link.cloneNode(true);
      mobileMenu.appendChild(newLink);
    });
    
    document.body.appendChild(mobileMenu);
    
    menuBtn.addEventListener('click', function() {
      menuOpen = !menuOpen;
      mobileMenu.style.display = menuOpen ? 'flex' : 'none';
    });
  }
  
  // Adiciona efeito no botão de cadastro
  const signupBtn = document.querySelector('.signupbtn');
  if (signupBtn) {
    signupBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
    
    signupBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
    
    // Adicionar evento para iniciar música se ela ainda não estiver tocando
    signupBtn.addEventListener('click', function() {
      if (!isPlaying) {
        backgroundMusic.play().then(() => {
          isPlaying = true;
          soundToggle.innerHTML = '<i class="fa fa-volume-up"></i>';
        }).catch(error => {
          console.log('Reprodução bloqueada pelo navegador:', error);
        });
      }
      
      window.location.href = '/play';
    });
  }

  // Patch notes (exemplo, edite conforme necessário)
  const patchNotes = [
    { id: 'patch-1-0', title: 'Patch 1.0 - Lançamento', content: 'Primeira versão do jogo lançada com sistema de combate, progressão e mundo inicial.' },
    { id: 'patch-1-1', title: 'Patch 1.1 - Novos Recursos', content: 'Adicionados novos monstros, sistema de XP em dobro para eventos e melhorias na HUD.' },
    { id: 'patch-1-2', title: 'Patch 1.2 - Balanceamento', content: 'Balanceamento de dano PvP/PvE, ajuste de defesa e melhorias na IA dos monstros.' },
  ];

  // Cria a sidebar flutuante
  const patchSidebar = document.createElement('div');
  patchSidebar.className = 'patchnote-sidebar';
  patchSidebar.innerHTML = `
    <div class="patchnote-title">Patch Notes</div>
    <ul class="patchnote-list">
      ${patchNotes.map((p, i) => `<li data-patch="${p.id}" tabindex="0">${p.title}</li>`).join('')}
    </ul>
    <button class="patchnote-all-btn">Ver todos os patch notes</button>
  `;
  document.body.appendChild(patchSidebar);

  // Cria o modal (inicialmente oculto)
  const patchModalOverlay = document.createElement('div');
  patchModalOverlay.className = 'patchnote-modal-overlay';
  patchModalOverlay.style.display = 'none';
  const patchModal = document.createElement('div');
  patchModal.className = 'patchnote-modal';
  patchModalOverlay.appendChild(patchModal);
  document.body.appendChild(patchModalOverlay);

  function openPatchModal(selectedId = null) {
    patchModal.innerHTML = `
      <button class="patchnote-modal-close">&times;</button>
      <div class="patchnote-modal-content">
        ${patchNotes.map(p => `
          <div id="${p.id}" class="patchnote-block${selectedId === p.id ? ' selected' : ''}">
            <h3>${p.title}</h3>
            <p>${p.content}</p>
          </div>
        `).join('')}
      </div>
    `;
    patchModalOverlay.style.display = 'flex';
    // Scroll até o patch selecionado
    if (selectedId) {
      setTimeout(() => {
        const el = document.getElementById(selectedId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }

  // Fecha o modal
  patchModalOverlay.addEventListener('click', function(e) {
    if (e.target === patchModalOverlay || e.target.classList.contains('patchnote-modal-close')) {
      patchModalOverlay.style.display = 'none';
    }
  });

  // Clique nos itens da sidebar
  patchSidebar.querySelectorAll('.patchnote-list li').forEach(li => {
    li.addEventListener('click', function() {
      openPatchModal(this.getAttribute('data-patch'));
    });
  });

  // Clique no botão "Ver todos"
  patchSidebar.querySelector('.patchnote-all-btn').addEventListener('click', function() {
    openPatchModal();
  });
}); 