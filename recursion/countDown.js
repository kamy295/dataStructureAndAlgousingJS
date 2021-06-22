console.log("Countdown - Recursion");

function countDown(s){
    if(s <= 0){
        console.log("All Done!");
    } else {
        console.log(s); 
        countDown(s-1)// 5 - countDown(4) -> 5 - 4 -
    }
}
countDown(5);