import 'egg';
import { Middleware } from 'koa';

declare module 'egg' {
  interface EggMiddlewareFactory {
    (options?: any): Middleware;
  }
}
