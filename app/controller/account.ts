import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route('/api/account')
export default class AccountController extends Controller {
  @HttpGet('/logout')
  public async logout() {
    const { ctx } = this;
    const { returnUrl } = ctx.query;

    ctx.logout();

    ctx.redirect(returnUrl);
  }
}
