import { Context } from 'egg';

export default (options?) => {
  const { redirectUrl } = options || {};

  return async (ctx: Context, next) => {
    if (redirectUrl && ctx.path === redirectUrl) {
      await next();
      return;
    }

    if (!ctx.isAuthenticated()) {
      if (redirectUrl) {
        ctx.redirect(`${redirectUrl}?returnUrl=${ctx.url}`);
      } else {
        ctx.throw(401);
      }
      return;
    }
    await next();
  };
};
