/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

/**
 * 构建两个虚拟链表
 *  一个链表存储小于x的节点
 *  一个链表存储大于等于x的节点
 *
 *  合并两个链表即可
 */
var partition = function(head, x) {
  if (!head) return head;
  var dummyA = new ListNode(0);
  var dummyB = new ListNode(0);
  var vdummyA = dummyA,
    vdummyB = dummyB;

  while (head != null) {
    if (head.val < x) {
      vdummyA.next = head;
      vdummyA = vdummyA.next;
    } else {
      vdummyB.next = head;
      vdummyB = vdummyB.next;
    }
    head = head.next;
  }
  vdummyB.next = null;
  vdummyA.next = dummyB.next;

  return dummyA.next;
};
