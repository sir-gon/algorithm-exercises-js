import { logger as console } from '../../logger.js';
import { jumpingOnClouds } from './jumpingOnClouds.js';

describe('jumping on the Clouds', () => {
  it('jumping on the Clouds Test case 0', () => {
    expect.assertions(1);

    const input = [0, 0, 1, 0, 0, 1, 0];
    const solutionFound = 4;

    const calculated = jumpingOnClouds(input);

    console.log(`Jumping on the Clouds Test case 0: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('jumping on the Clouds Test case 1', () => {
    expect.assertions(1);

    const input = [0, 0, 0, 1, 0, 0];
    const solutionFound = 3;

    const calculated = jumpingOnClouds(input);

    console.log(`Jumping on the Clouds Test case 1: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
