const bodyParser = require('body-parser');
const { db } = require('../../environments/config');
const process = require('process');

const utils = {};

utils.setBodyParser = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

utils.getLogger = () => {
  return require('tracer').colorConsole();
};

utils.dbConnect= (mongoose, logger, options = {}) => {
  const uri = [ 'mongodb:/', db.host + ':' + db.port, ...db.dbNames ].join('/');
  const driverOptions = Object.assign(db.defaultOptions, options);
  
  mongoose.Promise = driverOptions.promiseLibrary;
  logger.info('Connecting to database with the address '+ uri);
  mongoose.connect(uri, driverOptions);
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

  return mongoose.connection;
};

module.exports = utils;
