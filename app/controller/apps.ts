import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route('/api/apps')
export default class DynamicController extends Controller {
  @HttpGet('/page')
  public async getPage() {
    const { ctx, service } = this;
    const { path } = ctx.query;

    const pageConfig = await service.apps[ctx.app.config.appProvider].getPage(
      ctx.app.config.appName,
      path
    );

    // 页面加引用组件以及外部js
    ctx.body = pageConfig;
  }
}
