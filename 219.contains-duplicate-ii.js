/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 这道题是217 contains-duplicate的follow up
// 题目中要求 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

// 用hash来记录下标

// 有两点。
// 1 什么时候是nums[i] === nums[j]呢
//   那就是当前循环元素 判断的hash不为undefined 的话，那么则又遇到了相同的元素项
// 2 重复元素的考虑
//   比如 [a,b,a,a]  k = 1
//   第一次遇到arr[0] === arr[2] 距离2
//   那么是不是表明0-2这个距离已经是不可用的。那相同元素再出现只能再往后判断了。
//   因为肯定不能a[0] 又跟 a[3]去判断以此
//   肯定是a[2] == a[3]再去判断 所以每次遇到新的重复元素直接set进去更新位置下标就可以了
var containsNearbyDuplicate = function(nums, k) {
  var len = nums.length;
  var i = 0;
  var hash = {};
  for (; i < len; i++) {
    if (Math.abs(hash[nums[i]] - i) <= k && hash[nums[i]] !== undefined) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
};

// tag

// 其实考虑可以一下
// 简单可以直接所有的结果集遍历。
// 针对i点 考虑范围在[i, i + k] 判断这个区间是否存在题目所要求的值
// 所以代码就写成了

var containsNearbyDuplicate = function(nums, k) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var pos = Math.min(i + k, len - 1);
    // 取i + k 的范围，与len比较 避免越界
    for (var j = i + 1; j <= pos; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
