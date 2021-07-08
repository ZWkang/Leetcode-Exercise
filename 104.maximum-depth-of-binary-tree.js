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
// 这道题与111.minimum-depth-of-binary-tree差不多，
// 只是min 需要变成max即可 求最大深度
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.left && root.right) {
    return 1 + maxDepth(root.right);
  } else if (!root.right && root.left) {
    return 1 + maxDepth(root.left);
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
