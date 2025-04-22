/**
 * Configurações padrão para o projeto
 */
export const config = {
  server: {
    port: 3000,
  },
  game: {
    tickRate: 20, // 20 ticks por segundo (50ms por tick)
    debug: {
      collisions: false,
      ai: false
    }
  }
}; 