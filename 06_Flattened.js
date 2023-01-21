const testArr = [[1,2],['s','b'], ['a', 'v'], [121,211]]

const flattened = ((arr)=> {
 return  arr.reduce((acc ,item) => {
     return [...acc , ...item]
 },[])
})

const shortResult = testArr.reduce((a, b) => a.concat(b))


console.log(flattened(testArr))
console.log(shortResult)