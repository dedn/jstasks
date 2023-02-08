let arr1 = [1, 2, 3, 4, 3, 2, 1];
let arr3 = [10, 9, 8, 7, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2];

let test = [11, 12, 13, 14, 15, 16, 15, 14, 13]

let peackIndexInMountainArray1 = (arr) => {

    let start = 0
    let end = arr.length - 1
    let middle

    while (start < end) {

        middle = Math.floor((start + end) / 2)

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1
        } else {
            end = middle
        }
    }

    return start
}


console.log(peackIndexInMountainArray1(test))


