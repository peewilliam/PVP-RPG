// WorldMap.js
// Overlay de minimapa/mundimapa para MMORPG topdown isométrico
// Renderiza biomas, vilas, bosses, grind spots, trilhas e posição do jogador

class WorldMap {
  constructor({ areas = [], villages = [], bosses = [], spots = [], roads = [], playerPosition = { x: 0, z: 0 }, onClose = null }) {
    this.areas = areas;
    this.villages = villages;
    this.bosses = bosses;
    this.spots = spots;
    this.roads = roads;
    this.playerPosition = playerPosition;
    this.onClose = onClose;
    this.visible = false;
    this._createCanvas();
    this._bindEvents();
  }

  _createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'world-map-overlay';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '1000';
    this.canvas.style.display = 'none';
    this.canvas.style.background = 'rgba(30, 30, 30, 0.7)';
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this._resize();
    window.addEventListener('resize', () => this._resize());
  }

  _resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.visible) this.render();
  }

  _bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (!this.visible) return;
      if (e.key === 'Escape') {
        this.hide();
        if (this.onClose) this.onClose();
      }
    });
  }

  setPlayerPosition(pos) {
    this.playerPosition = pos;
    if (this.visible) this.render();
  }

  setAreas(areas) { this.areas = areas; }
  setVillages(villages) { this.villages = villages; }
  setBosses(bosses) { this.bosses = bosses; }
  setSpots(spots) { this.spots = spots; }
  setRoads(roads) { this.roads = roads; }

  show() {
    this.visible = true;
    this.canvas.style.display = 'block';
    this.render();
  }

  hide() {
    this.visible = false;
    this.canvas.style.display = 'none';
  }

  toggle() {
    if (this.visible) this.hide();
    else this.show();
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Centralizar e escalar o mapa
    const mapW = 600, mapH = 600;
    const offsetX = (this.canvas.width - mapW) / 2;
    const offsetY = (this.canvas.height - mapH) / 2;
    // Mundo: 200x200 unidades (x: -100~100, z: -100~100)
    const worldMinX = -100, worldMaxX = 100, worldMinZ = -100, worldMaxZ = 100;
    const scaleX = mapW / (worldMaxX - worldMinX);
    const scaleY = mapH / (worldMaxZ - worldMinZ);
    // Fundo
    ctx.save();
    ctx.globalAlpha = 0.92;
    ctx.fillStyle = '#222';
    ctx.fillRect(offsetX, offsetY, mapW, mapH);
    ctx.restore();
    // Áreas/biomas
    for (const area of this.areas) {
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = area.groundColor || '#fff';
      const x = offsetX + (area.bounds.xMin - worldMinX) * scaleX;
      const y = offsetY + (area.bounds.zMin - worldMinZ) * scaleY;
      const w = (area.bounds.xMax - area.bounds.xMin) * scaleX;
      const h = (area.bounds.zMax - area.bounds.zMin) * scaleY;
      ctx.fillRect(x, y, w, h);
      ctx.restore();
      // Nome do bioma
      ctx.save();
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.7;
      ctx.fillText(area.name, x + 8, y + 24);
      ctx.restore();
    }
    // Estradas/trilhas
    for (const road of this.roads) {
      ctx.save();
      ctx.strokeStyle = road.color || '#bfa76a';
      ctx.lineWidth = 4;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(offsetX + (road.from.x - worldMinX) * scaleX, offsetY + (road.from.z - worldMinZ) * scaleY);
      ctx.lineTo(offsetX + (road.to.x - worldMinX) * scaleX, offsetY + (road.to.z - worldMinZ) * scaleY);
      ctx.stroke();
      ctx.restore();
    }
    // Vilas
    for (const v of this.villages) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(offsetX + (v.x - worldMinX) * scaleX, offsetY + (v.z - worldMinZ) * scaleY, 14, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffe082';
      ctx.globalAlpha = 0.95;
      ctx.fill();
      ctx.strokeStyle = '#bfa76a';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.font = 'bold 15px Arial';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.9;
      ctx.fillText(v.name, offsetX + (v.x - worldMinX) * scaleX + 18, offsetY + (v.z - worldMinZ) * scaleY + 6);
      ctx.restore();
    }
    // Bosses
    for (const b of this.bosses) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(offsetX + (b.x - worldMinX) * scaleX, offsetY + (b.z - worldMinZ) * scaleY, 12, 0, 2 * Math.PI);
      ctx.fillStyle = '#ff5252';
      ctx.globalAlpha = 0.95;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.font = 'bold 15px Arial';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.9;
      ctx.fillText(b.name, offsetX + (b.x - worldMinX) * scaleX + 16, offsetY + (b.z - worldMinZ) * scaleY + 6);
      ctx.restore();
    }
    // Grind spots
    for (const s of this.spots) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(offsetX + (s.x - worldMinX) * scaleX, offsetY + (s.z - worldMinZ) * scaleY, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#4fc3f7';
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.font = 'bold 13px Arial';
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.8;
      ctx.fillText(s.name || s.id, offsetX + (s.x - worldMinX) * scaleX + 10, offsetY + (s.z - worldMinZ) * scaleY + 4);
      ctx.restore();
    }
    // Posição do jogador
    ctx.save();
    ctx.beginPath();
    ctx.arc(offsetX + (this.playerPosition.x - worldMinX) * scaleX, offsetY + (this.playerPosition.z - worldMinZ) * scaleY, 7, 0, 2 * Math.PI);
    ctx.fillStyle = '#00e676';
    ctx.globalAlpha = 1.0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    // Título
    ctx.save();
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.95;
    ctx.fillText('Mapa-Múndi', offsetX + 16, offsetY + 44);
    ctx.restore();
  }
}

export default WorldMap; 