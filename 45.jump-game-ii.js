/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
// 贪最远跳位置
var jump = function(nums) {
  var currentMax = 0,
    nextMax = 0,
    step = 0,
    index = 0;
  var ans = 0;
  // 条件就是是否能到达最后一个位置，所以这里的currentMax应该小于最后一个index位置
  while (currentMax < nums.length - 1) {
    console.log(currentMax);
    ++ans; // 其实每次进入循环了，就是一段范围已经经过筛选了。所以ans可以直接累加
    nextMax = currentMax; // 保存一下当前的currentMax 充当遍历条件。
    for (; index <= nextMax; index++) {
      // 注意这个index是每次循环复用一个index的。
      // 每次更新此范围内最佳的currentMax值
      // 当前点与能到达的范围想加，等于当前点最大能到达范围。
      // 然后与我们的currentMax进行比对，决定是否update currentMax值。
      // 如果比currentMax还小，那肯定是不用进行更新啦。
      currentMax = Math.max(nums[index] + index, currentMax);
    }
    if (currentMax === nextMax) return -1; // nextMax仍然与currentMax值相等，意味着当前范围已经没有可以到达下一个范围的值了
  }
  return ans;
};
