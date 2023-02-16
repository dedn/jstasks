const array = ['Alex', 'Jhon', 'Frodo', 'Jhon', 'Mike', 'Jhon']


const removeDyplicate1 = [...new Set(array)]


const removeDyplicate2 =  array.filter((item, index) => {

    return index === array.indexOf(item)
})


const removeDyplicate3 = array.reduce((acc, item) => {

    return acc.includes(item) ? acc : [...acc, item]
},[])





// console.log(removeDyplicate1)
// console.log(removeDyplicate2)
console.log(removeDyplicate3)





