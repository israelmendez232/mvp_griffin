import express from 'express';
import UserController from '../controllers/UserController';

const routes = express.Router();

// Users
routes.get('/users', UserController.index);
routes.get('/user/:email', UserController.read);
routes.post('/user', UserController.create);
routes.put('/user/:email', UserController.update);
routes.delete('/user/:email', UserController.delete);

module.exports = routes;
