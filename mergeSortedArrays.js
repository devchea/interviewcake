// const mergeArrays = (myArray, alicesArray) => {
//   const mergedArray = []

//   let currentMyIdx = 0
//   let currentAliceIdx = 0
//   let currentMergedIdx = 0

//   while (currentMergedIdx < (myArray.length + alicesArray.length)) {
//     const myArrayFirstIdx = myArray[currentMyIdx]
//     const alicesArrayFirstIdx = alicesArray[currentAliceIdx]
//     //check myArray to see if it's exahusted then push alicesArray if it is
//     if (currentMyIdx >= myArray.length) {
//       mergedArray.push(alicesArrayFirstIdx)
//       currentAliceIdx++
//     //check alicesArray to see if it's exahusted then push myArray if it is
//     } else if (currentAliceIdx >= alicesArray.length) {
//       mergedArray.push(myArrayFirstIdx)
//       currentMyIdx++
//     //check first element of myArray and push if it is smaller than first element of alicesArray
//     } else if (myArrayFirstIdx < alicesArrayFirstIdx) {
//       mergedArray.push(myArrayFirstIdx);
//       currentMyIdx++;
//     //push first element of alicesArray
//     } else {
//       mergedArray.push(alicesArrayFirstIdx)
//       currentAliceIdx++
//     }
//     currentMergedIdx++
//   }


//   console.log("merged:", mergedArray)

//   return mergedArray
// }

const mergeArrays = (myArray, alicesArray) => {
  const mergedArray = [];

  let currentMyIdx = 0;
  let currentAliceIdx = 0;
  let currentMergedIdx = 0;

  while (currentMergedIdx < myArray.length + alicesArray.length) {
    const isMyArrayExhausted = currentMyIdx >= myArray.length
    const isAlicesArrayExhausted = currentAliceIdx >= alicesArray.length

    if (!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[currentMyIdx] < alicesArray[currentAliceIdx]))) {
      mergedArray.push(myArray[currentMyIdx])
      currentMyIdx++
    } else {
      mergedArray.push(alicesArray[currentAliceIdx])
      currentAliceIdx++
    }

    currentMergedIdx++
  }
  console.log("merged:", mergedArray);
  return mergedArray;
};

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}

// let desc = "both arrays are empty";
// let actual = mergeArrays([], []);
// let expected = [];
// assertDeepEqual(actual, expected, desc);

// desc = "first array is empty";
// actual = mergeArrays([], [1, 2, 3]);
// expected = [1, 2, 3];
// assertDeepEqual(actual, expected, desc);

// desc = "second array is empty";
// actual = mergeArrays([5, 6, 7], []);
// expected = [5, 6, 7];
// assertDeepEqual(actual, expected, desc);

// desc = "both arrays have some numbers";
// actual = mergeArrays([2, 4, 6], [1, 3, 7]);
// expected = [1, 2, 3, 4, 6, 7];
// assertDeepEqual(actual, expected, desc);

desc = "arrays are different lengths";
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);