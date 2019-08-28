//1. Menyusun barisan bintang

var rows1 = 5;

for (var i = 1; i <= rows1; i++) {
  console.log ('*');
}

//2. Menyusun barisan bintang dengan nested looping

var rows2 = 5;

for (var i = 1; i <= rows2; i++) {
  star = '';

  for (var j = 1; j <= rows2; j++) {
    star += '*';
  }

  console.log (star);
}

//3. Menyusun barisan tangga bintang dengan nested looping

var rows3 = 5;

for (var i = 1; i <= rows3; i++) {
  star = '';

  for (var j = 1; j <= i; j++) {
    star += '*';
  }

  console.log (star);
}
