/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false; // 需要等长
  var hash = new Array(256).fill(0);
  for (var i = 0; i < s.length; i++) {
    hash[s[i].charCodeAt()]++; // 统计s字符串中的字符集 hash表
  }
  for (var j = 0; j < t.length; j++) {
    hash[t[j].charCodeAt()]--; // 这边对字符集内容做判断。
    if (hash[t[j].charCodeAt()] < 0) {
      // < 0证明t有字符比s多或者比s少
      return false;
    }
  }
  return true;
};
