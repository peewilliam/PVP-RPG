// Funções utilitárias
function formatDateTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString('pt-BR', { hour12: false });
}

function getUnique(arr, key) {
  return [...new Set(arr.map(x => x[key]).filter(Boolean))];
}

// Elementos
const filtroData = document.getElementById('filtro-data');
const filtroEvento = document.getElementById('filtro-evento');
const filtroPlayer = document.getElementById('filtro-player');
const btnAtualizar = document.getElementById('btn-atualizar');
const tbodyLogs = document.getElementById('tbody-logs');
const metricasDiv = document.getElementById('metricas');
const filtroTipoContainer = document.getElementById('filtro-tipo-container');
let graficoTrafego, graficoSerializacao;

// Criar filtroTipo dinamicamente
let filtroTipo = document.getElementById('filtro-tipo');
if (!filtroTipo) {
  filtroTipo = document.createElement('select');
  filtroTipo.id = 'filtro-tipo';
  filtroTipo.innerHTML = '<option value="">Todos os Tipos</option>';
  filtroTipoContainer.appendChild(filtroTipo);
}

// Estado
let logs = [];
let logsFiltrados = [];
let paginaAtual = 1;
const eventosPorPagina = 100;

// Loading visual
function showLoading(msg = 'Carregando...') {
  tbodyLogs.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#ffd700;font-size:1.2rem;">${msg}</td></tr>`;
}

// Carrega logs da API
async function carregarLogs() {
  showLoading();
  let url = '/audit/logs';
  if (filtroData.value) {
    url += '?date=' + filtroData.value;
  }
  const resp = await fetch(url);
  if (!resp.ok) {
    tbodyLogs.innerHTML = '<tr><td colspan="7">Nenhum dado encontrado para a data.</td></tr>';
    logs = [];
    atualizarFiltros();
    atualizarMetricas();
    atualizarGraficos();
    return;
  }
  logs = await resp.json();
  paginaAtual = 1;
  aplicarFiltros();
}

// Aplica filtros
function aplicarFiltros() {
  showLoading('Filtrando...');
  setTimeout(() => {
    logsFiltrados = logs.filter(l => {
      if (filtroEvento.value && l.event !== filtroEvento.value) return false;
      if (filtroPlayer.value && String(l.playerId) !== filtroPlayer.value) return false;
      if (filtroTipo.value && l.eventType !== filtroTipo.value) return false;
      return true;
    });
    paginaAtual = 1;
    atualizarTabela();
    atualizarMetricas();
    atualizarGraficos();
    atualizarFiltros();
  }, 10);
}

// Paginação
function getPaginaAtual() {
  const start = (paginaAtual - 1) * eventosPorPagina;
  return logsFiltrados.slice(start, start + eventosPorPagina);
}

function atualizarTabela() {
  const pagina = getPaginaAtual();
  if (!pagina.length) {
    tbodyLogs.innerHTML = '<tr><td colspan="7">Nenhum evento encontrado.</td></tr>';
    atualizarPaginacao();
    return;
  }
  tbodyLogs.innerHTML = pagina.map(l => `
    <tr>
      <td>${formatDateTime(l.timestamp)}</td>
      <td>${l.event}</td>
      <td>${l.eventType || '-'}</td>
      <td>${l.playerId || '-'}</td>
      <td>${l.entitiesSent !== undefined ? l.entitiesSent : '-'}</td>
      <td>${l.payloadSize || '-'}</td>
      <td>${l.serializationTimeMs !== undefined ? l.serializationTimeMs : '-'}</td>
    </tr>
  `).join('');
  atualizarPaginacao();
}

function atualizarPaginacao() {
  let paginacao = document.getElementById('paginacao-logs');
  if (!paginacao) {
    paginacao = document.createElement('div');
    paginacao.id = 'paginacao-logs';
    paginacao.style = 'margin: 0.7rem 0; text-align: center;';
    tbodyLogs.parentElement.appendChild(paginacao);
  }
  const totalPaginas = Math.ceil(logsFiltrados.length / eventosPorPagina) || 1;
  let html = '';
  if (totalPaginas > 1) {
    html += `<button ${paginaAtual === 1 ? 'disabled' : ''} onclick="window.irParaPagina(1)">«</button> `;
    html += `<button ${paginaAtual === 1 ? 'disabled' : ''} onclick="window.irParaPagina(${paginaAtual - 1})">‹</button> `;
    html += `<span style="color:#ffd700;font-weight:bold;">Página ${paginaAtual} de ${totalPaginas}</span> `;
    html += `<button ${paginaAtual === totalPaginas ? 'disabled' : ''} onclick="window.irParaPagina(${paginaAtual + 1})">›</button> `;
    html += `<button ${paginaAtual === totalPaginas ? 'disabled' : ''} onclick="window.irParaPagina(${totalPaginas})">»</button>`;
  }
  paginacao.innerHTML = html;
}
window.irParaPagina = function(p) {
  paginaAtual = p;
  atualizarTabela();
};

function atualizarFiltros() {
  // Tipos de evento
  const eventos = getUnique(logs, 'event');
  filtroEvento.innerHTML = '<option value="">Todos</option>' + eventos.map(ev => `<option value="${ev}">${ev}</option>`).join('');
  // Tipos de eventType (agora padronizados)
  const tipos = getUnique(logs, 'eventType');
  const tiposPadronizados = ['BINARY', 'JSON', 'CHAT', 'CUSTOM', 'SYSTEM'];
  // Garante que todos os tipos padronizados apareçam no filtro, mesmo que não haja log deles ainda
  const tiposCompletos = Array.from(new Set([...tipos, ...tiposPadronizados]));
  filtroTipo.innerHTML = '<option value="">Todos os Tipos</option>' + tiposCompletos.map(tp => `<option value="${tp}">${tp}</option>`).join('');
}

function atualizarMetricas() {
  if (!logsFiltrados.length) {
    metricasDiv.innerHTML = '<div>Nenhum dado.</div>';
    return;
  }
  const total = logsFiltrados.length;
  const totalBytes = logsFiltrados.reduce((a, l) => a + (l.payloadSize || 0), 0);
  const totalEntidades = logsFiltrados.reduce((a, l) => a + (l.entitiesSent || 0), 0);
  const avgBytes = (totalBytes / total).toFixed(1);
  const avgEntidades = (totalEntidades / total).toFixed(1);
  const avgSerial = (logsFiltrados.reduce((a, l) => a + (l.serializationTimeMs || 0), 0) / total).toFixed(2);
  const maxBytes = Math.max(...logsFiltrados.map(l => l.payloadSize || 0));
  const maxEntidades = Math.max(...logsFiltrados.map(l => l.entitiesSent || 0));
  const maxSerial = Math.max(...logsFiltrados.map(l => l.serializationTimeMs || 0));
  metricasDiv.innerHTML = `
    <div><strong>${total}</strong> eventos</div>
    <div><strong>${(totalBytes/1024).toFixed(1)} KB</strong> total</div>
    <div><strong>${avgBytes}</strong> bytes/evento (média)</div>
    <div><strong>${avgEntidades}</strong> entidades/evento (média)</div>
    <div><strong>${avgSerial}</strong> ms serialização (média)</div>
    <div><strong>${maxBytes}</strong> bytes (maior pacote)</div>
    <div><strong>${maxEntidades}</strong> entidades (maior envio)</div>
    <div><strong>${maxSerial}</strong> ms (maior serialização)</div>
  `;
}

function atualizarGraficos() {
  // Limitar aos últimos 500 eventos
  const maxPontos = 500;
  const logsParaGrafico = logsFiltrados.length > maxPontos ? logsFiltrados.slice(-maxPontos) : logsFiltrados;
  const ctxTrafego = document.getElementById('grafico-trafego').getContext('2d');
  const ctxSerial = document.getElementById('grafico-serializacao').getContext('2d');
  const labels = logsParaGrafico.map(l => formatDateTime(l.timestamp));
  const dataBytes = logsParaGrafico.map(l => l.payloadSize || 0);
  const dataEntidades = logsParaGrafico.map(l => l.entitiesSent || 0);
  const dataSerial = logsParaGrafico.map(l => l.serializationTimeMs || 0);
  // Trafego
  if (graficoTrafego) graficoTrafego.destroy();
  graficoTrafego = new Chart(ctxTrafego, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Tamanho do Pacote (bytes)',
          data: dataBytes,
          borderColor: '#ffd700',
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
          tension: 0.2,
          pointRadius: 1.5,
        },
        {
          label: 'Entidades Enviadas',
          data: dataEntidades,
          borderColor: '#00e0ff',
          backgroundColor: 'rgba(0,224,255,0.08)',
          tension: 0.2,
          pointRadius: 1.5,
          yAxisID: 'y1',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#ffd700' } }
      },
      scales: {
        x: { ticks: { color: '#f3f3f3' } },
        y: { title: { display: true, text: 'Bytes', color: '#ffd700' }, ticks: { color: '#ffd700' } },
        y1: { position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Entidades', color: '#00e0ff' }, ticks: { color: '#00e0ff' } }
      }
    }
  });
  // Serialização
  if (graficoSerializacao) graficoSerializacao.destroy();
  graficoSerializacao = new Chart(ctxSerial, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Tempo de Serialização (ms)',
          data: dataSerial,
          borderColor: '#ff5e5e',
          backgroundColor: 'rgba(255,94,94,0.08)',
          tension: 0.2,
          pointRadius: 1.5,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#ff5e5e' } }
      },
      scales: {
        x: { ticks: { color: '#f3f3f3' } },
        y: { title: { display: true, text: 'ms', color: '#ff5e5e' }, ticks: { color: '#ff5e5e' } }
      }
    }
  });
}

// Eventos
btnAtualizar.addEventListener('click', carregarLogs);
filtroEvento.addEventListener('change', aplicarFiltros);
filtroPlayer.addEventListener('input', aplicarFiltros);
filtroData.addEventListener('change', carregarLogs);
filtroTipo.addEventListener('change', aplicarFiltros);

// Inicialização: define data padrão e carrega logs
window.addEventListener('DOMContentLoaded', () => {
  const hoje = new Date().toISOString().slice(0, 10);
  filtroData.value = hoje;
  carregarLogs();
}); 