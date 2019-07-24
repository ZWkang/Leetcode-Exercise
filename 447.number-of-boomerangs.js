/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * 解题思路
 * 这道题有别于4sum之类的问题是因为
 *   这道题使用坐标值来做key 用相似度记录为值。
 *
 * 首先
 *  i=>j i=>k的距离 那么这个i就是枢纽点。
 * 我们假设遍历迭代整个数组 每个迭代值为假设为i
 * 设置针对点i 所有可能存在的位置距离。
 * 假设针对点a 有3个位置一致的值，则3个点中需要取两个 排列组合告诉我们3*2有6种方式组合
 * 所以就是这样。
 * 计算位置，我们可以用的是开根号 平方和。但是开根号会产生浮点型。
 * 我们可以直接取平方和 而不去开根号
 */
var numberOfBoomerangs = function(points) {
  var res = 0;
  for (var i = 0; i < points.length; i++) {
    var recordMap = new Map();
    for (var j = 0; j < points.length; j++) {
      if (j !== i) {
        var dis = calcDis(points[i], points[j]);
        if (recordMap.has(dis)) {
          recordMap.set(dis, recordMap.get(dis) + 1);
        } else {
          recordMap.set(dis, 1);
        }
      }
    }
    for (let item of recordMap) {
      res += item[1] * (item[1] - 1);
    }
  }
  return res;

  function calcDis(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
  }
};
