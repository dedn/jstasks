let array = [1,2, 5]
let array1 = [5,7,1,1,2,3,22]
//let array1 = [1,1,2,3,5,7,22]

function nonConstructibleChange(coins) {
    // coins.sort((a,b)=> a - b)
    // console.log(coins)
    // let currentChangeCreated = 0
    //
    // for (const coin of coins) {
    //     if( coin > currentChangeCreated + 1){
    //         return currentChangeCreated + 1
    //     }
    //
    //     currentChangeCreated += coin
    // }
    //
    //
    // return currentChangeCreated + 1;
}




function nonConstructibleChange(coins) {
    coins.sort((a,b) => a  - b)

    let currentChange = 0
    for (const coin of coins) {
        if( coin > currentChange + 1) {
            return currentChange + 1
        }

        currentChange += coin

    }

    return  currentChange + 1

}

console.log(nonConstructibleChange(array1));
