/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//     // 暴力
//     var rows = triangle.length
//     var columns = triangle[rows - 1].length
//     var result = Infinity
//     var len = triangle.length
//     for(var i = 0 ; i < triangle[len - 1].length ; i ++) {
//         result = Math.min(result, clac(triangle, i, len - 1, columns, rows))
//     }
//     return result
// };

// function clac(triangle, x, y, maxX, maxY) {
//     if(x < 0 || y < 0 || x >= maxX || y >= maxY) {
//         return Infinity
//     }

//     if(x === 0 && y === 0) {
//         return triangle[0][0]
//     }

//     return Math.min(
//         clac(triangle, x - 1, y -1, maxX - 1, maxY) + triangle[y][x],
//         clac(triangle, x, y -1, maxX - 1, maxY) + triangle[y][x]
//     )

// }

// 与以下解法同理
/**
 * [[2],
 *  [3,4],
 *  [6,5,7],
 *  [4,1,8,3]]
 */
/**
 * 遍历得过程就是将每一层给算出来
 * [[2],
 *  [5,6],
 *  [11,10,11],
 *  [15,11,18,14]]
 *
 * 用二维数组得到累加结果以后，再对最下层的值，求最小值即可
 */
var minimumTotal = function(triangle) {
  var dp = [];
  var rows = triangle.length;
  for (var j = 0; j < rows; j++) {
    dp[j] = [];
  }
  dp[0][0] = triangle[0][0];
  for (var i = 1; i < rows; i++) {
    for (var j = 0; j < triangle[i].length; j++) {
      if (j == 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }
  return Math.min.apply(null, dp[dp.length - 1]);
};

// 记忆化搜索
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var cache = [];
// var minimumTotal = function(triangle) {
//   // 暴力
//   var rows = triangle.length;
//   for (var j = 0; j < rows; j++) {
//     // 初始化二维数组空间
//     cache[j] = [];
//   }
//   var columns = triangle[rows - 1].length;
//   var result = Infinity;
//   var len = triangle.length;
//   for (var i = 0; i < triangle[len - 1].length; i++) {
//     result = Math.min(result, clac(triangle, i, len - 1, columns, rows));
//   }
//   return result;
// };

// function clac(triangle, x, y, maxX, maxY) {
//   if (x < 0 || y < 0 || x >= maxX || y >= maxY) {
//     return Infinity;
//   }

//   if (x === 0 && y === 0) {
//     return triangle[0][0];
//   }
//   if (cache[y][x] === undefined) {
//     cache[y][x] = Math.min(
//       clac(triangle, x - 1, y - 1, maxX - 1, maxY) + triangle[y][x],
//       clac(triangle, x, y - 1, maxX - 1, maxY) + triangle[y][x]
//     );
//   }
//   return cache[y][x];
// }

// 滚动数组压缩空间
// 上面的解法需要另外构建dp数组 不难看出空间复杂度是o(n^2)
// 使用滚动数组压缩空间 可以通过复用一部分空间从而使得空间复杂度降低
// 从递推式我们可以看出 其实当前行只需要上一行累加数据即可。
// 利用滚动数组我们申请一个长度为2的二维数组存储即可。
// 注意的是，当前行的位置需要每一层计算的时候进行调换/(135行)
//  var minimumTotal = function(triangle) {
//     var dp = []
//     var rows = triangle.length
//     for(var j = 0 ; j < rows; j ++) {
//         dp[j] = []
//     }
//     dp[0][0] = triangle[0][0]
//     var columns = triangle[rows - 1].length
//     var result = Infinity
//     var len = triangle.length
//     for(var i = 1; i < rows; i ++) {
//         for(var j = 0; j < triangle[i].length; j ++) {
//             if(j == 0) {
//                 dp[1][j] = dp[0][j] + triangle[i][j]
//             }else if(j === triangle[i].length - 1) {
//                 dp[1][j] = dp[0][j - 1] + triangle[i][j]
//             }else {
//                 dp[1][j] = Math.min(dp[0][j - 1], dp[0][j]) + triangle[i][j]
//             }
//         }
//         swap(dp, 0, 1)
//     }
//      function swap (arr, i ,j ) {
//          var temp = arr[i]
//          arr[i] = arr[j]
//          arr[j] = temp
//      }
//     return Math.min.apply(null, dp[0])
// };

// 复用triangle空间
// 原先的 f(i,j) = min(f(i - 1, j -1), f(i - 1, j)) + (i,j)
// 现在复用了triangle变为
// triangle[i][j] += min(triangle[i - 1][j-1], triangle[i][j-1])
// 通过复用之前二维数组，从而使得空间复杂度再次降低到O(1)
var minimumTotal = function(triangle) {
  var rows = triangle.length;
  var columns = triangle[rows - 1].length;
  var result = Infinity;
  var len = triangle.length;
  for (var i = 1; i < rows; i++) {
    for (var j = 0; j < triangle[i].length; j++) {
      if (j == 0) {
        triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
      } else {
        triangle[i][j] =
          Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
      }
    }
  }
  return Math.min.apply(null, triangle[triangle.length - 1]);
};

/**
 * 解题报告：
 *
 * 暴力解：
 *   找出递归规律。这道题是一道二维数组题目。
 *   对于每个x,y的点，我们很容易发现。
 *   f(x, y) = min{f(x - 1, y - 1) + (x, y) , f(x, y - 1) + (x, y)}
 *   x > 0 && y > 0 && x < 当前列大小
 *   则我们很容易可以列举出递归方程。
 *
 * 使用暴力解法。在测试数据量大的情况下会Time Limit Exceeded
 *
 * 用记忆化搜索。
 *   之前有进行推导，递归子树有大量数据被重复计算，我们可以添加记忆化来对这些子树进行优化，剪枝。
 *   这样子进行优化操作以后，自底向上地计算，我们可以将数据跑过。
 *
 */
