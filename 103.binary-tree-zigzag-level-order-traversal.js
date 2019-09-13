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

// 之字形输出每一层的数字
// 这样以来 在原来的基础上直接设置flag 在特定层数进行翻转操作。
// 即可

// 关联 102 107
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  var res = [];

  var queue = [root];

  var flag = true;
  while (queue.length) {
    var len = queue.length;
    var temp = [];
    for (var i = 0; i < len; i++) {
      var node = queue[0];
      temp.push(node.val);
      queue.splice(0, 1);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (!flag) {
      temp = temp.reverse();
    }
    flag = !flag;
    res.push(temp);
  }
  return res;
};
