import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: '/src/main.ts',
      output: {
        dir: 'app/public/dist',
      },
    },
  },
  plugins: [vue()],
});
