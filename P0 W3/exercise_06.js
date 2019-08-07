// Palindrome Angka

function angkaPalindrome(num) {

  //1. Convert num into an array
  
  var numString = num.toString ();

  console.log (numString);


  //2. Loop to find whether the reversed number is equal to the original number

  var numStringReverse = '';
  
  for (var i = numString.length - 1; i >= 0; i--) {
    
    numStringReverse = numStringReverse + numString [i];
  }

  if (numStringReverse === numString) {

    console.log (true);

    num ++;

    console.log (num);
  
  } else {

    // console.log (false);

    //   while (numStringReverse !== numString) {

    //     num++;

    //     var numStringReverseNum = 0 
    //   }
  }

}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001