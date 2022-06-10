import { EggAppConfig, PowerPartial } from 'egg';
import { EggAppInfo } from 'egg-core';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.statics = {
    default: appInfo.name,
    clients: {
      [appInfo.name]: {
        dev: true,
        configFile: 'vite.config.ts',
      },
      'view-plugin': {
        dev: true,
        configFile: 'vite.config.ts',
      },
    },
  };

  return config;
};
