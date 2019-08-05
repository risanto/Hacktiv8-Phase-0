// Tantangan Array 2 (Melooping menggunakan Array)

function dataHandling (n) {
  
  var input = [

    ["0001","Roman Alamsyah", "Bandar Lampung 21/05/1989", "Membaca"],
  
    ["0002", "Dika Sembiring", "Medan 10/10/1992", "Bermain Gitar"],
  
    ["0003", "Winona", "Ambon 25/12/1965", "Memasak"],
  
    ["0004", "Bintang Senjaya", "Martapura 6/4/1970", "Berkebun"]
    
  ];

  var result = ''

  for (i=0; i<n; i++) {

    result += '\n Nomor ID: ' + input[i][0];
    result += '\n Nama Lengkap: ' + input[i][1];
    result += '\n TTL: ' + input[i][2];
    result += '\n Hobi: ' + input[i][3] + '\n';

  }

  console.log(result)
  return result
  
}

dataHandling(4);
