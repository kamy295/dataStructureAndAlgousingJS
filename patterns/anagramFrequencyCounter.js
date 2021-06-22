console.log("Anagram - Frequency Pattern");

function checkAnagram(a, b){
    if(a.length !== b.length) return false;

    let lookup = {};
    for (let i = 0; i < a.length; i++){
        let letter = a[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < b.length; i++){
        let letter = b[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        console.log(lookup)

        }
    }
    console.log(lookup)
    return true
}


let a = "awesome";
let b = "someeaw";

console.log(checkAnagram(a, b))