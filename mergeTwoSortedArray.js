var merge = function(nums1, m, nums2, n) {
    let insertPosition = m + n - 1
    let left = m - 1
    let right = n - 1
    while (right >= 0) {
        if (nums1[left] > nums2[right]) {
            nums1[insertPosition] = nums1[left]
            left--
        } else {
            nums1[insertPosition] = nums2[right]
            right--
        }
        insertPosition--
    }    

    return nums1
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))