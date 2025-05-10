import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});