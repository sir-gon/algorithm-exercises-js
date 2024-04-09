import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { bonAppetit } from './bonAppetit.js';

describe('bill Division', () => {
  it('bill Division Test case 0', () => {
    expect.assertions(1);

    const bill = [3, 10, 2, 9];
    const k = 1; // zero-based index of the item Anna doesn't eat
    const b = 12; // the amount of money that Anna contributed to the bill
    const solutionFound = '5';

    const calculated = bonAppetit(bill, k, b);

    console.log(`Bill Division Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('bill Division Test case 6', () => {
    expect.assertions(1);

    const bill = [3, 10, 2, 9];
    const k = 1; // zero-based index of the item Anna doesn't eat
    const b = 7; // the amount of money that Anna contributed to the bill
    const solutionFound = 'Bon Appetit';

    const calculated = bonAppetit(bill, k, b);

    console.log(`Bill Division Test case 6: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
