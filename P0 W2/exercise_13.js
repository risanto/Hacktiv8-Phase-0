/*
1. Fungsi harus bisa mencari karakter tertentu di dalam string.
2. Buat variabel untuk menghitung berapa kali karakter 'x' dan 'o' muncul di dalam string.
3. Jumlah karakter 'x' harus sama dengan 'o', kalau tidak maka return false.
*/

function xo(str) {

  var x = (str.split("x").length-1);
  var o = (str.split("o").length-1);

  if (x === o) {
    return true

  } else {
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true