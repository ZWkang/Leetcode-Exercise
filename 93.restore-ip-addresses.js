/**
 * @param {string} s
 * @return {string[]}
 */
// 这道题也是排列组合问题，将所有符合情况的组合合并起来

// ip地址由4个字节，32位表示。
// 一个字节是8位，所以一个字节应该是[0,255]之间表示

// 引申出判定规则
// 1. 组合范围为[0,255]之间
// 2. 不允许012这种形式的字节位出现

// 具体一些细节例如current的设计上，就要在代码各自去体现。

// 我这里的current设计总形式上为xxx.xxxx.
// 以点为结尾。所以最后result push的时候要push current + str
// 且每次dfs的值是经过缩短的。
// 例如 123123123
// 这一次选择了123以后下一次传入dfs的时候就是123123了。
// 如果不对字符串进行缩短去除，那么可以选择传入一个index维护也可以。
// 具体要看实现，都可以
var restoreIpAddresses = function(s) {
  var current = "";
  var result = []; // 存储结果集
  function dfsGetIp(str, current, result, count) {
    if (count > 3 || str === "") return;
    if (count === 3 && str.length <= 3 && checkNumberIsWork(str)) {
      result.push(current + str);
      return;
    }
    var tempStr = "";
    for (var i = 1; i < 4; i++) {
      tempStr = str.substr(0, i);

      if (checkNumberIsWork(tempStr)) {
        dfsGetIp(
          str.substr(i, str.length),
          current + tempStr + ".",
          result,
          count + 1
        );
      }
    }
  }
  function checkNumberIsWork(str) {
    if (str.startsWith("0") && str !== "0") {
      return false;
    }
    var strToNumber = str | 0;
    return strToNumber <= 255 && strToNumber >= 0;
  }
  dfsGetIp(s, current, result, 0);
  return result;
};
