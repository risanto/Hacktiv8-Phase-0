// Faktor Persekutuan Terbesar

/*
FPB adalah bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan
*/

function fpb(angka1, angka2) {
  
  var count1 = 1;
  var count2 = 1;
  var factor1 = [];
  var factor2 = [];
  var res = 0;

  while (count1 < angka1) {

    if (angka1 % count1 == 0) {
      factor1.push(count1);
    }
    count1++;
  }

  while (count2 < angka2) {

    if (angka2 % count2 == 0) {
      factor2.push(count2);
    }
    count2++;
  }

  if (factor1[factor1.length-1] === factor2[factor2.length-1]) {
    res = factor1[factor1.length-1];
    return res;
  }

  for (i = factor1.length-1; i > 0; i--) {
    for (j = factor2.length-1; j > 0; j--) {
      if (factor1[i] === factor2[j]) {
        res = factor1[i];
        return res;
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1