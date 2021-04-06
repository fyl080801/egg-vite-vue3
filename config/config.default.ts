import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import { EggSequelizeOptions } from 'egg-sequelize';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614221169780_4319';

  // add your egg config in here
  config.middleware = ['account'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  config.development = {
    ignoreDirs: ['config/apps']
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    root: path.join(appInfo.baseDir, 'dist'),
    mapping: {
      '.html': 'nunjucks'
    }
  };

  config.static = {
    prefix: '/assets/',
    dir: [
      path.join(appInfo.baseDir, 'app/public'),
      path.join(appInfo.baseDir, 'dist/assets')
    ]
  };

  config.security = {
    csrf: { enable: false },
    domainWhiteList: []
  };

  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   password: '!QAZ2wsx',
  //   database: 'v3db',
  // } as EggSequelizeOptions;

  config.jwt = {
    secret: '18611443321'
  };

  // app
  config.appProvider = 'local';
  config.appName = 'devapp';

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
