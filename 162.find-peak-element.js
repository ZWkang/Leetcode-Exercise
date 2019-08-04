/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 解题报告
 *
 * 最开始的想法是O(n)遍历做。
 * 虽然知道这个题是medium不会那么直接的。
 */
var findPeakElement = function(nums) {
  if (!nums) return 0;
  if (nums.length == 1) return 0;
  var index = 0;
  var res = 0;
  var startPointer = 0;
  while (index < nums.length) {
    if (index === nums.length - 1) {
      if (nums[index] > nums[index - 1]) {
        res = index;
      }
      ++index;
      continue;
    }
    if (nums[index] >= nums[startPointer] && nums[index] > nums[index + 1]) {
      res = index;
    }

    ++index;
    startPointer = index - 1;
  }
  return res;
};

/*
 * 题解：
 * 可以使用二分查找
 * 原理是 峰值的点寻找规律
 * 对于任意一个点而言
 *   点i 若点nums[i] < nums[i + 1]
 *   则[i + 1, n] 区间必定存在峰值
 *   点i 若点nums[i] > nums[i + 1]
 *   则[0, i] 区间必定存在峰值
 */

var findPeakElement = function(nums) {
  var left = 0,
    right = nums.length - 1;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
