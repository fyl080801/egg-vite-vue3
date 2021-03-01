import { ViteDevServer } from 'vite';

const SERVER = Symbol('application#vite-server');

export default {
  get viteServer(): ViteDevServer {
    return this[SERVER];
  },
  set viteServer(value: ViteDevServer) {
    this[SERVER] = value;
  },
};
