/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i] && nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      ++i;
    }
  }
  return i;
};
// 它是26题的提升题
// 对比26题，不同在于去重允许两次重复
// [1,1,1,2,2,3] => [1,1,2,2,3]

// code
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  var i = 2;
  for (var j = 2; j < nums.length; j++) {
    if (nums[j] > nums[i - 2]) {
      nums[i] = nums[j];
      ++i;
    }
  }
  return i;
};
// 分解步骤
// 一个指针做步进器 一个指针做记录下标位置

// 例如 [1, 1, 1, 2, 2, 3, 4, 5]
// 步进器与记录下标初始化直接到arr[2]
// 因为允许2个重复
// 1与arr[0]比对
// 如果是相等的话 那么记录下标不动，步进器继续走。
// 此时下标为2 步进器为3
// arr[3] = 2  2 != arr[0] 1
// 所以nums[i]记录下标交换nums[j]步进器指向元素
// 重复即可
