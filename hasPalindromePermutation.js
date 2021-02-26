const hasPalindromePermutation = (theString) => {
  const oddCharCount = new Set()

  for(i = 0; i < theString.length; i++) {
    const char = theString[i]

    if (oddCharCount.has(char)) {
      oddCharCount.delete(char)
      
    } else {
      oddCharCount.add(char)
      
    }
  }
  console.log(oddCharCount.size);
  return oddCharCount.size <= 1 ? true : false
}

// let desc = "permutation with odd number of chars";
// assertEqual(hasPalindromePermutation("aabcbcd"), true, desc);

// desc = "permutation with even number of chars";
// assertEqual(hasPalindromePermutation("aabccbdd"), true, desc);

// desc = "no permutation with odd number of chars";
// assertEqual(hasPalindromePermutation("aabcd"), false, desc);

// desc = "no permutation with even number of chars";
// assertEqual(hasPalindromePermutation("aabbcd"), false, desc);

// desc = "empty string";
// assertEqual(hasPalindromePermutation(""), true, desc);

desc = "one character string ";
assertEqual(hasPalindromePermutation("a"), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}