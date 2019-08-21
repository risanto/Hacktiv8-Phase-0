// Password Generator

function changeVocals (str) {
  // ganti huruf vokal menjadi huruf setelah huruf vokal itu

  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var vocals = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  res = '';

  for (i = 0; i < str.length; i++) {
    if (!vocals.includes(str[i])) {
      res += str[i]
    }
    else {
      for (j = 0; j < letters.length; j++) {
        if (str[i] === letters[j].toUpperCase()) {
          res += letters[j+1].toUpperCase();
        }
        else if (str[i] === letters[j]) {
          res += letters[j+1]
        }
      }
    }
  }
  return res;
}

function reverseWord (str) {
  // balikkan kata yang sudah diganti huruf vokalnya
  return str.split("").reverse().join("");
}

function setLowerUpperCase (str) {

  // ganti huruf besar ke kecil, vice versa

  res = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += str[i].toLowerCase();
    }
    else if (str[i] === str[i].toLowerCase()) {
      res += str[i].toUpperCase();
    }
    else {
      res += str[i];
    }
  }
  return res;
}

function removeSpaces (str) {
  
  // hilangkan semua spasi di dalam string

  var res = '';

  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      res += str[i];
    }
  }
  return res;
}

function passwordGenerator (name) {
  
  // letakkan semua fungsi di sini

  if (name.length < 5) {
    return ("Minimal karakter yang diinputkan adalah 5 karakter");
  }

  var vocalsChanged = changeVocals (name);
  var wordReversed = reverseWord (vocalsChanged);
  var changedCases = setLowerUpperCase (wordReversed);
  var spacesRemoved = removeSpaces (changedCases);

  return spacesRemoved;
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'