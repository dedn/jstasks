let arr = [-1, 0, 3, 5, 7, 9, 12]


const search = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let mid

    while (left <= right) {
        console.log(left)
        mid = Math.floor((right - left) / 2) + left
        if (target === arr[mid]) {
            return mid
        } else if (target > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return mid
}

console.log('result', search(array, 6))