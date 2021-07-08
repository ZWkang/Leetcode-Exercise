/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力解
// 遍历所有可能性  取最大值
// var maxArea = function(height) {
//     var max = -1;
//     for(var i = 0 ; i < height.length ; i ++) {
//         for(var j = i + 1; j < height.length ; j ++) {
//             max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
//         }
//     }
//     return max
// };
// 双指针，策略是优先移动较小高度的一端。
// 然后取最大值即可
var maxArea = function(height) {
  var max = -1;
  var left = 0,
    right = height.length - 1;

  while (left <= right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
