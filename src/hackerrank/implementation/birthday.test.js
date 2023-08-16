import { logger as console } from '../../logger.js';
import { birthday } from './birthday.js';

describe('subarray Division', () => {
  it('subarray Division test case 0', () => {
    expect.assertions(1);

    const s = [1, 2, 1, 3, 2];
    const d = 3;
    const m = 2;
    const solutionFound = 2;

    const calculated = birthday(s, d, m);

    console.log(`Subarray Division test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('subarray Division test case 1', () => {
    expect.assertions(1);

    const s = [1, 1, 1, 1, 1, 1];
    const d = 3;
    const m = 2;
    const solutionFound = 0;

    const calculated = birthday(s, d, m);

    console.log(`Subarray Division test case 1: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('subarray Division test case 2', () => {
    expect.assertions(1);

    const s = [4];
    const d = 4;
    const m = 1;
    const solutionFound = 1;

    const calculated = birthday(s, d, m);

    console.log(`Subarray Division test case 2: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
