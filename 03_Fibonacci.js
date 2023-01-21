const fibonacci = num => {
    if (typeof num !== "number") {
        throw new Error('not a number')
    }

    const sequence = [0, 1]

    for (let i = 2; i <= num; i++) {
        const a = sequence[i - 1]
        const b = sequence[i - 2]
        sequence.push(a + b)
    }

    return sequence[num]
}

console.log(fibonacci(7))


const fibonacciRecursion = num => {
    if (num < 2) {
        return num
    }

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)

}

fibonacciRecursion(7)

