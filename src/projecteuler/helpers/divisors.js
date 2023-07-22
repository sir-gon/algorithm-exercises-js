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

// eslint-disable-next-line consistent-return
export const nextPrimeFactor = (_target) => {
  const top = Math.abs(_target);
  let cycles = 0;

  if (top === 1) {
    return {
      'factor': 1,
      'carry': 1,
      'cycles': cycles
    };
  }

  let i = 2;
  while (i < top) {
    cycles += 1;
    if (top % i === 0) {
      return {
        'factor': i,
        'carry': top / i,
        'cycles': cycles
      };
    }
    i += 1;
  }

  return {
    'factor': i,
    'carry': top / i,
    'cycles': cycles + 1
  };
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
