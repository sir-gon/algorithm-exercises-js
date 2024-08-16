import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import {
  whatFlavors,
  whatFlavorsBruteforceCompute
} from './ctci_ice_cream_parlor_bruteforce.js';
import TEST_CASES from './ctci_ice_cream_parlor.testcases.json';
import TEST_CASES_BORDER_CASES from './ctci_ice_cream_parlor.border_testcases.json';

describe('ctci_ice_cream_parlor_bruteforce', () => {
  it('whatFlavors test cases', () => {
    expect.assertions(10);

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const answer = whatFlavorsBruteforceCompute(test.costs, test.money);

        console.debug(
          `${testSet.title} ctci_ice_cream_parlor_bruteforce(${test.costs}, ${test.money}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
        expect(whatFlavors(test.costs, test.money)).toBeUndefined();
      });
    });
  });

  it('whatFlavors border test cases', () => {
    expect.assertions(2);

    TEST_CASES_BORDER_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        expect(
          whatFlavorsBruteforceCompute(test.costs, test.money)
        ).toStrictEqual(test.expected);
        expect(whatFlavors(test.costs, test.money)).toBeUndefined();
      });
    });
  });

  it('whatFlavors test caller function', () => {
    expect.assertions(1);

    const cost = [];
    const money = 100;

    expect(whatFlavors(cost, money)).toBeUndefined();
  });
});
