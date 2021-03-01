import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] })],
});
