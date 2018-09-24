const bodyParser = require('body-parser');
const utils = {};

utils.setBodyParser = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

utils.getLogger = () => {
  return require('tracer').colorConsole();
};

module.exports = utils;
