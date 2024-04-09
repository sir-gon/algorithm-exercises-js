import { describe, expect, it } from '@jest/globals';
import { isPalindrome } from './isPalindrome.js';

describe('number is Palindrome', () => {
  it('some numbers are palindrome', () => {
    expect.assertions(4);

    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(131)).toBe(true);
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(123454321)).toBe(true);
  });
});
