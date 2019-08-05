function balikString(string) {

  var stringBalik = '';

  for (var i = string.length - 1; i >= 0; i--) {
    
    stringBalik += string [i];
  }

  return stringBalik;
}

console.log(balikString("Hello World!"));
console.log(balikString("Ayo semangat di Week 3!"));