import { sum } from './sum.js';

export const ___DIVISORS_ABUNDANT___ = 'abundant';
export const ___DIVISORS_PERFECT___ = 'perfect';
export const ___DIVISORS_DEFICIENT___ = 'deficient';

export const divisors = (target) => {
  let top = Math.abs(target);

  const divs = [];

  divs.push(1);
  if (target !== 1) {
    divs.push(target);
  }

  // fast divisors finding loop
  for (let i = 2; i < top; i++) {
    if (target % i === 0) {
      divs.push(i);
      divs.push(target / i);
    }
    top = target / i;
  }

  // sort divisors
  divs.sort((a, b) => a - b);

  return [...new Set(divs)];
};

export const abundance = (target) => {
  const divs = divisors(target);
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
  divisors
};
