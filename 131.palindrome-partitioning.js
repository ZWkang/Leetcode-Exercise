/**
 * @param {string} s
 * @return {string[][]}
 */

// 首先回文的定义是什么？
// aa aba 形如这样的都成为回文，即从左到右阅读均相等。

// 此题是让我们找出所有可能的分割方案。
// 直观上感受就是 又是组合问题，只是组合加上了条件，是仅元素均为回文串。
// 注意： 一个字母单独也被成为回文字符串
// 注意： 此题不是让你组成的组合要为回文字符串，而是值分割的子串为回文串

var partition = function(s) {
  function ispartition(str) {
    if (str.length === 1) return true;
    if (str === "") return false;
    var left = 0;
    var right = str.length - 1;
    while (left <= right) {
      if (str[left++] !== str[right--]) {
        return false;
      }
    }
    return true;
  }
  // 处理分割情况

  function dfsGetPartition(str, idx, current, result) {
    if (idx == str.length) {
      result.push(current.slice());
      return;
    }

    for (var i = idx; i < str.length; i++) {
      var temp = str.slice(idx, i + 1);

      if (ispartition(temp)) {
        current.push(temp);
        dfsGetPartition(str, i + 1, current, result);
        // 注意这里的步进是i+ 1
        // 所以我们可以很干脆的使用idx与str.length判断
        // 因为循环范围是[idx, str.length)
        // 步进1 则边界时候为[str.length]
        // 表示组合遍历的结束
        current.pop();
      }
    }
  }
  var current = [],
    result = [];
  dfsGetPartition(s, 0, current, result);
  return result;
};
