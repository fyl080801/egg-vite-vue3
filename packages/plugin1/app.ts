import { Application } from 'egg';

export default (app: Application) => {
  app.router.get('/plugin1/xxx', async (ctx) => {
    ctx.body = await ctx.service.pluginTest.pluginSayHi('aaaa');
  });
};
