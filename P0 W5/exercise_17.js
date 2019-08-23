// Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
  
  var angkaStr = String(angka);

  if (angkaStr.length === 1) {
    return angka;
  }

  var angkaSplit = angkaStr.split();

  console.log (angkaSplit)

  res = Number(angkaStr[0]) * Number(angkaStr.slice(1)[0]);

  console.log (res);

  if (String(res).length === 1) {
    return res;
  }
  else {
    return kaliTerusRekursif(res)
  }
}

// TEST CASES
// console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6