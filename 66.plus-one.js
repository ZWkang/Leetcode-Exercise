/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 这道题与add-two-number很相似。 解法应该也是大同小异的。
// sum处理累加，每个节点再同步做操作，最后对sum的结果做判断处理即可

// 题目比较类似，只要有感觉很快能搞定，也是easy的原因。

var plusOne = function(digits) {
  var len = digits.length;
  var sum = 0;
  // 从尾部元素添加1
  for (var i = len - 1; i >= 0; i--) {
    if (i == len - 1) {
      sum = sum + digits[i] + 1; // 对尾端元素 + 1
    } else {
      sum = sum + digits[i]; // 对非尾端元素做累加
    }

    digits[i] = sum % 10; // 计算当前节点应该的值
    if (sum < 10) {
      // 当sum小于0  不用对全部元素进行累加判断
      sum = 0; // sum = 0 避免下面的sum === 1 添加进了进位1
      break;
    }
    sum = Math.floor(sum / 10); // 对sum判断是否需要进位
  }
  if (sum === 1) {
    // 遍历结束 sum 仍为1 则代表仍需要进位1
    digits.unshift(1);
  }
  return digits;
};
