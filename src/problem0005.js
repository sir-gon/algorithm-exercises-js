/**
 * Smallest multiple
 *
 * https://projecteuler.net/problem=5
 *
 *
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/// ////////////////////////////////////////////////////////////////////////////
// NOTE: I think a better way to solve problem 0005.
// If I got prime numbers in beetwen [1,20], can I test them as
// prime factors, testing a combinatorial exponents that satisfies
// the condition that the number found is divisible by all
// the numbers in beetwen [1,20],
// Instead, this solution is brute force.

/// ////////////////////////////////////////////////////////////////////////////
// Solution found after a LONG TIME running this routine:
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';
import { primeFactors } from './helpers/divisors.js';

function _increase(_element, _group) {
  const group = _group;
  if (Object.hasOwn(group, _element)) {
    group[_element] += 1;
  } else {
    group[_element] = 1;
  }

  return _group;
}

function _replaceMaximum(_element, count, _group) {
  const group = _group;
  if (Object.hasOwn(group, _element)) {
    const elem = _group[_element];
    group[_element] = count > elem ? count : elem;
  } else {
    group[_element] = count;
  }

  return _group;
}

function _primeFactorsCollection(_factors) {
  let collection = {};

  _factors.forEach((factor) => {
    collection = _increase(factor, collection);
  });

  return collection;
}

function problem0005(_bottom, _top) {
  const minimumPrimeFactors = {};
  let result = 1;
  let cycles = 0;

  for (let i = _bottom; i <= _top; i++) {
    const primes = primeFactors(i);
    cycles += primes.cycles;

    const factors = _primeFactorsCollection(primes.factors);
    cycles += primes.length;

    logger.info(`Prime Factors of ${i} list    => ${primes}`);
    logger.info(`Prime Factors of ${i} grouped => ${factors}`);

    for (const [factor, quantity] of Object.entries(factors)) {
      cycles += 1;
      _replaceMaximum(factor, quantity, minimumPrimeFactors);
    }

    logger.info(`Prime Factors of ${i} grouped => ${minimumPrimeFactors}`);
  }

  for (const [factor, quantity] of Object.entries(minimumPrimeFactors)) {
    cycles += 1;
    result *= factor ** quantity;
  }

  logger.info(`Problem 0005: ${result} in ${cycles} cycles`);
  return result;
}

export default problem0005;
export { problem0005 };
