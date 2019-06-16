/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 感觉这道题的本质还是跟add two number 一样的。
// string 本质与 array相似。所以做法应该也是没什么差别
// 从右到左操作，操作的同时处理余数，sum每次累加后要/10做进位
var addStrings = function(num1, num2) {
  var m = num1.length - 1;
  var n = num2.length - 1;
  var result = "";
  var sum = 0;
  while (n >= 0 || m >= 0) {
    if (m >= 0) {
      sum += Number(num1[m]);
      --m;
    }
    if (n >= 0) {
      sum += Number(num2[n]);
      --n;
    }
    result = (sum % 10) + result;
    sum = Math.floor(sum / 10);
  }
  if (sum === 1) {
    result = "1" + result;
  }
  return result;
};
