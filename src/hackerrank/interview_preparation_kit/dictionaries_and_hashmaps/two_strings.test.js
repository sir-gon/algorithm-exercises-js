import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { twoStrings } from './two_strings.js';

const TEST_CASES = [
  {
    title: 'Example 1 and 2',
    comparing: [
      {
        s1: 'and',
        s2: 'art',
        expected: 'YES'
      },
      {
        s1: 'be',
        s2: 'cat',
        expected: 'NO'
      }
    ]
  },
  {
    title: 'Sample Test Case 0',
    comparing: [
      {
        s1: 'hello',
        s2: 'world',
        expected: 'YES'
      },
      {
        s1: 'hi',
        s2: 'world',
        expected: 'NO'
      }
    ]
  },
  {
    title: 'Sample Test Case 6',
    comparing: [
      {
        s1: 'wouldyoulikefries',
        s2: 'abcabcabcabcabcabc',
        expected: 'NO'
      },
      {
        s1: 'hackerrankcommunity',
        s2: 'cdecdecdecde',
        expected: 'YES'
      },
      {
        s1: 'jackandjill',
        s2: 'wentupthehill',
        expected: 'YES'
      },
      {
        s1: 'writetoyourparents',
        s2: 'fghmqzldbc',
        expected: 'NO'
      }
    ]
  }
];

describe('two_strings', () => {
  it('twoStrings test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testCase) => {
      testCase.comparing.forEach((test) => {
        const answer = twoStrings(test.s1, test.s2);

        console.debug(
          `twoStrings(${test.s1}, ${test.s2}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
