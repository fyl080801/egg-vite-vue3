import { EggAppConfig, PowerPartial } from 'egg';

export default (appInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.statics = {
    default: appInfo.name,
    clients: {
      [appInfo.name]: {
        type: 'dev',
        configFile: 'vite.config.ts',
      },
      'view-plugin': {
        type: 'dev',
        configFile: 'vite.config.ts',
      },
    },
  };

  return config;
};
