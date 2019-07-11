/**
 * @param {string} s
 * @return {number}
 */

/**
 * 解题思路
 * @param {String} s 
从12题我们可以看出 
有一个规律点。
例如 LC = 100 - 50
L比C代表的数字小。如果数字小的放在数字大的前面，则为减法。
所以我们可以依次对字符串当前字符与下一个字符进行比对
依次来判断是执行加法还是减法操作。
因为js的特性，所以我们还需要对最后一步s[i + 1]为undefined的时候初始化为0
 */
var romanToInt = function(s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var i = 0;
  var result = 0;
  for (; i < s.length; i++) {
    var nextOne = map[s[i + 1]] || 0;
    if (map[s[i]] >= nextOne) {
      result += map[s[i]];
    } else {
      result -= map[s[i]];
    }
  }
  return result;
};
