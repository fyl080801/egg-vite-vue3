import * as app from './app';
import * as settings from './settings';

export const createStore = () => {
  app.createStore();
  settings.createStore();
};

export { app, settings };
