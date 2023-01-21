let testArr = ['2', 0, 34, 3, 5, 0, ' dd', 'sd', 0, 90]

let moveZero = (arr) => {
  let arrResult = []

    for( let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === 0) {
            arrResult = [...arrResult , 0]
        } else {
            arrResult = [arr[i], ...arrResult  ]
        }
    }

    return arrResult
}

//Short way
const moveZeroShortWay = testArr.reduceRight((acc, item) => item === 0 ? [...acc, item] : [item, ...acc], [])

console.log('result!', moveZero(testArr))
console.log('result2', moveZeroShortWay )
