function arraySubset(source, subset) {
    if (subset.length > source) {
        return false
    }

    for (let i = 0; i < subset.length; i++){
        console.log('sad', source.indexOf(subset[i]))
        if(source.indexOf(subset[i])) {
            return  false
        }
    }
}


console.log(arraySubset([2, 1, 3], [1, 2, 3]))
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3]))
// console.log(arraySubset([1, 1, 1, 3], [1, 2, 3]))
// console.log(arraySubset([1, 2], [1, 2, 3]))