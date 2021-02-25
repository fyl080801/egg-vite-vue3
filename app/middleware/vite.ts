// import {} from 'egg';

import { EggMiddlewareFactory } from 'egg';
import { UserConfig, createServer, ViteDevServer } from 'vite';

export let server: ViteDevServer;

const middleware: EggMiddlewareFactory = (options: UserConfig) => {
  return async (_ctx, next) => {
    if (!server) {
      server = await createServer({
        ...options,
        configFile: false,
        root: process.cwd(),
        //   server: { port: options.server?.port || 8088 },
      });

      await server.listen();

      _ctx.app.on('beforeClose', () => {
        server?.close();
      });
    }
    await next();
  };
};

export default middleware;
