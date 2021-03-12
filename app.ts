import { Application } from 'egg';

const startup = (app: Application) => {
  // app.model.define()
  // console.log(app.name);

  app.model.sync({
    alter: { drop: false },
  });
};

export default (app: Application) => {
  startup(app);
};
