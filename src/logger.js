// import util from 'util';
import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      sync: true,
      ignore: 'pid,hostname'
    }
  },
  enabled: !!(process.env._DEBUG && process.env._DEBUG === '1')
});

// eslint-disable-next-line jest/require-hook
logger.info('LOG ENABLED');

export default logger;
