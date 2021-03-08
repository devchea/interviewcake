const getMinimumCost = (k, c) => {
    // console.log(k)
    let total = 0
    let diffNum = (c.length - k)
    console.log(c.reduce((acc, val, idx) => {
        let diffTotal = 0
        console.log(total);

        
        // console.log('dn',diffNum);
        // console.log('idx', c[idx]);
        if (diffNum <= idx ) {
            return acc+val+(c[idx]+1)
            console.log(total);
            diffNum--
        }
        return acc+val
    }, total))
    
    
}

getMinimumCost(k = 3, c = [1,3,5,7,9])