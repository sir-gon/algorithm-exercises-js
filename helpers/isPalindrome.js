function isPalindrome(n) {
    // console.log(`${ n.toString().split("").reverse().join("") }`);
    // console.log(`${ n.toString()}`) ;
    
    return n.toString().split("").reverse().join("") === n.toString();
}

export { isPalindrome };
