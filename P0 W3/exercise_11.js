function tentukanDeretAritmatika(arr) {
  var diffArr = [];

  for (i = 0; i < arr.length-1; i++) {
    var diff = arr [i+1] - arr [i];
    diffArr.push (diff);
  }
  var checkBool = [];

  for (i = 0; i < diffArr.length-1; i++) {
    if (diffArr[i] === diffArr[i+1]) {
      checkBool.push (1);
    }
    else {
      checkBool.push (0);
    }
  }

  if (checkBool.every (i => i == true)) {
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false