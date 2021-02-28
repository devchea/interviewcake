const countingValleys = (steps, path) => {
    let numOfValleys = 0;
    const pathArr = path[0].split('')

    if (steps >= 2 && steps <= 10^6) {
        let curStep = 0
        let i = 0
        while (i <= steps) {
            const seaLevel = 0

            if (pathArr[i] == 'U') {
                curStep ++
                if (curStep == 0) {
                    numOfValleys++
                }
                console.log('up',curStep);
            } else if (pathArr[i] == 'D') {
                curStep--
                console.log('down', curStep);
            }

            i++
        }
    }
    
    return numOfValleys
}

countingValleys( steps = 12, path = ['DDUUDDUDUUUD'])