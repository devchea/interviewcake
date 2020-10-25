// const getMaxProfit = (stockPrices) => {
//   let maxProfit = [];

//   for (let i = 0; i < stockPrices.length - 1; i++) {
//     for (let j = i + 1; j < stockPrices.length; j++) {
//       const profit = stockPrices[j] - stockPrices[i]
//         maxProfit.push(profit)
//     }
//   }
//   console.log("maxProfit is", maxProfit);
//   return Math.max(...maxProfit);
// }

const getMaxProfit = (stockPrices) => {
  let maxProfit = []
  for (let i = 0; i < stockPrices.length; i++) {
    
  }
}

// Tests

// let desc = 'price goes up then down';
// let actual = getMaxProfit([1, 5, 3, 2]);
// let expected = 4;
// assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

// desc = 'price goes up all day';
// actual = getMaxProfit([1, 6, 7, 9]);
// expected = 8;
// assertEqual(actual, expected, desc);

// desc = 'price goes down all day';
// actual = getMaxProfit([9, 7, 4, 1]);
// expected = -2;
// assertEqual(actual, expected, desc);

// desc = 'price stays the same all day';
// actual = getMaxProfit([1, 1, 1, 1]);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = 'error with empty prices';
// const emptyArray = () => (getMaxProfit([]));
// assertThrowsError(emptyArray, desc);

// desc = 'error with one price';
// const onePrice = () => (getMaxProfit([1]));
// assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}