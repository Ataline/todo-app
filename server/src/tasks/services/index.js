const taskService = require('./tasks');
const mongoose = require('mongoose');
const { getLogger, dbConnect } = require('../common/utils');

const logger = getLogger();
const services = {};

services.initialize = () => {
  const connection = dbConnect(mongoose, logger);

  connection.on('open', () => {
    logger.info('Connection established with the database');
    // taskService.initialize(mongoose);
    // logger.info('Closing connection to database');
    // connection.close();
  });
};

module.exports = services;
