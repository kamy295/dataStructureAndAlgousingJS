console.log("Sum Range - Recursion");

//recursion 
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//maths
function sum(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumRange(4));
console.log(sum(4));
