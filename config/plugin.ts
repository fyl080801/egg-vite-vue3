import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  decoratorRouter: {
    enable: true,
    package: 'egg-decorator-router',
  },
};

export default plugin;
