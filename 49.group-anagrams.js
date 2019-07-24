/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
 * 字母异位词
 * 可以参照242.有效的字母异位词来进行梳理何为异位词以及如何进行判断。
 * 判断很简单，两个字符串 长度一致的前提下，建立map进行遍历，如果遍历递减时候遇到一个key小于等于0 则不为异位词
 * 利用hash用于判断字符串的操作很常见
 * 常见的有 利用哈希表，对字符串建立哈希表。
 * 利用ascii码表建立256长度的数组进行记录
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 解题思路

/**
 * 首先如果我们对字符进行排序，'acd' 'dca'=> 'acd' 异位词总是在此时转换后是相等的。
 * 利用这种特性 我们可以对词语转换后的特定词建立map
 * 键为词 值为转换后为这个词语的字符串数组
 * 最后提取这些容纳的字符串数组即可。
 */
var groupAnagrams = function(strs) {
  var hash = {};
  function transform(str) {
    return str
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join("");
  }
  for (var i = 0; i < strs.length; i++) {
    var trans = transform(strs[i]);
    if (hash[trans] !== undefined) {
      hash[trans].push(strs[i]);
    } else {
      hash[trans] = [strs[i]];
    }
  }
  var res = [];

  Object.keys(hash).forEach(item => {
    res.push(hash[item]);
  });
  return res;
};
