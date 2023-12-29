// src/index.ts
import express from 'express';
import cors from 'cors';
import { sequelize, connect } from './dbconfig';  // Correct the import here
import User from './models/User';  // Correct the import here
import {usersRouter} from './router/users.router';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(
  cors({
    origin: ['https://fe-may23-bugbusters.github.io', 'http://localhost:3001'],
    credentials: true,
  }),
);

app.use('/users',express.json(), usersRouter);

async function init() {
  try {
    await connect();
    console.log('Connection has been established successfully.');


    await sequelize.sync({ force: true });

    console.log('Models synced with the database.');

    // Your application logic goes here

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

init();
