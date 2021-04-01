import { Application } from 'egg';
import passwort from './app/startup/passport';

// import plugin1 from 'plugin1';
// import { Sequelize, STRING, INTEGER } from 'sequelize';

// const startup = async app => {
//   // app.passport.serializeUser(async (ctx, user) => {});
//   // app.passport.deserializeUser(async (ctx, user) => {});
//   // await app.model.sync({
//   //   alter: { drop: false },
//   // });
//   // const dys = new Sequelize({
//   //   username: 'root',
//   //   dialect: 'mysql',
//   //   host: '127.0.0.1',
//   //   port: 3306,
//   //   password: '!QAZ2wsx',
//   //   database: 'v3db',
//   // });
//   // dys.define('TestData', {
//   //   name: STRING(20),
//   //   age: INTEGER,
//   // });
//   // dys.sync({
//   //   alter: { drop: false },
//   // });
// };

export default (app: Application) => {
  passwort(app);
  // startup(app);
};
