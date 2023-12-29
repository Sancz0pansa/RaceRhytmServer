import { Router } from 'express';
import {userController} from '../controllers/users.controller'

export const usersRouter = Router();

usersRouter.post('/', userController.findUser);
usersRouter.post('/new', userController.createUser);