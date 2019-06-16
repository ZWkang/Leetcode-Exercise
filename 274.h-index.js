/**
 * @param {number[]} citations
 * @return {number}
 */
// 这道题有点迷了。

// 题目大意是 H-index指的是
// n篇文章，其中h篇的引用次数大于h
// 首先这个数据文章数据是乱序的。
// 我们可以简单的先排序。
// 这里的定义，h篇的引用次数大于h
// 先进行排序，一旦排序过后，我们
// 至多有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）”
var hIndex = function(citations) {
  if (!citations || citations.length === null) return 0;
  var result = 0;
  citations = citations.sort((a, b) => a - b);

  for (var i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      result = Math.max(result, citations.length - i);
    }
  }
  return result;
};
