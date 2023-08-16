import { logger as console } from '../../logger.js';
import { simpleArraySum } from './simpleArraySum.js';

describe('problem simpleArraySum', () => {
  it('problem simpleArraySum Test case 0', () => {
    expect.assertions(1);

    const input = [1, 2, 3, 4, 10, 11];
    const solutionFound = 31;

    const calculated = simpleArraySum(input);

    console.log(`simpleArraySum(${input}) solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
