const taskService = require('./tasks');
const mongoose = require('mongoose');
const logger = require('../common/utils').getLogger();
const services = {};

services.initialize = () => {
  logger.info('Connecting to database');
  mongoose.connect('mongodb://localhost:27017/todo-app', { autoIndex: true })
  .then(() => {
    logger.info('Connection established...');
    taskService.initialize();
  }).
  catch((err) => {
    logger.error('Error occured while connecting to the database');
    throw err;
  });
};

module.exports = services;
