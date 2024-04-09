import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { countApplesAndOranges } from './countApplesAndOranges.js';

describe('countApplesAndOranges', () => {
  it('countApplesAndOranges test case 0', () => {
    expect.assertions(1);

    const s = 7;
    const t = 11;
    const a = 5;
    const b = 15;
    const apples = [-2, 2, 1];
    const oranges = [5, -6];
    const solutionFound = [1, 1].join('\n');

    const calculated = countApplesAndOranges(s, t, a, b, apples, oranges);

    console.log(`countApplesAndOranges test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
