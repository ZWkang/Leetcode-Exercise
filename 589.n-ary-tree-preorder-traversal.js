/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 借用辅助栈结构
var preorder = function(root) {
  if (!root) return [];

  var queue = [];
  var result = [];
  var stack;
  queue.push(root);
  while (queue.length > 0) {
    stack = queue.pop();
    result.push(stack.val);

    var len = stack.children ? stack.children.length - 1 : 0;
    while (len >= 0) {
      queue.push(stack.children[len--]);
    }
  }
  return result;
};

// 递归写法
var preorder = function(root) {
  var result = [];
  function countPreOrder(root) {
    if (!root) return [];

    result.push(root.val);
    var len = root.children ? root.children.length : 0;
    var index = 0;
    while (index < len) {
      countPreOrder(root.children[index++]);
    }
    return result;
  }
  return countPreOrder(root);
};
