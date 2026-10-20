import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

//! Налаштування Vite
export default defineConfig({
  plugins: [react()],

  //! Ім'я репозиторію для GitHub Pages
  base: '/airplane-model-store2-stylization3/',

  //! Налаштування аліасів для абсолютних шляхів імпортів
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
