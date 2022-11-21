function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // I have calculated middle value using mid = low + (high — low)/2 instead of mid = (low + high)/2. 
    // Because it fails for larger values of integer variables low and high. 
    // It fails particularly if the sum of low and high exceeds the highest positive integer value 2³² — 1. 
    // The sum overflows to a negative value and the value remains negative when divided by 2.
    // So using mid = low + (high — low)/2 for finding middle value is preferable.
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

function binarySearchRecursive(nums, target, left, right) {
  if (left > right) {
    return -1
  }

  console.log({left, right})
  // find mid
  const mid = parseInt((left + (right - left) / 2), 10);
  console.log({mid})

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursive(nums, target, mid + 1, right)
  } else {
    return binarySearchRecursive(nums, target, left, mid - 1)
  }
}

// console.log(binarySearch([3, 1, 2, 2, 2], 2))
console.log(binarySearchRecursive([-1, 0, 3, 5, 9, 12], 9, 0, 5));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
