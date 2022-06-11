import { fiboStep } from './fibonacci.js';

describe('fibonacci number', () => {
  it('fibonacci step', () => {
    expect.assertions(3);

    expect(fiboStep()).toBe(1);
    expect(fiboStep(0, 1)).toBe(1);
    expect(fiboStep(1, 2)).toBe(3);
  });
});
