const arraysLeftRotation = (a, d) => {
    const ansArr = a
    let i = d
    
    while (d > 0) {
        

        ansArr.push(0)
        //move first element to end of arr
        ansArr[ansArr.length - 1] = ansArr[0]
        //delete first element and return new Arr
        ansArr.shift()
        ansArr == ansArr

        d--
    }

    console.log(ansArr);

}

arraysLeftRotation( a = [ 1, 2, 3, 4, 5 ], d = 4)