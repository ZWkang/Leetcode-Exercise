/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 这道题与剑指offer的类似
// solution 找规律
// 主要是找到数的规律即可
// 这道题的规律是在左下角的点上，它上面的元素比它小，它右边的元素比它大
// 据此我们便可以用这个点充当起点做遍历比对操作
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  var px = 0;
  var py = matrix.length - 1;
  var maxX = matrix[0].length;
  var minY = 0;
  // 初始化点，以及设立边界
  while (px < maxX && py >= minY) {
    if (matrix[py][px] === target) {
      return true;
    } else if (target > matrix[py][px]) {
      ++px;
    } else {
      --py;
    }
  }
  return false;
};
