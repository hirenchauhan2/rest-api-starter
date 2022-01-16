import http from 'http';

import logger from './utils/logger';
import normalizePort from './utils/normalizePort';

import app from './app';
import { prisma } from './config/prismaClient';

const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(null, `${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(null, `${bind} is already in use`);
      process.exit(1);
      break;
    default:
      logger.error(error, 'Unknown server error');
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Process level error handling.
 */
process.on('uncaughtException', async (error) => {
  logger.error('uncaughtException', error.stack);

  await prisma.$disconnect();

  // gracefully shutdown the server
  process.exit(1);
});

process.on('unhandledRejection', async (reason) => {
  logger.error('unhandledRejection', reason);

  await prisma.$disconnect();

  // gracefully shutdown the server
  process.exit(1);
});
