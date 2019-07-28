/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 步骤很简单
// 判断当前的值与next值即可。
// 注意的是next可能是空的处理
var deleteDuplicates = function(head) {
  if (head === null) return head;
  var cur = head;
  while (cur != null && cur.next != null) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
