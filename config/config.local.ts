import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vitePlugin = {
    devServer: true,
  };

  return config;
};
