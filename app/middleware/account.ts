import { Context } from 'egg';

export default () => async (ctx: Context, next) => {
  const token = ctx.cookies.get('token');

  if (!token) {
    ctx.throw(401);
  }

  try {
    const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
    console.log(decode);
  } catch (err) {
    ctx.throw(err);
  }

  await next();
};
