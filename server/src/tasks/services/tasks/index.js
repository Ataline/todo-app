const taskModel = require('./model');
const utils = require('../../common/utils');

const logger = utils.getLogger();
const services = {};

services.initialize = () => {
  logger.info('Task service', 'initializing service...');
  taskModel.create();
};

services.getTasks = () => {
  return taskModel.find()
        .exec()
        .lean()
        .then((tasks) => {
          return Promise.resolve(tasks);
        })
        .catch((err) => {
          logger('Task service', err);
          return Promise.reject(err)
        });
};

services.createTask = (data) => {
  return new taskModel.getModel().create(data, (err, small) => {
    if (err)  return Promise.reject(err);
    return Promise.resolve(small);
  });
};

module.exports = services;
