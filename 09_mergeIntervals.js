let input1 = [[1, 3], [2, 6], [8, 10], [15, 18], [16, 31]]
let input2 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]


const mergeIntervals = (inputInterval) => {
    if (inputInterval.length < 2) {
        throw new Error('there should be more than one interval')
    }

    inputInterval.sort((a, b) => {

        return a[0] - b[0]
    })

    const result = [inputInterval[0]]
    for (let i = 0; i < inputInterval.length; i++) {
        let recent = result[result.length - 1]
        let current = inputInterval[i]

        if (recent[1] >= current[0]) {
            recent[1] = Math.max(recent[1], current[1])
        } else {
            result.push(current)
        }

    }
}


mergeIntervals(input2)