function findMax(nums = []) {
    // Complete the function
    let result = nums[0]
    
    for (let i = 0; i<nums.length;i++) {
        let currentValue = nums[i]
        if (currentValue > result) {
            result = currentValue
        }
    }
    
    return result
}

console.log(findMax([-10000, -100000, -2, -5 , -5]))

function findMax2(a = [], b = [], s = 10) {
    let max = -Infinity
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            const sum = a[i] + b[j]
            if (sum < s && max < sum) {
                max = sum
            }
        }
    }

    return max
}

console.log(findMax2([2, 3, 5], [-2, -3, -4], 10))