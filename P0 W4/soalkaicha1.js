/*

SOAL 1

['foxes', 'wolves', 'foxes', 'foxes']


output:

{
  foxes: 3,
  wolves: 1
}
*/

var animals = ['foxes', 'wolves', 'foxes', 'foxes', 'sheep'];

function change() {
  var res = {};

  for (i = 0; i < animals.length; i++) {
    if (res[animals[i]] === undefined) {
      res[animals[i]] = 1
    }
    else {
      res[animals[i]] += 1
    }
  }
  console.log ("========================")
  return res;
}

console.log (change(animals))

/*

SOAL 2

var animals = [['foxes',4], ['wolves', 4], ['wolves', 1]]

output = {
  foxes: 4,
  wolves: 1
}
*/

console.log ("========================")

var animals = [['foxes', 2], ['wolves', 4], ['wolves', 1]]

var animal = {}

for(var i = 0; i < animals.length; i++){
    if(animal[animals[i][0]] === undefined){
      animal[animals[i][0]] = animals[i][1]
    }
    else {
      if(animal[animals[i][0]] > animals[i][1]){
        animal[animals[i][0]] = animals[i][1]
      }
    }
}

console.log(animal)

/*

SOAL 3

var animals = [{type: 'foxes', age:2}, {type: 'foxes', age:1}, {type: 'wolves', age:2}];

output = {
  foxes: 1,
  wolves: 2
}
*/

console.log ("========================")

var animals = [{type: 'foxes', age:2}, {type: 'foxes', age:1}, {type: 'wolves', age: 2}, {type: 'foxes', age:2}];

function change() {
  
  var hewan = {};

  for (i = 0; i < animals.length; i++) {
  
    if (hewan[animals[i].type] === undefined) {
      hewan[animals[i].type] = animals[i].age;
    }
    else {
      if (hewan[animals[i].type] > animals[i].age) {
        hewan[animals[i].type] = animals[i].age;
      }
    }
  }
  return hewan;
}

console.log (change(animals));