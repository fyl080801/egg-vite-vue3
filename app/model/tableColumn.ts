import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  return app.model.define(
    'TableColumn',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(50), allowNull: false },
      title: { type: STRING(20), allowNull: false },
      description: { type: STRING(255) },
      tableId: { type: INTEGER, allowNull: false },
    },
    {
      tableName: 'TableColumn',
    }
  );
};
