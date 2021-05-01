function product(arr) {
  return arr.reduce((previous, current) => previous * current, 1);
}

export default product;
export { product };
