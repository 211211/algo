function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = parseInt((left + (right - left) / 2), 10);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([3, 1, 2, 2, 2], 2))
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
