import { fiboStep } from './fibonacci.js';

describe('fibonacci number', () => {
  it('fibonacci step', () => {
    expect.assertions(3);

    expect(fiboStep()).toStrictEqual(1);
    expect(fiboStep(0, 1)).toStrictEqual(1);
    expect(fiboStep(1, 2)).toStrictEqual(3);
  });
});
