const testData = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const testData2 = [4, 3, 2, 1, 4]


const maxArea = (heights) => {
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights.length; j++) {
            let currentMaxArea = Math.min(heights[i], heights[j]) * Math.abs(i - j)
            if (currentMaxArea > maxArea) maxArea = currentMaxArea
        }
    }
    return maxArea
}

console.log(maxArea(testData))

const maxArea2 = (heights) => {
    let maxArea = 0
    let pointerLeft = 0
    let pointerRight = heights.length - 1

    while (pointerLeft < pointerRight) {
        const currentArea = Math.min(heights[pointerLeft], heights[pointerRight]) * Math.abs(pointerLeft - pointerRight)
        if (currentArea > maxArea) maxArea = currentArea
        if (heights[pointerLeft] < heights[pointerRight]) {
            pointerLeft += 1
        } else {
            pointerRight -= 1
        }
    }
    return maxArea
}
console.log(maxArea2(testData2))