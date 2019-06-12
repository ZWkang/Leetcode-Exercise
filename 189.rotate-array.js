/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 使用额外数组来做
var rotate = function(nums, k) {
  var result = [];
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    result[(i + k) % len] = nums[i];
  }
  for (var j = 0; j < len; j++) {
    nums[j] = result[j];
  }
};

// 第一步 利用额外的数组空间存储正确的旋转后数组位置
// 第二步 将额外数组存储内容吐回给原数组

// 题目说空间需要是O(1)
// 那么就不用额外数组了。
// eg: [1,2,3,4,5,6,7]
// 如果是旋转3位。
// result: [5,6,7,1,2,3,4]
// 我们可以先把[4,3,2,1] [7,6,5]
// 先左右旋转
// 再整个旋转
// [4,3,2,1,7,6,5]
// [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
  if (nums.length === 1) return;
  // 翻转前半部
  k = k % nums.length;
  reverse(nums, 0, nums.length - k - 1);
  // 翻转后半部
  reverse(nums, nums.length - k, nums.length - 1);
  // 整个翻转
  reverse(nums, 0, nums.length - 1);
};

function reverse(arr, prev, next) {
  while (prev <= next) {
    var temp = arr[prev];
    arr[prev] = arr[next];
    arr[next] = temp;
    ++prev;
    --next;
  }
}
