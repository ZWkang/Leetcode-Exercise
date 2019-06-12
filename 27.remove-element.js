/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针 自己想的思路是。
// 把是的都移动到右边
// 答案的参考思路是
// 把不是的移动到左边
var removeElement = function(nums, val) {
  var prev = 0;
  var next = nums.length - 1;
  while (prev <= next) {
    if (nums[prev] === val && nums[next] !== val) {
      nums[prev] = nums[next];
      --next;
      ++prev;
    } else if (nums[next] === val) {
      --next;
    } else if (nums[prev] !== val) {
      ++prev;
    }
  }
  return next + 1;
};

// 这道题是注意是原地。
// 那么就不是申请数组空间去做了。
// 原数组[3,2,2,3] val = 3
// 取前两位 那么[2,2,2,3] val = 3
// 这样子也是获得的2，2
// 是不是也可以看成已经移除了

// 由这种思路可以相出一种双指针做法
// time O(n) space O(1)
var removeElement = function(nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      // 只是将元素进行往前替换
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// 2: Two Pointers - when elements to remove are rare
var removeElement = function(nums, val) {
  var i = 0;
  var j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else {
      i++;
    }
  }
  return i;
};
// 左右指针同时进行遍历，这种情况下边界状况就是指针重复。
// [1]面对这种情况允许prev === next
// 将当前元素与最后一个元素交换出来并处理最后一个元素。
// 交换的最后一个元素可能是您要删除的值。
// 在下一次迭代中我们仍会检查这个元素。
//
