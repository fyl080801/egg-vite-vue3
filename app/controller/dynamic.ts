import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route('/api/dynamic')
export default class DynamicController extends Controller {
  @HttpGet('/page')
  public async getPage() {
    const { ctx, service } = this;

    const { path } = ctx.query;

    ctx.body = await service.dynamic.getPage(path);
  }
}
