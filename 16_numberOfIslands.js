let grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

let grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

let grid3 = [
    ['01', '02', '03', '04', '05'],
    ['1', '12', '13', '14', '15'],
    // ['26','27','28','29','29'],
    // ['30','31','32','33','34']
];

let numIslands = (grid) => {
    if (grid.length === 0) return 0
    let rowsL = grid.length
    let colsL = grid[0].length
    let result = 0


    let marNeighbord = (grid, R, C) => {
        grid[R][C] = '6'

        if (grid[R][C - 1] === '1') {
            marNeighbord(grid, R, C - 1)
        }
        if (grid[R][C + 1] === '1') {
            marNeighbord(grid, R, C + 1)
        }
        if (grid[R - 1] && grid[R - 1][C] === '1') {
            marNeighbord(grid, R - 1, C)
        }
        if (grid[R + 1] && grid[R + 1][C] === '1') {
            marNeighbord(grid, R + 1, C)
        }
    }

    for (let R = 0; R < rowsL; R++) {
        for (let C = 0; C < colsL; C++) {
            console.log('R', R)
            console.log('C', C)

            if (grid[R][C] === '1') {
                result++
                marNeighbord(grid, R, C)
            }
        }
    }

    console.log(grid)

    return result
}


console.log(numIslands(grid3))




