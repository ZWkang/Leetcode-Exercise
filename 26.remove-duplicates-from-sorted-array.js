/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      ++i;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// 注意题目是已经排好序了，排序完毕的话只需要当前往后比对即可。

// 也是双指针 快慢指针 快指针jj跳过重复项。慢指针i 确立元素
// Time O(n) space O(1)
