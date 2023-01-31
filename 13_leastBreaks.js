let wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]];

const leastBreaks = (wall) => {
    let map = {}
    let maxResult = 0

    wall.forEach((row)=> {
        let max = 0
         for ( let i = 0; i < row.length -1; i++) {
             max += row[i]
             map[max] = map[max] ?  map[max] + 1 : 1
             maxResult = Math.max(maxResult, map[max] )
         }
    })

    return maxResult
}


leastBreaks(wall)