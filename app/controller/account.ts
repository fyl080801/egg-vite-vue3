import { Controller } from 'egg';
import { Route, HttpPost } from 'egg-decorator-router';

@Route('/api/account')
export default class AccountController extends Controller {
  @HttpPost('/valid')
  public async valid() {
    const { ctx } = this;

    const { username, password } = ctx.request.body;
    const user = await ctx.repo.User.findOne({ where: { name: username } });

    if (!user) {
      ctx.body = { success: false, message: '用户不存在' };
      return;
    }

    if (user?.password === password) {
      const token = ctx.app.jwt.sign({ username }, ctx.app.config.jwt.secret);
      ctx.cookies.set('token', token, { httpOnly: false });
      ctx.body = { success: true };
    } else {
      ctx.body = { success: false, message: '密码错误' };
    }
  }
}
