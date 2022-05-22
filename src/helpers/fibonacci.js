export const fiboStep = (_last1 = 1, _last2 = 0) => {
  const last1 = _last1;
  const last2 = _last2;

  return last2 + last1;
};

export default { fiboStep };
