import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import legacy from '@vitejs/plugin-legacy';
import { svgBuilder } from './build/svgBuilder';

export default defineConfig({
  build: {
    manifest: true,
  },
  root: process.cwd(),
  resolve: {
    alias: [{ find: '@/', replacement: path.resolve(__dirname, '/src') + '/' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, './src')}/styles/_variables.scss";
          @import "${path.resolve(__dirname, './src')}/styles/_mixins.scss";
        `,
      },
    },
  },
  plugins: [
    vue(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    svgBuilder('./src/icons/svg/'),
  ],
});
