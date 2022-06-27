/**
 * Names scores
 *
 * https://projecteuler.net/problem=22
 *
 * Using names.txt https://projecteuler.net/project/resources/p022_names.txt
 * (right click and 'Save Link/Target As...'),
 * a 46K text file containing over five-thousand first names,
 * begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for
 * each name, multiply this value by its alphabetical position
 * in the list to obtain a name score.
 *
 * For example, when the list is sorted into
 * alphabetical order, COLIN, which
 * is worth 3 + 15 + 12 + 9 + 14 = 53, is the
 * 938th name in the list. So, COLIN would obtain
 * a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

// ////////////////////////////////////////////////////////////////////////////
// See:
//    - src/data/p022_names.txt
//    - src/data/p022_names.json
// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

import { problem0022 } from './problem0022.js';

describe('problem 0022', () => {
  it('problem 0022 solution found', () => {
    expect.assertions(1);

    const solutionFound = 871198282;

    const calculated = problem0022();

    logger.info(`PROBLEM 0022 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
