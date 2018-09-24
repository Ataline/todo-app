const v1Router = require('./v1');
const publicRouter = require('express').Router();

publicRouter.use('/public', v1Router);

module.exports = publicRouter;
