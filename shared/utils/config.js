// Configurações carregadas de variáveis de ambiente ou valores padrão

// Detecta se estamos no ambiente de cliente (navegador) ou servidor (Node.js)
const isBrowser = typeof window !== 'undefined';

// Configurações para servidor/cliente
export const config = {
  server: {
    // No cliente, tenta usar variáveis de ambiente do Vite, senão usa valores padrão
    port: isBrowser 
      ? (import.meta.env?.VITE_SERVER_PORT || 3000) 
      : (process.env.SERVER_PORT || 3000),
    url: isBrowser
      ? (import.meta.env?.VITE_SERVER_URL || 'http://localhost')
      : (process.env.SERVER_URL || 'http://localhost')
  },
  game: {
    tickRate: 50 // 20 ticks por segundo
  }
}; 