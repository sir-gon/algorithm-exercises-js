import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { countingValleys } from './countingValleys.js';

describe('counting Valleys', () => {
  it('counting Valleys Test case 0', () => {
    expect.assertions(1);

    const input = 'UDDDUDUU';
    const solutionFound = 1;

    const calculated = countingValleys(input.length, input);

    console.log(`Counting Valleys Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('counting Valleys Test case 1', () => {
    expect.assertions(1);

    const input = 'DDUUDDUDUUUD';
    const solutionFound = 2;

    const calculated = countingValleys(input.length, input);

    console.log(`Counting Valleys Test case 1: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
