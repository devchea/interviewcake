const minimumSwaps2 = (n , arr) => {
    // console.log(arr);
    // arr = [1,3,5,2,4,6,7]
    const halfLength = parseInt(arr.length/2) + 1
    let tempArr = arr
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
        let leftIdx = arr[i];
        
        for (let j = halfLength; j < arr.length; j++) {
            let rightIdx = arr[j];
            let tempNum = rightIdx;

            if (leftIdx > rightIdx) {
                //swap Idx
                //[1,2,3,4,5]
                console.log('rightIdx', rightIdx);
                console.log('leftIdx', leftIdx);
                console.log("test1", tempArr.splice(i-1, 1), rightIdx);
                console.log("test2", tempArr.splice(j-1, 1), leftIdx);
                console.log(tempArr);
                rightIdx = leftIdx;
                leftIdx = tempNum;
                console.log(arr);

                count += 1;
            }
        }


    }


}

minimumSwaps2(7, [1,3,5,2,4,6,7])