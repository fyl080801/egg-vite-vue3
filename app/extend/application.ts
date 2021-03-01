import { ViteDevServer } from 'vite';

let _viteServer: ViteDevServer;

export default {
  get viteServer() {
    return _viteServer;
  },
  set viteServer(value) {
    _viteServer = value;
  },
};
