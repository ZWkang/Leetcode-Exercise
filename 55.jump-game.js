/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 跳格子游戏
// tag: Array, 贪心算法

// [2, 3, 1, 1, 4]
// 第一次从格子0出发。可以允许走1， 2 格
// 格子的选择如何为当前最优呢？
// 当然是当前的格在允许的范围内步进，选择下一个格子时，到往后的格子允许的范围越大，则为最优
// 这种情况就变成了类似贪心的全局最优解从局部最优解推导

// 而当遍历结束，最终落点小于队尾时，则代表无解。
// 且当前遍历的点必须在 [我当前能到达的点内]。 <= result value
// [3,2,1,0,3] 避免这种情况发生
//  且当前的点大于队尾长度时候，返回true即可
var canJump = function(nums) {
  var len = nums.length;
  var ans = 0;
  var index = 0;
  for (; index < len && index <= ans; index++) {
    ans = Math.max(index + nums[index], ans);
    if (ans >= len - 1) return true;
  }
  return false;
};
