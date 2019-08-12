// Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
  var kalimatArr = kalimat.split('');

  for (i = 0; i < kalimatArr.length; i++) {
    if (kalimatArr[i] == kalimatArr[i].toUpperCase()) {
      kalimatArr[i] = kalimatArr[i].toLowerCase();
    }
    else if (kalimatArr[i] == kalimatArr[i].toLowerCase()) {
      kalimatArr[i] = kalimatArr[i].toUpperCase();
    }
  }
  return kalimatArr.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"