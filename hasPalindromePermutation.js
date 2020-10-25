const hasPalindromePermutation = (theString) => {
  const unpairedChar = new Set()

  for (let char of theString) {
    if (unpairedChar.has(char)) {
      unpairedChar.delete(char)
    } else {
      unpairedChar.add(char)
    }
  }
  return unpairedChar.size >= 1
  

}

let desc = "permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcbcd"), true, desc);

// desc = "permutation with even number of chars";
// assertEqual(hasPalindromePermutation("aabccbdd"), true, desc);

// desc = "no permutation with odd number of chars";
// assertEqual(hasPalindromePermutation("aabcd"), false, desc);

// desc = "no permutation with even number of chars";
// assertEqual(hasPalindromePermutation("aabbcd"), false, desc);

// desc = "empty string";
// assertEqual(hasPalindromePermutation(""), true, desc);

// desc = "one character string ";
// assertEqual(hasPalindromePermutation("a"), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}