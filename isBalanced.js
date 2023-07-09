function isBalanced(string) {
    const start = '({['
    const end = ')}]'
    let queue = []

    const map = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    for (let i = 0; i < string.length; i++) {
        const current = string[i]
        if (start.includes(current)) {

            queue.push(current)
        } else if (end.includes(current)) {
            const last = queue.pop()
            if (map[current] !== last) {
                return false
            }
        }
    }

    return !queue.length
}


// console.log(isBalanced('(x+1)-(4)'))
// console.log(isBalanced('((x+1))-(4)-{()}'))
// console.log(isBalanced('[{()}]'))
// console.log(isBalanced('(50)('))
console.log(isBalanced('[{[}'))