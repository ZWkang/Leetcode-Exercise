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
// 前序遍历
var preorderTraversal = function(root) {
  if (!root || root.val === null) return []; // 边界处理
  var help = [],
    result = [],
    temp;
  help.push(root); // 借用辅助栈结构
  while (help.length > 0) {
    temp = help.pop();
    result.push(temp.val);

    if (temp.right !== null) {
      help.push(temp.right);
    }
    if (temp.left !== null) {
      help.push(temp.left);
    }
  }
  help = null;
  return result;
};
// 递归写法
var preorderTraversal = function(root) {
  if (!root || root.val === null) return [];
  var result = [];
  result.push(root.val);
  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));
  return result;
};
// 空间复杂度O(n)
