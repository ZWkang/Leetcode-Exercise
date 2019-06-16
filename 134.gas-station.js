/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  var sum = 0;
  var currentSum = 0;
  var start = 0;
  for (var i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    currentSum += gas[i] - cost[i];
    if (currentSum < 0) {
      start = i + 1;
      currentSum = 0;
    }
  }
  if (sum < 0) return -1;
  return start;
};

// 首先这道题是有点蒙的读题目
// 首先是我们可以假设如果无法跑完一圈是什么状态

// sum(gas) < sum(cost)
// 如果获取的燃油小于消耗的，那必然不能跑完一圈。
// 再者就是当i => n点。如果 i => n 的燃油补给小于 消耗的话
// i=>n不可达,  当可以跑完一圈的情况下，这种不可达代表
// i => n之间都没有一个为起点。起点只要继续从n + 1开始计算。
