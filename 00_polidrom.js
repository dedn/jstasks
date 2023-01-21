const palindrome = (str) => {
    str.toLowerCase()
    return str === str.split('').reverse().join('')
}

palindrome('abba')