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
      
      alert('Sistema de cadastro em desenvolvimento!');
    });
  }
}); 