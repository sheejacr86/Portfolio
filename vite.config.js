import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Mini API plugin to handle /api/enquiries POST submissions seamlessly
function apiMockPlugin() {
  return {
    name: 'api-mock-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/enquiries' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              console.log('Received enquiry:', data);
            } catch (e) {}
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ status: 'ok', message: 'Enquiry received — Sagar will get back to you.' }));
          });
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/enquiries' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ status: 'ok', message: 'Enquiry received — Sagar will get back to you.' }));
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), apiMockPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env.REACT_APP_BACKEND_URL': JSON.stringify(''),
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
    host: '127.0.0.1',
  },
});
