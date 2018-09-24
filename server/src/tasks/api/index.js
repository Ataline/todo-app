const publicRouter = require('./public');
const apiRouter = require('express').Router();

apiRouter.use('/api', publicRouter);

module.exports = apiRouter;
