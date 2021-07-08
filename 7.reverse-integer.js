/**
 * @param {number} x
 * @return {number}
 */

// 解题思路
// 数字的操作我们总会使用到求余

//  翻转一个数字 除了将它弄成字符串处理，
// 可以试想一下  从右到做，依次求出值，然后从左到右增大这个值。
// result = result * 10 + x % 10
// x就是每次求余取得的值
var reverse = function(x) {
  if (x === 0) return 0;
  var result = 0;
  var temp = Math.abs(x);
  var s = x / temp; // 获得当前的数字的符号(负或非负)
  x = Math.abs(x);
  while (x != 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  result *= s; //

  // [题目的边界情况]
  //  [−2^31,  2^31 − 1]
  if (result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1) {
    return result;
  } else {
    return 0;
  }
};
