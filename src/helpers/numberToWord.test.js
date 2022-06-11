/*
 */

import { numberToWord } from './numberToWord.js';

describe('transform numbers to word representation in british english', () => {
  it('transform numbers to word, common cases', () => {
    expect.assertions(8);

    expect(numberToWord(1)).toBe('one');
    expect(numberToWord(16)).toBe('sixteen');
    expect(numberToWord(30)).toBe('thirty');
    expect(numberToWord(64)).toBe('sixty-four');
    expect(numberToWord(301)).toBe('three hundred and one');
    expect(numberToWord(348)).toBe('three hundred and forty-eight');
    expect(numberToWord(500)).toBe('five hundred');
    expect(numberToWord(1000)).toBe('one thousand');
    // expect(numberToWord(1001)).toStrictEqual('one thousand and one');
    // expect(numberToWord(9999)).toStrictEqual(
    //   'nine thousand nine hundred and ninety-nine'
    // );
  });

  it('transform numbers to word, border cases', () => {
    expect.assertions(2);

    expect(numberToWord()).toBe('');

    expect(() => {
      numberToWord(999999);
    }).toThrow('invalid value');
  });
});
