/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 很直观的做法，原地in-place
// 也可以简短不用手动--
// 使用赋值同时--
// eg: nums1[len--] = nums1[m--]
var merge = function(nums1, m, nums2, n) {
  var len = m + n - 1;
  m -= 1;
  n -= 1;
  for (var i = len; i >= 0; i--) {
    if (m < 0) {
      nums1[i] = nums2[n];
      --n;
      continue;
    }
    if (n < 0) {
      nums1[i] = nums1[m];
      --m;
      continue;
    }
    if (nums1[m] < nums2[n]) {
      nums1[i] = nums2[n];
      --n;
    } else {
      nums1[i] = nums1[m];
      --m;
    }
  }
  return nums1;
};
