const taskRouter = require('./task');
const v1Router = require('express').Router();

v1Router.use('/v1', taskRouter);

module.exports = v1Router;
