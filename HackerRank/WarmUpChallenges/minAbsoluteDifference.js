const minimumAbsoluteDifference = (arr) => {
    const sortedArr = arr.sort()
    let absNum = []
    for (let i = 0; i < sortedArr.length-1; i++) {
        
        const curNum = sortedArr[i]
        const nextNum = sortedArr[i+1]
        const tempAbsNum = Math.abs((curNum-nextNum))

        if (absNum.length == 0 || absNum[0] > tempAbsNum) {

            absNum[0] = tempAbsNum
        }
        
    }
    return absNum

}

minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
