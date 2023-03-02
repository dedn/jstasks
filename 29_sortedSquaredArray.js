function sortedSquaredArray(array) {
    // for (let i =0; i< array.length; i++) {
    //
    // }

    let test = array.map((item) => {
        return item * item
    }).sort((a, b) => a -b)

    console.log('test', test)

    return [];
}

console.log(sortedSquaredArray([-11 -10,-1 ,1, 2, 3, 5, 6, 8, 9]))