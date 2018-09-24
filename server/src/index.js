const express = require('express');
const tasksApi = require('./tasks');

const app = express();

tasksApi.initialize();
tasksApi.startServer(app);
