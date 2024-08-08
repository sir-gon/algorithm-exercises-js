// ////////////////////////////////////////////////////////////////////////////
// Result found:
//  Digits:
//      1071508607186267320948425049060001810561404811705
//      5336074437503883703510511249361224931983788156958
//      5812759467291755314682518714528569231404359845775
//      7469857480393456777482423098542107460506237114187
//      7954182153046474983581941267398767559165543946077
//      0629145711964776865421676604298316526243868372056
//      68069376
//  Sum: 1366
// ////////////////////////////////////////////////////////////////////////////

import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0016 } from './problem0016.js';
import { problem0016alt } from './problem0016-alt.js';

describe('problem 0016', () => {
  it('problem 0016 solution found', () => {
    expect.assertions(2);

    const base = '2';
    const exponent = 1000;
    const solutionFound = '1366';

    let calculated;

    calculated = problem0016(base, exponent);
    console.log(`PROBLEM 0016 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);

    calculated = problem0016alt(base, exponent);
    console.log(`PROBLEM 0016 Alternative solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
