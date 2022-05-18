import { wordScore } from './wordScore.js';

describe('wordScore', () => {
  it('score of a word', () => {
    expect.assertions(3);

    expect(wordScore('ABC')).toBe(1 + 2 + 3);
    expect(wordScore('OTTO')).toBe(15 * 2 + 20 * 2);
    expect(wordScore('COLIN')).toBe(53);
  });
});
