const numKeypadSolutions = (wordlist, keypads) => {
    let results = [];
    let wordsMap = [];
    for (let i = 0; i < wordlist.length; i++) {
      let temp = {};
      for (let j = 0; j < wordlist[i].length; j++) {
        let char = wordlist[i][j];
        temp[char] = true;
      }
      wordsMap.push(temp);
    }
    console.log(wordsMap);
    for (let i = 0; i < keypads.length; i++) {
      let keyCode = 0;
      let keyMap = {};
      for (let j = 0; j < keypads[i].length; j++) {
        let char = keypads[i][j];
        keyMap[char] = true;
      }
      console.log(keyMap);
      let key = keypads[i][0];
      console.log('first letter',key);
      wordsMap.forEach((word) => {
        if (word[key]) {
          let count = 1;
          for (let char in word) {
            if (!keyMap[char]) {
              count = 0;
            }
          }
          keyCode += count;
        }
      });
      results.push(keyCode);
    }
    console.log('second', results);
    return results;
};
  numKeypadSolutions(
    ['APPLE', 'PLEAS', 'PLEASE'],
    ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
  );


