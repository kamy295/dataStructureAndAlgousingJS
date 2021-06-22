console.log("Product of Array - Recursion ");

function productOfArray(a) {
    if(a.length === 0)  return 1;
    let n = a.length-1
    function helperPoA(a, n){
        if (n === 0) return a[n];
        else return (a[n] * helperPoA(a, n - 1));
    }
    return helperPoA(a, n)
}


function productOfArray2(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

var s = [1, 2, 3, 4, 5,6];
console.log(productOfArray(s));
console.log(productOfArray2(s));
