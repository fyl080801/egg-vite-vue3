import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';

@Route('/api/dynamic')
export default class DynamicController extends Controller {
  @HttpGet('/page/:id')
  public async getPage() {
    const { ctx, service } = this;

    const { id } = ctx.params;

    ctx.body = await service.dynamic.getPage(id);
  }
}
