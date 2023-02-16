const input1 = [
    [1,1,1,1],
    [1,0,1,1],
    [1,1,1,1],
    [1,1,1,1],
]
const input2 = [
    [0,1,2,0],
    [3,4,5,3],
    [1,3,1, 5]]
const input3 = [
    [0, 1, 2, 5],
    [1, 2, 4, 3],
    [2, 5, 7, 0]]


function setZerosInMatrix(matrix) {

    let rowPointer = matrix.length
    let colPointer = matrix[1].length
    console.log(colPointer)
    console.log(rowPointer)
    console.log(matrix[0])
    let matrixPointer = {row: [], col: []}


    for (let r = 0;  r < rowPointer; r++) {
        for (let c = 0; c < colPointer; c++) {
            if(matrix[r][c] === 0) { matrixPointer.row.push(r); matrixPointer.col.push(c)}
        }
    }

    for (let r = 0;  r < rowPointer; r++) {
        for (let c = 0; c < colPointer; c++) {
        if(matrixPointer.row.includes(r) || matrixPointer.col.includes(c))
            matrix[r][c] = 0
        }
    }

    return matrixPointer
}

console.log(setZerosInMatrix(input3));