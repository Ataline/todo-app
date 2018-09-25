const taskService = require('./tasks');
const mongoose = require('mongoose');
const { getLogger, dbConnect } = require('../common/utils');

const logger = getLogger();
const services = {};

services.initialize = () => {
  const connection = dbConnect(mongoose, logger);

  connection.on('open', () => {
    logger.info('Connection established with the database');
    taskService.initialize(mongoose);
    taskService.createTask({title: 'test', description: 'not needed', startAt: Date.now(), endAt: new Date()})
  });
};

module.exports = services;
