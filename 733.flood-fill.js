/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// floodfill是一个经典算法，从一个点开始计算出蔓延连接点，就像洪水从一点开始倾泻

// dfs
var floodFill = function(image, sr, sc, newColor) {
  if (image.length == 0 || image[0].length == 0) return image;

  var oldColor = image[sr][sc];
  if (oldColor === newColor) return image;
  image[sr][sc] = newColor;
  var dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1];
  // 利用两个一维数组来处理上下左右的点，只要注意值对应坐标即可。
  var rows = image.length;
  var columns = image[0].length;
  for (var i = 0; i < 4; i++) {
    var x = sr + dx[i];
    var y = sc + dy[i];
    if (
      // 处理边界情况
      x >= 0 &&
      x < rows &&
      y >= 0 &&
      y < columns &&
      image[x][y] === oldColor
    ) {
      floodFill(image, x, y, newColor);
    }
  }
  return image;
};
