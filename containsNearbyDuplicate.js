// https://leetcode.com/problems/contains-duplicate-ii/

// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k. 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (nums.length <= 1) {
        return false
    }

    let left = 0, right = 1;
    while(left < right && left <= nums.length) {
        // Không thỏa đề bài
        // 1. i & j lệch nhau hơn k đơn vị
        // 2. j nằm ngoài vòng lặp con
        if (Math.abs(left - right) > k || right >= nums.length) {
            left++
            right=left+1
            continue
        }

        // thỏa đề bài
        // 1. Giá trị tại i = giá trị tại j
        // 2. Vị trí của i & j ko lệch nhau quá k đơn vị
        if (nums[left] === nums[right] && Math.abs(left - right) <= k) {
            return true
        }

        right++
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))

// hash map solution
// The idea is while looping through the nums array, 
// we do not only remember the element that has been seen (hence, hashmap is used), 
// but also the index where it was seen in order to compare that index with 
// the current looping index and check if the distance is within k (hence, hashmap key with associated value as the index value).
// So, two key operations here:

// hashMap.set(nums[i], i); : for adding to hashmap if first seen OR update existing value when seen again but too far away from the previous first seen (because it may qualify for subsequent duplicates).
// Math.abs(hashMap.get(nums[i]) - i) <= k: for checking distance between the previous seen element and the current seen element.
// This is an extension of a previous problem "Contains Duplicate" (https://leetcode.com/problems/contains-duplicate/), where we can also return the (i,j) index of the duplicates, rather than just true/false boolean flag.

// Food for thoughts: what about returning all indices of the most duplicate occurrences within a k-width window, assuming unique solution can be found only? e.g. input: nums = [1, 2, 3, 3, 2, 3, 5], k = 4 || output : [2,3,5]
var containsNearbyDuplicate2 = function (nums, k) {
    if (nums.length <= 1) {
        return false
    }

    // storing the value and the index where we have seen that value
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (hashMap.has(nums[i])) {
            // nums[i] == nums[j] and abs(i - j) <= k. 
            if (Math.abs(hashMap.get(element) - i) <= k) {
                return true
            } else {
                // update last seen at index of the element
                hashMap.set(element, i)    
            }
        } else {
            // where we have seen it
            hashMap.set(element, i)
        }
        
    }

    return false
};

console.log(containsNearbyDuplicate2([1,2,3,1], 3))
console.log(containsNearbyDuplicate2([1,2,3,1], 3))
console.log(containsNearbyDuplicate2([1,2,3,1,2,3], 2))