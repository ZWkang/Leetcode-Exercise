/**
 * @param {number[]} A
 * @return {number[]}
 */

// 这道题如果是借用额外数组空间挺好做的。
// 双指针左右开始遍历 比对绝对值之间的大小。
// 依次插入额外数组空间
var sortedSquares = function(A) {
  var len = A.length - 1;
  var start = 0;
  var result = [];
  var resultSize = A.length - 1;
  while (start <= len) {
    if (Math.abs(A[len]) < Math.abs(A[start])) {
      result[resultSize--] = Math.pow(A[start++], 2);
    } else {
      result[resultSize--] = Math.pow(A[len--], 2);
    }
  }
  return result;
};
