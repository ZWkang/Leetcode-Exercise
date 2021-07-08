/**
 * @param {string} str
 * @return {number}
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var left = 0;
  var result = 0;
  // 对空格进行处理 让步进器走起来
  while (left < str.length) {
    if (str[left] == " ") {
      ++left;
    } else {
      break;
    }
  }
  //  初始化符号位
  var sign = 1;
  // 判断是否为负数
  if (str[left] === "-") {
    sign *= -1;
    left++;
  } else if (str[left] === "+") {
    sign *= 1;
    left++;
  }
  while (left < str.length) {
    if (str[left] >= "0" && str[left] <= "9") {
      // 对数字进行截获处理
      result = result * 10 + (str[left++] | 0); // 处理数字的生成 从左到右逐步添加就是逐渐* 10
    } else {
      break;
    }
  }
  // 处理结果符号
  result = result * sign;
  // 对生成数字限定范围进行处理
  if (result <= -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  if (result >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return result;
};
