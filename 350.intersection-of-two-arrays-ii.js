/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 解法很简单，一次遍历用map容器记载次数

// 再一次遍历对map容器减少，然后由此判断处结果集
// var intersect = function(nums1, nums2) {
//     let map = new Map()

//     for(let index = 0 ; index < nums1.length ; index ++) {
//         if(map.has(nums1[index])) {
//             map.set(nums1[index], map.get(nums1[index]) + 1)
//         }else {
//             map.set(nums1[index], 1)
//         }
//     }
//     var result = []
//     for(let index = 0 ; index < nums2.length ; index ++) {
//         if(map.has(nums2[index]) && map.get(nums2[index]) > 0) {
//             result.push(nums2[index])
//             map.set(nums2[index], map.get(nums2[index]) - 1)
//         }
//     }
//     return result
// };

// 这是一个简单的提升问题，假定都是有序的情况，我们可以使用两个指针，分别记录两个数组的开头位置。

// 如果相等，则压入结果集
// 如果a>b 则b++
// 如果a<b 则a++
// 这种加法是按照有序数组推理得到的。
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let len1 = nums1.length;
  let len2 = nums2.length;
  let first = 0;
  let second = 0;
  let result = [];
  while (first < len1 && second < len2) {
    if (nums1[first] === nums2[second]) {
      result.push(nums1[first]);
      first++;
      second++;
    } else if (nums1[first] < nums2[second]) {
      first++;
    } else {
      second++;
    }
  }
  return result;
};
