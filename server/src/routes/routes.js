import express from 'express';
import UserController from '../controllers/UserController';

const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({ hello: 'world' });
});
routes.post('/users', UserController.store);

module.exports = routes;
