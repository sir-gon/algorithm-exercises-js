/**
 * Largest palindrome product
 *
 * https://projecteuler.net/problem=4
 *
 * Solution found: Largest Palindrome => 993 𝗑 913 = 906609
 */

 import { problem0004 } from './problem0004.js';

 const DEBUG =
   process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

 describe('problem 0004', () => {
   it('problem 0004 solution found', () => {
     expect.assertions(1);

     const solutionFound = 906609;

     const calculated = problem0004(DEBUG);

     console.log(`PROBLEM 0004 solution found: ${calculated}`);

     expect(calculated).toBe(solutionFound);
   });
 });
