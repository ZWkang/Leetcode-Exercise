/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 最直观的思路就是借助hash空间来判断是否存在第二个重复的数字

// 技巧 第二次判断 直接判断当前值 第一次hash是否存在即可
var containsDuplicate = function(nums) {
  if (!nums || nums.length <= 0) return false;
  var len = nums.length;
  var hash = {};
  var i = 0;
  for (; i < len; i++) {
    if (hash[nums[i]] === 1) return true;

    hash[nums[i]] = 1;
  }
  return false;
};
