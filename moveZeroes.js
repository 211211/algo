/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if (Array.isArray(nums) && nums.length === 1) {
        return
    }

    let left = 0, right = 1
    while(right <= nums.length - 1) {
        if (nums[left] === 0 && nums[right] !== 0) {
            let temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
            right++
        } else if (nums[left] !== 0) {
            left++
        }

        right++
    }
};

var nums = [0,1,0,3,12]
console.log([...nums])
console.log(moveZeroes(nums))

nums = [0]
console.log([...nums])
console.log(moveZeroes(nums))

nums = [2, 1]
console.log([...nums])
console.log(moveZeroes(nums))

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]