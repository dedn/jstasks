const input = 'abcdcaf'

function firstNonRepetingCharter (string) {
    const map = {}
    for( const char of string) {
        map[char] = map[char] +1 || 1
    }

    for(const item in map) {
        console.log(map[item])
        if(map[item] === 1) {
            return  string.indexOf(item)
        }
    }


    return -1
}

console.log(firstNonRepetingCharter(input));