/* eslint-disable jest/require-hook */
/* istanbul ignore file */
/* c8 ignore start */

import pino from 'pino';

const logger = pino({
  customLevels: {
    log: 30
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      // sync: true,
      ignore: 'pid,hostname'
    }
  },
  level: process.env.LOG_LEVEL?.toLowerCase() ?? 'fatal'
});

(() => {
  console.log(`LOG: Instantiated at: ${new Date().toLocaleString()}`);
  console.log(`LOG LEVEL: ${logger.levelVal}`);
  logger.debug('LOG: DEBUG LEVEL ENABLED');
  logger.error('LOG: ERROR LEVEL ENABLED');
  logger.warn('LOG: WARN ENABLED');
  logger.info('LOG: INFO LEVEL ENABLED');
})();

export default logger;
export { logger };

/* c8 ignore stop */
