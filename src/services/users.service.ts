import { Sequelize } from 'sequelize';
import User from '../models/User'

const createUser = (login: string, password: string, email: string) => {
    User.create({
        login: login,
        password: password,
        email: email,
    })
      .then((user) => {
        console.log('User created:', user);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

export const usersService = {
    createUser
  };