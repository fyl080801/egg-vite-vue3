import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  return app.model.define(
    'User',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(40),
      address: { type: STRING(200), allowNull: true },
    },
    {
      tableName: 'User',
    }
  );
};
