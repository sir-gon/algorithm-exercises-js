/**
 * Power digit sum
 *
 * https://projecteuler.net/problem=16
 *
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 *  Digits: 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376
 *  Sum: 1366
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0016 } from './problem0016.js';

const DEBUG =
  process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0016', () => {
  it('problem 0016 solution found', () => {
    expect.assertions(1);

    const base = '2';
    const exponent = 1000;
    const solutionFound = '1366';

    const calculated = problem0016(base, exponent, DEBUG);

    console.log(`PROBLEM 0016 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
