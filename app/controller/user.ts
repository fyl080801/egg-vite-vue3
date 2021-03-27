import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route('/api')
export default class UserController extends Controller {
  @HttpGet('/user')
  public async findAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.findAll();
  }
}
