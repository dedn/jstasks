function Multipiyer(value) {

    return function (value2) {
        return value2 * value
    }

}

let double = Multipiyer(2)
console.log('double', double)
console.log('double resule', double(5))