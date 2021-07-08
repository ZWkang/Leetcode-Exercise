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
// 中序遍历 左根右
// 递归顺序理应如此
var inorderTraversal = function(root) {
  if (!root) return []; // 递归边界条件
  var result = [];
  if (root.left !== null) {
    result = result.concat(inorderTraversal(root.left));
  }
  result.push(root.val);
  if (root.right !== null) {
    result = result.concat(inorderTraversal(root.right));
  }
  return result;
};

// 非递归 使用辅助栈结构
var inorderTraversal = function(root) {
  if (!root) return [];
  var queue = [];
  var result = [];
  var current = root;
  while (queue.length > 0 || current != null) {
    while (current != null) {
      queue.push(current);
      current = current.left;
    }
    current = queue.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

// 非递归 尽可能地将左子树压入栈中
// 当某一个节点的左子树全部压入栈中 再来处理根节点，再处理右子树的左子树
// 此时的右子树就变成了之前的根节点。
