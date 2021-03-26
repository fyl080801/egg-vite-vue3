import { Context } from 'egg';

export default () => async (ctx: Context, next: any) => {
  await next();
};
