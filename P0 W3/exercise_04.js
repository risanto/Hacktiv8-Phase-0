// Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 () {

  /// splice untuk memodifikasi variabel

  input.splice (1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");

  input.splice (4, 1, "Pria", "SMA Internasional Metro");

  console.log (input);


  /// split untuk memisahkan tanggal/bulan/tahun

  var ddMmYy = input[3]

    // console.log (ddMmYy);

  var ddMmYySplit = ddMmYy.split ("/");

    // console.log (ddMmYySplit);

  var bulan = ddMmYySplit[1];

    // console.log (bulan);

    // switch case bulan

  switch (bulan) {

    case '01':
      var month = 'Januari';
      break; 

    case '02':
      var month = 'Februari';
      break;

    case '03':
      var month = 'Maret';
      break;

    case '04':
        var month = 'April';
        break; 

    case '05':
      var month = 'Mei';
      break;
      
    case '06':
        var month = 'Juni';
        break;
        
    case '07':
        var month = 'Juli';
        break;
        
    case '08':
        var month = 'Agustus';
        break;
        
    case '09':
        var month = 'September';
        break;
        
    case '10':
        var month = 'Oktober';
        break;
        
    case '11':
        var month = 'November';
        break;
        
    case '12':
        var month = 'Desember';
        break;  
  }

  console.log (month);


  /// sort descending

  var ddMmYySplitSort = ddMmYySplit.sort (function(a, b) {return b - a})
  
  console.log (ddMmYySplitSort);


  /// join semua elemen dan pisahkan dengan strip (-)

  var ddMmYySplit = ddMmYy.split ("/");

    // console.log (ddMmYySplit);
  
  var ddMmYySplitJoin = ddMmYySplit.join ('-');
  
  console.log (ddMmYySplitJoin);


  /// batasi nama elemen ke-2 sebanyak 15 karakter

  var nama = input[1];

    // console.log (nama);

  var namaSlice = nama.slice (0,15);

  console.log (namaSlice);
}

dataHandling2 (input)