/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 树的问题 很多都可以变成递归问题解决。
// 处理一个节点可以映射到整棵树节点
// 选定目标 以及target
var hasPathSum = function(root, sum) {
  if (!root) return false;
  // 是叶子节点且当前sum = root.val的时候为true返回
  if (!root.left && !root.right && sum === root.val) return true;
  // 对left 跟right 递归处理
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
