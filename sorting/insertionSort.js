console.log("Insertion Sort");

function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        let currentValue = arr[i];
        for(var j =i -1; j >= 0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([5,1,7,2,22,4,55,3]));