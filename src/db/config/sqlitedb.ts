import { Sequelize } from 'sequelize';

const sqliteConnection = new Sequelize({
  dialect: 'sqlite',
  storage: 'sequelize.sqlite',
  logging: false,
  pool: {
    max: 5,
    idle: 10000,
  }
});

export default sqliteConnection;