import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  vitePlugin: {
    enable: true,
    package: 'egg-vite-plugin',
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
};

export default plugin;
