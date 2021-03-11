import { Application } from 'egg';

const startup = (app: Application) => {
  // app.model.define()
  console.log(app.name);
};

export default (app: Application) => {
  startup(app);
};
