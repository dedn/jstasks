const testData = [2, 7 ,1 , 5, 3, 6, 4]
const testData1 = [7 ,6 , 4, 3, 2, 1]

const maxProfit = (str) => {
    let result = 0

    for(let i = 0; i <= str.length; i++ ) {
        if( str[i] > str[i - 1]){
            result += (str[i] - str[i - 1])
        }
    }

    return result
}


console.log(maxProfit(testData))

