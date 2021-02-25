import { Controller } from 'egg';
import { Route, HttpGet } from 'egg-decorator-router';
import { server } from '../middleware/vite';

@Route()
export default class HomeController extends Controller {
  @HttpGet('/')
  public async index() {
    const renderData: any = {};

    if (this.config.env === 'local') {
      const addressInfo: any = server?.httpServer?.address();

      renderData.server = `${this.ctx.protocol}://${
        addressInfo?.address === '::' ? 'localhost' : addressInfo?.address
      }:${addressInfo?.port}`;
    }

    await this.ctx.render('index.html', renderData);
  }

  @HttpGet('/api')
  public api() {
    const { ctx } = this;

    ctx.body = 'api';
  }
}

// new Controller()
