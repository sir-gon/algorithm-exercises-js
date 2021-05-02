function sum(arr) {
  return arr.reduce((previous, current) => previous + current, 0);
}

export default sum;
export { sum };
