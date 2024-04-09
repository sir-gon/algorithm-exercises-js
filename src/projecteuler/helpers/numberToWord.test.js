/*
 */

import { describe, expect, it } from '@jest/globals';
import { numberToWord } from './numberToWord.js';

describe('transform numbers to word representation in british english', () => {
  it('transform numbers to word, common cases up to 2 digits', () => {
    expect.assertions(5);

    expect(numberToWord(1)).toBe('one');
    expect(numberToWord(16)).toBe('sixteen');
    expect(numberToWord(20)).toBe('twenty');
    expect(numberToWord(30)).toBe('thirty');
    expect(numberToWord(64)).toBe('sixty-four');
  });

  it('transform numbers to word, common cases up to 3 and 4 digits', () => {
    expect.assertions(5);

    expect(numberToWord(301)).toBe('three hundred and one');
    expect(numberToWord(348)).toBe('three hundred and forty-eight');
    expect(numberToWord(500)).toBe('five hundred');
    expect(numberToWord(500)).toBe('five hundred');
    expect(numberToWord(1000)).toBe('one thousand');
  });

  it('transform numbers to word, border cases', () => {
    expect.assertions(2);

    expect(numberToWord()).toBe('');

    expect(() => {
      numberToWord(999999);
    }).toThrow('invalid value');
  });
});
