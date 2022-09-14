import logger from '../logger.js';

import { sum } from './sum.js';

export const ___DIVISORS_ABUNDANT___ = 'abundant';
export const ___DIVISORS_PERFECT___ = 'perfect';
export const ___DIVISORS_DEFICIENT___ = 'deficient';

export const divisors = (target) => {
  let top = Math.abs(target);
  const divs = [];

  if (target === 1) {
    divs.push(1);
    return divs;
  }

  logger.debug(`Find divisors of ${target}`);

  // fast divisors finding loop
  let i = 1;
  while (i <= top) {
    if (target % i === 0) {
      divs.push(i);
      divs.push(target / i);
    }
    i += 1;
    top = target / i;
  }

  logger.debug(`collected divisors {divs}`);

  // sort divisors
  divs.sort((a, b) => a - b);
  logger.debug(`sorted divisors {divs}`);

  return divs;
};

export const divisorsUnique = (target) => {
  let divs = divisors(target);
  divs = [...new Set(divs)];

  logger.debug(`unique divisors ${divs}`);

  return divs;
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
  while (i <= top) {
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
  const divs = divisorsUnique(target);
  // Due the definition of https://mathworld.wolfram.com/AbundantNumber.html
  const comparator = 2 * target;
  const divSum = sum(divs);

  if (divSum > comparator) {
    return ___DIVISORS_ABUNDANT___;
  }

  if (divSum < comparator) {
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
  divisorsUnique,
  nextPrimeFactor,
  primeFactors
};
