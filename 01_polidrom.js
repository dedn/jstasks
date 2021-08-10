function polindrom(str) {
    str = str.toLowerCase()

    let str2 = str.split('')
    str2 = str2.reverse()
    str2 = str2.join('')

    if (str2 === str) {
        return true
    } else {
        return false
    }

}

console.log(polindrom('abba1'))


const polindrom2 = str => {
    str = str.toLowerCase().split(' ').join('')
    console.log('test', str)
    return str === str.split('').reverse().join('')

}

console.log(polindrom2('a     b ba  '))
