function isValidSubsequence(array, sequence) {
    let subSeqIndex = 0

    for (let arrItem of array) {
        console.log(subSeqIndex)
        if (subSeqIndex === sequence.length) break
        if (arrItem === sequence[subSeqIndex]) {
            console.log('work')
            subSeqIndex++
        }
    }
    return subSeqIndex === sequence.length
}


console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10, 21, 22, 34], [1, 6, -1, 10]))