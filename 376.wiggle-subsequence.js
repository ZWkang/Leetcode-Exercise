/**
 * @param {number[]} nums
 * @return {number}
 */

// 基础dp问题
// 一个子序列呈现波峰状上下
// 我们只要获取到记录向上序列，一个记录着向下序列
// 那么up记录着的应该是上一点下降序列值+1与上一个上升序列值比较
// down 记录者的应该是上一点上升序列值+1与上一个下降序列值比较
// up值记录着首值为正数的摆动子序列的最大长度
// down值记录着首值为负数的摆动子序列的最大长度
var wiggleMaxLength = function(nums) {
  if (nums.length <= 0) return 0;
  var len = nums.length;
  var up = new Array(len).fill(1);
  var down = new Array(len).fill(1);

  for (var i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      down[i] = down[i - 1];
      up[i] = Math.max(up[i - 1], down[i - 1] + 1);
    } else if (nums[i] < nums[i - 1]) {
      up[i] = up[i - 1];
      down[i] = Math.max(down[i - 1], up[i - 1] + 1);
    } else {
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }
  }
  return Math.max(up[len - 1], down[len - 1]);
};

// 使用贪心此题应该也是有解
// 维护两个变量p和q，然后遍历数组
// 如果当前数字比前一个数字大，则p=q+1
// 如果比前一个数字小，则q=p+1
// 最后取p和q中的较大值跟n比较，取较小的那个
var wiggleMaxLength = function(nums) {
  if (nums.length <= 0) return 0;
  var len = nums.length;
  var up = 1;
  var down = 1; // 出发点从1开始

  for (var i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.min(Math.max(up, down), len);
};
