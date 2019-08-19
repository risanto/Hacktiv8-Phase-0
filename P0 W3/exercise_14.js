// Mengelompokkan Angka

/*
[Genap], [Ganjil], [Kelipatan 3]


*/

function mengelompokkanAngka(arr) {
  
  // Buat variabel penampung hasil akhir
  
  var res = [];
  
  // Buat variabel penampung masing-masing kelompok angka

  var genap = [];
  var ganjil = [];
  var kelipatan3 = [];

  // Loop untuk mengecek semua elemen di argumen

  for (i = 0; i < arr.length; i++) {

    // Jika elemen habis dibagi 3 maka masukkan ke kelompok 'kelipatan3'

    if (arr[i] % 3 == 0) {
      kelipatan3.push (arr[i]);
    }

    // Jika elemen habis dibagi 2 maka masukkan ke kelompok 'kelipatan2'

    else if (arr[i] % 2 == 0) {
      genap.push (arr [i]);
    }

    // Selain itu berarti bilangan ganjil, yang dimasukkan ke kelompok bilangan ganjil
    
    else {
      ganjil.push (arr [i]);
    }
  }

  res = [genap, ganjil, kelipatan3];
  return (res);
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]