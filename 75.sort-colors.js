/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 这种方式是比较直观的一种方式

// 一个指针指向的是当前0的序列下标。一个len指向的是当前2的序列下标

// 0在数组前端，2在数组尾端。

// 遇到0 的时候只需要将0序列与当前位置交换 并且i++以及下标位置++即可
// 遇到2的时候只需要将2序列的尾端位置交换，并且len --代表尾端位置收缩。
// 且此时的i不用做++因为交换后的i并未进行过对比。如果此时直接++则会丢失对比
var sortColors = function(nums) {
  var len = nums.length - 1;
  var start = 0;
  for (var i = 0; i <= len; ) {
    if (nums[i] == 2) {
      swap(nums, i, len--); // 交换len-- 然后还需要继续对i进行判定
    } else if (nums[i] === 0) {
      swap(nums, i++, start++); // 交换0 元素 使用i作为0序列的下标记录
    } else {
      i++;
    }
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return nums;
};

// 一些更好看的做法
// j 作为记录0的下标
// i是累加的。在等于0的时候，直接累加 交换
// 等于2的时候需要交换当前元素以及现在2“最末尾的元素”

// 像之前说的，并未对当前交换了的元素进行判定。
// 所以判断区间需要收缩。 所以当前的i需要累减一
var sortColors = function(nums) {
  var j = 0;
  var k = nums.length - 1;

  for (var i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(nums, i, j++);
    } else if (nums[i] === 2) {
      swap(nums, i--, k--);
    }
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return nums;
};
