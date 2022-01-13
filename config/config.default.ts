import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { EggSequelizeOptions } from 'egg-sequelize';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614221169780_4319';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.security = {
    csrf: { enable: false },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '!QAZ2wsx',
    database: 'v3db',
  } as EggSequelizeOptions;

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
