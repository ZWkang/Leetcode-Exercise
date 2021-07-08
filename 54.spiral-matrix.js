/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var res = [];
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) {
    return res;
  }
  // 行列初始值
  var rowBegin = 0;
  var rowEnd = matrix.length - 1;
  var columnBegin = 0;
  var columnEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // 左到右
    for (var i = columnBegin; i <= columnEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }
    rowBegin++;
    // 上到下
    for (var j = rowBegin; j <= rowEnd; j++) {
      res.push(matrix[j][columnEnd]);
    }
    columnEnd--;
    // 如果rowBegin <= rowEnd的话，证明还有右拐的能力
    if (rowBegin <= rowEnd) {
      // 右到左
      for (var z = columnEnd; z >= columnBegin; z--) {
        res.push(matrix[rowEnd][z]);
      }
    }
    rowEnd--;

    if (columnBegin <= columnEnd) {
      // 下到上
      for (var y = rowEnd; y >= rowBegin; y--) {
        console.log(matrix[columnBegin][y]);
        res.push(matrix[y][columnBegin]);
      }
    }
    columnBegin++;
  }
  return res;
};
