/* istanbul ignore file */

import pino from 'pino';

const logConfig = (logLevel = 'fatal') => ({
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
  level: logLevel
});

const logger = pino(logConfig(process.env.LOG_LEVEL?.toLowerCase()));

export default logger;
export { logger };
