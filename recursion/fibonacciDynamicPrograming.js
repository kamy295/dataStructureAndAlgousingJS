console.log("Fibonacci using Dyanmic Programming and Memoization");

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(0));


for(let i = 0; i <= 10; i++) {
  console.log(fib(i));
}