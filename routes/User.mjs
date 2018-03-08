import express from 'express';
import UserController from '../controllers/UserController';

const userRouter = express.Router();

userRouter.get('/users', (req, res) => {
    UserController.getAll(req, res);
});

userRouter.get('/user/:id', (req, res) => {
    UserController.getOne(req, res);
});

userRouter.post('/users', (req, res) => {
    UserController.addUser(req, res);
});

userRouter.put('/user/:id', (req, res) => {
    UserController.updateUser(req, res);
});

userRouter.delete('/user/:id', (req, res) => {
    UserController.deleteUser(req, res);
});
export default userRouter;