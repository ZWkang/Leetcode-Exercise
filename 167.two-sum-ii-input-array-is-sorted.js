/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var start = 0,
    end = numbers.length;
  for (; start < end; start++) {
    var rest = target - numbers[start];
    if (rest >= numbers[start]) {
      for (var i = start + 1; i < end; i++) {
        if (target - numbers[start] === numbers[i]) {
          return [start + 1, i + 1];
        }
      }
    }
  }
  return [];
};

// 暴力解
// 双层循环，从当前循环符合的点 内层循环从下一个点继续
// 时间复杂度是O(n ^ 2)

// 从头开始遍历数组。
// 以当前点往后做剩余值寻找。
// 因为后面也是有序区间。所以可以用二分查找法。
// 这样一来 复杂度降低到O(n logn)

var twoSum = function(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    var rest = target - numbers[i];
    if (rest >= numbers[i]) {
      var search = searchSortedArray(numbers, i + 1, numbers.length - 1, rest);
      if (search !== false) {
        return [i + 1, search + 1];
      }
    }
  }
  return [];

  function searchSortedArray(arr, start, end, target) {
    while (start <= end) {
      var mid = start + Math.floor((end - start) / 2);
      if (target === arr[mid]) {
        return mid;
      } else if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false;
  }
};

// 对撞指针
// 双指针方法，可以降低到O(n) 使用两个辅助变量
// 充分利用两头一头递增一头递减的特性
// 两个指针 一个头一个尾
// 相加如果>target 则右指针向左移动一位
// 如果<target 则左指针向右移动一位
// 如果相等则返回结果
var twoSum = function(numbers, target) {
  var i = 0,
    j = numbers.length - 1;
  for (; i <= j; ) {
    if (numbers[i] + numbers[j] < target) {
      i++;
    } else if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else {
      j--;
    }
  }
  return [];
};
// 这种方法是O(n) 复杂度
