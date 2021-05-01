// problem0005.js

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

/// ////////////////////////////////////////////////////////////////////////////
// NOTE: I think a better way to solve problem 0005.
// If I got prime numbers in beetwen [1,20], can I test them as
// prime factos, testing a combinatorial exponents that satisfies
// the condition that the number found is divisible by all
// the numbers in beetwen [1,20],
// Instead, this solution is brute force.

/// ////////////////////////////////////////////////////////////////////////////
// Solution found after a LONG TIME running this routine:
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

let test;
let found;
let i;
let j;
let top;
let bottom;

top = 20;
bottom = 1;

test = 1;
// test = 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20 // Just to test end condition
//
do {
  i = 2;
  fail = false;
  do {
    if (test % i != 0) {
      fail = true;
      console.log(`Fail ${test} not divisible by ${i}`);
    } else {
      console.log(`Testing: ${test} divisible by ${i}`);
    }

    i++;
  } while (i <= top && !fail);

  if (!fail) {
    found = test;
  }

  fail = false;
  test++;
} while (!found);

console.log(
  `FOUND: ${found} divisible by any element beetwen ${bottom} and ${top}`
);
