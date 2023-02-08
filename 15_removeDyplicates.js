const array = ['Alex', 'Jhon', 'Frodo', 'Jhon', 'Mike', 'Jhon']


const uniqueArray = [...new Set(array)]
const uniqueArray2 = Array.from(new Set(array))
const uniqueArray3 = array.filter((item, index) => {

    return index === array.indexOf(item)
})

const uniqueArray4 = array.reduce((acc, item) => {

    return acc.includes(item) ? acc : [...acc, item]
}, [])
