function groupAnimals(animals) {
  animals.sort (function(a,b) {return a > b});

  // buat variabel penampung animals

  var cages = [];

  // sort animals berdasarkan huruf

  animals.sort();

  // masukan animals pertama sebagai referensi untuk animals selanjutnya

  cages.push ([animals[0]])

  // mulai looping process untuk mengecek semua elemen di array argument

  for (i = 1; i < animals.length; i ++ ) {

    // jika animals memiliki huruf depan yang sama dengan animals sebelumnya, masukkan ke cages sebelumnya 

    if (animals[i-1][0] == animals[i][0]) {
      cages[cages.length-1].push (animals[i]);
    }

    // jika tidak, buat cages baru
    
    else {
      cages.push ([animals[i]]);
    }
  }
  return cages;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]