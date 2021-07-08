/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 求子集看起来就像是求组合问题。
// 使用dfs+回溯来做呗。
// dfs需要注意的是dfs再次调用的时候要用i而不是实参idx
var subsets = function(nums) {
  var result = [];
  var current = [];
  function dfs(nums, idx, current, result) {
    result.push(current.slice());
    for (var i = idx; i < nums.length; i++) {
      current.push(nums[i]);
      dfs(nums, i + 1, current, result); // 就是这里i+1需要注意啦
      current.pop();
    }
  }
  dfs(nums, 0, current, result);
  return result;
};

// 也可以换个思路。使用迭代来做。
// 例如现在有三个数[1,2,3]
// 第一次我们会生成一个遇到1这个元素
// 我们自然会生成[1][] 两个组合
// 然后又遇到了2 这个数
// 我们自然将原有的 [1][]都增加2进去。
// 即变成了[1,2][2]
// 此时结果集中有 [1][][1,2][2]
// ➡又遇到了3这个值。
// 此时我们只要继续生成[1,3][3][1,2,3][2,3]
// 此时结果集中有8个子集。即为结果集

var subsets = function(nums) {
  var result = [[]];

  for (var i = 0; i < nums.length; i++) {
    var size = result.length;
    // size需要在当前做判断，不可以在循环内判断
    var temp = JSON.parse(JSON.stringify(result));
    // 拷贝一份副本做下一次循环插入
    for (var j = 0; j < size; j++) {
      // 简单压入即可
      temp[j].push(nums[i]);
    }
    // 合并结果集
    result = result.concat(temp);
  }
  // 返回结果集
  return result;
};
