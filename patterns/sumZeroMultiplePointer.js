console.log("Sum Zero - Multiple Pointer - Sorted Array");

function findSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let arr = [-4, -3, -2, -1, 0, -3, 4, 10];
console.log(findSumZero(arr));
