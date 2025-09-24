/**
 * @link Problem definition [[docs/projecteuler/problem0005.md]]
 */
/// ////////////////////////////////////////////////////////////////////////////
// Using prime factors approach.
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';
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

  for (const factor of _factors) {
    collection = _increase(factor, collection);
  }

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
    cycles += primes.factors.length;

    console.debug('Prime Factors of %d list    => %o', i, primes);
    console.debug('Prime Factors of %d grouped => %o', i, factors);

    for (const [factor, quantity] of Object.entries(factors)) {
      cycles += 1;
      _replaceMaximum(factor, quantity, minimumPrimeFactors);
    }

    console.debug('Prime Factors of %d grouped => %o', i, minimumPrimeFactors);
  }

  for (const [factor, quantity] of Object.entries(minimumPrimeFactors)) {
    cycles += 1;
    result *= factor ** quantity;
  }

  console.log('Problem 0005: %d in %d cycles', result, cycles);
  return result;
}

export default problem0005;
export { problem0005 };
