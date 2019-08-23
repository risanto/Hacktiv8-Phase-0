// Most Frequent Highest Number

// Munculkan angka yang paling besar serta berapa kali angka tersebut muncul di arrNumber

function sorting(arrNumber) {

  var temp = 0;
  var tempIndex = 0;
  
  // loop dan temukan angka terbesar, serta simpan tempIndex sebagai referensi lokasi angka, lalu push di variabel kosong
  
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > temp) {
      temp = arrNumber[i];
      tempIndex = i;
    }
  }

  var res = [];
  res.push(temp);

  // gunakan tempIndex sebagai referensi untuk push angka2 lainnya selain yang sudah dimasukkan ke res

  for (i = 0; i < arrNumber.length; i++) {
    if (i !== tempIndex) {
      res.push(arrNumber[i]);
    }
  }

  return res;
}

function getTotal(arrNumber) {

  // cari frekuensi dari angka terbesar yang muncul di listSort
  
  res = '';

  // base case ketika tidak ada input

  if (arrNumber.length === 1) {
    return res;
  }

  // loop untuk menghitung berapa kali angka tersebut muncul

  else {
    count = 0;

    for (i = 0; i < arrNumber.length; i++) {
      if (arrNumber[0] === arrNumber[i]) {
        count++;
      }
    }
    res += "angka paling besar adalah " + arrNumber[0] + " dan jumlah kemunculan sebanyak " + count + " kali"

    return res;
  }
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''