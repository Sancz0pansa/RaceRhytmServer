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

  export const userController = {
    createUser
  }