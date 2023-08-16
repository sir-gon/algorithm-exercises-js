import { logger as console } from '../../logger.js';
import { staircase } from './staircase.js';

describe('staircase', () => {
  it('staircase Test case 1', () => {
    expect.assertions(1);

    const input = 6;
    const solutionFound = [
      '     #',
      '    ##',
      '   ###',
      '  ####',
      ' #####',
      '######'
    ].join('\n');

    const calculated = staircase(input);

    console.log(`staircase(${input}) solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
