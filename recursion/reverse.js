console.log("Reverse - Recursion");

function reverseString(str){
    if(str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0]; // 
}

let s = 'HELLO000000';
let a = ['a','b','c','d']
console.log(reverseString(s));
console.log(reverseString(a));