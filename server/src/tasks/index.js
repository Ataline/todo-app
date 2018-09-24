const apiRouter = require('./api');
const config = require('../environments/config');
const utils = require('./common/utils');

const logger = utils.getLogger();
const tasksApi = {};

tasksApi.startServer = (app) => {
  try {
    logger.info('Server tarting...');
    utils.setBodyParser(app);
    app.use(apiRouter);
    app.listen(config.PORT, () => {
      logger.info('Server started on port ' + config.PORT + '...');
    });
  } catch(err) {
    logger.error(err);
  }
};

module.exports = tasksApi;
