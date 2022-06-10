import { Application } from 'egg';

import { name } from './package.json';

export default (app: Application & Record<string, any>) => {
  app.addPageConfig(name);

  app.router.get('/viewplugin', app.viewInject(name, 'index.html'), (ctx) => {
    ctx.body = {};
  });
};
