export const sum = (numList = []) => {
  if (!numList || numList.length === 0) return 0;
  return numList.reduce((previous, current) => previous + current, 0);
};

export default { sum };
