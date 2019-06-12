// 暴力解
var twoSum = function(nums, target) {
  if (!nums || nums.length <= 1) {
    return [];
  }

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// hash table 解

// 利用hash table
// 用牺牲空间O(n)换取查找的O(1)
// hashtable 查找的时间是O(1)
// 整个算法时间复杂度是O(n)
// 空间复杂度是O(n)
var twoSum = function(nums, target) {
  if (!nums || nums.length <= 1) {
    return [];
  }
  var hashTable = {};
  for (var i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }
  for (var j = 0; j < nums.length; j++) {
    var rest = target - nums[j];
    if (hashTable[rest] && hashTable[rest] != j) {
      return [j, hashTable[rest]];
    }
  }
  return [];
};

// 参考方法中的one pass hash table
// 迭代过程中同时回顾hashtable的内容
// 时间复杂度O(n)
// 空间复杂度O(n)
var twoSum = function(nums, target) {
  if (!nums || nums.length <= 1) {
    return [];
  }
  var hashTable = {};

  for (var j = 0; j < nums.length; j++) {
    var rest = target - nums[j];
    if (hashTable[rest] !== undefined) {
      return [hashTable[rest], j];
    }
    hashTable[nums[j]] = j;
  }
  return [];
};
