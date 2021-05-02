function matrix(m, n, init, _DEBUG) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(m).fill(init));
  }

  if (_DEBUG) console.table(result);
  return result;
}

export default matrix;
export { matrix };
