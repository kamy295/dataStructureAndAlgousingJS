console.log("Count Unique Values - Multiple Pointers");

function countUniqueValues(s){
    if(s.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < s.length; j++){
        // console.log("i, j, s[i], s[j] before if", i, j, s[i], s[j]);
        if(s[i] !== s[j]){
            i++;
            s[i] = s[j];
            // console.log("i, j, s[i], s[j]", i, j, s[i], s[j]);
        }
    }
    return i + 1;
}

//  let s = [1,1,1,2,2,2,2,3,3,4,4,4,4,5,15,22,33,55];
//let s = [];
let s = "aawweessoomm"
console.log(countUniqueValues(s));
if(s.length === countUniqueValues(s) ) console.log("Its unique")
else console.log("has duplicates")