const reverse = (arrayOfChars) => {
  
  //assign first element
  let leftIdx = 0
  
  //assign last element
  let rightIdx = arrayOfChars.length - 1
  
  //loop through and swap first and last element
  while ( leftIdx < rightIdx) {
    //temp storage of the left element to be swapped
    const temp = arrayOfChars[leftIdx]
    //swap right element into left element idx
    arrayOfChars[leftIdx] = arrayOfChars[rightIdx]
    //swap temp storage of left element to right element idx
    arrayOfChars[rightIdx] = temp
    // increment left side and decrement left side and move towards middle
    leftIdx++
    rightIdx--
  }
  
  

}

// let desc = "empty string";
// let input = "".split("");
// reverse(input);
// let actual = input.join("");
// let expected = "";
// assertEqual(actual, expected, desc);

// desc = "single character string";
// input = "A".split("");
// reverse(input);
// actual = input.join("");
// expected = "A";
// assertEqual(actual, expected, desc);

desc = "longer string";
input = "ABCDE".split("");
reverse(input);
actual = input.join("");
expected = "EDCBA";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}