var subarraySum = function (nums, k) {
  const hashMap = new Map()
  let sum = 0
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    sum +=nums[i]
    if (hashMap.has(sum - k)) {
      count += hashMap.get(sum - k)
    }

    hashMap.set(sum, (hashMap.get(sum) || 0) + 1)
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
