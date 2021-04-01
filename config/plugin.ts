import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  vitePlugin: {
    enable: true,
    package: 'egg-vite-plugin'
  },
  decoratorRouter: {
    enable: true,
    package: 'egg-decorator-router'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // sequelize: {
  //   enable: false,
  //   package: 'egg-sequelize',
  // },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  typeorm: {
    enable: true,
    package: '@forsigner/egg-typeorm'
  }

  // plugin1: {
  //   enable: true,
  //   package: 'plugin1',
  // },
  // plugin2: {
  //   enable: true,
  //   package: 'plugin2',
  // },
};

export default plugin;
