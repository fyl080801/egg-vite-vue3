import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.middleware = ['vite'];

  config.vite = { configFile: 'vite.config.ts' };

  return config;
};
