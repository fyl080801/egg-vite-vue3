import { Context } from 'egg';
import { ViteDevServer } from 'vite';
import * as cheerio from 'cheerio';
import * as path from 'path';

const VITE = Symbol('Context#vite');

class ViteContext {
  private viteServer: ViteDevServer;

  constructor(private ctx: Context) {
    this.viteServer = this.ctx.app.viteServer;
  }

  public async render(name, data?) {
    if (this.viteServer) {
      const address = this.getServerAddress();
      const result = await this.ctx.curl(
        `${this.ctx.protocol}://${address}/${name}`
      );
      const html = result.data.toString();

      const $ = cheerio.load(html, {});

      $('script').each((_idx, elm) => {
        const child = $(elm);
        const src = child.attr('src');
        if (src && !src?.startsWith('http:') && !src?.startsWith('https:')) {
          // console.log(`${this.ctx.protocol}://${path.join(address, src)}`);
          child.attr('src', `//${path.join(address, src)}`);
        }
      });

      this.ctx.body = await this.ctx.renderString($.html({}), data);
    } else {
      await this.ctx.render(name, data);
    }
  }

  private getServerAddress() {
    const address = this.viteServer.httpServer?.address();
    if (typeof address === 'string') {
      return address;
    }

    return `${address?.address === '::' ? 'localhost' : address?.address}:${
      address?.port
    }`;
  }
}

export default {
  get vite(): ViteContext {
    if (this[VITE]) {
      return this[VITE];
    }

    this[VITE] = new ViteContext(this as Context);

    return this[VITE];
  },
};
