import { EggAppConfig, PowerPartial } from 'egg';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.middleware = ['vite'];

  config.vite = defineConfig({
    build: {
      manifest: true,
      rollupOptions: {
        input: '/client/main.ts',
      },
    },
    plugins: [vue()],
  });

  return config;
};
