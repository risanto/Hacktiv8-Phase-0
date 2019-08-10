// Target Terdekat

function targetTerdekat(arr) {
  var positionO = arr.indexOf ("o");

  var temp = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'x') {
      temp.push (i);
    }
  }
  if (temp.length === 0) {
    return 0;
  }

  var res = [];

  for (i = 0; i < temp.length; i++) {

    if (temp[i] > positionO) {
      res.push (temp[i]- positionO);
    }
    else if (positionO > temp[i]){
      res.push (positionO - temp[i]);
    }
    else {
      res = positionO;
    }
  }
  res.sort(function(a,b) {return a > b});
  return res[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2