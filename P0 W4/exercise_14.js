// Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var res = [];

  if (arrPenumpang.length === 0) {
    return res;
  }
  else {
    for (i = 0 ; i < arrPenumpang.length; i++) {
      var obj = {};
      var tujuan = arrPenumpang[i][2];
      var naikDari = arrPenumpang[i][1];
      
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = naikDari;
      obj.tujuan = tujuan;

      var jarak = rute.indexOf(tujuan) - rute.indexOf(naikDari);

      obj.bayar = jarak * 2000;
      res.push(obj);
    }
    return res;
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]