import { Controller } from 'egg';
import { Route, HttpGet, HttpPost } from 'egg-decorator-router';

@Route()
export default class HomeController extends Controller {
  @HttpGet('/')
  public async index() {
    const { ctx } = this;
    const renderData: any = {};

    // if (config.env !== 'local') {
    //   const manifestRequest = await ctx.curl(
    //     `${ctx.URL.hostname}:${ctx.URL.port}/public/manifest.json`
    //   );

    //   if (manifestRequest.status !== 200) {
    //     ctx.throw('load manifest faild');
    //     return;
    //   }

    //   const manifest = JSON.parse(manifestRequest.data.toString());

    //   const entryList = Object.keys(manifest)
    //     .filter((key) => manifest[key].isEntry)
    //     .map((key) => manifest[key]);

    //   renderData.manifest = entryList.map((e) => ({
    //     src: `public/${e.file}`,
    //     css: `public/${e.css}`,
    //   }));
    // } else {
    //   const addressInfo: any = ctx.app.viteServer?.httpServer?.address();

    // await ctx.render('index.html', renderData);

    await ctx.vite.render('index.html', renderData);

    // const result = await ctx.curl('http://localhost:3000/index.html', {
    //   method: 'GET',
    //   // contentType: 'text/html',
    // });

    // ctx.body = await ctx.renderString(result.data.toString(), renderData);
  }

  @HttpGet('/api')
  public api() {
    const { ctx } = this;

    ctx.body = 'api';
  }

  @HttpPost('/api')
  public apiPost() {
    const { ctx } = this;

    ctx.body = ctx.request.body;
  }
}
