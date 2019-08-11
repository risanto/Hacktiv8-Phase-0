// Mencari Modus

/*
Modus adalah angka dari deret yang paling sering muncul
*/

function cariModus(arr) {
  
  var count = 0;
  var temp = [];
  var res = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[i]);
        count++;
      }
    }
  }

  if (count === 0 || count > arr.length) {
    return -1;
  }
  else {
    res += temp[0];
    return res;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1