import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'client',
  publicDir: 'assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 8080,
    open: true,
    cors: true,
    hmr: true,
    proxy: {
      '/.wrtc': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Erro de proxy:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Requisição proxy:', req.method, req.url);
          });
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src')
    }
  }
}); 