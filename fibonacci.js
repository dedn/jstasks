function fibonacci(n) {


    let result = [0,1]
    if( n <= 2) {
        return  result
    }
    for (let i = 2; i <= n; i++) {
      let a =  result[i -1] + result[i]
        result.push(a)
    }


    return Number(result[n])
}


console.log(fibonacci(10))

function fibonacci2(num) {
    const sequence = [0, 1]

    for (let i = 2; i <= num; i++) {
        const a = sequence[i - 1]
        const b = sequence[i - 2]
        sequence.push(a + b)
    }

    return sequence[num]
}

console.log(fibonacci2(10))


function getNthFib (n) {
    if(n === 2) {
        return 1
    } else if (n === 1) {
        return 0
    } else {
        return getNthFib(n -1 ) + getNthFib( n - 2)
    }
}

console.log(getNthFib(10))

const fibonacciRecursion = num => {
    if (num < 2) {
        return num
    }

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)

}

console.log(fibonacciRecursion(10))

