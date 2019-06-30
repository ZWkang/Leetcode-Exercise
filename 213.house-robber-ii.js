/**
 * @param {number[]} nums
 * @return {number}
 */
// 这道题是house-robber的follow-up
// 在house-robber基础上，增加了房屋会结成环
// 从而首尾会结成两两相邻
// 这道题的trick在可以将房屋此时分为两种情况处理

// 有包含头部或者有包含尾部

// 即 0 <= n < len - 1 或  1 <= n < len
// 题目此时就退化到原有的house-robber的解法上，只是需要对两种情况再取max值

// 有了思路出代码

// 第一个房子的拆分问题
// 要么排除第一个房子，要么排除最后一个房子
var rob = function(nums) {
  // 对两种边界情况的处理 [] [0]
  if (!nums || nums.length === 0) return 0;
  if (nums.length == 1) return nums[0];
  function cost(start, end) {
    var dp = []; // 初始化dp数组状态
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);
    start += 2; // 做开始条件
    for (var i = start; i < end; i++) {
      // 递推求解 与house-robber基本一致
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[end - 1];
  }
  var len = nums.length;
  return Math.max(cost(0, len - 1), cost(1, len));
};
