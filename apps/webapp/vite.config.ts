import { defineConfig } from 'vite';
import { designSystem } from '@lucabonaldo/design/vite';

export default defineConfig({
  base: './',
  plugins: [designSystem()],
  build: { outDir: 'dist', emptyOutDir: true },
});
