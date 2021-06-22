console.log("Bubble Sort");

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length-1; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5,2,7,3,9,1,0,55,11,45]))