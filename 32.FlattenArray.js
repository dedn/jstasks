const array = [[1], [[2,3]], [[[4]]], 4]

function flattenArray(array) {
    return array.reduce((acc, curr) => acc.concat(flatten(curr)))
}

const flatten = (arr) => {
const respons = []
    for (let i = 0; i <arr.length; i ++) {
      if(Array.isArray(arr[i])){
          let flat = flatten(arr[i])
          for (let j = 0; j < flat.length; j ++) {
              respons.push(flat[j])
          }
      } else {
          respons.push(arr[i])
      }
    }

    return respons
}

console.log(flatten(array))
console.log(flattenArray(array))

