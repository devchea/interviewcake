const bubbleSort = (arr) => {
    const newArr = arr
    let count = 0
   
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - 1; j++) {
            
            if (newArr[j] > newArr[j+1]) {
                //assign temp to hold newArr[j]
                let temp = newArr[j]
                //move rightIdx to curIdx
                newArr[j] = newArr[j+1]
                //assign temp to curIdx
                newArr[j+1] = temp
                count++
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${newArr[0]}`);
    console.log(`Last Element: ${newArr[newArr.length-1]}`);
}

bubbleSort([6,4,1])