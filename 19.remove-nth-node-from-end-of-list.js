/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 解题思路
 *
 * 这道题应该有几种思路解决
 * 1. 遍历一遍链表，拿到链表总长度，然后再遍历一遍链表找到对应节点 并删除
 * 2. 快慢指针，一遍遍历，然后拿到待删除节点前一个即可
 */
var removeNthFromEnd = function(head, n) {
  var fast = n;
  var dummy = new ListNode(0);
  dummy.next = head;
  var fastNode = dummy,
    slowNode = fastNode;
  while (fast >= 0) {
    --fast;
    fastNode = fastNode.next;
  }
  while (fastNode != null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }
  slowNode.next = slowNode.next.next;
  return dummy.next;
};
