import { countDigits, numberToDigits } from './numberToDigits.js';

describe('numbers to Array of decimal digits', () => {
  it('positive integers as an array of digits', () => {
    expect.assertions(5);

    expect(numberToDigits(1)).toStrictEqual([1]);
    expect(numberToDigits(9)).toStrictEqual([9]);
    expect(numberToDigits(12)).toStrictEqual([1, 2]);
    expect(numberToDigits(1234)).toStrictEqual([1, 2, 3, 4]);
    expect(numberToDigits(10715086071862696)).toStrictEqual([
      1,
      0,
      7,
      1,
      5,
      0,
      8,
      6,
      0,
      7,
      1,
      8,
      6,
      2,
      6,
      9,
      6
    ]);
  });

  it('count digits (decimal) of positve integers', () => {
    expect.assertions(5);

    expect(countDigits(1)).toStrictEqual(1);
    expect(countDigits(9)).toStrictEqual(1);
    expect(countDigits(12)).toStrictEqual(2);
    expect(countDigits(1234)).toStrictEqual(4);
    expect(countDigits(10715086071862696)).toStrictEqual(17);
  });
});
