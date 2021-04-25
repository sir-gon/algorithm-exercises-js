// problem004.js

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

///////////////////////////////////////////////////////////////////////////////
// NOTES ABOUT THE SOLUTION:
// This solution cycles to test all pairs of factors between 111 and 999 that meet the condition of generating a palindrome and saves the largest found.
// I think there must be another optimal solution to avoid testing all cases
// cutting the loop around the largest factor pair
// That's why I thought about doing the loop from highest to lowest.
///////////////////////////////////////////////////////////////////////////////

let bottom = 111
let top = 999

function isPalindrome(n) {
    // console.log(`${ n.toString().split("").reverse().join("") }`);
    // console.log(`${ n.toString()}`) ;
    
    return n.toString().split("").reverse().join("") === n.toString();
}

// Test isPalindrome condition
// console.log(isPalindrome('1000'));
// console.log(isPalindrome('1001'));
// console.log(isPalindrome('3443'));
// console.log(isPalindrome('3435'));


let i;
let j;
let foundi;
let foundj;
let foundPalindrome;

// Find all cases
i = top;
do {

    j = top;
    do {

        if( isPalindrome( j * i ) )
        {   
            console.log(`FOUND: ${i} x ${j} = ${j * i} is Palindrome`);
            
            if(!foundPalindrome || (i*j) > foundPalindrome)
            {
                foundi = i;
                foundj = j;
                foundPalindrome = (i*j);
            }

        } else {
            // console.log(`FOUND: ${i} x ${j} = ${j * i} is NOT Palindrome`);
        }

        j--;
    }
    while ( j >= bottom /*&& !(found1 && found2)*/)
    

    i--;
}
while ( i >= bottom /* && !(found1 && found2) */ )

console.log(`Largest Palindrome => ${foundi} 𝗑 ${foundj} = ${foundPalindrome}`);
