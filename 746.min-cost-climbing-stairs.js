/**
 * @param {number[]} cost
 * @return {number}
 */

// f(n) = minCost(f(n - 1), f(n - 2)) + n
var minCostClimbingStairs = function(cost) {
  var dp = [cost[0], cost[1]];
  var len = cost.length;
  for (var i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  // 因为f(n - 1)也可以直接到末尾。 所以这里需要判断一下较小值
  return Math.min(dp[len - 1], dp[len - 2]);
};

// 末尾点相当于是f(n) n = cost.length
// 求f(n - 1) 与f(n - 2)较小值
