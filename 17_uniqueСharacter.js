const input1 = 'leetcode'
const input2 = 'loveleetcode'
const input3 = 'aabb'


const getFirstUniqueCharacter = (str) => {

    let map = {}
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        map[currentChar] = map[currentChar] ? map[currentChar] + 1 : 1
    }

    for (let char in map) {

        if (map[char] === 1) {
            return result = char
        } else result = -1
    }

    return result

}


console.log('result', getFirstUniqueCharacter(input2))
