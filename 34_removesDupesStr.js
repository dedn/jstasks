function removeDupesStr (str) {
   const map = {}
    for (const strElement of str) {
        if(map[strElement] >= 1) continue
        else {
            map[strElement] = map[strElement] +1 || 1
        }
    }

    return Object.keys(map).join('')

}


// console.log(removeDupesStr('abcd'))
// console.log(removeDupesStr('abcccddfmnn'))

function removeDupesStr2 (str) {
const strToObj = new Set(str)
const toObj = [...strToObj]
    return toObj.join('')


}



console.log('2',removeDupesStr2('abcd'))
console.log('2',removeDupesStr2('abcccddfmnn'))