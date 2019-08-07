function cariMean(arr) {

  // buat variabel container dari hasil akhir dan hasil sementara

  var mean = 0;
  var addition = 0;

  // loop array dan tambahkan setiap hasilnya di addition

  for (i = 0; i < arr.length; i++ ) {
    addition += arr[i]
  }

  // bulatkan hasil dari addition dibagi panjang array

  mean = Math.round (addition/arr.length);
  return mean;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7