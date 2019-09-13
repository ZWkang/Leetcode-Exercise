/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 这道题是 102题的follow up
// 其实实际上很容易 直接将102题答案后序输入不就好了。。。
// 但是这里我们其实还是可以一样  但是是从队头插入就好啦。
var levelOrderBottom = function(root) {
  if (!root) return [];

  var queue = [root];
  var res = [];
  while (queue.length > 0) {
    var temp = [];
    var len = queue.length;
    for (var i = 0; i < len; i++) {
      var t = queue[0];
      queue.splice(0, 1);
      temp.push(t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    }
    res.unshift(temp);
  }
  return res;
};
