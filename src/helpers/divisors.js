import { sum } from './sum.js';

export const ___DIVISORS_ABUNDANT___ = 'abundant';
export const ___DIVISORS_PERFECT___ = 'perfect';
export const ___DIVISORS_DEFICIENT___ = 'deficient';

export function divisors(target, debug = false) {
  let top = Math.abs(target);

  const divs = [];

  if (debug) console.log(`adding ${1}`);
  if (debug) console.log(`adding ${target}`);

  divs.push(1);
  if (target !== 1) {
    divs.push(target);
  }

  // fast divisors finding loop
  for (let i = 2; i < top; i++) {
    if (target % i === 0) {
      divs.push(i);
      divs.push(target / i);

      if (debug) console.log(`adding ${i}`);
    }
    top = target / i;
  }

  // sort divisors
  divs.sort((a, b) => a - b);

  return [...new Set(divs)];
}

export function abundancy(target, _DEBUG) {
  const divs = divisors(target);
  const divSum = sum(divs) - target;

  if (_DEBUG) {
    console.log(divs);
    console.log('target', target, 'divSum', divSum);
  }

  switch (true) {
    case divSum > target:
      return ___DIVISORS_ABUNDANT___;
    case divSum < target:
      return ___DIVISORS_DEFICIENT___;
    case divSum === target:
      return ___DIVISORS_PERFECT___;
    default:
      return null;
  }
}

export default {
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___,
  ___DIVISORS_ABUNDANT___,
  abundancy,
  divisors
};
