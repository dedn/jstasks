let a = { value: 18}

let b = {
    age: a
}

let c = a

console.log('a === b.age', a === b.age)

console.log('a === c' , a === c)
//Because it reference data type we have only one object 'b' nad c 'just refer to it'

console.log('{} === {}', {} === {})
// always false

let age1 = 20

console.log('age.__proto__', age1.__proto__)

let test10 = {}
let test11 = {}

let age21 = 21
let age22 = 22

console.log('test10.__proro__ === test12.__proro__ ', test10.__proro__ === test11.__proro__ )
console.log('test10.__proro__ === test12.__proro__ ', age21.__proro__ === age21.__proro__ )

let yurii = { name: "Yura" }



console.log('s', yurii.toString())

//yurii.__proto__ => Object.prototype = {toString}







console.log(({}).prototype === ({}).__proto__)
//fasle

function test1 () {}

console.log(test1.prototype === test1.__proto__)
//fasle

function test2 () {}
function test3 () {}

console.log(test2.__proto__ === test3.__proto__)
//true

console.log(test2.prototype === test3.prototype)
//false

let Component = (props) => {
    return `<div> test </div>`
}

console.log(Component.prototype === Object.prototype)
//false

let age = 18
console.log('age.prototype === Number.prototype', age.prototype === Number.prototype)
//false

console.log('age.__proto__ === Number.prototype', age.__proto__ === Number.prototype)
//true

class Haker {}

console.log('Haker.__proto__ === Function.prototype', Haker.__proto__ === Function.prototype)
//true


// function test()

// console.log(test.__proto__ === ??)

// const count = 12

// console.log(count.__proto__)

class Summarai {
    constructor(name) {
        this.name = name
    }
    hello() { alert(this.name)}
}

let shogun = new Summarai('Yurii')
console.log('dsfsdfdsf', shogun.__proto__.)
