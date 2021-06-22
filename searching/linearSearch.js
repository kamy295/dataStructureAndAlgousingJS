console.log("Linear Search");

function linearSearch(arr, s){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === s) return i     
    }
    return -1
}

let arr = ["jim", 'jam', 'oreo', 'parle', 'marie', 'kitkat', 'cadbury', "wadapav"];
let s = "wadapava";
console.log(linearSearch(arr, s))