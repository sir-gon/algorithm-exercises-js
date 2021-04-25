// problem0005.js

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let test;
let found;
let i, j;
let top, bottom;

top = 20;
bottom = 1;

test = 1
// test = 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20 // Just to test end condition
// 
do {

    i=2
    fail = false;
    do{

        if(test % i != 0)
        {
            fail = true;
            console.log(`Fail ${test} not divisible by ${i}`);
        } else {
            console.log(`Testing: ${test} divisible by ${i}`);
        }

        i++;
    }
    while(i <= top && !fail)

    if(!fail) {
        found = test;
    }

    fail = false;
    test++;
    
} while (!found)

console.log(`FOUND: ${found} divisible by any element beetwen ${bottom} and ${top}`);