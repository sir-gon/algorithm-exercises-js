import pino from 'pino';

const logger = pino({
  enabled: !!(process.env._DEBUG && process.env._DEBUG === '1')
});

// eslint-disable-next-line jest/require-hook
logger.info('LOG ENABLED');

export default logger;
