const testArr = [[1, 2], [21, 9], [43, 4], [121, 211], [], [44, 6]]

const flattenedAndSortShort = testArr.reduce((a, b) => [...a, ...b]).sort((a, b) => a - b)

console.log('flattenedAndSort', flattenedAndSortShort)