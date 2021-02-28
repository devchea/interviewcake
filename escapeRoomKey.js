const escapeRoomKey = () => {
    const keypads = ['AELWXYZ', 'ABELPXY', 'AELPSXY', 'SAELPRT', 'XAEBKS']
    const wordlists = ['APPLE', 'PLEAS', 'PLEASE']
    
    //prefill ansArr with 0
    const ansArr = new Array(keypads.length).fill(0)
    
    //turn each keypad element into an array of letters and check to see
    //if the array of letters contain the letter of each wordlist element
    for (let i = 0; i < keypads.length; i++) {
        const keypadLettersArr = keypads[i].split('')
        const key = keypadLettersArr[0]
                
        for (let j = 0; j < wordlists.length; j++) {
            const word = wordlists[j].split('')
            
            for (let k = 0; k < word.length; k++) {
                const wordChar = word[k];
                let count = 0

                //break if keypadLettersArr doesn't include wordChar
                //if all are found, increase ansArr related to keypad idx
                if (!word.includes(key) || !keypadLettersArr.includes(wordChar)) {
                    break
                } else if (k == word.length - 1) {
                    ansArr[i]++
                    
                }
            }

        }

    }

    return (console.log(ansArr))
}


escapeRoomKey()
