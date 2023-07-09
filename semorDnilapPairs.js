
const input1 = ['diaper', 'test', 'abc','repaid', 'cba']
const input2 = ["abcde", "bcd", "live", "dcb", "edcba", "aaa", "evil", "semordnilap", "palindromes"]

function semorDnilapPairs (words) {
    let result = []

    for (let i = 0; i < words.length ; i++) {

        let currentRevers = words[i].split('').reverse().join('')
        if(currentRevers === words[i]) {
            continue
        }

        let currentWord = words.find( i => i === currentRevers)

        if(currentWord) {
            result.push([currentRevers, words[i]])
        }

        delete words[i]
    }



    return result
}

console.log(semorDnilapPairs(input2))