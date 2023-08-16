import { logger as console } from '../../logger.js';

import { compareTriplets } from './compareTriplets.js';

describe('problem simpleArraySum', () => {
  it('problem simpleArraySum Border case', () => {
    expect.assertions(1);

    const a = [1];
    const b = [2, 3];

    expect(() => {
      compareTriplets(a, b);
    }).toThrow('Wrong comparition length');
  });

  it('problem simpleArraySum Test case 0', () => {
    expect.assertions(1);

    const a = [5, 6, 7];
    const b = [3, 6, 10];
    const solutionFound = [1, 1];

    const calculated = compareTriplets(a, b);

    console.log(`compareTriplets(${a}, ${b}) solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
