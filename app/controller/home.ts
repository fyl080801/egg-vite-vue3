import { Controller } from 'egg';
import { Route, HttpGet, Middleware } from 'egg-decorator-router';
import passport from '../middleware/passport';

@Route()
export default class HomeController extends Controller {
  @HttpGet('/')
  @HttpGet('*')
  @Middleware(passport({ redirectUrl: '/login' }))
  public async index() {
    const { ctx } = this;

    const appConfig = {
      ...(await this.service.apps[this.ctx.app.config.appProvider].load(
        this.ctx.app.config.appName
      )),
      env: this.config.env
    };

    // 还要根据当前角色过滤菜单
    const renderData: any = {
      title: appConfig.name,
      appConfig: JSON.stringify(ctx.isAuthenticated() ? appConfig : {})
    };

    await ctx.vite.render('index.html', renderData);
  }
}
