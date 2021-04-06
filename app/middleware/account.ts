import { Context } from 'egg';

export default (options?) => {
  const { tokenName = 'token' } = options || {};

  return async (ctx: Context, next) => {
    if (ctx.isAuthenticated()) {
      ctx.cookies.set(
        tokenName,
        ctx.app.jwt.sign(ctx.user, ctx.app.config.jwt.secret),
        { httpOnly: false }
      );
    }
    await next();
  };
};
