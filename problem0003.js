// problem0003.js

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//////

// divisors calculated = 71,839,1471,6857,59569,104441,486847,1234169,5753023,10086647,87625999,408464633,716151937,8462696833

//////

let target = 600851475143
let top = target
let i;

let n = 100;

// 1 => 10 / 1 => 10
// 2 => 10 / 2 => 5
// 3 => 10 / 3 => X
// 3 => 10 / 4 => X

let divs = [];

// fast divisors finding loop
for (i=1; i < top; i++)
{
    if(target % i === 0 && i != 1 && i != target) {

        divs.push(i);
        divs.push(target / i)

        top = target / i;
        console.log(`adding ${i}`)
    }
}

// sort divisors
divs.sort((a, b) => a - b);
// print all divisors
console.log(`All divisors of ${target}: ${divs}`)

// Prime checker
function isPrime(n) {
    for(let i=2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    
    return true;
} 

let middle;
if (divs.length % 2 === 0)
{
    middle = (divs.length/2) -1;
} else {
    middle = (divs.length) - 1;    
}

// check half divisors, each is Prime? wich is largest?
let maxPrimeFactor;

i = middle;
do
{
    let prime = isPrime(divs[i]);

    console.log(`${divs[i]} is Prime? ${prime}`)

    if(prime)
        maxPrimeFactor = divs[i];
    i--
} while(i >= 0 && !maxPrimeFactor)

console.log(`${maxPrimeFactor}`)
