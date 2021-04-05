import { Controller } from 'egg';
import { Route, HttpGet, HttpPost, Middleware } from 'egg-decorator-router';
import passport from '../middleware/passport';

@Route()
export default class HomeController extends Controller {
  @HttpGet('/')
  @HttpGet('*')
  @Middleware(passport({ redirectUrl: '/login' }))
  public async index() {
    const { ctx } = this;
    // console.log(ctx.isAuthenticated());
    const renderData: any = {
      serverText: 'title text'
    };

    await ctx.vite.render('index.html', renderData);
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
