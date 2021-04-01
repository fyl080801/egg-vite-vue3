import { Context } from 'egg';

export default (options?) => {
  const { redirectUrl } = options || {};

  return async (ctx: Context, next) => {
    console.log(ctx.path);
    if (redirectUrl && ctx.path === redirectUrl) {
      await next();
      return;
    }

    const token = ctx.cookies.get('token');

    if (!token) {
      if (redirectUrl) {
        ctx.redirect(redirectUrl);
      } else {
        ctx.throw(401);
      }
      return;
    }

    try {
      const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      console.log(decode);
    } catch (err) {
      ctx.throw(err);
    }

    await next();
  };
};
