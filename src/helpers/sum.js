function sum(arr = []) {
  if (arr.length === 0) return 0;
  return arr.reduce((previous, current) => previous + current, 0);
}

export default sum;
export { sum };
