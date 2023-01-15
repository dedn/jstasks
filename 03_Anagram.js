const strToObj = (str) => {
    if (typeof str !== 'string') {
        throw new Error(' not valid type input data')
    }

    const obj = {}

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}


const anagram = (str1, str2) => {

    let obj = strToObj(str1)
    let obj2 = strToObj(str2)

    if (Object.keys(obj).length !== Object.keys(obj2).length) {
        return false
    }

    for (let char in obj) {
        if (obj[char] !== obj2[char]) {
            return false
        }
    }

    return true

}


anagram('abba', 'bbba')