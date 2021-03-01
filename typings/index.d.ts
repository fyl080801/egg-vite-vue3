import 'egg';
import { Application } from 'egg';
// import { Middleware } from 'koa';

interface Kv {
  [key: any]: any;
}

declare module 'egg' {
  // interface EggMiddlewareFactory {
  //   (options?: any): Middleware;
  // }
  interface Helper extends Kv {
    ctx: Context;
    app: Application;
  }
}
