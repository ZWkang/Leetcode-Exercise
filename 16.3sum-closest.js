/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);

  var len = nums.length;
  var result = nums[len - 3] + nums[len - 2] + nums[len - 1];

  for (var i = 0; i < len - 2; i++) {
    var left = i + 1,
      right = len - 1;
    var newestRecord;
    var preResultRecord;
    var cumulativeValue;
    var restSum = target - nums[i];
    while (left < right) {
      cumulativeValue = nums[i] + nums[left] + nums[right];
      preResultRecord = Math.abs(result - target);
      newestRecord = Math.abs(cumulativeValue - target);
      if (preResultRecord > newestRecord) {
        result = cumulativeValue;
      }
      if (nums[left] + nums[right] < restSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
