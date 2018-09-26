const TaskModel = require('./model');
const utils = require('../../common/utils');

const logger = utils.getLogger();
const services = {};

services.createTask = (data) => {
  return new TaskModel(data).save();
};

services.getTasks = () => {
  return TaskModel.find().exec();
};

services.getOneTask = () => {
  return TaskModel.findById(id).exec();
};

services.updateTask = (id, data) => {
  TaskModel.findOne({ _id: id })
  .then((doc) => {
    Object.keys(data).forEach(key => {
      doc[key] = data[key];
    });
    return doc.save();
  })
  .catch((err) => {
    return Promise.reject(err);
  })
}

services.deleteTask = (id) => {

};

module.exports = services;
