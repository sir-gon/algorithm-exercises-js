import { minimum, maximum } from './minmax.js';

describe('maximum and minimum', () => {
  it('minimum', () => {
    expect.assertions(2);

    expect(minimum(1, 99)).toBe(1);
    expect(minimum(99, 1)).toBe(1);
  });

  it('maximum', () => {
    expect.assertions(2);

    expect(maximum(1, 99)).toBe(99);
    expect(maximum(99, 1)).toBe(99);
  });
});
