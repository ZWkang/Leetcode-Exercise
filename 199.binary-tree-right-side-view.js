/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 从右边看
/**

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
  */

// 其实就是每一层的最右侧节点。这样一来，只要层序遍历。
// 获取每一层的最后一个元素即可。
var rightSideView = function(root) {
  if (!root) return [];
  var res = [];
  var queue = [root];

  while (queue.length > 0) {
    res.push(queue[queue.length - 1].val);

    var len = queue.length;
    for (var i = 0; i < len; i++) {
      var node = queue[0];
      queue.splice(0, 1);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
};
