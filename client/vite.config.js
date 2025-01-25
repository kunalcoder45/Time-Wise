import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:8080', // Your backend server URL
        changeOrigin: true,
        secure: false, // Use false for self-signed certificates
      },
    },
  },
});
