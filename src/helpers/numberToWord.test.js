/*
 */

import { numberToWord } from './numberToWord.js';

describe('transform numbers to word representation in british english', () => {
  it('transform numbers to word, common cases', () => {
    expect.assertions(8);

    expect(numberToWord(1)).toStrictEqual('one');
    expect(numberToWord(16)).toStrictEqual('sixteen');
    expect(numberToWord(30)).toStrictEqual('thirty');
    expect(numberToWord(64)).toStrictEqual('sixty-four');
    expect(numberToWord(301)).toStrictEqual('three hundred and one');
    expect(numberToWord(348)).toStrictEqual('three hundred and forty-eight');
    expect(numberToWord(500)).toStrictEqual('five hundred');
    expect(numberToWord(1000)).toStrictEqual('one thousand');
    // expect(numberToWord(1001)).toStrictEqual('one thousand and one');
    // expect(numberToWord(9999)).toStrictEqual(
    //   'nine thousand nine hundred and ninety-nine'
    // );
  });

  it('transform numbers to word, border cases', () => {
    expect.assertions(2);

    expect(numberToWord()).toStrictEqual('');

    expect(() => {
      numberToWord(999999);
    }).toThrow('invalid value');
  });
});
