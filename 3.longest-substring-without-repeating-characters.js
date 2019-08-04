/**
 * @param {string} s
 * @return {number}
 */

// 本题涉及两个知识点
// 1. 滑动窗口的操作
// 2. 处理重复字符的方法(利用hash)

/**
 * 滑动窗口模版
 *
 * left = 0 , right = -1
 *
 * while(left < len) {
 *  if(right + 1 < s.length && 判定条件)
 *   right ++
 *   else left ++
 * }
 */
var lengthOfLongestSubstring = function(s) {
  if (!s || s.length === 0) return 0;
  var max = -1;

  var left = 0,
    right = -1;
  var temp = {};

  while (left < s.length) {
    if (
      right + 1 < s.length &&
      (temp[s[right + 1]] === undefined || temp[s[right + 1]] === 0)
    ) {
      temp[s[++right]] = 1;
    } else {
      temp[s[left++]]--;
    }

    max = Math.max(right - left + 1, max);
  }
  return max;
};
