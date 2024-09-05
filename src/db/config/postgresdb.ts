import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize
const postgresConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  port: process.env.DB_PORT as unknown as number,
  logging: false,
});

export default postgresConnection;