function highestFrequency(array) {
    const obj = {}
    let maxFreq = 0
    let maxFreqStr = array[0]

    for (const item of array) {
        obj[item] = obj[item] + 1 || 1

        if (obj[item] > maxFreq) {
            maxFreq = obj[item]
            maxFreqStr = item
        }
    }


    return maxFreqStr

}


console.log(highestFrequency(['abc', 'abc', 'abc', 'def', 'def', 'ghi', 'ghi', 'fdc', 'tre', 'fff', 'fff', 'fff','fff']))