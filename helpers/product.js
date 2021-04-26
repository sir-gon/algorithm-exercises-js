function product(arr) {
    return arr.reduce( (previous, current) => {
        return previous * current;
    }, 1);
}

export { product };
