// Palindrome Angka

function angkaPalindrome (num) {

  // buat variabel kondisi awal yang mengasumsikan num bukan palindrome

  var palindrome = false;

  // buat loop untuk mengecek ketika num bukan palindrome

  while (palindrome === false) {

    // buat variabel untuk contain num yang dibalik dalam bentuk string
    
    var numRev = num.toString().split('').reverse().join('');

    // buat beberapa kondisi

    // 1. jika num dan numRev sama DAN num < 10: num tambah 1
    
    if (num == numRev && num < 10) {
      num ++;
      return num;
    }

    // 2. jika num dan numRev sama DAN num >= 10: num merupakan palindrome

    else if (num == numRev && num >= 10) {
      palindrome = true;
      return num;

    // 3. selain itu, maka terus tambah num sampai berhenti ketika angka merupakan palindrome

    }
    else {
      num++
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001