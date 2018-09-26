const taskService = require('../../../../services/tasks');
const logger = require('../../../../common/utils').getLogger();
const controller = {}

controller.getTasks = (req, res) => {
  logger.info('About to get tasks');
  taskService.getTasks()
  .then((tasks) => {
    if (tasks.length === 0) {
      res.status(404).json(err);
    }
    res.status(200).json(tasks);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
};

controller.getTaskById = (req, res) => {
  taskService.getOneTask(req.params.id)
  .then((task) => {
    if (!task) {
      res.status(404).json({ message: "No task with the identifier " + req.param.id });
    }
    res.status(200).json(task);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
};

controller.createTask = (req, res) => {
  logger.info('Inside createTask');
  logger.info(req.body);
  taskService.createTask(req.body)
  .then((result) => {
    res.status(201).json(result);
  })
  .catch((err) => {
    res..status(500).json(err);
  });
};

controller.updateTask = (req, res) => {
  taskService.updateTask(req.params.id, req.body)
  .then((updatedTask) => {
    if (!updateTask) {
      res.json(204).json({ message: "No task with the identifier " + req.params.id });
    }
    res.status(200).json(updateTask);
  })
  .catch((err) => {
    res.json(err);
  });
};

controller.deleteTask = (req, res) => {
  taskService.deleteTask(req.params.id)
  .then(() => {
    res.status(202).json({ message: 'task deleted' });
  })
  .catch((err) => {
    res.json(err);
  });
};

module.exports = controller;
