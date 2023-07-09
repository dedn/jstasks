const array = [ 3,6,7,8,10,13,16,18,19,23,25,45,46,47,89,91]


function search ( array, target) {
    if(array[0] > target || array[array.length -1] < target) {
        return -1
    }
    let start = 0
    let end = array.length -1
    let middle
    while (start <= end) {
        middle = Math.floor((start + end) / 2)
       if(array[0] === target){
           return 0
       }
        if(array[array.length -1] === target){
            return array.length -1
        }
        if(target > array[middle]){
            start = middle + 1
        } else if( target < array[middle]) {
            end = middle -1
        } else {
            return  middle
        }
    }
    return  -1

}

console.log('result', search(array, 17))