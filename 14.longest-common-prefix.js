/**
 * @param {string[]} strs
 * @return {string}
 */

// 从第一个元素开始取为起点。
// 可以想象一下，AB两个元素的最长前缀，必定是AB都有的字符。

// 所以先取一个字符串做基准，然后在对每个字符串进行比对，从而求出最长的公共前缀
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length == 0) return "";
  var len = strs.length;
  var res = strs[0];

  for (var i = 1; i < len; i++) {
    while (strs[i].indexOf(res) != 0) {
      res = res.substr(0, res.length - 1);
    }
  }
  return res;
};
