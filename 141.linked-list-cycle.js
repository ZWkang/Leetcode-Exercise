/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 解题思路
 *   环状链表有特征 就是没有末尾元素
 *   1. hash table 来判断节点是否再次出现。
 *   2. 快慢指针，快指针走2步 慢指针走1步，如果存在null 则必然为正常链表。如果快慢指针相遇了，则必然为环状链表
 *  实现较为简单
 */
var hasCycle = function(head) {
  if (head === null) return false;
  var dummy = new ListNode(0);
  dummy.next = head;

  var slowNode = dummy.next;
  var fastNode = dummy.next.next;
  while (
    fastNode != null &&
    fastNode.next != null &&
    fastNode.next.next != null
  ) {
    if (slowNode === fastNode) {
      return true;
    }
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  return false;
};
