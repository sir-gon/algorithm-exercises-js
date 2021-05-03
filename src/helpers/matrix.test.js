import { matrix } from './matrix.js';

describe('matrix generator', () => {
  it('matrix 3 × 3 with initial value of 1', () => {
    expect.assertions(1);

    const sideN = 3;
    const sideM = 3;
    const fill = 1;

    expect(matrix(sideN, sideM, fill)).toStrictEqual([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]);
  });

  it('matrix 3 × 3 with initial value of null', () => {
    expect.assertions(1);

    const sideN = 3;
    const sideM = 3;
    const fill = null;

    expect(matrix(sideN, sideM, fill)).toStrictEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  it('matrix 3 × 5 with initial value of null', () => {
    expect.assertions(1);

    const sideN = 3;
    const sideM = 5;
    const fill = null;

    expect(matrix(sideN, sideM, fill)).toStrictEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  it('matrix 5 × 3 with initial value of null', () => {
    expect.assertions(1);

    const sideN = 5;
    const sideM = 3;
    const fill = null;

    expect(matrix(sideN, sideM, fill)).toStrictEqual([
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ]);
  });
});
