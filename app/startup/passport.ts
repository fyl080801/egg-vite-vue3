import { Application, Context } from 'egg';
import { Strategy } from 'passport-local';

export default async (app: Application) => {
  app.passport.use(
    new Strategy(
      {
        passReqToCallback: true
      },
      (req, username, password, done) => {
        // format user
        const user = {
          provider: 'local',
          username,
          password
        };
        // debug('%s %s get user: %j', req.method, req.url, user);
        app.passport.doVerify(req as any, user, done);
      }
    )
  );

  app.passport.verify(async (ctx: Context, user) => {
    const result = await ctx.repo.User.findOne({
      where: { name: user.username }
    });

    if (result) {
      return result;
    }

    return false;
  });

  app.router.post('/api/account/login', app.passport.authenticate('local', {}));

  // app.passport.serializeUser(async (ctx, user) => {});
  // app.passport.deserializeUser(async (ctx, user) => {});
};
