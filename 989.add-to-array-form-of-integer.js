/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// 这道题也是变种题 add two number的变种
// 首先我们要考量的是如何计算

// [1,2,0,0]  K= 34
// => 1234

//我们可以通过对K做求余来对每一位进行操作
// 例如789求余10 第一次求余余9 第二次8 第三次7
// 利用这种方式我们可以求出每次累加后对应位数上的结果。

var addToArrayForm = function(A, K) {
  var m = A.length;
  var result = [];
  var current = K;
  while (--m >= 0 || current > 0) {
    // 当A已经处理结束了。那么就是K还有盈余。则继续操作
    if (m >= 0) {
      // 第一次是个位上相加的结果
      // 第二次是十位上相加的结果
      current += A[m];
    }
    // 将余数存入result中
    result.push(current % 10);
    // 做数值处理。
    current = Math.floor(current / 10);
  }
  //  因为存入的时候是从个位开始存，而显示是高位从低位的。
  // 所以这里翻转一下。
  result.reverse();
  return result;
};
