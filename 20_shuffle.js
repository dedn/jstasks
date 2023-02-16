const arr = [1,2,3,4,5,6,7,8,9,10]



const shuffle = (arr) => {
  for( let i =  arr.length -1; i > 0; i--) {
      let current = arr[i]

      let randomPosition = Math.floor(Math.random() * (i + 1))

      arr[i] = arr[randomPosition]
      arr[randomPosition] = current
  }

  return arr
}


shuffle(arr)