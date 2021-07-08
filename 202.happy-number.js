/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let RecordSet = new Set();
  let result = n;
  function calc(n) {
    var sum = 0;
    var temp = 0;
    // 这个解法应该是很常见的。
    // 之前做一些
    while (n) {
      temp = n % 10;
      sum += temp * temp;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  while (result != 1 && !RecordSet.has(result)) {
    RecordSet.add(result);
    result = calc(result);
  }
  return result === 1;
};

var isHappy = function(n) {
  function calc(n) {
    var sum = 0;
    var temp = 0;
    while (n) {
      temp = n % 10;
      sum += temp * temp;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  let slow = n;
  let fast = n;

  do {
    slow = calc(slow);
    fast = calc(fast);
    fast = calc(fast);
  } while (slow != fast);

  return slow === 1;
};
