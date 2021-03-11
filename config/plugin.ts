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
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;
