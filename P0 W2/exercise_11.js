//Logic Challenge - Balik Kata

/*
1. Buat string kosong untuk host string baru
2. Buat perulangan yang dimulai dari string.length-1 (huruf terakhir)
3. Selama i >= 0 loop akan terus berjalan
4. Decrement loop di setiap iterasi sampai stop di string[0]
5. Return string baru yang merupakan string terbalik
*/

function balikKata(kata) {
  
  var kataBalik = ''

  for (var i = kata.length - 1; i >= 0; i--) {
    
    kataBalik = kataBalik + kata [i];
  }

  return kataBalik
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS