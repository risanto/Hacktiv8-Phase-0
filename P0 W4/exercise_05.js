// Ubah Huruf

function ubahHuruf(kata) {
  
  var huruf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var res = '';

  for (i = 0; i < kata.length; i++) {
    for (j = 0; j < huruf.length; j++) {
      if (kata[i] == huruf[j]) {
        if (j != huruf.length-1) {
          res += huruf[j+1];
        }
        else {
          res += huruf[0];
        }
      }
    }
  }
  return res;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zebra')); // afcsb