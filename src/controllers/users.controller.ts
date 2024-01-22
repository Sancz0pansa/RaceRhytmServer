import { usersService } from '../services/users.service';
import { ControllerAction } from './controller.types';

const createUser: ControllerAction = async (req, res) => {
    const {login, password, email} = req.body;

    if(!login || !password|| !email) {
        res.sendStatus(400);

        return;
    }
    try {
      await usersService.createUser(login,password,email);
  
      return res.send('created');
    } catch (e: any) {
      res.status(304);
  
      return res.send(e.message);
    }
  };
  console.log(dqwd)
  const findUser: ControllerAction = async (req, res) => {
    try {
      const { login, password } = req.body;
  
      // Check if login or password is missing
      if (!login || !password) {
        res.sendStatus(400);
        return;
      }
  
      // Use your usersService to find the user
      const user = await usersService.findUser(login, password);
      // If the user is found, you can perform additional actions here
      if (user) {
        res.status(200).send('User found successfully');
      } else {
        res.status(404).send('User not found');
      }
  
      
      
    } catch (error) {
      console.error('Error in findUser controller:', error);
      res.status(500).send('Internal Server Error');
    }
  };

  export const userController = {
    createUser,
    findUser
  }