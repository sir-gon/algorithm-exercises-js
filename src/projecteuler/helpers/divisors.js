import { logger as console } from '../../logger.js';

import { sum } from './sum.js';

export const ___DIVISORS_ABUNDANT___ = 'abundant';
export const ___DIVISORS_PERFECT___ = 'perfect';
export const ___DIVISORS_DEFICIENT___ = 'deficient';

export const divisors = (target) => {
  let top = Math.abs(target);
  const divs = [];

  divs.push(1);

  if (target === 1) {
    return divs;
  }

  console.debug(`Find divisors of ${target}`);

  // fast divisors finding loop
  let i = 2;
  while (i <= top) {
    top = target / i;
    const remainder = target % i;

    if (top > 2 && remainder === 0) {
      if (i <= top) {
        divs.push(i);
      }

      if (i < top) {
        divs.push(top);
      }
    }
    i += 1;
  }

  divs.push(target);

  console.debug(`collected divisors {divs}`);

  // sort divisors
  divs.sort((a, b) => a - b);
  console.debug(`sorted divisors {divs}`);

  return divs;
};

export const properDivisors = (target) => {
  const theDivisors = divisors(target);
  theDivisors.pop();

  return theDivisors;
};

export const nextPrimeFactor = (_target) => {
  const result = {
    factor: null,
    carry: null,
    cycles: null
  };

  const top = _target;
  let cycles = 0;
  if (top === 1) {
    result.factor = 1;
    result.carry = 1;
    result.cycles = cycles;

    return result;
  }

  let i = 2;
  while (i < top) {
    cycles += 1;
    const modulus = Math.floor(top % i);
    if (modulus === 0) {
      result.factor = i;
      result.carry = top / i;
      result.cycles = cycles;

      return result;
    }
    i += 1;
  }

  result.factor = i;
  result.carry = top / i;
  result.cycles = cycles + 1;

  return result;
};

export const primeFactors = (target) => {
  const factors = [];
  let cycles = 0;

  if (target === 1) {
    return { 'factors': [1], 'cycles': 1 };
  }

  let factor = target;
  while (factor !== 1) {
    const partial = nextPrimeFactor(factor);
    cycles += partial.cycles;

    factors.push(partial.factor);
    factor = partial.carry;
  }

  return { 'factors': factors, 'cycles': cycles };
};

export const isPrime = (target) =>
  target !== 1 && target === nextPrimeFactor(target).factor;

export const abundance = (target) => {
  const theDivisors = properDivisors(target);
  const divSum = sum(theDivisors);

  if (divSum > target) {
    return ___DIVISORS_ABUNDANT___;
  }

  if (divSum < target) {
    return ___DIVISORS_DEFICIENT___;
  }

  return ___DIVISORS_PERFECT___;
};

export default {
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___,
  ___DIVISORS_ABUNDANT___,
  abundance,
  divisors,
  nextPrimeFactor,
  primeFactors
};
