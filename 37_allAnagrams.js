function allAnagrams(array) {
    const sortderAraay = array.map((a) => {
        return a.split('').sort().join('')
    })
    
    for (let i = 0; i < sortderAraay.length; i++) {
        if(sortderAraay[i] !== sortderAraay[0]){
            return false
        }
    }
    return  true
}


console.log(allAnagrams(['abc', 'cab', 'cbc']))
console.log(allAnagrams(['abc', 'cab','coc']))
console.log(allAnagrams(['fghj', 'jhgf','fgjh']))
console.log(allAnagrams(['abc', 'cab','cock']))