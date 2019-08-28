/*
1. Buat variabel untuk host jam (menit dibagi 60)
2. Buat variabel untuk host modulo dari menit
3. Pastikan menit yang ditampilkan selalu dalam dua digit
4. Return jam:menit dalam format 0:00
*/

function konversiMenit(menit) {

  var jam = Math.floor(menit / 60);
  var modMenit = menit % 60;

    if (modMenit < 10) {
      return jam + ':' + '0' + modMenit;

    } else {
      return jam + ':' + modMenit;
    }
  }

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00