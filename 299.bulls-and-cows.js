/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 1. 使用两次遍历  一次获取公牛 并且根据secret简历hash set
// 2. 遍历 从非公牛时候 通过比较hash set来获取奶牛的数量
var getHint = function(secret, guess) {
  var bull = 0,
    cow = 0;
  var hash = {};
  for (var i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      ++bull;
    } else {
      if (hash[secret[i]] === undefined) {
        hash[secret[i]] = 0;
      }
      ++hash[secret[i]];
    }
  }
  for (var i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i] && hash[guess[i]] > 0) {
      --hash[guess[i]];
      ++cow;
    }
  }
  return bull + "A" + cow + "B";
};

// 一个循环也可以做，只是需要同时维护secret, guess两个字符串的hash
// 前面双循环做法是确定一个hash set 遍历guess字符串的时候只要用递减hash就可以了
// 我们知道如果是要用hash来存储比如 1789 {1: 1, 7: 1, 8: 1, 9: 1}
// secret字符串来决定存储它们每次出现的次数
// guess 字符串来确定重复的次数
// 一次遍历的话如果一次只是处理一个字符串的hash的话。会导致缺少
// 例如

// "1807"
// "7810"
// 必定有一部分会缺少记录，导致错误。

// 所以要同时记录两个字符串的内容
// 同时我们知道，比对的话用hash 无非就是一个记录 一个递减，将hash的值尽可能抹为零。
// 例如回文也是这种做法。

// 那么 做下约定 secret字符串做递增 则guess字符串比对必然做递减。
// 当secret遇到的字符在hash中小于0 必然在guess已经出现过。
// 当guess 遇到的字符在hash中大于0 必然在secret已经出现过
// 则这两种情况cow 记录的奶牛数加1
var getHint = function(secret, guess) {
  var bull = 0,
    cow = 0;
  var hash = {};
  for (var i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      ++bull;
    } else {
      if (hash[secret[i]] === undefined) {
        hash[secret[i]] = 0;
      }
      if (hash[secret[i]] < 0) {
        ++cow;
      }
      ++hash[secret[i]];
      if (hash[guess[i]] === undefined) {
        hash[guess[i]] = 0;
      }
      if (hash[guess[i]] > 0) {
        ++cow;
      }
      --hash[guess[i]];
    }
  }
  return bull + "A" + cow + "B";
};
