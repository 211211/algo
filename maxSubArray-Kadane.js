/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums = []) {
    let maxSoFar = nums[0];
    let maxEndingHere = Math.max(maxSoFar, 0);
    
    for (let i = 1; i < nums.length; i += 1) {
        maxEndingHere += nums[i];
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        maxEndingHere = Math.max(maxEndingHere, 0);
    }
    
    return maxSoFar;
};
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(input))