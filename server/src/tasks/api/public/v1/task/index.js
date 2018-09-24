const controller = require('./controller');
const routes = require('express').Router();

routes.get('/tasks', controller.getTasks);

routes.get('/tasks/:id', controller.getTaskById);

routes.put('/tasks/:id', controller.updateTask);

routes.post('/tasks', controller.createTask);

routes.delete('/tasks/:id', controller.deleteTask);

module.exports = routes;
