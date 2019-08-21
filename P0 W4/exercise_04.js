// Mencari Modus

/*
Modus adalah angka dari deret yang paling sering muncul
Jika modus ada lebih dari 1 tampilkan yang paling pertama
Jika tidak ada modus atau semua angka di array sama, tampilkan -1
*/

function cariModus(arr) {
  
  // buat arrUnique yang tidak berisi duplikat angka dari arr
  
  var arrUnique = [];

  for (i = 0; i < arr.length; i++) {
    if (!arrUnique.includes(arr[i])) {
      arrUnique.push(arr[i]);
    }
  }

  // cek frekuensi tiap elemen arrUnique yang ada di arr, hitung jumlahnya dan push ke res yang berisi (number, count)

  var res = [];

  for (i = 0; i < arrUnique.length; i++) {
    var count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arrUnique[i] === arr[j]) {
        count++;
      }
    }
    res.push ([arrUnique[i], count]); 
  }

  // jika semua elemen arr sama, maka return -1
  
  if (arr.every (v => v === arr[0])) {
    return -1;
  }

  // jika tidak, loop res dan cek apakah res(count) lebih besar dari res(count) awal, jika lebih besar ganti tempIndex dengan i 
  
  else {
    var tempIndex = 0;

    for (i = 0; i < res.length; i++) {
      if (res[i][1] > res[tempIndex][1]) {
        tempIndex = i;
      }
    }

    // jika res(count)--frekuensi munculnya angka--hanya terhitung 1 kali, return -1 
    
    if (res[tempIndex][1] === 1) {
      return -1;
    }

    // jika tidak, maka munculkan res(number)  
    
    else {
      return res[tempIndex][0];
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 6, 6, 5, 6, 10, 10, 6, 5])); // 6