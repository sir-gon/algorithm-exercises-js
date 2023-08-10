import { logger as console } from './logger.js';

describe('logger', () => {
  it('problem instantiation', () => {
    expect.assertions(1);

    console.debug('LOG: DEBUG LEVEL ENABLED');
    console.error('LOG: ERROR LEVEL ENABLED');
    console.warn('LOG: WARN ENABLED');
    console.info('LOG: INFO LEVEL ENABLED');
    console.info(`LOG: Instantiated at: ${new Date().toLocaleString()}`);
    console.info(`LOG LEVEL: ${console.levelVal}`);

    expect(console.levelVal).toBeGreaterThan(0);
  });
});
