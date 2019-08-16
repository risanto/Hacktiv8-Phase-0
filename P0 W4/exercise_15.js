// Highest Score

//CARA 1

/*
function highestScore (students) {

  var res = {};
  
  for (i = 0; i < students.length; i++) {
    var tempClass = students[i].class;
    var tempName = students[i].name;
    var tempScore = students[i].score;

    for (j = 0; j < students.length; j++) {
      if (students[j].class === tempClass && students[j].score > tempScore) {
        tempClass = students[j].class;
        tempScore = students[j].score;
        tempName = students[j].name;
      }
    }

    res[tempClass] = {
      name: tempName,
      score: tempScore
    }
  }
  console.log ("============================")
  return res;
}
*/

// CARA 2

function highestScore (students) {
  
  var output = {};

  for (i = 0; i < students.length; i++) {
    if (output[students[i].class] === undefined) {
      output[students[i].class] = {
        name: '',
        score: 0
      };
    }
    if (students[i].score > output[students[i].class].score) {
      output[students[i].class].name = students[i].name,
      output[students[i].class].score = students[i].score
    } 
  }
  return output;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}