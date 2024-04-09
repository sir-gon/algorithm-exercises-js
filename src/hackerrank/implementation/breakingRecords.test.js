import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { breakingRecords } from './breakingRecords.js';

describe('breaking the Records', () => {
  it('breaking the Records Border case', () => {
    expect.assertions(1);

    expect(() => {
      breakingRecords([]);
    }).toThrow('Empty input');
  });

  it('breaking the Records Test case 0', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    console.log(`breakingRecords(${input}) Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('breaking the Records Test case 1', () => {
    expect.assertions(1);

    const input = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    const solutionFound = [2, 4];

    const calculated = breakingRecords(input);

    console.log(`breakingRecords(${input}) Test case 1: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
