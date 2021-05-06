const findDuplicate = (paths) => {
    let map = new Map()
    console.log(paths)
    console.log(map)
    
    for (let i = 0; i < paths.length; i++) {
        const elementArr = paths[i].split('')
        console.log(elementArr);
        let pointerA = 0
        
        
        for (let j = 0; j < elementArr.length; j++) {
        //    create path for each file
            const elementArrChar = elementArr[j]
            let pathPrefix = []
            let pointerB = j
            console.log('-----------------------');
            console.log(elementArrChar);
            if (elementArrChar === ' ') {
                //get prefix file path and add extra '/' at the end
                pathPrefix = elementArr.slice(pointerA, pointerB)
                pathPrefix.push('/')
                console.log('hi', elementArrChar);
                console.log('pointerA', pointerA);
                console.log('j', j);
                console.log('slice', );
                console.log('pathPrefix',pathPrefix);
                pointerA = pointerB + 1
                console.log('pointerAafter', pointerA);
            } else if (elementArrChar === '(') {
                //get file name
                console.log('hii');
            } else if (elementArrChar === ')') {
                //get file contents
                //reset all vars
                // pathPrefix = []
                // pointerA = j
                // pointerB = 0
            }
            
        }
    }
}


findDuplicate(path = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])

