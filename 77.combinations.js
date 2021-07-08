/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// 可以直接套dfs+回溯的模版
var combine = function(n, k) {
  function dfs(num, k, index, current, ans) {
    if (current.length === k) {
      // c(k, n)
      // 如何选举长度
      ans.push(current.slice());
      return;
    }
    for (var i = index; i < num; i++) {
      current.push(i + 1); // 存储临时结果集
      dfs(num, k, i + 1, current, ans); // 分支继续dfs走
      current.pop(); // 还原临时结果集
    }
  }
  var current = [];
  var result = [];

  dfs(n, k, 0, current, result);

  return result;
};
