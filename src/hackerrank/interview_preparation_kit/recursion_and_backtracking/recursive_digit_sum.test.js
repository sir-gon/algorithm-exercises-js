import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { stepPerms } from './recursive_digit_sum.js';
import TEST_CASES from './recursive_digit_sum.testcases.json';

describe('recursive_digit_sum', () => {
  it('stepPerms test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((test) => {
      const answer = stepPerms(test.n);

      console.debug(`stepPerms(${test.n}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });
});


class TestRecursiveDigitSum(unittest.TestCase):

    def test_super_digit(self):

        for _, _tt in enumerate(TEST_CASES):

            self.assertEqual(
                super_digit(_tt['n'], _tt['k']), _tt['answer'],
                f"{_} | super_digit({_tt['n']}, {_tt['k']}) must be "
                f"=> {_tt['answer']} in {_tt['title']}")
