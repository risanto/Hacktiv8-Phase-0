// Mencari Median

/*
Median adalah nilai tengah deret bilangan
Jika genap maka dua nilai tengah akan dirata2
*/

function cariMedian(arr) {
  var median = Math.round((arr.length-1)/2);
  var index = arr[median];
 
  if (arr.length % 2 === 0) {
    median = [Math.floor((arr.length-1)/2), Math.ceil((arr.length-1)/2)];
    index = (arr[median[0]] + arr[median[1]])/2;
  }
  
  return index;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5