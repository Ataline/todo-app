const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startAt: { type: Date, default: Date.now, required: true },
  endAt: { type: Date, required: true }
});

let Task;

const getModel = () => {
  return Task || create();
}

const create = () => {
  Task = mongoose.model('Task', taskSchema);
}

module.exports = {
  create,
  getModel
};
