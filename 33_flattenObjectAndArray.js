const array = [[1],{
    a: null,
    b: undefined,
    c: {
        d: true,
        e: 4,
        f: {},
        g: {
            h: 5
        }
    }
}, [[2,3]], [[[4]]], 4]
const array1 = [1,2,[3,4[5,6]]]

let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]

const testObjAndArray = {
    a: null,
    b: undefined,
    c: {
        d: true,
        e: 4,
        f: {},
        g: {
            h: 5
        }
    }
}

// Array.prototype.reduce2 = function (callback, initialValue) {
//
//     if (callback == null) {
//         throw new Error(' cant be null or undefined')
//     }
//
//     let i = 0
//     let acc
//
//     if (arguments.length >= 2) {
//         acc = initialValue
//     } else {
//         acc = this[0]
//         i++
//     }
//
//
//     for (; i <= this.length; i++) {
//
//         if (this[i]) {
//             acc = callback(acc, this[i], i, this)
//         }
//     }
//     return acc
// }
//
//
//
// function callBack (acc, item) {
//     acc[item] = 1
//     return acc
// }
//
//
// const result = testArray.reduce2(callBack , {})

function flatten(value) {
    if (typeof value !== 'object' || value === null) {
        return value
    }

    if(Array.isArray(value)) {
        return  flattenArray(value)
    }

    return flattenObject(value)

}


function flattenArray(array) {
    return array.reduce((acc, curr) => acc.concat(flatten(curr)),[])
}

function flattenObject (object) {
    const flattenObj = {}

    for (const [key, value] of Object.entries(object)) {
        const  valueIsObject =
            typeof value === 'object' && value !== null && !Array.isArray(value)
        const flattendValue = flatten(value)

        if(valueIsObject) {
            Object.assign(flattenObj, flattendValue)
        } else {
            flattenObj[key] = flattendValue
        }
    }

    return flattenObj

}

console.log('flattetn', flatten(array))