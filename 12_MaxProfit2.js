const testData = [7, 3, 5, 3, 6, 7]
const testData2 = [7, 6, 5, 3, 1]

const maxProfit = (data) => {
    let maxProfit = 0
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] < data[j]) {
                let currentProfit = data[j] - data[i]
                if (currentProfit > maxProfit && i < j) maxProfit = currentProfit
            }
        }
    }
    return maxProfit
}

console.log(maxProfit(testData))

const maxProfit2 = (data) => {
    let minPrices = data[0]
    let maxProfit = 0
    for (let i = 0; i < data.length; i++) {
        let current = data[i]
        if (current < minPrices) {
            minPrices = current
        }
        if (current - minPrices > maxProfit) {
            maxProfit = current - minPrices
        }
    }
    return maxProfit
}


console.log(maxProfit2(testData))
