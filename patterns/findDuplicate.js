console.log("Find the Duplicate in an Array and their count");

function findDuplicate(arr){
    let count = {};
    let result = [];
    for(let i = 0; i<arr.length; i++){
        count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]] = 1;
        // if(count[arr[i]]){
        //     count[arr[i]] += 1;
        // } else {
        //     count[arr[i]] = 1;
        // }
    }
    //console.log(count)
    
    for(let props in count){
        if(count[props] >= 2){
            console.log(count)
        }
    }
    //     if(count[props] >= 2){
    //        // console.log(props + " counted " + count[props] + " times");
    //         result.push(count[props]);
    //     }
        
    // }

    // console.log(result);
}


//let arr = [2,3,1,4,"a","a","a","a",'#','#','#','#','@','@',2,5,2,8,5];
let arr = [1,1,1,2,2,2,2,3,3,4,4,4,4,5,15,22,33,55];
findDuplicate(arr);