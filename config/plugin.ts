import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  '@egglib/statics': {
    enable: true,
    package: '@egglib/statics-vite',
  },
  decoratorRouter: {
    enable: true,
    package: 'egg-decorator-router',
  },
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  // plugin1: {
  //   enable: true,
  //   package: 'plugin1',
  // },
  // plugin2: {
  //   enable: true,
  //   package: 'plugin2',
  // },
  'view-plugin': {
    enable: true,
  },
};

export default plugin;
