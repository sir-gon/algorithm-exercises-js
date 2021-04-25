let exp = 0;
let base = 0;
let total = 0;
let iPotencia;
let lPotencia;
let partial = 0;

do {
  base = 0;
  partial = 0;
  exp++;

  do {

    iPotencia = Math.pow(base, exp);
    lPotencia = Math.log(iPotencia) * Math.LOG10E + 1 | 0;
    
    if (lPotencia === exp) {
      console.log(`${base} ^ ${exp} = ${iPotencia} => ${lPotencia}`)
      total++;
      partial++;
    }

    base++;
  } while (exp >= lPotencia)
  
  console.log(`exp ${exp} => PARTIAL = ${partial}`)
  
} while (partial > 0 && exp < 2)

console.log(`TOTAL: ${total}`)
