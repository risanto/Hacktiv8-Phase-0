// Toko X

/*
output:
1. product
2. shoppers
3. leftOver
4. totalProfit
*/

function countProfit(buyers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var res = [];

  if (buyers.length === 0) {
    return res;
  }
  else {
    for (i = 0; i < listBarang.length; i++) {
      var obj = {};
      var product = listBarang[i][0];
      var shoppers = [];
      var price = listBarang[i][1];
      var totalAmount = 0;

      for (j = 0; j < buyers.length; j++) {
        var leftOver = listBarang[i][2] - totalAmount;

        if (product === buyers[j].product && leftOver >= buyers[j].amount) {
          shoppers.push(buyers[j].name);
          totalAmount += buyers[j].amount;
        }
        leftOver = listBarang[i][2] - totalAmount;
      }
      obj.product = product;
      obj.shoppers = shoppers;
      obj.leftOver = leftOver;
      obj.totalProfit = price * totalAmount;
      res.push(obj);
    }
    return res;
  }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([
  {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
  {name: 'Devi', product: 'Baju Zoro', amount: 1},
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]