/*
 */

import { numberToWord } from './numberToWord.js';

describe('numbers to Array of decimal digits', () => {
  it('count digits (decimal) of positve integers', () => {
    expect.assertions(8);

    expect(numberToWord(1)).toStrictEqual('one');
    expect(numberToWord(16)).toStrictEqual('sixteen');
    expect(numberToWord(64)).toStrictEqual('sixty-four');
    expect(numberToWord(301)).toStrictEqual('three hundred and one');
    expect(numberToWord(348)).toStrictEqual('three hundred and forty-eight');
    expect(numberToWord(1000)).toStrictEqual('one thousand');
    expect(numberToWord(1001)).toStrictEqual('one thousand and one');
    expect(numberToWord(9999)).toStrictEqual(
      'nine thousand nine hundred and ninety-nine'
    );
  });
});
