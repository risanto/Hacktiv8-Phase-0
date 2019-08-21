//  Makan Terus Rekursif

// buat function untuk me-return berapa kali customer menambah porsi makanan
// selama ada sisa waktu 15 menit maka bisa menambah satu porsi

function makanTerusRekursif(waktu) {
  // siapkan base case yang akan menjadi limit rekursif
  
  if (waktu < 1) {
    return 0
  }

  var waktuSisa = waktu - 15
  
  return 1 + makanTerusRekursif(waktuSisa)
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0