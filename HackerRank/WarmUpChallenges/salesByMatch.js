const n = 9
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//ans = 9

salesByMatch = (n, arr) => {
    let count = 0
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (map.has(num)) {
            count++
            map.delete(num)
        } else {
            map.set(num, 1)
        }
        
    }
    console.log(count);
    console.log(map);
}

salesByMatch(n, arr)