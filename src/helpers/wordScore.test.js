import { wordScore } from './wordScore.js';

describe('wordScore', () => {
  it('score of a word', () => {
    expect.assertions(3);

    expect(wordScore('ABC')).toBe(1 + 2 + 3);
    expect(wordScore('OTTO')).toBe(15 * 2 + 20 * 2);
    expect(wordScore('COLIN')).toBe(53);
  });

  it('score of a empty word', () => {
    expect.assertions(3);

    expect(wordScore('')).toBe(0);
    expect(wordScore('1')).toBe(0);
    expect(wordScore('#')).toBe(0);
  });
});
