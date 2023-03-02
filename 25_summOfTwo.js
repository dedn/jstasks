// let sumOfTwo = ((arr, target) => {
//     let result = []
//
//     let objNumber = {}
//
//     for (let i = 0; i < arr.length; i++) {
//         objNumber[arr[i]] = i
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         let diff = target - arr[i]
//         if (objNumber[diff] && objNumber[diff] !== i) {
//             result.push(i)
//             result.push(objNumber[diff])
//         }
//     }
//     return result
// })
//
//
// console.log('r', sumOfTwo([2, 7, 11, 15], 9))


function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    let left = 0
    let right = array.length -1

    while(left < right) {
        let currentSum = array[left] + array[right]
        if(currentSum === targetSum) {
            return [array[left], array[right]]
        } else if(currentSum < targetSum) {
            left++
        } else if( currentSum > targetSum) {
            right --
        }
    }

    return []
}


console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],-5))

