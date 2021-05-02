function fiboStep(_step, _last1, _last2) {
  let last1 = _last1;
  let last2 = _last2;

  if (!_last1) last1 = 1;
  if (!_last2) last2 = 0;

  return last2 + last1;
}

// let fibo = fiboStep(0, 0, 0);

// console.log(`RESULT = ${fibo}`); // Result found 4613732

export default fiboStep;
export { fiboStep };
