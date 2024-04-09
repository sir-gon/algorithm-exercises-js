import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { gradingStudents } from './gradingStudents.js';

describe('gradingStudents', () => {
  it('gradingStudents Test case 0', () => {
    expect.assertions(1);

    const input = [73, 67, 38, 33];
    const solutionFound = [75, 67, 40, 33];

    const calculated = gradingStudents(input);

    console.log(`gradingStudents Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
