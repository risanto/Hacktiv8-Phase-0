// Most Frequest Largest Number

function sorting(arrNumber) {
  // urutkan arrNumber dari yang paling besar dan return arr[0]

  var res = arrNumber.sort(function(a,b){return b-a});

  return res;
}

function getTotal(arrNumber) {
  // cari frekuensi angka dari angka yang muncul di listSort
  res = '';

  if (arrNumber.length === 0) {
    return res;
  }
  count = 0;

  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[0] === arrNumber[i]) {
      count++;
    }
  }
  res += "angka paling besar adalah " + arrNumber[0] + " dan jumlah kemunculan sebanyak " + count + " kali"

  return res;
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