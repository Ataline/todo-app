const apiRouter = require('./api');
const config = require('../environments/config');
const utils = require('./common/utils');
const services = require('./services');

const logger = utils.getLogger();
const tasksApi = {};

tasksApi.initialize = () => {
  services.initialize();
};

tasksApi.startServer = (app) => {
  try {
    logger.info('Server tarting...');
    utils.setBodyParser(app);
    app.use(apiRouter);
    app.listen(config.port, () => {
      logger.info('Server started on port ' + config.port + '...');
    });
  } catch(err) {
    logger.error(err);
  }
};

module.exports = tasksApi;
