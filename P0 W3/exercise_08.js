// Pasangan Angka Terbesar

function pasanganTerbesar(num) {

  // split num menjadi masing-masing satu angka dan contain dalam array

  var numArr = num.toString().split("");
  var pasanganArr = [];

  // loop array dan gabungkan tiap dua angka, masukkan semua hasil ke array

  for (i = 0; i <= numArr.length-2; i++) {
    var pasangan = numArr[i] + numArr[i+1];
    pasanganArr.push(pasangan)
  }

  // cari angka tertinggi di dalam array

  return Math.max.apply (null, pasanganArr);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99