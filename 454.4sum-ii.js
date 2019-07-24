/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

/**
 * 解题思路：
 * 第一种解法
 *   是将一个数组置于map中。
 *   用三层循环遍历，再去判断是否在map中。注意值可能有重复，比如两个1的话，此时结果每次累加应该是+2
 *   这种解法 显然是O(n)的空间 O(n^3)的时间，数据规模在[0,500]中 所以还是能跑过
 * 第二种解法
 *   是利用时间换取空间。
 *   用其中两个数组的和做map
 *   再利用双层循环进行判断处理。
 *   这种解法是O(n^2)空间 O(n^2)时间
 */
// var fourSumCount = function(A, B, C, D) {
//   var DRecordMap = new Map();
//   for (var d = 0; d < D.length; d++) {
//     if (DRecordMap.has(D[d])) {
//       DRecordMap.set(D[d], DRecordMap.get(D[d]) + 1);
//     } else {
//       DRecordMap.set(D[d], 1);
//     }
//   }
//   var res = 0;
//   for (var i = 0; i < A.length; i++) {
//     for (var j = 0; j < B.length; j++) {
//       for (var x = 0; x < C.length; x++) {
//         if (DRecordMap.has(0 - A[i] - B[j] - C[x])) {
//           res += DRecordMap.get(0 - A[i] - B[j] - C[x]);
//         }
//       }
//     }
//   }
//   return res;
// };
var fourSumCount = function(A, B, C, D) {
  var RecordMap = new Map();
  for (var i = 0; i < C.length; i++) {
    for (var j = 0; j < D.length; j++) {
      var sum = C[i] + D[j];
      if (RecordMap.has(sum)) {
        RecordMap.set(sum, RecordMap.get(sum) + 1);
      } else {
        RecordMap.set(sum, 1);
      }
    }
  }
  var res = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      if (RecordMap.has(0 - A[i] - B[j])) {
        res += RecordMap.get(0 - A[i] - B[j]);
      }
    }
  }
  return res;
};
