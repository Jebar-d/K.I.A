import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        khyle: resolve(__dirname, 'khyle.html'),
        arcalas: resolve(__dirname, 'arcalas.html'),
        diego: resolve(__dirname, 'diego.html'),
      
      }
    }
  }
});