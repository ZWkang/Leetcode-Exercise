/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归深度跟着走
// 边界情况就是叶子节点
// 树节点的话需要对长度 + 1
// 当左子树为空时，return minDepth(right) + 1
// 当右子树为空时，return minDepth(left) + 1
// 都存在则返回较小值+1即可

// 深度优先搜索dfs即可
var minDepth = function(root) {
  if (!root) return 0;
  var left = minDepth(root.left);
  var right = minDepth(root.right);

  if (!left || !right) return left + right + 1;
  return Math.min(left, right) + 1;
};
