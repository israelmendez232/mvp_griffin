import express from 'express';
import UserController from '../controllers/UserController';

const routes = express.Router();

// Users
routes.get('/user/:email', UserController.findOne);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;
