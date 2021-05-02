// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

///////////////////////////////////////////////////////////////////////////////

// const top

function problem0009(_DEBUG) {

  let a, b, c;

  const balance = 1000;

  a = 1;
  b = 2;
  c = 997;

  if (_DEBUG) console.log(`a = ${a} | b = ${b} | c = ${c}`)

  let found;

  function isPythagoreanTriplet(a, b, c) {
    return ( Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) );
  }

  while ( a < b && !found) {

    b = a+1;

    while ( a < b  && b < c && !found) {

      // TESTING
      if (_DEBUG) console.log(`TESTING: a = ${a} b = ${b} c = ${c}`)

      if( isPythagoreanTriplet(a, b, c))
      {
        found = {a, b ,c}
        //console.log(`FOUND: a = ${a} b = ${b} c = ${c}`)

      }

      // INCREASE
      b++;
      c = balance - b - a;
    }

    a++;
  }

  if (_DEBUG) console.log(`FOUND: a = ${found.a} b = ${found.b} c = ${found.c}`)
  if (_DEBUG) console.log(`PRODUCT: a * b * c = ${found.a*found.b*found.c}`)

  return found.a*found.b*found.c;
}

export default problem0009;
export { problem0009 };
