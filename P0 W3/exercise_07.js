// Hitung Jumlah Kata

function hitungJumlahKata(kalimat) {

  // sediakan var temp untuk menampung string yang kemudian akan dipush ke arr lalu direset lagi

  var arr = [];
  var temp = '';

  // mulai proses looping untuk mengecek semua huruf di kalimat

  for (i = 0; i < kalimat.length; i++) {

    // jika indeks bukan spasi, tambah string ke dalam temp

    if (kalimat[i] !== ' ') {
      temp += kalimat[i];
    }

    // jika indeks adalah spasi, maka push temp 

    else {
      arr.push(temp);
      temp = '';
    }
  }

  // pastikan jika temp setelah spasi juga dipush 
  
  arr.push(temp);
  temp = '';
  return (arr.length); 
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5