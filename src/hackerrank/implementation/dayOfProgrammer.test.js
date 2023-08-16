import { logger as console } from '../../logger.js';
import { dayOfProgrammer } from './dayOfProgrammer.js';

describe('day of the Programmer', () => {
  it('day of the Programmer border case', () => {
    expect.assertions(1);

    const input = 1801;
    const solutionFound = '13.09.1801';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('day of the Programmer Test case 0', () => {
    expect.assertions(1);

    const input = 2017;
    const solutionFound = '13.09.2017';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('day of the Programmer Test case 1', () => {
    expect.assertions(1);

    const input = 2016;
    const solutionFound = '12.09.2016';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 1 ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('day of the Programmer Test case 48', () => {
    expect.assertions(1);

    const input = 1700;
    const solutionFound = '12.09.1700';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 48: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('day of the Programmer Test case 59', () => {
    expect.assertions(1);

    const input = 1918;
    const solutionFound = '26.09.1918';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 59: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('day of the Programmer Test case 60', () => {
    expect.assertions(1);

    const input = 1800;
    const solutionFound = '12.09.1800';

    const calculated = dayOfProgrammer(input);

    console.log(`Day of the Programmer Test case 60: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
