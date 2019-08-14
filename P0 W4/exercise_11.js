// Shopping Time!

/*
1. Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
2. Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
3. Barang yang dibeli mulai dari yang termahal dan masing-masing 1 
*/

function shoppingTime(memberId, money) {
  var output = {}

  if (memberId) {
    output.memberId = memberId
  }
  else {
    output = "Mohon maaf, toko X hanya berlaku untuk member saja"
  }

  if (money < 50000) {
    output = "Mohon maaf, uang tidak cukup"
  }
  else {
    output.money = money
  }

  var saleItems = [
    {
      item: 'Sepatu Stacattu',
      price: 1500000
    },
    {
      item: 'Baju Zoro',
      price: 500000
    },
    {
      item: 'Baju H&N',
      price: 250000
    },
    {
      item: 'Sweater Uniklooh',
      price: 175000
    },
    {
      item: 'Casing Handphone',
      price: 50000
    },
  ]

  var listPurchased = []

  for (i = 0; money > 0 && i < saleItems.length; i++) {
    if (money >= saleItems[i].price) {
      money -= saleItems[i].price;
      listPurchased.push(saleItems[i].item);
      output.listPurchased = listPurchased
    }
  }

  output.changeMoney = money

  return output;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja