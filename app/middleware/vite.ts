import { Context } from 'egg';
import { createServer } from 'vite';

const middleware = () => {
  return async (ctx: Context, next) => {
    const { app }: any = ctx;

    if (!app.viteServer) {
      app.viteServer = await (await createServer({})).listen();
    }

    await next();
  };
};

export default middleware;
