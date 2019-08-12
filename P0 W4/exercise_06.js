// Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  
  var count = 1;
  var remainder = 0;
  var temp = [];
  var res = [];

  for (i = count; i <= angka; i++) {
    if (angka % count === 0) {
      remainder = angka / count;
      temp = [remainder, count];
      var tempJoin = temp.join('');
      
      if (res.length === 0) {
        res = tempJoin;
      }
      else if (res.length > tempJoin.length) {
        res = tempJoin;
      }
    }
    count++;
  }
  return res.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2