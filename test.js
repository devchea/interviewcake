const wordFormation = () => {
  console.log('--------------------------');
  const words = ["the", "word", "love", "scott", "finder", "dictionary"]
  const letters = "fanierdow"
  const wordMap = new Map()
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      
      console.log(letter);
    }
    
  }
  console.log(wordMap);

}

wordFormation()