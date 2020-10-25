arr = [-2,3,4,7,8,9,11,13]
target = 11

const search = (arr, target) => {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
  while (leftIdx <= rightIdx) {
    if (arr[midIdx] === target) {
      return midIdx
    } else if (target < arr[midIdx]) {
      rightIdx = midIdx -1
    } else (target > arr[midIdx]);{
      leftIdx = midIdx + 1
    }
    return 'Target does not exist'
  }
}

search(arr, target)