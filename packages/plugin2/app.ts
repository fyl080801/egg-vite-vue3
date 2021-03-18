import { Application } from 'egg';

export default (app: Application) => {
  app.router.get('/plugin2/xxx', (ctx) => {
    ctx.body = 'p2';
  });
};
