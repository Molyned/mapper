'use strict';
const express = require('express');
const uploadRoutes = require('./routes/backgroundData');
const errorMiddleware = require('./errors/middleware');

module.exports = function(app) {
  // mount api routes on to api router
  const apiRouter = express.Router();
  apiRouter.use('/upload', uploadRoutes);
  // mount api router on to app
  app.use('/api', apiRouter);

  // mount middleware to handle errors
  app.use(errorMiddleware)

  // mount catch all route
  app.all("*", (req, res) => res.status(200).send("My Node.js API"));
};
