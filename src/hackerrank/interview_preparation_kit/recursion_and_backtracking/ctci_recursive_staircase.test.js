import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import {
  stepPerms,
  stepPermsComputWithCache
} from './ctci_recursive_staircase.js';
import TEST_CASES from './ctci_recursive_staircase.testcases.json';
import TEST_CASES_GENERALIZED from './ctci_recursive_staircase_generalized.testcases.json';

describe('ctci_recursive_staircase', () => {
  it('stepPerms test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const answer = stepPerms(test.input);

        console.debug(`stepPerms(${test.input}) solution found: ${answer}`);

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });

  it('stepPermsComputWithCache test cases', () => {
    expect.assertions(3);

    TEST_CASES_GENERALIZED.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const initialCache = {};
        const answer = stepPermsComputWithCache(
          test.input,
          initialCache,
          test.limit
        );

        console.debug(
          `stepPermsComputWithCache(${test.input}, ${initialCache}, ${test.limit}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
