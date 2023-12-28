/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize({
  database: 'racerythmdb',
  username: 'postgres',
  host: 'localhost',
  password: 'superuser',
  dialect: 'postgres',
  logging: console.log,
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false,
    // },
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
