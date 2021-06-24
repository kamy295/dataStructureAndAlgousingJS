console.log("Fibonacci - Recursion");

function Fibonacci(s) {
  if (s < 2) return s;
  else {
    return Fibonacci(s - 1) + Fibonacci(s - 2);
  }
}

for(let i = 0; i <= 9; i++) {
    console.log(Fibonacci(i));
}


 //console.log(Fibonacci(10));
// console.log(recursiveRange(10));

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}