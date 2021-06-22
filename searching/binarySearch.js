console.log("Binary Search");

function binarySearch(arr, s) {
  let left = 0;
  let right = arr.length - 1; //9
  let mid = Math.floor((left + right)  / 2);
  while (arr[mid] !== s) {
    if (left > right) return -1;

    s < arr[mid] ? right = mid - 1 : left = mid + 1;
    // if (s < arr[mid]) right = mid - 1
    // else left = mid + 1;
    
    mid = Math.floor((left + right) / 2);
  }
  return mid;
}
let arr = [1, 3, 4, 5, 7, 8, 11, 12, 13, 15, 25, 28];
let s = 8;
console.log(binarySearch(arr, s));
