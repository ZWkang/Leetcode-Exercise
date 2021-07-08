/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * 链表问题找到操作步骤就比较好解
 *   这道题应该有三步：
 *    1. 找到链表中点。
 *    2. 反转链表后半段
 *    3. 将后半段依次插入前半段
 *
 *  具体步骤
 *   1. 利用快慢双指针找到终点。
 *      eg  1->2->3->4  一个指针走1步 一个指针走2步 这个时候走两步的走到了终点，则此时的慢指针应该就走到了终点
 */
var reorderList = function(head) {
  if (!head) return head;
  // 1. 找到中点

  var p1 = head;
  var p2 = head;
  while (p2.next != null && p2.next.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  var mid = p1.next;
  p1.next = null;
  var nextHalf = mid;

  var halfDummy = null;
  var cur = nextHalf;
  while (cur != null) {
    var next = cur.next;
    cur.next = halfDummy;
    halfDummy = cur;
    cur = next;
  }

  var dummy = new ListNode(0);
  dummy.next = head;
  while (halfDummy != null) {
    var next = halfDummy.next;
    var hnext = head.next;

    head.next = halfDummy;
    halfDummy.next = hnext;
    halfDummy = next;
    head = head.next.next;
  }
  return dummy.next;
};
