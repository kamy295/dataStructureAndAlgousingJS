console.log("Power - Recursion");

function power(num, p){
    if(p === 1) return num;
    else { 
        return num * power(num, p-1);
    }
}

console.log(power(2, 3))