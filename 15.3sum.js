/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 题目原意是要结果集不重复的。
 *
 * 需要考虑的点。
 * 不同的三元组。
 * 如果有多个解，解的顺序
 * 如果没有解
 *
 */

// 一旦我们进行排序以后，对于每个点，我们都可以环顾四周来判断是否为重复点。
// 如果a+1点，需要判断是否处理过这个值。 则可以对a点进行判断。
// 一旦我们对入口进行重复值的判断，那么接下来就退化为two sum的解法了
// 在two sum的遍历过程中 我们仍然可以对值做唯一性的处理。
// 如33-37
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  var result = [];
  if (nums > 0) {
    // 优化， 如果排序后第一个数就大于0了。那么我们可以直接判断  不存在这样的结果集
    return result;
  }
  for (var i = 0; i < nums.length; i++) {
    if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      var left = i + 1,
        right = nums.length - 1,
        sum = 0 - nums[i];

      while (left < right) {
        if (nums[left] + nums[right] === sum) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (nums[left] + nums[right] < sum) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
