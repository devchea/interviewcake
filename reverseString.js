const reverseString = (s) => {
    console.log(s);
    for (let i = 0; i < s.length/2; i++) {
        let leftIdx = s[i]
        let rightIdx = s[s.length-1-i]

        s[i] = rightIdx
        s[s.length-1-i] = leftIdx
    }
    console.log(s);
}

reverseString(["H","A","N","n","a","h"])