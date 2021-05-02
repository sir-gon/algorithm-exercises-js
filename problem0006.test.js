/**
 * Sum square difference
 *
 * https://projecteuler.net/problem=6
 *
 * ////////////////////////////////////////////////////////////////////////////
 * Solution found:
 * Sum of first 100 squares = 338350
 * Base for Square Of Sum of first 100 = 5050
 * Square Of Sum of first 100 = 25502500
 * Difference found 25502500 - 338350 =  25164150
 * ////////////////////////////////////////////////////////////////////////////
 */

 import { problem0006 } from './problem0006.js';

 const DEBUG =
   process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

 describe('problem 0006', () => {
   it('problem 0006 solution found', () => {
     expect.assertions(1);

     const solutionFound = 25164150;

     const calculated = problem0006(DEBUG);

     console.log(`PROBLEM 0006 solution found: ${calculated}`);

     expect(calculated).toBe(solutionFound);
   });
 });
