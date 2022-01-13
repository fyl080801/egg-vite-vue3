import { Controller } from 'egg';
import { Route, HttpGet, HttpPost } from 'egg-decorator-router';

@Route()
export default class HomeController extends Controller {
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
