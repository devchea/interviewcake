class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }


  populateWordsToCounts(inputString) {
    //set word start idx and word length to find the word
    let curWordStartIdx = 0
    let curWordLength = 0
    for (let i = 0; i <= inputString.length; i++) {
      const char = inputString[i]

      if (this.isLetter(char)) {
        if (curWordLength === 0) {
          curWordStartIdx = i
        }
        curWordLength++
      } else {
        const word = inputString.slice(curWordStartIdx, curWordStartIdx + curWordLength)
        //sends word to add to set
        console.log(word);
        this.addWordToMap(word)
        curWordLength = 0
      }
    }
    console.log(this.wordsToCounts);
  }

  //check set for word and increment if found or set value to 1 if not found
  addWordToMap(word){
    if (this.wordsToCounts.has(word)) {
      this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1)
    } else {
      this.wordsToCounts.set(word, 1)
    }
  }

  isLetter(char) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) >= 0;
  }

}


// let desc = "simple sentence";
// let actual = new WordCloudData("I like cake").wordsToCounts;
// let expected = new Map([
//   ["I", 1],
//   ["like", 1],
//   ["cake", 1],
// ]);
// assert(isMapsEqual(actual, expected), desc);

// desc = "longer sentence";
// actual = new WordCloudData(
//   "Chocolate cake for dinner and pound cake for dessert"
// ).wordsToCounts;
// expected = new Map([
//   ["and", 1],
//   ["pound", 1],
//   ["for", 2],
//   ["dessert", 1],
//   ["Chocolate", 1],
//   ["dinner", 1],
//   ["cake", 2],
// ]);
// assert(isMapsEqual(actual, expected), desc);

desc = "punctuation";
actual = new WordCloudData("Strawberry short cake? Yum!").wordsToCounts;
expected = new Map([
  ["cake", 1],
  ["Strawberry", 1],
  ["short", 1],
  ["Yum", 1],
]);
assert(isMapsEqual(actual, expected), desc);

// desc = "hyphenated Words";
// actual = new WordCloudData("Dessert - mille-feuille cake").wordsToCounts;
// expected = new Map([
//   ["cake", 1],
//   ["Dessert", 1],
//   ["mille-feuille", 1],
// ]);
// assert(isMapsEqual(actual, expected), desc);

// desc = "ellipses between words";
// actual = new WordCloudData("Mmm...mmm...decisions...decisions").wordsToCounts;
// expected = new Map([
//   ["mmm", 2],
//   ["decisions", 2],
// ]);
// assert(isMapsEqual(actual, expected), desc);

// desc = "apostrophes";
// actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
// expected = new Map([
//   ["Bakery", 1],
//   ["Cakes", 1],
//   ["Allie's", 1],
//   ["Sasha's", 1],
// ]);
// assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
