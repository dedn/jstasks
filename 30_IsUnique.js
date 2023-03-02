function isUnique(string) {
    let obj = {}
    for (let char of string) {
        if (obj[char] >= 1) return false
        obj[char] = obj[char] + 1 || 1
    }
    return true
}

function isUnique2(string) {

    return new Set(string).size === string.length
}

console.log(isUnique('abcABC')) // -> true
console.log(isUnique2('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
console.log(isUnique2('abcadef')) // -> false