import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { plusMinus } from './plusMinus.js';

describe('plus Minus', () => {
  it('plus Minus Test case 1', () => {
    expect.assertions(1);

    const input = [-4, 3, -9, 0, 4, 1];
    const solutionFound = ['0.500000', '0.333333', '0.166667'].join('\n');

    const calculated = plusMinus(input);

    console.log(`plusMinus(${input}) solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
