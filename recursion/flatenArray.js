console.log("Flatten the Array - Recursion");

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

let a = [1, [2, 3], 4, [2, 5, 4], 5, 8];
console.log(flatten(a));
