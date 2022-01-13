import { Application } from 'egg';
// import plugin1 from 'plugin1';
// import { Sequelize, STRING, INTEGER } from 'sequelize';

const startup = async (app: Application & Record<string, any>) => {
  app.addPageConfig(app.name);

  app.router.get('/', app.viewInject(app.name, 'index.html'), () => {
    //
  });

  // await app.model.sync({
  //   alter: { drop: false },
  // });
  // const dys = new Sequelize({
  //   username: 'root',
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   password: '!QAZ2wsx',
  //   database: 'v3db',
  // });
  // dys.define('TestData', {
  //   name: STRING(20),
  //   age: INTEGER,
  // });
  // dys.sync({
  //   alter: { drop: false },
  // });
};

export default (app: Application) => {
  startup(app);
};
