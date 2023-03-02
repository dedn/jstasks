const array = ['Alex', 'Jhon', 'Frodo', 'Jhon', 'Mike', 'Jhon']

const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];


// const removeDyplicate1 = [...new Set(array)]
//
//
// const removeDyplicate2 =  array.filter((item, index) => {
//
//     return index === array.indexOf(item)
// })
//
//
// const removeDyplicate3 = array.reduce((acc, item) => {
//
//     return acc.includes(item) ? acc : [...acc, item]
// },[])
//
//
// console.log(removeDyplicate3)

const removeDuplicate4 = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]){
            nums.splice(i, 1)
            i--
        }
    }
    return nums
}

console.log(removeDuplicate4(arr2))





