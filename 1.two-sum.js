// 暴力解
var twoSum = function(nums, target) {
  if (!nums || nums.length <= 1) {
    return [];
  }

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// hash table 解
