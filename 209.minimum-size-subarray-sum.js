/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

//利用滑动窗口解
// 滑动窗口两个部分

// right -1
// 内部条件right + 1 < nums.length
// ++right

// left ++

var minSubArrayLen = function(s, nums) {
  var left = 0,
    right = -1,
    res = nums.length + 1,
    sum = 0;
  while (left < nums.length) {
    if (right + 1 < nums.length && sum < s) {
      sum += nums[++right];
    } else {
      sum -= nums[left++];
    }
    if (sum >= s) {
      res = Math.min(res, right - left + 1);
    }
  }
  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};
