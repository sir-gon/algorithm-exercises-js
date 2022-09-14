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
  divisorsUnique
};
