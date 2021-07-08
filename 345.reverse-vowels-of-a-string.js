/**
 * @param {string} s
 * @return {string}
 */

// 因为js字符串不可变。所以转换成数组做。
// 设定原音集。
// 左右指针遍历即可了。只是条件有所改变而已
var reverseVowels = function(s) {
  var left = 0,
    right = s.length - 1;
  var vowelLists = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var result = s.split("");
  while (left <= right) {
    if (
      vowelLists.indexOf(result[left]) >= 0 &&
      vowelLists.indexOf(result[right]) >= 0
    ) {
      swap(result, left++, right--);
    } else if (vowelLists.indexOf(result[left]) >= 0) {
      right--;
    } else {
      left++;
    }
  }
  return result.join("");

  function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
};
