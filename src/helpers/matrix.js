export const matrix = (m, n, init) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(m).fill(init));
  }

  return result;
};

export default { matrix };
