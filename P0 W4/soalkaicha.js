/*
['foxes', 'wolves', 'foxes', 'foxes']


output:

{
  foxes: 3,
  wolves: 1
}
*/

var animals = ['foxes', 'wolves', 'foxes', 'foxes'];

function change() {
  var res = {};
  var foxCount = 0;
  var wolfCount = 0;

  for (i = 0; i < animals.length; i++) {

    if (res.foxes === res[animals[i]]) {
      foxCount++;
      res[animals[i]] = foxCount;
      console.log (i);
    }
    else if (res.wolves === res[animals[i]]) {
      wolfCount++;
      res[animals[i]] = wolfCount;
      console.log (i);
    }
  }
  return res;
}

console.log (change(animals));