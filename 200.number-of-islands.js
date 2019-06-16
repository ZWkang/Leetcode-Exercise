/**
 * @param {character[][]} grid
 * @return {number}
 */
// 岛屿的概念是联通的区块
// 给予的数据是一个二维数组

// 例如如果
// [['1','0']
//  ['0', '1']]
// 这样子应该为两个岛屿
// 11110
// 11010
// 11000
// 00000

// 这样子为一个岛屿

// 我们可以简单的了解。两个1的点，如果只是单纯的对角线相对，而不存在联通
// 则此时为两个岛屿。

// 相当于我们将这个二维数组的开端点，开始做dfs遍历。
// 从一个点，遵循它的上下左右做联通判断，如果该点继续为1的话，则为同一块岛屿
// 该点置为0.
// 获得第一块岛屿以后，不在上一块岛屿内的点，则点数仍为1
// 若在第一块岛屿的点，点数应该为0
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  var rows = grid.length;
  var columns = grid[0].length;
  var result = 0;
  for (var row = 0; row < rows; row++) {
    for (var column = 0; column < columns; column++) {
      if (grid[row][column] === "1") {
        ++result;
        dfs(grid, row, column, rows, columns);
      }
    }
  }

  return result;
};

function dfs(grid, row, column, rows, columns) {
  if (
    row < 0 ||
    column < 0 ||
    row >= rows ||
    column >= columns ||
    grid[row][column] === "0"
  ) {
    return;
  }
  grid[row][column] = "0";
  dfs(grid, row + 1, column, rows, columns);
  dfs(grid, row - 1, column, rows, columns);
  dfs(grid, row, column + 1, rows, columns);
  dfs(grid, row, column - 1, rows, columns);
}
