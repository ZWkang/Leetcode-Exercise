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
// 主要是操作链表指针的next值。
// 需要注意的是需要保存next值
// 步骤是
// prev 保存一个指向上一个指针的值，开头是null
// cur 保存的是当前的值
// next 保存的是下一个指针的值
// 反转的顺序是，
// cur.next 指向prev
// prev 指向cur
// cur 指向next
//  最后返回prev即可
var reverseList = function(head) {
  if (head === null) return head;
  var prev = null;
  var cur = head;
  while (cur !== null) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
