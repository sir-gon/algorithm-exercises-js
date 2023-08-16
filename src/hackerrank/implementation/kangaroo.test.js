import { logger as console } from '../../logger.js';
import { kangaroo } from './kangaroo.js';

describe('number Line Jumps', () => {
  it('number Line Jumps Border case 1', () => {
    expect.assertions(1);

    const x1 = 0;
    const v1 = 3;
    const x2 = 4;
    const v2 = 3;
    const solutionFound = 'NO';

    const calculated = kangaroo(x1, v1, x2, v2);

    console.log(
      `number Line Jumps(${x1}, ${v1}, ${x2}, ${v2}) Border case: ${calculated}`
    );
    expect(calculated).toBe(solutionFound);
  });

  it('number Line Jumps Border case 2', () => {
    expect.assertions(1);

    const x1 = 0;
    const v1 = 3;
    const x2 = 0;
    const v2 = 3;
    const solutionFound = 'YES';

    const calculated = kangaroo(x1, v1, x2, v2);

    console.log(
      `number Line Jumps(${x1}, ${v1}, ${x2}, ${v2}) Border case: ${calculated}`
    );
    expect(calculated).toBe(solutionFound);
  });

  it('number Line Jump Test case 0', () => {
    expect.assertions(1);

    const x1 = 0;
    const v1 = 3;
    const x2 = 4;
    const v2 = 2;
    const solutionFound = 'YES';

    const calculated = kangaroo(x1, v1, x2, v2);

    console.log(
      `number Line Jumps(${x1}, ${v1}, ${x2}, ${v2}) Test case 0: ${calculated}`
    );
    expect(calculated).toBe(solutionFound);
  });

  it('number Line Jump Test case 1', () => {
    expect.assertions(1);

    const x1 = 0;
    const v1 = 2;
    const x2 = 5;
    const v2 = 3;
    const solutionFound = 'NO';

    const calculated = kangaroo(x1, v1, x2, v2);

    console.log(
      `number Line Jumps(${x1}, ${v1}, ${x2}, ${v2}) Test case 1: ${calculated}`
    );
    expect(calculated).toBe(solutionFound);
  });
});
