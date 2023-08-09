/* eslint-disable jest/require-hook */
/* istanbul ignore file */
/* c8 ignore start */

import pino from 'pino';

const Singleton = (() => {
  let instance;

  function createInstance() {
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
      level: process.env.LOG_LEVEL?.toLowerCase() || 'fatal'
    });

    console.log(`LOG: Instantiated at: ${new Date().toLocaleString()}`);
    logger.debug('LOG: DEBUG LEVEL ENABLED');
    logger.error('LOG: ERROR LEVEL ENABLED');
    logger.warn('LOG: WARN ENABLED');
    logger.log('LOG: INFO LEVEL ENABLED');

    logger.log(`LOG LEVEL: ${logger.levelVal}`);

    return logger;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

const logger = Singleton.getInstance();

export default logger;
export { logger };

/* c8 ignore stop */
