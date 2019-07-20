/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Set这个数据结构，值是唯一的 常用于 查找有无的情况

// ES6提供了Set这种数据结构。 add has 等等api
// Array.from
// 前一个nums1 用作生成一个记录set
// 后一个nums2 则用来判断set中是否存在。
// 暂时的存储结果集也应该是set
// 因为nums2元素可能重复
var intersection = function(nums1, nums2) {
  let recordSet = new Set(nums1);
  let resultSet = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (recordSet.has(nums2[i])) {
      resultSet.add(nums2[i]);
    }
  }
  return Array.from(resultSet);
};
