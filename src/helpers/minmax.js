export const minimum = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

export const maximum = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

export default { minimum, maximum };
