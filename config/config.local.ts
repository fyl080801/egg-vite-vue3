import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vitePlugin = {
    devServer: true,
    targets: [/^(\/node_modules)/g, /(.gif)$/g]
  };

  config.typeorm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '!QAZ2wsx',
    database: 'v3db',
    synchronize: true,
    logging: false,
    entities: ['app/entity/**/*.ts'],
    migrations: ['app/migration/**/*.ts'],
    subscribers: ['app/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'app/entity',
      migrationsDir: 'app/migration',
      subscribersDir: 'app/subscriber'
    }
  };

  return config;
};
