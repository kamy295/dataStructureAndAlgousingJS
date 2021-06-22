console.log("Factorial - Recursion");

function factorial(s){
    if(s <= 1) return 1;
    else{
        return s * factorial(s-1); // 4 * fac(3) -> 4 * 3 * fac(2) -> 4 * 3 * 2 * fac(1)
    }
}

console.log(factorial(5))