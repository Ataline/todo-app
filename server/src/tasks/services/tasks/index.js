const taskModel = require('./model');
const utils = require('../../common/utils');

const logger = utils.getLogger();
const services = {};
let taskSchema;
let model;

services.initialize = (mongoose) => {
  logger.info('Task service', 'initializing service...');
  taskSchema = taskModel.createSchema(mongoose);
  model = taskModel.createModel(mongoose, taskSchema);
};

services.getTasks = () => {
  return model.find()
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
  return model.create(data, (err, small) => {
    if (err)  return Promise.reject(err);
    return Promise.resolve(small);
  });
};

module.exports = services;
