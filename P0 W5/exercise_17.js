// Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {

  if (String(angka).length === 1) {
    return angka;
  }
  else {

    // split manual

    var strSplit = [];

    var angkaStr = String(angka);

    for (i = 0; i < angkaStr.length; i++) {
      strSplit.push(angkaStr[i]);
    }

    // perkalian

    temp = strSplit[0];

    for (i = 1; i < strSplit.length; i++) {
      temp *= strSplit[i];
    }
    return kaliTerusRekursif(temp);
  }  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6