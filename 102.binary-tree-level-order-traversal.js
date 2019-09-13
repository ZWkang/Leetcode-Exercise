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
// 递归遍历左右 但是存储项要使用 [node, deps] 存储深度 方便用于存放于结果集内
// var levelOrder = function(root) {

//     var res = []
//     if(!root) return res

//     var queue = [[root, 0]]

//     while(queue.length > 0) {
//         var ta = queue.shift()
//         var [node, deps] = ta

//         if(res[deps] === undefined) {
//             res[deps] = []
//         }
//         res[deps].push(node.val)

//         if(node.left) {
//             queue.push([node.left, deps + 1])
//         }
//         if(node.right) {
//             queue.push([node.right, deps + 1])
//         }
//     }
//     return res
// };

// 这种方式是
// 每一次直接处理一层的队列
var levelOrder = function(root) {
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
    res.push(temp);
  }
  return res;
};
