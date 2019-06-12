/**
 * @param {number[]} nums
 * @return {number}
 */
// 题目的意思是
// [1,2,0] => 3
// [98, 99 , 100] => 1
// 需要注意的是后面这个[98, 99, 100]返回的是1

// 如果忽略题目要求。
// 使用一个hash来存储值，然后记录最大值。
// 遍历1 => 最大值。 然后判断hash内不存在的，从而获取缺失的值

var firstMissingPositive = function(nums) {
  var hash = {};
  var max = 0;
  for (var i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    hash[nums[i]] = i;
  }
  for (var j = 1; j <= max + 1; j++) {
    if (hash[j] === undefined) {
      return j;
    }
  }
};

// 但是题目由要求
// O(n)时间运行并使用恒定的额外空间。
// 所以要另寻他法
// 桶排序（对应的数，应该放在对应的位置上）

// [0,1,2] => [1,2,3]
// 缺失就是3
// [3,4,-1,1] => [1,2,3,4] 缺失就是2

// [3,4,-1,1]  nums[nums[i] - 1] != nums[i]
// 排序完以后应该是[1,2,3,4]
// i = 0
// nums[0] = 3
// 3的话应该在2的位置 arr[2] = 3

// 如果这样子不等于的话 应该是要有一次调换

// i = 0 nums[0] = 3 nums[2] != 3 => -1 != 3

//调换 -1 <=> 3

// 这样子就把"原本应该是3的元素放到了3"

// index + 1 应该等于元素

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums === null || nums.length == 0) {
    // 处理为空边界
    return 1;
  }
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    while (
      // 应该是使用while  直到当前点都为正确
      nums[i] > 0 && // 如果小于0 必定不是我们应有数组的值
      nums[i] <= nums.length && // 如果超过了长度 也肯定是不对的
      nums[nums[i] - 1] != nums[i] //
    ) {
      var temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  //  再遍历取对应值
  for (var j = 0; j < len; j++) {
    if (nums[j] != j + 1) {
      return j + 1;
    }
  }
  // 不存在的话一般是一些边界情况 ，全部按序[1] [1,2,3,4] 这种
  return len + 1;
};

// 第三种解法

// 设定负数为存在，正数为不存在
// 第一步将所有整数遍历  将小于0的数置为最大值
// 第二步根据遍历数据获取绝对值，判断值是否大于数组大小(排除一些过大值和max最大值)
// 将值置为负数
// 第三步  遍历数组，如果为正数则为缺失值
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums === null || nums.length == 0) {
    return 1;
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = Infinity;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    var num = Math.abs(nums[i]);
    if (num <= nums.length) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

// 最主要是认清楚index与元素值的之间联系

// index + 1 = item value
