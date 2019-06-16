/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 跟之前的岛屿数量类似

// 之前的岛屿数量是求连接块 使用dfs去做

// 这里围绕的区域，我们可以看到如果是边角的O，必定不被围绕。
// 对这些边界的O进行dfs处理。求得边角O连接的O。先将这些O设为特殊的字符。
// 再进行一次O(mn)遍历，将现在仍为O的点(不为特殊字符的)设为X
// 同时对特殊字符进行处理 设定为O
var solve = function(board) {
  if (!board || board.length === 0) return 0;

  var rows = board.length;
  var columns = board[0].length;

  //   for (var row = 0; row < rows; row++) {
  //     dfs(board, row, 0, rows, columns);
  //     dfs(board, row, columns - 1, row, columns);
  //   }
  //   for (var column = 1; column < columns; column++) {
  //     dfs(board, 0, column, rows, columns);
  //     dfs(board, rows - 1, column, rows, columns);
  //   }
  for (var row = 0; row < rows; row++) {
    for (var column = 0; column < columns; column++) {
      if (
        (row == 0 || row == rows - 1 || column == 0 || column == columns - 1) &&
        board[row][column] == "O"
      ) {
        dfs(board, row, column, rows, columns);
      }
    }
  }
  for (var row = 0; row < rows; row++) {
    for (var column = 0; column < columns; column++) {
      if (board[row][column] === "O") {
        board[row][column] = "X";
      } else if (board[row][column] === "$") {
        board[row][column] = "O";
      }
    }
  }
};
function dfs(board, row, column, rows, columns) {
  if (board[row][column] === "O") {
    board[row][column] = "$";
    if (row + 1 < rows && board[row + 1][column] === "O") {
      dfs(board, row + 1, column, rows, columns);
    }
    if (row > 0 && board[row - 1][column] === "O") {
      dfs(board, row - 1, column, rows, columns);
    }
    if (column + 1 < columns && board[row][column + 1]) {
      dfs(board, row, column + 1, rows, columns);
    }
    if (column > 1 && board[row][column - 1]) {
      dfs(board, row, column - 1, rows, columns);
    }
  }
}
