var twoSum = function (nums, target) {
  let storage = {};
  let leftover = null;
  for (let i = 0; i < nums.length; i++) {
    if (storage[nums[i]] !== undefined) {
      return [storage[nums[i]], i];
    }
    leftover = target - nums[i];
    storage[leftover] = i;
  }
  return null;
};