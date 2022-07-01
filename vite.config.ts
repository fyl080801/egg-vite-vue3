import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { name } from './package.json';

export default defineConfig({
  base: `/${name}/`,
  build: {
    manifest: true,
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] })],
});
