let inputArray = [ 4,1,2,1,2]



const getSingleNumber = (array) => {

    const map = {}

     for( let item of array) {
         map[item] = map[item] ? map[item] + 1 : 1
     }


     for (let objectItem in map) {

         console.log('map[objectItem]', map[objectItem])
         if(map[objectItem] === 1) {
             return  objectItem
         }
     }

     return 'mo result'


}


console.log('result', getSingleNumber(inputArray))