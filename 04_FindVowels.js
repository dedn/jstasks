
const findVowels = str => {
    const voweles = ["a", "e", "i", "o", "u", "y"]
    let counter = 0

    for( let i = 0; i <= str.length; i++) {
        console.log(str[i])
        if(voweles.includes(str[i])) {
            counter ++
        }
    }

    return counter
}


console.log(findVowels('test'))