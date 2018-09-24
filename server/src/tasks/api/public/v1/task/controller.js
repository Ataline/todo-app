const controller = {}

controller.getTasks = (req, res) => {res.send('Will send all tasks');};

controller.getTaskById = (req, res) => {res.send('Will send the task with the id ' + req.params.id);};

controller.createTask = (req, res) => {res.send('Will create a new task');};

controller.updateTask = (req, res) => {res.send('Will update the task with the id ' + req.params.id);};

controller.deleteTask = (req, res) => {res.send('Will delete the task with the id ' + req.params.id);};

module.exports = controller;
