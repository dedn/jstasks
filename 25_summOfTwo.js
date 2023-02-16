let sumOfTwo = ((arr, target) => {
    let result = []

    let objNumber = {}

    for (let i = 0; i < arr.length; i++) {
        objNumber[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]
        if (objNumber[diff] && objNumber[diff] !== i) {
            result.push(i)
            result.push(objNumber[diff])
        }
    }
    return result
})


console.log('r', sumOfTwo([2, 7, 11, 15], 9))
