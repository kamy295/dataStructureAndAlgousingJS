console.log("Max Sum of N elements in a String - Sliding Window");

function maxSumofNStringSlidingWindow(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;
    for(let i = 0; i < n; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i] // [2,6,9,2,1] -> 17 = 17 - 2 + (6+9)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

let s = [2,6,9,2,1,8,5,6,3]
console.log(maxSumofNStringSlidingWindow(s, 3))