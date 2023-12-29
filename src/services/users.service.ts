import { Sequelize } from 'sequelize';
import User from '../models/User'
import bcrypt from 'bcrypt';

const saltRounds = 10;

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const createUser = async (login: string, password: string, email: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

    User.create({
        login,
        password: hash,
        email,
        salt,
    })
      .then((user) => {
        console.log('User created:', user);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const findUser = async (login: string, password: string) => {
    try {
      const user = await User.findOne({
        where: {
          login: login,
        },
      });
  
      if (user) {
        const match = await bcrypt.compare(password, user.dataValues.password);
        console.log(match)
        if (match) {
          console.log('Logged in');
        return user;
        }
        
      } else {
        console.log('User not found');
        return false;
      }
    } catch (error: any) {
      console.error('Error finding user:', error.message);
      throw new Error(error.message);
    }
  };

export const usersService = {
    createUser,
    findUser
  };