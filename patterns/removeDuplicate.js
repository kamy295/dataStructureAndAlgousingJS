console.log("Remove Duplicate Elements from an Array");

function removeDuplicates(chars){
    let uniqueChars = chars.filter((c, index) => {
        return chars.indexOf(c) === index;
    });
    console.log(uniqueChars)
}

let arr = [2,3,1,4,"a","a","a","a",'#','#','#','#','@','@',2,5,2,8,5];
console.log(removeDuplicates(arr));