

const isPrime = (num) => {
   const max = Math.sqrt(num)
    for (let i = 2; i <= max; i++ ) {
        if (num % i === 0) {
            return false
        }
    }

    return  num > 1
}

console.log(isPrime(19))


const getAllPrimeNumbers = (nums) => {
    let primes = []
    for (let i = 2; i <= nums; i++) {
        if(isPrime(i)) {
            primes.push(i)
        }
    }
    return primes
}

console.log(getAllPrimeNumbers(19))






// const getAllPrimeNumber = (num)=> {
//       let result = []
//     for (let i = 2; i <= num; i++) {
//
//         if( i)
//         console.log(i)
//     }
// }
//
//
// console.log(getAllPrimeNumber(15))