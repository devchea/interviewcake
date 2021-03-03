const bubbleSort = (arr) => {
    const newArr = arr
    let count = 0
    let isSorted = false
    
    while (!isSorted) {
        isSorted = true
        
        for (let j = 0; j < arr.length-1; j++) {
            curIdx = newArr[j]
            rightIdx = newArr[j+1]
            let temp = []
            console.log('Start', j);
            if (curIdx > rightIdx) {
                // console.log(newArr);
                // console.log([curIdx,rightIdx] = [rightIdx, curIdx])
                // console.log(`compare j:${curIdx} j+1: ${rightIdx}` );
                // console.log('remove', newArr.splice(j, 1));
                // newArr.splice(j, 1)
                // console.log('newArr:', newArr);

                // newArr.splice(j+1 ,0, ([curIdx,rightIdx] = [rightIdx, curIdx]) )
                // isSorted = false
                // console.log('if modded:', newArr);
                // console.log()
            } 
            console.log('out if modded:', newArr);

                console.log(`compare j:${newArr[j]} j+1: ${newArr[j+1]}` );
            
            
            // console.log("temp", temp)
            // console.log("otherleft", arr.slice(j+1, ))
            // // temp.concat(arr.splice(1,0)) 
            
        }
        // console.log("TEMP", temp.splice(i, 1 ,arr[i]))
        // console.log(temp);
        console.log('NEXT While');
        
    }
    //
}

bubbleSort([6,4,1])