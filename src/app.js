import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import logger from './utils/logger';

// import routes here


// init express app
const app = express();

// configure logger for requests
const expressPino = require('express-pino-logger')({
  logger,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// logger for requests
app.use(expressPino);

app.get('/', async (req, res) => {
  res.json({ status: true, message: 'Hello World!' });
});

// Add your routes here
/**
 * for example,
 * app.use('/api/v1/authors', authorsRoutes);
 */

// routes end here

// Error handling middleware, we delegate the handling to the centralized error handler
// eslint-disable-next-line no-unused-vars
app.use(async (err, req, res, next) => {
  logger.err(err, 'app error handled at app error handler')
  // send 500 - Internal Server Error
 return res.status(500).json({ error: true, message: 'Internal server error' })
});

export default app;
