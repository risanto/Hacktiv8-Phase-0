function tentukanDeretGeometri(arr) {
  for (i = 0; i < arr.length; i++) {
    var temp = [];
    var res = '';

    for (j = 0; j < i; j++) {
      temp.push (arr[j+1]/arr[j]);
    }
  
    if (temp.every (i => i == temp [0])) {
      res = true;
    } 
    else {
      res = false;
    }
  }
  return res;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false