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
};

export default plugin;
