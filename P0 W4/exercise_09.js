// Cek AB

function checkAB(str) {

  var positionA = [];
  var positionB = [];
  var res = false;

  for (i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
      positionA.push(i);
    }
    else if (str[i] == 'b') {
      positionB.push(i);
    }
  }

  if (positionA.length == 0 || positionB.length == 0) {
    return false;
  }

  for (i = 0; i < positionA.length; i++) {
    for (j = 0; j < positionB.length; j++) {
      if (positionA[i] - positionB[j] === 4 || positionB[j] - positionA[i] === 4) {      
        res = true;
      }
    }
  }
  return res;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false