const taskService = require('../../../../services/tasks');
const controller = {}

controller.getTasks = (req, res) => {
  taskService.getTasks()
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
};

controller.getTaskById = (req, res) => {

};

controller.createTask = (req, res) => {
  taskService.createTask(req.body)
  .then((result) => {
    res.status(201).json(result);
  })
  .catch((err) => {
    res.json(err);
  });
};

controller.updateTask = (req, res) => {res.send('Will update the task with the id ' + req.params.id);};

controller.deleteTask = (req, res) => {res.send('Will delete the task with the id ' + req.params.id);};

module.exports = controller;
