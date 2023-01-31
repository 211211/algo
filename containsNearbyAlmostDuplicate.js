// Given an integer array nums and two integers k and t,
// return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.


// Example 1:

// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
// Example 3:

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false


// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -2^31 <= nums[i] <= 2^31 - 1
// 0 <= k <= 10^4
// 0 <= t <= 2^31 - 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (nums.length <= 1) {
        return false
    }


    const hashMap = new Map()
    // O(n)
    for (let i = 0; i < nums.length; i++) {
        hashMap.set({
            value: nums[i],
            index: i
        })
    }

    let left = 0, right = 1;
    while (right < nums.length) {
        const diff = Math.abs(hashMap.get(right).value - hashMap.get(left).value)
        const range = Math.abs(hashMap.get(right).index - hashMap.get(left).index)

        // abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
        if (diff <= t && range <= k) {
            return true
        } else if (diff > t) {
            left++
        } else if (range > k) {
            right++
        }

        if (left === right) {
            right++
        }
    }

    return false
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))
