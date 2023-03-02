const threeSum = (nums, target = 0) => {
    let cash = {}
    let mas = []

    for(let i = 0; i < nums.length; i++){
        cash[nums[i]] = i
    }

    for(let i = 0; i < nums.length; i++){
        let sum = target - nums[i] - nums[i + 1]
        if(cash[sum] && nums[sum] !== i){
            mas.push([sum, nums[i], nums[i + 1]])
        }
    }

    return mas || []
}



console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))