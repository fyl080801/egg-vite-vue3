// import {} from 'egg';

import { EggMiddlewareFactory } from 'egg';
import { createServer, ViteDevServer } from 'vite';
import { resolve } from 'path';

export let server: ViteDevServer;

const middleware: EggMiddlewareFactory = (options: any) => {
  return async (_ctx, next) => {
    if (!server) {
      const configFile = options?.configFile || 'vite.config.ts';
      const config = await import(resolve(process.cwd(), configFile));

      server = await createServer({
        ...config.default,
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
