import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { svgBuilder } from './build/svgBuilder';

export default defineConfig({
  build: {
    manifest: true,
  },
  // resolve: {
  //   alias: {
  //     '@src/': resolve(__dirname, 'src'),
  //   },
  // },
  server: {},
  plugins: [
    vue(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    svgBuilder('./src/icons/svg/'),
  ],
});
