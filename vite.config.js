import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  root: '.',
  base: '/',
  plugins: [
    {
      name: 'custom-play-middleware',
      configureServer(server) {
        // 1. Redireciona /src/* para /client/src/*
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/src/')) {
            req.url = '/client' + req.url;
          }
          if (req.url.startsWith('/assets/')) {
            req.url = '/home' + req.url;
          }
          next();
        });
        // 2. Serve client/index.html em /play
        server.middlewares.use((req, res, next) => {
          if (req.url === '/play' || req.url === '/play/') {
            console.log('Interceptando /play');
            const filePath = resolve(__dirname, 'client/index.html');
            fs.readFile(filePath, (err, data) => {
              if (err) {
                res.statusCode = 404;
                res.end('Not found');
              } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    port: 5173,
    open: false,
    cors: true,
    hmr: true,
    proxy: {
      '/.wrtc': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        play: resolve(__dirname, 'client/index.html'),
      },
    },
  },
});