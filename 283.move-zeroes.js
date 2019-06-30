/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 第一种解法
// 将非0元素先依次置前面
// 再将后面全部填充0
var moveZeroes = function(nums) {
  if (nums == null || nums.length == 0) return;

  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[pos++] = nums[i];
    }
  }
  while (pos < nums.length) {
    nums[pos++] = 0;
  }
};

// 维护一个非0区间，遍历做交换。
var moveZeroes = function(nums) {
  var start = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      if (i != start) {
        swap(nums, start++, i);
      } else {
        start++;
      }
    }
  }
  function swap(arr, prev, next) {
    var temp = arr[prev];
    arr[prev] = arr[next];
    arr[next] = temp;
  }
};
